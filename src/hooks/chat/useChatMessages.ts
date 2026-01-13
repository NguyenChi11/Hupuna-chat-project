import { useState, useRef, useCallback, useEffect } from 'react';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import { readMessagesApi } from '@/fetch/messages';

interface UseChatMessagesProps {
  roomId: string;
  currentUser: User;
  messagesContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  jumpLoadingRef: React.MutableRefObject<boolean>;
  scrollLockUntilRef: React.MutableRefObject<number>;
  setHighlightedMsgId: (id: string | null) => void;
  setShowScrollDown: (show: boolean) => void;
}

export function useChatMessages({
  roomId,
  currentUser,
  messagesContainerRef,
  jumpLoadingRef,
  scrollLockUntilRef,
  setHighlightedMsgId,
  setShowScrollDown,
}: UseChatMessagesProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<Message[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [oldestTs, setOldestTs] = useState<number | null>(null);
  const [initialLoading, setInitialLoading] = useState(false);
  const [pendingNewCount, setPendingNewCount] = useState(0);
  const pendingNewCountRef = useRef(0);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);

  // Reminder refs - kept here if used by effects or passed down
  const reminderScheduledIdsRef = useRef<Set<string>>(new Set());
  const reminderTimersByIdRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const sortMessagesAsc = useCallback((list: Message[]) => {
    const safeNum = (t: unknown) => {
      const n = Number(t);
      return Number.isFinite(n) ? n : 0;
    };
    const cmp = (a: Message, b: Message) => {
      const ta = safeNum(a.serverTimestamp ?? a.timestamp);
      const tb = safeNum(b.serverTimestamp ?? b.timestamp);
      if (ta !== tb) return ta - tb;
      const ia = String(a._id || '');
      const ib = String(b._id || '');
      if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
      if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
      return ia.localeCompare(ib);
    };
    return list.slice().sort(cmp);
  }, []);

  const fetchMessages = useCallback(async () => {
    try {
      setInitialLoading(true);
      const LIMIT = 20;
      const resp = await readMessagesApi(roomId, { limit: LIMIT, sortOrder: 'desc' });
      const raw = Array.isArray(resp.data) ? (resp.data as Message[]) : [];
      const asc = raw.slice().reverse();
      setMessages(asc);
      try {
        const rawPending = localStorage.getItem(`pendingUploads:${roomId}`);
        const arr = rawPending
          ? (JSON.parse(rawPending) as Array<{
              tempId: string;
              type: string;
              fileName: string;
              caption?: string;
              fileUrl: string;
            }>)
          : [];
        if (Array.isArray(arr) && arr.length > 0) {
          setMessages((prev) => {
            const existing = new Set(prev.map((m) => String(m._id)));
            const toAdd = arr
              .filter((x) => !existing.has(String(x.tempId)))
              .map((x) => ({
                _id: x.tempId,
                roomId,
                sender: currentUser._id,
                senderModel: currentUser,
                type: x.type,
                fileUrl: x.fileUrl,
                fileName: x.fileName,
                timestamp: Date.now(),
                content: x.caption,
                isSending: true,
              })) as Message[];
            const combined = [...prev, ...toAdd];
            combined.sort((a, b) => {
              const ta = Number(a.timestamp) || 0;
              const tb = Number(b.timestamp) || 0;
              return ta - tb;
            });
            return combined;
          });
        }
      } catch {}
      const first = asc[0]?.timestamp ?? null;
      setOldestTs(first ?? null);
      setHasMore(raw.length === LIMIT || asc.length > 0);
      setInitialLoading(false);
    } catch (error) {
      console.error('Fetch messages error:', error);
      setMessages([]);
      setHasMore(false);
      setOldestTs(null);
      setInitialLoading(false);
    }
  }, [roomId, currentUser]);

  const loadMoreMessages = useCallback(async () => {
    if (!roomId || loadingMore || !hasMore || oldestTs == null) return false;
    const container = messagesContainerRef.current;
    setLoadingMore(true);
    setShowScrollDown(true);
    const prevHeight = container ? container.scrollHeight : 0;
    let added = false;
    try {
      const LIMIT = 20;
      const data = await readMessagesApi(roomId, { limit: LIMIT, before: oldestTs, sortOrder: 'desc' });
      const raw = Array.isArray(data.data) ? (data.data as Message[]) : [];
      const existing = new Set(messages.map((m) => String(m._id)));
      const toAddDesc = raw.filter((m) => !existing.has(String(m._id)));
      const toAddAsc = toAddDesc.slice().reverse();
      if (toAddAsc.length > 0) {
        setMessages((prev) => [...toAddAsc, ...prev]);
        const newOldest = toAddAsc[0]?.timestamp ?? oldestTs;
        setOldestTs(newOldest ?? oldestTs);
        added = true;
      }
      setHasMore(raw.length === LIMIT);
      if (container && !jumpLoadingRef.current) {
        setTimeout(() => {
          const newHeight = container.scrollHeight;
          const delta = newHeight - prevHeight;
          container.scrollTop = delta + 80; // SCROLL_BUMP_PX
        }, 0);
      }
    } catch (e) {
      console.error('Load more messages error:', e);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
    return added;
  }, [roomId, loadingMore, hasMore, oldestTs, messages, messagesContainerRef, jumpLoadingRef, setShowScrollDown]);

  const syncLocalReadBy = useCallback(() => {
    const myId = String(currentUser._id || '');
    if (!myId) return;
    setMessages((prev) =>
      prev.map((m) => {
        const arr = Array.isArray(m.readBy) ? (m.readBy as string[]) : [];
        if (arr.some((id) => String(id) === myId)) return m;
        return { ...m, readBy: [...arr, myId] };
      }),
    );
  }, [currentUser._id]);

  const handleJumpToMessage = useCallback(
    async (messageId: string) => {
      jumpLoadingRef.current = true;
      scrollLockUntilRef.current = Date.now() + 1800;
      const container = messagesContainerRef.current;

      if (!container) {
        jumpLoadingRef.current = false;
        return;
      }

      // isAtBottomRef.current = false; // Passed from prop? No, it's ref. Not passed in prop here.
      // Need isAtBottomRef prop? I removed it.
      // It's not critical for jump logic itself, just scroll state.
      // I'll skip modifying isAtBottomRef here or add it back to props.

      const computeTopInContainer = (el: HTMLElement, parent: HTMLElement) => {
        const elRect = el.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        return parent.scrollTop + (elRect.top - parentRect.top);
      };

      const isFullyVisible = (el: HTMLElement, parent: HTMLElement) => {
        const cTop = parent.scrollTop;
        const cBottom = cTop + parent.clientHeight;
        const eTop = computeTopInContainer(el, parent);
        const eBottom = eTop + el.clientHeight;
        return eTop >= cTop && eBottom <= cBottom;
      };

      const centerElement = (el: HTMLElement) => {
        try {
          const elTopInContainer = computeTopInContainer(el, container);
          const rawTarget = elTopInContainer - container.clientHeight / 2 + el.clientHeight / 2;
          const maxScroll = Math.max(0, container.scrollHeight - container.clientHeight);
          const targetTop = Math.max(0, Math.min(rawTarget, maxScroll));
          container.scrollTo({ top: targetTop, behavior: 'smooth' });
        } catch {}
      };

      const scrollToElement = (elementId: string, attempt = 0): boolean => {
        const element =
          (messagesContainerRef.current?.querySelector(`[id="${elementId}"]`) as HTMLElement | null) ||
          (document.getElementById(elementId) as HTMLElement | null);

        if (element) {
          try {
            (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          } catch {}
          centerElement(element);

          setHighlightedMsgId(messageId);
          setTimeout(() => setHighlightedMsgId(null), 2500);

          setTimeout(() => {
            const e =
              (messagesContainerRef.current?.querySelector(`[id="${elementId}"]`) as HTMLElement | null) ||
              (document.getElementById(elementId) as HTMLElement | null);
            if (e && !isFullyVisible(e, container)) {
              centerElement(e);
            }
            jumpLoadingRef.current = false;
            scrollLockUntilRef.current = 0;
          }, 320);

          return true;
        }

        if (attempt < 15) {
          setTimeout(() => scrollToElement(elementId, attempt + 1), 200);
          return false;
        }

        jumpLoadingRef.current = false;
        return false;
      };

      const existingElement = document.getElementById(`msg-${messageId}`);
      if (existingElement) {
        scrollToElement(`msg-${messageId}`);
        return;
      }

      const messageInState = messages.find((m) => String(m._id) === String(messageId));
      if (messageInState) {
        setTimeout(() => scrollToElement(`msg-${messageId}`), 100);
        return;
      }

      try {
        const response = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: messageId }),
        });

        const result = await response.json();
        const targetMessage = (result?.row?.row || result?.row) as Message | null;

        if (!targetMessage || String(targetMessage.roomId) !== String(roomId)) {
          alert('Không tìm thấy tin nhắn này trong cuộc trò chuyện.');
          jumpLoadingRef.current = false;
          return;
        }

        const targetTs = Number(targetMessage.timestamp);

        const [olderRes, newerRes] = await Promise.all([
          readMessagesApi(roomId, {
            limit: 100,
            sortOrder: 'desc',
            extraFilters: { timestamp: { $lte: targetTs } },
          }),
          readMessagesApi(roomId, {
            limit: 50,
            sortOrder: 'asc',
            extraFilters: { timestamp: { $gt: targetTs } },
          }),
        ]);

        const olderMessages = Array.isArray(olderRes.data) ? (olderRes.data as Message[]) : [];
        const newerMessages = Array.isArray(newerRes.data) ? (newerRes.data as Message[]) : [];

        const olderAsc = olderMessages.reverse();
        const allNewMessages = [...olderAsc, ...newerMessages];

        const existingIds = new Set(messages.map((m) => String(m._id)));
        const messagesToAdd = allNewMessages.filter((m) => !existingIds.has(String(m._id)));

        if (messagesToAdd.length > 0) {
          setMessages((prev) => {
            const combined = [...prev, ...messagesToAdd];
            combined.sort((a, b) => {
              const ta = Number(a.timestamp) || 0;
              const tb = Number(b.timestamp) || 0;
              return ta - tb;
            });
            return combined;
          });

          const minTimestamp = Math.min(...messagesToAdd.map((m) => Number(m.timestamp)));
          setOldestTs((prev) => Math.min(minTimestamp, prev ?? Infinity));
          setHasMore(olderMessages.length === 100);
        }

        setTimeout(() => {
          scrollToElement(`msg-${messageId}`);
        }, 300);
      } catch (error) {
        console.error('❌ [JUMP] Error:', error);
        alert('Có lỗi xảy ra khi tải tin nhắn.');
        jumpLoadingRef.current = false;
        scrollLockUntilRef.current = 0;
      }
    },
    [roomId, messages, messagesContainerRef, jumpLoadingRef, scrollLockUntilRef, setHighlightedMsgId],
  );

  return {
    messages,
    setMessages,
    messagesRef,
    hasMore,
    loadingMore,
    oldestTs,
    initialLoading,
    pendingNewCount,
    setPendingNewCount,
    pendingNewCountRef,
    replyingTo,
    setReplyingTo,
    reminderScheduledIdsRef,
    reminderTimersByIdRef,
    fetchMessages,
    loadMoreMessages,
    syncLocalReadBy,
    handleJumpToMessage,
    sortMessagesAsc,
  };
}
