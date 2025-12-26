'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import PinnedMessageListModal from '../base/PinnedMessageListModal';

import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import {
  HiChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiChevronDown,
  HiChevronUp,
  HiEllipsisVertical,
  HiTrash,
} from 'react-icons/hi2';
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
  const isEmpty = allPinnedMessages.length === 0 && !showPinnedList;
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
  const renderMiniPreview = (msg: Message) => {
    const url = String(msg.fileUrl || msg.previewUrl || '');
    const isVid = msg.type === 'video' || isVideoFile(msg.fileName) || isVideoFile(url);
    const isImg = msg.type === 'image' || isImageFile(msg.fileName) || isImageFile(url);
    if (isImg) {
      return (
        <Image src={getProxyUrl(url)} alt="Ảnh" width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
      );
    }
    if (isVid) {
      return (
        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-black">
          <video src={getProxyUrl(url)} className="w-full h-full object-cover" muted playsInline preload="metadata" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-800">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
  const firstMsg = allPinnedMessages[0];
  const typeLabel =
    firstMsg?.type === 'image'
      ? '[Hình ảnh]'
      : firstMsg?.type === 'video'
        ? '[Video]'
        : firstMsg?.type === 'file'
          ? '[Tệp]'
          : firstMsg?.type === 'sticker'
            ? '[Sticker]'
            : firstMsg?.type === 'poll'
              ? '[Bình chọn]'
              : firstMsg?.type === 'reminder'
                ? '[Lịch hẹn]'
                : '[Tin nhắn]';
  const senderName = firstMsg ? getSenderName(firstMsg.sender) : '';
  const extraCount = allPinnedMessages.length > 1 ? allPinnedMessages.length - 1 : 0;
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openOptions, setOpenOptions] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (openDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpenDropdown(false);
      }
      if (openOptions && optionsRef.current && !optionsRef.current.contains(target)) {
        setOpenOptions(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown, openOptions]);

  if (isEmpty) return null;

  return (
    <>
      {allPinnedMessages.length > 0 && (
        <div className="relative group flex items-center justify-between gap-3 px-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-300 select-none m-2 sm:m-3">
          <div
            className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer hover:bg-gray-50 rounded-lg p-1 transition-colors"
            onClick={() => firstMsg && onJumpToMessage(firstMsg._id)}
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 border border-blue-200">
              <HiChatBubbleLeftRight className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0 items-start">
              <div className="text-sm font-semibold text-gray-900 truncate">{typeLabel}</div>
              <div className="text-sm text-gray-600 truncate">
                {senderName ? `Tin nhắn của ${senderName}` : 'Tin nhắn đã ghim'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {firstMsg && renderMiniPreview(firstMsg)}
            <div className="h-10 w-px bg-gray-200" />
            <div
              className="px-3 py-1.5 rounded-full border border-gray-300 bg-gray-50 text-gray-800 flex items-center gap-1.5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (extraCount > 0) setOpenDropdown((v) => !v);
              }}
            >
              <span className="text-sm font-semibold">{extraCount > 0 ? `+${extraCount}` : '+0'}</span>
              <HiChevronDown className="w-4 h-4" />
            </div>
            {openDropdown && (
              <div
                className="fixed inset-0 z-40 bg-black/30"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(false);
                }}
              />
            )}
            {openDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-3 top-full mt-2 w-[92vw] max-w-[28rem] bg-white border border-gray-200 rounded-2xl shadow-xl z-50"
              >
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">Danh sách ghim ({allPinnedMessages.length})</div>
                  <button
                    className="text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(false);
                    }}
                  >
                    Thu gọn
                    <HiChevronUp className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-[20rem] custom-scrollbar overflow-auto divide-y divide-gray-100">
                  {allPinnedMessages.map((msg) => {
                    const label =
                      msg.type === 'image'
                        ? '[Hình ảnh]'
                        : msg.type === 'video'
                          ? '[Video]'
                          : msg.type === 'file'
                            ? '[Link]'
                            : msg.type === 'sticker'
                              ? '[Sticker]'
                              : msg.type === 'poll'
                                ? '[Bình chọn]'
                                : msg.type === 'reminder'
                                  ? '[Lịch hẹn]'
                                  : '[Tin nhắn]';
                    const name = getSenderName(msg.sender);
                    return (
                      <div
                        key={String(msg._id)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(false);
                          onJumpToMessage(String(msg._id));
                        }}
                      >
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 border border-blue-200 shrink-0">
                          <HiChatBubbleLeftRight className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 truncate">{label}</div>
                          <div className="text-sm text-gray-600 truncate">
                            {name ? `Tin nhắn của ${name}` : 'Tin nhắn'}
                          </div>
                        </div>
                        {renderMiniPreview(msg)}

                        <div className="relative">
                          <button
                            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenOptions(openOptions === String(msg._id) ? null : String(msg._id));
                            }}
                          >
                            <HiEllipsisVertical className="w-5 h-5" />
                          </button>

                          {openOptions === String(msg._id) && (
                            <div
                              ref={optionsRef}
                              className="absolute right-0 top-8 z-50 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1"
                            >
                              <button
                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onUnpinMessage(msg);
                                  setOpenOptions(null);
                                }}
                              >
                                <HiTrash className="w-4 h-4" />
                                Bỏ ghim
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
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
