import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { useChatContext } from '@/context/ChatContext';
import type { GroupConversation } from '@/types/Group';
import { readMessagesApi, createMessageApi, deleteMessageApi } from '@/fetch/messages';
import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import CreateNoteModal from './CreateNoteModal';
import { io } from 'socket.io-client';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { resolveSocketUrl } from '@/utils/utils';

interface NotesListProps {
  onClose: () => void;
  embedded?: boolean;
}

export default function NotesList({ onClose, embedded = false }: NotesListProps) {
  const { selectedChat, currentUser, isGroup } = useChatContext();
  const roomId = useMemo(() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  }, [isGroup, selectedChat, currentUser]);
  const [items, setItems] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await readMessagesApi(roomId, {
        limit: 200,
        sortOrder: 'desc',
        extraFilters: { type: 'note', isRecalled: { $ne: true } },
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
    const socket = io(resolveSocketUrl(), {
      transports: ['websocket'],
      withCredentials: false,
    });
    socket.emit('join_room', roomId);
    socket.on('receive_message', (data: Message) => {
      if (data.roomId !== roomId || data.type !== 'note') return;
      setItems((prev) => {
        const map = new Map<string, Message>();
        [...prev, data].forEach((m) => map.set(String(m._id), m));
        return Array.from(map.values()).sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      });
    });
    socket.on('message_deleted', (data: { _id: string; roomId: string }) => {
      if (data.roomId !== roomId) return;
      setItems((prev) => prev.filter((m) => String(m._id) !== String(data._id)));
      void load();
    });
    return () => {
      socket.disconnect();
    };
  }, [roomId, load]);

  const handleCreate = async ({ content, pinned }: { content: string; pinned: boolean }) => {
    setCreateLoading(true);
    const trimmed = content.trim();
    if (!trimmed) {
      setCreateLoading(false);
      return;
    }

    try {
      const notify = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'notify',
        content: `${currentUser.name} đã tạo ghi chú: "${trimmed}"`,
        timestamp: Date.now(),
        isPinned: pinned,
      });
      if (notify?.success) {
        try {
          const payload: Message = {
            _id: String(notify._id),
            roomId,
            sender: String(currentUser._id),
            content: `${currentUser.name} đã tạo ghi chú: "${trimmed}"`,
            type: 'notify',
            timestamp: Date.now(),
            isPinned: pinned,
          } as Message;
          window.dispatchEvent(new CustomEvent('local_receive_message', { detail: payload }));
        } catch {}
        try {
          const socket = io(resolveSocketUrl(), {
            transports: ['websocket'],
            withCredentials: false,
          });
          const receiver = isGroup ? null : String((selectedChat as User)._id);
          const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
          socket.emit('send_message', {
            _id: notify._id,
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members,
            type: 'notify',
            content: `${currentUser.name} đã tạo ghi chú: "${trimmed}"`,
            timestamp: Date.now(),
            isPinned: pinned,
          });
          socket.disconnect();
        } catch {}
      }
    } catch {}
    setCreateLoading(false);
    setShowCreate(false);
  };

  const handleDelete = async (item: Message) => {
    const ok = confirm('Xóa ghi chú này?');
    if (!ok) return;
    try {
      await deleteMessageApi(String(item._id));
      const socket = io(resolveSocketUrl(), {
        transports: ['websocket'],
        withCredentials: false,
      });
      socket.emit('message_deleted', { _id: item._id, roomId });
      socket.disconnect();
      await load();
    } catch {}
  };

  return (
    <>
      <div className="relative flex flex-col h-full bg-gray-50 overflow-hidden">
        {!embedded && (
          <div className="bg-blue-400 text-white p-3 flex items-center justify-between shadow-lg">
            <h2 className="text-lg font-semibold">Danh sách ghi chú</h2>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="p-2 cursor-pointer rounded-full hover:bg-white/20 duration-200">
                <HiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 flex items-center justify-between">
            <div className="text-sm text-gray-600">Ghi chú</div>
            <button
              onClick={() => setShowCreate(true)}
              className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm cursor-pointer active:opacity-80"
            >
              Tạo ghi chú
            </button>
          </div>
          {loading ? (
            <div className="text-center py-10 text-gray-500">Đang tải...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-10 text-gray-500">Chưa có ghi chú nào</div>
          ) : (
            <div className="space-y-2 px-3">
              {items.map((item) => (
                <div key={item._id} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {new Date(item.timestamp).toLocaleString('vi-VN', { hour12: false })}
                    </div>
                    <div className="relative">
                      <button
                        className="cursor-pointer text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                        onClick={() => setOpenMenuId(openMenuId === item._id ? null : item._id)}
                      >
                        <HiEllipsisVertical className="w-5 h-5" />
                      </button>
                      {openMenuId === item._id && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                          <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden py-1">
                            <button
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete(item)}
                            >
                              Xóa
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-gray-800 text-sm whitespace-pre-wrap">{item.content || ''}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <CreateNoteModal
          isOpen={showCreate}
          onClose={() => setShowCreate(false)}
          onCreate={handleCreate}
          createLoading={createLoading}
        />
      </div>
    </>
  );
}
