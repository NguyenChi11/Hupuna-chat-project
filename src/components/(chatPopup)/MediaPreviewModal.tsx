/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  HiX,
  HiDownload,
  HiPhotograph,
  HiVideoCamera,
  HiChevronUp,
  HiChevronDown,
  HiPlay,
  HiExternalLink,
  HiChevronLeft,
  HiChevronRight,
  HiCloud,
  HiDotsVertical,
  HiDotsHorizontal,
  HiPencil,
  HiShare,
  HiDuplicate,
  HiSave,
} from 'react-icons/hi';
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from 'react-icons/hi2';
import { FaReply, FaRegShareFromSquare, FaLink } from 'react-icons/fa6';
import { getProxyUrl } from '@/utils/utils';
import { Message } from '@/types/Message';
import MediaEditor from './MediaEditor';

interface MediaPreviewModalProps {
  media: { id?: string; url: string; type: 'image' | 'video' } | null;
  chatName?: string;
  isGroup?: boolean;
  onClose: () => void;
  roomId?: string;
  onReply?: (messageId: string) => void;
  onShare?: (url: string, messageId?: string) => void;
  onShareMessage?: (message: Message) => void;
  onJumpToMessage?: (messageId: string) => void;
}

export default function MediaPreviewModal({
  media,
  chatName,
  isGroup,
  onClose,
  roomId,
  onReply,
  onShare,
  onShareMessage,
  onJumpToMessage,
}: MediaPreviewModalProps) {
  const [groups, setGroups] = useState<
    { dateLabel: string; items: { id: string; type: 'image' | 'video'; url: string; timestamp?: number }[] }[]
  >([]);
  const items = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const [current, setCurrent] = useState<{ id?: string; url: string; type: 'image' | 'video' } | null>(media);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const openedAtRef = useRef<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setCurrent(media);
    if (media) openedAtRef.current = Date.now();
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [media]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.preventDefault(); // Prevent text selection or image drag default
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current || zoom <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartRef.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !dragStartRef.current || zoom <= 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStartRef.current.x,
      y: touch.clientY - dragStartRef.current.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  useEffect(() => {
    const fetchAll = async () => {
      if (!roomId) return;
      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'readAssets', roomId, assetType: 'media', limit: 5000 }),
        });
        const json = await res.json();
        const gs = Array.isArray(json?.groups) ? json.groups : [];
        setGroups(gs);
      } catch {}
    };
    fetchAll();
  }, [roomId]);

  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [current?.url]);

  useEffect(() => {
    if (!current) return;
    const el = itemRefs.current[current.url];
    const list = listRef.current;
    if (el && list) {
      try {
        const isHorizontal = list.scrollWidth > list.clientWidth;
        if (isHorizontal) {
          const targetLeft = el.offsetLeft - (list.clientWidth / 2 - el.clientWidth / 2);
          list.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
        } else {
          const targetTop = el.offsetTop - (list.clientHeight / 2 - el.clientHeight / 2);
          list.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
      } catch {}
    }
  }, [current, items, showThumbnails]);

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = async () => {
    if (!current?.url) return;
    try {
      const res = await fetch(getProxyUrl(current.url, true));
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = current.url.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      window.open(getProxyUrl(current.url, true), '_blank');
    }
    setShowMoreMenu(false);
  };

  const handleShareFunc = () => {
    if (!current?.url) return;
    const url = getProxyUrl(current.url, true);

    if (onShareMessage && roomId) {
      const msg: Message = {
        _id: current.id || Date.now().toString(),
        roomId: roomId,
        sender: 'unknown',
        type: current.type,
        fileUrl: current.url,
        timestamp: Date.now(),
      };
      onShareMessage(msg);
      setShowMoreMenu(false);
      return;
    }

    if (onShare) onShare(url, current?.id);
    else if (navigator.share) {
      navigator.share({ title: chatName || 'Media', url }).catch(() => {});
    } else {
      try {
        navigator.clipboard.writeText(url);
      } catch {}
    }
    setShowMoreMenu(false);
  };

  const handleCopyLink = () => {
    if (!current?.url) return;
    try {
      navigator.clipboard.writeText(getProxyUrl(current.url, true));
    } catch {}
    setShowMoreMenu(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowMoreMenu(false);
  };

  if (!current) return null;

  if (isEditing && current) {
    return (
      <MediaEditor
        mediaUrl={current.url}
        mediaType={current.type}
        chatName={chatName}
        onClose={() => setIsEditing(false)}
        onSend={(data) => {
          try {
            const detail = {
              type: current.type,
              imageDataUrl: data?.videoCropConfig ? undefined : (data?.imageDataUrl ?? undefined),
              originalUrl: current.url,
              videoCropConfig: data?.videoCropConfig ?? undefined,
            };
            const ev = new CustomEvent('sendEditedMedia', { detail });
            window.dispatchEvent(ev);
          } catch {}
          setIsEditing(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        const sinceOpen = Date.now() - openedAtRef.current;
        if (sinceOpen < 200) return;
        onClose();
      }}
    >
      <div className="relative w-full max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="hidden md:block absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-3 text-white text-center">
          <h3 className="text-lg sm:text-xl font-semibold truncate">
            {chatName || (isGroup ? 'Nhóm chat' : 'Cuộc trò chuyện')}
          </h3>
        </div>

        <div className="flex items-center justify-center min-h-screen md:py-16 py-12 overflow-hidden">
          <div
            className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            {current.type === 'image' ? (
              <div
                className="animate-in fade-in zoom-in-95 duration-300"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.2s',
                }}
              >
                <Image
                  src={getProxyUrl(current.url)}
                  alt="Xem ảnh lớn"
                  width={1600}
                  height={1200}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-md shadow-2xl select-none pointer-events-none"
                  priority
                />
              </div>
            ) : (
              <div
                className="animate-in fade-in duration-300 rounded-md overflow-hidden shadow-2xl"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.2s',
                }}
              >
                <video
                  src={getProxyUrl(current.url)}
                  controls={zoom <= 1} // Hide controls when zooming to prevent interaction conflict or just keep them
                  autoPlay
                  loop
                  muted={false}
                  className="max-h-[70vh] w-auto max-w-full rounded-md select-none"
                  playsInline
                />
              </div>
            )}
          </div>
        </div>

        {items.length > 0 && showThumbnails && (
          <>
            <div className="hidden md:flex absolute right-36 top-1/2 -translate-y-1/2 flex-row items-center gap-3 z-20">
              <button
                className="p-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg"
                onClick={() => {
                  const currentIndex = items.findIndex((it) => it.url === current?.url);
                  if (currentIndex > 0) {
                    const prev = items[currentIndex - 1];
                    setCurrent({ id: prev.id, url: prev.url, type: prev.type });
                  }
                }}
              >
                <HiChevronUp className="w-5 h-5" />
              </button>
              <button
                className="p-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg"
                onClick={() => {
                  const currentIndex = items.findIndex((it) => it.url === current?.url);
                  if (currentIndex < items.length - 1) {
                    const next = items[currentIndex + 1];
                    setCurrent({ id: next.id, url: next.url, type: next.type });
                  }
                }}
              >
                <HiChevronDown className="w-5 h-5" />
              </button>
            </div>

            <div className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20">
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = items.findIndex((it) => it.url === current?.url);
                  if (currentIndex > 0) {
                    const prev = items[currentIndex - 1];
                    setCurrent({ id: prev.id, url: prev.url, type: prev.type });
                  }
                }}
                style={{ visibility: items.findIndex((it) => it.url === current?.url) > 0 ? 'visible' : 'hidden' }}
              >
                <HiChevronLeft className="w-8 h-8" />
              </button>
            </div>
            <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20">
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = items.findIndex((it) => it.url === current?.url);
                  if (currentIndex < items.length - 1) {
                    const next = items[currentIndex + 1];
                    setCurrent({ id: next.id, url: next.url, type: next.type });
                  }
                }}
                style={{
                  visibility:
                    items.findIndex((it) => it.url === current?.url) < items.length - 1 ? 'visible' : 'hidden',
                }}
              >
                <HiChevronRight className="w-8 h-8" />
              </button>
            </div>
          </>
        )}

        {/* Thumbnails moved to bottom bar */}

        <div className="absolute left-0 right-0 top-0 z-20 px-4 sm:px-6 py-2 bg-black/40 backdrop-blur-sm border-t border-white/10 text-white flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              className="md:hidden p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95"
              title="Đóng"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm font-medium truncate md:max-w-[40vw] max-w-[50vw] text-center md:text-left">
              {chatName || (isGroup ? 'Nhóm chat' : 'Cuộc trò chuyện')}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-white/80">
            <button
              className="cursor-pointer inline-flex p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95"
              onClick={(e) => {
                e.preventDefault();
                handleDownload();
              }}
              title="Tải xuống"
            >
              <HiDownload className="w-5 h-5" />
            </button>

            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95"
                title="Thêm"
              >
                <HiDotsHorizontal className="w-5 h-5" />
              </button>

              {showMoreMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col py-1">
                  <button
                    onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.2).toFixed(2)))}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiMagnifyingGlassPlus className="w-5 h-5" />
                    <span>Phóng to</span>
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.2).toFixed(2)))}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiMagnifyingGlassMinus className="w-5 h-5" />
                    <span>Thu nhỏ</span>
                  </button>
                  <button
                    onClick={handleEdit}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiPencil className="w-5 h-5" />
                    <span>Chỉnh sửa ảnh</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiSave className="w-5 h-5" />
                    <span>Lưu về máy</span>
                  </button>
                  <button
                    onClick={handleShareFunc}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiShare className="w-5 h-5" />
                    <span>Chia sẻ</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-white/10 text-left text-sm text-white transition-colors"
                  >
                    <HiDuplicate className="w-5 h-5" />
                    <span>Copy</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="hidden md:inline-flex p-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95"
              title="Đóng"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-end bg-black/60 backdrop-blur-sm border-t border-white/10 pb-2">
          {groups.length > 0 && showThumbnails && (
            <div className="w-full overflow-x-auto no-scrollbar py-2" ref={listRef}>
              <div className="flex flex-row items-center justify-center gap-2 px-2 min-w-max mx-auto">
                {groups.map((g, gi) => (
                  <div key={`${g.dateLabel}-${gi}`} className="flex flex-row gap-2">
                    {g.items.map((it) => (
                      <div
                        key={it.id}
                        ref={(el) => {
                          itemRefs.current[it.url] = el;
                        }}
                        className={`relative rounded-md overflow-hidden border ${
                          current && current.url === it.url ? 'border-blue-400' : 'border-transparent'
                        } cursor-pointer w-16 h-16 shrink-0`}
                        onClick={() => setCurrent({ id: it.id, url: it.url, type: it.type })}
                      >
                        {it.type === 'image' ? (
                          <Image
                            src={getProxyUrl(it.url)}
                            alt="thumb"
                            width={120}
                            height={120}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video src={getProxyUrl(it.url)} className="w-full h-full object-cover" preload="metadata" />
                        )}
                        <div className="absolute inset-0 hover:bg-black/30 transition-opacity duration-300 flex items-center justify-center">
                          {it.type === 'video' && <HiPlay className="w-6 h-6 text-white drop-shadow-lg" />}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between w-full gap-4 px-5 sm:px-6 py-2 text-white">
            <div className="flex items-center justify-center gap-4">
              <button
                className={`cursor-pointer p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 ${
                  showThumbnails ? 'bg-white/30' : ''
                }`}
                title="Hiện/Ẩn danh sách"
                onClick={() => setShowThumbnails(!showThumbnails)}
              >
                <HiPhotograph className="w-6 h-6 md:w-5 md:h-5" />
              </button>
            </div>

            <button
              className="cursor-pointer p-3 md:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95 "
              title="Chia sẻ"
              onClick={handleShareFunc}
            >
              <FaRegShareFromSquare className="w-6 h-6 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
