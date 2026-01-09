'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Message } from '@/types/Message';
import { User } from '@/types/User';
import type { GlobalSearchMessage } from '@/components/(home)/HomeOverlays';
import { getProxyUrl, normalizeNoAccent, buildAccentInsensitiveRegex, hasDiacritics, accentAwareIncludes } from '@/utils/utils';
import { HiArrowLeft, HiPlay, HiXMark } from 'react-icons/hi2';
import { IoReload, IoReloadCircle } from 'react-icons/io5';

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
  const [senderFilter, setSenderFilter] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const listRef = useRef<HTMLDivElement | null>(null);
  const cacheKey = useMemo(() => `__cache_room_results__:${roomId}:${keyword}`, [roomId, keyword]);
  const scrollKey = useMemo(() => `__room_results_scroll__:${roomId}:${keyword}`, [roomId, keyword]);
  const [myId, setMyId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('info_user');
      if (raw) {
        const user = JSON.parse(raw);
        if (user && user._id) setMyId(String(user._id));
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    try {
      const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
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
            sort: { field: 'timestamp', order: 'desc' },
          }),
        });
        const json = await res.json();
        const rows: Message[] = Array.isArray(json?.data) ? (json.data as Message[]) : [];
        if (!cancelled) {
          const term = normalizeNoAccent(keyword);
          const hasDia = hasDiacritics(keyword);
          const filtered = rows.filter((m) => {
            const text =
              m.type === 'file'
                ? String(m.fileName || '')
                : m.type === 'sticker'
                  ? ''
                  : String(m.content || '');
            return accentAwareIncludes(text, keyword);
          });
          const sorted = filtered.slice().sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
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

  const senderOptions = useMemo(() => {
    const ids = new Set<string>();
    const names = new Map<string, string>();

    messages.forEach((m) => {
      const id = typeof m.sender === 'object' && m.sender ? String((m.sender as User)._id) : String(m.sender || '');
      if (id) {
        ids.add(id);
        if (typeof m.sender === 'object' && (m.sender as User).name) {
          names.set(id, (m.sender as User).name);
        }
      }
    });

    const arr = Array.from(ids).map((id) => {
      const u = allUsers.find((x) => String(x._id) === String(id));
      // Prioritize name -> username -> message sender name -> ID
      const name = u?.name || u?.username || names.get(id) || id;
      return { id, name };
    });
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }, [messages, allUsers]);

  const filtered = useMemo(() => {
    const arr: Message[] = [];
    const startTs = startDate ? new Date(startDate + 'T00:00:00').getTime() : null;
    const endTs = endDate ? new Date(endDate + 'T23:59:59').getTime() : null;
    messages.forEach((m) => {
      const okLink = showLink ? hasLink(m) : false;
      const okFile = showFile ? isFileLike(m) : false;
      const passType = showLink || showFile ? (showLink && okLink) || (showFile && okFile) : true;
      const sid = typeof m.sender === 'object' && m.sender ? String((m.sender as User)._id) : String(m.sender || '');
      const passSender = senderFilter ? String(sid) === String(senderFilter) : true;
      const ts = Number(m.timestamp || 0);
      const passStart = startTs ? ts >= startTs : true;
      const passEnd = endTs ? ts <= endTs : true;
      if (passType && passSender && passStart && passEnd) arr.push(m);
    });
    return arr;
  }, [messages, showLink, showFile, senderFilter, startDate, endDate]);

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

  const computedRoomAvatar = useMemo(() => {
    if (isGroupChat) return undefined;
    if (roomAvatar) return roomAvatar;
    let partnerId: string | null = null;
    const me = String(myId || '');
    if (roomId && roomId.includes('_')) {
      const parts = roomId.split('_');
      partnerId = parts[0] === me ? parts[1] : parts[1] === me ? parts[0] : null;
    }
    if (!partnerId && messages.length > 0) {
      const other = messages.find((m) => {
        const s = typeof m.sender === 'object' ? (m.sender as User)._id : String(m.sender);
        return s !== me;
      });
      if (other) {
        const s = typeof other.sender === 'object' ? (other.sender as User)._id : String(other.sender);
        partnerId = s;
      }
    }
    const u = partnerId ? allUsers.find((x) => String(x._id) === String(partnerId)) : undefined;
    return u?.avatar;
  }, [isGroupChat, roomAvatar, roomId, myId, messages, allUsers]);
  const headerAvatar = isGroupChat ? roomAvatar : computedRoomAvatar || roomAvatar;

  const formatTime = (ts: number) => new Date(ts).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  const highlight = (text: string) => {
    if (!keyword.trim() || !text) return text;
    const re = buildAccentInsensitiveRegex(keyword);
    const parts = String(text).split(re);
    return (
      <span>
        {parts.map((p, i) =>
          re.test(p) ? (
            <span key={i} className=" text-blue-600 md:text-blue-700 font-semibold rounded">
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
    <div
      className={`${anchorToParent ? 'absolute' : 'fixed'} inset-0 z-[50] flex items-center justify-center bg-black/40 backdrop-blur-sm px-0`}
    >
      <div className="bg-white w-full h-full rounded-none shadow-none border-none overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <HiArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden bg-indigo-600 text-white flex items-center justify-center">
              {headerAvatar ? (
                <Image
                  src={getProxyUrl(headerAvatar)}
                  alt=""
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image src="/logo/avata.webp" alt=" " width={64} height={64} className="w-full h-full object-cover" />
              )}
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm truncate w-[10rem] md:w-[10rem]">
                {roomName || 'Cuộc trò chuyện'}
              </div>
              <div className="text-xs text-gray-500">{keyword}</div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <HiXMark className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className=" px-4 py-2 space-y-2 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowLink((v) => !v)}
              className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer ${
                showLink
                  ? 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Link
            </button>
            <button
              onClick={() => setShowFile((v) => !v)}
              className={`px-3 py-1.5 text-sm rounded-full border cursor-pointer ${
                showFile
                  ? 'bg-green-100 text-green-700 border-green-300 hover:bg-green-200'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              File
            </button>
            <select
              value={senderFilter}
              onChange={(e) => setSenderFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-sm cursor-pointer"
            >
              <option value="">Tất cả</option>
              {senderOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name || opt.id}
                </option>
              ))}
            </select>
            <div className="ml-auto text-xs text-gray-500">
              {isLoading ? 'Đang tải...' : `${filtered.length} kết quả`}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              onInput={(e) => setStartDate((e.target as HTMLInputElement).value)}
              placeholder="Chọn ngày"
              className="cursor-pointer border border-gray-300 rounded-lg px-2 py-1 text-sm w-1/2"
            />
            <span className="text-gray-500 text-xs">→</span>
            <input
              type="date"
              value={endDate}
              placeholder="Chọn ngày"
              onChange={(e) => setEndDate(e.target.value)}
              onInput={(e) => setEndDate((e.target as HTMLInputElement).value)}
              className=" cursor-pointer border border-gray-300 rounded-lg px-2 py-1 text-sm w-1/2"
            />
            <button
              type="button"
              onClick={() => {
                setStartDate('');
                setEndDate('');
              }}
              className="ml-auto px-2 py-1 text-xs rounded border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer"
            >
              <IoReload className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar" ref={listRef}>
          {groups.map((g) => (
            <div key={g.label} className="px-4 py-3">
              <div className="text-xs font-bold text-gray-600 mb-2">
                {g.label} ({g.count})
              </div>
              <div className="space-y-2">
                {g.items.map((msg) => {
                  const avatar =
                    getSenderAvatar(msg.sender) || (isGroupChat ? undefined : computedRoomAvatar || roomAvatar);
                  const senderId =
                    typeof msg.sender === 'object' && msg.sender ? (msg.sender as User)._id : String(msg.sender);
                  const senderUser = allUsers.find((u) => String(u._id) === String(senderId));
                  const name = senderUser?.name || (typeof msg.sender === 'object' ? (msg.sender as User).name : '');
                  const preview =
                    msg.type === 'file'
                      ? msg.fileName || 'File'
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
                      className="cursor-pointer w-full flex items-center gap-3 px-2 py-2 rounded-2xl hover:bg-gray-100 transition-colors text-left"
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
                          <Image
                            src="/logo/avata.webp"
                            alt=" "
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-gray-800 text-[1rem] truncate">{name || roomName}</span>
                          <span className="text-sm text-gray-500">{formatTime(msg.timestamp)}</span>
                        </div>
                        {msg.type === 'image' && msg.fileUrl ? (
                          <div className="mt-1">
                            <Image
                              src={getProxyUrl(String(msg.fileUrl))}
                              alt=""
                              width={320}
                              height={240}
                              className="w-10 h-18 rounded-lg object-cover"
                            />
                          </div>
                        ) : msg.type === 'video' && msg.fileUrl ? (
                          <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg max-w-[8vw] sm:max-w-[6rem] aspect-video bg-black">
                            <video
                              src={getProxyUrl(String(msg.fileUrl))}
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              loop
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-100">
                              <div className="w-4 h-4 bg-white/80 rounded-full flex items-center justify-center shadow">
                                <HiPlay className="w-2 h-2 text-blue-600" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className=" text-gray-700 line-clamp-2">{highlight(preview)}</p>
                        )}
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
