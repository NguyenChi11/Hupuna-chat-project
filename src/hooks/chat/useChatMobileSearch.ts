import { useState, useCallback, useEffect, useRef } from 'react';
import { Message } from '@/types/Message';
import { accentAwareIncludes } from '@/utils/utils';

interface UseChatMobileSearchProps {
  roomId: string;
  isMobile: boolean;
  roomSearchKeyword?: string | null;
  showSearchSidebar: boolean;
  setShowSearchSidebar: (show: boolean) => void;
  setRoomSearchKeyword?: (keyword: string | null) => void;
  handleJumpToMessage: (messageId: string) => Promise<void>;
  scrollToMessageId?: string | null;
}

export function useChatMobileSearch({
  roomId,
  isMobile,
  roomSearchKeyword,
  showSearchSidebar,
  setShowSearchSidebar,
  setRoomSearchKeyword,
  handleJumpToMessage,
  scrollToMessageId,
}: UseChatMobileSearchProps) {
  const [mobileSearchTerm, setMobileSearchTerm] = useState('');
  const [mobileSearchResults, setMobileSearchResults] = useState<Message[]>([]);
  const [isMobileSearching, setIsMobileSearching] = useState(false);
  const [mobileCurrentResultIndex, setMobileCurrentResultIndex] = useState<number>(-1);
  const [mobileSearchHasMore, setMobileSearchHasMore] = useState(false);

  const mobileSearchInputRef = useRef<HTMLInputElement | null>(null);
  const mobileSelectingRef = useRef(false);
  const mobileSelectedMsgIdRef = useRef<string | null>(null);
  const mobileCurrentIndexRef = useRef<number>(-1);
  const closingSearchRef = useRef(false);
  const mobileSearchResultsRef = useRef<Message[]>([]);
  const hasAutoSearchedRef = useRef(false);

  const MOBILE_SEARCH_LIMIT = 200;

  useEffect(() => {
    mobileCurrentIndexRef.current = mobileCurrentResultIndex;
  }, [mobileCurrentResultIndex]);

  useEffect(() => {
    mobileSearchResultsRef.current = mobileSearchResults;
  }, [mobileSearchResults]);

  useEffect(() => {
    if (isMobile) return;
    if (closingSearchRef.current) return;
    if (roomSearchKeyword && roomSearchKeyword.trim() && scrollToMessageId && !showSearchSidebar) {
      setShowSearchSidebar(true);
    }
  }, [roomSearchKeyword, scrollToMessageId, isMobile, showSearchSidebar, setShowSearchSidebar]);

  const fetchMobileSearchResults = useCallback(
    async (query: string, append: boolean = false) => {
      if (!query.trim() || !roomId) {
        setMobileSearchResults([]);
        setMobileCurrentResultIndex(-1);
        setMobileSearchHasMore(false);
        return;
      }
      setIsMobileSearching(true);

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
            skip: append ? mobileSearchResultsRef.current.length : 0,
            limit: MOBILE_SEARCH_LIMIT,
            sort: { field: 'timestamp', order: 'desc' },
          }),
        });
        const data = await res.json();
        const raw: Message[] = Array.isArray(data?.data) ? (data.data as Message[]) : [];
        const filtered: Message[] = raw.filter((m) => {
          const text =
            m.type === 'file' ? String(m.fileName || '') : m.type === 'sticker' ? '' : String(m.content || '');
          return accentAwareIncludes(text, query);
        });
        const sorted: Message[] = filtered.slice().sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
        const merged: Message[] = append ? [...mobileSearchResultsRef.current, ...sorted] : sorted;
        setMobileSearchResults(merged);
        setMobileSearchHasMore(raw.length === MOBILE_SEARCH_LIMIT);
        if (merged.length > 0) {
          const selectedId = mobileSelectedMsgIdRef.current;
          if (mobileSelectingRef.current && selectedId) {
            const idx = merged.findIndex((m) => String(m._id) === String(selectedId));
            if (idx >= 0) {
              setMobileCurrentResultIndex(idx);
            } else {
              const prevIdx = mobileCurrentIndexRef.current;
              const safeIdx = Math.max(0, Math.min(merged.length - 1, prevIdx));
              setMobileCurrentResultIndex(safeIdx);
            }
            mobileSelectingRef.current = false;
            mobileSelectedMsgIdRef.current = null;
          } else if (mobileCurrentIndexRef.current === -1) {
            const lastIdx = merged.length - 1;
            setMobileCurrentResultIndex(lastIdx);
          } else {
            const prevIdx = mobileCurrentIndexRef.current;
            const safeIdx = Math.max(0, Math.min(merged.length - 1, prevIdx));
            setMobileCurrentResultIndex(safeIdx);
          }
        } else {
          setMobileCurrentResultIndex(-1);
        }
      } catch (error) {
        console.error('Fetch search results error:', error);
        setMobileSearchResults([]);
        setMobileCurrentResultIndex(-1);
        setMobileSearchHasMore(false);
      } finally {
        setIsMobileSearching(false);
      }
    },
    [roomId, MOBILE_SEARCH_LIMIT],
  );

  useEffect(() => {
    if (closingSearchRef.current) return;
    if (
      isMobile &&
      roomSearchKeyword &&
      roomSearchKeyword.trim() &&
      !hasAutoSearchedRef.current &&
      !showSearchSidebar
    ) {
      setMobileSearchTerm(roomSearchKeyword);
      hasAutoSearchedRef.current = true;
      setShowSearchSidebar(true);
      fetchMobileSearchResults(roomSearchKeyword);
      setTimeout(() => {
        mobileSearchInputRef.current?.focus();
      }, 100);
    }
  }, [roomSearchKeyword, isMobile, fetchMobileSearchResults, showSearchSidebar, setShowSearchSidebar]);

  useEffect(() => {
    if (!isMobile) return;

    if (roomSearchKeyword && mobileSearchTerm === roomSearchKeyword && hasAutoSearchedRef.current) {
      return;
    }

    if (!mobileSearchTerm.trim()) {
      setMobileSearchResults([]);
      setMobileCurrentResultIndex(-1);
      return;
    }

    const handler = setTimeout(() => {
      fetchMobileSearchResults(mobileSearchTerm, false);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [mobileSearchTerm, isMobile, roomSearchKeyword, fetchMobileSearchResults]);

  useEffect(() => {
    if (!showSearchSidebar && isMobile) {
      closingSearchRef.current = true;
      setMobileSearchTerm('');
      setMobileSearchResults([]);
      setMobileCurrentResultIndex(-1);
      hasAutoSearchedRef.current = false;
      setTimeout(() => {
        closingSearchRef.current = false;
      }, 300);
    }
  }, [showSearchSidebar, isMobile, setRoomSearchKeyword]);

  const handlePreviousResult = useCallback(() => {
    if (mobileSearchResults.length === 0) return;
    const newIndex = mobileCurrentResultIndex <= 0 ? mobileSearchResults.length - 1 : mobileCurrentResultIndex - 1;
    setMobileCurrentResultIndex(newIndex);
    mobileSelectingRef.current = true;
    mobileSelectedMsgIdRef.current = mobileSearchResults[newIndex]._id;
    handleJumpToMessage(mobileSearchResults[newIndex]._id);
    setTimeout(() => {
      mobileSelectingRef.current = false;
      mobileSelectedMsgIdRef.current = null;
    }, 1200);
  }, [mobileSearchResults, mobileCurrentResultIndex, handleJumpToMessage]);

  const handleNextResult = useCallback(async () => {
    if (mobileSearchResultsRef.current.length === 0) return;
    if (mobileCurrentResultIndex >= mobileSearchResultsRef.current.length - 1) {
      if (mobileSearchHasMore) {
        await fetchMobileSearchResults(mobileSearchTerm, true);
        const len = mobileSearchResultsRef.current.length;
        const idx = Math.min(mobileCurrentResultIndex + 1, len - 1);
        setMobileCurrentResultIndex(idx);
        mobileSelectingRef.current = true;
        mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
        handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
        setTimeout(() => {
          mobileSelectingRef.current = false;
          mobileSelectedMsgIdRef.current = null;
        }, 1200);
      } else {
        const idx = 0;
        setMobileCurrentResultIndex(idx);
        mobileSelectingRef.current = true;
        mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
        handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
        setTimeout(() => {
          mobileSelectingRef.current = false;
          mobileSelectedMsgIdRef.current = null;
        }, 1200);
      }
      return;
    }
    const idx = mobileCurrentResultIndex + 1;
    setMobileCurrentResultIndex(idx);
    mobileSelectingRef.current = true;
    mobileSelectedMsgIdRef.current = mobileSearchResultsRef.current[idx]._id;
    handleJumpToMessage(mobileSearchResultsRef.current[idx]._id);
    setTimeout(() => {
      mobileSelectingRef.current = false;
      mobileSelectedMsgIdRef.current = null;
    }, 1200);
  }, [mobileSearchHasMore, mobileCurrentResultIndex, mobileSearchTerm, fetchMobileSearchResults, handleJumpToMessage]);

  return {
    mobileSearchTerm,
    setMobileSearchTerm,
    mobileSearchResults,
    setMobileSearchResults,
    isMobileSearching,
    mobileCurrentResultIndex,
    setMobileCurrentResultIndex,
    mobileSearchInputRef,
    handlePreviousResult,
    handleNextResult,
  };
}
