import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { HiEllipsisVertical, HiLockClosed, HiLockOpen } from 'react-icons/hi2';
import { useChatContext } from '@/context/ChatContext';
import type { Message } from '@/types/Message';
import type { GroupConversation, MemberInfo } from '@/types/Group';
import type { User } from '@/types/User';
import { readMessagesApi, createMessageApi, updateMessageApi } from '@/fetch/messages';
import { io } from 'socket.io-client';
import { resolveSocketUrl, getProxyUrl } from '@/utils/utils';
import CreatePollModal from './CreatePollModal';
import PollDetailModal from './PollDetailModal';
import Image from 'next/image';

interface PollListProps {
  onClose: () => void;
  onRefresh?: () => void;
  embedded?: boolean;
}

export default function PollList({ onClose, onRefresh, embedded = false }: PollListProps) {
  // ✅ BỎ DÒNG NÀY - Không cần nữa
  // const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL as string | undefined;

  const { selectedChat, currentUser, isGroup } = useChatContext();
  const roomId = useMemo(() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  }, [isGroup, selectedChat, currentUser]);
  const [items, setItems] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [detailMsg, setDetailMsg] = useState<Message | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await readMessagesApi(roomId, {
        limit: 200,
        sortOrder: 'desc',
        extraFilters: { type: 'poll', isRecalled: { $ne: true } },
      });
      const data = Array.isArray(res.data) ? (res.data as Message[]) : [];
      setItems(data);
    } catch {
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!openMenuId) return;
      const menuElement = menuRefs.current.get(openMenuId);
      if (menuElement && !menuElement.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMenuId]);

  useEffect(() => {
    socketRef.current?.disconnect();

    // ✅ DÙNG resolveSocketUrl() thống nhất
    socketRef.current = io(resolveSocketUrl(), {
      transports: ['websocket'],
      withCredentials: false,
    });

    socketRef.current.emit('join_room', roomId);
    socketRef.current.on('receive_message', (data: Message) => {
      if (String(data.roomId) !== String(roomId) || data.type !== 'poll') return;
      setItems((prev) => {
        const map = new Map<string, Message>();
        [...prev, data].forEach((m) => map.set(String(m._id), m));
        return Array.from(map.values()).sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      });
    });
    socketRef.current.on(
      'message_edited',
      (data: {
        _id: string;
        roomId: string;
        content?: string;
        editedAt?: number;
        pollQuestion?: string;
        pollOptions?: string[];
        pollVotes?: Record<string, string[]>;
        isPollLocked?: boolean;
        pollLockedAt?: number;
        timestamp?: number;
        isPinned?: boolean;
      }) => {
        if (String(data.roomId) !== String(roomId)) return;
        setItems((prev) => {
          const updated = prev.map((m) =>
            String(m._id) === String(data._id)
              ? {
                  ...m,
                  content: data.content ?? m.content,
                  editedAt: data.editedAt ?? m.editedAt,
                  pollQuestion: data.pollQuestion ?? m.pollQuestion,
                  pollOptions: data.pollOptions ?? m.pollOptions,
                  pollVotes: data.pollVotes ?? m.pollVotes,
                  isPollLocked: data.isPollLocked ?? m.isPollLocked,
                  pollLockedAt: data.pollLockedAt ?? m.pollLockedAt,
                  timestamp: data.timestamp ?? m.timestamp,
                  isPinned: typeof data.isPinned === 'boolean' ? data.isPinned : m.isPinned,
                }
              : m,
          );
          return updated.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
        });
      },
    );
    socketRef.current.on(
      'edit_message',
      (data: { _id: string; roomId: string; newContent: string; editedAt: number }) => {
        if (String(data.roomId) !== String(roomId)) return;
        setItems((prev) =>
          prev.map((m) =>
            String(m._id) === String(data._id)
              ? {
                  ...m,
                  content: data.newContent,
                  editedAt: data.editedAt,
                  originalContent: m.originalContent || m.content,
                }
              : m,
          ),
        );
      },
    );
    socketRef.current.on('message_deleted', (data: { _id: string; roomId: string }) => {
      if (String(data.roomId) !== String(roomId)) return;
      setItems((prev) => prev.filter((m) => String(m._id) !== String(data._id)));
    });
    socketRef.current.on('message_pinned', (data: { _id: string; roomId: string; isPinned: boolean }) => {
      if (String(data.roomId) !== String(roomId)) return;
      setItems((prev) =>
        prev.map((m) => (String(m._id) === String(data._id) ? { ...m, isPinned: !!data.isPinned } : m)),
      );
    });
    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, [roomId, load]); // ✅ BỎ SOCKET_URL khỏi dependencies

  const handleCreate = async ({ question, options }: { question: string; options: string[] }) => {
    const q = question.trim();
    const raw = options.map((o) => o.trim()).filter((o) => o);
    const lowers = Array.from(new Set(raw.map((o) => o.toLowerCase())));
    const unique = lowers.map((lo) => raw.find((x) => x.toLowerCase() === lo) as string);
    if (!q || unique.length < 2) return;
    try {
      const createRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'poll',
        content: q,
        timestamp: Date.now(),
        pollQuestion: q,
        pollOptions: unique,
        pollVotes: {},
        isPollLocked: false,
      });
      if (createRes?.success) {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const sockBase = {
          roomId,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
        };
        const name = currentUser.name;
        if (typeof createRes._id === 'string') {
          socketRef.current?.emit('send_message', {
            ...sockBase,
            _id: createRes._id,
            type: 'poll',
            content: q,
            timestamp: Date.now(),
            pollQuestion: q,
            pollOptions: unique,
            pollVotes: {},
            isPollLocked: false,
          });
          const notify = await createMessageApi({
            roomId,
            sender: String(currentUser._id),
            type: 'notify',
            content: `${name} tạo cuộc bình chọn mới: "${q}"`,
            timestamp: Date.now(),
            replyToMessageId: createRes._id,
          });
          if (notify?.success) {
            socketRef.current?.emit('send_message', {
              ...sockBase,
              _id: notify._id,
              type: 'notify',
              content: `${name} tạo cuộc bình chọn mới: "${q}"`,
              timestamp: Date.now(),
              replyToMessageId: createRes._id,
            });
          }
        }
      }
    } catch {}
    setShowCreate(false);
  };

  const canLock = (item: Message) => {
    const sender = item.sender as User | string;
    const senderId = typeof sender === 'object' && sender ? String(sender._id) : String(sender);
    const isCreator = senderId === String(currentUser._id);
    return isGroup ? isCreator : false;
  };

  const handleToggleLock = async (item: Message) => {
    if (!canLock(item)) return;
    const next = !item.isPollLocked;
    try {
      const now = Date.now();
      const name = currentUser.name;
      const updateData = next
        ? { isPollLocked: true, pollLockedAt: now, editedAt: now, timestamp: now }
        : { isPollLocked: false, editedAt: now, timestamp: now };
      await updateMessageApi(String(item._id), updateData);
      socketRef.current?.emit('edit_message', { _id: item._id, roomId, ...updateData });
      if (next) {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const endStr = new Date(now).toLocaleString('vi-VN');
        const notifyText = `${name} đã khóa bình chọn: "${String(item.content || item.pollQuestion || '')}" (kết thúc lúc ${endStr})`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(item._id),
        });
        if (notifyRes?.success) {
          socketRef.current?.emit('send_message', {
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
            replyToMessageId: String(item._id),
          });
        }
      } else {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const notifyText = `${name} đã mở khóa bình chọn: "${String(item.content || item.pollQuestion || '')}"`;
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: notifyText,
          timestamp: now,
          replyToMessageId: String(item._id),
        });
        if (notifyRes?.success) {
          socketRef.current?.emit('send_message', {
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
            replyToMessageId: String(item._id),
          });
        }
      }

      if (onRefresh) {
        await onRefresh();
      }
    } catch {}
  };

  const handleTogglePin = async (item: Message) => {
    const next = !item.isPinned;
    setItems((prev) => prev.map((m) => (String(m._id) === String(item._id) ? { ...m, isPinned: next } : m)));
    try {
      const now = Date.now();
      await updateMessageApi(String(item._id), { isPinned: next, editedAt: now });
      socketRef.current?.emit('edit_message', { _id: item._id, roomId, isPinned: next, editedAt: now });
      await updateMessageApi(String(item._id), { isPinned: next });
      socketRef.current?.emit('pin_message', { _id: item._id, roomId, isPinned: next });

      const receiver = isGroup ? null : String((selectedChat as User)._id);
      const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
      const who = currentUser.name || 'Ai đó';
      const action = next ? 'đã ghim' : 'đã bỏ ghim';
      const notifyText = `${who} ${action} một bình chọn: "${String(item.content || item.pollQuestion || '')}"`;
      const notifyRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'notify',
        content: notifyText,
        timestamp: now,
        replyToMessageId: String(item._id),
      });
      if (notifyRes?.success) {
        socketRef.current?.emit('send_message', {
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
          replyToMessageId: String(item._id),
        });
      }
    } catch {
      setItems((prev) => prev.map((m) => (String(m._id) === String(item._id) ? { ...m, isPinned: !next } : m)));
    }
  };

  const handleEdit = (item: Message) => {
    setDetailMsg(item);
    setOpenMenuId(null);
  };

  const getUserInfo = useCallback(
    (userId: string) => {
      if (String(userId) === String(currentUser._id)) return currentUser;
      if (isGroup) {
        const members = (selectedChat as GroupConversation).members || [];
        const member = members.find((m) => String((m as any)._id || (m as any).id) === String(userId));
        if (member) return member as unknown as User;
      } else {
        const other = selectedChat as User;
        if (String(other._id) === String(userId)) return other;
      }
      return null;
    },
    [currentUser, isGroup, selectedChat],
  );

  const formatTime = (ts: number) => {
    try {
      // Format: 21/10 lúc 09:39
      const d = new Date(ts);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const hour = String(d.getHours()).padStart(2, '0');
      const minute = String(d.getMinutes()).padStart(2, '0');
      return `${day}/${month} lúc ${hour}:${minute}`;
    } catch {
      return '';
    }
  };

  const getVotesCount = (item: Message, option: string) => {
    const v = item.pollVotes || {};
    const arr = (v[option] || []) as string[];
    return arr.length;
  };

  const getVotersForOption = (item: Message, option: string) => {
    const v = item.pollVotes || {};
    const arr = (v[option] || []) as string[];
    return arr;
  };

  const didIVote = (item: Message, option: string) => {
    const myId = String(currentUser._id);
    const v = item.pollVotes || {};
    const arr = (v[option] || []) as string[];
    return arr.includes(myId);
  };

  return (
    <>
      <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
        {!embedded && (
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10">
            <h2 className="text-lg font-bold text-gray-800">Bình chọn</h2>
            <div className="flex items-center gap-3">
              {isGroup && (
                <button
                  onClick={() => setShowCreate(true)}
                  className="p-2 cursor-pointer rounded-full hover:bg-gray-100 text-blue-600 transition-all duration-200"
                  title="Tạo bình chọn mới"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 cursor-pointer rounded-full hover:bg-gray-100 text-gray-500 transition-all duration-200"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
        
        {/* Tabs giả lập (để giống ảnh) */}
      

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 bg-gray-100 p-3">
          <div className="space-y-4 max-w-2xl mx-auto">
            {loading ? (
              <div className="text-center text-gray-500 py-10">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                <p className="mt-2">Đang tải...</p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <p className="text-sm">Chưa có bình chọn nào</p>
              </div>
            ) : (
              items.map((it) => {
                const itemId = String(it._id);
                const sender = it.sender as User | string;
                const senderId = typeof sender === 'object' ? String(sender._id) : String(sender);
                const senderInfo = getUserInfo(senderId) || (typeof sender === 'object' ? sender : null);
                const senderName = senderInfo?.name || 'Ai đó';
                const senderAvatar = senderInfo?.avatar;
                
                const isMenuOpen = openMenuId === itemId;
                const locked = !!it.isPollLocked;
                const totalVotes = Object.values(it.pollVotes || {}).flat().length;

                return (
                  <div
                    key={itemId}
                    className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    {/* Header Card */}
                    <div className="p-4 pb-2">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                                {senderAvatar ? (
                                    <Image 
                                        src={getProxyUrl(senderAvatar)} 
                                        alt={senderName} 
                                        width={40} 
                                        height={40} 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Image 
                                        src="/logo/avata.webp" 
                                        alt={senderName} 
                                        width={40} 
                                        height={40} 
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                            <span>
                                                {senderName} <span className="font-normal text-gray-500">tạo một bình chọn</span>
                                            </span>
                                            {locked && (
                                                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500 border border-gray-200">
                                                    <HiLockClosed className="w-3 h-3" />
                                                    Đã khóa
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {formatTime(it.timestamp)}
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => setOpenMenuId(isMenuOpen ? null : itemId)}
                                            className="p-1 cursor-pointer text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                                        >
                                            <HiEllipsisVertical className="w-5 h-5" />
                                        </button>
                                        
                                        {/* Dropdown Menu */}
                                        {isMenuOpen && (
                                            <div 
                                                ref={(el) => {
                                                    if (el) menuRefs.current.set(itemId, el);
                                                    else menuRefs.current.delete(itemId);
                                                }}
                                                className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20 py-1"
                                            >
                                                <button onClick={() => handleEdit(it)} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">Xem chi tiết</button>
                                                <button onClick={() => handleTogglePin(it)} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                                                    {it.isPinned ? 'Bỏ ghim' : 'Ghim bình chọn'}
                                                </button>
                                                {canLock(it) && (
                                                    <button onClick={() => handleToggleLock(it)} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600">
                                                        {locked ? 'Mở khóa bình chọn' : 'Khóa bình chọn'}
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-3">
                            <p className="text-base font-medium text-gray-900 mb-2 leading-snug truncate">
                                {it.content || it.pollQuestion || 'Bình chọn'}
                            </p>
                            <div className="flex items-center gap-1 mb-3 cursor-pointer" onClick={() => handleEdit(it)}>
                                <span className="text-sm text-blue-500 font-medium hover:underline">
                                    {totalVotes} người đã bình chọn
                                </span>
                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Options List */}
                            <div className="space-y-2">
                                {(it.pollOptions || []).map((opt, idx) => {
                                    const voters = getVotersForOption(it, opt);
                                    const count = voters.length;
                                    const voted = didIVote(it, opt);
                                    const percent = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
                                    
                                    // Get avatars of voters (max 3)
                                    const voterAvatars = voters.slice(0, 3).map(uid => {
                                        const u = getUserInfo(uid);
                                        return u ? { id: uid, avatar: u.avatar, name: u.name } : { id: uid, avatar: null, name: 'User' };
                                    });

                                    return (
                                        <div 
                                            key={`${itemId}-${idx}`}
                                            onClick={() => handleEdit(it)}
                                            className={`group relative overflow-hidden bg-gray-100 rounded-lg p-3 cursor-pointer transition-all duration-200
                                               
                                             
                                            `}
                                        >
                                            {/* Progress Bar Background */}
                                            <div 
                                                className={`absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${voted ? 'bg-blue-200' : 'bg-blue-200'}`}
                                                style={{ width: `${percent}%` }}
                                            />

                                            <div className="relative flex items-center justify-between gap-3 z-10">
                                                <span className={`text-sm  `}>
                                                    {opt}
                                                </span>
                                                
                                                {/* Voter Avatars */}
                                                <div className="flex items-center -space-x-2">
                                                    {voterAvatars.map((u, i) => (
                                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200" title={u.name}>
                                                            {u.avatar ? (
                                                                <Image src={getProxyUrl(u.avatar)} alt="" width={24} height={24} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <Image src="/logo/avata.webp" alt="" width={24} height={24} className="w-full h-full object-cover" />
                                                            )}
                                                        </div>
                                                    ))}
                                                    {count > 3 && (
                                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-700 text-white text-[10px] flex items-center justify-center font-bold">
                                                            +{count - 3}
                                                        </div>
                                                    )}
                                                    {count > 0 && count <= 3 && voterAvatars.length < count && (
                                                        // Fallback if we can't find users for all votes
                                                         <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 text-gray-600 text-[10px] flex items-center justify-center font-bold">
                                                            {count}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-4 pt-2">
                         <button
                            onClick={() => handleEdit(it)}
                            disabled={false}
                            className={`w-full cursor-pointer py-2.5 rounded-lg font-medium transition-colors text-sm
                                ${locked 
                                    ? 'bg-gray-100 text-gray-500 cursor-default' 
                                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200'
                                }`}
                         >
                            {locked 
                                ? 'Đã khóa bình chọn' 
                                : (it.pollVotes && Object.values(it.pollVotes).some(arr => arr.includes(String(currentUser._id))) ? 'Đổi bình chọn' : 'Bình chọn')
                            }
                         </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <CreatePollModal isOpen={showCreate} onClose={() => setShowCreate(false)} onCreate={handleCreate} />
      <PollDetailModal isOpen={!!detailMsg} message={detailMsg} onClose={() => setDetailMsg(null)} />
    </>
  );
}
