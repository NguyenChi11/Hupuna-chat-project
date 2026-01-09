/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import Image from 'next/image';
import ArrowRightICon from '@/public/icons/arrow-right-icon.svg'; // Reuse existing icon
import { getProxyUrl, normalizeNoAccent, buildAccentInsensitiveRegex, hasDiacritics, accentAwareIncludes } from '@/utils/utils';
import MediaPreviewModal from '@/components/(chatPopup)/MediaPreviewModal';
import { IoReload } from 'react-icons/io5';
import { HiPlay } from 'react-icons/hi2';

interface SearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
  onJumpToMessage: (messageId: string) => void;
  getSenderName: (sender: User | string) => string;
  initialKeyword?: string | null;
  onKeywordClear?: () => void;
  initialSelectedMessageId?: string | null;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({
  isOpen,
  onClose,
  roomId,
  onJumpToMessage,
  getSenderName,
  initialKeyword,
  onKeywordClear,
  initialSelectedMessageId,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Message[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentResultIndex, setCurrentResultIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hasAutoSearchedRef = useRef(false);
  const lastInitialKeywordRef = useRef<string | null>(null);
  const initialSelectedIdRef = useRef<string | null>(null);
  const [senderFilter, setSenderFilter] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [previewMedia, setPreviewMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);

  const fetchSearchResults = useCallback(
    async (query: string) => {
      if (!query.trim() || !roomId) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);

      try {
        const buildTsRange = (): Record<string, number> | undefined => {
          let fromMs: number | undefined;
          let toMs: number | undefined;
          if (startDate) {
            const d = new Date(`${startDate}T00:00:00`);
            if (!Number.isNaN(d.getTime())) fromMs = d.getTime();
          }
          if (endDate) {
            const d = new Date(`${endDate}T23:59:59`);
            if (!Number.isNaN(d.getTime())) toMs = d.getTime();
          }
          if (fromMs !== undefined || toMs !== undefined) {
            const range: Record<string, number> = {};
            if (fromMs !== undefined) range.$gte = fromMs;
            if (toMs !== undefined) range.$lte = toMs;
            return range;
          }
          return undefined;
        };
        const tsRange = buildTsRange();
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
              ...(tsRange ? { timestamp: tsRange } : {}),
            },
            limit: 500,
            sort: { field: 'timestamp', order: 'desc' },
          }),
        });
        const data = await res.json();
        const raw: Message[] = Array.isArray(data?.data) ? (data.data as Message[]) : [];
        const filtered = raw.filter((m) => {
          const text =
            m.type === 'file'
              ? String(m.fileName || '')
              : m.type === 'sticker'
                ? ''
                : String(m.content || '');
          return accentAwareIncludes(text, query);
        });
        const results: Message[] = filtered.slice().sort((a: Message, b: Message) => Number(b.timestamp) - Number(a.timestamp));
        setSearchResults(results);
        setCurrentResultIndex((prev) => {
          if (results.length === 0) return -1;
          return prev;
        });
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
    const kw = (initialKeyword || '').trim();
    if (!isOpen || !kw) return;
    if (lastInitialKeywordRef.current === kw && hasAutoSearchedRef.current) return;
    setSearchTerm(kw);
    hasAutoSearchedRef.current = true;
    lastInitialKeywordRef.current = kw;
    initialSelectedIdRef.current = initialSelectedMessageId || null;
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    fetchSearchResults(kw);
  }, [initialKeyword, initialSelectedMessageId, isOpen, fetchSearchResults]);

  // Reset when sidebar closes
  useEffect(() => {
    if (!isOpen) {
      hasAutoSearchedRef.current = false;
      lastInitialKeywordRef.current = null;
      initialSelectedIdRef.current = null;
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
  const senderOptions = useMemo(() => {
    const ids = new Set<string>();
    const arr: { id: string; name: string }[] = [];
    searchResults.forEach((m) => {
      const id = typeof m.sender === 'object' && m.sender ? String((m.sender as User)._id) : String(m.sender || '');
      if (id && !ids.has(id)) {
        ids.add(id);
        const name = getSenderName(m.sender);
        arr.push({ id, name });
      }
    });
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchResults, getSenderName]);

  const filteredResults = useMemo(() => {
    const startTs = startDate ? new Date(startDate + 'T00:00:00').getTime() : null;
    const endTs = endDate ? new Date(endDate + 'T23:59:59').getTime() : null;
    return searchResults.filter((m) => {
      const sid = typeof m.sender === 'object' && m.sender ? String((m.sender as User)._id) : String(m.sender || '');
      const passSender = senderFilter ? sid === senderFilter : true;
      const ts = Number(m.timestamp || 0);
      const passStart = startTs ? ts >= startTs : true;
      const passEnd = endTs ? ts <= endTs : true;
      return passSender && passStart && passEnd;
    });
  }, [searchResults, senderFilter, startDate, endDate]);

  const sortedResults = useMemo(
    () => filteredResults.slice().sort((a, b) => Number(b.timestamp) - Number(a.timestamp)),
    [filteredResults],
  );
  const mediaResults = useMemo(
    () =>
      sortedResults
        .filter((m) => (m.type === 'image' || m.type === 'video') && m.fileUrl)
        .map((m) => ({ url: String(m.fileUrl), type: m.type as 'image' | 'video' })),
    [sortedResults],
  );

  useEffect(() => {
    if (sortedResults.length === 0) {
      setCurrentResultIndex(-1);
    }
  }, [sortedResults.length]);

  if (!isOpen || (typeof window !== 'undefined' && window.innerWidth < 1024)) return null;

  const handleJump = (messageId: string, index?: number) => {
    if (index !== undefined) {
      setCurrentResultIndex(index);
    }
    onJumpToMessage(messageId);
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
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
    const regex = buildAccentInsensitiveRegex(keyword);
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className=" text-blue-900 px-0.5 rounded font-medium">
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
        <div className="mt-3 space-y-2 items-center gap-2 ">
          <select
            value={senderFilter}
            onChange={(e) => setSenderFilter(e.target.value)}
            className=" cursor-pointer text-[1rem] border border-gray-300 rounded-lg px-2 py-1 text-sm flex-1"
          >
            <option value="">Tất cả</option>
            {senderOptions.map((opt) => (
              <option className="cursor-pointer " key={opt.id} value={opt.id}>
                {opt.name || opt.id}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-1">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              onInput={(e) => setStartDate((e.target as HTMLInputElement).value)}
              className="border border-gray-300 rounded-lg px-1 py-1 text-sm cursor-pointer"
            />
            <span className="text-gray-500 text-xs"> → </span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              onInput={(e) => setEndDate((e.target as HTMLInputElement).value)}
              className="border border-gray-300 rounded-lg px-1 py-1 text-sm cursor-pointer"
            />
            <button
              type="button"
              onClick={() => {
                setStartDate('');
                setEndDate('');
              }}
              className="ml-1 px-2 py-1 text-xs rounded border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer"
            >
              <IoReload className="w-5 h-5" />
            </button>
          </div>
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

          const contentDisplay =
            msg.type === 'file'
              ? msg.fileName || 'File'
              : msg.type === 'sticker'
                ? '[Sticker]'
                : String(msg.content || '');
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
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2"></div>
                {msg.type === 'image' && msg.fileUrl ? (
                  <div className="mt-1">
                    <Image
                      src={getProxyUrl(String(msg.fileUrl))}
                      alt=""
                      width={320}
                      height={240}
                      className="w-10 h-18 rounded-lg object-cover"
                    />
                  </div>
                ) : msg.type === 'video' && msg.fileUrl ? (
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg max-w-[8vw] sm:max-w-[6rem] aspect-video bg-black">
                    <video
                      src={getProxyUrl(String(msg.fileUrl))}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-100">
                      <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center shadow">
                        <HiPlay className="w-3 h-3 text-blue-600 " />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className={`text-sm mt-1 line-clamp-2 ${isRecalled ? 'italic text-gray-500' : 'text-gray-800'}`}>
                    {highlightKeyword(contentDisplay, searchTerm)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation bar - chỉ hiển thị khi có kết quả (mobile only) */}
      {searchResults.length > 0 && typeof window !== 'undefined' && window.innerWidth < 1024 && (
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
      {previewMedia && (
        <MediaPreviewModal
          media={previewMedia}
          chatName={undefined}
          isGroup={undefined}
          onClose={() => setPreviewMedia(null)}
          roomId={roomId}
        />
      )}
    </div>
  );
};

export default SearchSidebar;
