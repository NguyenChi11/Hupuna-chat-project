'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import type { GlobalSearchMessage } from '@/components/(home)/HomeOverlays';
import { getProxyUrl } from '@/utils/utils';
import { HiArrowLeft, HiXMark } from 'react-icons/hi2';

interface Props {
  isOpen: boolean;
  roomId: string;
  roomName?: string;
  roomAvatar?: string;
  isGroupChat?: boolean;
  keyword: string;
  allUsers: User[];
  onClose: () => void;
  onNavigateToMessage: (message: GlobalSearchMessage, keyword: string) => void;
  anchorToParent?: boolean;
}

export default function RoomSearchResultsModal({
  isOpen,
  roomId,
  roomName,
  roomAvatar,
  isGroupChat = false,
  keyword,
  allUsers,
  onClose,
  onNavigateToMessage,
  anchorToParent = false,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showLink, setShowLink] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const cacheKey = useMemo(() => `__cache_room_results__:${roomId}:${keyword}`, [roomId, keyword]);
  const scrollKey = useMemo(() => `__room_results_scroll__:${roomId}:${keyword}`, [roomId, keyword]);

  useEffect(() => {
    if (!isOpen) return;
    try {
      const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
      if (!isMobile) return;
      localStorage.setItem(
        '__return_room_results__',
        JSON.stringify({
          origin: anchorToParent ? 'sidebar' : 'global',
          roomId,
          roomName,
          roomAvatar,
          isGroupChat,
          keyword,
          ts: Date.now(),
        }),
      );
    } catch {}
  }, [isOpen, roomId, roomName, roomAvatar, isGroupChat, keyword, anchorToParent]);

  useEffect(() => {
    if (!isOpen || !keyword.trim() || !roomId) {
      setMessages([]);
      return;
    }
    let cancelled = false;
    let fromCache = false;
    try {
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          setMessages(arr as Message[]);
          fromCache = true;
          setIsLoading(false);
        }
      }
    } catch {}
    const run = async () => {
      setIsLoading(!fromCache);
      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'read',
            filters: {
              roomId,
              searchQuery: keyword.trim(),
              isRecalled: { $ne: true },
              isDeleted: { $ne: true },
              type: { $ne: 'notify' },
            },
            limit: 500,
            sort: { timestamp: -1 },
          }),
        });
        const json = await res.json();
        const rows: Message[] = Array.isArray(json?.data) ? (json.data as Message[]) : [];
        if (!cancelled) {
          const sorted = rows.slice().sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
          setMessages(sorted);
          try {
            localStorage.setItem(cacheKey, JSON.stringify(sorted));
          } catch {}
        }
      } catch {
        if (!cancelled && !fromCache) setMessages([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [isOpen, roomId, keyword, cacheKey]);

  useEffect(() => {
    if (!isOpen) return;
    try {
      const y = Number(localStorage.getItem(scrollKey) || '0');
      if (listRef.current && y > 0) {
        listRef.current.scrollTop = y;
      }
    } catch {}
  }, [isOpen, scrollKey]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handler = () => {
      try {
        localStorage.setItem(scrollKey, String(el.scrollTop));
      } catch {}
    };
    el.addEventListener('scroll', handler);
    return () => {
      el.removeEventListener('scroll', handler);
    };
  }, [scrollKey, isOpen]);

  const hasLink = (m: Message) => {
    const c = String(m.content || '');
    return /(https?:\/\/|www\.)/i.test(c);
  };

  const isFileLike = (m: Message) => {
    return m.type === 'file' || m.type === 'image' || m.type === 'video';
  };

  const filtered = useMemo(() => {
    if (!showLink && !showFile) return messages;
    const arr: Message[] = [];
    messages.forEach((m) => {
      const okLink = showLink ? hasLink(m) : false;
      const okFile = showFile ? isFileLike(m) : false;
      if ((showLink && okLink) || (showFile && okFile)) arr.push(m);
    });
    return arr;
  }, [messages, showLink, showFile]);

  const groups = useMemo(() => {
    const byKey = new Map<string, Message[]>();
    const now = new Date();
    filtered.forEach((m) => {
      const d = new Date(m.timestamp || 0);
      const sameDay = d.toDateString() === now.toDateString();
      const key = sameDay ? 'Hôm nay' : `Tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
      if (!byKey.has(key)) byKey.set(key, []);
      byKey.get(key)!.push(m);
    });
    return Array.from(byKey.entries()).map(([label, arr]) => ({
      label,
      items: arr,
      count: arr.length,
    }));
  }, [filtered]);

  const getSenderAvatar = (senderId: string | User | undefined) => {
    const id = typeof senderId === 'object' && senderId ? (senderId as User)._id : String(senderId || '');
    const u = allUsers.find((x) => String(x._id) === String(id));
    return u?.avatar;
  };

  const formatTime = (ts: number) =>
    new Date(ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  const highlight = (text: string) => {
    if (!keyword.trim() || !text) return text;
    const re = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')})`, 'gi');
    const parts = String(text).split(re);
    return (
      <span>
        {parts.map((p, i) =>
          re.test(p) ? (
            <span key={i} className="bg-indigo-100 text-indigo-700 font-semibold rounded">
              {p}
            </span>
          ) : (
            <span key={i}>{p}</span>
          ),
        )}
      </span>
    );
  };

  if (!isOpen) return null;

  return (
    <div className={`${anchorToParent ? 'absolute' : 'fixed'} inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm px-0`}>
      <div className="bg-white w-full h-full rounded-none shadow-none border-none overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <HiArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden bg-indigo-600 text-white flex items-center justify-center">
              {roomAvatar ? (
                <Image src={getProxyUrl(roomAvatar)} alt="" width={36} height={36} className="w-full h-full object-cover" />
              ) : (
                <span className="font-bold">{(roomName || '').charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">{roomName || 'Cuộc trò chuyện'}</div>
              <div className="text-xs text-gray-500">{keyword}</div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <HiXMark className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 border-b">
          <button
            onClick={() => setShowLink((v) => !v)}
            className={`px-3 py-1.5 text-sm rounded-full border ${
              showLink ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Link
          </button>
          <button
            onClick={() => setShowFile((v) => !v)}
            className={`px-3 py-1.5 text-sm rounded-full border ${
              showFile ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            File
          </button>
          <div className="ml-auto text-xs text-gray-500">
            {isLoading ? 'Đang tải...' : `${filtered.length} kết quả`}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto" ref={listRef}>
          {groups.map((g) => (
            <div key={g.label} className="px-4 py-3">
              <div className="text-xs font-bold text-gray-600 mb-2">
                {g.label} ({g.count})
              </div>
              <div className="space-y-2">
                {g.items.map((msg) => {
                  const avatar = isGroupChat ? getSenderAvatar(msg.sender) : roomAvatar;
                  const senderId =
                    typeof msg.sender === 'object' && msg.sender ? (msg.sender as User)._id : String(msg.sender);
                  const senderUser = allUsers.find((u) => String(u._id) === String(senderId));
                  const name = senderUser?.name || (typeof msg.sender === 'object' ? (msg.sender as User).name : '');
                  const preview =
                    msg.type === 'file'
                      ? msg.fileName || 'File'
                      : msg.type === 'image'
                        ? '[Hình ảnh]'
                        : msg.type === 'video'
                          ? '[Video]'
                          : msg.type === 'sticker'
                            ? '[Sticker]'
                            : String(msg.content || '');
                  return (
                    <button
                      key={msg._id}
                      onClick={() => {
                        const senderName =
                          senderUser?.name ||
                          (typeof msg.sender === 'object' && msg.sender ? (msg.sender as User).name : '') ||
                          '';
                        const enriched: GlobalSearchMessage = {
                          _id: msg._id,
                          content: msg.content,
                          type: msg.type as GlobalSearchMessage['type'],
                          fileName: msg.fileName,
                          timestamp: msg.timestamp,
                          sender: senderId,
                          senderName,
                          roomId: msg.roomId,
                          roomName: roomName || '',
                          isGroupChat,
                          fileUrl: msg.fileUrl,
                        };
                        try {
                          localStorage.setItem(
                            '__return_room_results__',
                            JSON.stringify({
                              origin: anchorToParent ? 'sidebar' : 'global',
                              roomId,
                              roomName,
                              roomAvatar,
                              isGroupChat,
                              keyword,
                              ts: Date.now(),
                            }),
                          );
                        } catch {}
                        try {
                          localStorage.setItem(cacheKey, JSON.stringify(messages));
                        } catch {}
                        onNavigateToMessage(enriched, keyword);
                        onClose();
                      }}
                      className="w-full flex items-center gap-3 px-2 py-2 rounded-2xl hover:bg-gray-100 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center flex-shrink-0">
                        {avatar ? (
                          <Image
                            src={getProxyUrl(avatar)}
                            alt=""
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-sm font-bold text-white">
                            {(name || (roomName || '')).charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-gray-800 text-sm truncate">{name || roomName}</span>
                          <span className="text-xs text-gray-500">{formatTime(msg.timestamp)}</span>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">{highlight(preview)}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {!isLoading && filtered.length === 0 && (
            <div className="h-full flex items-center justify-center px-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-3" />
                <div className="text-sm text-gray-500">Không tìm thấy tin nhắn phù hợp</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
