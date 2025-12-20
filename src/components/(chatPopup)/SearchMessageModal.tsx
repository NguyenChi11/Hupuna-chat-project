'use client';
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import Image from 'next/image';
import ArrowRightICon from '@/public/icons/arrow-right-icon.svg'; // Reuse existing icon

interface SearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
  onJumpToMessage: (messageId: string) => void;
  getSenderName: (sender: User | string) => string;
  initialKeyword?: string | null;
  onKeywordClear?: () => void;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({ 
  isOpen, 
  onClose, 
  roomId, 
  onJumpToMessage, 
  getSenderName,
  initialKeyword,
  onKeywordClear,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Message[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentResultIndex, setCurrentResultIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hasAutoSearchedRef = useRef(false);
  const lastJumpedTermRef = useRef<string>('');

  const fetchSearchResults = useCallback(
    async (query: string) => {
      if (!query.trim() || !roomId) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      setSearchResults([]);

      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'read',
            filters: {
              roomId,
              searchQuery: query.trim(),
              isRecalled: { $ne: true },
              isDeleted: { $ne: true },
              type: { $ne: 'notify' },
            },
            limit: 100,
            sort: { timestamp: -1 },
          }),
        });
        const data = await res.json();
        const results: Message[] = (data.data || []).slice().sort((a: Message, b: Message) => Number(b.timestamp) - Number(a.timestamp));
        setSearchResults(results);
        if (results.length > 0) {
          const term = query.trim();
          const firstIdx = 0;
          setCurrentResultIndex(firstIdx);
          onJumpToMessage(results[firstIdx]._id);
          lastJumpedTermRef.current = term;
        } else {
          setCurrentResultIndex(-1);
        }
      } catch (error) {
        console.error('Fetch search results error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [roomId, onJumpToMessage],
  );
  useEffect(() => {
    if (initialKeyword && initialKeyword.trim() && !hasAutoSearchedRef.current && isOpen) {
      setSearchTerm(initialKeyword);
      hasAutoSearchedRef.current = true;
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      fetchSearchResults(initialKeyword);
    }
  }, [initialKeyword, isOpen, fetchSearchResults]);

  // Reset when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      hasAutoSearchedRef.current = false;
      setCurrentResultIndex(-1);
      if (onKeywordClear) {
        onKeywordClear();
      }
    }
  }, [isOpen, onKeywordClear]);

  useEffect(() => {
    if (initialKeyword && searchTerm === initialKeyword && hasAutoSearchedRef.current) {
      return;
    }

    if (!searchTerm.trim()) {
      setSearchResults([]);
      setCurrentResultIndex(-1);
      return;
    }

    const handler = setTimeout(() => {
      fetchSearchResults(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchSearchResults, initialKeyword]); 
  const sortedResults = useMemo(
    () => searchResults.slice().sort((a, b) => Number(b.timestamp) - Number(a.timestamp)),
    [searchResults],
  );

  useEffect(() => {
    if (sortedResults.length > 0 && currentResultIndex === -1) {
      setCurrentResultIndex(0);
    } else if (sortedResults.length === 0) {
      setCurrentResultIndex(-1);
    }
  }, [sortedResults.length, currentResultIndex]);

  if (!isOpen) return null;

  const handleJump = (messageId: string, index?: number) => {
    if (index !== undefined) {
      setCurrentResultIndex(index);
    }
    onJumpToMessage(messageId);
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    if (isMobile) {
      setTimeout(() => {
        onClose();
      }, 300);
    } else {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 900);
    }
  };

  const handlePrevious = () => {
    if (sortedResults.length === 0) return;
    const newIndex = currentResultIndex <= 0 ? sortedResults.length - 1 : currentResultIndex - 1;
    setCurrentResultIndex(newIndex);
    handleJump(sortedResults[newIndex]._id, newIndex);
  };

  const handleNext = () => {
    if (sortedResults.length === 0) return;
    const newIndex = currentResultIndex >= sortedResults.length - 1 ? 0 : currentResultIndex + 1;
    setCurrentResultIndex(newIndex);
    handleJump(sortedResults[newIndex]._id, newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchSearchResults(searchTerm);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrevious();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    }
  };

  // Highlight keyword function
  const highlightKeyword = (text: string, keyword: string) => {
    if (!keyword.trim() || !text) return text;
    const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-200 text-yellow-900 px-0.5 rounded font-medium">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </>
    );
  };

  return (
    // Sử dụng cơ chế fixed/static tương tự ChatInfoPopup
    <div
      className={
        `bg-white shadow-lg w-full sm:w-[21.875rem] flex flex-col h-full overflow-y-auto relative transition-transform duration-300 transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}` // Thêm hiệu ứng slide
      }
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h2 className="text-xl font-bold text-black">Tìm kiếm tin nhắn</h2>
        {/* Nút đóng (Sử dụng icon ArrowRight để trông như đóng tab) */}
        <button onClick={onClose} className="cursor-pointer p-2 hover:bg-gray-200 rounded-full" title="Đóng tìm kiếm">
          <Image
            src={ArrowRightICon}
            alt="Close"
            width={24}
            height={24}
            className="w-6 h-6 rotate-180" // Xoay ngược để chỉ mũi tên sang trái
          />
        </button>
      </div>

      {/* Input Tìm kiếm */}
      <div className="p-4 border-b border-gray-100 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-b outline-none p-2  text-sm "
            ref={inputRef}
            autoFocus
          />
          <button
            onClick={() => fetchSearchResults(searchTerm)}
            className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors shrink-0"
            disabled={isSearching || !searchTerm.trim()}
          >
            {isSearching ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Tìm'
            )}
          </button>
        </div>
      </div>

      {/* Kết quả Tìm kiếm */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {isSearching && <p className="text-center text-blue-500 text-sm">Đang tìm kiếm...</p>}

        {!isSearching && searchTerm.trim() && searchResults.length === 0 && (
          <p className="text-center text-gray-500 text-sm">Không tìm thấy tin nhắn nào khớp với: **{searchTerm}**</p>
        )}

        {!isSearching && !searchTerm.trim() && (
          <p className="text-center text-gray-400 text-sm">Nhập từ khóa để tìm kiếm trong hội thoại này.</p>
        )}

        {sortedResults.map((msg: Message, index: number) => {
          const isRecalled = msg.isRecalled === true;
          const contentDisplay = isRecalled
            ? 'đã thu hồi tin nhắn'
            : msg.content || `[${msg.type.charAt(0).toUpperCase() + msg.type.slice(1)}]`;
          const isCurrentResult = index === currentResultIndex;

          // Lấy tên người gửi (sender được khai báo là string ID trong Message)
          const senderName = getSenderName(msg.sender);
          const d = new Date(msg.timestamp);
          const today = new Date();
          const yesterday = new Date();
          yesterday.setDate(today.getDate() - 1);
          const sameDate = (a: Date, b: Date) =>
            a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
          const dateLabel = sameDate(d, today)
            ? 'Hôm nay'
            : sameDate(d, yesterday)
              ? 'Hôm qua'
              : d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
          const timeLabel = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

          return (
            <div
              key={msg._id}
              className={`p-3 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer transition-colors border ${
                isCurrentResult ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'
              }`}
              onClick={() => handleJump(msg._id, index)}
            >
              <p className="text-xs text-blue-600 font-semibold">
                {senderName} • {dateLabel} • {timeLabel}
              </p>
              <p className={`text-sm mt-1 line-clamp-2 ${isRecalled ? 'italic text-gray-500' : 'text-gray-800'}`}>
                {highlightKeyword(contentDisplay, searchTerm)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Navigation bar - chỉ hiển thị khi có kết quả (mobile only) */}
      {searchResults.length > 0 && typeof window !== 'undefined' && window.innerWidth < 768 && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="p-1.5 rounded cursor-pointer hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Kết quả trước"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-xs text-gray-600 font-medium min-w-[80px] text-center">
              {currentResultIndex >= 0 && currentResultIndex < sortedResults.length
                ? `Kết quả ${currentResultIndex + 1}/${sortedResults.length}`
                : `0/${sortedResults.length}`}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded cursor-pointer hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Kết quả tiếp theo"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSidebar;
