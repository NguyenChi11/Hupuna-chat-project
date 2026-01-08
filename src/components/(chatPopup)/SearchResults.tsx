/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import Image from 'next/image';
import { getProxyUrl, buildAccentInsensitiveRegex } from '@/utils/utils';
import type { ChatItem as ChatItemType } from '@/types/Group';
import type { User } from '@/types/User';

// React Icons – Bộ hiện đại nhất 2025
import {
  HiUser,
  HiUsers,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiMagnifyingGlass,
  HiChevronRight,
  HiClock,
  HiFolder,
  HiGlobeAlt,
} from 'react-icons/hi2';

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
  fileUrl?: string;
}

interface MessageGroup {
  roomId: string;
  roomName: string;
  avatar: string;
  isGroupChat: boolean;
  messages: Message[];
}
interface FileGroup {
  roomId: string;
  avatar: string;
  roomName: string;
  isGroupChat: boolean;
  files: Message[];
}

interface SearchResultsProps {
  activeTab: 'all' | 'contacts' | 'messages' | 'files';
  setActiveTab: (tab: 'all' | 'contacts' | 'messages' | 'files') => void;
  isSearching: boolean;
  hasResults: boolean;
  contacts: ChatItemType[];
  groupedMessages: MessageGroup[];
  groupedFiles: FileGroup[];
  fileMessages: Message[];
  searchTerm: string;
  onSelectContact: (contact: ChatItemType) => void;
  onNavigateToMessage: (message: Message) => void;
  currentUserId?: string;
  onOpenRoomResults?: (roomId: string, roomName: string, isGroupChat: boolean, avatar?: string) => void;
}

// === TABS SIÊU ĐẸP ===
const SearchTabs = ({
  activeTab,
  setActiveTab,
  contactsCount,
  messagesCount,
}: {
  activeTab: 'all' | 'contacts' | 'messages' | 'files';
  setActiveTab: (tab: 'all' | 'contacts' | 'messages' | 'files') => void;
  contactsCount: number;
  messagesCount: number;
}) => {
  const tabs = [
    {
      key: 'all' as const,
      label: 'Tất cả',
      icon: HiMagnifyingGlass,
      count: contactsCount + messagesCount,
    },
    { key: 'contacts' as const, label: 'Liên hệ', icon: HiUser, count: contactsCount },
    { key: 'messages' as const, label: 'Tin nhắn', icon: HiChatBubbleLeftRight, count: messagesCount },
  ];

  const formatCount = (n: number) => (n >= 99 ? '99+' : String(n));
  return (
    <div className="flex flex-nowrap border-b border-gray-200 bg-white sticky top-0 z-5 -mx-4 px-4 ">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-shrink-0 flex cursor-pointer items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition-all relative ${
              isActive ? 'text-[#0088ff]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>{tab.label}</span>
            {isActive && <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0088ff] rounded-full" />}
          </button>
        );
      })}
    </div>
  );
};

// === HIGHLIGHT TEXT ĐẸP NHƯ ZALO 2025 ===
const HighlightText = ({ text, keyword }: { text: string; keyword: string }) => {
  if (!keyword.trim() || !text) return <span className="text-gray-800">{text}</span>;
  const regex = buildAccentInsensitiveRegex(keyword);
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className=" text-blue-600 md:text-blue-700 rounded ">
            {part}
          </span>
        ) : (
          <span key={i} className="text-gray-800">
            {part}
          </span>
        ),
      )}
    </span>
  );
};

// === LOADING & EMPTY STATE ===
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-16 text-gray-500">
    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
    <p className="text-lg font-medium">Đang tìm kiếm...</p>
  </div>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
    <div className="p-10 bg-gray-100 rounded-full mb-6">
      <HiMagnifyingGlass className="w-20 h-20 text-gray-300" />
    </div>
    <p className="text-xl font-semibold text-gray-500">Không tìm thấy kết quả</p>
    <p className="text-sm mt-2">Thử tìm với từ khóa khác nhé!</p>
  </div>
);

// === FORMAT TIME ===
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  if (days === 1) return 'Hôm qua';
  if (days < 7) return `${days} ngày trước`;
  return date.toLocaleDateString('vi-VN');
};

// === SECTIONS ===
const ContactsSection = ({
  contacts,
  searchTerm,
  onSelectContact,
  currentUserId,
}: {
  contacts: ChatItemType[];
  searchTerm: string;
  onSelectContact: (contact: ChatItemType) => void;
  currentUserId?: string;
}) => {
  if (contacts.length === 0) return null;

  return (
    <section className="space-y-3 p-2 bg-white">
      <div className="flex items-center gap-3 px-2">
        <h4 className="text-sm font-bold text-gray-800">Liên hệ ({contacts.length})</h4>
      </div>

      {contacts.map((contact) => {
        const isGroup = Boolean((contact as ChatItemType & { isGroup?: boolean }).isGroup);
        let displayName = String(contact.name || contact.username || 'Người dùng').trim();

        if (!isGroup && currentUserId) {
          const user = contact as User;
          if (user.nicknames?.[currentUserId]) {
            displayName = user.nicknames[currentUserId];
          }
        }

        return (
          <button
            key={contact._id}
            onClick={() => onSelectContact(contact)}
            className="w-full cursor-pointer flex items-center gap-4 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all active:scale-98 group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-3xl overflow-hidden ring-2 ring-white shadow-xl">
                {contact.avatar ? (
                  <Image
                    src={getProxyUrl(contact.avatar as string)}
                    width={56}
                    height={56}
                    alt=""
                    className="w-full h-full object-cover"
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
              {isGroup && (
                <div className="absolute -bottom-1 -right-1 p-1.5 bg-purple-600 rounded-full shadow-lg">
                  <HiUsers className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1 text-left border-b border-gray-200 pb-1">
              <p className=" text-gray-900">
                <HighlightText text={displayName} keyword={searchTerm} />
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                {isGroup ? <HiUsers className="w-4 h-4" /> : <HiUser className="w-4 h-4" />}
                {isGroup ? 'Nhóm chat' : 'Liên hệ cá nhân'}
              </p>
            </div>
          </button>
        );
      })}
    </section>
  );
};

const MessagesSection = ({
  groupedMessages,
  searchTerm,
  onNavigateToMessage,
  onClearSearch,
  onOpenRoomResults,
}: {
  groupedMessages: MessageGroup[];
  searchTerm: string;
  onNavigateToMessage: (message: Message) => void;
  onClearSearch: () => void;
  onOpenRoomResults?: (roomId: string, roomName: string, isGroupChat: boolean, avatar?: string) => void;
}) => {
  if (groupedMessages.length === 0) return null;
  const formatCount = (n: number) => (n >= 99 ? '99+' : String(n));

  return (
    <section className=" bg-white px-2 md:px-0">
      <div className="flex items-center gap-3 px-2 py-2">
        <h4 className="text-sm font-bold text-gray-800">
          Tin nhắn ({formatCount(groupedMessages.reduce((a, g) => a + g.messages.length, 0))})
        </h4>
      </div>

      {groupedMessages.map((group) => (
        <div key={group.roomId} className="bg-white flex overflow-hidden border-y border-gray-100 py-1">
          <div className="p-2 flex  gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-3xl overflow-hidden ring-2 ring-white shadow-xl">
                {group.avatar ? (
                  <Image
                    src={getProxyUrl(group.avatar as string)}
                    width={56}
                    height={56}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src="/logo/avata.webp"
                    alt={group.roomName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {group.isGroupChat && (
                <div className="absolute -top-2 -right-1 p-1.5 bg-emerald-700 rounded-full">
                  <HiUsers className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="divide-y divide-gray-200">
              {group.messages.slice(0, 1).map((msg) => (
                <button
                  key={msg._id}
                  onClick={() => {
                    onNavigateToMessage(msg);
                    onClearSearch();
                  }}
                  className="w-full  cursor-pointer px-5 text-left hover:bg-gray-50 transition-all flex items-start gap-4 active:scale-99"
                >
                  <div className="flex-1 min-w-0">
                    <div className=" justify-between mb-2">
                      <div className="flex-1 min-w-0 ">
                        <div className="flex  justify-between">
                          <div className="">
                            <p className=" text-gray-900 text-lg w-[14rem] md:w-[10rem] truncate">{group.roomName}</p>
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm text-gray-600">{group.isGroupChat ? 'Nhóm' : 'Chat cá nhân'}</p>
                            </div>
                          </div>

                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <HiClock className="w-3 h-3" />
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-gray-800">{msg.senderName}</span>
                    </div>
                    <p className="text-gray-700 line-clamp-2">
                      <HighlightText
                        text={
                          msg.type === 'file'
                            ? msg.fileName || 'File'
                            : msg.type === 'image'
                              ? 'Hình ảnh'
                              : msg.type === 'video'
                                ? 'Video'
                                : msg.type === 'sticker'
                                  ? 'Sticker'
                                  : msg.content || 'Tin nhắn'
                        }
                        keyword={searchTerm}
                      />
                    </p>
                  </div>
                </button>
              ))}
              <button
                onClick={() => {
                  if (onOpenRoomResults) {
                    onOpenRoomResults(group.roomId, group.roomName, group.isGroupChat, group.avatar);
                  } else {
                    onNavigateToMessage(group.messages[0]);
                  }
                  onClearSearch();
                }}
                className="flex px-5 py-3 items-center gap-1 text-[1rem]  hover:text-blue-700 cursor-pointer"
              >
                <span className="">{formatCount(group.messages.length)} kết quả phù hợp</span>
                <HiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// === MAIN COMPONENT ===
export default function SearchResults({
  activeTab,
  setActiveTab,
  isSearching,
  hasResults,
  contacts,
  groupedMessages,
  searchTerm,
  onSelectContact,
  onNavigateToMessage,
  currentUserId,
  onOpenRoomResults,
}: SearchResultsProps) {
  const handleClearSearch = () => {
    // Gọi từ Sidebar
  };

  return (
    <div className="pb-20">
      <SearchTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        contactsCount={contacts.length}
        messagesCount={groupedMessages.reduce((a, g) => a + g.messages.length, 0)}
      />

      {isSearching && <LoadingState />}
      {!isSearching && !hasResults && <EmptyState />}
      {!isSearching && hasResults && (
        <div className="space-y-3  bg-gray-200">
          {(activeTab === 'all' || activeTab === 'contacts') && (
            <ContactsSection
              contacts={contacts}
              searchTerm={searchTerm}
              onSelectContact={onSelectContact}
              currentUserId={currentUserId}
            />
          )}
          {(activeTab === 'all' || activeTab === 'messages') && (
            <MessagesSection
              groupedMessages={groupedMessages}
              searchTerm={searchTerm}
              onNavigateToMessage={onNavigateToMessage}
              onClearSearch={handleClearSearch}
              onOpenRoomResults={onOpenRoomResults}
            />
          )}
        </div>
      )}
    </div>
  );
}
