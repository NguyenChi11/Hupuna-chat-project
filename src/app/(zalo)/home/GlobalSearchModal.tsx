import React, { useState, useEffect, useMemo } from 'react';
import SearchHeader from '@/components/(search)/SearchHeader';
import SearchTabs from '@/components/(search)/SearchTabs';
import ContactResults from '@/components/(search)/ContactResults';
import MessageResults from '@/components/(search)/MessageResults';
import FileResults from '@/components/(search)/FileResults';
import SearchEmptyState from '@/components/(search)/SearchEmptyState';
import RoomSearchResultsModal from '@/components/(search)/RoomSearchResultsModal';
import type { User } from '@/types/User';
import type { GlobalSearchMessage, GlobalSearchContact } from '@/components/(home)/HomeOverlays';

interface SearchResult {
  contacts: GlobalSearchContact[];
  messages: GlobalSearchMessage[];
}

interface Props {
  results: SearchResult;
  searchTerm: string;
  onClose: () => void;
  onSearch: (term: string) => void;
  allUsers: User[];
  onNavigateToMessage: (message: GlobalSearchMessage, searchKeyword: string) => void;
  onSelectContact: (phonebook: GlobalSearchContact) => void;
}

export default function GlobalSearchModal({
  results,
  searchTerm,
  onClose,
  onSearch,
  allUsers,
  onNavigateToMessage,
  onSelectContact,
}: Props) {
  const [activeTab, setActiveTab] = useState<'all' | 'contacts' | 'messages' | 'files'>('all');
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isSearching, setIsSearching] = useState(false);
  const [roomResultsModal, setRoomResultsModal] = useState<{
    roomId: string;
    roomName: string;
    roomAvatar?: string;
    isGroupChat: boolean;
  } | null>(null);

  // 🔥 Sync localSearchTerm khi searchTerm prop thay đổi
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  // Mở lại RoomSearchResultsModal nếu có trạng thái quay về từ chat
  useEffect(() => {
    try {
      const raw = localStorage.getItem('__return_room_results__');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data && data.origin === 'global') {
        setLocalSearchTerm(data.keyword || searchTerm);
        setRoomResultsModal({
          roomId: data.roomId,
          roomName: data.roomName,
          roomAvatar: data.roomAvatar,
          isGroupChat: !!data.isGroupChat,
        });
        localStorage.removeItem('__return_room_results__');
      }
    } catch {}
  }, []);

  // Keep the useMemo for processing messages
  const { regularMessages, fileMessages } = useMemo(() => {
    if (!results?.messages || !Array.isArray(results.messages)) {
      return { regularMessages: [], fileMessages: [] };
    }

    const regular: GlobalSearchMessage[] = [];
    const files: GlobalSearchMessage[] = [];

    results.messages.forEach((msg) => {
      if (msg.type === 'file' || msg.type === 'image' || msg.type === 'video') {
        files.push(msg);
      } else {
        regular.push(msg);
      }
    });

    return { regularMessages: regular, fileMessages: files };
  }, [results?.messages]);

  const groupedMessages = useMemo(() => {
    const allMsgs = [...(regularMessages || []), ...(fileMessages || [])];
    if (allMsgs.length === 0) return [];

    const groups = new Map<
      string,
      {
        roomId: string;
        roomName: string;
        roomAvatar?: string;
        isGroupChat: boolean;
        partnerId?: string;
        messages: GlobalSearchMessage[];
        latestTimestamp: number;
      }
    >();

    allMsgs.forEach((msg) => {
      if (!msg || !msg.roomId) return;

      const key = msg.roomId;

      if (!groups.has(key)) {
        groups.set(key, {
          roomId: msg.roomId,
          roomName: msg.roomName || 'Cuộc trò chuyện',
          roomAvatar: msg.isGroupChat ? undefined : allUsers?.find((u) => u._id === msg.partnerId)?.avatar,
          isGroupChat: msg.isGroupChat || false,
          partnerId: msg.partnerId,
          messages: [],
          latestTimestamp: msg.timestamp || Date.now(),
        });
      }

      const group = groups.get(key)!;
      group.messages.push(msg);
      group.latestTimestamp = Math.max(group.latestTimestamp, msg.timestamp || Date.now());
    });

    return Array.from(groups.values()).sort((a, b) => b.latestTimestamp - a.latestTimestamp);
  }, [regularMessages, fileMessages, allUsers]);

  const groupedFiles = useMemo(() => {
    if (!fileMessages || fileMessages.length === 0) return [];

    const groups = new Map<
      string,
      {
        roomId: string;
        roomName: string;
        roomAvatar?: string;
        isGroupChat: boolean;
        files: GlobalSearchMessage[];
        latestTimestamp: number;
      }
    >();

    fileMessages.forEach((msg) => {
      if (!msg || !msg.roomId) return;

      const key = msg.roomId;

      if (!groups.has(key)) {
        groups.set(key, {
          roomId: msg.roomId,
          roomName: msg.roomName || 'Cuộc trò chuyện',
          roomAvatar: msg.isGroupChat ? undefined : allUsers?.find((u) => u._id === msg.partnerId)?.avatar,
          isGroupChat: msg.isGroupChat || false,
          files: [],
          latestTimestamp: msg.timestamp || Date.now(),
        });
      }

      const group = groups.get(key)!;
      group.files.push(msg);
      if (msg.timestamp && msg.timestamp > group.latestTimestamp) {
        group.latestTimestamp = msg.timestamp;
      }
    });

    return Array.from(groups.values()).sort((a, b) => b.latestTimestamp - a.latestTimestamp);
  }, [fileMessages, allUsers]);

  const tabs = [
    {
      key: 'all' as const,
      label: 'Tất cả',
      count: (results?.contacts?.length || 0) + groupedMessages.length + groupedFiles.length,
    },
    { key: 'contacts' as const, label: 'Liên hệ', count: results?.contacts?.length || 0 },
    { key: 'messages' as const, label: 'Tin nhắn', count: groupedMessages.length },
    { key: 'files' as const, label: 'File', count: groupedFiles.length },
  ];

  const hasResults = (results?.contacts?.length || 0) > 0 || (results?.messages?.length || 0) > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl md:rounded-none shadow-xl md:shadow-none w-full max-w-2xl md:max-w-none h-full sm:h-[40rem] md:h-full max-h-[calc(100vh-3rem)] sm:max-h-[40rem] md:max-h-none flex flex-col overflow-hidden border border-gray-200 md:border-0">
        <SearchHeader
          searchTerm={localSearchTerm}
          onSearch={onSearch}
          onClose={onClose}
          isSearching={isSearching}
          onSearchingChange={setIsSearching}
        />

        <SearchTabs activeTab={activeTab} tabs={tabs} onTabChange={setActiveTab} searchTerm={localSearchTerm} />

        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          <SearchEmptyState isSearching={isSearching} searchTerm={localSearchTerm} hasResults={hasResults} />

          {hasResults && !isSearching && (
            <>
              {(activeTab === 'all' || activeTab === 'contacts') && (
                <ContactResults
                  contacts={results.contacts || []}
                  searchTerm={localSearchTerm}
                  onSelectContact={onSelectContact}
                />
              )}

              {(activeTab === 'all' || activeTab === 'messages') && (
                <MessageResults
                  groupedMessages={groupedMessages}
                  searchTerm={localSearchTerm}
                  allUsers={allUsers}
                  onNavigateToMessage={(msg) => onNavigateToMessage(msg, localSearchTerm)}
                  onOpenRoomResults={(rid, rname, isGroup, avatar) =>
                    setRoomResultsModal({ roomId: rid, roomName: rname, isGroupChat: isGroup, roomAvatar: avatar })
                  }
                />
              )}

              {(activeTab === 'all' || activeTab === 'files') && (
                <FileResults
                  groupedFiles={groupedFiles}
                  searchTerm={localSearchTerm}
                  onNavigateToMessage={(msg) => onNavigateToMessage(msg, localSearchTerm)}
                />
              )}
            </>
          )}
        </div>

        <div className="flex-none px-4 py-3 bg-[#f7f9fc] border-t text-[0.6875rem] text-gray-500 flex items-center justify-between">
          <span>
            Nhấn{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded shadow-sm font-mono text-[0.625rem]">
              ESC
            </kbd>{' '}
            để đóng cửa sổ
          </span>
          <span className="text-gray-400">Tìm kiếm nhanh trong Zalo</span>
        </div>
      </div>
      {roomResultsModal && (
        <RoomSearchResultsModal
          isOpen={!!roomResultsModal}
          roomId={roomResultsModal.roomId}
          roomName={roomResultsModal.roomName}
          roomAvatar={roomResultsModal.roomAvatar}
          isGroupChat={roomResultsModal.isGroupChat}
          keyword={localSearchTerm}
          allUsers={allUsers}
          onClose={() => setRoomResultsModal(null)}
          onNavigateToMessage={(m, kw) => {
            onNavigateToMessage(m, kw);
            setRoomResultsModal(null);
            onClose();
          }}
        />
      )}
    </div>
  );
}
