import { useRef, useCallback, useState } from 'react';

const SCROLL_BUMP_PX = 80;
const BUTTON_SHOW_THRESHOLD_PX = 60;

export function useChatScroll() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const isAtBottomRef = useRef(true);
  const initialScrolledRef = useRef(false);
  const jumpLoadingRef = useRef(false);
  const scrollLockUntilRef = useRef<number>(0);
  const hasScrolledUpRef = useRef(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const scrollToBottom = useCallback(
    (
      force = false,
      skipCondition = false,
      resetPendingCount?: () => void
    ) => {
      if (!force && (skipCondition || (scrollLockUntilRef.current && Date.now() < scrollLockUntilRef.current))) {
        return;
      }
      if (jumpLoadingRef.current) return;
      const el = messagesContainerRef.current;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
      const end = messagesEndRef.current;
      if (end && typeof end.scrollIntoView === 'function') {
        end.scrollIntoView({ block: 'end' });
      }
      if (resetPendingCount) resetPendingCount();
      hasScrolledUpRef.current = false;
      setShowScrollDown(false);
    },
    []
  );

  const ensureBottom = useCallback(() => {
    scrollToBottom(true);
    setTimeout(() => scrollToBottom(true), 0);
    setTimeout(() => scrollToBottom(true), 100);
    setTimeout(() => scrollToBottom(true), 300);
  }, [scrollToBottom]);

  return {
    messagesEndRef,
    messagesContainerRef,
    isAtBottomRef,
    initialScrolledRef,
    jumpLoadingRef,
    scrollLockUntilRef,
    hasScrolledUpRef,
    showScrollDown,
    setShowScrollDown,
    scrollToBottom,
    ensureBottom,
    SCROLL_BUMP_PX,
    BUTTON_SHOW_THRESHOLD_PX,
  };
}
