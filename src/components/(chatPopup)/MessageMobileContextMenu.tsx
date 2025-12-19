import React, { useEffect, useMemo, useRef } from 'react';
import { Message } from '@/types/Message';
import { RiReplyLine } from 'react-icons/ri';
import {
  HiOutlineClipboardCopy,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineTrash,
  HiOutlineAcademicCap,
  HiFolder,
} from 'react-icons/hi';
import type { ContextMenuState } from './MessageContextMenu';

interface MessageMobileContextMenuProps {
  contextMenu: ContextMenuState | null;
  currentUserId: string;
  onClose: () => void;
  onPinMessage: (msg: Message) => void;
  onRecallMessage: (messageId: string) => void;
  onReplyMessage?: (msg: Message) => void;
  onShareMessage: (message: Message) => void;
  onToggleReaction?: (msg: Message, emoji: string) => void;
}

export default function MessageMobileContextMenu({
  contextMenu,
  currentUserId,
  onClose,
  onPinMessage,
  onRecallMessage,
  onReplyMessage,
  onShareMessage,
  onToggleReaction,
}: MessageMobileContextMenuProps) {
  const startYRef = useRef<number | null>(null);
  const movedRef = useRef(false);

  const isVisible = !!contextMenu?.visible;
  const msg = contextMenu?.message as Message | undefined;
  const x = contextMenu?.x ?? 0;
  const y = contextMenu?.y ?? 0;
  const placement = contextMenu?.placement ?? 'below';

  const getSenderId = (u: Message['sender'] | string | null | undefined): string => {
    try {
      if (!u) return '';
      if (typeof u === 'string') return String(u);
      const obj = u as Record<string, unknown>;
      const idA = obj && (obj['_id'] as unknown);
      const idB = obj && (obj['id'] as unknown);
      if (idA != null) return String(idA);
      if (idB != null) return String(idB);
    } catch {}
    return '';
  };

  const isMe = useMemo(() => {
    const id = getSenderId(msg?.sender);
    return id === String(currentUserId);
  }, [msg, currentUserId]);

  const isText = msg?.type === 'text';
  const isRecalled = !!msg?.isRecalled;
  const canCopy = isText && !isRecalled;
  const canDownload =
    !!msg?.fileUrl && (msg?.type === 'image' || msg?.type === 'file' || msg?.type === 'sticker' || msg?.type === 'video');
  const canRecall = isMe && !isRecalled;
  const isPinned = !!msg?.isPinned;

  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const prevent = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('touchmove', prevent as EventListener);
    };
  }, [isVisible]);

  const handleCopy = async () => {
    const text = msg?.content || '';
    if (!text) return;
    try {
      const anyWindow = window as unknown as { isSecureContext?: boolean };
      if (navigator.clipboard && anyWindow.isSecureContext) {
        await navigator.clipboard.writeText(text);
        onClose();
        return;
      }
    } catch {}
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) onClose();
    } catch {}
  };

  if (!isVisible || !msg) return null;

  const panelStyle: React.CSSProperties = {
    top: y,
    left: x,
    transform: 'translateX(-50%)',
  };

  return (
    <div className="fixed inset-0 z-[9999]" onContextMenu={(e) => e.preventDefault()}>
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        onTouchStart={(e) => {
          const t = e.touches[0];
          startYRef.current = t.clientY;
          movedRef.current = false;
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          const s = startYRef.current ?? t.clientY;
          if (Math.abs(t.clientY - s) > 8) movedRef.current = true;
        }}
        onTouchEnd={(e) => {
          const t = e.changedTouches[0];
          const s = startYRef.current ?? t.clientY;
          const dy = t.clientY - s;
          if (dy > 60) onClose();
        }}
      />
      <div
        className={`absolute ${placement === 'above' ? 'bottom-auto' : 'top-auto'} ${placement === 'above' ? '' : ''}`}
        data-context-menu="true"
        style={panelStyle}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        {!isRecalled && typeof onToggleReaction === 'function' && (
          <div
            className="bottom-full bg-white rounded-xl p-2 mb-2 "
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2">
              {['👍', '❤️', '😂', '😮', '😢', '😡'].map((em) => (
                <button
                  key={em}
                  onClick={() => {
                    onToggleReaction?.(msg, em);
                    onClose();
                  }}
                  className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center active:scale-95 transition-all"
                  aria-label={`Biểu cảm ${em}`}
                  title={`Biểu cảm ${em}`}
                >
                  <span className="text-lg leading-none">{em}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="w-screen max-w-[24rem] bg-white rounded-2xl shadow-2xl border border-gray-200 p-1 animate-in fade-in zoom-in-95 duration-200">
         
          <div className="grid grid-cols-3 gap-1">
            {onReplyMessage && !isRecalled && (
              <button
                onClick={() => {
                  onReplyMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Trả lời tin nhắn"
                title="Trả lời tin nhắn"
              >
                <RiReplyLine className="w-5 h-5 text-blue-600" />
                <span className="text-[0.75rem] text-gray-800">Trả lời</span>
              </button>
            )}

            {canCopy && (
              <button
                onClick={handleCopy}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-green-50 active:scale-95 transition-all"
                aria-label="Sao chép nội dung"
                title="Sao chép nội dung"
              >
                <HiOutlineClipboardCopy className="w-5 h-5 text-green-600" />
                <span className="text-[0.75rem] text-gray-800">Sao chép</span>
              </button>
            )}

            {!isRecalled && (
              <button
                onClick={() => {
                  onShareMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-indigo-50 active:scale-95 transition-all"
                aria-label="Chia sẻ tin nhắn"
                title="Chia sẻ tin nhắn"
              >
                <HiOutlineShare className="w-5 h-5 text-indigo-600" />
                <span className="text-[0.75rem] text-gray-800">Chia sẻ</span>
              </button>
            )}

            {!isRecalled && (
              <button
                onClick={() => {
                  try {
                    const ev = new CustomEvent('openFolderSaveWizard', {
                      detail: {
                        roomId: String(msg.roomId || ''),
                        messageId: String(msg._id || ''),
                        content:
                          msg.type === 'text'
                            ? String(msg.content || '')
                            : String(msg.fileName || ''),
                        type: String(msg.type || 'text'),
                        fileUrl: msg.fileUrl ? String(msg.fileUrl) : undefined,
                        fileName: msg.fileName ? String(msg.fileName) : undefined,
                      },
                    });
                    window.dispatchEvent(ev);
                  } catch {}
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-orange-50 active:scale-95 transition-all"
                aria-label="Lưu vào thư mục"
                title="Lưu vào thư mục"
              >
                <HiFolder className="w-5 h-5 text-orange-600" />
                <span className="text-[0.75rem] text-gray-800">Thư mục</span>
              </button>
            )}

            {!isRecalled && (
              <button
                onClick={() => {
                  onPinMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-amber-50 active:scale-95 transition-all"
                aria-label={isPinned ? 'Bỏ ghim' : 'Ghim'}
                title={isPinned ? 'Bỏ ghim' : 'Ghim'}
              >
                <HiOutlineAcademicCap className={`w-5 h-5 ${isPinned ? 'text-amber-600' : 'text-amber-600'}`} />
                <span className="text-[0.75rem] text-gray-800">{isPinned ? 'Bỏ ghim' : 'Ghim'}</span>
              </button>
            )}

            {canDownload && (
              <a
                href={msg?.fileUrl}
                download={msg?.fileName || 'file_chat'}
                onClick={() => setTimeout(onClose, 100)}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-teal-50 active:scale-95 transition-all"
                aria-label="Tải xuống"
                title="Tải xuống"
              >
                <HiOutlineDownload className="w-5 h-5 text-teal-600" />
                <span className="text-[0.75rem] text-gray-800">Tải xuống</span>
              </a>
            )}

            {canRecall && (
              <button
                onClick={() => {
                  onRecallMessage(String(msg?._id));
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl bg-gray-50 hover:bg-red-50 active:scale-95 transition-all"
                aria-label="Thu hồi tin nhắn"
                title="Thu hồi tin nhắn"
              >
                <HiOutlineTrash className="w-5 h-5 text-red-600" />
                <span className="text-[0.75rem] text-gray-800">Thu hồi</span>
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
