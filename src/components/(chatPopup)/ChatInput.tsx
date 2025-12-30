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
} from 'react-icons/hi2';
import { HiDocumentText, HiLightningBolt, HiX } from 'react-icons/hi';
import Image from 'next/image';
import { useChatContext } from '@/context/ChatContext';
import FolderDashboard from '@/components/(chatPopup)/components/Folder/FolderDashboard';
import FolderSaveWizard from '@/components/(chatPopup)/components/Folder/FolderSaveWizard';
import ChatFlashDashboard from '@/components/(chatPopup)/components/Chat-Flash/ChatFlashDashboard';
import UploadProgressBar from '@/components/(chatPopup)/UploadProgressBar';
import ICIcon1 from '@/components/svg/ICIcon1';
import ImageIconZalo from '@/components/svg/ICIconImageZalo';
import MicIcon from '@/components/svg/MicIcon';
import IconFile from '@/components/svg/IConFile';
import ICFolder from '@/components/svg/ICFolder';
import { AiTwotoneLike } from 'react-icons/ai';
import { ICONS } from '@/components/constants';
import { HiShieldCheck, HiTrash } from 'react-icons/hi';
import { ConfirmModal } from '@/components/ui/ConfirmModal';
import { useToast } from '@/components/base/toast';
import type { GroupConversation, GroupRole } from '@/types/Group';

interface ChatInputProps {
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

export default function ChatInput({
  onToggleEmojiPicker,
  isListening,
  onVoiceInput,
  editableRef,
  onInputEditable,
  onKeyDownEditable,
  onPasteEditable,
  onFocusEditable,
  onSendMessage,
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
  const { currentUser, selectedChat, isGroup } = useChatContext();
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
  const [showFlashPicker, setShowFlashPicker] = useState(false);
  const [flashFolders, setFlashFolders] = useState<Array<{ id: string; name: string }>>([]);
  const [selectedFlashFolder, setSelectedFlashFolder] = useState<{ id: string; name: string } | null>(null);
  const [kvItems, setKvItems] = useState<Array<{ key: string; value: string }>>([]);
  const [slashOpen, setSlashOpen] = useState(false);
  const [slashQuery, setSlashQuery] = useState('');
  const [slashSelectedIndex, setSlashSelectedIndex] = useState<number>(0);
  const [showFolderDashboard, setShowFolderDashboard] = useState(false);
  const [showFolderSaveWizard, setShowFolderSaveWizard] = useState(false);
  const [pendingSaveMessage, setPendingSaveMessage] = useState<{
    roomId: string;
    messageId: string;
    content: string;
    type: string;
    fileUrl?: string;
    fileName?: string;
  } | null>(null);
  const [showChatFlashDashboard, setShowChatFlashDashboard] = useState(false);
  const [showMobileActions, setShowMobileActions] = useState(false);
  const mobileActionsRef = useRef<HTMLDivElement | null>(null);
  const toggleMobileActionsBtnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef(false);
  const allowFocusRef = useRef(true);
  const [hasContent, setHasContent] = useState(false);
  const [showUpdatingPopup, setShowUpdatingPopup] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const [showReportConfirm, setShowReportConfirm] = useState(false);
  const handleShowUpdatingPopup = () => {
    setShowUpdatingPopup(true);
    window.setTimeout(() => setShowUpdatingPopup(false), 1500);
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

  const handleSendWrapper = () => {
    // if (isUploading) return; // 🔥 Cho phép chat khi đang upload
    onSendMessage();
    // Optimistically update state as parent usually clears input
    setHasContent(false);
    setTimeout(checkContent, 100); // Double check
  };

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('/api/chatflash', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'read', roomId }),
        });
        const data = await res.json();
        const rows = (data?.data?.folders || []) as Array<{ id: string; name: string }>;
        setFlashFolders(rows);
        try {
          localStorage.setItem(`chatFlashFolders:${roomId}`, JSON.stringify(rows));
        } catch {}
      } catch {
        try {
          const raw = localStorage.getItem(`chatFlashFolders:${roomId}`);
          const arr = raw ? (JSON.parse(raw) as Array<{ id: string; name: string }>) : [];
          setFlashFolders(arr);
        } catch {
          setFlashFolders([]);
        }
      }
      try {
        const activeRaw = localStorage.getItem(`chatFlashActiveFolder:${roomId}`);
        setSelectedFlashFolder(activeRaw ? JSON.parse(activeRaw) : null);
      } catch {
        setSelectedFlashFolder(null);
      }
    };
    if (roomId) init();
  }, [roomId]);

  useEffect(() => {
    if (!showMobileActions) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (mobileActionsRef.current && target && mobileActionsRef.current.contains(target)) return;
      if (toggleMobileActionsBtnRef.current && target && toggleMobileActionsBtnRef.current.contains(target)) return;
      if (editableRef.current && target && editableRef.current.contains(target)) return;
      const el = editableRef.current;
      setShowMobileActions(false);
      try {
        window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
      } catch {}
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
        setTimeout(() => {
          try {
            el.focus();
          } catch {}
        }, 80);
        setTimeout(() => {
          try {
            el.focus();
          } catch {}
        }, 160);
      }
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

  useEffect(() => {
    const loadKV = async () => {
      if (!selectedFlashFolder?.id || !roomId) {
        setKvItems([]);
        return;
      }
      try {
        const res = await fetch('/api/chatflash', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'listKV', roomId, folderId: selectedFlashFolder.id }),
        });
        const json = await res.json();
        const arr = (json?.items || []) as Array<{ key: string; value: string }>;
        setKvItems(arr);
        try {
          localStorage.setItem(`chatFlashKV:${roomId}:${selectedFlashFolder.id}`, JSON.stringify(arr));
        } catch {}
      } catch {
        try {
          const raw = localStorage.getItem(`chatFlashKV:${roomId}:${selectedFlashFolder.id}`);
          const arr = raw ? (JSON.parse(raw) as Array<{ key: string; value: string }>) : [];
          setKvItems(arr);
        } catch {
          setKvItems([]);
        }
      }
    };
    loadKV();
  }, [selectedFlashFolder?.id, roomId]);

  useEffect(() => {
    const handler = (e: Event) => {
      const anyE = e as CustomEvent;
      if (anyE.detail) {
        setPendingSaveMessage(anyE.detail);
        setShowFolderSaveWizard(true);
      }
    };
    window.addEventListener('openFolderSaveWizard', handler as EventListener);
    return () => window.removeEventListener('openFolderSaveWizard', handler as EventListener);
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
          <ICONS.SmileEmoji className="w-5 h-5" />
        </button>
        <label
          className=" rounded-lg cursor-pointer p-1 hover:bg-gray-100 transition-all duration-200 text-gray-700"
          aria-label="Gửi ảnh hoặc video"
        >
          <ICONS.ImageZalo className="w-5 h-5" />
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
          <ICONS.AttachmentZalo className="w-5 h-5" />
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
          onClick={handleShowUpdatingPopup}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Nhập bằng giọng nói"
        >
          <ICONS.ContactZalo className="w-5 h-5" />
        </button>
        <button
          onClick={handleShowUpdatingPopup}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Chọn Zalo"
        >
          <ICONS.SelectionZalo className="w-5 h-5" />
        </button>
        <button
          onClick={handleShowUpdatingPopup}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Chỉnh sửa Zalo"
        >
          <ICONS.TextEditZalo className="w-5 h-5" />
        </button>
        <button
          onClick={handleShowUpdatingPopup}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Gửi Zalo"
        >
          <ICONS.ChatFlashZalo className="w-5 h-5" />
        </button>
        <button
          onClick={handleShowUpdatingPopup}
          className={`rounded-lg p-1 cursor-pointer transition-all duration-200 ${isListening ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Chọn Zalo"
        >
          <ICONS.MoreZalo className="w-5 h-5" />
        </button>
      </div>

      {/* Input Area + Send Button */}
      <div className="flex items-end gap-2">
        <button
          onClick={() => {
            try {
              editableRef.current?.blur?.();
            } catch {}
            setTimeout(() => onToggleEmojiPicker(), 100);
          }}
          className="lg:hidden group p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 active:scale-90"
          aria-label="Chọn emoji"
        >
          <HiFaceSmile className="w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors" />
        </button>
        {/* Input contentEditable – Đẹp như iMessage */}
        <div className="relative flex-1 min-w-0">
          <div
            ref={editableRef}
            contentEditable
            inputMode="text"
            role="textbox"
            aria-multiline="true"
            onClick={() => {
              setShowMobileActions(false);
              try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
              } catch {}
              // Keep caret at the click position by letting browser handle selection
            }}
            onInput={() => {
              onInputEditable();
              updateSlashState();
              checkContent();
            }}
            onKeyDown={(e) => {
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
            className="min-h-10 max-h-40 px-6 py-2 bg-white/90 rounded-3xl shadow-xl border border-gray-200/50 focus:outline-none  transition-all duration-300 text-[0.875rem] md:text-[1rem] text-gray-800 overflow-auto custom-scrollbar w-full max-w-full break-words whitespace-pre-wrap"
            data-placeholder="Nhập tin nhắn..."
          />

          {/* Placeholder đẹp hơn */}
          <div className="pointer-events-none absolute inset-0 flex items-center px-6 py-4 text-gray-400 select-none text-[0.875rem] md:text-[1rem]">
            <span className="flex items-center gap-2">
              <HiSparkles className="w-5 h-5 text-indigo-400" />
              Nhập tin nhắn...
            </span>
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
              <div className="hidden md:flex items-center gap-2 ml-1">
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
                    className="p-2 rounded-full cursor-pointer text-gray-700"
                    aria-label="Xóa lịch sử"
                  >
                    <HiTrash className="w-7 h-7 text-gray-500" />
                  </button>
                )}
              </div>
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
                  <HiFaceSmile className="w-7 h-7 text-gray-500 group-hover:text-yellow-500 transition-colors" />
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
                    }}
                    multiple
                  />
                </label>
              </div>
            </>
          )}
        </div>
      </div>

      {showMobileActions && (
        <div
          ref={mobileActionsRef}
          className="lg:hidden w-full grid grid-cols-4 gap-2 items-center justify-between mx-auto mt-4"
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
          {/* <label className="group relative cursor-pointer flex flex-col items-center" aria-label="Mở dashboard Folder">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiFolder className="w-6 h-6 text-orange-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Thư Mục</span>
            <input
              type="button"
              className="sr-only"
              onClick={() => {
                setShowFolderDashboard(true);
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
              }}
            />
          </label> */}
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
          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="Chat nhanh">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 hover:from-violet-200 hover:to-purple-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiLightningBolt className="w-6 h-6 text-yellow-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Chat nhanh</span>
          </button>
          <button
            onClick={() => {
              setShowReportConfirm(true);
              setShowMobileActions(false);
              try {
                window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
              } catch {}
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
                setShowConfirmClear(true);
                setShowMobileActions(false);
                try {
                  window.dispatchEvent(new CustomEvent('mobileActionsToggle', { detail: { open: false } }));
                } catch {}
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
          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="Vị trí">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiMapPin className="w-6 h-6 text-rose-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Vị trí</span>
          </button>
          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="Bình chọn">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 hover:from-indigo-200 hover:to-blue-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiChartBar className="w-6 h-6 text-blue-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Bình chọn</span>
          </button>

          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="Danh thiếp">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 hover:from-teal-200 hover:to-cyan-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiIdentification className="w-6 h-6 text-teal-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Danh thiếp</span>
          </button>
          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="Vẽ hình">
            <div className="relative w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-purple-100 to-fuchsia-100 hover:from-purple-200 hover:to-fuchsia-200 shadow-2xl group-hover:shadow-3xl group-active:scale-95 transition-all duration-300 flex items-center justify-center">
              <HiPencil className="w-6 h-6 text-purple-600 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 rounded-full shadow-inner shadow-white/50"></div>
            </div>
            <span className="text-sm font-medium text-gray-800">Vẽ hình</span>
          </button>
          <button className="group relative cursor-pointer flex flex-col items-center" aria-label="@GIF">
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

      {showFolderDashboard &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-0 lg:px-4">
            <div className="bg-white w-full h-full lg:max-w-5xl lg:h-[46rem] rounded-none lg:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <HiFolder className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">Folder</h3>
                </div>
                <button
                  onClick={() => setShowFolderDashboard(false)}
                  className="p-2 rounded-full hover:bg-white/20 cursor-pointer"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              <div className="p-2 lg:p-4 h-full overflow-y-auto overflow-x-hidden">
                <FolderDashboard
                  roomId={roomId}
                  onClose={() => setShowFolderDashboard(false)}
                  onInsertToInput={(text) => {
                    const el = editableRef.current;
                    if (!el) return;
                    const cur = String(el.innerText || '');
                    el.innerText = cur + (cur ? ' ' : '') + String(text || '');
                    try {
                      const range = document.createRange();
                      range.selectNodeContents(el);
                      range.collapse(false);
                      const sel = window.getSelection();
                      sel?.removeAllRanges();
                      sel?.addRange(range);
                    } catch {}
                    el.focus();
                    onInputEditable();
                  }}
                  onAttachFromFolder={(att) => onAttachFromFolder(att)}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}

      {showFolderSaveWizard &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[85vh] flex flex-col">
              <div className="relative w-full">
                <button
                  onClick={() => {
                    setShowFolderSaveWizard(false);
                    setPendingSaveMessage(null);
                  }}
                  className="absolute right-4 top-3 p-2 rounded-full hover:bg-gray-100 cursor-pointer z-10"
                >
                  <HiX className="w-5 h-5 text-gray-500" />
                </button>
                {pendingSaveMessage && (
                  <FolderSaveWizard
                    roomId={roomId}
                    pending={pendingSaveMessage}
                    onClose={() => {
                      setShowFolderSaveWizard(false);
                      setPendingSaveMessage(null);
                    }}
                  />
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}

      {showChatFlashDashboard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden h-[90vh]">
            <div className="flex items-center justify-between px-4 py-3  border-b-gray-300 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <HiLightningBolt className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold">Chat nhanh</h3>
              </div>
              <button
                onClick={() => setShowChatFlashDashboard(false)}
                className="p-2 rounded-full hover:bg-white/20 cursor-pointer"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <ChatFlashDashboard roomId={roomId} onClose={() => setShowChatFlashDashboard(false)} />
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
    </div>
  );
}
