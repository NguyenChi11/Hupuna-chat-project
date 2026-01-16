/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { ClipboardEvent, KeyboardEvent, RefObject, useEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

// React Icons hi2 – Đỉnh cao nhất 2025
import {
  HiFaceSmile,
  HiPaperClip,
  HiPhoto,
  HiMicrophone,
  HiPaperAirplane,
  HiSparkles,
  HiFolder,
  HiEllipsisHorizontal,
  HiMapPin,
  HiChartBar,
  HiIdentification,
  HiPencil,
  HiHandThumbUp,
  HiCalendar,
  HiClock,
  HiShieldCheck,
  HiTrash,
  HiCheck,
} from 'react-icons/hi2';
import {
  CiCircleMore,
  CiCreditCard2,
  CiEdit,
  CiFaceSmile,
  CiFileOn,
  CiImageOn,
  CiInstagram,
  CiPen,
  CiSettings,
} from 'react-icons/ci';
import { HiDocumentText, HiLightningBolt, HiSearch, HiX } from 'react-icons/hi';
import { IoIosAttach } from 'react-icons/io';
import Image from 'next/image';
import { useChatContext } from '@/context/ChatContext';

import UploadProgressBar from '@/components/(chatPopup)/UploadProgressBar';
import ICIcon1 from '@/components/svg/ICIcon1';
import ImageIconZalo from '@/components/svg/ICIconImageZalo';
import MicIcon from '@/components/svg/MicIcon';
import IconFile from '@/components/svg/IConFile';
import { AiTwotoneLike } from 'react-icons/ai';
import CreatePollModal from './components/CreatePollModal';
import CreateNoteModal from './components/CreateNoteModal';
import CreateReminderModal from './components/CreateReminderModal';
import RichTextEditor from './components/RichTextEditor';
import { createMessageApi } from '@/fetch/messages';
import { Socket } from 'socket.io-client';
import { GroupConversation, GroupRole } from '@/types/Group';
import { User } from '@/types/User';
import type { MessageCreate } from '@/types/Message';
import { useToast } from '@/components/base/toast';
import { ConfirmModal } from '../ui/ConfirmModal';
import { accentAwareIncludes, getProxyUrl, normalizeNoAccent } from '@/utils/utils';
import { IoFlashOutline } from 'react-icons/io5';
import { useRouter as useNextRouter } from 'next/navigation';

interface ChatInputProps {
  socket?: Socket | null;
  showEmojiPicker: boolean;
  onToggleEmojiPicker: () => void;
  isListening: boolean;
  onVoiceInput: () => void;
  editableRef: RefObject<HTMLDivElement | null>;
  onInputEditable: () => void;
  onKeyDownEditable: (e: KeyboardEvent<HTMLDivElement>) => void;
  onPasteEditable: (e: ClipboardEvent<HTMLDivElement>) => void;
  onFocusEditable: () => void;
  onSendMessage: () => void;
  onSendMessageData?: (data: MessageCreate) => Promise<void>;
  onSelectImage: (file: File) => void;
  onSelectFile: (file: File) => void;
  onAttachFromFolder: (att: { url: string; type: 'image' | 'video' | 'file'; fileName?: string }) => void;
  attachments: { previewUrl: string; type: 'image' | 'video' | 'file'; fileName?: string }[];
  onRemoveAttachment: (index: number) => void;
  onClearAttachments: () => void;
  isUploading?: boolean;
  uploadingCount?: number;
  overallUploadPercent?: number;
}

function VideoThumb({ src }: { src: string }) {
  const [thumb, setThumb] = useState<string>('');
  useEffect(() => {
    let mounted = true;
    const v = document.createElement('video');
    v.src = src;
    v.crossOrigin = 'anonymous';
    v.preload = 'metadata';
    v.muted = true;
    v.playsInline = true;
    const handleLoaded = () => {
      try {
        const w = 48;
        const h = 48;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        const vw = v.videoWidth || w;
        const vh = v.videoHeight || h;
        const ratio = Math.min(w / vw, h / vh);
        const sw = vw * ratio;
        const sh = vh * ratio;
        const dx = (w - sw) / 2;
        const dy = (h - sh) / 2;
        ctx?.clearRect(0, 0, w, h);
        if (ctx) {
          ctx.fillStyle = '#f3f4f6';
          ctx.fillRect(0, 0, w, h);
        }
        ctx?.drawImage(v, dx, dy, sw, sh);
        const url = canvas.toDataURL('image/png');
        if (mounted) setThumb(url);
      } catch {}
    };
    v.addEventListener('loadeddata', handleLoaded);
    v.load();
    return () => {
      mounted = false;
      v.removeEventListener('loadeddata', handleLoaded);
      try {
        v.pause();
      } catch {}
    };
  }, [src]);
  return (
    <div className="relative w-12 h-12  rounded-md border border-slate-200 shadow-sm bg-black overflow-hidden">
      {thumb ? (
        <Image width={28} height={16} src={thumb} alt="video" className="w-full h-full object-cover opacity-80" />
      ) : (
        <video
          src={src}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80"
        />
      )}
    </div>
  );
}

export default function ChatInput({
  socket,
  onToggleEmojiPicker,
  isListening,
  onVoiceInput,
  editableRef,
  onInputEditable,
  onKeyDownEditable,
  onPasteEditable,
  onFocusEditable,
  onSendMessage,
  onSendMessageData,
  onSelectImage,
  onSelectFile,
  onAttachFromFolder,
  attachments,
  onRemoveAttachment,
  onClearAttachments,
  isUploading = false,
  uploadingCount = 0,
  overallUploadPercent = 0,
}: ChatInputProps) {
  const { currentUser, selectedChat, isGroup, allUsers } = useChatContext();
  const showToast = useToast();

  const myRole = useMemo(() => {
    if (!isGroup) return 'MEMBER';
    const group = selectedChat as GroupConversation;
    if (!group.members || !Array.isArray(group.members)) return 'MEMBER';

    const myId = String(currentUser._id || (currentUser as { id?: string })?.id || '');
    const member = group.members.find((m) => {
      const mId = typeof m === 'string' ? m : m._id || (m as { id?: string }).id;
      return String(mId) === myId;
    });

    if (member && typeof member !== 'string') {
      return (member.role || 'MEMBER') as GroupRole;
    }
    return 'MEMBER';
  }, [isGroup, selectedChat, currentUser]);

  const canClearHistory = !isGroup || (isGroup && myRole === 'OWNER');

  const getId = (u: unknown): string => {
    const obj = u as { _id?: unknown; id?: unknown };
    if (obj && (obj._id != null || obj.id != null)) return String((obj._id ?? obj.id) as unknown);
    return String(u ?? '');
  };
  const roomId = isGroup ? getId(selectedChat) : [getId(currentUser), getId(selectedChat)].sort().join('_');
  const router = useNextRouter();
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [showCreateReminder, setShowCreateReminder] = useState(false); // Renamed from showCreateNote for clarity (old logic was reminder)
  const [showCreateNote, setShowCreateNote] = useState(false); // New dedicated Note modal
  const [showQuickCreatePoll, setShowQuickCreatePoll] = useState(false);
  const [quickPollQuestion, setQuickPollQuestion] = useState('');
  const [quickPollOptions, setQuickPollOptions] = useState<string[]>(['', '']);
  const [showQuickCreateNote, setShowQuickCreateNote] = useState(false);
  const [quickNoteContent, setQuickNoteContent] = useState('');
  const [quickNoteDateTime, setQuickNoteDateTime] = useState('');
  const [showRichText, setShowRichText] = useState(false);
  const [richTextContent, setRichTextContent] = useState('');
  const [createLoading, setCreateLoading] = useState(false);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const tagsContainerRef = useRef<HTMLDivElement | null>(null);
  const tagsDragRef = useRef<{ active: boolean; startX: number; startScroll: number; pid?: number; moved: boolean }>({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const onTagsPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const el = tagsContainerRef.current;
    if (!el) return;
    tagsDragRef.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      pid: e.pointerId,
      moved: false,
    };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {}
  };
  const onTagsPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!tagsDragRef.current.active) return;
    const el = tagsContainerRef.current;
    if (!el) return;
    const dx = e.clientX - tagsDragRef.current.startX;

    if (!tagsDragRef.current.moved && Math.abs(dx) > 5) {
      tagsDragRef.current.moved = true;
    }

    if (tagsDragRef.current.moved) {
      el.scrollLeft = tagsDragRef.current.startScroll - dx;
      e.preventDefault();
    }
  };
  const onTagsPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = tagsContainerRef.current;

    // Handle Click if not moved
    if (tagsDragRef.current.active && !tagsDragRef.current.moved) {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const tagEl = target?.closest('[data-tag-id]');
      if (tagEl) {
        const id = tagEl.getAttribute('data-tag-id');
        if (id) handleToggleTag(id);
      }
    }

    tagsDragRef.current.active = false;
    if (el && typeof tagsDragRef.current.pid === 'number') {
      try {
        el.releasePointerCapture(tagsDragRef.current.pid);
      } catch {}
    }
  };

  const handleTagsClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (tagsDragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      tagsDragRef.current.moved = false;
    }
  };

  const handleCreatePoll = async ({
    question,
    options,
    pollAllowMultiple,
    pollAllowAddOptions,
    pollHideVoters,
    pollHideResultsUntilVote,
    pollEndAt,
  }: {
    question: string;
    options: string[];
    pollAllowMultiple?: boolean;
    pollAllowAddOptions?: boolean;
    pollHideVoters?: boolean;
    pollHideResultsUntilVote?: boolean;
    pollEndAt?: number | null;
  }) => {
    const q = question.trim();
    if (!q) return;

    try {
      const createRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'poll',
        content: q,
        timestamp: Date.now(),
        pollQuestion: q,
        pollOptions: options,
        pollVotes: {},
        isPollLocked: false,
        pollAllowMultiple,
        pollAllowAddOptions,
        pollHideVoters,
        pollHideResultsUntilVote,
        pollEndAt: pollEndAt ?? null,
      });

      if (createRes?.success) {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const sockBase = {
          roomId,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
        };

        if (typeof createRes._id === 'string') {
          socket?.emit('send_message', {
            ...sockBase,
            _id: createRes._id,
            type: 'poll',
            content: q,
            timestamp: Date.now(),
            pollQuestion: q,
            pollOptions: options,
            pollVotes: {},
            isPollLocked: false,
            pollAllowMultiple,
            pollAllowAddOptions,
            pollHideVoters,
            pollHideResultsUntilVote,
            pollEndAt: pollEndAt ?? null,
          });

          // Notify
          const notify = await createMessageApi({
            roomId,
            sender: String(currentUser._id),
            type: 'notify',
            content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
            timestamp: Date.now(),
            replyToMessageId: createRes._id,
          });
          if (notify?.success) {
            socket?.emit('send_message', {
              ...sockBase,
              _id: notify._id,
              type: 'notify',
              content: `${currentUser.name} tạo cuộc bình chọn mới: "${q}"`,
              timestamp: Date.now(),
              replyToMessageId: createRes._id,
            });
          }
        }
        setShowCreatePoll(false);
      }
    } catch (error) {
      console.error('Failed to create poll:', error);
    }
  };

  const handleCreateReminder = async ({
    content,
    dateTime,
    note,
    repeat,
  }: {
    content: string;
    dateTime: string;
    note?: string;
    repeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  }) => {
    setCreateLoading(true);
    const trimmed = content.trim();
    const dt = Date.parse(dateTime);
    if (!trimmed || Number.isNaN(dt)) {
      setCreateLoading(false);
      return;
    }
    try {
      const createRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'reminder',
        content: trimmed,
        timestamp: Date.now(),
        reminderAt: dt,
        reminderNote: note?.trim() || '',
        reminderFired: false,
        reminderRepeat: repeat || 'none',
      });
      if (createRes?.success) {
        const receiver = isGroup ? null : String((selectedChat as User)._id);
        const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
        const sockBase = {
          roomId,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
        };
        if (typeof createRes._id === 'string') {
          socket?.emit('send_message', {
            ...sockBase,
            _id: createRes._id,
            type: 'reminder',
            content: trimmed,
            timestamp: Date.now(),
            reminderAt: dt,
            reminderNote: note?.trim() || '',
            reminderFired: false,
            reminderRepeat: repeat || 'none',
          });
        }
        setShowCreateReminder(false);
      }
    } catch (error) {
      console.error('Failed to create reminder:', error);
    } finally {
      setCreateLoading(false);
    }
  };

  const handleCreateNote = async ({ content, pinned }: { content: string; pinned: boolean }) => {
    setCreateLoading(true);
    const trimmed = content.trim();
    if (!trimmed) {
      setCreateLoading(false);
      return;
    }
    try {
      const msgData: MessageCreate = {
        roomId,
        sender: String(currentUser._id),
        type: 'notify',
        content: `${currentUser.name} đã tạo ghi chú: "${trimmed}"`,
        timestamp: Date.now(),
        isPinned: pinned,
      };
      if (typeof onSendMessageData === 'function') {
        await onSendMessageData(msgData);
      } else {
        const createRes = await createMessageApi(msgData);
        if (createRes?.success && typeof createRes._id === 'string') {
          const receiver = isGroup ? null : String((selectedChat as User)._id);
          const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
          const sockBase = {
            roomId,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            isGroup,
            receiver,
            members,
          };
          socket?.emit('send_message', { ...sockBase, ...msgData, _id: createRes._id });
        }
      }
      setShowCreateNote(false);
    } catch (error) {
      console.error('Failed to create note:', error);
    } finally {
      setCreateLoading(false);
    }
  };

  const [showFlashPicker, setShowFlashPicker] = useState(false);
  const [flashFolders, setFlashFolders] = useState<Array<{ id: string; name: string }>>([]);
  const [selectedFlashFolder, setSelectedFlashFolder] = useState<{ id: string; name: string } | null>(null);
  const [kvItems, setKvItems] = useState<Array<{ key: string; value: string }>>([]);
  const [slashOpen, setSlashOpen] = useState(false);
  const [slashQuery, setSlashQuery] = useState('');
  const [slashSelectedIndex, setSlashSelectedIndex] = useState<number>(0);
  const [showFolderDashboard, setShowFolderDashboard] = useState(false);
  const [pendingSaveMessage, setPendingSaveMessage] = useState<{
    roomId: string;
    messageId: string;
    content: string;
    type: string;
    fileUrl?: string;
    fileName?: string;
  } | null>(null);

  const [showMobileActions, setShowMobileActions] = useState(false);
  const mobileActionsRef = useRef<HTMLDivElement | null>(null);
  const toggleMobileActionsBtnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef(false);
  const allowFocusRef = useRef(true);
  const [hasContent, setHasContent] = useState(false);
  const [showUpdatingPopup, setShowUpdatingPopup] = useState(false);
  const [showMoreActionsMenu, setShowMoreActionsMenu] = useState(false);
  const moreActionsMenuRef = useRef<HTMLDivElement | null>(null);
  const moreActionsMenuBtnRef = useRef<HTMLButtonElement | null>(null);
  const [showFlashFoldersMenu, setShowFlashFoldersMenu] = useState(false);
  const flashFoldersMenuRef = useRef<HTMLDivElement | null>(null);
  const flashFoldersMenuBtnRef = useRef<HTMLButtonElement | null>(null);
  const [flashScope, setFlashScope] = useState<'user' | 'global'>('user');
  const [flashLoading, setFlashLoading] = useState(false);
  const [activePreviewFolderId, setActivePreviewFolderId] = useState<string | null>(null);
  const [flashEntries, setFlashEntries] = useState<
    Array<{
      key: string;
      value: string;
      att?: { type: 'image' | 'video' | 'file'; name: string; size: number; dataUrl?: string }[];
    }>
  >([]);
  const [flashEntriesLoading, setFlashEntriesLoading] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [showReportConfirm, setShowReportConfirm] = useState(false);
  const [showContactCardModal, setShowContactCardModal] = useState(false);
  const [contactCardSearch, setContactCardSearch] = useState('');
  const [activeContactCategory, setActiveContactCategory] = useState<string>('all');
  const [selectedContactCardIds, setSelectedContactCardIds] = useState<string[]>([]);
  const contactCategoryBarRef = useRef<HTMLDivElement | null>(null);
  const contactCategoryDragRef = useRef<{ active: boolean; startX: number; startScrollLeft: number; moved: boolean }>({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const myId = String(currentUser._id || '');
  const [categoryTags, setCategoryTags] = useState<Array<{ id: string; label: string; color: string }>>([]);

  useEffect(() => {
    const loadCategoryTags = async () => {
      if (!currentUser?._id) return;

      if (Array.isArray(currentUser.categoryTags)) {
        setCategoryTags(
          currentUser.categoryTags.filter(
            (x): x is { id: string; label: string; color: string } => !!x && typeof x.id === 'string',
          ),
        );
      }

      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: String(currentUser._id) }),
        });
        const data = await res.json();
        const row = (data && data.row) || (Array.isArray(data?.data) ? data.data[0] : null);
        if (row && Array.isArray(row.categoryTags)) {
          setCategoryTags(
            row.categoryTags.filter(
              (x: unknown): x is { id: string; label: string; color: string } =>
                !!x && typeof x === 'object' && typeof (x as { id?: unknown }).id === 'string',
            ),
          );
        }
      } catch {}
    };

    loadCategoryTags();

    const handleUserCategoryTagsUpdated = (e: Event) => {
      const ev = e as CustomEvent<{ userId: string; tags: { id: string; label: string; color: string }[] }>;
      if (ev.detail && String(ev.detail.userId) === String(currentUser?._id)) {
        setCategoryTags(Array.isArray(ev.detail.tags) ? ev.detail.tags : []);
      }
    };
    window.addEventListener('userCategoryTagsUpdated', handleUserCategoryTagsUpdated as EventListener);
    return () => window.removeEventListener('userCategoryTagsUpdated', handleUserCategoryTagsUpdated as EventListener);
  }, [currentUser?._id, currentUser?.categoryTags]);

  useEffect(() => {
    if (activeContactCategory === 'all') return;
    if (categoryTags.some((t) => t.id === activeContactCategory)) return;
    setActiveContactCategory('all');
  }, [activeContactCategory, categoryTags]);

  const handleContactCategoryPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const el = contactCategoryBarRef.current;
    if (!el) return;
    contactCategoryDragRef.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: el.scrollLeft,
      moved: false,
    };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleContactCategoryPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = contactCategoryBarRef.current;
    const drag = contactCategoryDragRef.current;
    if (!el || !drag.active) return;
    const dx = e.clientX - drag.startX;
    if (!drag.moved && Math.abs(dx) > 4) {
      contactCategoryDragRef.current = { ...drag, moved: true };
    }
    el.scrollLeft = drag.startScrollLeft - dx;
  };

  const handleContactCategoryPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = contactCategoryBarRef.current;
    const drag = contactCategoryDragRef.current;
    if (!drag.active) return;
    contactCategoryDragRef.current = { ...drag, active: false };
    try {
      el?.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleContactCategoryClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contactCategoryDragRef.current.moved) return;
    e.preventDefault();
    e.stopPropagation();
    contactCategoryDragRef.current = { ...contactCategoryDragRef.current, moved: false };
  };

  const getContactDisplayName = (u: User): string => {
    const nick = (u.nicknames && typeof u.nicknames === 'object' ? u.nicknames[myId] : '') as string | undefined;
    return String(nick || u.name || u.username || 'Người dùng').trim();
  };

  const getContactCategories = (u: User): string[] => {
    const by =
      (u as unknown as { categoriesBy?: Record<string, string[]> }).categoriesBy?.[myId] ||
      ((u as unknown as { categories?: string[] }).categories as string[] | undefined) ||
      [];
    if (!Array.isArray(by)) return [];
    return by.filter((x): x is string => typeof x === 'string' && x.length > 0);
  };

  const filteredContactUsers = useMemo(() => {
    const term = String(contactCardSearch || '').trim();
    const active = activeContactCategory;
    const base = Array.isArray(allUsers) ? allUsers : [];

    const filtered = base.filter((u) => {
      if (!u || typeof u !== 'object') return false;
      if ((u as unknown as { isHidden?: boolean }).isHidden) return false;
      if (active !== 'all') {
        const cats = getContactCategories(u);
        if (!cats.includes(active)) return false;
      }
      if (!term) return true;
      const displayName = getContactDisplayName(u);
      const username = String(u.username || '');
      return accentAwareIncludes(displayName, term) || accentAwareIncludes(username, term);
    });

    filtered.sort((a, b) => getContactDisplayName(a).localeCompare(getContactDisplayName(b), 'vi'));
    return filtered;
  }, [allUsers, contactCardSearch, activeContactCategory, myId]);

  const groupedContactUsers = useMemo(() => {
    const map = new Map<string, User[]>();
    filteredContactUsers.forEach((u) => {
      const name = getContactDisplayName(u);
      const keyRaw = normalizeNoAccent(name || '').trim();
      const ch = keyRaw ? keyRaw[0].toUpperCase() : '#';
      const key = /[A-Z]/.test(ch) ? ch : '#';
      const arr = map.get(key) || [];
      arr.push(u);
      map.set(key, arr);
    });
    const keys = Array.from(map.keys()).sort((a, b) => (a === '#' ? 1 : b === '#' ? -1 : a.localeCompare(b)));
    return keys.map((k) => ({ key: k, users: map.get(k) || [] }));
  }, [filteredContactUsers]);

  // --- TAGS LOGIC ---
  const TAG_COLORS: Record<string, string> = {
    'bg-red-500': '#ef4444',
    'bg-pink-500': '#ec4899',
    'bg-orange-400': '#fb923c',
    'bg-yellow-400': '#facc15',
    'bg-green-500': '#22c55e',
    'bg-teal-500': '#14b8a6',
    'bg-blue-500': '#3b82f6',
    'bg-purple-500': '#a855f7',
  };

  const [userTags, setUserTags] = useState<Array<{ id: string; label: string; color: string }>>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<'important' | 'urgent' | null>(null);
  const tagStorageKey = useMemo(() => {
    if (!selectedChat?._id || !currentUser?._id) return '';
    return `chatTags:${currentUser._id}:${selectedChat._id}`;
  }, [selectedChat?._id, currentUser?._id]);

  // Load User Tags
  useEffect(() => {
    const loadUserTags = async () => {
      if (!currentUser?._id) return;
      // 1. From currentUser prop if available (via context)
      if (currentUser.userTags && Array.isArray(currentUser.userTags)) {
        setUserTags(currentUser.userTags);
      }

      // 2. Or fetch fresh
      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: String(currentUser._id) }),
        });
        const data = await res.json();
        const row = (data && data.row) || (Array.isArray(data?.data) ? data.data[0] : null);
        if (row && Array.isArray(row.userTags)) {
          setUserTags(row.userTags);
        }
      } catch {}
    };
    loadUserTags();

    const handleUserTagsUpdated = (e: Event) => {
      const ev = e as CustomEvent<{ userId: string; tags: { id: string; label: string; color: string }[] }>;
      if (ev.detail && String(ev.detail.userId) === String(currentUser?._id)) {
        setUserTags(ev.detail.tags || []);
      }
    };
    window.addEventListener('userTagsUpdated', handleUserTagsUpdated as EventListener);
    return () => window.removeEventListener('userTagsUpdated', handleUserTagsUpdated as EventListener);
  }, [currentUser?._id]);

  // Load Selected Tags for Chat
  useEffect(() => {
    if (!tagStorageKey) return;

    // 1. Try from selectedChat prop
    const fromServer =
      (selectedChat as unknown as { tags?: string[] }).tags ||
      (selectedChat as unknown as { tagsBy?: Record<string, string[]> }).tagsBy?.[String(currentUser._id)] ||
      [];

    if (Array.isArray(fromServer) && fromServer.length > 0) {
      setSelectedTagIds(fromServer.filter((x) => typeof x === 'string'));
    } else {
      // 2. Local storage
      try {
        const raw = localStorage.getItem(tagStorageKey);
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) setSelectedTagIds(arr);
        } else {
          setSelectedTagIds([]);
        }
      } catch {
        setSelectedTagIds([]);
      }
    }
  }, [tagStorageKey, selectedChat]);

  // Listen for chat tag updates (from ChatItem or Sidebar)
  useEffect(() => {
    const handler = (ev: Event) => {
      try {
        const anyEv = ev as unknown as { detail?: { userId?: string; roomId?: string; tags?: string[] } };
        const detail = anyEv.detail || {};
        if (String(detail.userId) !== String(currentUser._id)) return;
        if (String(detail.roomId) !== String(selectedChat?._id)) return;
        const arr = Array.isArray(detail.tags) ? detail.tags.filter((x: unknown) => typeof x === 'string') : [];
        setSelectedTagIds(arr);
      } catch {}
    };
    window.addEventListener('chatTagsUpdated', handler as EventListener);
    return () => window.removeEventListener('chatTagsUpdated', handler as EventListener);
  }, [currentUser._id, selectedChat?._id]);

  const handleToggleTag = async (tagId: string) => {
    if (!tagStorageKey) return;

    const newTags = selectedTagIds.includes(tagId)
      ? selectedTagIds.filter((id) => id !== tagId)
      : [...selectedTagIds, tagId];

    setSelectedTagIds(newTags);

    // Update local storage
    try {
      localStorage.setItem(tagStorageKey, JSON.stringify(newTags));
    } catch {}

    // Dispatch event to update other components
    window.dispatchEvent(
      new CustomEvent('chatTagsUpdated', {
        detail: {
          userId: currentUser._id,
          roomId: selectedChat?._id,
          tags: newTags,
        },
      }),
    );

    // Emit socket
    if (socket) {
      const receiver = isGroup ? null : String((selectedChat as User)._id);
      const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
      socket.emit('chat_tags_updated', {
        roomId,
        sender: String(currentUser._id),
        isGroup,
        receiver,
        members,
        tags: newTags,
      });
    }

    // API Update
    try {
      const isGroupChat = isGroup;
      const apiRoute = isGroupChat ? '/api/groups' : '/api/users';
      const payload = isGroupChat
        ? {
            action: 'updateTags',
            _id: String(currentUser._id),
            conversationId: String(selectedChat?._id),
            data: { tags: newTags },
          }
        : {
            action: 'updateTags',
            currentUserId: String(currentUser._id),
            roomId: String(selectedChat?._id),
            data: { tags: newTags },
          };
      await fetch(apiRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error('Failed to update tags', e);
    }
  };

  const handleShowUpdatingPopup = () => {
    setShowUpdatingPopup(true);
    window.setTimeout(() => setShowUpdatingPopup(false), 1500);
  };

  const resetQuickPoll = () => {
    setQuickPollQuestion('');
    setQuickPollOptions(['', '']);
  };

  const handleQuickPollCreate = async () => {
    const q = quickPollQuestion.trim();
    const raw = quickPollOptions.map((o) => o.trim()).filter((o) => o);
    const lowerSet = Array.from(new Set(raw.map((o) => o.toLowerCase())));
    const unique = lowerSet.map((lo) => raw.find((x) => x.toLowerCase() === lo) as string);
    if (!q || unique.length < 2) return;

    await handleCreatePoll({
      question: q,
      options: unique,
      pollAllowMultiple: true,
      pollAllowAddOptions: true,
      pollHideVoters: false,
      pollHideResultsUntilVote: false,
      pollEndAt: null,
    });
    setShowQuickCreatePoll(false);
    resetQuickPoll();
  };

  const handleQuickNoteCreate = async () => {
    const c = quickNoteContent.trim();
    const dt = quickNoteDateTime.trim();
    if (!c || !dt) return;
    await handleCreateReminder({ content: c, dateTime: dt, repeat: 'none' });
    setShowQuickCreateNote(false);
    setQuickNoteContent('');
    setQuickNoteDateTime('');
  };

  useEffect(() => {
    if (!showMoreActionsMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (moreActionsMenuRef.current && moreActionsMenuRef.current.contains(target)) return;
      if (moreActionsMenuBtnRef.current && moreActionsMenuBtnRef.current.contains(target)) return;
      setShowMoreActionsMenu(false);
    };
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setShowMoreActionsMenu(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showMoreActionsMenu]);

  useEffect(() => {
    if (!showFlashFoldersMenu) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (flashFoldersMenuRef.current && flashFoldersMenuRef.current.contains(target)) return;
      if (flashFoldersMenuBtnRef.current && flashFoldersMenuBtnRef.current.contains(target)) return;
      setShowFlashFoldersMenu(false);
    };
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setShowFlashFoldersMenu(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showFlashFoldersMenu]);

  const fetchFlashFolders = async (scope: 'user' | 'global') => {
    setFlashLoading(true);
    try {
      const res = await fetch('/api/flash-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'listFolders', scope }),
      });
      const data = await res.json();
      const rows = Array.isArray(data?.data) ? data.data : [];
      setFlashFolders(
        rows
          .filter((f: unknown) => f && typeof f === 'object')
          .map((f: { _id?: string; name?: string }) => ({ id: String(f._id || ''), name: String(f.name || '') })),
      );
    } catch {
      setFlashFolders([]);
    } finally {
      setFlashLoading(false);
    }
  };

  const fetchFlashEntries = async (scope: 'user' | 'global', folderId: string) => {
    if (!folderId) return;
    setFlashEntriesLoading(true);
    setFlashEntries([]);
    try {
      const res = await fetch('/api/flash-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'listEntries', scope, folderId }),
      });
      const data = await res.json();
      const entries = Array.isArray(data?.data) ? data.data : [];
      setFlashEntries(
        entries
          .filter((e: unknown) => e && typeof e === 'object')
          .map(
            (e: {
              key?: string;
              value?: string;
              att?: { type: 'image' | 'video' | 'file'; name: string; size: number; dataUrl?: string }[];
            }) => ({
              key: String(e.key || ''),
              value: String(e.value || ''),
              att: Array.isArray(e.att) ? e.att : [],
            }),
          ),
      );
    } catch {
      setFlashEntries([]);
    } finally {
      setFlashEntriesLoading(false);
    }
  };

  const checkContent = () => {
    if (editableRef.current) {
      const text = editableRef.current.innerText || '';
      setHasContent(text.trim().length > 0);
    } else {
      setHasContent(false);
    }
  };

  useEffect(() => {
    checkContent();
  }, []);

  // Sync selectedTag to DOM for parent access
  useEffect(() => {
    if (editableRef.current) {
      if (selectedTag) {
        editableRef.current.dataset.messageTag = selectedTag;
      } else {
        delete editableRef.current.dataset.messageTag;
      }
    }
  }, [selectedTag]);

  const handleSendWrapper = () => {
    // if (isUploading) return; // 🔥 Cho phép chat khi đang upload
    onSendMessage();
    // Optimistically update state as parent usually clears input
    setHasContent(false);
    setSelectedTag(null);
    setTimeout(checkContent, 100); // Double check
  };

  const handleSendContactCard = async () => {
    const ids = selectedContactCardIds.map((x) => String(x)).filter(Boolean);
    if (ids.length === 0) return;
    const base = Array.isArray(allUsers) ? allUsers : [];
    const selectedUsers = ids.map((id) => base.find((u) => String(u._id) === String(id))).filter((u): u is User => !!u);
    if (selectedUsers.length === 0) return;

    try {
      for (const selectedUser of selectedUsers) {
        const payload: MessageCreate = {
          roomId,
          sender: String(currentUser._id),
          type: 'contact',
          timestamp: Date.now(),
          contactCard: {
            _id: String(selectedUser._id),
            name: getContactDisplayName(selectedUser),
            username: selectedUser.username,
            avatar: selectedUser.avatar,
          },
          messageTag: selectedTag || undefined,
        };

        if (onSendMessageData) {
          await onSendMessageData(payload);
        } else {
          const createRes = await createMessageApi(payload);
          if (createRes?.success) {
            const receiver = isGroup ? null : String((selectedChat as User)._id);
            const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
            const sockBase = {
              roomId,
              sender: String(currentUser._id),
              senderName: currentUser.name,
              isGroup,
              receiver,
              members,
            };

            if (typeof createRes._id === 'string') {
              socket?.emit('send_message', { ...sockBase, ...payload, _id: createRes._id });
            }
          }
        }
      }
    } finally {
      setShowContactCardModal(false);
      setSelectedContactCardIds([]);
      setContactCardSearch('');
      setActiveContactCategory('all');
      setSelectedTag(null);
    }
  };

  useEffect(() => {
    if (!showMobileActions) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (mobileActionsRef.current && target && mobileActionsRef.current.contains(target)) return;
      if (toggleMobileActionsBtnRef.current && target && toggleMobileActionsBtnRef.current.contains(target)) return;
      // Nếu click vào vùng toolbar (input, emoji, mic, ảnh...) thì không đóng menu ở đây
      // Vì onClick của các nút đó sẽ xử lý hành động + đóng menu sau
      if (toolbarRef.current && target && toolbarRef.current.contains(target)) return;

      setShowMobileActions(false);
      try {
        window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
      } catch {}
    };
    document.addEventListener('mousedown', onDoc, true);
    document.addEventListener('touchstart', onDoc, true);
    return () => {
      document.removeEventListener('mousedown', onDoc, true);
      document.removeEventListener('touchstart', onDoc, true);
    };
  }, [showMobileActions]);

  useEffect(() => {
    if (!showMobileActions && pendingFocusRef.current) {
      pendingFocusRef.current = false;
      const el = editableRef.current;
      if (el) {
        try {
          requestAnimationFrame(() => {
            try {
              el.focus();
              const range = document.createRange();
              range.selectNodeContents(el);
              range.collapse(false);
              const sel = window.getSelection();
              sel?.removeAllRanges();
              sel?.addRange(range);
            } catch {}
            setTimeout(() => {
              try {
                el.focus();
              } catch {}
            }, 120);
          });
        } catch {}
      }
    }
  }, [showMobileActions]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        allowFocusRef.current = false;
        try {
          editableRef.current?.blur?.();
        } catch {}
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const handleSelectFlashFolder = (f: { id: string; name: string }) => {
    setSelectedFlashFolder(f);
    try {
      localStorage.setItem(`chatFlashActiveFolder:${roomId}`, JSON.stringify(f));
    } catch {}
    setShowFlashPicker(false);
  };

  const handleToggleMobileActions = () => {
    if (showMobileActions) {
      setShowMobileActions(false);
      try {
        window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
      } catch {}
      // Focus lại input khi đóng menu thủ công
      setTimeout(() => {
        try {
          const el = editableRef.current;
          if (el) {
            el.focus();
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(range);
          }
        } catch {}
      }, 50);
      return;
    }

    const el = editableRef.current;
    const isFocused = document.activeElement === el;
    const vv = (
      window as unknown as {
        visualViewport?: {
          height: number;
          addEventListener: (type: string, cb: EventListenerOrEventListenerObject) => void;
          removeEventListener: (type: string, cb: EventListenerOrEventListenerObject) => void;
        };
        innerHeight: number;
      }
    ).visualViewport;

    const hasKeyboard = isFocused || (vv && vv.height < window.innerHeight * 0.75);

    if (hasKeyboard) {
      try {
        if (isFocused) el?.blur();
      } catch {}

      if (vv && typeof vv.addEventListener === 'function') {
        const startH = vv.height;
        let opened = false;
        const open = () => {
          if (opened) return;
          opened = true;
          setShowMobileActions(true);
          try {
            window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: true } }));
          } catch {}
        };
        const onResize: EventListener = () => {
          if (vv.height - startH > 40) {
            try {
              vv.removeEventListener('resize', onResize);
            } catch {}
            window.clearTimeout(timer as number);
            open();
          }
        };
        vv.addEventListener('resize', onResize);
        const timer = window.setTimeout(() => {
          try {
            vv.removeEventListener('resize', onResize);
          } catch {}
          open();
        }, 500);
        return;
      }

      setTimeout(() => {
        setShowMobileActions(true);
        try {
          window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: true } }));
        } catch {}
      }, 150);
      return;
    }

    setShowMobileActions(true);
    try {
      window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: true } }));
    } catch {}
  };
  const updateSlashState = () => {
    const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
    const m = text.match(/\/\s*([\w-]*)$/);
    const q = m ? m[1] : '';
    setSlashQuery(q);
    const shouldOpen = /\//.test(text);
    setSlashOpen(shouldOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (document.activeElement !== editableRef.current) return;

      const target = e.target as Node;
      if (containerRef.current && containerRef.current.contains(target)) return;

      try {
        editableRef.current?.blur();
      } catch {}
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full p-2 bg-gradient-to-t from-white via-white to-gray-50/50 md:bg-white md:border md:border-gray-200 md:rounded-xl md:px-1 md:py-2 md:pt-0"
    >
      {attachments && attachments.length > 0 ? (
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-600">
              {attachments.length} {attachments.length === 1 ? 'đính kèm' : 'đính kèm'}
            </span>
            <button onClick={onClearAttachments} className="text-xs text-red-600 hover:underline cursor-pointer">
              Xóa tất cả
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {attachments.map((att, idx) => (
              <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 bg-white">
                {att.type === 'image' ? (
                  <Image src={att.previewUrl} alt="" fill sizes="80px" className="object-cover" unoptimized priority />
                ) : att.type === 'video' ? (
                  <video src={att.previewUrl} className="w-full h-full object-cover" muted playsInline />
                ) : (
                  <div className=" rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-blue-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 text-white shadow-lg">
                      <HiDocumentText className="w-3 h-3" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                        {att.fileName || 'Tệp'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">
                        .{att.fileName?.split('.').pop()}
                      </p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => onRemoveAttachment(idx)}
                  className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                  aria-label="Xóa"
                >
                  <HiX className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setShowReportConfirm(true)}
                  className="group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90"
                  aria-label="Báo xấu"
                >
                  <HiShieldCheck className="w-7 h-7 text-gray-500 group-hover:text-red-600 transition-colors" />
                </button>
                {canClearHistory && (
                  <button
                    onClick={() => setShowConfirmClear(true)}
                    className={`p-2 rounded-full cursor-pointer text-gray-700  ${
                      isUploading ? 'opacity-50 pointer-events-none grayscale' : ''
                    }`}
                    aria-label="Xóa lịch sử"
                  >
                    <HiTrash className="w-7 h-7 text-gray-500" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="hidden md:flex items-center mt-1 gap-2 mb-0  rounded-xl bg-white ">
        <button
          onClick={() => {
            try {
              editableRef.current?.blur?.();
            } catch {}
            setTimeout(() => onToggleEmojiPicker(), 100);
          }}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Chọn emoji"
        >
          <CiFaceSmile className="w-6 h-6" />
        </button>
        <label
          className=" rounded-lg cursor-pointer p-1 hover:bg-gray-100 transition-all duration-200 text-gray-700"
          aria-label="Gửi ảnh hoặc video"
        >
          <CiImageOn className="w-6 h-6" />
          <input
            type="file"
            accept="image/*,video/*"
            className="sr-only"
            onChange={(e) => {
              const files = e.target.files ? Array.from(e.target.files) : [];
              files.forEach((f) => onSelectImage(f));
              e.target.value = '';
            }}
            multiple
          />
        </label>
        <label
          className=" rounded-lg cursor-pointer p-1 hover:bg-gray-100 transition-all duration-200 text-gray-700"
          aria-label="Gửi file"
        >
          <CiFileOn className="w-6 h-6" />
          <input
            type="file"
            className="sr-only"
            multiple
            onChange={(e) => {
              const files = e.target.files ? Array.from(e.target.files) : [];
              files.forEach((f) => onSelectFile(f));
              e.target.value = '';
            }}
          />
        </label>
        <button
          onClick={() => setShowContactCardModal(true)}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Gửi danh thiếp"
        >
          <CiCreditCard2 className="w-6 h-6" />
        </button>
        <button
          onClick={() => setShowRichText(!showRichText)}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${showRichText ? 'text-blue-500 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Chỉnh sửa Zalo"
        >
          <CiEdit className="w-6 h-6" />
        </button>
        <div className="relative">
          <button
            ref={flashFoldersMenuBtnRef}
            onClick={async () => {
              const next = !showFlashFoldersMenu;
              setShowFlashFoldersMenu(next);
              if (next) {
                await fetchFlashFolders(flashScope);
              }
            }}
            className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${
              showFlashFoldersMenu
                ? 'text-blue-600 bg-blue-50'
                : isListening
                  ? 'text-red-500 bg-red-50'
                  : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Flash Message"
            aria-haspopup="menu"
            aria-expanded={showFlashFoldersMenu}
          >
            <IoFlashOutline className="w-[1.375rem] h-[1.375rem]" />
          </button>

          {showFlashFoldersMenu && (
            <div
              ref={flashFoldersMenuRef}
              role="menu"
              className="absolute right-[calc(50%_-_9rem)] max-h-[20rem] bottom-full mb-2 w-[18rem] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-bottom-right"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="px-3 pt-3">
                <button
                  onClick={() => router.push('/flash-message')}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 group"
                >
                  Trang flash message
                </button>
                <div className="flex items-center rounded-lg bg-gray-50 p-1 gap-1">
                  <button
                    onClick={async () => {
                      setFlashScope('user');
                      await fetchFlashFolders('user');
                    }}
                    className={`flex-1 px-3 py-1.5 rounded-md text-sm ${
                      flashScope === 'user'
                        ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                        : 'text-gray-700 hover:bg-white'
                    }`}
                  >
                    User
                  </button>
                  <button
                    onClick={async () => {
                      setFlashScope('global');
                      await fetchFlashFolders('global');
                    }}
                    className={`flex-1 px-3 py-1.5 rounded-md text-sm ${
                      flashScope === 'global'
                        ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                        : 'text-gray-700 hover:bg-white'
                    }`}
                  >
                    Global
                  </button>
                </div>
              </div>

              <div className="px-3 pb-3">
                <div className="mt-2">
                  <div className="max-h-64 overflow-y-auto border border-gray-100 rounded-lg p-2">
                    {flashLoading ? (
                      <div className="px-3 py-4 text-center text-sm text-gray-500">Đang tải...</div>
                    ) : flashFolders.length === 0 ? (
                      <div className="px-3 py-6 text-center text-sm text-gray-500">Chưa có thư mục</div>
                    ) : (
                      <div>
                        {flashFolders.map((f) => (
                          <button
                            key={`${flashScope}:${f.id}`}
                            onMouseEnter={async () => {
                              setActivePreviewFolderId(f.id);
                              await fetchFlashEntries(flashScope, f.id);
                            }}
                            onFocus={async () => {
                              setActivePreviewFolderId(f.id);
                              await fetchFlashEntries(flashScope, f.id);
                            }}
                            onClick={async () => {
                              setSelectedFlashFolder(f);
                              setActivePreviewFolderId(f.id);
                              await fetchFlashEntries(flashScope, f.id);
                              try {
                                localStorage.setItem(`chatFlashActiveFolder:${roomId}`, JSON.stringify(f));
                              } catch {}
                            }}
                            className={`w-full text-left px-3 py-2 text-[15px] transition flex items-center gap-3 rounded-md ${
                              activePreviewFolderId === f.id
                                ? 'bg-indigo-50 text-indigo-700'
                                : 'text-gray-800 hover:bg-gray-50'
                            }`}
                          >
                            <HiFolder className="w-5 h-5 text-indigo-600" />
                            <span className="truncate flex-1">{f.name}</span>
                            {selectedFlashFolder?.id === f.id && <HiCheck className="w-5 h-5 text-indigo-600" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {showFlashFoldersMenu && !flashEntriesLoading && flashEntries.length > 0 && (
            <div
              role="dialog"
              className="absolute left-[10rem] max-h-[20rem] bottom-full mb-2 w-[18rem] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-bottom-right"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="px-3 pt-3 pb-3">
                <div className="max-h-64 overflow-y-auto border border-gray-100 rounded-lg p-2">
                  <div className="space-y-1">
                    {flashEntries.map((e) => (
                      <div key={e.key} className="px-2 py-1 rounded-md hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <HiDocumentText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-800">{e.key}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-between">
                          <div className="mt-1 text-xs text-gray-600 line-clamp-2 max-w-[12rem]">{e.value}</div>
                          {(e.att || []).length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {(e.att || []).map((a, idx) => {
                                const sizeKb = a.size ? Math.round(a.size / 1024) : null;
                                if (a.type === 'image') {
                                  return a.dataUrl ? (
                                    <Image
                                      key={`${e.key}-att-${idx}`}
                                      src={a.dataUrl}
                                      alt={a.name}
                                      width={40}
                                      height={40}
                                      className="rounded-md border w-12 h-12 object-cover"
                                    />
                                  ) : (
                                    <div
                                      key={`${e.key}-att-${idx}`}
                                      className="w-12 h-12 rounded-md border border-gray-200 bg-gray-100 flex items-center justify-center"
                                    >
                                      <HiPhoto className="w-5 h-5 text-indigo-600" />
                                    </div>
                                  );
                                }
                                if (a.type === 'video') {
                                  return (
                                    <div
                                      key={`${e.key}-att-${idx}`}
                                      className="relative w-12 h-12  rounded-md border border-slate-200 shadow-sm bg-black overflow-hidden"
                                    >
                                      {a.dataUrl ? (
                                        <Image
                                          width={28}
                                          height={16}
                                          src={a.dataUrl}
                                          alt={a.name}
                                          className="w-full h-full object-cover opacity-80"
                                        />
                                      ) : null}
                                    </div>
                                  );
                                }
                                return (
                                  <div
                                    key={`${e.key}-att-${idx}`}
                                    className="flex items-center gap-1 px-2 py-1 rounded-md border border-gray-200"
                                  >
                                    <CiFileOn className="w-4 h-4 text-gray-600" />
                                    <span className="text-xs text-gray-700 truncate max-w-[8rem]">{a.name}</span>
                                    {sizeKb ? <span className="text-[10px] text-gray-400">{sizeKb}KB</span> : null}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            ref={moreActionsMenuBtnRef}
            onClick={() => setShowMoreActionsMenu((v) => !v)}
            className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${showMoreActionsMenu ? 'text-blue-600 bg-blue-50' : isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-label="Chọn Zalo"
            aria-haspopup="menu"
            aria-expanded={showMoreActionsMenu}
          >
            <CiCircleMore className="w-6 h-6" />
          </button>

          {showMoreActionsMenu && (
            <div
              ref={moreActionsMenuRef}
              role="menu"
              className="absolute left-0 bottom-full mb-2 w-[18rem] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-bottom-right"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="py-1">
                <button
                  role="menuitem"
                  onClick={() => {
                    setShowMoreActionsMenu(false);
                    setShowQuickCreatePoll(true);
                  }}
                  className="w-full cursor-pointer px-4 py-3 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition flex items-center gap-3"
                >
                  <HiChartBar className="w-5 h-5 text-gray-700" />
                  <span>Tạo bình chọn</span>
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setShowMoreActionsMenu(false);
                    setShowCreateReminder(true);
                  }}
                  className="w-full cursor-pointer px-4 py-3 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition flex items-center gap-3"
                >
                  <HiClock className="w-5 h-5 text-gray-700" />
                  <span>Tạo nhắc hẹn</span>
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setShowMoreActionsMenu(false);
                    setShowCreateNote(true);
                  }}
                  className="w-full cursor-pointer px-4 py-3 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition flex items-center gap-3"
                >
                  <HiDocumentText className="w-5 h-5 text-gray-700" />
                  <span>Tạo ghi chú</span>
                </button>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="py-1">
                <button
                  role="menuitem"
                  onClick={() => {
                    setShowMoreActionsMenu(false);
                    setSelectedTag('important');
                  }}
                  className="w-full cursor-pointer px-4 py-3 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition flex items-center justify-between gap-3"
                >
                  <span className="flex items-center gap-3">
                    <HiMapPin className="w-5 h-5 text-gray-700" />
                    <span>Đánh dấu tin quan trọng</span>
                  </span>
                  <HiIdentification className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setShowMoreActionsMenu(false);
                    setSelectedTag('urgent');
                  }}
                  className="w-full cursor-pointer px-4 py-3 text-left text-[15px] text-gray-800 hover:bg-gray-50 transition flex items-center justify-between gap-3"
                >
                  <span className="flex items-center gap-3">
                    <HiShieldCheck className="w-5 h-5 text-gray-700" />
                    <span>Đánh dấu tin khẩn cấp</span>
                  </span>
                  <HiIdentification className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Tags List */}
      {userTags.length > 0 && (
        <div
          ref={tagsContainerRef}
          onPointerDown={onTagsPointerDown}
          onPointerMove={onTagsPointerMove}
          onPointerUp={onTagsPointerUp}
          onPointerCancel={onTagsPointerUp}
          onLostPointerCapture={onTagsPointerUp}
          onClickCapture={handleTagsClickCapture}
          className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full p-1 whitespace-nowrap overscroll-x-contain x-scroll-touch select-none cursor-grab active:cursor-grabbing"
        >
          {userTags.map((tag) => {
            const isSelected = selectedTagIds.includes(tag.id);
            const colorHex = TAG_COLORS[tag.color] || '#9ca3af';
            return (
              <div
                key={tag.id}
                data-tag-id={tag.id}
                className={`
                  cursor-pointer flex-none px-2.5 py-1 rounded-[0.25rem] text-xs font-semibold border transition-all duration-200 shadow-sm active:scale-95
                  ${isSelected ? 'shadow-md' : 'hover:shadow'}
                `}
                style={{
                  backgroundColor: isSelected ? colorHex : 'white',
                  borderColor: colorHex,
                  color: isSelected ? '#ffffff' : colorHex,
                }}
              >
                {tag.label}
              </div>
            );
          })}
        </div>
      )}

      {/* Input Area + Send Button */}
      {showRichText ? (
        <div className="flex-1 h-64 min-h-[16rem] mb-2">
          <RichTextEditor
            value={richTextContent}
            onChange={setRichTextContent}
            onClose={() => setShowRichText(false)}
            onSend={() => {
              if (onSendMessageData && richTextContent.trim()) {
                onSendMessageData({
                  roomId,
                  sender: String(currentUser._id),
                  type: 'text',
                  content: richTextContent,
                  timestamp: Date.now(),
                }).then(() => {
                  setRichTextContent('');
                  setShowRichText(false);
                });
              } else if (!onSendMessageData && richTextContent.trim()) {
                if (editableRef.current) {
                  editableRef.current.innerHTML = richTextContent;
                  onSendMessage();
                  setRichTextContent('');
                  setShowRichText(false);
                }
              }
            }}
          />
        </div>
      ) : (
        <div ref={toolbarRef} className="flex items-end gap-2">
          <button
            onClick={() => {
              try {
                editableRef.current?.blur?.();
              } catch {}
              // Thực hiện mở emoji ngay
              setTimeout(() => onToggleEmojiPicker(), 0);
              // Đóng menu mobile sau 1 chút để tránh conflict
              setTimeout(() => {
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
              }, 100);
            }}
            className="md:hidden group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90"
            aria-label="Chọn emoji"
          >
            <HiFaceSmile className="w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors" />
          </button>
          {/* Input contentEditable – Đẹp như iMessage */}
          <div className="relative flex-1 min-w-0">
            {selectedTag && (
              <div className="flex my-2">
                <div className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded text-sm border border-red-100">
                  {selectedTag === 'important' && <HiMapPin className="w-4 h-4" />}
                  {selectedTag === 'urgent' && <HiShieldCheck className="w-4 h-4" />}
                  <span className="font-medium">{selectedTag === 'important' ? 'Quan trọng' : 'Khẩn cấp'}</span>
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="ml-1 hover:bg-red-100 rounded-full p-0.5 cursor-pointer"
                  >
                    <HiX className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            <div className="relative">
              <div
                ref={editableRef}
                contentEditable
                inputMode="text"
                role="textbox"
                aria-multiline="true"
                onClick={() => {
                  const el = editableRef.current;
                  if (el) {
                    try {
                      el.focus();
                      const range = document.createRange();
                      range.selectNodeContents(el);
                      range.collapse(false);
                      const sel = window.getSelection();
                      sel?.removeAllRanges();
                      sel?.addRange(range);
                    } catch {}
                  }
                  // Delay đóng menu để đảm bảo focus đã ăn
                  setTimeout(() => {
                    setShowMobileActions(false);
                    try {
                      window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                    } catch {}
                  }, 150);
                }}
                onInput={() => {
                  onInputEditable();
                  updateSlashState();
                  checkContent();
                }}
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.shiftKey && (e.key === 'x' || e.key === 'X')) {
                    e.preventDefault();
                    const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
                    setRichTextContent(text);
                    setShowRichText(true);
                    return;
                  }
                  const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
                  const suggestions = kvItems.filter((it) =>
                    it.key.toLowerCase().startsWith((slashQuery || '').toLowerCase()),
                  );

                  if (slashOpen && suggestions.length > 0) {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setSlashSelectedIndex((prev) => (prev + 1) % suggestions.length);
                      return;
                    }
                    if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setSlashSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                      return;
                    }
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const chosen = suggestions[Math.max(0, Math.min(slashSelectedIndex, suggestions.length - 1))];
                      if (chosen && editableRef.current) {
                        const replaced = text.replace(/\/\s*[\w-]*$/, chosen.value);
                        editableRef.current.innerText = replaced;
                        try {
                          const range = document.createRange();
                          range.selectNodeContents(editableRef.current);
                          range.collapse(false);
                          const sel = window.getSelection();
                          sel?.removeAllRanges();
                          sel?.addRange(range);
                        } catch {}
                        setSlashOpen(false);
                        setSlashSelectedIndex(0);
                        onInputEditable();
                        return;
                      }
                    }
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      setSlashOpen(false);
                      setSlashSelectedIndex(0);
                      return;
                    }
                  }
                  // if (e.key === 'Enter' && !e.shiftKey && isUploading) {
                  //   e.preventDefault();
                  //   return;
                  // }
                  onKeyDownEditable(e);
                  updateSlashState();
                  if (e.key === 'Enter' && !e.shiftKey) {
                    if (attachments && attachments.length > 0) return;
                    try {
                      const el = editableRef.current;
                      if (el) {
                        el.focus();
                        const range = document.createRange();
                        range.selectNodeContents(el);
                        range.collapse(false);
                        const sel = window.getSelection();
                        sel?.removeAllRanges();
                        sel?.addRange(range);
                      }
                    } catch {}
                  }
                }}
                onFocus={() => {
                  onFocusEditable();
                  updateSlashState();
                  setShowMobileActions(false);
                }}
                onPaste={(e) => {
                  onPasteEditable(e);
                  updateSlashState();
                }}
                style={{ overscrollBehavior: 'contain' }}
                className="min-h-10 max-h-40 px-2 py-2 bg-white/90   focus:outline-none  transition-all duration-300 text-[0.875rem] md:text-[1rem] text-gray-800 overflow-auto custom-scrollbar w-full max-w-full break-words whitespace-pre-wrap"
                data-placeholder="Nhập tin nhắn..."
              />

              {/* Placeholder đẹp hơn */}
              <div className="pointer-events-none absolute inset-0 flex items-center px-2 py-4 text-gray-400 select-none text-[0.875rem] md:text-[1rem]">
                <span className="flex items-center gap-2">Nhập tin nhắn...</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {hasContent || (attachments && attachments.length > 0) ? (
              <>
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onTouchStart={(e) => e.preventDefault()}
                  onClick={() => {
                    handleSendWrapper();
                    if (attachments && attachments.length > 0) return;
                    if (!document.hidden && allowFocusRef.current) {
                      allowFocusRef.current = true;
                      try {
                        requestAnimationFrame(() => {
                          const el = editableRef.current;
                          if (el) {
                            el.focus();
                            const range = document.createRange();
                            range.selectNodeContents(el);
                            range.collapse(false);
                            const sel = window.getSelection();
                            sel?.removeAllRanges();
                            sel?.addRange(range);
                          }
                        });
                      } catch {}
                    }
                  }}
                  className={`lg:hidden p-2 rounded-full cursor-pointer text-blue-600 hover:bg-blue-50 transition-all duration-300 active:scale-90 group`}
                  aria-label="Gửi tin nhắn"
                >
                  <HiPaperAirplane className="w-7 h-7 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                </button>
                <button
                  onMouseDown={(e) => e.preventDefault()}
                  onTouchStart={(e) => e.preventDefault()}
                  onClick={() => {
                    handleSendWrapper();
                    if (attachments && attachments.length > 0) return;
                    if (!document.hidden && allowFocusRef.current) {
                      allowFocusRef.current = true;
                      try {
                        requestAnimationFrame(() => {
                          const el = editableRef.current;
                          if (el) {
                            el.focus();
                            const range = document.createRange();
                            range.selectNodeContents(el);
                            range.collapse(false);
                            const sel = window.getSelection();
                            sel?.removeAllRanges();
                            sel?.addRange(range);
                          }
                        });
                      } catch {}
                    }
                  }}
                  className={`hidden lg:block p-2 rounded-full cursor-pointer text-blue-600 hover:bg-blue-50 transition-all duration-300 active:scale-90 group`}
                  aria-label="Gửi tin nhắn"
                >
                  <HiPaperAirplane className="w-7 h-7 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              </>
            ) : (
              <>
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={() => {
                      try {
                        editableRef.current?.blur?.();
                      } catch {}
                      setTimeout(() => onToggleEmojiPicker(), 100);
                    }}
                    className="group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90"
                    aria-label="Chọn emoji"
                  >
                    <CiFaceSmile className="w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors" />
                  </button>
                  <button
                    onClick={() => {
                      const el = editableRef.current;
                      if (!el) return;
                      el.innerText = '👍';
                      onInputEditable();
                      handleSendWrapper();
                    }}
                    className={`p-2 rounded-full cursor-pointer text-gray-700  ${
                      isUploading ? 'opacity-50 pointer-events-none grayscale' : ''
                    }`}
                    aria-label="Gửi like"
                  >
                    <Image src="/imgs/like.png" width={24} height={24} alt="Like Zalo" className="w-7 h-7" />
                  </button>
                </div>
                <div className="md:hidden flex items-center gap-2">
                  <button
                    ref={toggleMobileActionsBtnRef}
                    onClick={handleToggleMobileActions}
                    className="block rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 transition-all duration-300 active:scale-90"
                    aria-label="Mở thêm hành động"
                  >
                    <ICIcon1 className="w-11 h-11" />
                  </button>
                  <button
                    onClick={onVoiceInput}
                    className={` rounded-full cursor-pointer transition-all duration-300 active:scale-90 ${
                      isListening ? 'text-red-500 animate-pulse bg-red-50' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    aria-label="Nhập bằng giọng nói"
                  >
                    <MicIcon className="w-11 h-11 text-black" />
                  </button>
                  <label
                    className=" rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 transition-all duration-300 active:scale-90"
                    aria-label="Gửi ảnh hoặc video"
                  >
                    <ImageIconZalo className="w-11 h-11" />
                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="sr-only"
                      onChange={(e) => {
                        const files = e.target.files ? Array.from(e.target.files) : [];
                        files.forEach((f) => onSelectImage(f));
                        e.target.value = '';
                        setShowMobileActions(false);
                        try {
                          window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                        } catch {}
                      }}
                      multiple
                    />
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {showMobileActions && (
        <div
          ref={mobileActionsRef}
          className="md:hidden w-full grid grid-cols-4 gap-2 items-center justify-between mx-auto mt-4"
        >
          <label className="group relative cursor-pointer flex flex-col items-center" aria-label="Gửi ảnh hoặc video">
            {/* Background tròn bao quanh icon */}
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200  shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiPhoto className="w-6 h-6 text-blue-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              {/* Tùy chọn: thêm hiệu ứng nổi nhẹ cho icon */}
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>

            {/* Chữ bên dưới */}
            <span className="text-sm font-medium text-gray-800">Ảnh/Video</span>

            <input
              type="file"
              accept="image/*,video/*"
              className="sr-only"
              onChange={(e) => {
                const files = e.target.files ? Array.from(e.target.files) : [];
                files.forEach((f) => onSelectImage(f));
                e.target.value = '';
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
              }}
              multiple
            />
          </label>
          <label className="group relative cursor-pointer flex flex-col items-center" aria-label="Gửi file">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiPaperClip className="w-6 h-6 text-green-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200 rotate-12" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">File</span>
            <input
              type="file"
              className="sr-only"
              multiple
              onChange={(e) => {
                const files = e.target.files ? Array.from(e.target.files) : [];
                files.forEach((f) => onSelectFile(f));
                e.target.value = '';
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
              }}
            />
          </label>
          {isGroup && (
            <button
              onClick={() => {
                setShowCreatePoll(true);
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
              }}
              className="group relative cursor-pointer flex flex-col items-center"
              aria-label="Bình chọn"
            >
              <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 hover:from-indigo-200 hover:to-blue-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
                <HiChartBar className="w-6 h-6 text-blue-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
              </div>
              <span className="text-sm font-medium text-gray-800">Bình chọn</span>
            </button>
          )}

          <button
            onClick={() => {
              setShowCreateNote(true);
              setShowMobileActions(false);
              try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
              } catch {}
            }}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Nhắc hẹn"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-red-600 hover:from-indigo-200 hover:to-blue-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiClock className="w-6 h-6 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Nhắc hẹn</span>
          </button>

          <button
            onClick={() => {
              onVoiceInput();
              setShowMobileActions(false);
              try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
              } catch {}
            }}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Nhập bằng giọng nói"
          >
            <div
              className={`relative w-12 h-12 mb-3 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                isListening
                  ? 'bg-gradient-to-br from-red-500 to-pink-600 ring-4 ring-red-300/50 scale-110'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300'
              }`}
            >
              <HiMicrophone
                className={`w-6 h-6 ${
                  isListening ? 'text-white' : 'text-gray-700'
                } drop-shadow-md group-hover:scale-110 transition-transform duration-200`}
              />
              {isListening && <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" />}
            </div>
            <span className="text-sm font-medium text-gray-800">Voice</span>
          </button>
          <button
            onClick={() => {
              showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' });
            }}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Chat nhanh"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 hover:from-violet-200 hover:to-purple-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiLightningBolt className="w-6 h-6 text-yellow-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Chat nhanh</span>
          </button>
          <button
            onClick={() => {
              showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' });
            }}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Báo xấu"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiShieldCheck className="w-6 h-6 text-red-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Báo xấu</span>
          </button>
          {canClearHistory && (
            <button
              onClick={() => {
                showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' });
              }}
              className="group relative cursor-pointer flex flex-col items-center"
              aria-label="Xóa lịch sử"
            >
              <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-slate-100 to-gray-100 hover:from-slate-200 hover:to-gray-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
                <HiTrash className="w-6 h-6 text-gray-700 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
              </div>
              <span className="text-sm font-medium text-gray-800">Xóa lịch sử</span>
            </button>
          )}
          <button
            onClick={() => showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' })}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Vị trí"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiMapPin className="w-6 h-6 text-rose-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Vị trí</span>
          </button>

          <button
            onClick={() => {
              setShowMobileActions(false);
              try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
              } catch {}
              setShowContactCardModal(true);
            }}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Danh thiếp"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 hover:from-teal-200 hover:to-cyan-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiIdentification className="w-6 h-6 text-teal-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Danh thiếp</span>
          </button>
          <button
            onClick={() => showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' })}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Vẽ hình"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-purple-100 to-fuchsia-100 hover:from-purple-200 hover:to-fuchsia-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiPencil className="w-6 h-6 text-purple-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Vẽ hình</span>
          </button>
          <button
            onClick={() => showToast({ type: 'info', message: 'Chức năng đang hoàn thiện' })}
            className="group relative cursor-pointer flex flex-col items-center"
            aria-label="Vẽ hình"
          >
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-slate-100 to-gray-100 hover:from-slate-200 hover:to-gray-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <span className="text-xs font-black text-gray-700 drop-shadow-md group-hover:scale-110 transition-transform duration-200">
                @GIF
              </span>
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">@GIF</span>
          </button>
        </div>
      )}

      {showConfirmClear && (
        <ConfirmModal
          title="Xóa lịch sử"
          message="Bạn có chắc muốn xóa toàn bộ lịch sử trò chuyện?"
          onCancel={() => setShowConfirmClear(false)}
          onConfirm={async () => {
            setShowConfirmClear(false);
            try {
              const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'clearHistory', roomId }),
              });
              if (res.ok) {
                showToast({ type: 'success', message: 'Đã xóa lịch sử trò chuyện' });
                try {
                  window.dispatchEvent(new CustomEvent('chatHistoryCleared', { detail: { roomId } }));
                } catch {}
              } else {
                showToast({ type: 'error', message: 'Xóa lịch sử thất bại' });
              }
            } catch {
              showToast({ type: 'error', message: 'Lỗi khi xóa lịch sử' });
            }
          }}
          confirmText="Xóa"
          variant="danger"
        />
      )}
      {showReportConfirm && (
        <ConfirmModal
          title="Báo xấu"
          message="Bạn có muốn báo cáo cuộc trò chuyện này?"
          onCancel={() => setShowReportConfirm(false)}
          onConfirm={async () => {
            setShowReportConfirm(false);
            try {
              await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'create',
                  data: {
                    roomId,
                    sender: currentUser._id,
                    type: 'notify',
                    content: 'Bạn đã báo xấu cuộc trò chuyện này',
                  },
                }),
              });
              showToast({ type: 'success', message: 'Đã gửi báo xấu' });
            } catch {
              showToast({ type: 'error', message: 'Gửi báo xấu thất bại' });
            }
          }}
          confirmText="Báo xấu"
          variant="warning"
        />
      )}
      {showContactCardModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-0 md:px-4"
          onClick={() => {
            setShowContactCardModal(false);
            setSelectedContactCardIds([]);
            setContactCardSearch('');
            setActiveContactCategory('all');
          }}
        >
          <div
            className="w-full  md:max-w-[46rem] bg-white md:rounded-2xl shadow-2xl overflow-hidden h-full md:max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <p className="text-lg font-bold text-gray-900">Gửi danh thiếp</p>
              <button
                onClick={() => {
                  setShowContactCardModal(false);
                  setSelectedContactCardIds([]);
                  setContactCardSearch('');
                  setActiveContactCategory('all');
                }}
                className="p-2 rounded-full cursor-pointer hover:bg-gray-100 text-gray-600"
                aria-label="Đóng"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 bg-white">
                <HiSearch className="w-5 h-5 text-gray-400" />
                <input
                  value={contactCardSearch}
                  onChange={(e) => setContactCardSearch(e.target.value)}
                  placeholder="Tìm danh thiếp theo tên"
                  className="w-full outline-none text-sm text-gray-800"
                />
              </div>

              <div
                ref={contactCategoryBarRef}
                onPointerDown={handleContactCategoryPointerDown}
                onPointerMove={handleContactCategoryPointerMove}
                onPointerUp={handleContactCategoryPointerEnd}
                onPointerCancel={handleContactCategoryPointerEnd}
                onLostPointerCapture={handleContactCategoryPointerEnd}
                onClickCapture={handleContactCategoryClickCapture}
                style={{ touchAction: 'pan-x', WebkitOverflowScrolling: 'touch' }}
                className="mt-4 flex items-center gap-2 overflow-x-auto w-full whitespace-nowrap custom-scrollbar select-none"
              >
                <button
                  onClick={() => setActiveContactCategory('all')}
                  className={`px-4 py-2 mb-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                    activeContactCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Tất cả
                </button>
                {categoryTags.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveContactCategory(t.id)}
                    className={`px-4 py-2 mb-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                      activeContactCategory === t.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {groupedContactUsers.length === 0 ? (
                <div className="py-12 text-center text-sm text-gray-500">Không tìm thấy liên hệ phù hợp</div>
              ) : (
                <div className="py-2">
                  {groupedContactUsers.map((g) => (
                    <div key={g.key}>
                      <div className="px-4 sm:px-6 py-2 text-sm font-bold text-gray-700">{g.key}</div>
                      <div className="space-y-1 px-2 sm:px-4 pb-2">
                        {g.users.map((u) => {
                          const idStr = String(u._id || '');
                          const isSelected = selectedContactCardIds.includes(idStr);
                          const displayName = getContactDisplayName(u);
                          const sub = String(u.username || '');
                          return (
                            <button
                              key={String(u._id)}
                              onClick={() => {
                                if (!idStr) return;
                                setSelectedContactCardIds((prev) =>
                                  prev.includes(idStr) ? prev.filter((x) => x !== idStr) : [...prev, idStr],
                                );
                              }}
                              className="w-full flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer hover:bg-gray-50 active:scale-[0.99] transition"
                            >
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-blue-600' : 'border-gray-300'
                                }`}
                              >
                                {isSelected && <div className="w-3 h-3 rounded-full bg-blue-600" />}
                              </div>

                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">
                                {u.avatar ? (
                                  <Image
                                    src={getProxyUrl(u.avatar)}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <Image
                                    src="/logo/avata.webp"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>

                              <div className="flex-1 min-w-0 text-left">
                                <p className="text-sm font-semibold text-gray-900 truncate">{displayName}</p>
                                {sub ? <p className="text-sm text-gray-500 truncate">{sub}</p> : null}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 sm:px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3 bg-white">
              <button
                onClick={() => {
                  setShowContactCardModal(false);
                  setSelectedContactCardIds([]);
                  setContactCardSearch('');
                  setActiveContactCategory('all');
                }}
                className="px-5 py-2 rounded-xl bg-gray-100 text-gray-800 font-semibold cursor-pointer hover:bg-gray-200 transition"
              >
                Hủy
              </button>
              <button
                onClick={handleSendContactCard}
                disabled={selectedContactCardIds.length === 0}
                className={`px-5 py-2 rounded-xl font-semibold transition ${
                  selectedContactCardIds.length > 0
                    ? 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700'
                    : 'bg-blue-200 text-white cursor-not-allowed'
                }`}
              >
                {`Gửi danh thiếp${selectedContactCardIds.length > 0 ? ` (${selectedContactCardIds.length})` : ''}`}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Custom CSS cho placeholder */}
      <style jsx>{`
        [contenteditable]:empty ~ div > span {
          opacity: 1;
        }
        [contenteditable]:not(:empty) ~ div > span,
        [contenteditable]:focus ~ div > span {
          opacity: 0;
        }
        [contenteditable]:focus ~ div > span {
          transition: opacity 0.3s ease;
        }
      `}</style>

      {slashOpen && kvItems.length > 0 && (
        <div className="absolute left-4 bottom-20 z-40 w-64 bg-white rounded-xl shadow-xl border border-gray-200">
          <div className="px-3 py-2 border-b text-xs text-gray-500">Gợi ý Chat nhanh</div>
          <div className="max-h-48 overflow-y-auto">
            {kvItems
              .filter((it) => it.key.toLowerCase().startsWith((slashQuery || '').toLowerCase()))
              .map((it, idx) => (
                <button
                  key={it.key}
                  onClick={() => {
                    if (!editableRef.current) return;
                    editableRef.current.focus();
                    try {
                      const text = String(editableRef.current.innerText || '');
                      const replaced = text.replace(/\/\s*[\w-]*$/, it.value);
                      editableRef.current.innerText = replaced;
                      const range = document.createRange();
                      range.selectNodeContents(editableRef.current);
                      range.collapse(false);
                      const sel = window.getSelection();
                      sel?.removeAllRanges();
                      sel?.addRange(range);
                      setSlashOpen(false);
                      setSlashSelectedIndex(0);
                      onInputEditable();
                    } catch {}
                  }}
                  className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 ${idx === slashSelectedIndex ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                >
                  <span className="text-indigo-600">/{it.key}</span>
                  <span className="text-gray-500 truncate">{it.value}</span>
                </button>
              ))}
          </div>
        </div>
      )}

      {showFlashPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-800">Chọn thư mục ChatFlash</p>
              <button
                onClick={() => setShowFlashPicker(false)}
                className="p-2 rounded-full cursor-pointer hover:bg-white/20"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3">
              {flashFolders.length === 0 ? (
                <div className="text-center text-gray-500 py-8 text-sm">Chưa có thư mục</div>
              ) : (
                <div className="space-y-2">
                  {flashFolders.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleSelectFlashFolder(f)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-sm flex items-center gap-2"
                    >
                      <HiFolder className="w-4 h-4 text-indigo-600" />
                      <span className="truncate">{f.name}</span>
                      {selectedFlashFolder?.id === f.id && (
                        <span className="ml-auto text-xs text-indigo-600">Đang chọn</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showUpdatingPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowUpdatingPopup(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs overflow-hidden">
            <div className="px-5 py-4 text-center space-y-2">
              <p className="text-base font-bold text-gray-900">Đang cập nhật</p>
              <p className="text-sm text-gray-500">Tính năng đang được cập nhật.</p>
              <button
                onClick={() => setShowUpdatingPopup(false)}
                className="cursor-pointer mt-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {showQuickCreatePoll &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Tạo bình chọn</h3>
                <button
                  onClick={() => {
                    setShowQuickCreatePoll(false);
                    resetQuickPoll();
                  }}
                  className="cursor-pointer p-2 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-4 space-y-4 flex-1 overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề bình chọn</label>
                  <textarea
                    value={quickPollQuestion}
                    onChange={(e) => setQuickPollQuestion(e.target.value)}
                    rows={3}
                    placeholder="Đặt câu hỏi bình chọn"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    {quickPollQuestion.length}
                    /200
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Các lựa chọn</label>
                  <div className="space-y-2">
                    {quickPollOptions.map((opt, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={opt}
                        onChange={(e) =>
                          setQuickPollOptions((prev) => prev.map((o, i) => (i === idx ? e.target.value : o)))
                        }
                        placeholder={`Lựa chọn ${idx + 1}`}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setQuickPollOptions((prev) => (prev.length >= 10 ? prev : [...prev, '']))}
                    disabled={quickPollOptions.length >= 10}
                    className="mt-3 cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    + Thêm lựa chọn
                  </button>
                </div>
              </div>

              <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setShowQuickCreatePoll(false);
                      resetQuickPoll();
                    }}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleQuickPollCreate}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={
                      !quickPollQuestion.trim() ||
                      new Set(
                        quickPollOptions
                          .map((o) => o.trim())
                          .filter((o) => o)
                          .map((o) => o.toLowerCase()),
                      ).size < 2
                    }
                  >
                    Tạo bình chọn
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {showQuickCreateNote &&
        createPortal(
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Tạo nhắc hẹn</h3>
                <button
                  onClick={() => {
                    setShowQuickCreateNote(false);
                    setQuickNoteContent('');
                    setQuickNoteDateTime('');
                  }}
                  className="cursor-pointer p-2 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-4 space-y-4 flex-1 overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung nhắc hẹn</label>
                  <textarea
                    value={quickNoteContent}
                    onChange={(e) => setQuickNoteContent(e.target.value)}
                    rows={3}
                    placeholder="Nhập tiêu đề nhắc hẹn..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thời gian</label>
                  <input
                    type="datetime-local"
                    value={quickNoteDateTime}
                    onChange={(e) => setQuickNoteDateTime(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setShowQuickCreateNote(false);
                      setQuickNoteContent('');
                      setQuickNoteDateTime('');
                    }}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleQuickNoteCreate}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!quickNoteContent.trim() || !quickNoteDateTime.trim()}
                  >
                    Tạo nhắc hẹn
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {showCreatePoll && (
        <CreatePollModal isOpen={showCreatePoll} onClose={() => setShowCreatePoll(false)} onCreate={handleCreatePoll} />
      )}

      {showCreateNote && (
        <CreateNoteModal
          isOpen={showCreateNote}
          onClose={() => setShowCreateNote(false)}
          onCreate={handleCreateNote}
          createLoading={createLoading}
        />
      )}
      {showCreateReminder && (
        <CreateReminderModal
          isOpen={showCreateReminder}
          onClose={() => setShowCreateReminder(false)}
          onCreate={handleCreateReminder}
          createLoading={createLoading}
        />
      )}
    </div>
  );
}
