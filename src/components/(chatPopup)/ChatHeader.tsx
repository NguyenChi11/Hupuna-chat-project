'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getProxyUrl } from '../../utils/utils';

// React Icons - chuẩn Zalo, đẹp, nhẹ
import {
  HiArrowLeft,
  HiMagnifyingGlass,
  HiEllipsisVertical,
  HiUserGroup,
  HiPhone,
  HiVideoCamera,
  HiXMark,
} from 'react-icons/hi2';

interface ChatHeaderProps {
  chatName: string;
  isGroup: boolean;
  memberCount: number;
  showPopup: boolean;
  onTogglePopup: () => void;
  onOpenMembers: () => void;
  showSearchSidebar: boolean;
  onToggleSearchSidebar: () => void;
  avatar?: string;
  onBackFromChat?: () => void;
  presenceText?: string;
  presenceOnline?: boolean;
  onVoiceCall?: () => void;
  onVideoCall?: () => void;
  // Mobile inline search props
  isMobile?: boolean;
  isSearchActive?: boolean;
  initialKeyword?: string | null;
  onSearchTermChange?: (term: string) => void;
  onSearchFocus?: () => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
  onCloseSearch?: () => void;
}

export default function ChatHeader({
  chatName,
  isGroup,
  memberCount,
  showPopup,
  onTogglePopup,
  onOpenMembers,
  showSearchSidebar,
  onToggleSearchSidebar,
  avatar,
  onBackFromChat,
  presenceText,
  presenceOnline,
  onVoiceCall,
  onVideoCall,
  isMobile = false,
  isSearchActive = false,
  initialKeyword = null,
  onSearchTermChange,
  onSearchFocus,
  searchInputRef,
}: ChatHeaderProps) {
  const [imgError, setImgError] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const hasAutoSearchedRef = useRef(false);
  const lastInitialKeywordRef = useRef<string | null>(null);
  const manualCloseRef = useRef(false);

  useEffect(() => {
    setImgError(false);
  }, [avatar]);

  useEffect(() => {
    const kw = (initialKeyword || '').trim();
    if (!kw) return;
    setLocalSearchTerm(kw);
    if (isMobile && isSearchActive) {
      if (lastInitialKeywordRef.current === kw && hasAutoSearchedRef.current) return;
      hasAutoSearchedRef.current = true;
      lastInitialKeywordRef.current = kw;
      setTimeout(() => {
        searchInputRef?.current?.focus?.();
      }, 100);
      onSearchTermChange?.(kw);
    }
  }, [initialKeyword, isMobile, isSearchActive, onSearchTermChange]);

  useEffect(() => {
    if (!isMobile) return;
    if (isSearchActive) return;
    if (manualCloseRef.current) {
      manualCloseRef.current = false;
      hasAutoSearchedRef.current = false;
      lastInitialKeywordRef.current = null;
      // setLocalSearchTerm('');
      // onSearchTermChange?.('');
    }
  }, [isSearchActive, isMobile, onSearchTermChange]);

  // Mobile: Show inline search bar when active
  if (isMobile && isSearchActive) {
    return (
      <div className="flex items-center gap-2 px-2 py-2 bg-white border-b border-gray-200 shadow-sm">
        {/* Back button */}
        <button
          onClick={() => {
            if (isSearchActive) {
              // Nếu đang tìm kiếm: Chỉ thoát chế độ tìm kiếm
              manualCloseRef.current = true;
              setLocalSearchTerm('');
              onSearchTermChange?.('');
              onToggleSearchSidebar?.();
            } else {
              // Nếu KHÔNG tìm kiếm: Gọi hàm quay lại danh sách chat
              onBackFromChat?.();
            }
          }}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0"
          title="Quay lại"
        >
          <HiArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Search icon */}
        <HiMagnifyingGlass className="w-5 h-5 text-gray-500 flex-shrink-0" />

        {/* Search input */}
        <div className="flex-1 relative">
          <input
            ref={searchInputRef}
            type="text"
            value={localSearchTerm}
            onChange={(e) => {
              setLocalSearchTerm(e.target.value);
              onSearchTermChange?.(e.target.value);
            }}
            onFocus={onSearchFocus}
            placeholder="Tìm kiếm..."
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            autoFocus
          />
          {localSearchTerm && (
            <button
              onClick={() => {
                setLocalSearchTerm('');
                onSearchTermChange?.('');
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <HiXMark className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Desktop/Normal header
  return (
    <div className="flex items-center cursor-pointer justify-between px-2 bg-white border-b border-gray-200 shadow-sm">
      {/* Left: Back + Avatar + Tên */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Nút Back (mobile only) */}
        {onBackFromChat && (
          <button
            onClick={onBackFromChat}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors lg:hidden cursor-pointer"
            title="Quay lại"
          >
            <HiArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div
            className={`
            w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md overflow-hidden ring-2 ring-white
            ${isGroup ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-gray-400 to-gray-600'}
          `}
          >
            {avatar && !imgError ? (
              <Image
                src={getProxyUrl(avatar)}
                alt={chatName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <Image
                src="/logo/avata.webp"
                alt={chatName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {!isGroup && (
            <div
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white shadow-sm ${
                presenceOnline ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
          )}
        </div>

        {/* Tên + info */}
        <button
          onClick={onOpenMembers}
          className="flex-1 min-w-0 cursor-pointer text-left hover:bg-gray-50 rounded-xl px-3 py-2 -ml-2 transition-colors"
        >
          <h1 className="font-semibold text-gray-900 truncate text-base md:text-[1.125rem]">{chatName}</h1>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            {isGroup ? (
              <>
                <HiUserGroup className="w-3.5 h-3.5" />
                {memberCount} thành viên
              </>
            ) : (
              <>{presenceText || 'Đang hoạt động'}</>
            )}
          </p>
        </button>
      </div>

      <div className="flex items-center gap-1">
        {/* {!isGroup && (
          <>
            {typeof onVoiceCall === 'function' && (
              <button
                onClick={onVoiceCall}
                className="p-2.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100 text-gray-600"
                title="Gọi thoại"
              >
                <HiPhone className="w-5 h-5" />
              </button>
            )}
            {typeof onVideoCall === 'function' && (
              <button
                onClick={onVideoCall}
                className="p-2.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-100 text-gray-600"
                title="Gọi video"
              >
                <HiVideoCamera className="w-5 h-5" />
              </button>
            )}
          </>
        )} */}

        {/* Nút tìm kiếm - Mobile: Toggle inline search, Desktop: Toggle sidebar */}
        <button
          onClick={() => {
            if (isMobile) {
              // Mobile: Toggle inline search
              if (onToggleSearchSidebar) onToggleSearchSidebar();
            } else {
              // Desktop: Toggle sidebar
              if (showPopup) onTogglePopup();
              if (onToggleSearchSidebar) onToggleSearchSidebar();
            }
          }}
          className={`
            p-2.5 rounded-full cursor-pointer transition-all duration-200
            ${showSearchSidebar || isSearchActive ? 'bg-blue-100 text-blue-600 shadow-sm' : 'hover:bg-gray-100 text-gray-600'}
          `}
          title="Tìm kiếm tin nhắn"
        >
          <HiMagnifyingGlass className="w-5 h-5" />
        </button>

        {/* Nút More */}
        <button
          onClick={() => {
            if (showSearchSidebar) onToggleSearchSidebar();
            onTogglePopup();
          }}
          className={`
            p-1.5 rounded-full cursor-pointer transition-all duration-200 relative
            ${showPopup ? 'bg-blue-100 text-blue-600 shadow-sm' : 'hover:bg-gray-100 text-gray-600'}
          `}
          title="Thông tin trò chuyện"
        >
          <HiEllipsisVertical className="w-4 h-4" />
          {/* Chấm tròn khi popup đang mở */}
          {showPopup && <div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full" />}
        </button>
      </div>
    </div>
  );
}
