import { useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message, MessageCreate } from '@/types/Message';
import { User } from '@/types/User';
import { GroupConversation, ChatItem } from '@/types/Group';
import { updateMessageApi, recallMessageApi } from '@/fetch/messages';
import { resolveSocketUrl } from '@/utils/utils';

const getId = (u: User | ChatItem | string | undefined | null): string => {
  if (!u) return '';
  if (typeof u === 'string') return u;
  if ('_id' in u && u._id != null) return String(u._id);
  if ('id' in u && u.id != null) return String(u.id);
  return '';
};

interface UseChatActionsProps {
  currentUser: User;
  roomId: string;
  isGroup: boolean;
  selectedChat: ChatItem | null;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  socketRef: React.MutableRefObject<Socket | null>;
  allUsersMap: Map<string, string>;
  groups: ChatItem[];
  getSenderName: (sender: User | string) => string;
  setMessageToShare: React.Dispatch<React.SetStateAction<Message | null>>;
  setShowShareModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingMessageId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const useChatActions = ({
  currentUser,
  roomId,
  isGroup,
  selectedChat,
  messages,
  setMessages,
  socketRef,
  allUsersMap,
  groups,
  getSenderName,
  setMessageToShare,
  setShowShareModal,
  setEditingMessageId,
}: UseChatActionsProps) => {
  const handleToggleReaction = useCallback(
    async (msg: Message, emoji: string) => {
      const myId = String(currentUser._id);
      const old = (msg.reactions || {}) as Record<string, string[]>;

      // Clean up và toggle reaction
      const cleaned: Record<string, string[]> = Object.fromEntries(
        Object.entries(old).map(([k, arr]) => [k, (Array.isArray(arr) ? arr : []).filter((id) => String(id) !== myId)]),
      );

      const had = Array.isArray(old[emoji]) && old[emoji].includes(myId);
      const next: Record<string, string[]> = { ...cleaned };
      const arr = Array.isArray(next[emoji]) ? next[emoji] : [];
      next[emoji] = had ? arr.filter((id) => String(id) !== myId) : [...arr, myId];

      // 1. ✅ Optimistic Update UI ngay lập tức
      setMessages((prev) => prev.map((m) => (String(m._id) === String(msg._id) ? { ...m, reactions: next } : m)));

      // 2. ✅ Tạo payload đầy đủ cho socket
      const socketPayload = {
        _id: msg._id,
        roomId,
        reactions: next,
        // Thêm thông tin để server có thể broadcast đầy đủ
        sender: currentUser._id,
        senderName: currentUser.name,
        isGroup: isGroup,
        receiver: isGroup ? null : getId(selectedChat),
        members: isGroup ? (selectedChat as GroupConversation).members : [],
      };

      // 3. ✅ Emit socket với error handling tốt hơn
      try {
        if (socketRef.current?.connected) {
          socketRef.current.emit('toggle_reaction', socketPayload);
        } else {
          // Fallback: reconnect và emit
          const tempSocket = io(resolveSocketUrl(), {
            transports: ['websocket'],
            withCredentials: false,
          });

          tempSocket.on('connect', () => {
            tempSocket.emit('toggle_reaction', socketPayload);
            setTimeout(() => tempSocket.disconnect(), 500);
          });
        }
      } catch (error) {
        console.error('❌ Socket emit error:', error);
      }

      // 4. ✅ Gọi API để persist vào DB
      try {
        await updateMessageApi(String(msg._id), { reactions: next });
      } catch (error) {
        console.error('❌ API update error:', error);

        // Rollback nếu API fail
        setMessages((prev) => prev.map((m) => (String(m._id) === String(msg._id) ? { ...m, reactions: old } : m)));
      }
    },
    [currentUser._id, currentUser.name, roomId, isGroup, selectedChat, setMessages, socketRef],
  );

  const handleRecallMessage = async (messageId: string) => {
    if (!confirm('Bạn có chắc chắn muốn thu hồi tin nhắn này?')) return;

    try {
      const data = await recallMessageApi(roomId, messageId);

      if (data.success) {
        setMessages((prev) => prev.map((m) => (m._id === messageId ? { ...m, isRecalled: true } : m)));

        const socketData = {
          _id: messageId,
          roomId,
          sender: currentUser._id,
          isGroup: isGroup,
          receiver: isGroup ? null : getId(selectedChat),
          members: isGroup ? (selectedChat as GroupConversation).members : [],
          type: 'recall',
          content: 'đã thu hồi tin nhắn',
          timestamp: Date.now(),
        };

        socketRef.current?.emit('recall_message', socketData);
      } else if (data.message) {
        alert('Không thể thu hồi: ' + data.message);
      }
    } catch (error) {
      console.error('Recall error:', error);
    }
  };

  const handleSaveEdit = async (messageId: string, newContent: string) => {
    if (!newContent.trim()) return;

    const originalMessage = messages.find((m) => m._id === messageId);
    if (!originalMessage) return;

    const editedAtTimestamp = Date.now();
    const originalContentText = originalMessage.originalContent || originalMessage.content || '';

    // 1. Optimistic Update
    setMessages((prev) =>
      prev.map((m) =>
        m._id === messageId
          ? { ...m, content: newContent, editedAt: editedAtTimestamp, originalContent: originalContentText }
          : m,
      ),
    );
    setEditingMessageId(null);

    // 2. Gọi API Backend
    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'editMessage',
          data: { messageId, newContent },
        }),
      });

      // 3. EMIT SOCKET EVENT
      const myId = String(currentUser._id);
      const senderNick = allUsersMap.get(myId) || currentUser.name;

      const socketData = {
        _id: messageId,
        roomId: roomId,
        newContent: newContent,
        editedAt: editedAtTimestamp,
        originalContent: originalContentText,
        sender: currentUser._id,
        senderName: senderNick, // Dùng nickname
        isGroup: isGroup,
        receiver: isGroup ? null : getId(selectedChat),
        members: isGroup ? (selectedChat as GroupConversation).members : [],
      };

      socketRef.current?.emit('edit_message', socketData);
    } catch (e) {
      console.error('❌ [CLIENT] Chỉnh sửa thất bại:', e);
      alert('Lỗi khi lưu chỉnh sửa.');
      setMessages((prev) => prev.map((m) => (m._id === messageId ? originalMessage : m)));
    }
  };

  const handleShareMessage = useCallback(
    (message: Message) => {
      setMessageToShare(message);
      setShowShareModal(true);
    },
    [setMessageToShare, setShowShareModal],
  );

  const handleShareToRooms = useCallback(
    async (targetRoomIds: string[], message: Message, attachedText?: string) => {
      try {
        let shareContent = '';
        const originalSenderName = getSenderName(message.sender);
        if (message.type === 'text') shareContent = message.content || '';

        const batchItems =
          (
            message as unknown as {
              batchItems?: Array<{
                id: string;
                type: MessageCreate['type'];
                fileUrl?: string;
                fileName?: string;
                content?: string;
              }>;
            }
          ).batchItems || [];

        const safeGroups = Array.isArray(groups) ? groups : [];
        for (const targetRoomId of targetRoomIds) {
          const isGroupChat = safeGroups.some((g) => String(g._id) === String(targetRoomId));
          const myId = String(currentUser._id);
          const senderNick = allUsersMap.get(myId) || currentUser.name;

          const newMsg: MessageCreate = {
            roomId: targetRoomId,
            sender: currentUser._id,
            type: message.type,
            content: message.type === 'text' ? shareContent : message.content,
            fileUrl: message.fileUrl,
            fileName: message.fileName,
            timestamp: Date.now(),
            // Thêm metadata về shared message
            sharedFrom: {
              messageId: String(message._id),
              originalSender: originalSenderName,
              originalRoomId: String(message.roomId),
            },
          };

          if (attachedText && attachedText.trim()) {
            const textMsg: MessageCreate = {
              roomId: targetRoomId,
              sender: currentUser._id,
              senderName: senderNick,
              content: attachedText.trim(),
              type: 'text',
              timestamp: Date.now(),
            };
            const resText = await fetch('/api/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action: 'create',
                data: textMsg,
              }),
            });
            const jsonText = await resText.json();
            if (jsonText.success && typeof jsonText._id === 'string') {
              const sockBaseText = isGroupChat
                ? {
                    roomId: targetRoomId,
                    sender: currentUser._id,
                    senderName: senderNick,
                    isGroup: true,
                    receiver: null,
                    members: safeGroups.find((g) => String(g._id) === String(targetRoomId))?.members || [],
                  }
                : {
                    roomId: targetRoomId,
                    sender: currentUser._id,
                    senderName: senderNick,
                    isGroup: false,
                    receiver: targetRoomId.split('_').find((id) => id !== String(currentUser._id)),
                    members: [],
                  };
              socketRef.current?.emit('send_message', { ...sockBaseText, ...textMsg, _id: jsonText._id });
            }
          }

          if (batchItems.length > 0) {
            const batchId = `${String(message._id)}-${Date.now()}`;
            for (const item of batchItems) {
              const itemMsg: MessageCreate = {
                roomId: targetRoomId,
                sender: currentUser._id,
                type: item.type,
                content: item.type === 'text' ? item.content : undefined,
                fileUrl: item.fileUrl,
                fileName: item.fileName,
                timestamp: Date.now(),
                batchId,
                sharedFrom: {
                  messageId: String(item.id || message._id),
                  originalSender: originalSenderName,
                  originalRoomId: String(message.roomId),
                },
              };
              const resItem = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'create',
                  data: itemMsg,
                }),
              });
              const jsonItem = await resItem.json();
              if (jsonItem.success && typeof jsonItem._id === 'string') {
                const sockBase = isGroupChat
                  ? {
                      roomId: targetRoomId,
                      sender: currentUser._id,
                      senderName: senderNick,
                      isGroup: true,
                      receiver: null,
                      members: safeGroups.find((g) => String(g._id) === String(targetRoomId))?.members || [],
                    }
                  : {
                      roomId: targetRoomId,
                      sender: currentUser._id,
                      senderName: senderNick,
                      isGroup: false,
                      receiver: targetRoomId.split('_').find((id) => id !== String(currentUser._id)),
                      members: [],
                    };
                socketRef.current?.emit('send_message', { ...sockBase, ...itemMsg, _id: jsonItem._id });
              }
            }
          } else {
            const res = await fetch('/api/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action: 'create',
                data: newMsg,
              }),
            });
            const json = await res.json();
            if (json.success && typeof json._id === 'string') {
              const sockBase = isGroupChat
                ? {
                    roomId: targetRoomId,
                    sender: currentUser._id,
                    senderName: senderNick,
                    isGroup: true,
                    receiver: null,
                    members: safeGroups.find((g) => String(g._id) === String(targetRoomId))?.members || [],
                  }
                : {
                    roomId: targetRoomId,
                    sender: currentUser._id,
                    senderName: senderNick,
                    isGroup: false,
                    receiver: targetRoomId.split('_').find((id) => id !== String(currentUser._id)),
                    members: [],
                  };
              socketRef.current?.emit('send_message', { ...sockBase, ...newMsg, _id: json._id });
            }
          }
        }
      } catch (error) {
        console.error('Share message error:', error);
        throw error;
      }
    },
    [currentUser, groups, getSenderName, allUsersMap, socketRef],
  );

  return {
    handleToggleReaction,
    handleRecallMessage,
    handleSaveEdit,
    handleShareMessage,
    handleShareToRooms,
  };
};
