import { useCallback } from 'react';
import { Message, MessageCreate } from '@/types/Message';
import { User } from '@/types/User';
import { GroupConversation, ChatItem } from '@/types/Group';
import { Socket } from 'socket.io-client';
import { createMessageApi } from '@/fetch/messages';

interface UseChatSendProps {
  roomId: string;
  currentUser: User;
  isGroup: boolean;
  selectedChat: ChatItem;
  socketRef: React.MutableRefObject<Socket | null>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  ensureBottom: () => void;
  setReplyingTo: React.Dispatch<React.SetStateAction<Message | null>>;
  sortMessagesAsc: (list: Message[]) => Message[];
}

export function useChatSend({
  roomId,
  currentUser,
  isGroup,
  selectedChat,
  socketRef,
  setMessages,
  ensureBottom,
  setReplyingTo,
  sortMessagesAsc,
}: UseChatSendProps) {
  const getId = (u: User | ChatItem | string | undefined | null): string => {
    if (!u) return '';
    if (typeof u === 'string') return u;
    if ('_id' in u && u._id != null) return String(u._id);
    if ('id' in u && u.id != null) return String(u.id);
    return '';
  };

  const sendMessageProcess = useCallback(
    async (msgData: MessageCreate) => {
      try {
        if (msgData._id) {
          const newId = String(msgData._id);
          setMessages((prev) => {
            const next = [...prev, { ...msgData, _id: newId } as Message];
            return sortMessagesAsc(next);
          });
          ensureBottom();
          const socketData = {
            ...msgData,
            _id: newId,
            roomId,
            sender: currentUser._id,
            senderName: currentUser.name,
            isGroup: isGroup,
            receiver: isGroup ? null : getId(selectedChat),
            members: isGroup ? (selectedChat as GroupConversation).members : [],
          };
          socketRef.current?.emit('send_message', socketData);
          setReplyingTo(null);
        } else {
          const json = await createMessageApi({ ...msgData, roomId });
          if (json.success && typeof json._id === 'string') {
            const newId = json._id;
            setMessages((prev) => {
              const next = [...prev, { ...msgData, _id: newId } as Message];
              return sortMessagesAsc(next);
            });
            ensureBottom();
            const socketData = {
              ...msgData,
              _id: newId,
              roomId,
              sender: currentUser._id,
              senderName: currentUser.name,
              isGroup: isGroup,
              receiver: isGroup ? null : getId(selectedChat),
              members: isGroup ? (selectedChat as GroupConversation).members : [],
            };
            socketRef.current?.emit('send_message', socketData);
            setReplyingTo(null);
          }
        }
      } catch (error) {
        console.error('Save message error:', error);
      }
    },
    [roomId, currentUser, isGroup, selectedChat, ensureBottom, setMessages, sortMessagesAsc, setReplyingTo, socketRef]
  );

  const sendNotifyMessage = useCallback(
    async (text: string, replyToMessageId?: string) => {
      const newMsg: MessageCreate = {
        roomId: roomId,
        sender: currentUser._id,
        content: text,
        type: 'notify',
        timestamp: Date.now(),
        replyToMessageId,
      };
      await sendMessageProcess(newMsg);
    },
    [roomId, currentUser._id, sendMessageProcess]
  );

  return {
    sendMessageProcess,
    sendNotifyMessage,
  };
}
