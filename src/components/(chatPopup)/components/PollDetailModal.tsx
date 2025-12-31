import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import {
  HiCheck,
  HiOutlinePencil,
  HiEllipsisVertical,
  HiListBullet,
  HiUser,
  HiEyeSlash,
  HiCheckCircle,
  HiPlus,
  HiLockClosed,
} from 'react-icons/hi2';
import type { Message } from '@/types/Message';
import type { GroupConversation } from '@/types/Group';
import type { User } from '@/types/User';
import { updateMessageApi, createMessageApi } from '@/fetch/messages';
import { useChatContext } from '@/context/ChatContext';
import { io } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import { getProxyUrl } from '@/utils/utils';
import Image from 'next/image';
import ICTrash from '@/components/svg/ICTrash';

interface PollDetailModalProps {
  isOpen: boolean;
  message: Message | null;
  onClose: () => void;
  onRefresh?: () => void;
}

export default function PollDetailModal({ isOpen, message, onClose, onRefresh }: PollDetailModalProps) {
  const { selectedChat, currentUser, isGroup } = useChatContext();
  const roomId = (() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  })();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const myId = String(currentUser._id);
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const votesMap = useMemo(() => (message?.pollVotes || {}) as Record<string, string[]>, [message]);
  const mySelected = useMemo(() => {
    const arr: string[] = [];
    (message?.pollOptions || []).forEach((opt) => {
      const vs = Array.isArray(votesMap[opt]) ? (votesMap[opt] as string[]) : [];
      if (vs.includes(myId)) arr.push(opt);
    });
    return arr;
  }, [votesMap, message, myId]);
  const [selected, setSelected] = useState<string[]>([]);
  const [adding, setAdding] = useState(false);
  const [newOption, setNewOption] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVotersPanel, setShowVotersPanel] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('');

  const [allowMultiple, setAllowMultiple] = useState(false);
  const [allowAddOptions, setAllowAddOptions] = useState(false);
  const [hideVoters, setHideVoters] = useState(false);
  const [hideResultsUntilVote, setHideResultsUntilVote] = useState(false);
  const [editEndAt, setEditEndAt] = useState<number | null>(null);
  const [deadlineOpen, setDeadlineOpen] = useState(false);
  const [deadlineMode, setDeadlineMode] = useState<'none' | 'time'>('none');
  const [deadlineInput, setDeadlineInput] = useState<string>('');

  const canLock = useMemo(() => {
    if (!message) return false;
    const sender = message.sender as User | string;
    const senderId = typeof sender === 'object' && sender ? String(sender._id) : String(sender);
    return senderId === String(currentUser._id);
  }, [message, currentUser._id]);
  const endAt = useMemo(() => (message?.pollEndAt ? Number(message.pollEndAt) : null), [message]);
  const isEnded = useMemo(() => (endAt ? Date.now() >= endAt : false), [endAt]);
  const isLocked = useMemo(() => !!(message?.isPollLocked || isEnded), [message?.isPollLocked, isEnded]);
  const members = useMemo(
    () => (isGroup ? (selectedChat as GroupConversation).members || [] : []),
    [isGroup, selectedChat],
  );
  const memberMap = useMemo(() => {
    const map = new Map<string, { name?: string; avatar?: string }>();
    (members as Array<{ _id?: string; id?: string; name?: string; avatar?: string }>).forEach((m) => {
      const id = String(m._id || m.id || '');
      if (id) map.set(id, { name: m.name, avatar: m.avatar });
    });
    return map;
  }, [members]);

  useEffect(() => {
    if (!message) return;
    const q = String(message.content || message.pollQuestion || '');
    const opts = Array.isArray(message.pollOptions) ? (message.pollOptions as string[]) : [];
    setQuestion(q);
    setOptions(opts);
    setEditing(false);
    setSelected(mySelected);
    setAdding(false);
    setNewOption('');

    setAllowMultiple(!!message.pollAllowMultiple);
    setAllowAddOptions(!!message.pollAllowAddOptions);
    setHideVoters(!!message.pollHideVoters);
    setHideResultsUntilVote(!!message.pollHideResultsUntilVote);
    setEditEndAt(message.pollEndAt ? Number(message.pollEndAt) : null);
  }, [message, mySelected]);

  const handleAddOption = () => {
    setAdding(true);
  };

  const handleAddOptionEditing = () => {
    setOptions((prev) => [...prev, '']);
  };

  const handleRemoveOptionEditing = (index: number) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChangeOption = (index: number, value: string) => {
    setOptions((prev) => prev.map((o, i) => (i === index ? value : o)));
  };

  const handleSave = async () => {
    if (!message) return;
    if (!canLock) return;
    const cleanOptions = options.map((o) => o.trim()).filter((o) => o);
    if (!question.trim() || cleanOptions.length < 2) return;
    setSaving(true);
    try {
      const now = Date.now();
      const prevVotes = (message.pollVotes || {}) as Record<string, string[]>;
      const nextVotes: Record<string, string[]> = {};
      cleanOptions.forEach((opt) => {
        const arr = Array.isArray(prevVotes[opt]) ? prevVotes[opt] : [];
        nextVotes[opt] = arr;
      });

      const updatePayload = {
        content: question.trim(),
        pollQuestion: question.trim(),
        pollOptions: cleanOptions,
        pollVotes: nextVotes,
        pollAllowMultiple: allowMultiple,
        pollAllowAddOptions: allowAddOptions,
        pollHideVoters: hideVoters,
        pollHideResultsUntilVote: hideResultsUntilVote,
        pollEndAt: editEndAt,
        editedAt: now,
        timestamp: now,
      };

      await updateMessageApi(String(message._id), updatePayload);
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.once('connect', async () => {
        socket.emit('join_room', roomId);
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        socket.emit('edit_message', {
          _id: message._id,
          roomId,
          ...updatePayload,
          originalContent: message.content,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          members,
          receiver,
        });
        socket.emit('message_edited', {
          _id: message._id,
          roomId,
          ...updatePayload,
          originalContent: message.content,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          members,
          receiver,
        });
        const who = currentUser.name || 'Ai đó';
        const notifyText = `${who} đã chỉnh sửa bình chọn: "${question.trim()}"`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(message._id),
        });
        if (notifyRes?.success) {
          socket.emit('send_message', {
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members,
            _id: notifyRes._id,
            type: 'notify',
            content: notifyText,
            timestamp: now,
            replyToMessageId: String(message._id),
          });
        }
        setTimeout(() => socket.disconnect(), 300);
      });
      if (onRefresh) {
        await onRefresh();
      }
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const toggleSelect = (opt: string) => {
    if (isLocked) return;
    const allowMultiple = !!message?.pollAllowMultiple;
    setSelected((prev) => {
      const has = prev.includes(opt);
      if (allowMultiple) return has ? prev.filter((o) => o !== opt) : [...prev, opt];
      return has ? [] : [opt];
    });
  };

  const previewVotesMap = useMemo(() => {
    const out: Record<string, string[]> = {};
    (message?.pollOptions || []).forEach((opt) => {
      const base = Array.isArray(votesMap[opt]) ? [...(votesMap[opt] as string[])] : [];
      const withoutMe = base.filter((u) => u !== myId);
      const nowSelected = selected.includes(opt);
      out[opt] = nowSelected ? [...withoutMe, myId] : withoutMe;
    });
    return out;
  }, [message, votesMap, selected, myId]);
  const votersSet = useMemo(() => {
    const s = new Set<string>();
    (message?.pollOptions || []).forEach((opt) => {
      const arr = Array.isArray(previewVotesMap[opt]) ? (previewVotesMap[opt] as string[]) : [];
      arr.forEach((id) => s.add(String(id)));
    });
    return s;
  }, [message, previewVotesMap]);
  const totalVotes = useMemo(() => {
    let total = 0;
    (message?.pollOptions || []).forEach((opt) => {
      const arr = Array.isArray(previewVotesMap[opt]) ? (previewVotesMap[opt] as string[]) : [];
      total += arr.length;
    });
    return total;
  }, [message, previewVotesMap]);
  const notVotedIds = useMemo(() => {
    const s = new Set<string>();
    (members as Array<{ _id?: string; id?: string }>).forEach((m) => {
      const id = String(m._id || m.id || '');
      if (id) s.add(id);
    });
    votersSet.forEach((id) => s.delete(id));
    return Array.from(s);
  }, [members, votersSet]);

  const handleConfirmVote = async () => {
    if (!message) return;
    if (isLocked) return;
    const prevVotes = (message.pollVotes || {}) as Record<string, string[]>;
    const nextVotes: Record<string, string[]> = {};
    (message.pollOptions || []).forEach((opt) => {
      const arr = Array.isArray(prevVotes[opt]) ? [...prevVotes[opt]] : [];
      const filtered = arr.filter((u) => u !== myId);
      nextVotes[opt] = filtered;
    });
    selected.forEach((opt) => {
      const arr = Array.isArray(nextVotes[opt]) ? nextVotes[opt] : [];
      if (!arr.includes(myId)) nextVotes[opt] = [...arr, myId];
    });
    setSaving(true);
    try {
      const now = Date.now();
      await updateMessageApi(String(message._id), { pollVotes: nextVotes, editedAt: now, timestamp: now });

      // 🔥 EMIT SOCKET EVENT ĐỂ CẬP NHẬT REALTIME
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.once('connect', async () => {
        socket.emit('join_room', roomId);
        socket.emit('edit_message', {
          _id: message._id,
          roomId,
          pollVotes: nextVotes,
          editedAt: now,
          timestamp: now,
        });

        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const who = message.pollHideVoters ? 'Một thành viên' : currentUser.name || 'Ai đó';
        const opted = selected.join(', ');
        const notifyText = `${who} đã bình chọn:  ${opted} trong bình chọn: "${question}"`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: myId,
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(message._id),
        });

        if (notifyRes?.success) {
          socket.emit('send_message', {
            roomId,
            sender: myId,
            senderName: currentUser.name,
            isGroup,
            receiver,
            members,
            _id: notifyRes._id,
            type: 'notify',
            content: notifyText,
            timestamp: now,
            replyToMessageId: String(message._id),
          });
        }
        setTimeout(() => socket.disconnect(), 300);
      });

      if (onRefresh) {
        await onRefresh();
      }
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const handleAddOptionConfirm = async () => {
    if (!message) return;
    if (isLocked) return;
    const text = newOption.trim();
    if (!text) return;
    if (options.map((o) => o.toLowerCase()).includes(text.toLowerCase())) {
      setAdding(false);
      setNewOption('');
      return;
    }
    const nextOptions = [...options, text];
    setSaving(true);
    try {
      const now = Date.now();
      await updateMessageApi(String(message._id), { pollOptions: nextOptions, editedAt: now, timestamp: now });
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.once('connect', async () => {
        socket.emit('join_room', roomId);
        socket.emit('edit_message', {
          _id: message._id,
          roomId,
          pollOptions: nextOptions,
          editedAt: now,
          timestamp: now,
        });
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const who = message.pollHideVoters ? 'Một thành viên' : currentUser.name || 'Ai đó';
        const notifyText = `${who} đã thêm lựa chọn "${text}" trong bình chọn: "${question}"`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(message._id),
        });
        if (notifyRes?.success) {
          socket.emit('send_message', {
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members,
            _id: notifyRes._id,
            type: 'notify',
            content: notifyText,
            timestamp: now,
            replyToMessageId: String(message._id),
          });
        }
        setTimeout(() => socket.disconnect(), 300);
      });
      if (onRefresh) {
        await onRefresh();
      }
      setOptions(nextOptions);
      setAdding(false);
      setNewOption('');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleLock = async () => {
    if (!message || !canLock) return;
    const currentlyLocked = message.isPollLocked || isEnded;
    const nextLockedState = !currentlyLocked;
    if (!nextLockedState && message.pollEndAt != null) return;

    setSaving(true);
    try {
      const now = Date.now();
      const updateData = nextLockedState
        ? { isPollLocked: true, pollLockedAt: now, editedAt: now, timestamp: now }
        : {
            isPollLocked: false,
            editedAt: now,
            timestamp: now,
          };

      await updateMessageApi(String(message._id), updateData);
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.emit('edit_message', { _id: message._id, roomId, ...updateData });
      const name = currentUser.name;

      if (nextLockedState) {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members2 = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const endStr = new Date(now).toLocaleString('vi-VN');
        const notifyText = `${name} đã khóa bình chọn: "${String(message.content || message.pollQuestion || '')}" (kết thúc lúc ${endStr})`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(message._id),
        });
        if (notifyRes?.success) {
          socket.emit('send_message', {
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members: members2,
            _id: notifyRes._id,
            type: 'notify',
            content: notifyText,
            timestamp: now,
            replyToMessageId: String(message._id),
          });
        }
      } else {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members2 = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const notifyText = `${name} đã mở khóa bình chọn: "${String(message.content || message.pollQuestion || '')}"`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(message._id),
        });
        if (notifyRes?.success) {
          socket.emit('send_message', {
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members: members2,
            _id: notifyRes._id,
            type: 'notify',
            content: notifyText,
            timestamp: now,
            replyToMessageId: String(message._id),
          });
        }
      }
      socket.disconnect();
      if (onRefresh) {
        await onRefresh();
      }
      onClose();
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen || !message) return null;

  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/50'
      } backdrop-blur-sm`}
    >
      <div className="bg-white w-full h-full rounded-none overflow-hidden flex flex-col relative">
        <div className="px-3 pt-3 pb-2 bg-white text-black border-b border-gray-200 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={onClose} disabled={saving} className="cursor-pointer p-2">
                <HiX className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <h3 className="text-xl">Bình chọn</h3>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
              >
                <HiEllipsisVertical className="w-5 h-5" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[100]">
                  {canLock && !(message.pollEndAt != null && isEnded) && (
                    <div className="">
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setEditing(true);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Chỉnh sửa bình chọn
                      </button>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          handleToggleLock();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-800 cursor-pointer"
                      >
                        {message.isPollLocked || isEnded ? 'Mở khóa bình chọn' : 'Khóa bình chọn'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {(() => {
            const showResults = !(message?.pollHideResultsUntilVote && mySelected.length === 0);
            return !editing ? (
              <>
                <p className="text-[1rem] text-gray-800 whitespace-pre-wrap break-words">{question}</p>
                {isLocked && (
                  <p className="text-[1rem] text-gray-500 mt-1">
                    Kết thúc lúc{' '}
                    {new Date(endAt || message.pollLockedAt || message.editedAt || message.timestamp).toLocaleString(
                      'vi-VN',
                    )}
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    {message.pollAllowMultiple ? (
                      <>
                        <HiListBullet className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Chọn nhiều phương án</span>
                      </>
                    ) : (
                      <>
                        <HiCheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Chọn 1 phương án</span>
                      </>
                    )}
                  </div>
                  {message.pollHideVoters && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <HiEyeSlash className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Ẩn người bình chọn</span>
                    </div>
                  )}
                  {message.pollAllowAddOptions && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <HiPlus className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Cho phép thêm phương án</span>
                    </div>
                  )}
                  {message.pollHideResultsUntilVote && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <HiLockClosed className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Ẩn kết quả khi chưa bình chọn</span>
                    </div>
                  )}
                </p>
                <div className="border-t border-gray-200" />
                {message?.pollHideVoters || !showResults ? null : (
                  <button
                    onClick={() => setShowVotersPanel(true)}
                    className="cursor-pointer text-sm text-blue-600 hover:underline mt-2"
                  >
                    {`${votersSet.size} người đã bình chọn`}
                  </button>
                )}
                {!showResults && <p className="text-sm text-gray-500 mt-2">Bình chọn để xem kết quả</p>}
                <div className="space-y-2 mt-2">
                  {options.map((opt, idx) => {
                    const votedCount = Array.isArray(previewVotesMap[opt])
                      ? (previewVotesMap[opt] as string[]).length
                      : 0;
                    const active = selected.includes(opt);
                    const arr = Array.isArray(previewVotesMap[opt]) ? (previewVotesMap[opt] as string[]) : [];
                    const lastUid = arr.length ? String(arr[arr.length - 1]) : '';
                    const lastInfo = lastUid ? memberMap.get(lastUid) : undefined;
                    // const showResults = ... (already defined in outer scope)
                    const percent = showResults && totalVotes > 0 ? (votedCount / totalVotes) * 100 : 0;

                    return (
                      <button
                        key={idx}
                        onClick={() => toggleSelect(opt)}
                        disabled={isLocked}
                        className={`w-full cursor-pointer relative bg-gray-100 overflow-hidden px-4 py-3 rounded-xl  text-left transition-colors ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div
                          className={`absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${active ? 'bg-blue-200' : 'bg-blue-200'}`}
                          style={{ width: `${percent}%` }}
                        />
                        <div className="flex items-center gap-3 relative z-10 w-full">
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${
                              active ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'
                            }`}
                          >
                            {active && <HiCheck className="w-3 h-3" />}
                          </span>
                          <span className="flex-1 min-w-0 text-[1rem] leading-relaxed break-words whitespace-pre-wrap">
                            {opt}
                          </span>
                          {showResults && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{votedCount}</span>
                              {!message?.pollHideVoters && lastUid ? (
                                lastInfo?.avatar ? (
                                  <div
                                    className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                                    title={lastInfo?.name}
                                  >
                                    <Image
                                      src={getProxyUrl(lastInfo.avatar)}
                                      alt=""
                                      width={24}
                                      height={24}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    title={lastInfo?.name}
                                    className="w-6 h-6 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center font-bold text-[10px]"
                                  >
                                    <Image
                                      src="/logo/avata.webp"
                                      alt=""
                                      width={64}
                                      height={64}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )
                              ) : null}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3">
                  {!adding ? (
                    message?.pollAllowAddOptions && !isLocked ? (
                      <button
                        onClick={handleAddOption}
                        className="cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm"
                      >
                        + Thêm phương án
                      </button>
                    ) : null
                  ) : (
                    <div className="flex gap-2">
                      <input
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddOptionConfirm();
                          }
                        }}
                        className="flex-1 px-3 py-2 bg-gray-50 outline-none border-2 border-gray-200 rounded-2xl"
                        placeholder="Nhập lựa chọn"
                      />
                      <button
                        onClick={handleAddOptionConfirm}
                        disabled={isLocked}
                        className="px-2 py-2 cursor-pointer bg-blue-600 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          setAdding(false);
                          setNewOption('');
                        }}
                        className="px-2 py-2 text-red-600 cursor-pointer bg-red-50 text-gray-700 rounded-2xl"
                      >
                        <ICTrash className="text-red-600" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-2">Câu hỏi *</label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white"
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">Tùy chọn *</label>
                <div className="space-y-2">
                  {options.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleChangeOption(idx, e.target.value)}
                        className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                      <button
                        onClick={() => handleRemoveOptionEditing(idx)}
                        className="px-3 py-2 cursor-pointer  text-red-600  disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ICTrash className="w-10 h-10" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleAddOptionEditing}
                  className="cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm"
                >
                  + Thêm lựa chọn
                </button>

                {/* <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Đặt thời hạn</p>
                      <p className="text-xs text-gray-500">
                        {editEndAt ? new Date(editEndAt).toLocaleString('vi-VN') : 'Không có thời hạn'}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setDeadlineOpen(true);
                        setDeadlineMode(editEndAt ? 'time' : 'none');
                        setDeadlineInput(
                          editEndAt
                            ? new Date(editEndAt).toISOString().slice(0, 16)
                            : new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().slice(0, 16),
                        );
                      }}
                      className="cursor-pointer px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-semibold"
                    >
                      Thiết lập
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Ẩn người bình chọn</span>
                    <button
                      onClick={() => setHideVoters((v) => !v)}
                      className={`cursor-pointer w-12 h-6 rounded-full transition ${
                        hideVoters ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-pressed={hideVoters}
                    >
                      <span
                        className={`block w-6 h-6 bg-white rounded-full transform transition ${
                          hideVoters ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Ẩn kết quả khi chưa bình chọn</span>
                    <button
                      onClick={() => setHideResultsUntilVote((v) => !v)}
                      className={`cursor-pointer w-12 h-6 rounded-full transition ${
                        hideResultsUntilVote ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-pressed={hideResultsUntilVote}
                    >
                      <span
                        className={`block w-6 h-6 bg-white rounded-full transform transition ${
                          hideResultsUntilVote ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Chọn nhiều phương án</span>
                    <button
                      onClick={() => setAllowMultiple((v) => !v)}
                      className={`cursor-pointer w-12 h-6 rounded-full transition ${
                        allowMultiple ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-pressed={allowMultiple}
                    >
                      <span
                        className={`block w-6 h-6 bg-white rounded-full transform transition ${
                          allowMultiple ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Có thể thêm phương án</span>
                    <button
                      onClick={() => setAllowAddOptions((v) => !v)}
                      className={`cursor-pointer w-12 h-6 rounded-full transition ${
                        allowAddOptions ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-pressed={allowAddOptions}
                    >
                      <span
                        className={`block w-6 h-6 bg-white rounded-full transform transition ${
                          allowAddOptions ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div> */}
              </>
            );
          })()}
        </div>
        <div className="px-6 pb-6 pt-2 border-t border-gray-200 flex-shrink-0">
          {!editing ? (
            <button
              onClick={handleConfirmVote}
              disabled={saving || isLocked}
              className={`w-full cursor-pointer py-3.5 rounded-2xl font-semibold ${
                selected.length > 0 && !isLocked
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Bình chọn
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditing(false);
                  if (message) {
                    const q = String(message.content || message.pollQuestion || '');
                    const opts = Array.isArray(message.pollOptions) ? (message.pollOptions as string[]) : [];
                    setQuestion(q);
                    setOptions(opts);
                  }
                }}
                disabled={saving}
                className="flex-1 cursor-pointer py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-2xl"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 cursor-pointer py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl"
              >
                Lưu
              </button>
            </div>
          )}
        </div>
        {showVotersPanel && (
          <>
            <div
              className="absolute inset-0 bg-black/10"
              onClick={() => {
                setShowVotersPanel(false);
                setActiveTab('');
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white h-[50vh] rounded-t-2xl shadow-2xl border-t border-gray-200 z-[100] ">
              <div className="px-4 pt-3 pb-2 flex gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar">
                {(message.pollOptions || []).map((opt) => {
                  const cnt = Array.isArray(previewVotesMap[opt]) ? (previewVotesMap[opt] as string[]).length : 0;
                  const active = activeTab === opt || (!activeTab && opt === (message.pollOptions || [])[0]);

                  return (
                    <button
                      key={opt}
                      onClick={() => setActiveTab(opt)}
                      className={`flex items-center shrink-0 text-sm cursor-pointer px-2 ${
                        active ? 'border-b border-black text-black' : 'text-black'
                      }`}
                    >
                      <span className="truncate">{opt}</span>
                      <span className="ml-1">({cnt})</span>
                    </button>
                  );
                })}

                <button
                  onClick={() => setActiveTab('__none__')}
                  className={`shrink-0 px-3 py-2 text-sm cursor-pointer whitespace-nowrap ${
                    activeTab === '__none__' ? 'border-b border-black text-black' : 'text-black'
                  }`}
                >
                  Chưa bình chọn
                </button>
              </div>

              <div className="p-4 max-h-[40vh] overflow-y-auto">
                {(() => {
                  const ids =
                    activeTab === '__none__'
                      ? notVotedIds
                      : (Array.isArray(previewVotesMap[activeTab]) ? (previewVotesMap[activeTab] as string[]) : []).map(
                          (x) => String(x),
                        );
                  if (ids.length === 0) return <p className="px-1 text-sm text-gray-500">Chưa có ai</p>;
                  return ids.map((uid) => {
                    const info = memberMap.get(String(uid));
                    return (
                      <div key={uid} className="flex items-center gap-3 px-2 py-2">
                        {info?.avatar ? (
                          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                            <Image
                              width={25}
                              height={25}
                              src={getProxyUrl(info.avatar)}
                              alt={info?.name || String(uid)}
                              className=" w-full h-full object-cover rounded-full"
                            />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                            <Image
                              src="/logo/avata.webp"
                              alt={info?.name || 'User'}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span className="text-sm">{info?.name || String(uid)}</span>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </>
        )}
        {deadlineOpen && (
          <>
            <div className="absolute inset-0 bg-black/10" onClick={() => setDeadlineOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 p-4 z-[110]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-800">Đặt thời hạn</p>
                <button onClick={() => setDeadlineOpen(false)} className="cursor-pointer text-gray-500">
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" checked={deadlineMode === 'none'} onChange={() => setDeadlineMode('none')} />
                  Không giới hạn thời gian
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" checked={deadlineMode === 'time'} onChange={() => setDeadlineMode('time')} />
                  Chọn thời điểm kết thúc
                </label>
                {deadlineMode === 'time' && (
                  <input
                    type="datetime-local"
                    value={deadlineInput}
                    onChange={(e) => setDeadlineInput(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      if (deadlineMode === 'none') {
                        setEditEndAt(null);
                        setDeadlineOpen(false);
                        return;
                      }
                      const dt = Date.parse(deadlineInput);
                      if (!Number.isNaN(dt)) {
                        setEditEndAt(dt);
                        setDeadlineOpen(false);
                      }
                    }}
                    className="flex-1 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm"
                  >
                    Xong
                  </button>
                  <button
                    onClick={() => setDeadlineOpen(false)}
                    className="flex-1 cursor-pointer py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-sm"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  return isDesktop && target ? createPortal(modalNode, target) : modalNode;
}
