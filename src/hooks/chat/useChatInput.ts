import { useState, useCallback, useMemo } from 'react';
import { EmojiClickData } from 'emoji-picker-react';
import { MessageCreate, Message } from '@/types/Message';
import { User } from '@/types/User';
import type { MemberInfo } from '@/types/Group';
import type { ChatItem } from '@/types/Group';
import { useChatUpload } from '@/hooks/useChatUpload';
import { useChatMentions } from '@/hooks/useChatMentions';
import { insertTextAtCursor } from '@/utils/chatInput';
import { Socket } from 'socket.io-client';

interface AttachmentItem {
  file: File;
  type: 'image' | 'video' | 'file';
  previewUrl: string;
  videoCropConfig?: Message['videoCropConfig'] | null;
}

interface UseChatInputProps {
  roomId: string;
  currentUser: User;
  isGroup: boolean;
  selectedChat: ChatItem;
  allUsers: User[];
  activeMembers: MemberInfo[];
  allUsersMap: Map<string, string>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  socketRef?: React.MutableRefObject<Socket | null>;
  sortMessagesAsc?: (messages: Message[]) => Message[];
  ensureBottom: () => void;
  scrollToBottom: () => void;
  sendMessageProcess: (msgData: MessageCreate) => Promise<void>;
}

export const useChatInput = ({
  roomId,
  currentUser,
  isGroup,
  selectedChat,
  allUsers,
  activeMembers,
  allUsersMap,
  setMessages,
  ensureBottom,
  scrollToBottom,
  sendMessageProcess,
}: UseChatInputProps) => {
  const [attachments, setAttachments] = useState<AttachmentItem[]>([]);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [pickerTab, setPickerTab] = useState<'emoji' | 'sticker'>('emoji');

  const {
    showMentionMenu,
    mentionSuggestions,
    selectedMentionIndex,
    mentionMenuRef,
    editableRef,
    getPlainTextFromEditable,
    parseMentions,
    handleInputChangeEditable,
    handleKeyDownEditable,
    selectMention,
    setShowMentionMenu,
  } = useChatMentions({
    allUsers,
    activeMembers,
    currentUser,
  });

  const { handleUploadAndSend, uploadingFiles } = useChatUpload({
    roomId,
    currentUser,
    selectedChat,
    isGroup,
    sendMessageProcess,
    setMessages,
    onScrollBottom: ensureBottom,
  });

  const uploadingCount = useMemo(() => Object.keys(uploadingFiles || {}).length, [uploadingFiles]);
  const hasUploading = uploadingCount > 0;
  const overallUploadPercent = useMemo(() => {
    if (!uploadingCount) return 0;
    const values = Object.values(uploadingFiles || {});
    const sum = values.reduce((acc, v) => acc + (Number.isFinite(Number(v)) ? Number(v) : 0), 0);
    return Math.round(sum / uploadingCount);
  }, [uploadingCount, uploadingFiles]);

  const dismissKeyboardAndScroll = useCallback(() => {
    try {
      (document.activeElement as HTMLElement | null)?.blur?.();
    } catch {}
    try {
      editableRef.current?.blur?.();
    } catch {}
    scrollToBottom();
    setTimeout(scrollToBottom, 0);
    setTimeout(scrollToBottom, 150);
  }, [editableRef, scrollToBottom]);

  const getSenderName = useCallback(
    (sender: User | string): string => {
      const id = typeof sender === 'string' ? sender : String(sender._id || sender.id);
      return allUsersMap.get(id) || (typeof sender === 'object' ? sender.name || '' : 'User');
    },
    [allUsersMap],
  );

  const handleSendMessage = async () => {
    if (!editableRef.current) return;
    const messageTag = editableRef.current.dataset.messageTag as 'important' | 'urgent' | undefined;

    const plainText = getPlainTextFromEditable().trim();
    const hasAtt = attachments.length > 0;
    if (!plainText && !hasAtt) return;

    const { mentions, displayText } = parseMentions(plainText);
    let expandedText = displayText;
    try {
      const activeRaw = localStorage.getItem(`chatFlashActiveFolder:${roomId}`);
      const active = activeRaw ? JSON.parse(activeRaw) : null;
      const fid = active?.id;
      const enabled = localStorage.getItem(`chatFlashEnabled:${roomId}`) === 'true';
      if (fid && enabled) {
        const kvRaw = localStorage.getItem(`chatFlashKV:${roomId}:${fid}`);
        const arr = kvRaw ? JSON.parse(kvRaw) : [];
        const map = new Map<string, string>(
          (Array.isArray(arr) ? arr : []).map((x: { key: string; value: string }) => [String(x.key), String(x.value)]),
        );
        expandedText = String(expandedText).replace(/(^|\s)\/([\w-]+)/g, (m: string, p1: string, k: string) => {
          const v = map.get(k);
          return v != null ? p1 + v : m;
        });
      }
    } catch {}

    const repliedUserName = replyingTo ? getSenderName(replyingTo.sender) : undefined;
    const ALL_MENTION_ID = '__ALL__';

    const expandedMentionIds = new Set<string>();
    mentions.forEach((id) => {
      if (id === ALL_MENTION_ID) {
        activeMembers.forEach((mem) => {
          const memId = String(mem._id || mem.id || '');
          if (memId) expandedMentionIds.add(memId);
        });
      } else {
        expandedMentionIds.add(id);
      }
    });

    const finalMentions = Array.from(expandedMentionIds);

    if (editableRef.current) {
      editableRef.current.innerHTML = '';
    }

    let currentAttachments: typeof attachments = [];
    if (hasAtt) {
      currentAttachments = [...attachments];
      setAttachments([]);
    }

    if (plainText) {
      const myId = String(currentUser._id);
      const senderNick = allUsersMap.get(myId) || currentUser.name;

      const textMsg: MessageCreate = {
        roomId,
        sender: currentUser._id,
        senderName: senderNick,
        content: expandedText,
        type: 'text',
        timestamp: Date.now(),
        replyToMessageId: replyingTo?._id,
        replyToMessageName: repliedUserName,
        mentions: finalMentions.length > 0 ? finalMentions : undefined,
        messageTag,
      };
      await sendMessageProcess(textMsg);
    }

    if (hasAtt) {
      const myId = String(currentUser._id);
      const senderNick = allUsersMap.get(myId) || currentUser.name;
      const batchId = `batch_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      currentAttachments.forEach((att) => {
        handleUploadAndSend(
          att.file,
          att.type,
          undefined,
          replyingTo?._id,
          undefined,
          senderNick,
          batchId,
          att.videoCropConfig || null,
        ).then(() => {
          try {
            URL.revokeObjectURL(att.previewUrl);
          } catch {}
        });
      });
    }
    try {
      const el = editableRef.current;
      if (el) {
        if (hasAtt) {
          dismissKeyboardAndScroll();
        } else {
          el.focus();
          const range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(false);
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
        }
      }
    } catch {}
  };

  const handleSendSticker = useCallback(
    async (url: string) => {
      ensureBottom();
      const newMsg: MessageCreate = {
        roomId,
        sender: currentUser._id,
        fileUrl: url,
        type: 'sticker',
        timestamp: Date.now(),
      };
      await sendMessageProcess(newMsg);
      setShowEmojiPicker(false);
    },
    [roomId, currentUser._id, sendMessageProcess, ensureBottom],
  );

  const onEmojiClick = useCallback(
    (emoji: EmojiClickData | string) => {
      if (!editableRef.current) return;

      const toString = (input: EmojiClickData | string): string => {
        const raw = typeof input === 'string' ? input : input.emoji;
        const hexLike = /^[0-9a-fA-F-]+$/;
        if (hexLike.test(raw)) {
          const codePoints = raw
            .split('-')
            .map((h) => parseInt(h, 16))
            .filter((n) => !Number.isNaN(n));
          if (codePoints.length > 0) return String.fromCodePoint(...codePoints);
        }
        return raw;
      };

      const editable = editableRef.current;
      const value = toString(emoji);
      editable.focus();
      insertTextAtCursor(editable, value);
      handleInputChangeEditable();
    },
    [editableRef, handleInputChangeEditable],
  );

  const ALL_MENTION_ID = '__ALL__';
  const mentionSuggestionsWithAll = useMemo(() => {
    if (!isGroup) return mentionSuggestions;
    const allOption = {
      _id: ALL_MENTION_ID,
      name: 'All',
      avatar: undefined,
      type: 'all',
    };
    return [allOption, ...mentionSuggestions];
  }, [isGroup, mentionSuggestions]);

  return {
    attachments,
    setAttachments,
    replyingTo,
    setReplyingTo,
    showEmojiPicker,
    setShowEmojiPicker,
    pickerTab,
    setPickerTab,
    editableRef,
    showMentionMenu,
    mentionSuggestionsWithAll,
    selectedMentionIndex,
    mentionMenuRef,
    handleInputChangeEditable,
    handleKeyDownEditable,
    selectMention,
    setShowMentionMenu,
    handleSendMessage,
    handleSendSticker,
    onEmojiClick,
    hasUploading,
    uploadingCount,
    overallUploadPercent,
    uploadingFiles,
  };
};
