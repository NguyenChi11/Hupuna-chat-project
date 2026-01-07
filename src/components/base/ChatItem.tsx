'use client';

import React, { useEffect, useRef, useState } from 'react';
import { formatTimeAgo } from '../../utils/dateUtils';
import { formatMessagePreview } from './Sidebar';
import type { ChatItem as ChatItemType, GroupConversation } from '@/types/Group';
import type { User } from '@/types/User';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';

// React Icons – Bộ hiện đại nhất 2025
import {
  HiEye,
  HiEyeSlash,
  HiUserGroup,
  HiCheck,
  HiOutlineMapPin,
  HiPlus,
  HiEllipsisHorizontal,
  HiChevronUp,
} from 'react-icons/hi2';

interface ChatItemProps {
  item: ChatItemType;
  isGroup: boolean;
  selectedChat: ChatItemType | null;
  onSelectChat: (item: ChatItemType) => void;
  currentUserId: string;
  onChatAction: (roomId: string, actionType: 'pin' | 'hide', isChecked: boolean, isGroupChat: boolean) => void;
  categoryTags?: { id: string; label: string; color: string }[];
  userTags?: { id: string; label: string; color: string }[];
  onOpenTagManager?: () => void;
}

export default function ChatItem({
  item,
  isGroup,
  selectedChat,
  onSelectChat,
  onChatAction,
  currentUserId,
  categoryTags = [],
  userTags = [],
  onOpenTagManager,
}: ChatItemProps) {
  const CATEGORY_TAGS = categoryTags;
  const USER_TAGS = userTags;
  const isSelected = selectedChat?._id === item._id;
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number; align?: 'top' | 'bottom' } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item.avatar]);

  const unreadCount = item.unreadCount || 0;
  const isPinned = !!item.isPinned;
  const isHidden = !!item.isHidden;
  const [chatCategories, setChatCategories] = useState<string[]>([]);
  const storageKey = `chatCategories:${String(currentUserId)}:${String(item._id)}`;
  useEffect(() => {
    try {
      const fromServer =
        (item as unknown as { categories?: string[] }).categories ||
        (item as unknown as { categoriesBy?: Record<string, string[]> }).categoriesBy?.[String(currentUserId)] ||
        [];
      if (Array.isArray(fromServer) && fromServer.length > 0) {
        setChatCategories(fromServer.filter((x) => typeof x === 'string'));
      } else {
        const raw = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) setChatCategories(arr.filter((x) => typeof x === 'string'));
        }
      }
    } catch {}
  }, [currentUserId, item, storageKey]);
  useEffect(() => {
    const handler = (ev: Event) => {
      try {
        const anyEv = ev as unknown as { detail?: { userId?: string; roomId?: string; categories?: string[] } };
        const detail = anyEv.detail || {};
        if (String(detail.userId) !== String(currentUserId)) return;
        if (String(detail.roomId) !== String(item._id)) return;
        const arr = Array.isArray(detail.categories)
          ? detail.categories.filter((x: unknown) => typeof x === 'string')
          : [];
        setChatCategories(arr);
        try {
          localStorage.setItem(storageKey, JSON.stringify(arr));
        } catch {}
      } catch {}
    };
    window.addEventListener('chatCategoriesUpdated', handler as EventListener);
    return () => {
      window.removeEventListener('chatCategoriesUpdated', handler as EventListener);
    };
  }, [currentUserId, item._id, storageKey]);

  const [chatTags, setChatTags] = useState<string[]>([]);
  const storageKeyTags = `chatTags:${String(currentUserId)}:${String(item._id)}`;
  useEffect(() => {
    try {
      const fromServer =
        (item as unknown as { tags?: string[] }).tags ||
        (item as unknown as { tagsBy?: Record<string, string[]> }).tagsBy?.[String(currentUserId)] ||
        [];
      if (Array.isArray(fromServer) && fromServer.length > 0) {
        setChatTags(fromServer.filter((x) => typeof x === 'string'));
      } else {
        const raw = typeof window !== 'undefined' ? localStorage.getItem(storageKeyTags) : null;
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) setChatTags(arr.filter((x) => typeof x === 'string'));
        }
      }
    } catch {}
  }, [currentUserId, item, storageKeyTags]);
  useEffect(() => {
    const handler = (ev: Event) => {
      try {
        const anyEv = ev as unknown as { detail?: { userId?: string; roomId?: string; tags?: string[] } };
        const detail = anyEv.detail || {};
        if (String(detail.userId) !== String(currentUserId)) return;
        if (String(detail.roomId) !== String(item._id)) return;
        const arr = Array.isArray(detail.tags) ? detail.tags.filter((x: unknown) => typeof x === 'string') : [];
        setChatTags(arr);
        try {
          localStorage.setItem(storageKeyTags, JSON.stringify(arr));
        } catch {}
      } catch {}
    };
    window.addEventListener('chatTagsUpdated', handler as EventListener);
    return () => {
      window.removeEventListener('chatTagsUpdated', handler as EventListener);
    };
  }, [currentUserId, item._id, storageKeyTags]);
  const toggleTag = (id: string) => {
    setChatTags((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(storageKeyTags, JSON.stringify(next));
      } catch {}
      const isGroupChat = isGroup;
      const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
      const payload = isGroupChat
        ? {
            action: 'updateTags',
            _id: String(currentUserId),
            conversationId: String(item._id),
            data: { tags: next },
          }
        : {
            action: 'updateTags',
            currentUserId: String(currentUserId),
            roomId: String(item._id),
            data: { tags: next },
          };
      try {
        fetch(apiRoute, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => {});
      } catch {}
      return next;
    });
  };

  const toggleCategory = (id: string) => {
    setChatCategories((prev) => {
      const next = prev.includes(id) ? [] : [id];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      const isGroupChat = isGroup;
      const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
      const payload = isGroupChat
        ? {
            action: 'updateCategories',
            _id: String(currentUserId),
            conversationId: String(item._id),
            data: { categories: next },
          }
        : {
            action: 'updateCategories',
            currentUserId: String(currentUserId),
            roomId: String(item._id),
            data: { categories: next },
          };
      try {
        fetch(apiRoute, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => {});
      } catch {}
      return next;
    });
  };

  // Tối ưu: Gộp logic lấy tên + avatar char
  const displayName = React.useMemo(() => {
    if (isGroup) {
      const group = item as GroupConversation;
      if (group.name?.trim()) return group.name.trim();
      const names = group.members
        ?.map((m) => (m as unknown as User)?.name)
        .filter(Boolean)
        .slice(0, 3)
        .join(', ');
      return names || 'Nhóm trống';
    }
    const user = item as User;
    return user.nicknames?.[currentUserId] || user.name || user.username || 'Người dùng';
  }, [item, isGroup, currentUserId]);

  const lastMessage = item.lastMessage || (isGroup ? 'Nhóm mới tạo' : 'Bắt đầu trò chuyện');
  const timeDisplay = formatTimeAgo(item.lastMessageAt);

  const PRESENCE_THRESHOLD_MS = 5 * 60 * 1000;
  const presenceOnline = (() => {
    if (isGroup) return undefined;
    const u = item as User;
    const ls = u.lastSeen ?? null;
    if (ls != null) return Date.now() - ls <= PRESENCE_THRESHOLD_MS;
    return !!u.online;
  })();

  const sanitizeUrl = (u?: string) => {
    if (!u) return '';
    const s = String(u).trim();
    return s.replace(/^[('"]+/, '').replace(/[)'"]+$/, '');
  };
  const avatarSrc = React.useMemo(() => sanitizeUrl(getProxyUrl(item.avatar)), [item.avatar]);

  const resolvedAvatarSrc = React.useMemo(() => {
    const s = avatarSrc;
    if (!s) return '/logo/avata.webp';
    try {
      const u = new URL(s);
      const ok =
        (u.protocol === 'https:' && u.hostname === 'files.hupuna.vn' && u.pathname.startsWith('/api/files/')) ||
        (u.protocol === 'http:' &&
          u.hostname === '117.4.242.30' &&
          u.port === '8090' &&
          u.pathname.startsWith('/api/files/')) ||
        (u.protocol === 'https:' && u.hostname === 'cdn.jsdelivr.net') ||
        (u.protocol === 'https:' && u.hostname === 'mega.nz' && u.pathname.startsWith('/file/'));
      return ok ? s : '/logo/avata.webp';
    } catch {
      return '/logo/avata.webp';
    }
  }, [avatarSrc]);

  // Context menu thông minh
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const x = e.clientX;
    const y = e.clientY;
    const menuWidth = 240;

    const finalX = x + menuWidth > window.innerWidth ? window.innerWidth - menuWidth - 16 : x + 12;
    const isBottomHalf = y > window.innerHeight / 2;

    setMenuPosition({
      x: finalX,
      y: y,
      align: isBottomHalf ? 'bottom' : 'top',
    });
    setShowMenu(true);
  };

  const clearLongPressTimer = () => {
    if (longPressTimerRef.current != null) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    clearLongPressTimer();
    longPressTriggeredRef.current = false;
    const t = e.touches && e.touches[0];
    const x0 = t ? t.clientX : 0;
    const y0 = t ? t.clientY : 0;
    longPressTimerRef.current = window.setTimeout(() => {
      const menuWidth = 240;
      const finalX = x0 + menuWidth > window.innerWidth ? window.innerWidth - menuWidth - 16 : x0 + 12;
      const isBottomHalf = y0 > window.innerHeight / 2;

      setMenuPosition({
        x: finalX,
        y: y0,
        align: isBottomHalf ? 'bottom' : 'top',
      });
      setShowMenu(true);
      longPressTriggeredRef.current = true;
    }, 500);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const triggered = longPressTriggeredRef.current;
    clearLongPressTimer();
    if (triggered) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleTouchMove = () => {
    clearLongPressTimer();
  };

  const handleAction = (type: 'pin' | 'hide') => {
    setShowMenu(false);
    onChatAction(item._id, type, type === 'pin' ? !isPinned : !isHidden, isGroup);
  };

  // Click outside để đóng menu
  useEffect(() => {
    if (!showMenu) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [showMenu]);

  const [showTagSelector, setShowTagSelector] = useState(false);
  const [tagMenuPos, setTagMenuPos] = useState<{ x: number; y: number; align?: 'top' | 'bottom' } | null>(null);
  const [isTagExpanded, setIsTagExpanded] = useState(false);

  return (
    <>
      {/* Chat Item – SIÊU ĐẸP */}
      <div
        onClick={() => onSelectChat(item)}
        onContextMenu={handleContextMenu}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={clearLongPressTimer}
        onTouchMove={handleTouchMove}
        className={`
          group relative mx-1 rounded-[0.25rem] transition-all duration-300 cursor-pointer
          ${
            isSelected
              ? 'bg-blue-100 shadow-xl'
              : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50 hover:shadow-lg'
          }
          ${isHidden ? 'opacity-60' : ''}
        `}
      >
        <div className="flex items-center gap-1 md:gap-2 py-[0.5rem] md:py-1 px-2 ">
          <div className="flex flex-col items-center gap-2">
            {/* Avatar + Online + Group Icon */}
            <div className="relative flex-shrink-0">
              <div
                className={`
                w-12 h-12  rounded-4xl overflow-hidden ring-2 ring-white shadow-2xl flex items-center justify-center text-white font-bold text-2xl
                ${
                  isGroup
                    ? 'bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500'
                    : 'bg-gradient-to-br from-indigo-500 to-blue-600'
                }
              `}
              >
                {item.avatar && !imgError ? (
                  <Image
                    src={resolvedAvatarSrc}
                    alt={displayName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <Image
                    src="/logo/avata.webp"
                    alt={displayName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Online indicator (chỉ cá nhân) */}
              {!isGroup && (
                <div
                  className={`absolute bottom-0 right-0 w-3 md:w-4
               h-3 md:h-4 rounded-full border-2 md:border-3 border-white shadow-lg
                ${presenceOnline ? 'bg-green-400' : 'bg-gray-400'}`}
                />
              )}

              {/* Group icon */}
              {isGroup && (
                <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-2xl shadow-xl">
                  <HiUserGroup className="w-4 h-4 text-purple-600" />
                </div>
              )}

              {/* Pin icon – đẹp hơn */}
              {isPinned && (
                <div className="absolute -top-2 -left-2 p-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl animate-pulse">
                  <HiOutlineMapPin className="w-4 h-4 text-white rotate-12" />
                </div>
              )}
            </div>
            {chatCategories.length > 0 && (
              <div className="">
                <div className="flex flex-wrap gap-1">
                  {chatCategories.map((cat) => {
                    const found = CATEGORY_TAGS.find((c) => c.id === cat);
                    if (!found) return null;
                    return (
                      <span
                        key={cat}
                        className="inline-flex items-center gap-1.5 px-1 py-0.5 rounded-full text-[10px] font-medium bg-white/80 border border-gray-200 text-gray-700 shadow-sm"
                      >
                        <span className={`w-2 h-2 rounded-full ${found.color}`} />
                        <span className="truncate max-w-[1.75rem]">{found.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Nội dung */}
          <div className="flex-1 min-w-0 ml-1 transition-colors duration-150 border-b pb-2 border-gray-200 lg:border-b-0">
            <div className="flex items-center justify-between mb-1">
              <h4
                className={`
                 text-[1rem] md:text-[1.125rem] font-medium truncate max-w-[11rem]
                  ${unreadCount > 0 ? 'text-gray-900' : 'text-gray-500'}
                `}
              >
                {displayName}
              </h4>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <HiCheck className="w-4 h-4 text-indigo-500" />
                {timeDisplay}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p
                className={`
                  text-[0.875rem] md:text-[1rem] truncate max-w-[14rem]
                  ${unreadCount > 0 ? 'font-semibold text-gray-800' : 'text-gray-600'}
                `}
              >
                {item.isRecall ? 'Tin nhắn đã được thu hồi' : formatMessagePreview(lastMessage)}
              </p>

              {/* Unread Badge – đẹp hơn Zalo */}
              {unreadCount > 0 && (
                <div className="relative">
                  <div className="relative w-6 h-6 flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-600 rounded-full shadow-xl">
                    <span className="text-sm font-bold text-white">{unreadCount > 99 ? '99+' : unreadCount}</span>
                  </div>
                </div>
              )}
            </div>
            {(chatTags.length > 0 || showTagSelector) && (
              <div className="flex flex-wrap items-center gap-1 mt-2 relative z-10 w-full">
                {(isTagExpanded ? chatTags : chatTags.slice(0, 3)).map((tagId) => {
                  const found = USER_TAGS.find((t) => t.id === tagId);
                  if (!found) return null;
                  return (
                    <span
                      key={tagId}
                      className={`inline-block px-1.5 py-0.5 mb-[0.25rem] text-[10px] font-bold text-white rounded-[0.125rem] shadow-sm ${found.color} whitespace-nowrap`}
                    >
                      {found.label}
                    </span>
                  );
                })}
                {!isTagExpanded && chatTags.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTagExpanded(true);
                    }}
                    className="inline-flex items-center justify-center px-1 py-0.5 mb-[0.25rem] text-[10px] bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-[0.125rem] transition-colors"
                  >
                    <HiEllipsisHorizontal className="w-3 h-3" />
                  </button>
                )}
                {isTagExpanded && chatTags.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTagExpanded(false);
                    }}
                    className="inline-flex items-center justify-center px-1 py-0.5 mb-[0.25rem] text-[10px] bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-[0.125rem] transition-colors"
                    title="Thu gọn"
                  >
                    <HiChevronUp className="w-3 h-3" />
                  </button>
                )}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (showTagSelector) {
                        setShowTagSelector(false);
                      } else {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const isBottomHalf = rect.bottom > window.innerHeight / 2;
                        setTagMenuPos({
                          x: rect.left,
                          y: isBottomHalf ? rect.top - 4 : rect.bottom + 4,
                          align: isBottomHalf ? 'bottom' : 'top',
                        });
                        setShowTagSelector(true);
                      }
                    }}
                    className={`cursor-pointer p-0.5 rounded-[0.1  25rem] hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors ${
                      chatTags.length > 0 ? 'opacity-0 group-hover:opacity-100' : ''
                    } ${showTagSelector ? 'opacity-100 bg-gray-200 text-gray-600' : ''}`}
                    title="Thêm thẻ tag"
                  >
                    <HiPlus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showMenu && menuPosition && (
        <>
          <div className="fixed inset-0 z-[9998] " onClick={() => setShowMenu(false)} />

          <div
            ref={menuRef}
            style={{
              top: menuPosition.align === 'bottom' ? 'auto' : menuPosition.y,
              bottom: menuPosition.align === 'bottom' ? window.innerHeight - menuPosition.y : 'auto',
              left: menuPosition.x,
              position: 'fixed',
            }}
            className={`z-[9999] w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in duration-200 ${
              menuPosition.align === 'bottom' ? 'slide-in-from-bottom-2' : 'slide-in-from-top-2'
            }`}
          >
            {/* Ghim */}
            <button
              onClick={() => handleAction('pin')}
              className="flex cursor-pointer items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors gap-3 group"
            >
              <HiOutlineMapPin
                className={`w-5 h-5 ${isPinned ? 'text-orange-500 rotate-45' : 'text-gray-400 group-hover:text-gray-600'}`}
              />
              <span className="flex-1 text-left text-gray-700 font-medium text-sm">
                {isPinned ? 'Bỏ ghim' : 'Ghim lên đầu'}
              </span>
              {isPinned && <HiCheck className="w-4 h-4 text-orange-500" />}
            </button>

            {/* Ẩn/Hiện */}
            <button
              onClick={() => handleAction('hide')}
              className="flex cursor-pointer items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors gap-3 group border-t border-gray-100"
            >
              {isHidden ? (
                <HiEye className="w-5 h-5 text-green-500" />
              ) : (
                <HiEyeSlash className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              )}
              <span className="flex-1 text-left text-gray-700 font-medium text-sm">
                {isHidden ? 'Hiện lại' : 'Ẩn trò chuyện'}
              </span>
              {isHidden && <HiCheck className="w-4 h-4 text-green-500" />}
            </button>
            <div className="border-t border-gray-100">
              <div className="px-4 py-2 text-xs text-gray-500">Theo thẻ phân loại</div>
              <div className="max-h-30 overflow-auto custom-scrollbar">
                {CATEGORY_TAGS.map((cat) => {
                  const checked = chatCategories.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleCategory(cat.id)}
                      className="flex cursor-pointer items-center w-full px-4 py-2 hover:bg-gray-50 transition-colors gap-3"
                    >
                      <span className={`inline-block w-3.5 h-3.5 rounded-sm ${cat.color} border border-white`} />
                      <span className="flex-1 text-left text-gray-700 text-sm">{cat.label}</span>
                      <input type="checkbox" checked={checked} readOnly className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-gray-100">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="text-xs text-gray-500">Theo thẻ tags</div>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowTagSelector(true);
                  }}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  + Thêm
                </button>
              </div>
              <div className="max-h-30 overflow-auto custom-scrollbar">
                {USER_TAGS.map((tag) => {
                  const checked = chatTags.includes(tag.id);
                  return (
                    <button
                      key={tag.id}
                      onClick={() => toggleTag(tag.id)}
                      className="flex cursor-pointer items-center w-full px-4 py-2 hover:bg-gray-50 transition-colors gap-3"
                    >
                      <span className={`inline-block w-3.5 h-3.5 rounded-sm ${tag.color} border border-white`} />
                      <span className="flex-1 text-left text-gray-700 text-sm">{tag.label}</span>
                      <input type="checkbox" checked={checked} readOnly className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
      {showTagSelector && tagMenuPos && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={(e) => {
              e.stopPropagation();
              setShowTagSelector(false);
            }}
          />
          <div
            style={{
              top: tagMenuPos.align === 'bottom' ? 'auto' : tagMenuPos.y,
              bottom: tagMenuPos.align === 'bottom' ? window.innerHeight - tagMenuPos.y : 'auto',
              left: tagMenuPos.x,
              position: 'fixed',
            }}
            className="z-[9999] w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-1 max-h-48 overflow-y-auto custom-scrollbar">
              {USER_TAGS.length === 0 && <div className="text-xs text-gray-400 text-center py-2">Chưa có thẻ nào</div>}
              {USER_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className="flex items-center w-full gap-2 px-2 py-1.5 hover:bg-gray-50 rounded text-left transition-colors group/item"
                >
                  <div className={`w-3 h-3 rounded-full ${tag.color} shadow-sm`} />
                  <span className="flex-1 text-xs font-medium text-gray-700 truncate">{tag.label}</span>
                  {chatTags.includes(tag.id) && <HiCheck className="w-3.5 h-3.5 text-blue-500" />}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-100 p-1 bg-gray-50">
              <button
                onClick={() => {
                  setShowTagSelector(false);
                  onOpenTagManager?.();
                }}
                className="flex items-center justify-center w-full gap-1 px-2 py-1.5 text-xs text-blue-600 font-bold hover:bg-blue-100 rounded transition-colors"
              >
                <HiPlus className="w-3 h-3" /> Quản lý thẻ
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
