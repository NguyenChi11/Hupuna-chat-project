import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiChevronLeft, HiPlus, HiDotsHorizontal } from 'react-icons/hi';
import { useChatContext } from '@/context/ChatContext';
import { readMessagesApi, createMessageApi, togglePinMessageApi } from '@/fetch/messages';
import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import type { GroupConversation } from '@/types/Group';
import ICPin from '@/components/svg/ICPin';
import Image from 'next/image';
import { getProxyUrl, resolveSocketUrl } from '@/utils/utils';
import PollList from './PollList';
import ReminderList from './ReminderList';
import CreatePollModal from './CreatePollModal';
import CreateReminderModal from './CreateReminderModal';
import { io } from 'socket.io-client';

interface PinnedMessagesListProps {
  onClose: () => void;
  onJumpToMessage?: (messageId: string) => void;
}

type TabType = 'pinned' | 'poll' | 'note';

export default function PinnedMessagesList({ onClose, onJumpToMessage }: PinnedMessagesListProps) {
  const { selectedChat, currentUser, isGroup, allUsers } = useChatContext();
  const roomId = useMemo(() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  }, [isGroup, selectedChat, currentUser]);

  const [activeTab, setActiveTab] = useState<TabType>('pinned');
  const [items, setItems] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  // --- Socket Connection (for sending messages) ---
  useEffect(() => {
    socketRef.current = io(resolveSocketUrl(), {
      transports: ['websocket'],
      withCredentials: false,
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  // --- Load Pinned Messages ---
  const loadPinned = useCallback(async () => {
    try {
      setLoading(true);
      const res = await readMessagesApi(roomId, {
        limit: 200,
        sortOrder: 'desc',
        extraFilters: { isPinned: true, isRecalled: { $ne: true } },
      });
      const data = Array.isArray(res.data) ? (res.data as Message[]) : [];
      setItems(data);
    } catch (error) {
      console.error('❌ Lỗi khi tải danh sách tin nhắn đã ghim:', error);
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  useEffect(() => {
    if (activeTab === 'pinned') {
      void loadPinned();
    }
  }, [loadPinned, activeTab]);

  const getSender = (msg: Message) => {
    if (typeof msg.sender === 'object') return msg.sender as User;
    return allUsers.find((u) => String(u._id) === String(msg.sender)) || ({} as User);
  };

  // --- Handlers ---
  const handleCreatePoll = async ({
    question,
    options,
    pollAllowMultiple,
    pollAllowAddOptions,
    pollHideVoters,
    pollHideResultsUntilVote,
    pollEndAt,
  }: {
    question: string;
    options: string[];
    pollAllowMultiple?: boolean;
    pollAllowAddOptions?: boolean;
    pollHideVoters?: boolean;
    pollHideResultsUntilVote?: boolean;
    pollEndAt?: number | null;
  }) => {
    const q = question.trim();
    if (!q) return;

    try {
      const createRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'poll',
        content: q,
        timestamp: Date.now(),
        pollQuestion: q,
        pollOptions: options,
        pollVotes: {},
        isPollLocked: false,
        pollAllowMultiple,
        pollAllowAddOptions,
        pollHideVoters,
        pollHideResultsUntilVote,
        pollEndAt: pollEndAt ?? null,
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

        if (typeof createRes._id === 'string') {
          socketRef.current?.emit('send_message', {
            ...sockBase,
            _id: createRes._id,
            type: 'poll',
            content: q,
            timestamp: Date.now(),
            pollQuestion: q,
            pollOptions: options,
            pollVotes: {},
            isPollLocked: false,
            pollAllowMultiple,
            pollAllowAddOptions,
            pollHideVoters,
            pollHideResultsUntilVote,
            pollEndAt: pollEndAt ?? null,
          });

          // Notify
          const notify = await createMessageApi({
            roomId,
            sender: String(currentUser._id),
            type: 'notify',
            content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
            timestamp: Date.now(),
            replyToMessageId: createRes._id,
          });
          if (notify?.success) {
            socketRef.current?.emit('send_message', {
              ...sockBase,
              _id: notify._id,
              type: 'notify',
              content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
              timestamp: Date.now(),
              replyToMessageId: createRes._id,
            });
          }
        }
        setShowCreatePoll(false);
        if (activeTab !== 'poll') setActiveTab('poll');
      }
    } catch (error) {
      console.error('Failed to create poll:', error);
    }
  };

  const handleCreateNote = async ({
    content,
    dateTime,
    note,
    repeat,
  }: {
    content: string;
    dateTime: string;
    note?: string;
    repeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  }) => {
    setCreateLoading(true);
    const dt = Date.parse(dateTime);
    if (!content.trim() || Number.isNaN(dt)) {
      alert('Vui lòng nhập đầy đủ thông tin hợp lệ');
      setCreateLoading(false);
      return;
    }

    try {
      const createRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'reminder',
        content: content.trim(),
        timestamp: Date.now(),
        reminderAt: dt,
        reminderNote: note?.trim() || '',
        reminderFired: false,
        reminderRepeat: repeat || 'none',
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

        if (typeof createRes._id === 'string') {
          socketRef.current?.emit('send_message', {
            ...sockBase,
            _id: createRes._id,
            type: 'reminder',
            content: content.trim(),
            timestamp: Date.now(),
            reminderAt: dt,
            reminderNote: note?.trim() || '',
            reminderFired: false,
            reminderRepeat: repeat || 'none',
          });
        }

        // Notify
        const timeStr = new Date(dt).toLocaleString('vi-VN');
        const notifyRes = await createMessageApi({
          roomId,
          sender: String(currentUser._id),
          type: 'notify',
          content: `${currentUser.name} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
          timestamp: Date.now(),
        });

        if (notifyRes?.success && typeof notifyRes._id === 'string') {
          socketRef.current?.emit('send_message', {
            ...sockBase,
            _id: notifyRes._id,
            type: 'notify',
            content: `${currentUser.name} đã tạo lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
            timestamp: Date.now(),
          });
        }
        setShowCreateNote(false);
        if (activeTab !== 'note') setActiveTab('note');
      } else {
        alert('Tạo lịch hẹn thất bại. Vui lòng kiểm tra kết nối máy chủ.');
      }
    } catch (error) {
      console.error('❌ Lỗi khi tạo lịch hẹn:', error);
      alert('Không thể tạo lịch hẹn. Vui lòng thử lại.');
    } finally {
      setCreateLoading(false);
    }
  };

  const handleUnpin = async (messageId: string) => {
    try {
      await togglePinMessageApi(messageId, false);
      setItems((prev) => prev.filter((item) => item._id !== messageId));
      setActiveMenuId(null);
    } catch (error) {
      console.error('Failed to unpin message:', error);
    }
  };

  const handleJump = (messageId: string) => {
    if (onJumpToMessage) {
      onJumpToMessage(messageId);
      onClose();
    }
    setActiveMenuId(null);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-blue-500 text-white p-3 flex items-center justify-between shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="p-1 cursor-pointer hover:bg-white/20 rounded-full transition-colors">
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <h3 className="font-medium text-lg">Bảng tin nhóm</h3>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowCreateMenu(!showCreateMenu)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <HiPlus className="w-6 h-6" />
          </button>
          {showCreateMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50 animate-fade-in">
              {isGroup && (
              <button
                onClick={() => {
                  setShowCreateMenu(false);
                  setShowCreatePoll(true);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Tạo bình chọn
              </button>
              )}
              <button
                onClick={() => {
                  setShowCreateMenu(false);
                  setShowCreateNote(true);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Tạo ghi chú
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white px-1 flex items-center border-b border-gray-200 sticky top-[0] z-10">
        <div
          onClick={() => setActiveTab('pinned')}
          className={`flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${
            activeTab === 'pinned'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:bg-gray-50'
          }`}
        >
          Tin nhắn đã ghim
        </div>
       
       {isGroup && (
        <div
          onClick={() => setActiveTab('poll')}
          className={`flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${
            activeTab === 'poll' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:bg-gray-50'
          }`}
        >
          Bình chọn
        </div>
       )}
        <div
          onClick={() => setActiveTab('note')}
          className={`flex-1 text-center py-3 border-b-2 font-medium text-sm cursor-pointer transition-colors ${
            activeTab === 'note' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:bg-gray-50'
          }`}
        >
          Ghi chú
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'pinned' && (
          <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {loading ? (
              <div className="text-center py-10 text-gray-500">Đang tải...</div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8 opacity-70">
                <div className="relative">
                  <ICPin className="w-16 h-16 text-blue-200" />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">Bấm giữ một tin nhắn và chọn Ghim để gây chú ý cho cả nhóm</p>
              </div>
            ) : (
              items.map((msg) => {
                const sender = getSender(msg);
                const pinnedAt = msg.pinnedAt || msg.timestamp;

                return (
                  <div key={msg._id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 space-y-3">
                    {/* Header Card */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <ICPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">Tin nhắn đã ghim</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            {pinnedAt
                              ? new Date(pinnedAt).toLocaleString('vi-VN', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })
                              : ''}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <button
                          className="cursor-pointer text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuId(activeMenuId === msg._id ? null : msg._id);
                          }}
                        >
                          <HiDotsHorizontal className="w-5 h-5" />
                        </button>
                        {activeMenuId === msg._id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenuId(null)} />
                            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden py-1">
                              <button
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleJump(msg._id);
                                }}
                              >
                                <span>Di chuyển đến tin nhắn</span>
                              </button>
                              <button
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUnpin(msg._id);
                                }}
                              >
                                <span>Xóa ghim</span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="pl-3 border-l-[3px] border-blue-500 py-1">
                      <div className="mb-1">
                        <span className="font-semibold text-sm text-gray-900">{sender.name || 'Người gửi'}</span>
                      </div>

                      {/* Render Content based on type */}
                      {msg.type === 'image' ? (
                        <div className="mt-1">
                          <div className=" w-20 h-20 rounded-md overflow-hidden relative bg-gray-100">
                            <Image
                              src={getProxyUrl(String(msg.fileUrl || msg.content)) || '/imgs/img1.JPEG'}
                              alt="Image"
                              width={200}
                              height={200}
                              className="object-cover w-auto h-auto"
                            />
                          </div>
                        </div>
                      ) : msg.type === 'video' ? (
                        <div className="mt-1">
                          <video
                            src={
                              getProxyUrl(String(msg.fileUrl || msg.content)) ||
                              'https://www.w3schools.com/html/mov_bbb.mp4'
                            }
                            controls
                            className="w-full max-w-[200px] rounded-md bg-black"
                          />
                        </div>
                      ) : msg.type === 'file' ? (
                        <div className="mt-1 flex items-center gap-2 p-2 bg-gray-50 rounded-md border border-gray-200">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">
                              {msg.fileName || 'File đính kèm'}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-800 line-clamp-3 whitespace-pre-wrap">
                          {msg.content || 'Tin nhắn không có nội dung'}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab === 'poll' && <PollList embedded onClose={onClose} />}

        {activeTab === 'note' && <ReminderList embedded onClose={onClose} />}
      </div>

      {/* Modals */}
      <CreatePollModal isOpen={showCreatePoll} onClose={() => setShowCreatePoll(false)} onCreate={handleCreatePoll} />
      <CreateReminderModal
        isOpen={showCreateNote}
        onClose={() => setShowCreateNote(false)}
        onCreate={handleCreateNote}
        createLoading={createLoading}
      />
    </div>
  );
}
