'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  HiMagnifyingGlass,
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
  isSidebarOpen?: boolean;
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
  isSidebarOpen,
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
      msg.pinnedTitle ||
      (msg.type === 'file'
        ? msg.fileName || 'File'
        : msg.type === 'sticker'
          ? 'Sticker'
          : msg.type === 'poll'
            ? 'Bình chọn'
            : msg.type === 'reminder'
              ? 'Lịch hẹn'
              : msg.content || 'Tin nhắn');
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
  const getPinnedLabel = (msg: Message) => {
    if (msg.pinnedTitle && msg.pinnedTitle.trim()) return msg.pinnedTitle.trim();
    const content = msg.content?.trim();
    if (msg.type === 'image') return '[Hình ảnh]';
    if (msg.type === 'video') return '[Video]';
    if (msg.type === 'file') return '[Tệp]';
    if (msg.type === 'sticker') return '[Sticker]';
    if (msg.type === 'poll') return '[Bình chọn]';
    if (msg.type === 'reminder') return '[Lịch hẹn]';
    return content || '[Tin nhắn]';
  };

  const firstMsg = allPinnedMessages[0];
  const typeLabel = firstMsg ? getPinnedLabel(firstMsg) : '';
  const senderName = firstMsg ? getSenderName(firstMsg.sender) : '';
  const extraCount = allPinnedMessages.length > 1 ? allPinnedMessages.length - 1 : 0;
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openOptions, setOpenOptions] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPinnedMessages = allPinnedMessages.filter((msg) => {
    const query = searchQuery.toLowerCase();
    const content = String(msg.content || '').toLowerCase();
    const title = String(msg.pinnedTitle || '').toLowerCase();
    return content.includes(query) || title.includes(query);
  });
  const [optionsPosition, setOptionsPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isSidebarOpen) {
      setOpenDropdown(false);
      setOpenOptions(null);
    }
  }, [isSidebarOpen]);

  const handleOpenOptions = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const buttonRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Tính toán vị trí hiển thị menu (ưu tiên hiển thị bên trái nút bấm để không bị tràn màn hình)
    setOptionsPosition({
      top: buttonRect.bottom + window.scrollY + 5,
      left: buttonRect.right + window.scrollX - 128, // 128px là width của menu (w-32)
    });
    setOpenOptions(openOptions === id ? null : id);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (openDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
        // Kiểm tra xem click có phải vào nút option hay menu option không
        // Nếu click vào menu option đang mở thì không đóng dropdown danh sách ghim
        if (openOptions && optionsRef.current && optionsRef.current.contains(target)) {
          return;
        }
        // Nếu click ra ngoài dropdown danh sách ghim và không phải click vào menu option
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
        <div className="relative group flex items-center justify-between gap-2 px-2 py-1 bg-white border border-gray-200 rounded-[0.5rem] shadow-sm hover:shadow-md hover:border-gray-300 select-none m-2 sm:m-3">
          <div
            className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer hover:bg-gray-50 rounded-lg p-1 transition-colors"
            onClick={() => firstMsg && onJumpToMessage(firstMsg._id)}
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 border border-blue-200">
              <HiChatBubbleLeftRight className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0 items-start">
              <div className="text-[0.875rem] md:text-[1rem] font-semibold text-gray-900 truncate">{typeLabel}</div>
              <div className="text-[0.875rem] md:text-[1rem] text-gray-600 truncate w-[10rem] md:w-[20rem]">
                {senderName ? `Tin nhắn của ${senderName}` : 'Tin nhắn đã ghim'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!isSidebarOpen && firstMsg && renderMiniPreview(firstMsg)}

            {!isSidebarOpen && (
              <div className="relative">
                <button
                  className="cursor-pointer p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                  onClick={(e) => handleOpenOptions(e, 'main-pinned')}
                >
                  <HiEllipsisVertical className="w-5 h-5" />
                </button>

                {openOptions === 'main-pinned' &&
                  typeof document !== 'undefined' &&
                  createPortal(
                    <div
                      ref={optionsRef}
                      style={{ top: optionsPosition.top, left: optionsPosition.left }}
                      className="fixed z-[9999] w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1"
                    >
                      <button
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (firstMsg) onUnpinMessage(firstMsg);
                          setOpenOptions(null);
                        }}
                      >
                        <HiTrash className="w-4 h-4" />
                        Bỏ ghim
                      </button>
                    </div>,
                    document.body,
                  )}
              </div>
            )}

            {!isSidebarOpen && <div className="h-10 w-px bg-gray-200" />}
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
                className="absolute left-3 right-3 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50"
              >
                <div className="px-4 py-3 border-b border-gray-200 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-900">
                      Danh sách ghim ({allPinnedMessages.length})
                    </div>
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
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMagnifyingGlass className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tìm kiếm ghim..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                <div className="max-h-[20rem] custom-scrollbar overflow-auto divide-y divide-gray-100">
                  {filteredPinnedMessages.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-gray-500">Không tìm thấy tin nhắn ghim nào</div>
                  )}
                  {filteredPinnedMessages.map((msg) => {
                    let label = getPinnedLabel(msg);
                    // Nếu là tin nhắn text và không có tiêu đề riêng, đặt label là [Tin nhắn]
                    // để dòng nội dung (msg.content) được hiển thị ở dòng dưới
                    if (!msg.pinnedTitle && msg.type === 'text' && msg.content) {
                      label = '[Tin nhắn]';
                    }

                    const name = getSenderName(msg.sender);
                    return (
                      <div
                        key={String(msg._id)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-2xl"
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
                          {msg.content && msg.content !== label && (
                            <div className="text-sm text-gray-700 truncate">{msg.content}</div>
                          )}
                          <div className="text-xs text-gray-500 truncate">
                            {name ? `Tin nhắn của ${name}` : 'Tin nhắn'}
                          </div>
                        </div>
                        {renderMiniPreview(msg)}

                        <div className="relative">
                          <button
                            className="cursor-pointer p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                            onClick={(e) => handleOpenOptions(e, String(msg._id))}
                          >
                            <HiEllipsisVertical className="w-5 h-5" />
                          </button>

                          {openOptions === String(msg._id) &&
                            typeof document !== 'undefined' &&
                            createPortal(
                              <div
                                ref={optionsRef}
                                style={{ top: optionsPosition.top, left: optionsPosition.left }}
                                className="fixed z-[9999] w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1"
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
                              </div>,
                              document.body,
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
            return msg.content?.trim() || '[Tin nhắn]';
          }}
          onUnpinMessage={onUnpinMessage}
        />
      )}
    </>
  );
}
