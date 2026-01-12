import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import { resolveSocketUrl, compareIds } from '@/utils/utils';
import { markAsReadApi } from '@/fetch/messages';

interface UseChatSocketProps {
  roomId: string;
  currentUser: User;
  socketRef: React.MutableRefObject<Socket | null>;
  setSocketInstance: (socket: Socket | null) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  messagesRef: React.MutableRefObject<Message[]>;
  sortMessagesAsc: (list: Message[]) => Message[];
  schedulePollAutoLock: (msg: Message) => void;
  scrollToBottom: (force?: boolean, skipCondition?: boolean, resetPendingCount?: () => void) => void;
  scrollLockUntilRef: React.MutableRefObject<number>;
  messagesContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  roomMuted: boolean;
  playMessageSound: () => void;
  showMessageNotification: (msg: Message) => void;
  flashTabTitle: () => void;
  setPendingNewCount: React.Dispatch<React.SetStateAction<number>>;
  pendingNewCountRef: React.MutableRefObject<number>;
  hasScrolledUpRef: React.MutableRefObject<boolean>;
  setShowScrollDown: (show: boolean) => void;
  syncLocalReadBy: () => void;
  reLoad?: () => void;
  setNicknamesStamp: React.Dispatch<React.SetStateAction<number>>;
  setAllPinnedMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  reminderTimersByIdRef: React.MutableRefObject<Map<string, number>>;
  reminderScheduledIdsRef: React.MutableRefObject<Set<string>>;
  pollTimersByIdRef: React.MutableRefObject<Map<string, number>>;
  pollScheduledIdsRef: React.MutableRefObject<Set<string>>;
  fetchMessages: () => Promise<void>;
  sendNotifyMessage: (text: string, replyToMessageId?: string) => Promise<void>;
}

const SCROLL_BUMP_PX = 80;
const BUTTON_SHOW_THRESHOLD_PX = 60;

export function useChatSocket({
  roomId,
  currentUser,
  socketRef,
  setSocketInstance,
  setMessages,
  messagesRef,
  sortMessagesAsc,
  schedulePollAutoLock,
  scrollToBottom,
  scrollLockUntilRef,
  messagesContainerRef,
  roomMuted,
  playMessageSound,
  showMessageNotification,
  flashTabTitle,
  setPendingNewCount,
  pendingNewCountRef,
  hasScrolledUpRef,
  setShowScrollDown,
  syncLocalReadBy,
  reLoad,
  setNicknamesStamp,
  setAllPinnedMessages,
  reminderTimersByIdRef,
  reminderScheduledIdsRef,
  pollTimersByIdRef,
  pollScheduledIdsRef,
  fetchMessages,
  sendNotifyMessage,
}: UseChatSocketProps) {
  useEffect(() => {
    if (!roomId) return;
    if (!socketRef.current || !socketRef.current.connected) {
      socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      setSocketInstance(socketRef.current);
    }

    const socket = socketRef.current;
    if (!socket) return;

    const handleReceiveMessage = (data: Message) => {
      if (String(data.roomId) !== String(roomId)) return;
      setMessages((prev) => {
        const id = String(data._id);
        const exists = prev.some((m) => String(m._id) === id);
        if (exists) {
          const next = prev.map((m) => (String(m._id) === id ? { ...m, ...data } : m));
          return sortMessagesAsc(next);
        }
        const map = new Map<string, Message>();
        [...prev, data].forEach((m) => map.set(String(m._id), m));
        const unique = Array.from(map.values()).sort((a: Message, b: Message) => {
          const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
          const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
          if (ta !== tb) return ta - tb;
          const ia = String(a._id || '');
          const ib = String(b._id || '');
          if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
          if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
          return ia.localeCompare(ib);
        });
        return unique;
      });

      if (data.type === 'poll') {
        const endAt = data.pollEndAt;
        const locked = !!data.isPollLocked;
        if (typeof endAt === 'number' && !locked) {
          schedulePollAutoLock(data);
        }
      }

      if (data.sender !== currentUser._id && !roomMuted) {
        playMessageSound();
        showMessageNotification(data);
        flashTabTitle();
      }

      const locked = !!scrollLockUntilRef.current && Date.now() < scrollLockUntilRef.current;
      const elMeasure = messagesContainerRef.current;
      const gap = elMeasure ? elMeasure.scrollHeight - elMeasure.scrollTop - elMeasure.clientHeight : 0;
      const atBottomNow = gap <= SCROLL_BUMP_PX;
      const iconShowingNow = !atBottomNow && gap > BUTTON_SHOW_THRESHOLD_PX;
      const shouldScroll = !locked && (data.sender === currentUser._id || !iconShowingNow);

      if (shouldScroll) {
        scrollToBottom();
        setTimeout(scrollToBottom, 0);
        setTimeout(scrollToBottom, 150);
        setTimeout(scrollToBottom, 300);
        setPendingNewCount(0);
        pendingNewCountRef.current = 0;
        hasScrolledUpRef.current = false;
        setShowScrollDown(false);
        if (data.sender !== currentUser._id) {
          void markAsReadApi(roomId, String(currentUser._id));
          syncLocalReadBy();
          try {
            socketRef.current?.emit('messages_read', { roomId, userId: String(currentUser._id) });
          } catch {}
        }
      } else {
        if (data.sender !== currentUser._id) {
          setPendingNewCount((c) => {
            const next = c + 1;
            pendingNewCountRef.current = next;
            return next;
          });
          setShowScrollDown(hasScrolledUpRef.current || pendingNewCountRef.current > 0);
          if (atBottomNow) {
            void markAsReadApi(roomId, String(currentUser._id));
            syncLocalReadBy();
            try {
              socketRef.current?.emit('messages_read', { roomId, userId: String(currentUser._id) });
            } catch {}
          }
        }
      }
    };

    const handleRoomNicknameUpdated = (payload: { roomId: string; targetUserId: string; nickname: string }) => {
      if (String(payload.roomId) !== String(roomId)) return;
      reLoad?.();
      setNicknamesStamp(Date.now());
    };

    const handleRoomNicknamesState = (payload: { roomId: string; map: Record<string, string> }) => {
      if (String(payload.roomId) !== String(roomId)) return;
      try {
        const myId = String(currentUser._id || '');
        const key = `roomNicknames:${roomId}:${myId}`;
        const incoming = payload.map || {};
        localStorage.setItem(key, JSON.stringify(incoming));
      } catch {}
      setNicknamesStamp((s) => s + 1);
    };

    const handleReactionUpdated = (data: { _id: string; roomId: string; reactions: Record<string, string[]> }) => {
      if (String(data.roomId) === String(roomId)) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            String(msg._id) === String(data._id)
              ? {
                  ...msg,
                  reactions: data.reactions,
                }
              : msg,
          ),
        );
      }
    };

    const handleMessagesRead = (payload: { roomId: string; userId: string }) => {
      if (String(payload.roomId) !== String(roomId)) return;
      const viewerId = String(payload.userId || '');
      const myId = String(currentUser._id || '');
      if (!viewerId || compareIds(viewerId, myId)) return;
      const lastMine = [...messagesRef.current]
        .slice()
        .reverse()
        .find((m) => compareIds((m as Message).sender, myId) && !(m as Message).isRecalled);
      if (!lastMine) return;
      setMessages((prev) =>
        prev.map((m) => {
          if (String(m._id) !== String(lastMine._id)) return m;
          const existing = new Set(((m.readBy || []) as string[]).map((x) => String(x)));
          if (!existing.has(viewerId)) {
            return { ...m, readBy: [...existing, viewerId] as unknown as string[] };
          }
          return m;
        }),
      );
    };

    const handleEditMessage = (data: Partial<Message> & { roomId: string; _id: string }) => {
      if (String(data.roomId) === String(roomId)) {
        setMessages((prevMessages) => {
          const nextContent =
            typeof (data as unknown as { newContent?: unknown }).newContent === 'string'
              ? ((data as unknown as { newContent?: string }).newContent as string)
              : typeof data.content === 'string'
                ? data.content
                : undefined;
          const nextOriginal =
            typeof data.originalContent === 'string'
              ? data.originalContent
              : typeof data.content === 'string'
                ? data.content
                : undefined;
          const updated = prevMessages.map((msg) =>
            String(msg._id) === String(data._id)
              ? {
                  ...msg,
                  content: nextContent ?? msg.content,
                  editedAt: data.editedAt,
                  originalContent: nextOriginal || msg.originalContent || msg.content,
                  reminderAt: data.reminderAt ?? msg.reminderAt,
                  reminderNote: data.reminderNote ?? msg.reminderNote,
                  pollQuestion: data.pollQuestion ?? msg.pollQuestion,
                  pollOptions: data.pollOptions ?? msg.pollOptions,
                  pollVotes: data.pollVotes ?? msg.pollVotes,
                  isPollLocked: data.isPollLocked ?? msg.isPollLocked,
                  pollLockedAt: data.pollLockedAt ?? msg.pollLockedAt,
                  pollAllowMultiple: data.pollAllowMultiple ?? msg.pollAllowMultiple,
                  pollAllowAddOptions: data.pollAllowAddOptions ?? msg.pollAllowAddOptions,
                  pollHideVoters: data.pollHideVoters ?? msg.pollHideVoters,
                  pollHideResultsUntilVote: data.pollHideResultsUntilVote ?? msg.pollHideResultsUntilVote,
                  pollEndAt: data.pollEndAt !== undefined ? data.pollEndAt : msg.pollEndAt,
                  timestamp: data.timestamp ?? msg.timestamp,
                  isPinned: typeof data.isPinned === 'boolean' ? data.isPinned : msg.isPinned,
                  pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : msg.pinnedAt,
                  reactions: data.reactions ?? msg.reactions,
                }
              : msg,
          );
          const sorted = [...updated].sort((a: Message, b: Message) => {
            const ta = Number(a.serverTimestamp ?? a.timestamp) || 0;
            const tb = Number(b.serverTimestamp ?? b.timestamp) || 0;
            if (ta !== tb) return ta - tb;
            const ia = String(a._id || '');
            const ib = String(b._id || '');
            if (ia.startsWith('temp_') && !ib.startsWith('temp_')) return 1;
            if (!ia.startsWith('temp_') && ib.startsWith('temp_')) return -1;
            return ia.localeCompare(ib);
          });
          return sorted;
        });

        if (typeof data.isPinned === 'boolean') {
          setAllPinnedMessages((prev) => {
            const latest = messagesRef.current.find((m) => String(m._id) === String(data._id));
            const updatedMsg = latest
              ? ({
                  ...latest,
                  content: data.content ?? latest.content,
                  pollQuestion: data.pollQuestion ?? latest.pollQuestion,
                  pollOptions: data.pollOptions ?? latest.pollOptions,
                  pollVotes: data.pollVotes ?? latest.pollVotes,
                  isPollLocked: data.isPollLocked ?? latest.isPollLocked,
                  pollLockedAt: data.pollLockedAt ?? latest.pollLockedAt,
                  timestamp: data.timestamp ?? latest.timestamp,
                  editedAt: data.editedAt ?? latest.editedAt,
                  isPinned: data.isPinned,
                  pinnedTitle: data.pinnedTitle ?? latest.pinnedTitle,
                  pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : latest.pinnedAt,
                } as Message)
              : ({
                  _id: data._id as unknown as string,
                  roomId,
                  sender: currentUser._id as unknown as string,
                  content: data.content || '',
                  type: 'text',
                  timestamp: data.timestamp || Date.now(),
                  editedAt: data.editedAt || Date.now(),
                  isPinned: data.isPinned,
                  pinnedTitle: data.pinnedTitle,
                  pinnedAt: typeof data.pinnedAt !== 'undefined' ? data.pinnedAt : Date.now(),
                } as Message);
            const withoutDup = prev.filter((m) => String(m._id) !== String(data._id));
            const next = data.isPinned ? [updatedMsg, ...withoutDup] : withoutDup;
            return next.sort((a, b) => Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
          });
        }

        const idStr = String(data._id);
        const t = reminderTimersByIdRef.current.get(idStr);
        if (t) {
          clearTimeout(t);
          reminderTimersByIdRef.current.delete(idStr);
          reminderScheduledIdsRef.current.delete(idStr);
        }

        const now = Date.now();
        const at = typeof data.reminderAt === 'number' ? (data.reminderAt as number) : undefined;
        if (typeof at === 'number') {
          const delay = Math.max(0, at - now);
          const timerId = window.setTimeout(async () => {
            const latest = messagesRef.current.find((x) => String(x._id) === idStr);
            if (!latest || latest.isRecalled) {
              reminderScheduledIdsRef.current.delete(idStr);
              const old = reminderTimersByIdRef.current.get(idStr);
              if (old) {
                clearTimeout(old);
                reminderTimersByIdRef.current.delete(idStr);
              }
              return;
            }
            let latestAt = (latest as Message & { reminderAt?: number }).reminderAt || latest.timestamp;
            try {
              const r = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'getById', _id: latest._id }),
              });
              const j = await r.json();
              const srv = (j && (j.row?.row || j.row)) as Message | undefined;
              const srvAt = srv && (srv as Message & { reminderAt?: number }).reminderAt;
              if (typeof srvAt === 'number') {
                latestAt = srvAt;
              }
            } catch {}
            const now3 = Date.now();
            if (latestAt > now3) {
              const newDelay = Math.max(0, latestAt - now3);
              const newTimer = window.setTimeout(async () => {
                const latest2 = messagesRef.current.find((x) => String(x._id) === idStr);
                if (!latest2 || latest2.isRecalled) {
                  reminderScheduledIdsRef.current.delete(idStr);
                  const t2 = reminderTimersByIdRef.current.get(idStr);
                  if (t2) {
                    clearTimeout(t2);
                    reminderTimersByIdRef.current.delete(idStr);
                  }
                  return;
                }
                const latestAt2 = (latest2 as Message & { reminderAt?: number }).reminderAt || latest2.timestamp;
                const timeStr2 = new Date(latestAt2).toLocaleString('vi-VN');
                try {
                  const res2 = await fetch('/api/messages', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      action: 'update',
                      field: '_id',
                      value: latest2._id,
                      data: { reminderFired: true },
                    }),
                  });
                  const json2 = await res2.json();
                  if (json2?.success) {
                    await sendNotifyMessage(
                      `Đến giờ lịch hẹn: "${latest2.content || ''}" lúc ${timeStr2}`,
                      String(latest2._id),
                    );
                  }
                } catch {}
                reminderScheduledIdsRef.current.delete(idStr);
                reminderTimersByIdRef.current.delete(idStr);
              }, newDelay);
              reminderTimersByIdRef.current.set(idStr, newTimer);
              return;
            }
            const timeStr = new Date(latestAt).toLocaleString('vi-VN');
            try {
              const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'update',
                  field: '_id',
                  value: latest._id,
                  data: { reminderFired: true },
                }),
              });
              const json = await res.json();
              if (json?.success) {
                await sendNotifyMessage(
                  `Đến giờ lịch hẹn: "${latest.content || ''}" lúc ${timeStr}`,
                  String(latest._id),
                );
              }
            } catch {}
            reminderScheduledIdsRef.current.delete(idStr);
            reminderTimersByIdRef.current.delete(idStr);
          }, delay);
          reminderTimersByIdRef.current.set(idStr, timerId);
          reminderScheduledIdsRef.current.add(idStr);
        }

        const tPoll = pollTimersByIdRef.current.get(idStr);
        if (tPoll) {
          clearTimeout(tPoll);
          pollTimersByIdRef.current.delete(idStr);
          pollScheduledIdsRef.current.delete(idStr);
        }
        const endAt = data.pollEndAt;
        const shouldSchedule = typeof endAt === 'number' && !data.isPollLocked;
        if (shouldSchedule) {
          const existingMsg = messagesRef.current.find((m) => String(m._id) === idStr);
          const composed = existingMsg
            ? { ...existingMsg, pollEndAt: endAt, isPollLocked: data.isPollLocked }
            : ({
                _id: data._id,
                roomId: data.roomId,
                pollEndAt: endAt,
                isPollLocked: data.isPollLocked,
              } as unknown as Message);
          schedulePollAutoLock(composed);
        }
      }
    };

    const handleMessageRecalled = (data: { _id: string; roomId: string }) => {
      if (data.roomId === roomId) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) => (msg._id === data._id ? { ...msg, isRecalled: true } : msg)),
        );
        const idStr = String(data._id);
        const t = reminderTimersByIdRef.current.get(idStr);
        if (t) {
          clearTimeout(t);
          reminderTimersByIdRef.current.delete(idStr);
          reminderScheduledIdsRef.current.delete(idStr);
        }
        const tp = pollTimersByIdRef.current.get(idStr);
        if (tp) {
          clearTimeout(tp);
          pollTimersByIdRef.current.delete(idStr);
        }
        pollScheduledIdsRef.current.delete(idStr);
      }
    };

    const handleMessageDeleted = (data: { _id: string; roomId: string }) => {
      if (data.roomId === roomId) {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== data._id));
        const idStr = String(data._id);
        const t = reminderTimersByIdRef.current.get(idStr);
        if (t) {
          clearTimeout(t);
          reminderTimersByIdRef.current.delete(idStr);
        }
        reminderScheduledIdsRef.current.delete(idStr);
        const tp = pollTimersByIdRef.current.get(idStr);
        if (tp) {
          clearTimeout(tp);
          pollTimersByIdRef.current.delete(idStr);
        }
        pollScheduledIdsRef.current.delete(idStr);
        void fetchMessages();
      }
    };

    socket.on('receive_message', handleReceiveMessage);
    socket.on('room_nickname_updated', handleRoomNicknameUpdated);
    socket.on('room_nicknames_state', handleRoomNicknamesState);
    socket.on('reaction_updated', handleReactionUpdated);
    socket.on('messages_read', handleMessagesRead);
    socket.on('edit_message', handleEditMessage);
    socket.on('message_recalled', handleMessageRecalled);
    socket.on('message_deleted', handleMessageDeleted);

    socket.emit('join_room', roomId);
    socket.emit('join_user', { userId: String(currentUser._id) });

    return () => {
      socket.off('receive_message', handleReceiveMessage);
      socket.off('room_nickname_updated', handleRoomNicknameUpdated);
      socket.off('room_nicknames_state', handleRoomNicknamesState);
      socket.off('reaction_updated', handleReactionUpdated);
      socket.off('messages_read', handleMessagesRead);
      socket.off('edit_message', handleEditMessage);
      socket.off('message_recalled', handleMessageRecalled);
      socket.off('message_deleted', handleMessageDeleted);
      setSocketInstance(null);
    };
  }, [
    roomId,
    currentUser._id,
    roomMuted,
    socketRef,
    setSocketInstance,
    setMessages,
    messagesRef,
    sortMessagesAsc,
    schedulePollAutoLock,
    scrollToBottom,
    scrollLockUntilRef,
    messagesContainerRef,
    playMessageSound,
    showMessageNotification,
    flashTabTitle,
    setPendingNewCount,
    pendingNewCountRef,
    hasScrolledUpRef,
    setShowScrollDown,
    syncLocalReadBy,
    reLoad,
    setNicknamesStamp,
    setAllPinnedMessages,
    reminderTimersByIdRef,
    reminderScheduledIdsRef,
    pollTimersByIdRef,
    pollScheduledIdsRef,
    fetchMessages,
    sendNotifyMessage,
  ]);
}
