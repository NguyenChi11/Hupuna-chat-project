import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Message } from '@/types/Message';
import { RiReplyLine } from 'react-icons/ri';
import { HiOutlineDownload, HiFolder } from 'react-icons/hi';
import type { ContextMenuState } from './MessageContextMenu';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
import ICReply from '../svg/ICReply';
import ICShareMessage from '../svg/ICShareMessage';
import ICCopy from '../svg/ICCopy';
import ICPin from '../svg/ICPin';
import ICTrashCan from '../svg/ICTrashCan';
import ICTrash from '../svg/ICTrash';
import ICFolder from '../svg/ICFolder';
import ICDownload from '../svg/ICDownload';
import ICFolder2 from '../svg/ICFolder2';
import { HiPlay } from 'react-icons/hi2';
import { HiPencil } from 'react-icons/hi';

interface MessageMobileContextMenuProps {
  contextMenu: ContextMenuState | null;
  currentUserId: string;
  onClose: () => void;
  onPinMessage: (msg: Message) => void;
  onRecallMessage: (messageId: string) => void;
  onReplyMessage?: (msg: Message) => void;
  onShareMessage: (message: Message) => void;
  onToggleReaction?: (msg: Message, emoji: string) => void;
  setEditingMessageId?: (id: string | null) => void;
  setEditContent?: (content: string) => void;
  closeContextMenu?: () => void;
  iconSize?: number;
  reactionSize?: number;
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
  setEditingMessageId,
  setEditContent,
  closeContextMenu,
  iconSize = 35,
  reactionSize = 35,
}: MessageMobileContextMenuProps) {
  const startYRef = useRef<number | null>(null);
  const movedRef = useRef(false);
  const focusTop = contextMenu?.focusTop ?? undefined;
  const focusHeight = contextMenu?.focusHeight ?? undefined;

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
    !!msg?.fileUrl &&
    (msg?.type === 'image' || msg?.type === 'file' || msg?.type === 'sticker' || msg?.type === 'video');
  const canRecall = isMe && !isRecalled;
  const isPinned = !!msg?.isPinned;
  const canEdit = isMe && isText && !isRecalled;
  const [imageDims, setImageDims] = useState<{ w: number; h: number } | null>(null);

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

  useEffect(() => {
    setImageDims(null);
  }, [msg?.fileUrl, msg?.type]);

  useEffect(() => {
    if (!isVisible) return;
    if (msg?.type !== 'image' || !msg?.fileUrl) return;
    try {
      const img = document.createElement('img');
      img.src = getProxyUrl(msg.fileUrl);
      img.decoding = 'async';
      img.onload = () => {
        const natW = img.naturalWidth || 0;
        const natH = img.naturalHeight || 0;
        if (natW > 0 && natH > 0) {
          const viewportW = typeof window !== 'undefined' ? window.innerWidth : 600;
          const viewportH = typeof window !== 'undefined' ? window.innerHeight : 800;
          const targetH = typeof focusHeight === 'number' ? focusHeight : Math.floor(viewportH * 0.78);
          const idealW = Math.floor((natW * targetH) / natH);
          const maxW = Math.floor(viewportW * 0.88);
          const minW = 120;
          const w = Math.max(minW, Math.min(idealW, maxW));
          setImageDims({ w, h: targetH });
        }
      };
    } catch {}
  }, [isVisible, msg?.type, msg?.fileUrl, focusHeight]);

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
      {/* Preview bubble fixed at center top */}
      {msg.type === 'text' && typeof focusTop === 'number' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[10000] w-[88vw] max-w-[22rem] px-2 animate-in fade-in zoom-in-95 duration-200"
          style={{ top: focusTop }}
        >
          <div
            className={`mx-auto rounded-2xl shadow-2xl border ${
              isMe ? 'bg-[#E5F1FF] border-blue-200' : 'bg-white border-gray-200'
            } px-4 py-3 text-[1rem] text-black relative`}
            style={{ maxHeight: focusHeight ? `${focusHeight}px` : '32vh', overflow: 'hidden' }}
          >
            <div className="whitespace-pre-wrap break-words">{msg.content || ''}</div>
            <div className="absolute left-0 right-0 bottom-0 h-8 pointer-events-none bg-gradient-to-t from-white/90 to-transparent" />
          </div>
        </div>
      )}
      {msg.type === 'image' &&
        msg.fileUrl &&
        typeof focusTop === 'number' &&
        (() => {
          const viewportW = typeof window !== 'undefined' ? window.innerWidth : 600;
          const fallbackW = Math.floor(viewportW * 0.88);
          const panelW = imageDims?.w ?? fallbackW;
          const panelStyleWidth: React.CSSProperties = { width: panelW };
          return (
            <div
              className="fixed left-1/2 -translate-x-1/2 z-[10000] px-2 animate-in fade-in zoom-in-95 duration-200"
              style={{ top: focusTop, ...panelStyleWidth }}
            >
              <div
                className="mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-2 relative"
                style={{ height: focusHeight ? `${focusHeight}px` : '78vh' }}
              >
                <div className="relative w-full h-full">
                  <Image src={getProxyUrl(msg.fileUrl)} alt={msg.fileName || 'Ảnh'} fill className="object-contain" />
                </div>
              </div>
            </div>
          );
        })()}
      {msg.type === 'video' && msg.fileUrl && typeof focusTop === 'number' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[10000] w-[88vw] max-w-[22rem] px-2 animate-in fade-in zoom-in-95 duration-200"
          style={{ top: focusTop }}
        >
          <div
            className="mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-2 relative"
            style={{ maxHeight: focusHeight ? `${focusHeight}px` : '34vh', overflow: 'hidden' }}
          >
            <div className="relative w-full">
              <video
                src={getProxyUrl(msg.fileUrl)}
                className="w-full h-auto object-contain bg-black rounded-xl"
                style={{ maxHeight: '100%' }}
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-100">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow">
                  <HiPlay className="w-7 h-7 text-blue-600 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {msg.type === 'file' && msg.fileUrl && typeof focusTop === 'number' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[10000] w-[92vw] max-w-[24rem] px-2"
          style={{ top: focusTop }}
        >
          <div
            className="mx-auto rounded-2xl shadow-2xl border bg-white border-gray-200 p-3 relative"
            style={{ maxHeight: '38vh', overflow: 'hidden' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-xl">
                <HiOutlineDownload className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{msg.fileName || 'Tệp đính kèm'}</p>
                <p className="text-xs text-gray-500 truncate">Giữ để mở thêm hành động</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`absolute z-[10001] ${placement === 'above' ? 'bottom-auto' : 'top-auto'} ${placement === 'above' ? '' : ''}`}
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
                  aria-label={`Biểu cảm ${em}`}
                  title={`Biểu cảm ${em}`}
                >
                  <span className="leading-none" style={{ fontSize: reactionSize }}>
                    {em}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="w-screen max-w-[24rem] bg-white rounded-2xl shadow-2xl border border-gray-200 p-1 animate-in fade-in zoom-in-95 duration-200">
          <div className="grid grid-cols-4 gap-1">
            {onReplyMessage && !isRecalled && (
              <button
                onClick={() => {
                  onReplyMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Trả lời tin nhắn"
                title="Trả lời tin nhắn"
              >
                <ICReply size={24} color="#2563eb" className="w-10 h-10" />
                <span className="text-[0.75rem] text-gray-800">Trả lời</span>
              </button>
            )}
            
            {!isRecalled && (
              <button
                onClick={() => {
                  onShareMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-indigo-50 active:scale-95 transition-all"
                aria-label="Chia sẻ tin nhắn"
                title="Chia sẻ tin nhắn"
              >
                <ICShareMessage className="w-9 h-9 text-blue-500" />
                <span className="text-[0.75rem] text-gray-800">Chia sẻ</span>
              </button>
            )}
            {canEdit && (
              <button
                onClick={() => {
                  if (setEditingMessageId && setEditContent) {
                    setEditingMessageId(String(msg._id));
                    setEditContent(String(msg.content || ''));
                  }
                  (closeContextMenu || onClose)();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl hover:bg-purple-50 active:scale-95 transition-all"
                aria-label="Chỉnh sửa tin nhắn"
                title="Chỉnh sửa tin nhắn"
              >
                <HiPencil className="w-9 h-9  " />
                <span className="text-[0.75rem] text-gray-800">Chỉnh sửa</span>
              </button>
            )}

            {canCopy && (
              <button
                onClick={handleCopy}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl hover:bg-green-50 active:scale-95 transition-all"
                aria-label="Sao chép nội dung"
                title="Sao chép nội dung"
              >
                <ICCopy className="w-12 h-12 text-blue-500" />
                {/* <HiOutlineClipboardCopy className="text-green-600" style={{ width: iconSize, height: iconSize }} /> */}
                <span className="text-[0.75rem] text-gray-800">Sao chép</span>
              </button>
            )}
            {/* thư mục */}

            {!isRecalled && (
              <button
                onClick={() => {
                  onPinMessage(msg);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-amber-50 active:scale-95 transition-all"
                aria-label={isPinned ? 'Bỏ ghim' : 'Ghim'}
                title={isPinned ? 'Bỏ ghim' : 'Ghim'}
              >
                <ICPin className={`${isPinned ? 'text-amber-600' : 'text-red-600'}`} size={24} />
                <span className="text-[0.75rem] text-gray-800">{isPinned ? 'Bỏ ghim' : 'Ghim'}</span>
              </button>
            )}

            {canDownload && (
              <a
                href={msg?.fileUrl}
                download={msg?.fileName || 'file_chat'}
                onClick={() => setTimeout(onClose, 100)}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-teal-50 active:scale-95 transition-all"
                aria-label="Tải xuống"
                title="Tải xuống"
              >
                <ICDownload className="w-10 h-10 text-blue-500 hover:text-blue-500 cursor-pointer" />

                <span className="text-[0.75rem] text-gray-800">Tải xuống</span>
              </a>
            )}

            
            {canRecall && (
              <button
                onClick={() => {
                  onRecallMessage(String(msg?._id));
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-red-50 active:scale-95 transition-all"
                aria-label="Thu hồi tin nhắn"
                title="Thu hồi tin nhắn"
              >
                <ICTrash className="w-10 h-10 text-red-600" />
                <span className="text-[0.75rem] text-gray-800">Thu hồi</span>
              </button>
            )}
            {!isRecalled && (
              <button
                // onClick={() => {
                //   try {
                //     const batchItems =
                //       (
                //         msg as unknown as {
                //           batchItems?: Array<{
                //             id: string;
                //             type?: 'image' | 'video' | 'file' | 'text';
                //             fileUrl?: string;
                //             fileName?: string;
                //             content?: string;
                //           }>;
                //         }
                //       ).batchItems || [];
                //     const ev = new CustomEvent('openFolderSaveWizard', {
                //       detail: {
                //         roomId: String(msg.roomId || ''),
                //         messageId: String(msg._id || ''),
                //         content: msg.type === 'text' ? String(msg.content || '') : String(msg.fileName || ''),
                //         type: String(msg.type || 'text'),
                //         fileUrl: msg.fileUrl ? String(msg.fileUrl) : undefined,
                //         fileName: msg.fileName ? String(msg.fileName) : undefined,
                //         batch:
                //           Array.isArray(batchItems) && batchItems.length > 1
                //             ? batchItems.map((it) => ({
                //                 roomId: String(msg.roomId || ''),
                //                 messageId: String(it.id || ''),
                //                 content: String(it.content || ''),
                //                 type: String(it.type || 'text'),
                //                 fileUrl: it.fileUrl ? String(it.fileUrl) : undefined,
                //                 fileName: it.fileName ? String(it.fileName) : undefined,
                //               }))
                //             : undefined,
                //       },
                //     });
                //     window.dispatchEvent(ev);
                //   } catch {}
                //   onClose();
                // }}
                className="flex flex-col items-center justify-center gap-1 p-1 rounded-xl  hover:bg-orange-50 active:scale-95 transition-all"
                aria-label="Lưu vào thư mục"
                title="Lưu vào thư mục"
              >
                <ICFolder2 className="w-8 h-8 text-orange-300 hover:text-orange-500 cursor-pointer" />

                <span className="text-[0.75rem] text-gray-800">Thư mục</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
