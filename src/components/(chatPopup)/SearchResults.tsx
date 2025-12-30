'use client';

import React from 'react';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
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
  avatar: string,
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
            {isActive && (
              <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0088ff] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

// === HIGHLIGHT TEXT ĐẸP NHƯ ZALO 2025 ===
const HighlightText = ({ text, keyword }: { text: string; keyword: string }) => {
  if (!keyword.trim() || !text) return <span className="text-gray-800">{text}</span>;

  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-indigo-100 text-indigo-700 font-bold rounded ">
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
    <section className="space-y-3 pt-1 bg-white">
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

            <div className="flex-1 text-left">
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
    <section className="space-y-4 bg-white ">
      <div className="flex items-center gap-3 px-2 pt-2">
        <h4 className="text-sm font-bold text-gray-800">
          Tin nhắn ({formatCount(groupedMessages.reduce((a, g) => a + g.messages.length, 0))})
        </h4>
      </div>

      {groupedMessages.map((group) => (
        <div key={group.roomId} className="bg-white overflow-hidden border border-gray-100">
          <div className="p-2 flex items-center gap-4">
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
                <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-700 rounded-full">
                  <HiUsers className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className=" text-gray-900 text-lg truncate">{group.roomName}</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-gray-600">{group.isGroupChat ? 'Nhóm' : 'Chat cá nhân'}</p>
               
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200 border-b border-gray-300">
            {group.messages.slice(0, 1).map((msg) => (
              <button
                key={msg._id}
                onClick={() => {
                  onNavigateToMessage(msg);
                  onClearSearch();
                }}
                className="w-full cursor-pointer p-5 text-left hover:bg-gray-50 transition-all flex items-start gap-4 active:scale-99"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-800">{msg.senderName}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <HiClock className="w-3 h-3" />
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 line-clamp-2">
                    <HighlightText text={msg.content || '[Media]'} keyword={searchTerm} />
                  </p>
                </div>
                <HiChevronRight className="w-6 h-6 text-gray-400" />
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
                  className="flex px-10 py-3 items-center gap-1 text-sm font-medium hover:text-blue-700 cursor-pointer"
                >
                  <span className=''>{formatCount(group.messages.length)} kết quả phù hợp</span>
                  <HiChevronRight className="w-4 h-4" />
                </button>
          </div>

          
        </div>
      ))}
    </section>
  );
};

const FilesSection = ({
  groupedFiles,
  fileMessages,
  searchTerm,
  onNavigateToMessage,
  onClearSearch,
}: {
  groupedFiles: FileGroup[];
  fileMessages: Message[];
  searchTerm: string;
  onNavigateToMessage: (message: Message) => void;
  onClearSearch: () => void;
}) => {
  if (groupedFiles.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 px-2">
        <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
        <h4 className="text-lg font-bold text-gray-800">File & Media ({fileMessages.length})</h4>
      </div>

      {groupedFiles.map((group) => (
        <div key={group.roomId} className="bg-white  overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-2 flex items-center gap-4">
            <div className="w-10 h-10 rounded-3xl overflow-hidden ring-2 ring-white shadow-xl">
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
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg">{group.roomName}</p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <HiFolder className="w-5 h-5" />
                {group.files.length} file/media
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 p-5">
            {group.files.slice(0, 9).map((file) => (
              <button
                key={file._id}
                onClick={() => {
                  onNavigateToMessage(file);
                  onClearSearch();
                }}
                className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gray-100 hover:bg-orange-100 transition-all active:scale-95"
              >
                {file.type === 'image' ? (
                  <Image
                    src={getProxyUrl(file.fileUrl as string)}
                    width={200}
                    height={200}
                    alt=""
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <div className="h-32 flex flex-col items-center justify-center gap-3">
                    <HiDocumentText className="w-12 h-12 text-orange-600" />
                    <p className="text-xs font-medium text-gray-700 px-2 line-clamp-2">
                      <HighlightText text={file.fileName || 'File'} keyword={searchTerm} />
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <HiChevronRight className="w-10 h-10 text-white" />
                </div>
              </button>
            ))}
          </div>

          {group.files.length > 9 && (
            <div className="p-4 bg-orange-50 text-center">
              <button
                onClick={() => {
                  onNavigateToMessage(group.files[0]);
                  onClearSearch();
                }}
                className="cursor-pointer text-orange-700 font-bold hover:text-orange-800"
              >
                Xem thêm {group.files.length - 9} file
              </button>
            </div>
          )}
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
