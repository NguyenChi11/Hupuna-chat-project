import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import { HiCheck, HiOutlinePencil, HiEllipsisVertical } from 'react-icons/hi2';
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
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
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
  const canLock = useMemo(() => {
    if (!message) return false;
    const sender = message.sender as User | string;
    const senderId = typeof sender === 'object' && sender ? String(sender._id) : String(sender);
    return isGroup ? senderId === String(currentUser._id) : false;
  }, [message, isGroup, currentUser._id]);
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
  }, [message, mySelected]);

  const handleAddOption = () => {
    setAdding(true);
  };

  const handleAddOptionEditing = () => {
    if (message?.isPollLocked) return;
    setOptions((prev) => [...prev, '']);
  };

  const handleRemoveOptionEditing = (index: number) => {
    if (message?.isPollLocked) return;
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChangeOption = (index: number, value: string) => {
    setOptions((prev) => prev.map((o, i) => (i === index ? value : o)));
  };

  const handleSave = async () => {
    if (!message) return;
    if (message.isPollLocked) return;
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
      await updateMessageApi(String(message._id), {
        content: question.trim(),
        pollQuestion: question.trim(),
        pollOptions: cleanOptions,
        pollVotes: nextVotes,
        editedAt: now,
        timestamp: now,
      });
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.once('connect', async () => {
        socket.emit('join_room', roomId);
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        socket.emit('edit_message', {
          _id: message._id,
          roomId,
          newContent: question.trim(),
          pollQuestion: question.trim(),
          pollOptions: cleanOptions,
          pollVotes: nextVotes,
          editedAt: now,
          timestamp: now,
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
    if (message?.isPollLocked) return;
    setSelected((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
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
    if (message.isPollLocked) return;
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
        const who = currentUser.name || 'Ai đó';
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
    if (message.isPollLocked) return;
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
        const who = currentUser.name || 'Ai đó';
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
    const next = !message.isPollLocked;
    setSaving(true);
    try {
      const now = Date.now();
      const updateData = next
        ? { isPollLocked: true, pollLockedAt: now, editedAt: now, timestamp: now }
        : { isPollLocked: false, editedAt: now, timestamp: now };
      await updateMessageApi(String(message._id), updateData);
      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socket.emit('edit_message', { _id: message._id, roomId, ...updateData });
      const name = currentUser.name;
      if (next) {
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
                  {canLock && (
                    <div className=''>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setEditing(true);
                        }}
                        disabled={message.isPollLocked}
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
                        {message.isPollLocked ? 'Mở khóa bình chọn' : 'Khóa bình chọn'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-6 py-5 space-y-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {!editing ? (
            <>
              <p className="text-[1rem] text-gray-800 whitespace-pre-wrap break-words">{question}</p>
              {message.isPollLocked && (
                <p className="text-[1rem] text-gray-500 mt-1">
                  Kết thúc lúc{' '}
                  {new Date(message.pollLockedAt || message.editedAt || message.timestamp).toLocaleString('vi-VN')}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2">Chọn được nhiều phương án</p>
              <div className="border-t border-gray-200" />
              <button
                onClick={() => setShowVotersPanel(true)}
                className="cursor-pointer text-sm text-blue-600 hover:underline mt-2"
              >
                {`${votersSet.size} người đã bình chọn`}
              </button>
              <div className="space-y-2 mt-2">
                {options.map((opt, idx) => {
                  const votedCount = Array.isArray(previewVotesMap[opt])
                    ? (previewVotesMap[opt] as string[]).length
                    : 0;
                  const active = selected.includes(opt);
                  const arr = Array.isArray(previewVotesMap[opt]) ? (previewVotesMap[opt] as string[]) : [];
                  const lastUid = arr.length ? String(arr[arr.length - 1]) : '';
                  const lastInfo = lastUid ? memberMap.get(lastUid) : undefined;
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleSelect(opt)}
                      disabled={message.isPollLocked}
                      className={`w-full cursor-pointer px-4 py-3 rounded-xl border text-left transition-colors flex items-center gap-3 ${
                        active
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-800'
                      } ${message.isPollLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-5 h-5 rounded-full border ${
                          active ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'
                        }`}
                      >
                        {active && <HiCheck className="w-3 h-3" />}
                      </span>
                      <span className="flex-1 block max-w-full break-words whitespace-pre-wrap text-[1rem] mr-1">
                        {opt}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{votedCount}</span>
                        {lastUid ? (
                          lastInfo?.avatar ? (
                            <Image
                              width={20}
                              height={20}
                              src={getProxyUrl(lastInfo.avatar)}
                              alt={lastInfo?.name || lastUid}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                              {lastInfo?.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                          )
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3">
                {!adding ? (
                  <button
                    onClick={handleAddOption}
                    className="cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm"
                    disabled={message.isPollLocked}
                  >
                    + Thêm phương án
                  </button>
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
                      disabled={message.isPollLocked}
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
                      <ICTrash className='text-red-600'/>
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
                      disabled={message.isPollLocked}
                      className="px-3 py-2 cursor-pointer  text-red-600  disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ICTrash />
                    </button>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleAddOptionEditing}
                disabled={message.isPollLocked}
                className="cursor-pointer px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold text-sm"
              >
                + Thêm lựa chọn
              </button>
            </>
          )}
        </div>
        <div className="px-6 pb-6 pt-2 border-t border-gray-200 flex-shrink-0">
          {!editing ? (
            <button
              onClick={handleConfirmVote}
              disabled={saving || message.isPollLocked}
              className={`w-full cursor-pointer py-3.5 rounded-2xl font-semibold ${
                selected.length > 0 && !message.isPollLocked
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
                          <Image
                            width={25}
                            height={25}
                            src={getProxyUrl(info.avatar)}
                            alt={info?.name || String(uid)}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                            {info?.name?.charAt(0).toUpperCase() || 'U'}
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
      </div>
    </div>
  );
  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  return isDesktop && target ? createPortal(modalNode, target) : modalNode;
}
