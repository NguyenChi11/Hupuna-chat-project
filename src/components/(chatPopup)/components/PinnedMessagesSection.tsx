import React, { useEffect, useState, useMemo } from 'react';
import ICPin from '@/components/svg/ICPin';
import { useChatContext } from '@/context/ChatContext';
import { readPinnedMessagesApi } from '@/fetch/messages';
import type { Message } from '@/types/Message';

interface PinnedMessagesSectionProps {
  onOpen: () => void;
}

export default function PinnedMessagesSection({ onOpen }: PinnedMessagesSectionProps) {
  const { selectedChat, currentUser, isGroup } = useChatContext();
  const roomId = useMemo(() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  }, [isGroup, selectedChat, currentUser]);

  const [latestPinned, setLatestPinned] = useState<Message | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await readPinnedMessagesApi(roomId, { limit: 1 });
        if (res.data && res.data.length > 0) {
          setLatestPinned(res.data[0]);
        } else {
          setLatestPinned(null);
        }
      } catch (error) {
        console.error('Failed to load pinned message preview:', error);
      }
    };
    void load();
  }, [roomId]);

  const getPreviewContent = (msg: Message) => {
    if (msg.type === 'image') return '[Hình ảnh]';
    if (msg.type === 'video') return '[Video]';
    if (msg.type === 'file') return '[File] ' + (msg.fileName || '');
    if (msg.type === 'poll') return '[Bình chọn] ' + (msg.pollQuestion || msg.content);
    return msg.content || 'Tin nhắn đã ghim';
  };

  return (
    <div className="bg-white border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full p-2 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách tin nhắn đã ghim"
      >
        <div className="py-3 rounded-xl">
          <ICPin className="w-5 h-5 text-gray-500" />
        </div>
        <div className="text-left flex-1 min-w-0">
          <p className="text-base text-[1.125rem] text-gray-900 group-hover:text-amber-600 transition-colors">
            Tin nhắn đã ghim
          </p>
          {latestPinned && (
            <p className="text-sm text-gray-500 truncate mt-0.5 max-w-[200px]">{getPreviewContent(latestPinned)}</p>
          )}
        </div>
        <div className="ml-auto text-gray-400 group-hover:text-amber-600 transition-colors">
          <svg
            className="w-5 h-5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
