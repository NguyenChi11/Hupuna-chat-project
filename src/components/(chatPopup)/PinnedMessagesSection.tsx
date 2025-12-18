'use client';

import React from 'react';
import Image from 'next/image';

import PinnedMessageListModal from '../base/PinnedMessageListModal';

import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import { HiMapPin, HiOutlineDocumentText } from 'react-icons/hi2';
import { getProxyUrl } from '@/utils/utils';

interface PinnedMessagesSectionProps {
  allPinnedMessages: Message[];
  showPinnedList: boolean;
  onOpenPinnedList: () => void;
  onClosePinnedList: () => void;
  onJumpToMessage: (messageId: string) => void;
  getSenderName: (sender: User | string) => string;
  onUnpinMessage: (msg: Message) => void;
  onLoadMorePinned: () => void;
  pinnedHasMore: boolean;
  pinnedLoading?: boolean;
}

export default function PinnedMessagesSection({
  allPinnedMessages,
  showPinnedList,
  onOpenPinnedList,
  onClosePinnedList,
  onJumpToMessage,
  getSenderName,
  onUnpinMessage,
  onLoadMorePinned,
  pinnedHasMore,
  pinnedLoading,
}: PinnedMessagesSectionProps) {
  if (allPinnedMessages.length === 0 && !showPinnedList) return null;

  const sorted = allPinnedMessages.slice().sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
  const top5 = sorted.slice(0, 5);
  const isVideoFile = (name?: string) => /\.(mp4|webm|mov|mkv|avi)$/i.test(String(name || ''));
  const isImageFile = (name?: string) => /\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(String(name || ''));
  const renderPreview = (msg: Message) => {
    const url = String(msg.fileUrl || msg.previewUrl || '');
    const isVid = msg.type === 'video' || isVideoFile(msg.fileName) || isVideoFile(url);
    const isImg = msg.type === 'image' || isImageFile(msg.fileName) || isImageFile(url);
    if (isImg) {
      return <Image src={getProxyUrl(url)} alt="Ảnh" width={64} height={64} className="w-16 h-16 object-cover" />;
    }
    if (isVid) {
      return (
        <div className="relative w-16 h-16 bg-black">
          <video src={getProxyUrl(url)} className="w-full h-full object-cover" muted playsInline preload="metadata" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-800">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    const label =
      msg.type === 'file'
        ? msg.fileName || 'File'
        : msg.type === 'sticker'
          ? 'Sticker'
          : msg.type === 'poll'
            ? 'Bình chọn'
            : msg.type === 'reminder'
              ? 'Lịch hẹn'
              : msg.content || 'Tin nhắn';
    return <div className="w-24 max-w-[12rem] px-2 py-2 text-xs text-gray-700 line-clamp-2">{label}</div>;
  };

  return (
    <>
      {allPinnedMessages.length > 0 && (
        <button
          onClick={onOpenPinnedList}
          className={`
    group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-yellow-50 to-amber-50
    border border-yellow-300 rounded-xl shadow-md hover:shadow-xl
    hover:border-yellow-400 transition-all duration-300 active:scale-95
    text-sm font-medium text-yellow-900 select-none cursor-pointer
    m-2 sm:m-3
  `}
          title={`Xem ${allPinnedMessages.length} tin nhắn đã ghim`}
        >
          {/* Icon ghim – chuẩn Zalo, đẹp, sắc nét */}
          <HiMapPin
            className="w-5 h-5 text-yellow-600 rotate-45 drop-shadow-sm 
               group-hover:scale-110 transition-transform duration-200"
          />

          <span className="flex items-center gap-1.5">
            Tin nhắn đã ghim
            {/* Badge số lượng */}
           
          </span>
        </button>
      )}

      {showPinnedList && (
        <PinnedMessageListModal
          messages={allPinnedMessages}
          onClose={onClosePinnedList}
          onJumpToMessage={onJumpToMessage}
          onGetSenderName={getSenderName}
          hasMore={pinnedHasMore}
          onLoadMore={onLoadMorePinned}
          loadingMore={pinnedLoading}
          onGetContentDisplay={(msg) => {
            if (msg.type === 'poll') return `Bình chọn: ${msg.pollQuestion || msg.content || ''}`;
            if (msg.type === 'reminder') return `Lịch hẹn: ${msg.content || ''}`;
            if (msg.type === 'image') return 'Ảnh';
            if (msg.type === 'video') return 'Video';
            if (msg.type === 'file')
              return (
                <a
                  href={getProxyUrl(msg.fileUrl, true)}
                  download={msg.fileName || 'download'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50"
                >
                  <div className="p-2 bg-blue-600 rounded-xl">
                    <HiOutlineDocumentText className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{msg.fileName || 'Tệp đính kèm'}</p>
                    <p className="text-xs text-gray-500 truncate">Nhấn để tải xuống</p>
                  </div>
                </a>
              );
            if (msg.type === 'sticker') return 'Sticker';
            return msg.content || '[Tin nhắn]';
          }}
          onUnpinMessage={onUnpinMessage}
        />
      )}
    </>
  );
}
