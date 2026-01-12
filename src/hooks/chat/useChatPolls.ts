import { useRef, useCallback } from 'react';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import { Socket } from 'socket.io-client';
import { tryLockPollApi } from '@/fetch/messages';
import { compareIds } from '@/utils/utils';

interface UseChatPollsProps {
  roomId: string;
  currentUser: User;
  socketRef: React.MutableRefObject<Socket | null>;
  sendNotifyMessage: (text: string, replyToMessageId?: string) => Promise<void>;
  messagesRef: React.MutableRefObject<Message[]>;
}

export function useChatPolls({ roomId, currentUser, socketRef, sendNotifyMessage, messagesRef }: UseChatPollsProps) {
  const pollScheduledIdsRef = useRef<Set<string>>(new Set());
  const pollTimersByIdRef = useRef<Map<string, number>>(new Map());

  const schedulePollAutoLock = useCallback(
    (msg: Message) => {
      if (!compareIds(msg.sender, currentUser._id)) return;

      const idStr = String(msg._id);
      const existing = pollTimersByIdRef.current.get(idStr);
      if (existing) {
        clearTimeout(existing);
        pollTimersByIdRef.current.delete(idStr);
        pollScheduledIdsRef.current.delete(idStr);
      }
      const endAt = msg.pollEndAt;
      const locked = !!msg.isPollLocked;
      if (typeof endAt !== 'number' || locked) return;
      const now = Date.now();
      const delay = Math.max(0, endAt - now);
      const timerId = window.setTimeout(async () => {
        const latest = messagesRef.current.find((x) => String(x._id) === idStr);
        if (!latest || latest.isRecalled || latest.isPollLocked) {
          pollScheduledIdsRef.current.delete(idStr);
          const t = pollTimersByIdRef.current.get(idStr);
          if (t) {
            clearTimeout(t);
            pollTimersByIdRef.current.delete(idStr);
          }
          return;
        }
        let latestEndAt = latest.pollEndAt;
        try {
          const r = await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'getById', _id: (latest as Message)._id }),
          });
          const j = await r.json();
          const srv = (j && (j.row?.row || j.row)) as Message | undefined;
          const srvEndAt = srv && (srv as unknown as { pollEndAt?: number | null }).pollEndAt;
          if (typeof srvEndAt === 'number' || srvEndAt === null) {
            latestEndAt = srvEndAt;
          }
        } catch {}
        const now2 = Date.now();
        if (typeof latestEndAt === 'number' && latestEndAt > now2) {
          const newDelay = Math.max(0, latestEndAt - now2);
          const newTimer = window.setTimeout(async () => {
            const latest2 = messagesRef.current.find((x) => String(x._id) === idStr);
            if (!latest2 || (latest2 as Message).isRecalled || (latest2 as Message).isPollLocked) {
              pollScheduledIdsRef.current.delete(idStr);
              const t2 = pollTimersByIdRef.current.get(idStr);
              if (t2) {
                clearTimeout(t2);
                pollTimersByIdRef.current.delete(idStr);
              }
              return;
            }
            const timeStr2 = new Date(latestEndAt as number).toLocaleString('vi-VN');
            const now3 = Date.now();
            const updateData = {
              isPollLocked: true as const,
              pollLockedAt: now3,
              editedAt: now3,
              timestamp: now3,
            };
            try {
              const result = await tryLockPollApi(String((latest2 as Message)._id), updateData);
              if (result.success && result.modifiedCount && result.modifiedCount > 0) {
                socketRef.current?.emit('edit_message', { _id: (latest2 as Message)._id, roomId, ...updateData });
                await sendNotifyMessage(
                  `Bình chọn đã tự động khóa: "${String(
                    (latest2 as Message).content || (latest2 as Message).pollQuestion || '',
                  )}" (kết thúc lúc ${timeStr2})`,
                  String((latest2 as Message)._id),
                );
              }
            } catch {}
            pollScheduledIdsRef.current.delete(idStr);
            pollTimersByIdRef.current.delete(idStr);
          }, newDelay);
          pollTimersByIdRef.current.set(idStr, newTimer);
          return;
        }

        const timeStr = new Date((latestEndAt as number) || now2).toLocaleString('vi-VN');
        const updateData = {
          isPollLocked: true as const,
          pollLockedAt: now2,
          editedAt: now2,
          timestamp: now2,
        };
        try {
          const result = await tryLockPollApi(String((latest as Message)._id), updateData);
          if (result.success && result.modifiedCount && result.modifiedCount > 0) {
            socketRef.current?.emit('edit_message', { _id: (latest as Message)._id, roomId, ...updateData });
            await sendNotifyMessage(
              `Bình chọn đã tự động khóa: "${String(
                (latest as Message).content || (latest as Message).pollQuestion || '',
              )}" (kết thúc lúc ${timeStr})`,
              String((latest as Message)._id),
            );
          }
        } catch {}
        pollScheduledIdsRef.current.delete(idStr);
        pollTimersByIdRef.current.delete(idStr);
      }, delay);
      pollTimersByIdRef.current.set(idStr, timerId);
      pollScheduledIdsRef.current.add(idStr);
    },
    [roomId, sendNotifyMessage, currentUser._id, socketRef, messagesRef],
  );

  return { schedulePollAutoLock };
}
