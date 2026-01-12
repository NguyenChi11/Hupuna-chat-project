import { useState, useCallback, useEffect } from 'react';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import { Socket } from 'socket.io-client';
import { readPinnedMessagesApi } from '@/fetch/messages';

interface UseChatPinnedProps {
  roomId: string;
  currentUser: User;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  socketRef: React.MutableRefObject<Socket | null>;
  sendNotifyMessage: (text: string, replyToMessageId?: string) => Promise<void>;
  PINNED_PAGE_SIZE?: number;
}

export function useChatPinned({
  roomId,
  currentUser,
  messages,
  setMessages,
  socketRef,
  sendNotifyMessage,
  PINNED_PAGE_SIZE = 10,
}: UseChatPinnedProps) {
  const [pinnedMessage, setPinnedMessage] = useState<Message | null>(null);
  const [allPinnedMessages, setAllPinnedMessages] = useState<Message[]>([]);
  const [showPinnedList, setShowPinnedList] = useState(false);
  const [pinnedSkip, setPinnedSkip] = useState(0);
  const [pinnedTotal, setPinnedTotal] = useState<number | null>(null);
  const [pinnedLoading, setPinnedLoading] = useState(false);

  const [messageToPin, setMessageToPin] = useState<Message | null>(null);
  const [showPinTitleModal, setShowPinTitleModal] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      const currentlyPinned = messages.find((m) => m.isPinned);
      setPinnedMessage(currentlyPinned || null);
    } else {
      setPinnedMessage(null);
    }
  }, [messages]);

  const fetchPinnedMessages = useCallback(async () => {
    try {
      setPinnedLoading(true);
      const json = await readPinnedMessagesApi(roomId, { limit: PINNED_PAGE_SIZE, skip: 0 });
      const arr = (json.data as Message[]) || [];
      setAllPinnedMessages(arr);
      const totalRaw = (json as { total?: number }).total;
      const total: number | null = typeof totalRaw === 'number' ? totalRaw : null;
      setPinnedTotal(total);
      setPinnedSkip(arr.length);
    } catch (error) {
      console.error('Fetch Pinned messages error:', error);
      setAllPinnedMessages([]);
      setPinnedTotal(null);
      setPinnedSkip(0);
    } finally {
      setPinnedLoading(false);
    }
  }, [roomId, PINNED_PAGE_SIZE]);

  const loadMorePinnedMessages = useCallback(async () => {
    if (pinnedLoading) return;
    const total = pinnedTotal ?? 0;
    if (total > 0 && allPinnedMessages.length >= total) return;
    try {
      setPinnedLoading(true);
      const json = await readPinnedMessagesApi(roomId, { limit: PINNED_PAGE_SIZE, skip: pinnedSkip });
      const arr = (json.data as Message[]) || [];
      if (arr.length > 0) {
        setAllPinnedMessages((prev) => {
          const existing = new Set(prev.map((m) => String(m._id)));
          const merged = [...prev, ...arr.filter((m) => !existing.has(String(m._id)))];
          return merged.sort((a, b) => Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
        });
        setPinnedSkip((s) => s + arr.length);
      }
      const totalRaw = (json as { total?: number }).total;
      const totalNext: number | null = typeof totalRaw === 'number' ? totalRaw : pinnedTotal;
      setPinnedTotal(totalNext);
    } catch (e) {
      console.error('Load more pinned messages error:', e);
    } finally {
      setPinnedLoading(false);
    }
  }, [pinnedLoading, pinnedTotal, allPinnedMessages.length, roomId, PINNED_PAGE_SIZE, pinnedSkip]);

  const executePinMessage = async (message: Message, newPinnedStatus: boolean, pinnedTitle?: string) => {
    const cleanTitle = pinnedTitle?.trim();
    const updatedMessage = {
      ...message,
      isPinned: newPinnedStatus,
      pinnedTitle: cleanTitle,
      pinnedAt: newPinnedStatus ? Date.now() : null,
    };
    setPinnedMessage(newPinnedStatus ? updatedMessage : null);

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'togglePin',
          messageId: message._id,
          data: { isPinned: newPinnedStatus, pinnedTitle: cleanTitle },
        }),
      });

      if (res.ok) {
        const pinnedAt = newPinnedStatus ? Date.now() : null;
        setMessages((prev) =>
          prev.map((m) =>
            String(m._id) === String(message._id)
              ? {
                  ...m,
                  isPinned: newPinnedStatus,
                  pinnedTitle: cleanTitle,
                  pinnedAt,
                }
              : m,
          ),
        );
        setAllPinnedMessages((prev) => {
          const updatedMsg = {
            ...message,
            isPinned: newPinnedStatus,
            pinnedTitle: cleanTitle,
            editedAt: Date.now(),
            pinnedAt,
          } as Message;
          const withoutDup = prev.filter((m) => String(m._id) !== String(message._id));
          const next = newPinnedStatus ? [updatedMsg, ...withoutDup] : withoutDup;
          return next.sort((a, b) => Number(b.pinnedAt ?? 0) - Number(a.pinnedAt ?? 0));
        });

        socketRef.current?.emit('edit_message', {
          _id: message._id,
          roomId,
          isPinned: newPinnedStatus,
          pinnedTitle: cleanTitle,
          pinnedAt,
        });

        const action = newPinnedStatus ? 'đã ghim' : 'đã bỏ ghim';
        const senderName = currentUser.name || 'Một thành viên';
        let notificationText = '';

        if (message.type === 'text') {
          notificationText = `${senderName} ${action} một tin nhắn văn bản.`;
        } else if (message.type === 'image') {
          notificationText = `${senderName} ${action} một hình ảnh.`;
        } else if (message.type === 'file') {
          notificationText = `${senderName} ${action} tệp tin "${message.fileName || 'file'}".`;
        } else if (message.type === 'poll') {
          notificationText = `${senderName} ${action} một bình chọn.`;
        } else {
          notificationText = `${senderName} ${action} một tin nhắn.`;
        }

        if (newPinnedStatus && cleanTitle) {
          notificationText += ` Tiêu đề: "${cleanTitle}"`;
        }

        await sendNotifyMessage(notificationText);
      } else {
        setPinnedMessage(message.isPinned ? message : null);
        console.error('API togglePin failed');
      }
    } catch (error) {
      console.error('Ghim tin nhắn thất bại', error);
      setPinnedMessage(message.isPinned ? message : null);
    }
  };

  const handlePinMessage = async (message: Message) => {
    if (message.isPinned) {
      executePinMessage(message, false);
    } else {
      setMessageToPin(message);
      setShowPinTitleModal(true);
    }
  };

  return {
    pinnedMessage,
    setPinnedMessage,
    allPinnedMessages,
    setAllPinnedMessages,
    showPinnedList,
    setShowPinnedList,
    pinnedSkip,
    setPinnedSkip,
    pinnedTotal,
    setPinnedTotal,
    pinnedLoading,
    messageToPin,
    setMessageToPin,
    showPinTitleModal,
    setShowPinTitleModal,
    executePinMessage,
    handlePinMessage,
    fetchPinnedMessages,
    loadMorePinnedMessages,
  };
}
