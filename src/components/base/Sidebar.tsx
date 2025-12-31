'use client';

import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import ChatItem from './ChatItem';
import SearchResults from '@/components/(chatPopup)/SearchResults';
import { User } from '../../types/User';
import type { GroupConversation, ChatItem as ChatItemType } from '../../types/Group';
import { getProxyUrl } from '../../utils/utils';
import MessageFilter, { FilterType } from '../(chatPopup)/MessageFilter';
import SidebarMobileMenu from './SidebarMobileMenu';

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

// React Icons – Bộ hiện đại nhất 2025
import {
  HiMagnifyingGlass,
  HiXMark,
  HiUserCircle,
  HiChatBubbleLeftRight,
  HiFolder,
  HiEllipsisVertical,
  HiCalendarDays,
  HiClock,
  HiUserGroup,
} from 'react-icons/hi2';
import { useRouter, usePathname } from 'next/navigation';
import { useFolderController } from '@/components/controller/useFolderController';
import DesktopLayout from '@/components/layout/folder/DesktopLayout';
import MobileLayout from '@/components/layout/folder/MobileLayout';
import FolderCreateModal from '@/components/modal/folder/FolderCreateModal';
import RenameModal from '@/components/modal/folder/RenameModal';
import DeleteModal from '@/components/modal/folder/DeleteModal';
import ReactDOM from 'react-dom';
import RoomSearchResultsModal from '@/components/(search)/RoomSearchResultsModal';
import ComingSoonModal from '@/components/modal/ComingSoonModal';

interface SidebarProps {
  currentUser: User;
  groups: GroupConversation[];
  allUsers: User[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setShowCreateGroupModal: (show: boolean) => void;
  selectedChat: ChatItemType | null;
  onSelectChat: (item: ChatItemType) => void;
  onChatAction: (roomId: string, actionType: 'pin' | 'hide', isChecked: boolean, isGroup: boolean) => void;
  onNavigateToMessage: (message: Message, searchKeyword?: string) => void;
  styleWidget?: string;
  onlyGroups?: boolean;
  onlyPersonal?: boolean;
}

interface Message {
  _id: string;
  content?: string;
  type: 'text' | 'image' | 'file' | 'sticker' | 'video' | 'reminder';
  fileName?: string;
  timestamp: number;
  sender: string;
  senderName: string;
  roomId: string;
  roomName: string;
  isGroupChat: boolean;
  partnerId?: string;
  partnerName?: string;
  fileUrl?: string;
}

interface GlobalSearchResult {
  contacts: ChatItemType[];
  messages: Message[];
}

const getChatDisplayName = (chat: ChatItemType, currentUserId?: string): string => {
  const maybeGroup = chat as GroupConversation;
  const isGroupChat = maybeGroup.isGroup === true || Array.isArray(maybeGroup.members);

  if (isGroupChat) {
    return (maybeGroup.name || '').trim() || 'Nhóm';
  }

  const user = chat as User;
  if (currentUserId && user.nicknames?.[currentUserId]) {
    return user.nicknames[currentUserId].trim();
  }
  return (user.name || user.username || 'Người dùng').trim();
};

export const formatMessagePreview = (content: string | undefined, maxLength: number = 50): string => {
  if (!content) return '';
  const formatted = content.replace(/@\[([^\]]+)\]\([^)]+\)/g, '@$1');
  if (formatted.length > maxLength) {
    return formatted.slice(0, maxLength) + '...';
  }
  return formatted;
};

export const parseMentions = (text: string): { mentions: string[]; displayText: string } => {
  const mentionRegex = /@\[([^\]]+)\]\(([^)]+)\)/g;
  const mentions: string[] = [];
  let match;

  while ((match = mentionRegex.exec(text)) !== null) {
    mentions.push(match[2]);
  }

  return { mentions, displayText: text };
};

export const renderMessageWithMentions = (
  content: string,
  currentUserId: string,
  isMe: boolean = false,
): React.ReactNode => {
  if (!content) return null;

  const parts = content.split(/(@\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const mentionMatch = part.match(/@\[([^\]]+)\]\(([^)]+)\)/);
    if (mentionMatch) {
      const [, displayName, userId] = mentionMatch;
      const isMentioningMe = userId === currentUserId;

      return (
        <span
          key={index}
          className={`font-semibold px-1 rounded ${
            isMentioningMe
              ? 'bg-yellow-300 text-yellow-900'
              : isMe
                ? 'bg-blue-300 text-blue-900'
                : 'bg-gray-300 text-gray-900'
          }`}
        >
          @{displayName}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export default function Sidebar({
  currentUser,
  groups,
  allUsers,
  searchTerm,
  setSearchTerm,
  setShowCreateGroupModal,
  selectedChat,
  onSelectChat,
  onChatAction,
  onNavigateToMessage,
  styleWidget = '',
  onlyGroups = false,
  onlyPersonal = false,
}: SidebarProps) {
  const [activeExtraTab, setActiveExtraTab] = useState<'calendar' | 'reminder' | 'offline'>('calendar');
  const currentUserId = currentUser._id;
  const [activeTab, setActiveTab] = useState<'all' | 'contacts' | 'messages' | 'files'>('all');
  const [globalSearchResults, setGlobalSearchResults] = useState<GlobalSearchResult>({
    contacts: [],
    messages: [],
  });
  const [isSearching, setIsSearching] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [filterType, setFilterType] = useState<FilterType>('all');
  const router = useRouter();
  const pathname = usePathname();
  const isWidgetIframe = pathname === '/chat-iframe' || (pathname?.startsWith('/chat-iframe') ?? false);
  const [showGlobalFolder, setShowGlobalFolder] = useState(false);
  const [showRoomsSharedFolder, setShowRoomsSharedFolder] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const [showComingSoon, setShowComingSoon] = useState<{ isOpen: boolean; title: string; desc: string }>({
    isOpen: false,
    title: '',
    desc: '',
  });
  const [roomResultsModal, setRoomResultsModal] = useState<{
    roomId: string;
    roomName: string;
    roomAvatar?: string;
    isGroupChat: boolean;
  } | null>(null);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('__return_room_results__') : null;
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data && data.origin === 'sidebar') {
        setSearchTerm((data.keyword || '').toString());
        setRoomResultsModal({
          roomId: data.roomId,
          roomName: data.roomName,
          roomAvatar: data.roomAvatar,
          isGroupChat: !!data.isGroupChat,
        });
        localStorage.removeItem('__return_room_results__');
      }
    } catch {}
  }, [selectedChat]);

  // === TẤT CẢ LOGIC GIỮ NGUYÊN NHƯ BẠN ĐÃ VIẾT ===
  const handleGlobalSearch = useCallback(
    async (term: string) => {
      if (!term.trim() || !currentUser) {
        setGlobalSearchResults({ contacts: [], messages: [] });
        return;
      }

      const lowerCaseTerm = term.toLowerCase();
      let allChats: ChatItemType[] = [...groups, ...allUsers];
      if (onlyGroups) {
        allChats = [...groups];
      } else if (onlyPersonal) {
        allChats = [...allUsers];
      }

      const contactResults = allChats
        .filter((c) => getChatDisplayName(c, String(currentUserId)).toLowerCase().includes(lowerCaseTerm))
        .slice(0, 10);

      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'globalSearch',
            data: { userId: currentUser._id, searchTerm: term, limit: 50 },
          }),
        });

        const messageData = await res.json();
        const rawMessages = messageData.data || [];
        let messages = rawMessages;
        if (onlyGroups) {
          messages = rawMessages.filter((m: Message) => m.isGroupChat);
        } else if (onlyPersonal) {
          messages = rawMessages.filter((m: Message) => !m.isGroupChat);
        }

        setGlobalSearchResults({
          contacts: contactResults,
          messages: messages,
        });
      } catch (e) {
        console.error('Global search error:', e);
        setGlobalSearchResults({ contacts: contactResults, messages: [] });
      }
    },
    [currentUser, groups, allUsers, onlyGroups, onlyPersonal, currentUserId],
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!value.trim()) {
      setGlobalSearchResults({ contacts: [], messages: [] });
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    debounceRef.current = setTimeout(() => {
      handleGlobalSearch(value);
      setIsSearching(false);
    }, 400);
  };

  useEffect(() => {
    if (searchTerm.trim() && globalSearchResults.contacts.length === 0 && globalSearchResults.messages.length === 0) {
      setIsSearching(true);
      void (async () => {
        await handleGlobalSearch(searchTerm);
        setIsSearching(false);
      })();
    }
  }, [searchTerm, globalSearchResults.contacts.length, globalSearchResults.messages.length, handleGlobalSearch]);
  const regularMessages = useMemo(
    () => globalSearchResults.messages.filter((msg) => !['file', 'image', 'video'].includes(msg.type)),
    [globalSearchResults.messages],
  );

  const fileMessages = useMemo(
    () => globalSearchResults.messages.filter((msg) => ['file', 'image', 'video'].includes(msg.type)),
    [globalSearchResults.messages],
  );

  const groupedMessages = useMemo(() => {
    const map = new Map();
    regularMessages.forEach((msg) => {
      if (!msg.roomId) return;
      const key = msg.roomId;
      if (!map.has(key)) {
        map.set(key, {
          roomId: msg.roomId,
          roomName: msg.roomName || 'Cuộc trò chuyện',
          isGroupChat: msg.isGroupChat || false,
          messages: [],
          latestTimestamp: msg.timestamp || Date.now(),
        });
      }
      map.get(key).messages.push(msg);
    });
    return Array.from(map.values());
  }, [regularMessages]);

  const groupedFiles = useMemo(() => {
    const map = new Map();
    fileMessages.forEach((msg) => {
      if (!msg.roomId) return;
      const key = msg.roomId;
      if (!map.has(key)) {
        map.set(key, {
          roomId: msg.roomId,
          roomName: msg.roomName || 'Cuộc trò chuyện',
          isGroupChat: msg.isGroupChat || false,
          files: [],
          latestTimestamp: msg.timestamp || Date.now(),
        });
      }
      map.get(key).files.push(msg);
    });
    return Array.from(map.values());
  }, [fileMessages]);

  const hasSearchResults = globalSearchResults.contacts.length > 0 || globalSearchResults.messages.length > 0;
  const isSearchActive = searchTerm.trim().length > 0;

  const handleSelectContact = (contact: ChatItemType) => {
    onSelectChat(contact);
    setSearchTerm('');
    setGlobalSearchResults({ contacts: [], messages: [] });
  };

  const mixedChats = useMemo<ChatItemType[]>(() => {
    if (onlyGroups) {
      return [...groups];
    }
    if (onlyPersonal) {
      return [...allUsers];
    }
    return [...groups, ...allUsers];
  }, [groups, allUsers, onlyGroups, onlyPersonal, currentUserId]);

  const filteredAndSortedChats = useMemo(() => {
    let filtered = mixedChats.filter((chat: ChatItemType) => {
      const isHidden = chat.isHidden;
      const displayName = getChatDisplayName(chat, String(currentUserId));
      const matchesSearch = isSearchActive ? displayName.toLowerCase().includes(searchTerm.toLowerCase()) : true;

      if (isSearchActive) return matchesSearch;
      if (filterType === 'hidden') return isHidden && matchesSearch;
      return !isHidden && matchesSearch;
    });

    if (!isSearchActive) {
      if (filterType === 'group') {
        filtered = filtered.filter((c) => c.isGroup === true || Array.isArray((c as GroupConversation).members));
      } else if (filterType === 'personal') {
        filtered = filtered.filter((c) => !(c.isGroup === true || Array.isArray((c as GroupConversation).members)));
      } else if (filterType === 'unread') {
        filtered = filtered.filter((c) => (c.unreadCount || 0) > 0);
      } else if (filterType === 'read') {
        filtered = filtered.filter((c) => (c.unreadCount || 0) === 0);
      }
    }

    if (!isSearchActive && filterType !== 'hidden') {
      // no-op, handled above
    }

    filtered.sort((a, b) => {
      const timeA = a.lastMessageAt || 0;
      const timeB = b.lastMessageAt || 0;
      const aPinned = a.isPinned || false;
      const bPinned = b.isPinned || false;

      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
      if (timeA === 0 && timeB === 0) {
        return getChatDisplayName(a).localeCompare(getChatDisplayName(b));
      }
      return timeB - timeA;
    });

    return filtered;
  }, [mixedChats, searchTerm, filterType, isSearchActive]);

  const filterCounts = useMemo(() => {
    const visible = mixedChats.filter((c) => !c.isHidden);
    const hidden = mixedChats.filter((c) => c.isHidden);
    const groupVisible = visible.filter((c) => c.isGroup === true || Array.isArray((c as GroupConversation).members));
    const personalVisible = visible.filter(
      (c) => !(c.isGroup === true || Array.isArray((c as GroupConversation).members)),
    );
    return {
      all: visible.length,
      unread: visible.filter((c) => (c.unreadCount || 0) > 0).length,
      read: visible.filter((c) => (c.unreadCount || 0) === 0).length,
      group: groupVisible.length,
      personal: personalVisible.length,
      hidden: hidden.length,
    };
  }, [mixedChats]);

  useEffect(() => {
    if (filterType === 'hidden' && filterCounts.hidden === 0) {
      setFilterType('all');
    }
  }, [filterType, filterCounts.hidden]);

  return (
    <aside
      id="left-sidebar-container"
      className="relative flex flex-col h-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 border-r border-gray-200 w-full lg:w-[20rem] shadow-2xl overflow-hidden"
    >
      {/* HEADER GRADIENT SIÊU SANG */}
      <div className="bg-blue-400 shadow-2xl lg:bg-white lg:shadow-none mb-1">
        <div className="px-2 pb-3 pt-3 lg:px-2 lg:py-3 ">
          <div className="flex items-center gap-4 lg:gap-3">
            <div className="relative flex-1 group">
              {/* Icon kính lúp */}
              <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 lg:text-gray-500 pointer-events-none z-10 transition-colors duration-300 group-focus-within:text-[#0068ff] group-focus-within:opacity-100" />

              <input
                ref={searchInputRef}
                type="text"
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-10 py-1 bg-transparent rounded-xl focus:outline-none focus:bg-white transition-all duration-300 text-base text-white placeholder-white/70 focus:text-gray-800 focus:placeholder-gray-500 lg:pl-10 lg:py-2 lg:bg-[#EAEDF0] lg:rounded-md lg:text-sm lg:text-gray-900 lg:placeholder-gray-500 lg:focus:ring-1 lg:focus:ring-[#0068ff]"
              />

              {/* Nút xóa */}
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setGlobalSearchResults({ contacts: [], messages: [] });
                  }}
                  className="absolute cursor-pointer right-3 lg:right-2 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-6 lg:h-6 rounded-full bg-white/20 hover:bg-white/30 group-focus-within:bg-gray-300 group-focus-within:hover:bg-gray-400 lg:bg-transparent lg:hover:bg-gray-200 lg:group-focus-within:bg-transparent transition-all duration-300 flex items-center justify-center active:scale-95"
                >
                  <HiXMark className="w-4 h-4 text-white group-focus-within:text-gray-600 lg:text-gray-500 transition-colors duration-300" />
                </button>
              )}
            </div>

            {!isWidgetIframe && (
              <div className="flex items-center gap-4 lg:gap-1">
                {!onlyPersonal && (
                  <button
                    onClick={() => setShowCreateGroupModal(true)}
                    className="cursor-pointer w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-3xl backdrop-blur-sm lg:bg-transparent lg:hover:bg-gray-100 lg:rounded-md transition-all active:scale-95 group"
                    title="Tạo nhóm mới"
                  >
                    {/* Old Icon */}
                    <FaPlus className="w-4 h-4 text-white lg:hidden" />
                    {/* New Icon */}
                    <div className="hidden lg:block relative">
                      <HiUserGroup className="w-5 h-5 text-gray-600 group-hover:text-[#0068ff] transition-colors" />
                      <span className="absolute -top-1 -right-1 text-[10px] text-gray-600 font-bold">+</span>
                    </div>
                  </button>
                )}

                <div className="relative">
                  <button
                    ref={mobileMenuButtonRef}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="cursor-pointer p-1 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-3xl backdrop-blur-sm lg:bg-transparent lg:hover:bg-gray-100 lg:rounded-md transition-all active:scale-95 group"
                  >
                    {/* Old Icon */}
                    <HiEllipsisVertical className="w-5 h-5 text-white text-sm lg:hidden" />
                    {/* New Icon */}
                    <FaPlus className="hidden lg:block w-5 h-5 text-gray-600 group-hover:text-[#0068ff] transition-colors" />
                  </button>

                  <SidebarMobileMenu
                    isOpen={showMobileMenu}
                    onClose={() => setShowMobileMenu(false)}
                    filterType={filterType}
                    setFilterType={setFilterType}
                    counts={filterCounts}
                    onOpenCreateGroup={() => setShowCreateGroupModal(true)}
                    onOpenGlobalFolder={() => setShowGlobalFolder(true)}
                    buttonRef={mobileMenuButtonRef}
                    onlyGroups={onlyGroups}
                    onlyPersonal={onlyPersonal}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {onlyGroups && (
        <div className="flex items-center justify-around px-2 py-3 bg-white border-b border-gray-200 md:hidden">
          <button
            onClick={() =>
              setShowComingSoon({
                isOpen: true,
                title: 'Lịch nhóm',
                desc: 'Tính năng Lịch nhóm đang được phát triển để giúp bạn quản lý thời gian hiệu quả hơn.',
              })
            }
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${
              activeExtraTab === 'calendar'
                ? 'bg-blue-50 text-blue-600 shadow-sm'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            <HiCalendarDays className="w-6 h-6" />
            <span className="text-[10px] font-medium leading-none">Lịch</span>
          </button>
          <button
            onClick={() =>
              setShowComingSoon({
                isOpen: true,
                title: 'Nhắc hẹn',
                desc: 'Tính năng Nhắc hẹn sẽ sớm ra mắt để bạn không bỏ lỡ bất kỳ sự kiện quan trọng nào.',
              })
            }
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${
              activeExtraTab === 'reminder'
                ? 'bg-blue-50 text-blue-600 shadow-sm'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            <HiClock className="w-6 h-6" />
            <span className="text-[10px] font-medium leading-none">Nhắc hẹn</span>
          </button>
          <button
            onClick={() =>
              setShowComingSoon({
                isOpen: true,
                title: 'Nhóm Offline',
                desc: 'Tính năng Nhóm Offline đang được xây dựng để kết nối mọi người dễ dàng hơn.',
              })
            }
            className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 mx-1 ${
              activeExtraTab === 'offline'
                ? 'bg-blue-50 text-blue-600 shadow-sm'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            <HiUserGroup className="w-6 h-6" />
            <span className="text-[10px] font-medium leading-none">Nhóm Offline</span>
          </button>
        </div>
      )}

      {/* Chat List */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-b from-white/80 to-gray-50/80 custom-scrollbar">
        {isSearchActive ? (
          <SearchResults
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isSearching={isSearching}
            hasResults={hasSearchResults}
            contacts={globalSearchResults.contacts}
            groupedMessages={groupedMessages}
            groupedFiles={groupedFiles}
            fileMessages={fileMessages}
            searchTerm={searchTerm}
            onSelectContact={handleSelectContact}
            onNavigateToMessage={(msg) => {
              onNavigateToMessage(msg, searchTerm);
              // Giữ nguyên searchTerm và danh sách kết quả để không bị mất
            }}
            currentUserId={String(currentUserId)}
            onOpenRoomResults={(rid, rname, isGroup, avatar) =>
              setRoomResultsModal({ roomId: rid, roomName: rname, isGroupChat: isGroup, roomAvatar: avatar })
            }
          />
        ) : (
          <>
            {filteredAndSortedChats.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-8 text-gray-400">
                <div className="p-8 bg-gray-100 rounded-full mb-6">
                  <HiChatBubbleLeftRight className="w-16 h-16 text-gray-300" />
                </div>
                <p className="text-lg font-medium text-gray-500">
                  {filterType === 'unread' && 'Không có tin nhắn chưa đọc'}
                  {filterType === 'read' && 'Không có tin nhắn đã đọc'}
                  {filterType === 'hidden' && 'Không có cuộc trò chuyện ẩn'}
                  {filterType === 'all' && 'Bắt đầu một cuộc trò chuyện mới!'}
                </p>
                {filterType === 'all' && <p className="text-sm mt-2 text-gray-400">Nhấn vào nút tạo nhóm để bắt đầu</p>}
              </div>
            ) : (
              <div className={`space-y-1 pb-20 ${styleWidget}`}>
                {filteredAndSortedChats.map((item: ChatItemType) => {
                  const isGroupItem = item.isGroup === true || Array.isArray(item.members);
                  return (
                    <ChatItem
                      key={item._id}
                      item={item}
                      isGroup={isGroupItem}
                      selectedChat={selectedChat}
                      onSelectChat={onSelectChat}
                      onChatAction={onChatAction}
                      currentUserId={currentUserId}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />

      {showGlobalFolder && (
        <GlobalFolderModal currentUserId={String(currentUser._id)} onClose={() => setShowGlobalFolder(false)} />
      )}
      {showRoomsSharedFolder && (
        <RoomsSharedFolderModal
          currentUserId={String(currentUser._id)}
          onClose={() => setShowRoomsSharedFolder(false)}
        />
      )}
      {roomResultsModal && (
        <RoomSearchResultsModal
          isOpen={!!roomResultsModal}
          roomId={roomResultsModal.roomId}
          roomName={roomResultsModal.roomName}
          roomAvatar={roomResultsModal.roomAvatar}
          isGroupChat={roomResultsModal.isGroupChat}
          keyword={searchTerm}
          allUsers={allUsers}
          anchorToParent
          onClose={() => setRoomResultsModal(null)}
          onNavigateToMessage={(m, kw) => {
            onNavigateToMessage(m, kw);
            setRoomResultsModal(null);
          }}
        />
      )}
      {showComingSoon.isOpen && (
        <ComingSoonModal
          isOpen={showComingSoon.isOpen}
          onClose={() => setShowComingSoon({ ...showComingSoon, isOpen: false })}
          title={showComingSoon.title}
          description={showComingSoon.desc}
        />
      )}
    </aside>
  );
}

function GlobalFolderModal({ currentUserId, onClose }: { currentUserId: string; onClose: () => void }) {
  const controller = useFolderController({
    roomId: '__global__sidebar__',
    currentUserId,
    messages: [],
  });

  React.useEffect(() => {
    controller.setSelectedScope('global');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-200 ">
        <div className="flex items-center justify-between px-4 py-3  border-b-gray-300 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <HiFolder className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Folder dùng chung</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 cursor-pointer">
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          {controller.compact ? (
            <MobileLayout {...controller} onClose={onClose} onlyGlobal />
          ) : (
            <DesktopLayout {...controller} onClose={onClose} onlyGlobal />
          )}
        </div>
      </div>
      {controller.showCreateModal && (
        <FolderCreateModal
          isOpen={controller.showCreateModal}
          folders={controller.foldersGlobal}
          defaultParentId={controller.createParentId || undefined}
          lockParent={!!controller.createParentId}
          onClose={() => {
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
          onCreate={(name: string, parentId?: string) => {
            controller.createFolder(name, parentId);
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
        />
      )}
      <RenameModal
        open={!!controller.renameTarget}
        name={controller.renameInput}
        onChangeName={(v) => controller.setRenameInput(v)}
        onCancel={() => controller.setRenameTarget(null)}
        onSave={controller.saveRename}
      />
      <DeleteModal
        open={!!controller.deleteTarget}
        name={controller.deleteTarget?.name || ''}
        onCancel={() => controller.setDeleteTarget(null)}
        onConfirm={controller.confirmDeleteFolder}
      />
    </div>
  );
  if (typeof document === 'undefined') return null;
  return ReactDOM.createPortal(modal, document.body);
}

function RoomsSharedFolderModal({ currentUserId, onClose }: { currentUserId: string; onClose: () => void }) {
  const controller = useFolderController({
    roomId: '__shared_rooms__sidebar__',
    currentUserId,
    messages: [],
  });

  React.useEffect(() => {
    controller.setSelectedScope('rooms_shared');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-200 ">
        <div className="flex items-center justify-between px-4 py-3  border-b-gray-300 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <HiFolder className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Folder dùng chung các đoạn chat</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 cursor-pointer">
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          {controller.compact ? (
            <MobileLayout {...controller} onClose={onClose} />
          ) : (
            <DesktopLayout {...controller} onClose={onClose} />
          )}
        </div>
      </div>
      {controller.showCreateModal && (
        <FolderCreateModal
          isOpen={controller.showCreateModal}
          folders={controller.folders}
          defaultParentId={controller.createParentId || undefined}
          lockParent={!!controller.createParentId}
          onClose={() => {
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
          onCreate={(name: string, parentId?: string) => {
            controller.createFolder(name, parentId);
            controller.setShowCreateModal(false);
            controller.setCreateParentId(null);
          }}
        />
      )}
      <RenameModal
        open={!!controller.renameTarget}
        name={controller.renameInput}
        onChangeName={(v) => controller.setRenameInput(v)}
        onCancel={() => controller.setRenameTarget(null)}
        onSave={controller.saveRename}
      />
      <DeleteModal
        open={!!controller.deleteTarget}
        name={controller.deleteTarget?.name || ''}
        onCancel={() => controller.setDeleteTarget(null)}
        onConfirm={controller.confirmDeleteFolder}
      />
    </div>
  );
  if (typeof document === 'undefined') return null;
  return ReactDOM.createPortal(modal, document.body);
}
