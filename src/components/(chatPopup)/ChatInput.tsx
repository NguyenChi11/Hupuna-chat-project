'use client';

import React, { ClipboardEvent, KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react';
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
} from 'react-icons/hi2';
import { HiDocumentText, HiLightningBolt, HiX } from 'react-icons/hi';
import Image from 'next/image';
import { useChatContext } from '@/context/ChatContext';
import FolderDashboard from '@/components/(chatPopup)/components/Folder/FolderDashboard';
import FolderSaveWizard from '@/components/(chatPopup)/components/Folder/FolderSaveWizard';
import ChatFlashDashboard from '@/components/(chatPopup)/components/Chat-Flash/ChatFlashDashboard';
import UploadProgressBar from '@/components/(chatPopup)/UploadProgressBar';

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
      setShowMobileActions(false);
    };
    document.addEventListener('mousedown', onDoc, true);
    document.addEventListener('touchstart', onDoc, true);
    return () => {
      document.removeEventListener('mousedown', onDoc, true);
      document.removeEventListener('touchstart', onDoc, true);
    };
  }, [showMobileActions]);

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
  const updateSlashState = () => {
    const text = editableRef.current ? String(editableRef.current.innerText || '') : '';
    const m = text.match(/\/\s*([\w-]*)$/);
    const q = m ? m[1] : '';
    setSlashQuery(q);
    const shouldOpen = /\//.test(text);
    setSlashOpen(shouldOpen);
  };
  return (
    <div className="relative w-full p-2 bg-gradient-to-t from-white via-white to-gray-50/50">
      {isUploading ? (
        <div className="mb-2 w-full overflow-hidden rounded-xl">
          <UploadProgressBar uploadingCount={uploadingCount} overallUploadPercent={overallUploadPercent} />
        </div>
      ) : attachments && attachments.length > 0 ? (
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
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {/* Toolbar trái – Sang trọng như Zalo Premium */}
      <div className="flex items-center gap-2 md:mb-2 mb-0">
        {/* Emoji */}
        <button
          onClick={onToggleEmojiPicker}
          className="hidden md:block group p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Chọn emoji"
        >
          <HiFaceSmile className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
        </button>

        {/* <button
          onClick={() => setShowChatFlashDashboard(true)}
          className="group p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-indigo-100 to-blue-100 hover:from-indigo-200 hover:to-blue-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Mở dashboard Chat nhanh"
        >
          <div className="flex items-center gap-1">
            <HiLightningBolt className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-700 max-w-[9rem] truncate">
              {selectedFlashFolder?.name || 'Chọn thư mục'}
            </span>
          </div>
        </button> */}

        <button
          onClick={() => setShowFolderDashboard(true)}
          className="md:block hidden group p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Mở dashboard Folder"
        >
          <div className="flex items-center gap-1">
            <HiFolder className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-700 max-w-[9rem] truncate">Folder</span>
          </div>
        </button>

        {/* Ảnh/Video */}
        <label
          className="md:block hidden group relative p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Gửi ảnh hoặc video"
        >
          <HiPhoto className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
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

        {/* File */}
        <label
          className="md:block hidden group relative p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Gửi file"
        >
          <HiPaperClip className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform rotate-12" />
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

        {/* Voice – Hiệu ứng pulse đỏ đẹp hơn Zalo */}
        <button
          onClick={onVoiceInput}
          className={`md:block hidden relative p-2 rounded-3xl cursor-pointer transition-all duration-500 shadow-2xl ${
            isListening
              ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white animate-pulse ring-4 ring-red-300/50 scale-110'
              : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 hover:scale-105'
          }`}
          aria-label="Nhập bằng giọng nói"
        >
          <HiMicrophone className="w-6 h-6" />
          {isListening && <div className="absolute inset-0 rounded-3xl bg-red-500/30 animate-ping" />}
        </button>
      </div>

      {/* Input Area + Send Button */}
      <div className="flex items-end gap-3">
        <button
          onClick={onToggleEmojiPicker}
          className="md:hidden block group p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
          aria-label="Chọn emoji"
        >
          <HiFaceSmile className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
        </button>
        {/* Input contentEditable – Đẹp như iMessage */}
        <div className="relative flex-1 min-w-0">
          <div
            ref={editableRef}
            contentEditable
            onInput={() => {
              onInputEditable();
              updateSlashState();
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
              onKeyDownEditable(e);
              updateSlashState();
              if (e.key === 'Enter' && !e.shiftKey) {
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
            onTouchMove={(e) => {
              e.preventDefault();
            }}
            onWheel={(e) => {
              e.preventDefault();
            }}
            onScroll={(e) => {
              try {
                (e.currentTarget as HTMLDivElement).scrollTop = 0;
              } catch {}
            }}
            style={{ touchAction: 'none', overscrollBehavior: 'contain' }}
            className="min-h-10 max-h-40 px-6 py-2 bg-white/90 rounded-3xl shadow-xl border border-gray-200/50 focus:outline-none  transition-all duration-300 text-base text-gray-800 overflow-hidden no-scrollbar w-full max-w-full break-words whitespace-pre-wrap"
            data-placeholder="Nhập tin nhắn..."
          />

          {/* Placeholder đẹp hơn */}
          <div className="pointer-events-none absolute inset-0 flex items-center px-6 py-4 text-gray-400 select-none">
            <span className="flex items-center gap-2">
              <HiSparkles className="w-5 h-5 text-indigo-400" />
              Nhập tin nhắn...
            </span>
          </div>
        </div>

        <div className="md:hidden relative flex items-center gap-2">
          <button
            ref={toggleMobileActionsBtnRef}
            onClick={() => setShowMobileActions((v) => !v)}
            className="p-2 rounded-3xl cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-90"
            aria-label="Mở thêm hành động"
          >
            <HiEllipsisHorizontal className="w-6 h-6" />
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            onClick={() => {
              onSendMessage();
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
            }}
            className="p-2 rounded-3xl cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-90 group"
            aria-label="Gửi tin nhắn"
          >
            <HiPaperAirplane className="w-6 h-6 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          </button>
        </div>
        {/* Desktop: always show send */}
        <button
          onMouseDown={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          onClick={() => {
            onSendMessage();
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
          }}
          className="hidden md:block p-2 rounded-3xl cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-90 group"
          aria-label="Gửi tin nhắn"
        >
          <HiPaperAirplane className="w-7 h-7 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
        </button>
      </div>

      {showMobileActions && (
        <div ref={mobileActionsRef} className="md:hidden w-full mt-2 flex items-center justify-between mx-auto">
          <button
            onClick={() => {
              setShowFolderDashboard(true);
              setShowMobileActions(false);
            }}
            className="group p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
            aria-label="Mở dashboard Folder"
          >
            <div className="flex items-center gap-2">
              <HiFolder className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-700 truncate">Folder</span>
            </div>
          </button>
          <label
            className="group relative p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
            aria-label="Gửi ảnh hoặc video"
          >
            <div className="flex items-center gap-2">
              <HiPhoto className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-700 truncate">Ảnh/Video</span>
            </div>
            <input
              type="file"
              accept="image/*,video/*"
              className="sr-only"
              onChange={(e) => {
                const files = e.target.files ? Array.from(e.target.files) : [];
                files.forEach((f) => onSelectImage(f));
                e.target.value = '';
                setShowMobileActions(false);
              }}
              multiple
            />
          </label>
          <label
            className="group relative p-2 rounded-2xl cursor-pointer bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl"
            aria-label="Gửi file"
          >
            <div className="flex items-center gap-2">
              <HiPaperClip className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform rotate-12" />
              <span className="text-xs text-gray-700 truncate">File</span>
            </div>
            <input
              type="file"
              className="sr-only"
              multiple
              onChange={(e) => {
                const files = e.target.files ? Array.from(e.target.files) : [];
                files.forEach((f) => onSelectFile(f));
                e.target.value = '';
                setShowMobileActions(false);
              }}
            />
          </label>
          <button
            onClick={() => {
              onVoiceInput();
              setShowMobileActions(false);
            }}
            className={`relative p-2 rounded-3xl cursor-pointer transition-all duration-500 shadow-2xl ${
              isListening
                ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white animate-pulse ring-4 ring-red-300/50 scale-110'
                : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 hover:scale-105'
            }`}
            aria-label="Nhập bằng giọng nói"
          >
            <div className="flex items-center gap-2">
              <HiMicrophone className="w-6 h-6" />
              <span className="text-xs text-gray-700 truncate">Voice</span>
            </div>
            {isListening && <div className="absolute inset-0 rounded-3xl bg-red-500/30 animate-ping" />}
          </button>
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

      {showFolderDashboard &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden md:h-[46rem] h-[45rem] ">
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
              <div className="p-4">
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
            <div className="flex items-center justify-between px-4 py-3  border-b">
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
    </div>
  );
}
