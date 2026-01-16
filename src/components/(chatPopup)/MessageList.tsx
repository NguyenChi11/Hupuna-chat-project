'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import { isVideoFile, getProxyUrl } from '@/utils/utils';
import QRCode from 'qrcode';

// Icons
import {
  HiOutlineDocumentText,
  HiPlay,
  HiEllipsisVertical,
  HiOutlineClock,
  HiMapPin,
  HiChartBar,
  HiUserPlus,
  HiUserMinus,
  HiShieldCheck,
  HiUserGroup,
  HiArrowUturnLeft,
  HiArrowUturnRight,
  HiPencil,
  HiPhoto,
  HiListBullet,
  HiCheckCircle,
  HiEyeSlash,
  HiPlus,
  HiLockClosed,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2';
import { HiPhone, HiVideoCamera, HiArrowDown, HiArrowUp } from 'react-icons/hi2';
import { HiLink, HiOutlineLogout } from 'react-icons/hi';
import ReminderDetailModal from './components/ReminderDetailModal';
import NoteDetailModal from './components/NoteDetailModal';
import PollDetailModal from './components/PollDetailModal';
import ReactionButton from './components/ReactionButton';
import { ContextMenuState } from './MessageContextMenu';
import ICShareMessage from '../svg/ICShareMessage';
import ReadStatus from './components/ReadStatus';
import ReminderCard from './components/ReminderCard';
import { CiBellOn, CiLocationOn, CiWarning } from 'react-icons/ci';

interface SenderInfo {
  _id: string;
  name: string;
  avatar: string | null;
}

interface MessageListProps {
  messagesGrouped: Map<string, Message[]>;
  messages: Message[];
  currentUser: User;
  allUsersMap: Map<string, string>;
  uploadingFiles: Record<string, number>;
  highlightedMsgId: string | null;
  isGroup: boolean;
  onContextMenu: (e: React.MouseEvent, msg: Message) => void;
  onReplyMessage?: (msg: Message) => void;
  onJumpToMessage: (id: string) => void;
  getSenderInfo: (sender: User | string) => SenderInfo;
  renderMessageContent: (content: string, mentionedUserIds?: string[], isMe?: boolean) => React.ReactNode;
  onOpenMedia: (url: string, type: 'image' | 'video') => void;
  editingMessageId: string | null;
  setEditingMessageId?: (id: string | null) => void;
  editContent?: string;
  setEditContent?: (content: string) => void;
  onSaveEdit?: (id: string, content: string) => void;
  onRefresh?: () => Promise<void>;
  onPinMessage?: (msg: Message) => void;
  onToggleReaction?: (msg: Message, emoji: string) => void;
  contextMenu: ContextMenuState | null;
  scrollManagedExternally?: boolean;
  isSidebarOpen?: boolean;
  onMobileLongPress?: (msg: Message, el: HTMLElement, startX: number, startY: number) => void;
  isMobile?: boolean;
  onShareMessage: (msg: Message) => void;
  onOpenChatInfoSection?: (section: 'reminder' | 'poll' | 'note') => void;
}

function ContactCardBubble({
  contact,
  currentUserId,
}: {
  contact: { _id?: string; name?: string; username?: string; avatar?: string } | undefined;
  currentUserId: string;
}) {
  const router = useRouter();
  const contactId = String(contact?._id || '');
  const name = String(contact?.name || 'Người dùng');
  const username = String(contact?.username || '');
  const avatar = String(contact?.avatar || '');

  const profilePath = useMemo(() => {
    const slug = String(username || contactId || '').trim();
    if (!slug) return '';
    return `/profile/${encodeURIComponent(slug)}`;
  }, [contactId, username]);

  const qrValue = useMemo(() => {
    if (!profilePath) return '';
    if (typeof window === 'undefined') return '';
    const origin = window.location.origin;
    return `${origin}${profilePath}`;
  }, [profilePath]);

  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    if (!qrValue) {
      setQrDataUrl('');
      return;
    }
    QRCode.toDataURL(qrValue, { errorCorrectionLevel: 'M', margin: 1, width: 240 })
      .then((url: string) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setQrDataUrl('');
      });
    return () => {
      cancelled = true;
    };
  }, [qrValue]);

  const oneToOneRoomId = useMemo(() => {
    if (!currentUserId || !contactId) return '';
    return [String(currentUserId), String(contactId)].sort().join('_');
  }, [currentUserId, contactId]);

  const handleVoiceCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contactId || !oneToOneRoomId) return;
    try {
      window.dispatchEvent(
        new CustomEvent('startCall', {
          detail: {
            type: 'voice',
            roomId: oneToOneRoomId,
            isGroup: false,
            selectedChat: { _id: contactId, name, username, avatar: avatar || undefined },
          },
        }),
      );
    } catch {}
  };

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contactId) return;
    try {
      window.dispatchEvent(
        new CustomEvent('openDirectChat', {
          detail: { userId: contactId, name, username, avatar: avatar || undefined },
        }),
      );
    } catch {}
  };

  const handleOpenProfile = (e: React.MouseEvent) => {
    if (!profilePath) return;
    e.preventDefault();
    router.push(profilePath);
  };

  return (
    <div
      role={profilePath ? 'button' : undefined}
      tabIndex={profilePath ? 0 : undefined}
      onClick={handleOpenProfile}
      onKeyDown={(e) => {
        if (!profilePath) return;
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        router.push(profilePath);
      }}
      className={`max-w-[70vw] w-[22rem] sm:max-w-[22rem] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm select-none lg:select-text ${
        profilePath ? 'cursor-pointer hover:border-gray-300' : ''
      }`}
    >
      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-600">
        Danh thiếp
      </div>
      <div className="p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
            {avatar ? (
              <Image src={getProxyUrl(avatar)} alt="" width={44} height={44} className="w-full h-full object-cover" />
            ) : (
              <Image src="/logo/avata.webp" alt="" width={44} height={44} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{name}</p>
            {username ? <p className="text-sm text-gray-500 truncate">{username}</p> : null}
          </div>
        </div>

        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border border-gray-200 shrink-0">
          {qrDataUrl ? (
            <Image width={240} height={240} src={qrDataUrl} alt="Mã QR" className="w-full h-full rounded-xl" />
          ) : (
            <span className="text-[10px] text-gray-400">QR</span>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 grid grid-cols-2">
        <button
          onClick={handleVoiceCall}
          className="cursor-pointer flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 active:scale-[0.99] transition"
        >
          <HiPhone className="w-4 h-4 text-blue-600" />
          Gọi điện
        </button>
        <button
          onClick={handleOpenChat}
          className="cursor-pointer flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 active:scale-[0.99] transition border-l border-gray-200"
        >
          <HiChatBubbleLeftRight className="w-4 h-4 text-emerald-600" />
          Nhắn tin
        </button>
      </div>
    </div>
  );
}

const RenderMessageTag = ({ tag }: { tag?: 'important' | 'urgent' }) => {
  if (!tag) return null;
  const isImportant = tag === 'important';
  return (
    <span
      className={`flex gap-1 items-center text-[12px] font-bold  rounded uppercase tracking-wide text-red-500
      }`}
    >
      <span>{isImportant ? <CiLocationOn className="w-4 h-4" /> : <CiWarning className="w-4 h-4" />}</span>
      <span>{isImportant ? 'Quan trọng' : 'Khẩn cấp'}</span>
    </span>
  );
};

export default function MessageList({
  messagesGrouped,
  messages,
  currentUser,
  allUsersMap,
  uploadingFiles,
  highlightedMsgId,
  isGroup,
  onContextMenu,
  onMobileLongPress,
  onReplyMessage,
  onJumpToMessage,
  getSenderInfo,
  renderMessageContent,
  onOpenMedia,
  editingMessageId,
  setEditingMessageId,
  editContent,
  setEditContent,
  onSaveEdit,
  onRefresh,
  onPinMessage,
  onToggleReaction,
  contextMenu,
  scrollManagedExternally = false,
  isSidebarOpen = false,
  isMobile = false,
  onShareMessage,
  onOpenChatInfoSection,
}: MessageListProps) {
  const [, setTimeVisibleId] = useState<string | null>(null);
  const [expandedOriginalId, setExpandedOriginalId] = useState<string | null>(null);
  const [activeMoreId, setActiveMoreId] = useState<string | null>(null);
  const [detailMsg, setDetailMsg] = useState<Message | null>(null);
  const [noteDetailData, setNoteDetailData] = useState<{
    content: string;
    creatorName: string;
    timestamp: number | string | Date;
  } | null>(null);
  const [reactionDetail, setReactionDetail] = useState<{ msgId: string; emoji: string } | null>(null);
  const longPressTimerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);
  const [mobileCollapsedId, setMobileCollapsedId] = useState<string | null>(null);
  const [swipeState, setSwipeState] = useState<{ id: string | null; dx: number }>({ id: null, dx: 0 });
  const [longPressActiveId, setLongPressActiveId] = useState<string | null>(null);
  const [expandedNotifyGroups, setExpandedNotifyGroups] = useState<Set<string>>(new Set());
  const swipeStartRef = useRef<{ x: number; y: number; id: string | null; isMe: boolean }>({
    x: 0,
    y: 0,
    id: null,
    isMe: false,
  });

  // Đóng menu reaction/folder khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMoreId) {
        const activeWrapper = document.getElementById(`msg-${activeMoreId}`);
        if (activeWrapper && !activeWrapper.contains(event.target as Node)) {
          setActiveMoreId(null);
        }
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) setActiveMoreId(null);
    };
    const handleWindowBlur = () => {
      setActiveMoreId(null);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMoreId(null);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMoreId]);
  useEffect(() => {
    if (!contextMenu?.visible) setMobileCollapsedId(null);
  }, [contextMenu]);

  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const id = (e as CustomEvent<{ id: string }>).detail?.id;
        if (typeof id === 'string' && id) {
          setExpandedOriginalId((prev) => (prev === id ? null : id));
          const el = document.getElementById(`msg-${id}`);
          if (el) {
            try {
              el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            } catch {}
          }
        }
      } catch {}
    };
    document.addEventListener('toggleOriginalMessage', handler as EventListener);
    return () => {
      document.removeEventListener('toggleOriginalMessage', handler as EventListener);
    };
  }, []);

  const formatTimestamp = (ts: number) => {
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    return sameDay
      ? d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      : d.toLocaleString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
  };
  const formatTimeMarker = (ts: number) => {
    const d = new Date(ts);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const sameDate = (a: Date, b: Date) =>
      a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    const timeLabel = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    const dateLabel = sameDate(d, today)
      ? 'Hôm nay'
      : sameDate(d, yesterday)
        ? 'Hôm qua'
        : d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${timeLabel} ${dateLabel}`;
  };
  useEffect(() => {
    if (scrollManagedExternally || !highlightedMsgId) return;

    // Đợi DOM render xong
    setTimeout(() => {
      const element = document.getElementById(`msg-${highlightedMsgId}`);
      if (element) {
        // Scroll với nhiều fallback
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });

        // Fallback cho mobile
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'auto', // Dùng auto thay vì smooth cho mobile
            block: 'center',
          });
        }, 100);
      }
    }, 100);
  }, [highlightedMsgId, scrollManagedExternally]);

  return (
    <>
      {Array.from(messagesGrouped.entries()).map(([dateKey, msgs]) => {
        return (
          <React.Fragment key={dateKey}>
            {/* Date row */}
            <div className="flex justify-center my-4 sticky top-1 z-10">
              <span className="px-4 py-1 text-xs font-medium text-gray-600 bg-gray-50/90 rounded-full shadow">
                {dateKey}
              </span>
            </div>
            {(() => {
              const consumedIds = new Set<string>();
              return (
                <>
                  {msgs.map((msg, index) => {
                    if (consumedIds.has(msg._id)) return null;
                    const isLastMsg = msg._id === messages[messages.length - 1]?._id;
                    const senderInfo = getSenderInfo(msg.sender);
                    const isMe = String(senderInfo._id) === String(currentUser._id);
                    const repliedToMsg = msg.replyToMessageId
                      ? messages.find((m) => m._id === msg.replyToMessageId)
                      : null;

                    const uploadProgress = uploadingFiles[msg._id];
                    const sendingFlag = !!(msg as unknown as { isSending?: boolean }).isSending;
                    const blobFlag = typeof msg.fileUrl === 'string' && msg.fileUrl.startsWith('blob:');
                    const isEditing = msg._id === editingMessageId;
                    const isEdited = msg.editedAt && !isEditing;
                    const isRecalled = msg.isRecalled;
                    const isVideo = msg.type === 'video' || (msg.fileUrl && isVideoFile(msg.fileUrl));
                    const isMediaOrFile =
                      msg.type === 'image' || msg.type === 'video' || (msg.type === 'file' && !isVideo);
                    const isUploading = isMediaOrFile && (uploadProgress !== undefined || sendingFlag || blobFlag);
                    const reactions = (msg.reactions || {}) as Record<string, string[]>;
                    const myId = String(currentUser._id);
                    const hasReactions = Object.values(reactions).some((arr) => (arr || []).length > 0);

                    // Group detection
                    const prevMsg = index > 0 ? msgs[index - 1] : null;
                    let isGrouped = false;
                    if (prevMsg && prevMsg.type !== 'notify') {
                      const prevSender = getSenderInfo(prevMsg.sender);
                      const now =
                        Number((msg as unknown as { serverTimestamp?: number }).serverTimestamp ?? msg.timestamp) || 0;
                      const prev =
                        Number(
                          (prevMsg as unknown as { serverTimestamp?: number }).serverTimestamp ?? prevMsg.timestamp,
                        ) || 0;
                      if (prevSender._id === senderInfo._id && now - prev < 5 * 60 * 1000) {
                        isGrouped = true;
                      }
                    }
                    const nowTs =
                      Number((msg as unknown as { serverTimestamp?: number }).serverTimestamp ?? msg.timestamp) || 0;
                    const prevTs =
                      prevMsg != null
                        ? Number(
                            (prevMsg as unknown as { serverTimestamp?: number }).serverTimestamp ?? prevMsg.timestamp,
                          ) || 0
                        : null;
                    const showTimeMarker = prevTs != null && nowTs - (prevTs as number) >= 30 * 60 * 1000;
                    const timeMarkerNode = showTimeMarker ? (
                      <div className="flex justify-center my-4">
                        <span className="px-4 py-2 text-white  text-xs font-medium  bg-gray-400/60 rounded-full shadow">
                          {formatTimeMarker(nowTs)}
                        </span>
                      </div>
                    ) : null;
                    const unreadDividerNode = null;

                    const nextMsg = index < msgs.length - 1 ? msgs[index + 1] : null;
                    let isEndOfGroup = true;
                    if (nextMsg && nextMsg.type !== 'notify') {
                      const nextSender = getSenderInfo(nextMsg.sender);
                      const now =
                        Number((msg as unknown as { serverTimestamp?: number }).serverTimestamp ?? msg.timestamp) || 0;
                      const next =
                        Number(
                          (nextMsg as unknown as { serverTimestamp?: number }).serverTimestamp ?? nextMsg.timestamp,
                        ) || 0;
                      if (nextSender._id === senderInfo._id && next - now < 5 * 60 * 1000) {
                        isEndOfGroup = false;
                      }
                    }

                    const canGroupMedia = !isRecalled && (msg.type === 'image' || msg.type === 'video');
                    if (canGroupMedia) {
                      const mediaGroup: Message[] = [msg];
                      const groupBatchId = (msg as Message).batchId;
                      for (let k = index + 1; k < msgs.length; k++) {
                        const next = msgs[k];
                        if (next.isRecalled) break;
                        if (!(next.type === 'image' || next.type === 'video')) break;
                        const nextSender = getSenderInfo(next.sender);
                        const dt = Math.abs(
                          Number(next.timestamp) - Number(mediaGroup[mediaGroup.length - 1].timestamp),
                        );
                        const nextBatchId = (next as Message).batchId;
                        if ((groupBatchId || nextBatchId) && groupBatchId !== nextBatchId) break;
                        if (nextSender._id !== senderInfo._id || dt > 120000) break;
                        mediaGroup.push(next);
                      }
                      if (mediaGroup.length > 1) {
                        mediaGroup.slice(1).forEach((m) => consumedIds.add(m._id));
                        const lastInGroup = mediaGroup[mediaGroup.length - 1];
                        const isMeGroup = String(senderInfo._id) === String(currentUser._id);
                        const groupIsLast = lastInGroup._id === messages[messages.length - 1]?._id;
                        const nextIdx = index + mediaGroup.length;
                        const nextAfterGroup = nextIdx < msgs.length ? msgs[nextIdx] : null;
                        let endRun = true;
                        if (nextAfterGroup && nextAfterGroup.type !== 'notify') {
                          const nextSender = getSenderInfo(nextAfterGroup.sender);
                          const lastTs =
                            Number(
                              (lastInGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                lastInGroup.timestamp,
                            ) || 0;
                          const nextTs =
                            Number(
                              (nextAfterGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                nextAfterGroup.timestamp,
                            ) || 0;
                          if (nextSender._id === senderInfo._id && nextTs - lastTs < 5 * 60 * 1000) {
                            endRun = false;
                          }
                        }
                        const groupUploading = mediaGroup.some((mm) => {
                          const up = uploadingFiles[mm._id] !== undefined;
                          const sending = !!(mm as unknown as { isSending?: boolean }).isSending;
                          const blob = typeof mm.fileUrl === 'string' && mm.fileUrl.startsWith('blob:');
                          return up || sending || blob;
                        });
                        return (
                          <React.Fragment key={`group-${msg._id}-frag`}>
                            {unreadDividerNode}
                            {timeMarkerNode}
                            <div
                              key={`group-${msg._id}`}
                              id={`msg-${msg._id}`}
                              className={`
                      w-full  sm:max-w-[23rem]
                      flex gap-2 group relative
                      ${isMeGroup ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                      ${isGrouped ? 'mt-2' : 'mt-4'}
                      ${groupIsLast ? 'mb-8' : ''}
                    `}
                            >
                              {!isMeGroup && (
                                <div className={`${isGrouped ? 'opacity-0' : ''} flex-shrink-0`}>
                                  {senderInfo.avatar ? (
                                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                                      <Image
                                        width={38}
                                        height={38}
                                        src={getProxyUrl(senderInfo.avatar)}
                                        alt={senderInfo.name}
                                        className="w-full h-full object-cover"
                                        unoptimized={String(senderInfo.avatar).includes('mega.nz')}
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                      <Image
                                        src="/logo/avata.webp"
                                        alt={senderInfo.name || 'User'}
                                        width={38}
                                        height={38}
                                        className="w-full h-full rounded-full object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                              <div className={`flex flex-col min-w-0 ${isMeGroup ? 'items-end' : 'items-start'}`}>
                                {isGroup && !isGrouped && !isRecalled && !isMeGroup && (
                                  <p
                                    className={`text-sm mb-1 px-2 py-1 bg-white rounded-[2rem] ${isMeGroup ? 'text-gray-600' : 'text-gray-600'}`}
                                  >
                                    {allUsersMap.get(senderInfo._id) || senderInfo.name}
                                  </p>
                                )}
                                <div
                                  className={` px-0 py-0 rounded-lg shadow-none max-w-[70vw] sm:max-w-[22rem] mt-1 bg-transparent relative ${hasReactions ? 'mb-4' : ''}`}
                                  style={
                                    isMobile && swipeState.id === msg._id
                                      ? { transform: `translateX(${Math.max(-100, Math.min(100, swipeState.dx))}px)` }
                                      : undefined
                                  }
                                  onClick={() => {
                                    setActiveMoreId(msg._id);
                                    setReactionDetail(null);
                                  }}
                                  onTouchStart={(e) => {
                                    try {
                                      if (isRecalled) return;
                                      longPressTriggeredRef.current = false;
                                      if (longPressTimerRef.current != null) {
                                        clearTimeout(longPressTimerRef.current);
                                        longPressTimerRef.current = null;
                                      }
                                      const t = e.touches && e.touches[0];
                                      const x0 = t ? t.clientX : 0;
                                      const y0 = t ? t.clientY : 0;
                                      const el = e.currentTarget as HTMLElement;
                                      swipeStartRef.current = { x: x0, y: y0, id: msg._id, isMe: isMeGroup };
                                      setSwipeState({ id: null, dx: 0 });
                                      setLongPressActiveId(msg._id);
                                      longPressTimerRef.current = window.setTimeout(() => {
                                        longPressTriggeredRef.current = true;
                                        setActiveMoreId(msg._id);
                                        setReactionDetail(null);
                                        onMobileLongPress?.(msg, el, x0, y0);
                                      }, 420);
                                    } catch {}
                                  }}
                                  onTouchEnd={(e) => {
                                    try {
                                      if (longPressTimerRef.current != null) {
                                        clearTimeout(longPressTimerRef.current);
                                        longPressTimerRef.current = null;
                                      }
                                      setLongPressActiveId(null);
                                      if (longPressTriggeredRef.current) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                      }
                                      if (isMobile && swipeStartRef.current.id === msg._id) {
                                        const okDir = swipeStartRef.current.isMe
                                          ? swipeState.dx < -64
                                          : swipeState.dx > 64;
                                        if (okDir) {
                                          onReplyMessage?.(msg);
                                        }
                                        setSwipeState({ id: null, dx: 0 });
                                        swipeStartRef.current = { x: 0, y: 0, id: null, isMe: false };
                                      }
                                    } catch {}
                                  }}
                                  onTouchMove={(e) => {
                                    try {
                                      if (longPressTimerRef.current != null) {
                                        clearTimeout(longPressTimerRef.current);
                                        longPressTimerRef.current = null;
                                      }
                                      setLongPressActiveId(null);
                                      if (!isMobile) return;
                                      const t = e.touches && e.touches[0];
                                      const x = t ? t.clientX : 0;
                                      const y = t ? t.clientY : 0;
                                      const dx = x - swipeStartRef.current.x;
                                      const dy = y - swipeStartRef.current.y;
                                      if (swipeStartRef.current.id === msg._id) {
                                        const horizontal = Math.abs(dx) > 8 && Math.abs(dy) < 24;
                                        if (horizontal) {
                                          const dirOk = swipeStartRef.current.isMe ? dx < 0 : dx > 0;
                                          setSwipeState({ id: msg._id, dx: dirOk ? dx : 0 });
                                          e.preventDefault();
                                        }
                                      }
                                    } catch {}
                                  }}
                                  onTouchCancel={() => {
                                    try {
                                      if (longPressTimerRef.current != null) {
                                        clearTimeout(longPressTimerRef.current);
                                        longPressTimerRef.current = null;
                                      }
                                      setLongPressActiveId(null);
                                      if (isMobile && swipeStartRef.current.id === msg._id) {
                                        setSwipeState({ id: null, dx: 0 });
                                        swipeStartRef.current = { x: 0, y: 0, id: null, isMe: false };
                                      }
                                    } catch {}
                                  }}
                                >
                                  {!isRecalled && (
                                    <>
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const batchMsg = {
                                            ...msg,
                                            batchItems: mediaGroup.map((m) => ({
                                              id: m._id,
                                              content: m.content || '',
                                              type: m.type === 'video' ? 'video' : 'image',
                                              fileUrl: m.fileUrl || m.previewUrl,
                                              fileName: m.fileName,
                                            })),
                                          } as Message;
                                          onShareMessage(batchMsg);
                                        }}
                                        className={`absolute cursor-pointer top-1/2 -translate-y-1/2 p-1.5 bg-white/90 rounded-full shadow hover:bg-indigo-50 ${
                                          isMeGroup ? 'right-full mr-2' : 'left-full ml-2'
                                        }`}
                                        aria-label="Chia sẻ nhóm media"
                                        title="Chia sẻ nhóm media"
                                      >
                                        <ICShareMessage className="w-4 h-4 text-indigo-600" />
                                      </button>
                                      {isMobile && swipeState.id === msg._id && (
                                        <div
                                          className={`absolute top-1/2 -translate-y-1/2 ${isMeGroup ? 'left-full ml-2' : 'right-full mr-2'}`}
                                          style={{ opacity: Math.min(Math.abs(swipeState.dx) / 64, 1) }}
                                        >
                                          <div className="p-2 bg-white rounded-full shadow border border-gray-200">
                                            {isMeGroup ? (
                                              <HiArrowUturnLeft className="w-5 h-5 text-blue-600" />
                                            ) : (
                                              <HiArrowUturnRight className="w-5 h-5 text-blue-600" />
                                            )}
                                          </div>
                                        </div>
                                      )}
                                      {!isMobile && (
                                        <>
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              onContextMenu(e, msg);
                                            }}
                                            className={`absolute cursor-pointer top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMeGroup ? 'right-full mr-10' : 'left-full ml-10'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`}
                                            aria-label="Mở menu"
                                            title="Thêm"
                                          >
                                            <HiEllipsisVertical className="w-4 h-4 text-gray-600" />
                                          </button>
                                        </>
                                      )}
                                      {!isMobile && (
                                        <ReactionButton
                                          isMine={isMeGroup}
                                          visible={activeMoreId === msg._id}
                                          onPick={(emoji) => {
                                            onToggleReaction?.(msg, emoji);
                                            setActiveMoreId(null);
                                          }}
                                          className={`${isMeGroup ? 'right-full mr-18' : 'left-full ml-18'} ${
                                            activeMoreId === msg._id
                                              ? 'opacity-100 pointer-events-auto'
                                              : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'
                                          }`}
                                        />
                                      )}
                                    </>
                                  )}
                                  <div
                                    className={`inline-grid gap-1 rounded-xl overflow-hidden ${isSidebarOpen ? 'sm:grid-cols-[6rem_6rem]' : 'sm:grid-cols-[10rem_10rem]'} grid-cols-[8rem_8rem]`}
                                  >
                                    {mediaGroup.map((m, idx) => {
                                      const isVid = m.type === 'video' || (m.fileUrl && isVideoFile(m.fileUrl));
                                      const url = String(m.fileUrl || m.previewUrl || '');
                                      const prog = uploadingFiles[m._id];
                                      const sendingFallback = !!(m as unknown as { isSending?: boolean }).isSending;
                                      const blobFallback = String(url).startsWith('blob:');
                                      const up = prog !== undefined || sendingFallback || blobFallback;

                                      const isOddTotal = mediaGroup.length % 2 !== 0;
                                      const isLastItem = idx === mediaGroup.length - 1;
                                      const shouldSpan = isOddTotal && isLastItem;

                                      return isVid ? (
                                        <div
                                          key={`${m._id}-${idx}`}
                                          id={`msg-${m._id}`}
                                          className={`relative bg-black rounded-[0.25rem] overflow-hidden cursor-pointer h-[8rem] ${shouldSpan ? 'col-span-2 w-full' : 'w-[8rem]'}  ${
                                            isSidebarOpen
                                              ? shouldSpan
                                                ? 'sm:w-full sm:h-[6rem] aspect-square'
                                                : 'sm:w-[6rem] sm:h-[6rem] aspect-square'
                                              : shouldSpan
                                                ? 'sm:w-full sm:h-[10rem] sm:aspect-video aspect-square'
                                                : 'sm:aspect-video aspect-square sm:h-[10rem] sm:w-[10rem]'
                                          } ${highlightedMsgId === m._id ? 'ring-2 ring-yellow-300' : ''} ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`}
                                          onClick={() => !up && onOpenMedia(String(m.fileUrl!), 'video')}
                                          onContextMenu={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onContextMenu(e, m);
                                          }}
                                          onTouchStart={(e) => {
                                            try {
                                              e.stopPropagation();
                                              if (m.isRecalled) return;
                                              longPressTriggeredRef.current = false;
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              const t = e.touches && e.touches[0];
                                              const x0 = t ? t.clientX : 0;
                                              const y0 = t ? t.clientY : 0;
                                              const el = e.currentTarget as HTMLElement;
                                              swipeStartRef.current = { x: x0, y: y0, id: msg._id, isMe: isMeGroup };
                                              setSwipeState({ id: null, dx: 0 });
                                              setLongPressActiveId(m._id);
                                              longPressTimerRef.current = window.setTimeout(() => {
                                                longPressTriggeredRef.current = true;
                                                setActiveMoreId(m._id);
                                                setReactionDetail(null);
                                                onMobileLongPress?.(m, el, x0, y0);
                                              }, 420);
                                            } catch {}
                                          }}
                                          onTouchEnd={(e) => {
                                            try {
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              setLongPressActiveId(null);
                                              if (longPressTriggeredRef.current) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                              }
                                            } catch {}
                                          }}
                                          onTouchMove={() => {
                                            try {
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              setLongPressActiveId(null);
                                            } catch {}
                                          }}
                                        >
                                          <div className="absolute top-1 left-1 z-20">
                                            <RenderMessageTag tag={m.messageTag} />
                                          </div>
                                          <video
                                            src={getProxyUrl(url)}
                                            className="w-full h-full object-cover"
                                            controls
                                            playsInline
                                            preload="metadata"
                                          ></video>

                                          {!up && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                              <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow">
                                                <HiPlay className="w-5 h-5 text-blue-600 ml-0.5" />
                                              </div>
                                            </div>
                                          )}
                                          {up && (
                                            <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center">
                                              <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                                                {prog !== undefined && (
                                                  <span className="text-sm font-semibold">
                                                    {Math.round(prog as number)}%
                                                  </span>
                                                )}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        <div
                                          key={`${m._id}-${idx}`}
                                          id={`msg-${m._id}`}
                                          className={`relative rounded-[0.25rem] overflow-hidden cursor-pointer hover:bg-gray-100 shadow-sm h-[8rem] ${shouldSpan ? 'col-span-2 w-full' : 'w-[8rem]'} ${
                                            isSidebarOpen
                                              ? shouldSpan
                                                ? 'sm:w-full sm:h-[6rem]'
                                                : 'sm:w-[6rem] sm:h-[6rem]'
                                              : shouldSpan
                                                ? 'sm:w-full sm:h-[10rem]'
                                                : 'sm:w-[10rem] sm:h-[10rem]'
                                          } ${highlightedMsgId === m._id ? 'ring-2 ring-yellow-300' : ''} ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            if (!up) onOpenMedia(String(m.fileUrl || m.previewUrl || ''), 'image');
                                          }}
                                          onContextMenu={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onContextMenu(e, m);
                                          }}
                                          onTouchStart={(e) => {
                                            try {
                                              e.stopPropagation();
                                              if (m.isRecalled) return;
                                              longPressTriggeredRef.current = false;
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              const t = e.touches && e.touches[0];
                                              const x0 = t ? t.clientX : 0;
                                              const y0 = t ? t.clientY : 0;
                                              const el = e.currentTarget as HTMLElement;
                                              swipeStartRef.current = { x: x0, y: y0, id: msg._id, isMe: isMeGroup };
                                              setSwipeState({ id: null, dx: 0 });
                                              setLongPressActiveId(m._id);
                                              longPressTimerRef.current = window.setTimeout(() => {
                                                longPressTriggeredRef.current = true;
                                                setActiveMoreId(m._id);
                                                setReactionDetail(null);
                                                onMobileLongPress?.(m, el, x0, y0);
                                              }, 420);
                                            } catch {}
                                          }}
                                          onTouchEnd={(e) => {
                                            try {
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              setLongPressActiveId(null);
                                              if (longPressTriggeredRef.current) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                              }
                                            } catch {}
                                          }}
                                          onTouchMove={() => {
                                            try {
                                              if (longPressTimerRef.current != null) {
                                                clearTimeout(longPressTimerRef.current);
                                                longPressTimerRef.current = null;
                                              }
                                              setLongPressActiveId(null);
                                            } catch {}
                                          }}
                                        >
                                          <div className="absolute top-1 left-1 z-20">
                                            <RenderMessageTag tag={m.messageTag} />
                                          </div>
                                          {String(url).startsWith('blob:') ? (
                                            <Image
                                              width={600}
                                              height={600}
                                              src={url}
                                              alt="Ảnh"
                                              className="w-full h-full object-cover"
                                            />
                                          ) : (
                                            <Image
                                              width={600}
                                              height={600}
                                              src={getProxyUrl(url)}
                                              alt="Ảnh"
                                              className="w-full h-full object-cover"
                                            />
                                          )}

                                          {up && (
                                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                              {(() => {
                                                const size = 40;
                                                const stroke = 4;
                                                const r = (size - stroke) / 2;
                                                const c = 2 * Math.PI * r;
                                                const p = Math.max(0, Math.min(100, Number(prog || 0)));
                                                return (
                                                  <div className="flex flex-col items-center">
                                                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                                                      <circle
                                                        cx={size / 2}
                                                        cy={size / 2}
                                                        r={r}
                                                        stroke="rgba(255,255,255,0.3)"
                                                        strokeWidth={stroke}
                                                        fill="none"
                                                      />
                                                      <circle
                                                        cx={size / 2}
                                                        cy={size / 2}
                                                        r={r}
                                                        stroke="white"
                                                        strokeWidth={stroke}
                                                        fill="none"
                                                        strokeDasharray={c}
                                                        strokeDashoffset={c - (p / 100) * c}
                                                        strokeLinecap="round"
                                                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                                                      />
                                                    </svg>
                                                    {/* <span className="text-xs text-white font-semibold">{Math.round(p)}%</span> */}
                                                  </div>
                                                );
                                              })()}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  {(() => {
                                    const items = Object.entries(reactions)
                                      .map(([emoji, arr]) => ({
                                        emoji,
                                        count: (arr || []).length,
                                        mine: (arr || []).includes(myId),
                                        users: (arr || []).map((id) => allUsersMap.get(String(id)) || 'Người dùng'),
                                      }))
                                      .filter((x) => x.count > 0)
                                      .sort((a, b) => b.count - a.count);
                                    if (items.length === 0) return null;
                                    return (
                                      <div
                                        className={`absolute ${isMeGroup ? 'right-2 -mr-1' : 'left-2 -ml-1'} bottom-1 flex items-center gap-1`}
                                      >
                                        <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200">
                                          {items.slice(0, 3).map((it, idx) => (
                                            <div
                                              key={`${msg._id}-react-group-${idx}`}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setReactionDetail(
                                                  reactionDetail?.msgId === msg._id &&
                                                    reactionDetail?.emoji === it.emoji
                                                    ? null
                                                    : { msgId: msg._id, emoji: it.emoji },
                                                );
                                              }}
                                              className={`flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95 ${it.mine ? 'bg-blue-50' : 'bg-transparent'}`}
                                              title={`${it.count} người`}
                                            >
                                              <span className="text-lg leading-none">{it.emoji}</span>
                                              {it.count > 1 && (
                                                <span
                                                  className={`text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                  {it.count}
                                                </span>
                                              )}
                                            </div>
                                          ))}
                                          {items.length > 3 && (
                                            <div className="px-2 text-xs text-gray-500 font-medium">
                                              +{items.length - 3}
                                            </div>
                                          )}
                                        </div>
                                        <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                      </div>
                                    );
                                  })()}
                                  {reactionDetail && reactionDetail.msgId === msg._id && (
                                    <>
                                      <div className="fixed inset-0 z-30" onClick={() => setReactionDetail(null)} />
                                      <div
                                        ref={(el) => {
                                          if (el && reactionDetail.msgId === msg._id) {
                                            const rect = el.parentElement?.getBoundingClientRect();
                                            if (rect) {
                                              const spaceBelow = window.innerHeight - rect.bottom;
                                              const spaceAbove = rect.top;
                                              const popoverHeight = 250;
                                              if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                el.style.bottom = '100%';
                                                el.style.top = 'auto';
                                                el.style.marginBottom = '0.625rem';
                                                el.style.marginTop = '0';
                                              } else {
                                                el.style.top = '100%';
                                                el.style.bottom = 'auto';
                                                el.style.marginTop = '0.625rem';
                                                el.style.marginBottom = '0';
                                              }
                                            }
                                          }
                                        }}
                                        className={`absolute ${isMeGroup ? 'right-2' : 'left-2'} z-40`}
                                      >
                                        {(() => {
                                          const users = (reactions[reactionDetail.emoji] || []).map(
                                            (id) => allUsersMap.get(String(id)) || String(id),
                                          );
                                          return (
                                            <div className="min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                                              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                                                <span className="text-2xl">{reactionDetail.emoji}</span>
                                                <span className="text-sm font-semibold text-gray-700">
                                                  {users.length} người
                                                </span>
                                              </div>
                                              {users.length > 0 ? (
                                                <ul className="space-y-1.5 max-h-48 overflow-y-auto">
                                                  {users.map((name, idx) => (
                                                    <li
                                                      key={`${msg._id}-user-group-${idx}`}
                                                      className="text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors"
                                                    >
                                                      {name}
                                                    </li>
                                                  ))}
                                                </ul>
                                              ) : (
                                                <div className="text-sm text-gray-500 py-1">Chưa có ai</div>
                                              )}
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    </>
                                  )}
                                  {endRun && (
                                    <div className={`text-xs mt-2 ${isMeGroup ? 'text-gray-700' : 'text-gray-500'}`}>
                                      <span className="inline-block px-2 py-1 bg-white rounded-[2rem]">
                                        {formatTimestamp(
                                          Number(
                                            (lastInGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                              lastInGroup.timestamp,
                                          ) || 0,
                                        )}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <ReadStatus
                                  message={lastInGroup}
                                  isGroup={isGroup}
                                  isRecalled={!!lastInGroup.isRecalled}
                                  isMine={isMeGroup}
                                  isLast={groupIsLast}
                                  myId={myId}
                                  allUsersMap={allUsersMap}
                                  getSenderInfo={getSenderInfo}
                                  isMobile={isMobile}
                                  isUploading={groupUploading}
                                />
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      }
                    }

                    const canGroupFiles = !isRecalled && msg.type === 'file' && !isVideo;
                    if (canGroupFiles) {
                      const fileGroup: Message[] = [msg];
                      for (let k = index + 1; k < msgs.length; k++) {
                        const next = msgs[k];
                        if (next.isRecalled) break;
                        const nextIsFile = next.type === 'file' && !(next.fileUrl && isVideoFile(next.fileUrl));
                        if (!nextIsFile) break;
                        const nextSender = getSenderInfo(next.sender);
                        const dt = Math.abs(Number(next.timestamp) - Number(fileGroup[fileGroup.length - 1].timestamp));
                        if (nextSender._id !== senderInfo._id || dt > 120000) break;
                        fileGroup.push(next);
                      }
                      if (fileGroup.length > 1) {
                        fileGroup.slice(1).forEach((m) => consumedIds.add(m._id));
                        const lastInGroup = fileGroup[fileGroup.length - 1];
                        const isMeGroup = String(senderInfo._id) === String(currentUser._id);
                        const groupIsLast = lastInGroup._id === messages[messages.length - 1]?._id;
                        const nextIdx = index + fileGroup.length;
                        const nextAfterGroup = nextIdx < msgs.length ? msgs[nextIdx] : null;
                        let endRun = true;
                        if (nextAfterGroup && nextAfterGroup.type !== 'notify') {
                          const nextSender = getSenderInfo(nextAfterGroup.sender);
                          const lastTs =
                            Number(
                              (lastInGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                lastInGroup.timestamp,
                            ) || 0;
                          const nextTs =
                            Number(
                              (nextAfterGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                nextAfterGroup.timestamp,
                            ) || 0;
                          if (nextSender._id === senderInfo._id && nextTs - lastTs < 5 * 60 * 1000) {
                            endRun = false;
                          }
                        }
                        const groupUploading = fileGroup.some((mm) => {
                          const up = uploadingFiles[mm._id] !== undefined;
                          const sending = !!(mm as unknown as { isSending?: boolean }).isSending;
                          const blob = typeof mm.fileUrl === 'string' && mm.fileUrl.startsWith('blob:');
                          return up || sending || blob;
                        });
                        return (
                          <React.Fragment key={`group-file-${msg._id}-frag`}>
                            {unreadDividerNode}
                            {timeMarkerNode}
                            <div
                              key={`group-file-${msg._id}`}
                              id={`msg-${msg._id}`}
                              className={`
                      w-full  sm:max-w-[23rem]
                      flex gap-2 group relative
                      ${isMeGroup ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                      ${isGrouped ? 'mt-2' : 'mt-4'}
                      ${groupIsLast ? 'mb-8' : ''}
                    `}
                            >
                              {!isMeGroup && (
                                <div className={`${isGrouped ? 'opacity-0' : ''} flex-shrink-0`}>
                                  {senderInfo.avatar ? (
                                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                                      <Image
                                        width={38}
                                        height={38}
                                        src={getProxyUrl(senderInfo.avatar)}
                                        alt={senderInfo.name}
                                        className="w-full h-full object-cover"
                                        unoptimized={String(senderInfo.avatar).includes('mega.nz')}
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                      <Image
                                        src="/logo/avata.webp"
                                        alt={senderInfo.name || 'User'}
                                        width={38}
                                        height={38}
                                        className="w-full h-full rounded-full object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                              <div className={`flex flex-col min-w-0 ${isMeGroup ? '' : 'items-start'}`}>
                                {isGroup && !isGrouped && !isRecalled && !isMeGroup && (
                                  <p className={`text-sm  px-2  ${isMeGroup ? 'text-gray-600' : 'text-gray-600'}`}>
                                    {allUsersMap.get(senderInfo._id) || senderInfo.name}
                                  </p>
                                )}
                                <div
                                  className={`py-2 rounded-lg max-w-[70vw] sm:max-w-[18rem] mt-1  relative ${hasReactions ? 'mb-4' : ''}`}
                                  onClick={() => {
                                    setActiveMoreId(msg._id);
                                    setReactionDetail(null);
                                  }}
                                >
                                  {!isRecalled && (
                                    <>
                                      {!isMobile && (
                                        <>
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              onContextMenu(e, msg);
                                            }}
                                            className={`absolute top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMeGroup ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`}
                                            aria-label="Mở menu"
                                            title="Thêm"
                                          >
                                            <HiEllipsisVertical className="w-4 h-4 text-gray-600" />
                                          </button>
                                        </>
                                      )}
                                      {!isMobile && (
                                        <ReactionButton
                                          isMine={isMeGroup}
                                          visible={activeMoreId === msg._id}
                                          onPick={(emoji) => {
                                            onToggleReaction?.(msg, emoji);
                                            setActiveMoreId(null);
                                          }}
                                          className={`${isMeGroup ? 'right-full mr-10' : 'left-full ml-10'} ${
                                            activeMoreId === msg._id
                                              ? 'opacity-100 pointer-events-auto'
                                              : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'
                                          }`}
                                        />
                                      )}
                                    </>
                                  )}
                                  <div className="space-y-2">
                                    {fileGroup.map((m, idx) => (
                                      <a
                                        key={`${m._id}-${idx}`}
                                        id={`msg-${m._id}`}
                                        href={getProxyUrl(String(m.fileUrl || ''), true)}
                                        download={m.fileName || 'download'}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`relative flex items-center bg-white gap-3 p-2 rounded-xl border cursor-pointer ${
                                          highlightedMsgId === m._id
                                            ? 'bg-yellow-50 border-yellow-300'
                                            : 'border-gray-200 hover:bg-gray-50'
                                        } ${longPressActiveId === m._id ? 'ring-2 ring-blue-300 scale-[0.98] transition-transform' : ''}`}
                                        onClick={(e) => {
                                          const prog = uploadingFiles[m._id];
                                          if (prog !== undefined) e.preventDefault();
                                        }}
                                        onContextMenu={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          onContextMenu(e, m);
                                        }}
                                        onTouchStart={(e) => {
                                          try {
                                            if (m.isRecalled) return;
                                            longPressTriggeredRef.current = false;
                                            if (longPressTimerRef.current != null) {
                                              clearTimeout(longPressTimerRef.current);
                                              longPressTimerRef.current = null;
                                            }
                                            const t = e.touches && e.touches[0];
                                            const x0 = t ? t.clientX : 0;
                                            const y0 = t ? t.clientY : 0;
                                            const el = e.currentTarget as HTMLElement;
                                            setLongPressActiveId(m._id);
                                            longPressTimerRef.current = window.setTimeout(() => {
                                              longPressTriggeredRef.current = true;
                                              setActiveMoreId(m._id);
                                              setReactionDetail(null);
                                              onMobileLongPress?.(m, el, x0, y0);
                                            }, 420);
                                          } catch {}
                                        }}
                                        onTouchEnd={(e) => {
                                          try {
                                            if (longPressTimerRef.current != null) {
                                              clearTimeout(longPressTimerRef.current);
                                              longPressTimerRef.current = null;
                                            }
                                            setLongPressActiveId(null);
                                            if (longPressTriggeredRef.current) {
                                              e.preventDefault();
                                              e.stopPropagation();
                                            }
                                          } catch {}
                                        }}
                                        onTouchMove={() => {
                                          try {
                                            if (longPressTimerRef.current != null) {
                                              clearTimeout(longPressTimerRef.current);
                                              longPressTimerRef.current = null;
                                            }
                                            setLongPressActiveId(null);
                                          } catch {}
                                        }}
                                        aria-disabled={uploadingFiles[m._id] !== undefined ? true : undefined}
                                      >
                                        <div className="p-2 bg-blue-600 rounded-xl">
                                          <HiOutlineDocumentText className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <RenderMessageTag tag={m.messageTag} />
                                          <p className="text-sm font-semibold text-gray-800 truncate">
                                            {m.fileName || 'Tệp đính kèm'}
                                          </p>
                                          <p className="text-xs text-gray-500 truncate">Nhấn để tải xuống</p>
                                        </div>
                                        {uploadingFiles[m._id] !== undefined && (
                                          <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center">
                                            {(() => {
                                              const size = 32;
                                              const stroke = 3;
                                              const r = (size - stroke) / 2;
                                              const c = 2 * Math.PI * r;
                                              const p = Math.max(0, Math.min(100, Number(uploadingFiles[m._id] || 0)));
                                              return (
                                                <div className="flex flex-col items-center">
                                                  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                                                    <circle
                                                      cx={size / 2}
                                                      cy={size / 2}
                                                      r={r}
                                                      stroke="rgba(255,255,255,0.35)"
                                                      strokeWidth={stroke}
                                                      fill="none"
                                                    />
                                                    <circle
                                                      cx={size / 2}
                                                      cy={size / 2}
                                                      r={r}
                                                      stroke="white"
                                                      strokeWidth={stroke}
                                                      fill="none"
                                                      strokeDasharray={c}
                                                      strokeDashoffset={c - (p / 100) * c}
                                                      strokeLinecap="round"
                                                      transform={`rotate(-90 ${size / 2} ${size / 2})`}
                                                    />
                                                  </svg>
                                                  <span className="text-xs font-semibold mt-1">{Math.round(p)}%</span>
                                                </div>
                                              );
                                            })()}
                                          </div>
                                        )}
                                      </a>
                                    ))}
                                  </div>
                                  {(() => {
                                    const items = Object.entries(reactions)
                                      .map(([emoji, arr]) => ({
                                        emoji,
                                        count: (arr || []).length,
                                        mine: (arr || []).includes(myId),
                                        users: (arr || []).map((id) => allUsersMap.get(String(id)) || 'Người dùng'),
                                      }))
                                      .filter((x) => x.count > 0)
                                      .sort((a, b) => b.count - a.count);
                                    if (items.length === 0) return null;
                                    return (
                                      <div
                                        className={`absolute ${isMeGroup ? 'right-2 -mr-1' : 'left-2 -ml-1'} bottom-1 flex items-center gap-1`}
                                      >
                                        <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200">
                                          {items.slice(0, 3).map((it, idx) => (
                                            <div
                                              key={`${msg._id}-react-filegroup-${idx}`}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setReactionDetail(
                                                  reactionDetail?.msgId === msg._id &&
                                                    reactionDetail?.emoji === it.emoji
                                                    ? null
                                                    : { msgId: msg._id, emoji: it.emoji },
                                                );
                                              }}
                                              className={`flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95 ${it.mine ? 'bg-blue-50' : 'bg-transparent'}`}
                                              title={`${it.count} người`}
                                            >
                                              <span className="text-lg leading-none">{it.emoji}</span>
                                              {it.count > 1 && (
                                                <span
                                                  className={`text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                  {it.count}
                                                </span>
                                              )}
                                            </div>
                                          ))}
                                          {items.length > 3 && (
                                            <div className="px-2 text-xs text-gray-500 font-medium">
                                              +{items.length - 3}
                                            </div>
                                          )}
                                        </div>
                                        <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                      </div>
                                    );
                                  })()}
                                  {reactionDetail && reactionDetail.msgId === msg._id && (
                                    <>
                                      <div className="fixed inset-0 z-30" onClick={() => setReactionDetail(null)} />
                                      <div
                                        ref={(el) => {
                                          if (el && reactionDetail.msgId === msg._id) {
                                            const rect = el.parentElement?.getBoundingClientRect();
                                            if (rect) {
                                              const spaceBelow = window.innerHeight - rect.bottom;
                                              const spaceAbove = rect.top;
                                              const popoverHeight = 250;
                                              if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                el.style.bottom = '100%';
                                                el.style.top = 'auto';
                                                el.style.marginBottom = '0.625rem';
                                                el.style.marginTop = '0';
                                              } else {
                                                el.style.top = '100%';
                                                el.style.bottom = 'auto';
                                                el.style.marginTop = '0.625rem';
                                                el.style.marginBottom = '0';
                                              }
                                            }
                                          }
                                        }}
                                        className={`absolute ${isMeGroup ? 'right-2' : 'left-2'} z-40`}
                                      >
                                        {(() => {
                                          const users = (reactions[reactionDetail.emoji] || []).map(
                                            (id) => allUsersMap.get(String(id)) || String(id),
                                          );
                                          return (
                                            <div className="min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                                              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                                                <span className="text-2xl">{reactionDetail.emoji}</span>
                                                <span className="text-sm font-semibold text-gray-700">
                                                  {users.length} người
                                                </span>
                                              </div>
                                              {users.length > 0 ? (
                                                <ul className="space-y-1.5 max-h-48 overflow-y-auto">
                                                  {users.map((name, idx) => (
                                                    <li
                                                      key={`${msg._id}-user-filegroup-${idx}`}
                                                      className="text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors"
                                                    >
                                                      {name}
                                                    </li>
                                                  ))}
                                                </ul>
                                              ) : (
                                                <div className="text-sm text-gray-500 py-1">Chưa có ai</div>
                                              )}
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    </>
                                  )}
                                  {endRun && (
                                    <div
                                      className={`text-xs mt-2 block ${isMeGroup ? 'text-gray-700' : 'text-gray-500'} flex items-center gap-2`}
                                    >
                                      <span>
                                        {formatTimestamp(
                                          Number(
                                            (lastInGroup as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                              lastInGroup.timestamp,
                                          ) || 0,
                                        )}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <ReadStatus
                                  message={lastInGroup}
                                  isGroup={isGroup}
                                  isRecalled={!!lastInGroup.isRecalled}
                                  isMine={isMeGroup}
                                  isLast={groupIsLast}
                                  myId={myId}
                                  allUsersMap={allUsersMap}
                                  getSenderInfo={getSenderInfo}
                                  isMobile={isMobile}
                                  isUploading={groupUploading}
                                />
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      }
                    }

                    // Notify message
                    if (msg.type === 'notify') {
                      const isCall = !!(msg as Message & { callType?: 'voice' | 'video' }).callType;
                      const rawContentLower = (msg.content || '').toLowerCase();
                      const isReminder =
                        rawContentLower.includes('đến giờ lịch hẹn') || rawContentLower.includes('đã tạo lịch hẹn');
                      const isNote = rawContentLower.includes('đã tạo ghi chú');

                      if (!isCall && !isReminder && !isNote) {
                        const prev = index > 0 ? msgs[index - 1] : null;
                        const prevIsNotify = prev?.type === 'notify';
                        const prevIsCall =
                          prevIsNotify && !!(prev as Message & { callType?: 'voice' | 'video' }).callType;
                        const prevContentLower = (prev?.content || '').toLowerCase();
                        const prevIsReminder =
                          prevIsNotify &&
                          (prevContentLower.includes('đến giờ lịch hẹn') ||
                            prevContentLower.includes('đã tạo lịch hẹn'));
                        const prevIsNote = prevIsNotify && prevContentLower.includes('đã tạo ghi chú');

                        if (prevIsNotify && !prevIsCall && !prevIsReminder && !prevIsNote) {
                          // Skip grouping check if previous was a non-call notify
                        } else {
                          const notifyGroup = [msg];
                          for (let k = index + 1; k < msgs.length; k++) {
                            const next = msgs[k];
                            if (next.type !== 'notify') break;
                            const nextIsCall = !!(next as Message & { callType?: 'voice' | 'video' }).callType;
                            const nextContentLower = (next.content || '').toLowerCase();
                            const nextIsReminder =
                              nextContentLower.includes('đến giờ lịch hẹn') ||
                              nextContentLower.includes('đã tạo lịch hẹn');
                            const nextIsNote = nextContentLower.includes('đã tạo ghi chú');

                            if (nextIsCall || nextIsReminder || nextIsNote) break;
                            notifyGroup.push(next);
                          }

                          if (notifyGroup.length >= 3) {
                            const groupId = msg._id;
                            const isExpanded = expandedNotifyGroups.has(groupId);

                            if (!isExpanded) {
                              notifyGroup.slice(1).forEach((m) => consumedIds.add(m._id));
                              return (
                                <div key={`group-notify-${groupId}`} className="flex justify-center my-4">
                                  <button
                                    onClick={() => {
                                      const newSet = new Set(expandedNotifyGroups);
                                      newSet.add(groupId);
                                      setExpandedNotifyGroups(newSet);
                                    }}
                                    className="px-4 py-1.5 bg-white text-xs font-medium text-blue-600 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all cursor-pointer"
                                  >
                                    Xem cập nhật trước
                                  </button>
                                </div>
                              );
                            }
                          }
                        }
                      }

                      if ((msg as Message & { callType?: 'voice' | 'video' }).callType) {
                        // Group consecutive call notify messages and collapse if many
                        const prev = index > 0 ? msgs[index - 1] : null;
                        const prevIsNotify = prev?.type === 'notify';
                        const prevIsCall =
                          prevIsNotify && !!(prev as Message & { callType?: 'voice' | 'video' }).callType;
                        if (!prevIsCall) {
                          const callGroup = [msg];
                          for (let k = index + 1; k < msgs.length; k++) {
                            const next = msgs[k];
                            if (next.type !== 'notify') break;
                            const nextIsCall = !!(next as Message & { callType?: 'voice' | 'video' }).callType;
                            if (!nextIsCall) break;
                            callGroup.push(next);
                          }
                          if (callGroup.length >= 3) {
                            const groupId = msg._id;
                            const isExpanded = expandedNotifyGroups.has(groupId);
                            if (!isExpanded) {
                              callGroup.slice(1).forEach((m) => consumedIds.add(m._id));
                              return (
                                <div key={`group-notify-call-${groupId}`} className="flex justify-center my-4">
                                  <button
                                    onClick={() => {
                                      const newSet = new Set(expandedNotifyGroups);
                                      newSet.add(groupId);
                                      setExpandedNotifyGroups(newSet);
                                    }}
                                    className="px-4 py-1.5 bg-white text-xs font-medium text-blue-600 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all cursor-pointer"
                                  >
                                    Xem thông báo cuộc gọi trước
                                  </button>
                                </div>
                              );
                            }
                          }
                        }
                        const callType =
                          (msg as Message & { callType?: 'voice' | 'video' }).callType === 'video' ? 'video' : 'voice';
                        const calleeId = (msg as Message & { calleeId?: string }).calleeId || '';
                        const status =
                          (msg as Message & { callStatus?: 'answered' | 'rejected' | 'timeout' }).callStatus ||
                          'answered';
                        const dur = Number((msg as Message & { callDurationSec?: number }).callDurationSec || 0);
                        const incoming = String(currentUser._id) === String(calleeId);
                        const iconType =
                          callType === 'video' ? (
                            status === 'rejected' || status === 'timeout' ? (
                              <HiVideoCamera className="w-4 h-4 text-red-600" />
                            ) : (
                              <HiVideoCamera className="w-4 h-4 text-blue-600" />
                            )
                          ) : status === 'rejected' || status === 'timeout' ? (
                            <HiPhone className="w-4 h-4 text-red-600" />
                          ) : (
                            <HiPhone className="w-4 h-4 text-green-600" />
                          );
                        const iconDir = incoming ? (
                          <HiArrowDown className="w-4 h-4 text-gray-600" />
                        ) : (
                          <HiArrowUp className="w-4 h-4 text-gray-600" />
                        );
                        const title = `Cuộc gọi ${callType === 'video' ? 'video' : 'thoại'} ${incoming ? 'đến' : 'đi'}`;
                        const detail =
                          status === 'answered'
                            ? `${Math.floor(dur / 60)} phút ${Math.floor(dur % 60)} giây`
                            : status === 'rejected'
                              ? 'Bị từ chối'
                              : incoming
                                ? 'Nhỡ'
                                : 'Không phản hồi';
                        const dt = new Date(msg.timestamp);
                        const today = new Date();
                        const yesterday = new Date();
                        yesterday.setDate(today.getDate() - 1);
                        const sameDate = (a: Date, b: Date) =>
                          a.getFullYear() === b.getFullYear() &&
                          a.getMonth() === b.getMonth() &&
                          a.getDate() === b.getDate();
                        const dateLabel = sameDate(dt, today)
                          ? 'Hôm nay'
                          : sameDate(dt, yesterday)
                            ? 'Hôm qua'
                            : dt.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
                        const timeLabel = dt.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
                        return (
                          <React.Fragment key={`notify-call-${msg._id}-frag`}>
                            {unreadDividerNode}
                            {timeMarkerNode}
                            <div
                              key={msg._id}
                              id={`msg-${msg._id}`}
                              data-message-id={msg._id}
                              className="flex justify-center my-3"
                            >
                              <div
                                className={`px-4 p-1.5  bg-white rounded-full max-w-[80vw]  sm:max-w-[28rem] overflow-hidden ${highlightedMsgId === msg._id ? 'bg-yellow-50' : 'bg-gray-100'}`}
                              >
                                <div className="flex items-center gap-2">
                                  {iconType}
                                  {iconDir}
                                  <div>
                                    <p className="text-xs text-gray-500 truncate">{`${title} – ${detail}`}</p>
                                    <p className="text-xs text-gray-500 truncate">{` ${dateLabel} • ${timeLabel}`}</p>
                                  </div>

                                  {/* <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const t = callType === 'video' ? 'video' : 'voice';
                                      const rid = String(msg.roomId || '');
                                      const isG = !(rid.includes('_') && rid.split('_').filter(Boolean).length === 2);
                                      const me = String(currentUser._id || '');
                                      const parts = rid.split('_').filter(Boolean);
                                      const partnerId =
                                        !isG && parts.length === 2 ? (parts[0] === me ? parts[1] : parts[0]) : '';
                                      const partnerInfo = !isG && partnerId ? getSenderInfo(partnerId) : null;
                                      const evt = new CustomEvent('startCall', {
                                        detail: {
                                          type: t,
                                          roomId: rid,
                                          isGroup: isG,
                                          selectedChat: isG
                                            ? { _id: rid }
                                            : {
                                                _id: partnerId,
                                                name: partnerInfo?.name,
                                                avatar: partnerInfo?.avatar || undefined,
                                              },
                                        },
                                      });
                                      window.dispatchEvent(evt);
                                    }}
                                    className="ml-2  py-1 text-xs font-semibold rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50 hover:cursor-pointer"
                                  >
                                    Gọi lại
                                  </button> */}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      }
                      const related = msg.replyToMessageId
                        ? messages.find((m) => m._id === msg.replyToMessageId)
                        : null;
                      const rawDisplay = msg.content || '';
                      const rawLower = rawDisplay.trim().toLowerCase();
                      const isJoinByLink = rawLower.includes('tham gia nhóm');
                      let display = rawDisplay;
                      if (!isJoinByLink && isMe) {
                        const myName = currentUser.name || '';
                        const trimmedLower = display.trim().toLowerCase();
                        if (!trimmedLower.startsWith('bạn') && myName && display.startsWith(myName)) {
                          display = 'Bạn' + display.slice(myName.length);
                        } else if (display.startsWith('Một thành viên')) {
                          display = 'Bạn' + display.slice('Một thành viên'.length);
                        }
                      }
                      const contentLower = display.toLowerCase();
                      const isCreate = contentLower.includes('đã tạo lịch hẹn');
                      const isDue = contentLower.includes('đến giờ lịch hẹn');
                      const isEdit = contentLower.includes('đã chỉnh sửa') || contentLower.includes('chỉnh sửa');
                      const isDelete = contentLower.includes('đã xóa') || contentLower.includes('xóa');
                      const isPoll = related?.type === 'poll' || contentLower.includes('bình chọn');
                      const isPin = contentLower.includes('ghim');
                      const isNoteCreate = contentLower.includes('đã tạo ghi chú');
                      // Group actions
                      const isInvite =
                        contentLower.includes('đã thêm') ||
                        (contentLower.includes('mời') && contentLower.includes('vào nhóm'));
                      const isLeave = contentLower.includes('đã rời nhóm');
                      const isPromote = contentLower.includes('bổ nhiệm') || contentLower.includes('phó nhóm');
                      const isDemote =
                        contentLower.includes('hủy quyền phó nhóm') || contentLower.includes('bãi nhiệm');
                      const isKick = contentLower.includes('ra khỏi nhóm') || contentLower.includes('xóa khỏi nhóm');
                      const isCreateGroup = contentLower.includes('tạo nhóm');
                      const isRenameGroup =
                        contentLower.includes('đổi tên nhóm') || contentLower.includes('đã đổi tên nhóm');
                      const isNickname = contentLower.includes('biệt danh');
                      const isChangeAvatar = contentLower.includes('ảnh đại diện') || contentLower.includes('đổi ảnh');
                      const icon = isDue ? (
                        <HiOutlineClock className="w-4 h-4 text-red-500" />
                      ) : isCreate ? (
                        <HiOutlineClock className="w-4 h-4 text-indigo-500" />
                      ) : isPoll ? (
                        <HiChartBar className="w-4 h-4 text-blue-500" />
                      ) : isNoteCreate ? (
                        <HiOutlineDocumentText className="w-4 h-4 text-blue-600" />
                      ) : isPin ? (
                        <HiMapPin className="w-4 h-4 text-orange-500" />
                      ) : isRenameGroup ? (
                        <HiPencil className="w-4 h-4 text-indigo-600" />
                      ) : isNickname ? (
                        <HiPencil className="w-4 h-4 text-blue-600" />
                      ) : isChangeAvatar ? (
                        <HiPhoto className="w-4 h-4 text-pink-600" />
                      ) : isInvite ? (
                        <HiUserPlus className="w-4 h-4 text-emerald-600" />
                      ) : isLeave ? (
                        <HiOutlineLogout className="w-4 h-4 text-red-600" />
                      ) : isPromote ? (
                        <HiShieldCheck className="w-4 h-4 text-blue-600" />
                      ) : isDemote ? (
                        <HiUserMinus className="w-4 h-4 text-yellow-600" />
                      ) : isKick ? (
                        <HiUserMinus className="w-4 h-4 text-red-600" />
                      ) : isCreateGroup ? (
                        <HiUserGroup className="w-4 h-4 text-purple-600" />
                      ) : null;
                      const nameLabel = senderInfo.name || '';
                      // Hiển thị rõ tên người join bằng link (clickable) — luôn ưu tiên tên thật
                      let displayNode: React.ReactNode = <p className="text-xs text-gray-500 truncate">{display}</p>;
                      if (isJoinByLink) {
                        const actualName =
                          String(senderInfo._id) === String(currentUser._id)
                            ? currentUser.name || nameLabel
                            : nameLabel;
                        const needle = 'đã tham gia nhóm';
                        const idx = rawLower.indexOf(needle);
                        const tail = idx > -1 ? rawDisplay.slice(idx) : 'đã tham gia nhóm qua link mời';
                        displayNode = (
                          <span className="text-xs text-gray-500 truncate">
                            <a href={`/profile/${senderInfo._id}`} className="text-blue-600 hover:underline">
                              {actualName || 'Một thành viên'}
                            </a>
                            {` ${tail}`}
                          </span>
                        );
                      } else if (isNoteCreate) {
                        const match = rawDisplay.match(/đã tạo ghi chú:\s*\"(.*)\"/i);
                        const noteText = match ? match[1] : rawDisplay;
                        displayNode = (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 truncate">{noteText}</span>
                            <button
                              onClick={() => {
                                if (msg.replyToMessageId) {
                                  onJumpToMessage(String(msg.replyToMessageId));
                                } else {
                                  setNoteDetailData({
                                    content: noteText,
                                    creatorName: senderInfo.name || 'Unknown',
                                    timestamp: msg.timestamp || Date.now(),
                                  });
                                }
                              }}
                              className="text-xs text-blue-600 hover:underline cursor-pointer"
                            >
                              Xem
                            </button>
                          </div>
                        );
                      } else if (related?.type === 'poll') {
                        displayNode = (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 truncate">{display}</span>
                            <button
                              onClick={() => {
                                if (!isMobile) onOpenChatInfoSection?.('poll');
                                setDetailMsg(related);
                              }}
                              className="text-xs text-blue-600 hover:underline cursor-pointer"
                            >
                              Xem
                            </button>
                          </div>
                        );
                      }
                      const pillNode = (
                        <React.Fragment key={`pill-${msg._id}-frag`}>
                          {unreadDividerNode}
                          {!isNoteCreate && timeMarkerNode}
                          <div
                            key={`pill-${msg._id}`}
                            id={`msg-${msg._id}`}
                            className={`flex justify-center mt-3 ${isLastMsg ? 'mb-4' : 'mb-3'}`}
                          >
                            <div
                              className={`px-4 p-1.5  bg-white rounded-full max-w-[80vw]  sm:max-w-[28rem] overflow-hidden ${highlightedMsgId === msg._id ? 'bg-yellow-50' : 'bg-gray-100'}`}
                            >
                              <div className="flex items-center gap-2">
                                {icon}
                                {displayNode}
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                      if (isDue) {
                        if (related?.type === 'reminder') {
                          return (
                            <React.Fragment key={`notify-${msg._id}-due`}>
                              {pillNode}
                              <div className={`flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`}>
                                <ReminderCard
                                  variant="due"
                                  title={related.content || ''}
                                  date={new Date(related.reminderAt || related.timestamp)}
                                  onOpen={() => {
                                    if (!isMobile) onOpenChatInfoSection?.('reminder');
                                    setDetailMsg(related);
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        }
                        const inlineAt = (msg as Message & { reminderAt?: number }).reminderAt;
                        const inlineContent =
                          (msg as Message & { reminderContent?: string }).reminderContent || msg.content || '';
                        const inlineNote = (msg as Message & { reminderNote?: string }).reminderNote;
                        const stub: Message = {
                          _id: (msg.replyToMessageId as unknown as string) || String(msg._id),
                          roomId: String(msg.roomId || ''),
                          sender: msg.sender,
                          content: inlineContent,
                          type: 'reminder',
                          timestamp: Number(msg.timestamp) || Date.now(),
                          reminderAt: typeof inlineAt === 'number' ? inlineAt : undefined,
                          reminderNote: inlineNote,
                          reminderRepeat: (
                            msg as Message & { reminderRepeat?: 'none' | 'daily' | 'weekly' | 'monthly' }
                          ).reminderRepeat,
                        } as Message;
                        return (
                          <React.Fragment key={`notify-${msg._id}-due-inline`}>
                            {pillNode}
                            <div className={`flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`}>
                              <ReminderCard
                                variant="due"
                                title={inlineContent || ''}
                                date={
                                  typeof inlineAt === 'number' && inlineAt
                                    ? new Date(inlineAt)
                                    : new Date(Number(msg.timestamp) || Date.now())
                                }
                                onOpen={() => {
                                  if (!isMobile) onOpenChatInfoSection?.('reminder');
                                  setDetailMsg(stub);
                                }}
                              />
                            </div>
                          </React.Fragment>
                        );
                      }
                      if (related?.type === 'reminder' && isCreate) {
                        return (
                          <div key={`notify-${msg._id}-create`} className="flex justify-center my-4">
                            <ReminderCard
                              variant="create"
                              title={related.content || ''}
                              date={new Date(related.reminderAt || related.timestamp)}
                              senderName={senderInfo.name}
                              senderAvatar={senderInfo.avatar}
                              isMe={isMe}
                            />
                          </div>
                        );
                      }

                      if (related?.type === 'reminder' && (isEdit || isDelete)) {
                        return (
                          <React.Fragment key={`notify-${msg._id}-reminder`}>
                            {pillNode}
                            <div className="flex justify-center -mt-2">
                              <button
                                onClick={() => setDetailMsg(related)}
                                className="z-10 -mt-1 px-5 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-all uppercase tracking-wide cursor-pointer"
                              >
                                XEM CHI TIẾT
                              </button>
                            </div>
                          </React.Fragment>
                        );
                      }
                      if (isCreate || isEdit || isDelete) {
                        const inlineAt = (msg as Message & { reminderAt?: number }).reminderAt;
                        const inlineContent = (msg as Message & { reminderContent?: string }).reminderContent || '';
                        const inlineNote = (msg as Message & { reminderNote?: string }).reminderNote;
                        if (typeof inlineAt === 'number' && inlineContent) {
                          const stub: Message = {
                            _id: (msg.replyToMessageId as unknown as string) || String(msg._id),
                            roomId: String(msg.roomId || ''),
                            sender: msg.sender,
                            content: inlineContent,
                            type: 'reminder',
                            timestamp: Number(msg.timestamp) || Date.now(),
                            reminderAt: inlineAt,
                            reminderNote: inlineNote,
                            reminderRepeat: (
                              msg as Message & { reminderRepeat?: 'none' | 'daily' | 'weekly' | 'monthly' }
                            ).reminderRepeat,
                          } as Message;

                          if (isCreate) {
                            return (
                              <div key={`notify-${msg._id}-create-inline`} className="flex justify-center my-4">
                                <ReminderCard
                                  variant="create"
                                  title={inlineContent || ''}
                                  date={new Date(inlineAt)}
                                  senderName={senderInfo.name}
                                  senderAvatar={senderInfo.avatar}
                                  isMe={isMe}
                                />
                              </div>
                            );
                          }

                          return (
                            <React.Fragment key={`notify-${msg._id}-reminder-inline`}>
                              {pillNode}
                              <div className={`flex justify-center -mt-2 ${isLastMsg ? 'mb-4' : ''}`}>
                                <button
                                  onClick={() => setDetailMsg(stub)}
                                  className="z-10 -mt-1 px-5 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-all uppercase tracking-wide cursor-pointer"
                                >
                                  XEM CHI TIẾT
                                </button>
                              </div>
                            </React.Fragment>
                          );
                        }
                      }
                      return pillNode;
                    }

                    if (msg.type === 'reminder') {
                      return (
                        <React.Fragment key={`reminder-${msg._id}-frag`}>
                          {timeMarkerNode}
                          <div key={msg._id} id={`msg-${msg._id}`} className="flex flex-col items-center mt-4">
                            <RenderMessageTag tag={msg.messageTag} />
                            <div onClick={() => setDetailMsg(msg)}>
                              <ReminderCard
                                variant="message"
                                title={msg.content || ''}
                                date={new Date((msg as Message & { reminderAt?: number }).reminderAt || msg.timestamp)}
                                senderName={senderInfo.name}
                                senderAvatar={senderInfo.avatar}
                                isMe={isMe}
                                highlighted={highlightedMsgId === msg._id}
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }

                    if (msg.type === 'poll') {
                      const myId = String(currentUser._id);
                      const options = Array.isArray(msg.pollOptions) ? (msg.pollOptions as string[]) : [];
                      const votes = (msg.pollVotes || {}) as Record<string, string[]>;
                      const locked = !!msg.isPollLocked;
                      return (
                        <React.Fragment key={`poll-${msg._id}-frag`}>
                          {timeMarkerNode}
                          <div
                            key={msg._id}
                            id={`msg-${msg._id}`}
                            className={`flex justify-center mt-3 ${isLastMsg ? 'mb-4' : 'mb-3'}`}
                          >
                            <div
                              className={`w-full max-w-[18rem] p-3 rounded-2xl border shadow-sm ${highlightedMsgId === msg._id ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-gray-200'}`}
                              onClick={() => setDetailMsg(msg)}
                            >
                              <RenderMessageTag tag={msg.messageTag} />
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0">
                                  <p className="text-base font-semibold text-gray-900 break-words truncate">
                                    {msg.content || msg.pollQuestion || 'Bình chọn'}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {/* {typeof msg.isPinned === 'boolean' && onPinMessage && ( */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onPinMessage?.(msg);
                                    }}
                                    className="px-2 py-1 text-xs font-semibold rounded-lg 
                             border-blue-200 text-blue-600 hover:bg-blue-50 hover:cursor-pointer"
                                  >
                                    {msg.isPinned ? 'Bỏ ghim' : 'Ghim'}
                                  </button>
                                  {/* )} */}
                                </div>
                              </div>
                              {locked && (
                                <p className="text-xs text-gray-500 mt-2">
                                  Kết thúc lúc{' '}
                                  {new Date(msg.pollLockedAt || msg.editedAt || msg.timestamp).toLocaleString('vi-VN')}
                                </p>
                              )}
                              <div className="flex flex-col gap-0.5 mt-1">
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                  {msg.pollAllowMultiple ? (
                                    <>
                                      <HiListBullet className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span>Chọn nhiều phương án</span>
                                    </>
                                  ) : (
                                    <>
                                      <HiCheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span>Chọn 1 phương án</span>
                                    </>
                                  )}
                                </div>
                                {msg.pollHideVoters && (
                                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <HiEyeSlash className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>Ẩn người bình chọn</span>
                                  </div>
                                )}
                                {msg.pollAllowAddOptions && (
                                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <HiPlus className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>Cho phép thêm phương án</span>
                                  </div>
                                )}
                                {msg.pollHideResultsUntilVote && (
                                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <HiLockClosed className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span>Ẩn kết quả khi chưa bình chọn</span>
                                  </div>
                                )}
                              </div>
                              <button
                                onClick={() => setDetailMsg(msg)}
                                className="text-xs text-blue-600 hover:underline mt-1"
                              >
                                {(() => {
                                  const userIds = new Set<string>();
                                  let totalVotes = 0;
                                  let hasVoted = false;
                                  (msg.pollOptions || []).forEach((opt) => {
                                    const arr = Array.isArray(votes[opt]) ? (votes[opt] as string[]) : [];
                                    totalVotes += arr.length;
                                    arr.forEach((id) => userIds.add(String(id)));
                                    if (arr.includes(myId)) hasVoted = true;
                                  });
                                  const showResults = !(msg.pollHideResultsUntilVote && !hasVoted);
                                  if (!showResults) return 'Bình chọn để xem kết quả';

                                  if (msg.pollHideVoters) {
                                    return `${totalVotes} lượt bình chọn`;
                                  }
                                  return `${userIds.size} người bình chọn, ${totalVotes} lượt bình chọn`;
                                })()}
                              </button>
                              <div className="mt-3 space-y-2">
                                {(() => {
                                  const totalVotes = options.reduce((acc, opt) => {
                                    const arr = Array.isArray(votes[opt]) ? (votes[opt] as string[]) : [];
                                    return acc + arr.length;
                                  }, 0);
                                  const hasVoted = options.some((opt) => {
                                    const arr = Array.isArray(votes[opt]) ? (votes[opt] as string[]) : [];
                                    return arr.includes(myId);
                                  });
                                  const showResults = !(msg.pollHideResultsUntilVote && !hasVoted);

                                  return options.map((opt, idx) => {
                                    const arr = Array.isArray(votes[opt]) ? (votes[opt] as string[]) : [];
                                    const count = arr.length;
                                    const voted = arr.includes(myId);
                                    const percent = showResults && totalVotes > 0 ? (count / totalVotes) * 100 : 0;

                                    return (
                                      <button
                                        key={`${String(msg._id)}-${idx}`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!isMobile) onOpenChatInfoSection?.('poll');
                                          setDetailMsg(msg);
                                        }}
                                        className={`w-full cursor-pointer bg-gray-100  relative overflow-hidden px-2 py-1 rounded-[5px]  text-left transition-colors
                                   
                                  `}
                                      >
                                        <div
                                          className={`absolute top-0 left-0 bottom-0 transition-all duration-500 ease-out ${voted ? 'bg-blue-200' : 'bg-blue-200'}`}
                                          style={{ width: `${percent}%` }}
                                        />
                                        <div className="flex items-center justify-between  relative z-10">
                                          <span className="truncate text-[12px]">{opt}</span>
                                          <span className="text-sm">{showResults ? count : ''}</span>
                                        </div>
                                      </button>
                                    );
                                  });
                                })()}
                              </div>
                              <div className="pt-2">
                                <button
                                  onClick={() => {
                                    if (!isMobile) onOpenChatInfoSection?.('poll');
                                    setDetailMsg(msg);
                                  }}
                                  className="w-full cursor-pointer px-2 py-1 mt-1 text-blue-600 border border-blue-300 rounded-xl hover:bg-blue-50 font-semibold text-sm"
                                >
                                  {locked ? 'Xem lựa chọn' : 'Đổi lựa chọn'}
                                </button>
                              </div>

                              {/* Chỉ cho phép bình chọn trong modal: bỏ thêm lựa chọn inline */}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }

                    const senderName = allUsersMap.get(senderInfo._id) || senderInfo.name;

                    return (
                      <React.Fragment key={`${msg._id}-frag`}>
                        {unreadDividerNode}
                        {timeMarkerNode}
                        <div
                          key={msg._id}
                          id={`msg-${msg._id}`}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            onContextMenu(e, msg);
                          }}
                          className={`
                  w-full sm:max-w-[36rem] lg:max-w-[46rem]
                  flex gap-2 group relative
                  ${isMe ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row'}
                  ${isGrouped ? 'mt-2' : 'mt-2'}
                  ${isLastMsg ? 'mb-8' : ''}
                  ${highlightedMsgId === msg._id ? 'bg-yellow-50 rounded-xl' : ''}
                `}
                        >
                          {/* Avatar */}
                          {!isMe && (
                            <div className={`${isGrouped ? 'opacity-0' : ''} flex-shrink-0`}>
                              {senderInfo.avatar ? (
                                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                                  <Image
                                    width={38}
                                    height={38}
                                    src={getProxyUrl(senderInfo.avatar)}
                                    alt={senderInfo.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                  <Image
                                    src="/logo/avata.webp"
                                    alt={senderInfo.name || 'User'}
                                    width={38}
                                    height={38}
                                    className="w-full h-full rounded-full object-cover"
                                  />
                                </div>
                              )}
                            </div>
                          )}

                          {/* Content */}
                          <div className={`flex flex-col min-w-0 ${isMe ? 'items-end' : 'items-start'}`}>
                            {isEdited && !isRecalled && (
                              <span
                                className="text-[10px] px-1 text-blue-500 hover:underline hover:cursor-pointer"
                                onClick={() => setExpandedOriginalId((prev) => (prev === msg._id ? null : msg._id))}
                              >
                                {expandedOriginalId === msg._id ? <p>Ẩn chỉnh sửa</p> : <p>Đã chỉnh sửa</p>}
                              </span>
                            )}
                            {/* Reply preview */}
                            {repliedToMsg &&
                              (() => {
                                const url = String(repliedToMsg.fileUrl || repliedToMsg.previewUrl || '');
                                const isVid =
                                  repliedToMsg.type === 'video' ||
                                  isVideoFile(repliedToMsg.fileName) ||
                                  isVideoFile(url);
                                const isImg =
                                  repliedToMsg.type === 'image' ||
                                  /\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(
                                    String(repliedToMsg.fileName || url || ''),
                                  );
                                const label = repliedToMsg.isRecalled
                                  ? 'Tin nhắn đã bị thu hồi'
                                  : repliedToMsg.type === 'file'
                                    ? repliedToMsg.fileName || '[File]'
                                    : repliedToMsg.type === 'image'
                                      ? '[Ảnh]'
                                      : repliedToMsg.type === 'video'
                                        ? '[Video]'
                                        : repliedToMsg.type === 'sticker'
                                          ? '[Sticker]'
                                          : repliedToMsg.type === 'reminder'
                                            ? repliedToMsg.content || '[Nhắc nhở]'
                                            : repliedToMsg.content || 'Tin nhắn';
                                return (
                                  <div
                                    onClick={() => onJumpToMessage(repliedToMsg._id)}
                                    className="max-w-[88vw] sm:max-w-[26rem] lg:max-w-[34rem] px-3 py-2 mb-1 mt-2 text-xs bg-gray-100 border-l-2 border-blue-500 rounded-xl cursor-pointer"
                                  >
                                    <p className="font-semibold text-blue-600">
                                      {msg.replyToMessageName || senderName}
                                    </p>
                                    <div className="flex items-center gap-2">
                                      {!repliedToMsg.isRecalled &&
                                        (isImg || isVid) &&
                                        (isImg ? (
                                          <Image
                                            src={getProxyUrl(url)}
                                            alt="Ảnh"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-md object-cover border border-blue-200"
                                            unoptimized={String(url).includes('mega.nz')}
                                          />
                                        ) : (
                                          <div className="relative w-10 h-10 bg-black rounded-md overflow-hidden border border-blue-200">
                                            <video
                                              src={getProxyUrl(url)}
                                              className="w-full h-full object-cover"
                                              muted
                                              controls
                                              playsInline
                                              preload="metadata"
                                            ></video>
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                              <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-800">
                                                  <path d="M8 5v14l11-7z" fill="currentColor" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      <p className="truncate text-gray-600">{label}</p>
                                    </div>
                                  </div>
                                );
                              })()}

                            {/* MAIN BUBBLE */}
                            <div
                              className={`  
                  px-4 py-2 rounded-lg shadow-md max-w-[70vw] ${
                    !isRecalled && msg.type === 'text' && isSidebarOpen && !isMobile
                      ? 'sm:max-w-[26rem] lg:max-w-[32rem]'
                      : 'sm:max-w-[34rem] lg:max-w-[38rem]'
                  } break-words mt-1
                  ${
                    !isRecalled &&
                    (isVideo ||
                      msg.type === 'sticker' ||
                      msg.type === 'file' ||
                      msg.type === 'image' ||
                      msg.type === 'contact')
                      ? '!bg-transparent shadow-none'
                      : isMe
                        ? 'bg-blue-100 text-white'
                        : 'bg-white text-gray-800 '
                  }
                      ${!isGrouped && isMe ? 'rounded-tr-md' : ''}
                      ${!isGrouped && !isMe ? 'rounded-tl-md' : ''}
                      ${isRecalled ? '!bg-gray-200 !text-gray-500 italic !px-4 !py-2 !max-w-[92vw] sm:!max-w-[34rem] lg:!max-w-[44rem]' : ''}
                      ${!isRecalled && (isVideo || msg.type === 'sticker' || msg.type === 'file' || msg.type === 'image' || msg.type === 'contact') ? '!p-0 !shadow-none ' : ''}
                    ${!isRecalled && msg.type === 'image' ? '!p-0' : ''}
                    ${!isRecalled && msg.type === 'file' ? '!p-0' : ''}
                  relative ${hasReactions ? 'mb-4' : ''}
                  ${contextMenu?.visible && String(contextMenu.message._id) === String(msg._id) ? 'z-[9998]' : ''}
                  ${longPressActiveId === msg._id ? 'ring-2 ring-blue-300 scale-[0.98]' : ''}
                  `}
                              style={
                                isMobile && swipeState.id === msg._id
                                  ? { transform: `translateX(${Math.max(-100, Math.min(100, swipeState.dx))}px)` }
                                  : undefined
                              }
                              onClick={() => {
                                setTimeVisibleId((prev) => (prev === msg._id ? null : msg._id));
                                setActiveMoreId(msg._id);
                                setReactionDetail(null);
                              }}
                              onTouchStart={(e) => {
                                try {
                                  if (isRecalled) return;
                                  longPressTriggeredRef.current = false;
                                  if (longPressTimerRef.current != null) {
                                    clearTimeout(longPressTimerRef.current);
                                    longPressTimerRef.current = null;
                                  }
                                  const t = e.touches && e.touches[0];
                                  const x0 = t ? t.clientX : 0;
                                  const y0 = t ? t.clientY : 0;
                                  const el = e.currentTarget as HTMLElement;
                                  swipeStartRef.current = { x: x0, y: y0, id: msg._id, isMe };
                                  setSwipeState({ id: null, dx: 0 });
                                  setLongPressActiveId(msg._id);
                                  longPressTimerRef.current = window.setTimeout(() => {
                                    longPressTriggeredRef.current = true;
                                    setActiveMoreId(msg._id);
                                    setReactionDetail(null);
                                    if (isMobile && msg.type === 'text') {
                                      setMobileCollapsedId(msg._id);
                                    }
                                    onMobileLongPress?.(msg, el, x0, y0);
                                  }, 420);
                                } catch {}
                              }}
                              onTouchEnd={(e) => {
                                try {
                                  if (longPressTimerRef.current != null) {
                                    clearTimeout(longPressTimerRef.current);
                                    longPressTimerRef.current = null;
                                  }
                                  setLongPressActiveId(null);
                                  if (longPressTriggeredRef.current) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }
                                  if (isMobile && swipeStartRef.current.id === msg._id) {
                                    const okDir = swipeStartRef.current.isMe ? swipeState.dx < -64 : swipeState.dx > 64;
                                    if (okDir) {
                                      onReplyMessage?.(msg);
                                    }
                                    setSwipeState({ id: null, dx: 0 });
                                    swipeStartRef.current = { x: 0, y: 0, id: null, isMe: false };
                                  }
                                } catch {}
                              }}
                              onTouchMove={(e) => {
                                try {
                                  if (longPressTimerRef.current != null) {
                                    clearTimeout(longPressTimerRef.current);
                                    longPressTimerRef.current = null;
                                  }
                                  setLongPressActiveId(null);
                                  if (!isMobile) return;
                                  const t = e.touches && e.touches[0];
                                  const x = t ? t.clientX : 0;
                                  const y = t ? t.clientY : 0;
                                  const dx = x - swipeStartRef.current.x;
                                  const dy = y - swipeStartRef.current.y;
                                  if (swipeStartRef.current.id === msg._id) {
                                    const horizontal = Math.abs(dx) > 8 && Math.abs(dy) < 24;
                                    if (horizontal) {
                                      const dirOk = swipeStartRef.current.isMe ? dx < 0 : dx > 0;
                                      setSwipeState({ id: msg._id, dx: dirOk ? dx : 0 });
                                      e.preventDefault();
                                    }
                                  }
                                } catch {}
                              }}
                              onTouchCancel={() => {
                                try {
                                  if (longPressTimerRef.current != null) {
                                    clearTimeout(longPressTimerRef.current);
                                    longPressTimerRef.current = null;
                                  }
                                  setLongPressActiveId(null);
                                  if (isMobile && swipeStartRef.current.id === msg._id) {
                                    setSwipeState({ id: null, dx: 0 });
                                    swipeStartRef.current = { x: 0, y: 0, id: null, isMe: false };
                                  }
                                } catch {}
                              }}
                            >
                              {!isRecalled && (
                                <>
                                  {(msg.type === 'image' || msg.type === 'video') && (
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        onShareMessage(msg);
                                      }}
                                      className={`absolute top-1/2 -translate-y-1/2  cursor-pointer p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMe ? 'right-full mr-2' : 'left-full ml-2'} opacity-100 pointer-events-auto`}
                                      aria-label="Chia sẻ"
                                      title="Chia sẻ"
                                    >
                                      <ICShareMessage className="w-4 h-4 text-indigo-600" />
                                    </button>
                                  )}
                                  {isMobile && swipeState.id === msg._id && (
                                    <div
                                      className={`absolute top-1/2 -translate-y-1/2 ${isMe ? 'left-full ml-2' : 'right-full mr-2'}`}
                                      style={{ opacity: Math.min(Math.abs(swipeState.dx) / 64, 1) }}
                                    >
                                      <div className="p-2 bg-white rounded-full shadow border border-gray-200">
                                        {isMe ? (
                                          <HiArrowUturnLeft className="w-5 h-5 text-blue-600" />
                                        ) : (
                                          <HiArrowUturnRight className="w-5 h-5 text-blue-600" />
                                        )}
                                      </div>
                                    </div>
                                  )}
                                  {!isMobile && (
                                    <>
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          onContextMenu(e, msg);
                                        }}
                                        className={`absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1.5 bg-white/90 rounded-full shadow hover:bg-blue-50 ${isMe ? 'right-full mr-10' : 'left-full ml-10'} opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`}
                                        aria-label="Mở menu"
                                        title="Thêm"
                                      >
                                        <HiEllipsisVertical className="w-4 h-4 text-gray-600" />
                                      </button>
                                      <ReactionButton
                                        isMine={isMe}
                                        visible={activeMoreId === msg._id}
                                        onPick={(emoji) => {
                                          onToggleReaction?.(msg, emoji);
                                          setActiveMoreId(null);
                                        }}
                                        className={`absolute top-1/2 -translate-y-1/2  ${isMe ? 'right-full mr-18' : 'left-full ml-18'} ${activeMoreId === msg._id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto'} transition-opacity duration-200`}
                                      />
                                    </>
                                  )}
                                </>
                              )}

                              {!isRecalled && (
                                <>
                                  {(() => {
                                    const items = Object.entries(reactions)
                                      .map(([emoji, arr]) => ({
                                        emoji,
                                        count: (arr || []).length,
                                        mine: (arr || []).includes(myId),
                                        users: (arr || []).map((id) => allUsersMap.get(String(id)) || 'Người dùng'),
                                      }))
                                      .filter((x) => x.count > 0)
                                      .sort((a, b) => b.count - a.count);

                                    if (items.length === 0) return null;

                                    return (
                                      <div
                                        className={`
                                  absolute ${isMe ? 'right-2 -mr-1' : 'left-2 -ml-1'} 
                                  -bottom-4 
                                  flex items-center gap-1
                                `}
                                      >
                                        <div className="flex items-center">
                                          {items.slice(0, 3).map((it, idx) => (
                                            <div
                                              key={`${msg._id}-react-${idx}`}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setReactionDetail(
                                                  reactionDetail?.msgId === msg._id &&
                                                    reactionDetail?.emoji === it.emoji
                                                    ? null
                                                    : { msgId: msg._id, emoji: it.emoji },
                                                );
                                              }}
                                              className={`
                                          flex items-center gap-0.5 py-0.5 rounded-full text-sm cursor-pointer
                                          transition-all duration-200 hover:bg-gray-100 active:scale-95
                                          ${it.mine ? 'bg-blue-50' : 'bg-transparent'}
                                        `}
                                              title={`${it.count} người`}
                                            >
                                              <span className="text-lg leading-none">{it.emoji}</span>
                                              {it.count > 1 && (
                                                <span
                                                  className={`text-xs font-medium ${it.mine ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                  {it.count}
                                                </span>
                                              )}
                                            </div>
                                          ))}
                                          {items.length > 3 && (
                                            <div className="px-2 text-xs text-gray-500 font-medium">
                                              +{items.length - 3}
                                            </div>
                                          )}
                                        </div>

                                        <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                      </div>
                                    );
                                  })()}

                                  {reactionDetail && reactionDetail.msgId === msg._id && (
                                    <>
                                      <div className="fixed inset-0 z-30" onClick={() => setReactionDetail(null)} />

                                      <div
                                        ref={(el) => {
                                          if (el && reactionDetail.msgId === msg._id) {
                                            const rect = el.parentElement?.getBoundingClientRect();
                                            if (rect) {
                                              const spaceBelow = window.innerHeight - rect.bottom;
                                              const spaceAbove = rect.top;
                                              const popoverHeight = 250;

                                              if (spaceBelow < popoverHeight && spaceAbove > spaceBelow) {
                                                el.style.bottom = '100%';
                                                el.style.top = 'auto';
                                                el.style.marginBottom = '0.625rem';
                                                el.style.marginTop = '0';
                                              } else {
                                                el.style.top = '100%';
                                                el.style.bottom = 'auto';
                                                el.style.marginTop = '0.625rem';
                                                el.style.marginBottom = '0';
                                              }
                                            }
                                          }
                                        }}
                                        className={`
                                    absolute ${isMe ? 'right-2' : 'left-2'} 
                                    z-40
                                  `}
                                      >
                                        {(() => {
                                          const users = (reactions[reactionDetail.emoji] || []).map(
                                            (id) => allUsersMap.get(String(id)) || String(id),
                                          );

                                          return (
                                            <div className="min-w-[11.25rem] max-w-[15rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl animate-in fade-in zoom-in-95 duration-200">
                                              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                                                <span className="text-2xl">{reactionDetail.emoji}</span>
                                                <span className="text-sm font-semibold text-gray-700">
                                                  {users.length} người
                                                </span>
                                              </div>
                                              {users.length > 0 ? (
                                                <ul className="space-y-1.5 max-h-48 overflow-y-auto">
                                                  {users.map((name, idx) => (
                                                    <li
                                                      key={`${msg._id}-user-${idx}`}
                                                      className="text-sm text-gray-700 py-1 hover:text-blue-600 transition-colors"
                                                    >
                                                      {name}
                                                    </li>
                                                  ))}
                                                </ul>
                                              ) : (
                                                <div className="text-sm text-gray-500 py-1">Chưa có ai</div>
                                              )}
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                              {/* Group sender name - Show for everyone including me if set */}
                              {isGroup && !isGrouped && !isRecalled && !isMe && (
                                <p
                                  className={`text-sm inline-block  ${msg.type === 'image' || msg.type === 'video' || msg.type === 'file' ? ' px-2 py-1 bg-white rounded-[2rem] mb-1' : 'py-1'} ${isMe ? 'text-gray-600' : 'text-gray-600'}`}
                                >
                                  {senderName}
                                </p>
                              )}

                              {/* TEXT */}
                              {msg.type === 'text' && !isRecalled && !isEditing && (
                                <div
                                  className={`relative text-[0.875rem] flex flex-col ${
                                    isSidebarOpen && !isMobile ? 'md:text-[0.875rem]' : 'md:text-[1rem]'
                                  } leading-relaxed text-black whitespace-pre-wrap select-none lg:select-text`}
                                  style={
                                    isMobile &&
                                    contextMenu?.visible &&
                                    String(contextMenu.message._id) === String(msg._id) &&
                                    mobileCollapsedId === msg._id
                                      ? { maxHeight: 'calc(var(--vvh) * 0.42)', overflow: 'hidden' }
                                      : undefined
                                  }
                                >
                                  <RenderMessageTag tag={msg.messageTag} />
                                  {renderMessageContent(msg.content || '', msg.mentions, isMe)}
                                  {isMobile &&
                                    contextMenu?.visible &&
                                    String(contextMenu.message._id) === String(msg._id) &&
                                    mobileCollapsedId === msg._id && (
                                      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center pointer-events-none">
                                        <div className="absolute inset-x-0 bottom-8 h-16 bg-gradient-to-t from-white/95 to-transparent" />
                                        <button
                                          onClick={() => {
                                            setMobileCollapsedId(null);
                                            try {
                                              document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                                            } catch {}
                                          }}
                                          className="pointer-events-auto mb-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200 text-sm text-blue-600 shadow hover:bg-blue-50 active:scale-95"
                                        >
                                          Xem thêm
                                        </button>
                                      </div>
                                    )}
                                  {(() => {
                                    const linkMatch = (msg.content || '').match(/(https?:\/\/|www\.)\S+/i);
                                    if (!linkMatch) return null;
                                    const raw = linkMatch[0];
                                    const href = raw.startsWith('http') ? raw : `https://${raw}`;
                                    const hostname = (() => {
                                      try {
                                        return new URL(href).hostname.replace('www.', '');
                                      } catch {
                                        return 'Website';
                                      }
                                    })();
                                    return (
                                      <div
                                        className={`mt-2 rounded-xl border ${isMe ? 'border-white/30' : 'border-gray-200'} bg-white overflow-hidden`}
                                      >
                                        <button
                                          onClick={() => window.open(href, '_blank')}
                                          className="w-full text-left p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                                        >
                                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 text-white">
                                            <HiLink className="w-5 h-5" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-purple-600 truncate">{raw}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{hostname}</p>
                                          </div>
                                        </button>
                                      </div>
                                    );
                                  })()}
                                </div>
                              )}

                              {msg.type === 'text' && !isRecalled && isEditing && (
                                <div className="text-sm leading-relaxed">
                                  <textarea
                                    value={typeof editContent === 'string' ? editContent : msg.content || ''}
                                    onChange={(e) => setEditContent?.(e.target.value)}
                                    className={`w-full p-2 rounded-xl border ${isMe ? ' text-gray-800' : ' text-gray-800'}`}
                                    rows={3}
                                  />
                                  <div className={`mt-2 flex gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
                                    <button
                                      onClick={() => {
                                        setEditingMessageId?.(null);
                                        setEditContent?.('');
                                      }}
                                      className="px-3 py-1.5 cursor-pointer rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 hover:cursor-pointer"
                                    >
                                      Hủy
                                    </button>
                                    <button
                                      onClick={() => {
                                        const content =
                                          typeof editContent === 'string' ? editContent : msg.content || '';
                                        onSaveEdit?.(msg._id, content);
                                      }}
                                      className="px-3 py-1.5 cursor-pointer rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer"
                                    >
                                      Lưu
                                    </button>
                                  </div>
                                </div>
                              )}

                              {msg.type === 'contact' && !isRecalled && (
                                <div className="relative">
                                  <div className="absolute top-1 left-1 z-20">
                                    <RenderMessageTag tag={msg.messageTag} />
                                  </div>
                                  <ContactCardBubble
                                    currentUserId={String(currentUser._id || '')}
                                    contact={
                                      (
                                        msg as Message & {
                                          contactCard?: {
                                            _id?: string;
                                            name?: string;
                                            username?: string;
                                            avatar?: string;
                                          };
                                        }
                                      ).contactCard
                                    }
                                  />
                                </div>
                              )}

                              {/* IMAGE – FIX SIZE MOBILE */}
                              {msg.type === 'image' && msg.fileUrl && !isRecalled && (
                                <div
                                  className="relative rounded-[0.25rem] overflow-hidden cursor-pointer shadow-md max-w-[50vw] sm:max-w-[16rem] select-none lg:select-auto"
                                  onClick={() => !isUploading && onOpenMedia(String(msg.fileUrl), 'image')}
                                  style={{ WebkitTouchCallout: 'none' }}
                                >
                                  <div className="absolute top-1 left-1 z-20">
                                    <RenderMessageTag tag={msg.messageTag} />
                                  </div>
                                  {String(msg.fileUrl).startsWith('blob:') ? (
                                    <Image
                                      width={600}
                                      height={600}
                                      src={String(msg.fileUrl)}
                                      alt="Ảnh"
                                      className="w-full h-full object-cover"
                                      draggable={false}
                                    />
                                  ) : (
                                    <Image
                                      src={getProxyUrl(msg.fileUrl)}
                                      alt="Ảnh"
                                      width={600}
                                      height={600}
                                      className="w-full h-full object-cover"
                                      unoptimized={String(msg.fileUrl).includes('mega.nz')}
                                      draggable={false}
                                    />
                                  )}

                                  {isUploading && (
                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                      {(() => {
                                        const size = 40;
                                        const stroke = 4;
                                        const r = (size - stroke) / 2;
                                        const c = 2 * Math.PI * r;
                                        const p = Math.max(0, Math.min(100, Number(uploadProgress || 0)));
                                        return (
                                          <div className="flex flex-col items-center">
                                            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                                              <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={r}
                                                stroke="rgba(255,255,255,0.3)"
                                                strokeWidth={stroke}
                                                fill="none"
                                              />
                                              <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={r}
                                                stroke="white"
                                                strokeWidth={stroke}
                                                fill="none"
                                                strokeDasharray={c}
                                                strokeDashoffset={c - (p / 100) * c}
                                                strokeLinecap="round"
                                                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                                              />
                                            </svg>
                                            {/* <span className="text-xs text-white font-semibold">{Math.round(p)}%</span> */}
                                          </div>
                                        );
                                      })()}
                                    </div>
                                  )}
                                </div>
                              )}
                              {msg.type === 'image' && !isRecalled && msg.content && (
                                <div className={`mt-2 text-sm leading-relaxed px-2 text-gray-700`}>
                                  {renderMessageContent(msg.content || '', msg.mentions, isMe)}
                                </div>
                              )}

                              {/* VIDEO – FIX SIZE MOBILE */}
                              {isVideo && msg.fileUrl && !isRecalled && (
                                <div
                                  className="relative rounded-[0.25rem] overflow-hidden cursor-pointer shadow-lg max-w-[70vw] sm:max-w-[18rem] aspect-video bg-black select-none lg:select-auto"
                                  onClick={() => !isUploading && onOpenMedia(String(msg.fileUrl!), 'video')}
                                  style={{ WebkitTouchCallout: 'none' }}
                                >
                                  <video
                                    src={getProxyUrl(msg.fileUrl)}
                                    className="w-full h-full object-cover m-[0.125rem]"
                                    controls
                                    playsInline
                                    preload="metadata"
                                  ></video>

                                  {/* play overlay */}
                                  <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow">
                                      <HiPlay className="w-7 h-7 text-blue-600 ml-1" />
                                    </div>
                                  </div>

                                  {isUploading && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                                      {uploadProgress !== undefined ? (
                                        <>{Math.round(uploadProgress)}%</>
                                      ) : (
                                        <div className="w-6 h-6 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}

                              {isVideo && !isRecalled && msg.content && (
                                <div className={`px-2 mt-2 text-sm leading-relaxed text-gray-700`}>
                                  {renderMessageContent(msg.content || '', msg.mentions, isMe)}
                                </div>
                              )}

                              {/* FILE – FIX SIZE MOBILE */}
                              {msg.type === 'file' && msg.fileUrl && !isVideo && !isRecalled && (
                                <a
                                  href={getProxyUrl(msg.fileUrl, true)}
                                  download={msg.fileName || 'download'}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="relative flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-2xl max-w-[70vw] sm:max-w-[18rem] shadow-sm hover:bg-gray-50 select-none lg:select-text"
                                  onClick={(e) => {
                                    if (isUploading) e.preventDefault();
                                  }}
                                  aria-disabled={isUploading ? true : undefined}
                                  draggable={false}
                                  style={{ WebkitTouchCallout: 'none' }}
                                >
                                  <div className="p-2 bg-blue-600 rounded-xl">
                                    <HiOutlineDocumentText className="w-6 h-6 text-white" />
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-800 truncate">
                                      {msg.fileName || 'Tệp đính kèm'}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">Nhấn để tải xuống</p>
                                  </div>
                                  {isUploading && (
                                    <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center rounded-2xl">
                                      {(() => {
                                        const size = 32;
                                        const stroke = 3;
                                        const r = (size - stroke) / 2;
                                        const c = 2 * Math.PI * r;
                                        const p = Math.max(0, Math.min(100, Number(uploadProgress || 0)));
                                        return (
                                          <div className="flex flex-col items-center">
                                            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                                              <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={r}
                                                stroke="rgba(255,255,255,0.35)"
                                                strokeWidth={stroke}
                                                fill="none"
                                              />
                                              <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={r}
                                                stroke="white"
                                                strokeWidth={stroke}
                                                fill="none"
                                                strokeDasharray={c}
                                                strokeDashoffset={c - (p / 100) * c}
                                                strokeLinecap="round"
                                                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                                              />
                                            </svg>
                                            <span className="text-xs font-semibold mt-1">{Math.round(p)}%</span>
                                          </div>
                                        );
                                      })()}
                                    </div>
                                  )}
                                </a>
                              )}
                              {msg.type === 'file' && !isRecalled && msg.content && (
                                <div className={`mt-2 text-sm leading-relaxed px-2 text-gray-700`}>
                                  {renderMessageContent(msg.content || '', msg.mentions, isMe)}
                                </div>
                              )}

                              {isRecalled && <p className="text-sm italic opacity-70">đã thu hồi tin nhắn</p>}

                              {/* ✅ Hiển thị nội dung gốc nếu đã chỉnh sửa */}
                              {isEdited && !isRecalled && msg.originalContent && (
                                <div className=" border-gray-300 ">
                                  {expandedOriginalId === msg._id && (
                                    <div className="text-xs border-t-[1px] border-t-gray-300  text-gray-500 space-y-1 flex items-center justify-between">
                                      <p
                                        className={`p-1 m-1 whitespace-pre-wrap pt-2 pb-1 rounded w-full ${isMe ? 'bg-white' : ''}`}
                                      >
                                        {msg.originalContent}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                              {isEndOfGroup && (
                                <div className={`text-xs mt-1 ${isMe ? 'text-gray-700' : 'text-gray-500'}`}>
                                  <span
                                    className={
                                      msg.type === 'text' ? undefined : 'inline-block px-2 py-1 bg-white rounded-[2rem]'
                                    }
                                  >
                                    {formatTimestamp(
                                      Number(
                                        (msg as unknown as { serverTimestamp?: number }).serverTimestamp ??
                                          msg.timestamp,
                                      ) || 0,
                                    )}
                                  </span>
                                </div>
                              )}
                            </div>
                            <ReadStatus
                              message={msg}
                              isGroup={isGroup}
                              isRecalled={isRecalled}
                              isMine={isMe}
                              isLast={isLastMsg}
                              myId={myId}
                              allUsersMap={allUsersMap}
                              getSenderInfo={getSenderInfo}
                              isMobile={isMobile}
                              isUploading={(() => {
                                const up = uploadingFiles[msg._id] !== undefined;
                                const sending = !!(msg as unknown as { isSending?: boolean }).isSending;
                                const blob = typeof msg.fileUrl === 'string' && msg.fileUrl.startsWith('blob:');
                                const isMediaOrFile =
                                  msg.type === 'image' || msg.type === 'video' || (msg.type === 'file' && !isVideo);
                                return isMediaOrFile && (up || sending || blob);
                              })()}
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </>
              );
            })()}
          </React.Fragment>
        );
      })}
      <NoteDetailModal isOpen={!!noteDetailData} onClose={() => setNoteDetailData(null)} data={noteDetailData} />
      <ReminderDetailModal isOpen={!!detailMsg} message={detailMsg} onClose={() => setDetailMsg(null)} />
      <PollDetailModal
        isOpen={!!detailMsg && detailMsg.type === 'poll'}
        message={detailMsg && detailMsg.type === 'poll' ? detailMsg : null}
        onClose={() => setDetailMsg(null)}
        onRefresh={onRefresh}
      />
    </>
  );
}
