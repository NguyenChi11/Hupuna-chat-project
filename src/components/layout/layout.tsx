'use client';

import React, { useEffect, useRef, useState } from 'react';
import SidebarMenu from '../(menu)/menu';
import { useRouter, usePathname } from 'next/navigation';
import io, { type Socket } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import { createMessageApi } from '@/fetch/messages';
import type { GroupConversation } from '@/types/Group';
import type { User } from '@/types/User';
import IncomingCallModal from '@/components/(call)/IncomingCallModal';
import ModalCall from '@/components/(call)/ModalCall';
import LiveKitCall from '@/components/(call)/LiveKitCall';
import { useLiveKitSession } from '@/hooks/useLiveKitSession';

// React Icons – Bộ hiện đại nhất 2025
import {
  HiChatBubbleLeftRight,
  HiUserGroup,
  HiPhoto,
  HiUserCircle,
  HiSparkles,
  HiRectangleGroup,
} from 'react-icons/hi2';


import { useChatNotifications } from '@/hooks/useChatNotifications';

const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [hideMobileFooter, setHideMobileFooter] = useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [totalUnread, setTotalUnread] = useState<number>(0);
  const [unreadGroups, setUnreadGroups] = useState<number>(0);
  const [unreadContacts, setUnreadContacts] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const groupMembersRef = useRef<Map<string, Array<{ _id: string } | string>>>(new Map());
  const callNotifySeenRef = useRef<Set<string>>(new Set());
  const [showNewMsgBanner, setShowNewMsgBanner] = useState(false);
  const newMsgBannerTimerRef = useRef<number | null>(null);

  const { playMessageSound, flashTabTitle } = useChatNotifications({});

  const router = useRouter();
  const pathname = usePathname();

  const isProfilePage =
    pathname === '/profile' || pathname === '/me' || pathname?.startsWith('/profile') || pathname?.startsWith('/me');

  const pathnameRef = useRef(pathname);
  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  // Kiểm tra đăng nhập – giữ nguyên logic
  useEffect(() => {
    let mounted = true;
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/refresh', { credentials: 'include' });
        if (res.ok) {
          const meRes = await fetch('/api/users/me', { credentials: 'include' });
          const meJson = await meRes.json();
          if (mounted) {
            setIsAuthed(!!meJson?.success);
            if (meJson?.success && meJson?.user) setCurrentUser(meJson.user as User);
          }
        } else {
          const meRes = await fetch('/api/users/me', { credentials: 'include' });
          const meJson = await meRes.json();
          if (mounted) {
            setIsAuthed(!!meJson?.success);
            if (meJson?.success && meJson?.user) setCurrentUser(meJson.user as User);
          }
        }
      } catch {
        try {
          const raw = localStorage.getItem('info_user');
          const u = raw ? JSON.parse(raw) : null;
          if (mounted) {
            setIsAuthed(!!u && !!u._id);
            if (u && u._id) setCurrentUser(u as User);
          }
        } catch {
          if (mounted) setIsAuthed(false);
        }
      } finally {
        if (mounted) setChecked(true);
      }
    };
    checkAuth();
    return () => {
      mounted = false;
    };
  }, []);

  // Lấy current user id để dùng tính tổng unread
  useEffect(() => {
    const loadMe = async () => {
      try {
        const meRes = await fetch('/api/users/me', { credentials: 'include' });
        const meJson = await meRes.json();
        const id = String(meJson?.data?._id || '').trim();
        if (id) {
          setCurrentUserId(id);
          return;
        }
      } catch {}
      try {
        const raw = localStorage.getItem('info_user');
        const u = raw ? JSON.parse(raw) : null;
        const id = String(u?._id || u?.username || '').trim();
        if (id) setCurrentUserId(id);
      } catch {}
    };
    if (isAuthed && checked) loadMe();
  }, [isAuthed, checked]);

  // Tính tổng tin nhắn chưa đọc
  useEffect(() => {
    let timer: number | null = null;
    const fetchUnreadTotal = async () => {
      if (!currentUserId) return;
      try {
        const [usersRes, groupsRes] = await Promise.all([
          fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'read', currentUserId }),
          }),
          fetch('/api/groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'readGroups', _id: currentUserId }),
          }),
        ]);
        const usersJson = await usersRes.json();
        const groupsJson = await groupsRes.json();
        const users = (Array.isArray(usersJson) ? usersJson : usersJson.data || []) as Array<Partial<User>>;
        const groups = (Array.isArray(groupsJson) ? groupsJson : groupsJson.data || []) as Array<
          Partial<GroupConversation>
        >;
        const sumUsers = users.reduce((acc: number, u: Partial<User>) => acc + Number(u?.unreadCount || 0), 0);
        const sumGroups = groups.reduce(
          (acc: number, g: Partial<GroupConversation>) => acc + Number(g?.unreadCount || 0),
          0,
        );
        setTotalUnread(sumUsers + sumGroups);
        setUnreadContacts(sumUsers);
        setUnreadGroups(sumGroups);
      } catch {
        // bỏ qua lỗi
      }
    };
    fetchUnreadTotal();
    timer = window.setInterval(fetchUnreadTotal, 15000);
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [currentUserId]);

  // Ẩn/hiện mobile footer
  useEffect(() => {
    const handler = (e: Event) => {
      const evt = e as CustomEvent<{ hidden?: boolean }>;
      setHideMobileFooter(!!evt.detail?.hidden);
    };
    window.addEventListener('mobile-footer', handler);
    return () => window.removeEventListener('mobile-footer', handler);
  }, []);

  // Redirect khi chưa đăng nhập hoặc khi API trả về 401
  useEffect(() => {
    const orig: typeof fetch = window.fetch;
    const wrapped: typeof fetch = async (input, init) => {
      const url =
        typeof input === 'string'
          ? input
          : input instanceof URL
            ? input.toString()
            : input instanceof Request
              ? input.url
              : '';
      const res = await orig(input, init);
      if (res.status !== 401) return res;
      if (url.includes('/api/auth/refresh')) {
        if (pathname !== '/login') router.push('/login');
        return res;
      }
      try {
        const r = await orig('/api/auth/refresh', { credentials: 'include' });
        if (r.ok) {
          return await orig(input, init);
        }
      } catch {}
      if (pathname !== '/login') router.push('/login');
      return res;
    };
    window.fetch = wrapped;
    return () => {
      window.fetch = orig;
    };
  }, [router, pathname]);

  useEffect(() => {
    if (checked && !isAuthed && pathname !== '/login') {
      router.push('/login');
    }
  }, [checked, isAuthed, pathname, router]);

  useEffect(() => {
    if (!checked || !isAuthed || !currentUser) return;
    if (socketRef.current?.connected) return;
    const s = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
    socketRef.current = s;
    s.emit('join_user', { userId: String(currentUser._id) });
    (async () => {
      try {
        const res = await fetch('/api/groups', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'readGroups', _id: String(currentUser._id) }),
        });
        const j = await res.json();
        const arr = (j?.data || []) as GroupConversation[];
        const m = new Map<string, Array<{ _id: string } | string>>();
        arr.forEach((g) => {
          const gid = String(g._id);
          const members = (Array.isArray(g.members) ? g.members : []) as Array<{ _id: string } | string>;
          m.set(gid, members);
        });
        groupMembersRef.current = m;
      } catch {}
    })();
    s.on(
      'update_sidebar',
      (data: {
        sender: string;
        receiver?: string;
        roomId: string;
        type: string;
        content?: string;
        isRecalled?: boolean;
        lastMessage?: string;
        timestamp?: number;
        senderName?: string;
        isGroup: boolean;
        members?: (string | { _id: string })[];
        groupName?: string;
      }) => {
        // const p = pathnameRef.current;
        // const isChatPage = p === '/' || p === '/home' || p?.startsWith('/chat');

        if (data.sender === String(currentUser._id)) return;

        const soundEnabled =
          (currentUser as unknown as { notifications?: { soundEnabled?: boolean } })?.notifications?.soundEnabled !==
          false;

        if (soundEnabled) {
          playMessageSound();
        }
        flashTabTitle();

        const isMsgType =
          data.type === 'text' ||
          data.type === 'image' ||
          data.type === 'file' ||
          data.type === 'sticker' ||
          data.type === 'video' ||
          data.type === 'notify';
        if (isMsgType) {
          setShowNewMsgBanner(true);
          if (newMsgBannerTimerRef.current) {
            window.clearTimeout(newMsgBannerTimerRef.current);
            newMsgBannerTimerRef.current = null;
          }
          newMsgBannerTimerRef.current = window.setTimeout(() => {
            setShowNewMsgBanner(false);
            newMsgBannerTimerRef.current = null;
          }, 5000);
        }
      },
    );

    s.on('call_notify', async () => {});
    return () => {
      try {
        socketRef.current?.disconnect();
      } catch {}
      socketRef.current = null;
    };
  }, [checked, isAuthed, currentUser, playMessageSound, flashTabTitle]);

  // Xác định tab active
  const isActive = (paths: string[]) => {
    return paths.some(
      (p) =>
        pathname === p ||
        pathname?.startsWith(p + '/') ||
        (p === '/home' && (pathname === '/' || pathname?.startsWith('/chat'))),
    );
  };

  const mobileTabs = [
    { key: 'home', label: 'Tin nhắn', paths: ['/home', '/chat', '/'], icon: HiChatBubbleLeftRight },
    { key: 'group', label: 'Nhóm', paths: ['/group'], icon: HiRectangleGroup },
    { key: 'directory', label: 'Danh bạ', paths: ['/directory'], icon: HiUserGroup },
    { key: 'moments', label: 'Tường', paths: ['/moments', '/timeline'], icon: HiPhoto },
    { key: 'profile', label: 'Cá nhân', paths: ['/profile', '/me'], icon: HiUserCircle },
  ];

  const isWidgetIframe = pathname === '/chat-iframe' || pathname?.startsWith('/chat-iframe');

  const [globalRoomId, setGlobalRoomId] = useState<string>('');
  const [globalIsGroup, setGlobalIsGroup] = useState<boolean>(false);
  const [globalSelectedChat, setGlobalSelectedChat] = useState<{
    _id?: string;
    members?: (string | { _id: string })[];
    name?: string;
    avatar?: string;
  } | null>(null);

  const [currentViewedRoomId, setCurrentViewedRoomId] = useState<string>('');
  const normalizedRoomId = String((globalRoomId || currentViewedRoomId || '').trim());
  const normalizedIsGroup = false;
  const {
    callActive,
    callType,
    callConnecting,
    incomingCall,
    startCall,
    acceptIncomingCall,
    endCall,
    callStartAt,
    counterpartId,
    activeRoomId,
    livekitToken,
    livekitUrl,
    roomCallActive,
    roomCallType,
    roomParticipants,
  } = useLiveKitSession({
    socketRef,
    roomId: normalizedRoomId,
    currentUserId: String(currentUser?._id || ''),
    isGroup: normalizedIsGroup,
    selectedChat: globalSelectedChat,
  });
  const lastActiveRoomIdRef = React.useRef<string>('');
  useEffect(() => {
    if (activeRoomId) lastActiveRoomIdRef.current = String(activeRoomId);
  }, [activeRoomId]);
  const lastCallStartAtRef = React.useRef<number | null>(null);
  useEffect(() => {
    lastCallStartAtRef.current = typeof callStartAt === 'number' ? callStartAt : null;
  }, [callStartAt]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('CURRENT_ROOM_ID');
      setCurrentViewedRoomId(String(raw || ''));
    } catch {}
    const handler = (e: Event) => {
      const d = (e as unknown as { detail?: { roomId?: string } }).detail;
      if (!d) return;
      setCurrentViewedRoomId(String(d.roomId || ''));
    };
    window.addEventListener('currentRoomChanged', handler as EventListener);
    return () => window.removeEventListener('currentRoomChanged', handler as EventListener);
  }, []);
  useEffect(() => {
    const isChatPage = pathname === '/' || pathname === '/home' || pathname?.startsWith('/chat');
    if (!isChatPage) return;
    if (!currentViewedRoomId) return;
    if (String(globalRoomId) === String(currentViewedRoomId)) return;
    setGlobalRoomId(String(currentViewedRoomId));
    const parts = String(currentViewedRoomId).split('_').filter(Boolean);
    setGlobalIsGroup(parts.length !== 2);
  }, [currentViewedRoomId, pathname, globalRoomId]);
  useEffect(() => {
    if (!incomingCall) return;
    const rid = String(incomingCall.roomId || '');
    if (!rid) return;
    const parts = rid.split('_').filter(Boolean);
    const isG = parts.length !== 2;
    setGlobalRoomId(rid);
    setGlobalIsGroup(isG);
  }, [incomingCall]);
  const liveParticipantsRef = React.useRef<Array<{ id: string; name?: string }>>([]);
  useEffect(() => {
    try {
      const flag = incomingCall ? '1' : '';
      if (flag) localStorage.setItem('GLOBAL_INCOMING_CALL', flag);
      else localStorage.removeItem('GLOBAL_INCOMING_CALL');
      const activeFlag = callActive ? '1' : '';
      const connectingFlag = callConnecting ? '1' : '';
      if (activeFlag) localStorage.setItem('GLOBAL_CALL_ACTIVE', activeFlag);
      else localStorage.removeItem('GLOBAL_CALL_ACTIVE');
      if (connectingFlag) localStorage.setItem('GLOBAL_CALL_CONNECTING', connectingFlag);
      else localStorage.removeItem('GLOBAL_CALL_CONNECTING');
      const ev = new CustomEvent('globalCallStatusChanged', {
        detail: {
          active: !!callActive,
          connecting: !!callConnecting,
          incoming: !!incomingCall,
        },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}
  }, [incomingCall, callActive, callConnecting]);
  

  const [globalCallPos, setGlobalCallPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });
  const [globalCallSize, setGlobalCallSize] = useState<{ w: number }>({ w: 560 });
  const [globalCallMin, setGlobalCallMin] = useState<boolean>(false);
  const globalPrevSizeRef = React.useRef<{ w: number } | null>(null);
  const [globalCallHidden, setGlobalCallHidden] = useState<boolean>(false);
  const [globalIsDesktop, setGlobalIsDesktop] = useState<boolean>(false);
  const [remoteName, setRemoteName] = useState<string>('');
  const [remoteAvatar, setRemoteAvatar] = useState<string | undefined>(undefined);
  const [callDurationSec, setCallDurationSec] = useState<number>(0);
  useEffect(() => {
    const apply = () => setGlobalIsDesktop(typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);
  const [openBtnPos, setOpenBtnPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });
  const openBtnRef = useRef<HTMLDivElement | null>(null);
  const openBtnDraggingRef = useRef<boolean>(false);
  useEffect(() => {
    try {
      const W = typeof window !== 'undefined' ? window.innerWidth : 360;
      const H = typeof window !== 'undefined' ? window.innerHeight : 640;
      setOpenBtnPos({ x: Math.max(8, W - 140), y: Math.max(8, H - 80) });
    } catch {}
  }, []);
  const handleOpenBtnDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = openBtnRef.current?.getBoundingClientRect();
    const bw = rect?.width ?? 140;
    const bh = rect?.height ?? 48;
    const st = { sx: e.clientX, sy: e.clientY, ox: openBtnPos.x, oy: openBtnPos.y };
    const onMove = (ev: MouseEvent) => {
      openBtnDraggingRef.current = true;
      const dx = ev.clientX - st.sx;
      const dy = ev.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
      setOpenBtnPos({ x: nx, y: ny });
    };
    const onUp = () => {
      setTimeout(() => (openBtnDraggingRef.current = false), 0);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const handleOpenBtnTouchDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = openBtnRef.current?.getBoundingClientRect();
    const bw = rect?.width ?? 140;
    const bh = rect?.height ?? 48;
    const t = e.touches[0];
    const st = { sx: t.clientX, sy: t.clientY, ox: openBtnPos.x, oy: openBtnPos.y };
    const onMove = (ev: TouchEvent) => {
      openBtnDraggingRef.current = true;
      const tt = ev.touches[0];
      const dx = tt.clientX - st.sx;
      const dy = tt.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
      setOpenBtnPos({ x: nx, y: ny });
    };
    const onUp = () => {
      setTimeout(() => (openBtnDraggingRef.current = false), 0);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
  };
  React.useEffect(() => {
    const minimize = () => {
      setGlobalCallHidden(false);
      globalPrevSizeRef.current = { ...globalCallSize };
      const w = Math.max(280, Math.min(360, globalCallSize.w));
      setGlobalCallSize({ w });
      try {
        const W = typeof window !== 'undefined' ? window.innerWidth : 360;
        const x = Math.max(8, W - w - 16);
        setGlobalCallPos({ x, y: 16 });
      } catch {}
      setGlobalCallMin(true);
    };
    window.addEventListener('minimizeCallOverlay', minimize as EventListener);
    return () => {
      window.removeEventListener('minimizeCallOverlay', minimize as EventListener);
    };
  }, [globalCallSize.w]);
  React.useEffect(() => {
    const hide = () => {
      setGlobalCallMin(false);
      setGlobalCallHidden(true);
    };
    window.addEventListener('hideCallOverlay', hide as EventListener);
    return () => window.removeEventListener('hideCallOverlay', hide as EventListener);
  }, []);
  const handleGlobalDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = { startX: e.clientX, startY: e.clientY, originX: globalCallPos.x, originY: globalCallPos.y };
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - state.startX;
      const dy = ev.clientY - state.startY;
      const x = state.originX + dx;
      const y = state.originY + dy;
      const maxX = Math.max(8, window.innerWidth - (globalCallSize.w + 24));
      const maxY = Math.max(8, window.innerHeight - (320 + 24));
      setGlobalCallPos({ x: Math.min(Math.max(8, x), maxX), y: Math.min(Math.max(8, y), maxY) });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const handleGlobalTouchDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const t = e.touches[0];
    const state = { startX: t.clientX, startY: t.clientY, originX: globalCallPos.x, originY: globalCallPos.y };
    const onMove = (ev: TouchEvent) => {
      const tt = ev.touches[0];
      const dx = tt.clientX - state.startX;
      const dy = tt.clientY - state.startY;
      const x = state.originX + dx;
      const y = state.originY + dy;
      const maxX = Math.max(8, window.innerWidth - (globalCallSize.w + 24));
      const maxY = Math.max(8, window.innerHeight - (320 + 24));
      setGlobalCallPos({ x: Math.min(Math.max(8, x), maxX), y: Math.min(Math.max(8, y), maxY) });
    };
    const onUp = () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
  };
  const handleResizeStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const startX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX;
    const originW = globalCallSize.w;
    const onMove = (ev: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in ev ? (ev as TouchEvent).touches[0].clientX : (ev as MouseEvent).clientX;
      const dx = clientX - startX;
      const nextW = Math.min(Math.max(280, originW + dx), Math.floor(window.innerWidth * 0.9));
      setGlobalCallSize({ w: nextW });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove as unknown as EventListener);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove as unknown as EventListener);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('mousemove', onMove as unknown as EventListener);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove as unknown as EventListener);
    window.addEventListener('touchend', onUp);
  };
  useEffect(() => {
    try {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
      if (isDesktop) {
        const w = Math.floor(window.innerWidth * 0.5);
        setGlobalCallSize({ w: Math.max(560, w) });
      }
    } catch {}
  }, []);
  useEffect(() => {
    const id = (() => {
      if (counterpartId) return String(counterpartId);
      if (incomingCall?.from) return String(incomingCall.from);
      if (!globalIsGroup && globalSelectedChat?._id) return String(globalSelectedChat._id);
      return '';
    })();
    if (!id) {
      setRemoteName('');
      setRemoteAvatar(undefined);
      return;
    }
    const run = async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: String(id) }),
        });
        const json = await res.json();
        const row = json?.row || json?.user || json;
        setRemoteName(String(row?.name || ''));
        setRemoteAvatar(row?.avatar ? String(row.avatar) : undefined);
      } catch {
        setRemoteName('');
        setRemoteAvatar(undefined);
      }
    };
    void run();
  }, [counterpartId, incomingCall, globalSelectedChat, globalIsGroup]);
  const callTimerRef = React.useRef<number | null>(null);
  useEffect(() => {
    if (callTimerRef.current) {
      window.clearInterval(callTimerRef.current);
      callTimerRef.current = null;
    }
    if (!callActive || !callStartAt) {
      setCallDurationSec(0);
      return;
    }
    setCallDurationSec(0);
    callTimerRef.current = window.setInterval(() => {
      setCallDurationSec(Math.max(0, Math.floor((Date.now() - Number(callStartAt)) / 1000)));
    }, 1000);
    return () => {
      if (callTimerRef.current) {
        window.clearInterval(callTimerRef.current);
        callTimerRef.current = null;
      }
    };
  }, [callActive, callStartAt]);
  const sendCallNotify = async (status: 'answered' | 'rejected' | 'timeout' | 'ended') => {
    try {
      const rid = String(
        activeRoomId || lastActiveRoomIdRef.current || normalizedRoomId || currentViewedRoomId || '',
      );
      if (!rid || !currentUser?._id) return;
      const parts = rid.split('_').filter(Boolean);
      const isOneToOneRoom = parts.length === 2;
      if (status === 'ended') {
        const keyStart =
          typeof lastCallStartAtRef.current === 'number' && lastCallStartAtRef.current > 0
            ? String(lastCallStartAtRef.current)
            : typeof callStartAt === 'number' && callStartAt > 0
              ? String(callStartAt)
              : 'unknown';
        const key = `${rid}:${keyStart}`;
        const bag = (sendCallNotify as unknown as { endedSentBag?: Set<string> }).endedSentBag || new Set<string>();
        (sendCallNotify as unknown as { endedSentBag?: Set<string> }).endedSentBag = bag;
        if (bag.has(key)) return;
        bag.add(key);
      }
      const computedDurationSec =
        status === 'ended'
          ? (() => {
              const startAt =
                typeof lastCallStartAtRef.current === 'number' && lastCallStartAtRef.current > 0
                  ? lastCallStartAtRef.current
                  : typeof callStartAt === 'number' && callStartAt > 0
                    ? callStartAt
                    : undefined;
              if (typeof startAt === 'number' && startAt > 0)
                return Math.max(0, Math.floor((Date.now() - Number(startAt)) / 1000));
              return Math.max(0, Math.floor(callDurationSec));
            })()
          : Math.max(0, Math.floor(callDurationSec));
      const content = (() => {
        if (isOneToOneRoom) {
          if (status !== 'ended') return '';
          const kind = callType === 'video' ? 'video' : 'thoại';
          const dir = outgoingRef.current ? 'đi' : 'đến';
          const m2 = Math.floor(computedDurationSec / 60);
          const ss = computedDurationSec % 60;
          return `Cuộc gọi ${kind} ${dir} – ${m2} phút ${ss} giây`;
        }
        if (status === 'rejected') return '';
        if (status === 'answered' || status === 'ended') {
          return Math.random() < 0.5
            ? `Cuộc gọi kết thúc. Thời gian: ${computedDurationSec} giây`
            : `Cuộc gọi đã được kết thúc sau ${computedDurationSec} giây`;
        }
        return 'Cuộc gọi nhỡ';
      })();
      if (!content) return;
      const tsNow = Date.now();
      const notifyRes = await createMessageApi({
        roomId: rid,
        type: 'notify',
        sender: String(currentUser._id),
        content,
        timestamp: tsNow,
        callerId: String(currentUser._id),
        calleeId: String(counterpartId || ''),
        callType: (callType as 'voice' | 'video') || 'voice',
        callStatus: status === 'ended' ? 'answered' : status,
        callDurationSec: computedDurationSec,
        callStartedAt: typeof callStartAt === 'number' ? callStartAt : undefined,
        callEndedAt: tsNow,
      });
      if (notifyRes?.success && typeof notifyRes._id === 'string') {
        const parts2 = rid.split('_').filter(Boolean);
        const isOneToOne = parts2.length === 2;
        const isGroup = !isOneToOne;
        const receiver = isOneToOne ? (parts2[0] === String(currentUser._id) ? parts2[1] : parts2[0]) : null;
        const members = isGroup ? groupMembersRef.current.get(rid) || [] : [];
        socketRef.current?.emit('send_message', {
          roomId: rid,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
          _id: notifyRes._id,
          type: 'notify',
          content,
          timestamp: tsNow,
          callerId: String(currentUser._id),
          calleeId: String(counterpartId || ''),
          callType: (callType as 'voice' | 'video') || 'voice',
          callStatus: status === 'ended' ? 'answered' : status,
          callDurationSec: computedDurationSec,
        });
      }
    } catch {}
  };
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const d = (e as CustomEvent).detail || {};
        const t = d?.type === 'video' ? 'video' : 'voice';
        const rid = String(d?.roomId || '');
        const isG = !!d?.isGroup;
        const sel = d?.selectedChat as { _id?: string; members?: Array<string | { _id: string }>; name?: string; avatar?: string } | undefined;
        setGlobalRoomId(rid);
        setGlobalIsGroup(isG);
        const norm = (() => {
          if (!sel) return isG ? { _id: '', members: [] } : { _id: '' };
          const _id = String(sel._id || '');
          if (isG) {
            const members = Array.isArray(sel.members)
              ? sel.members.map((m) => (typeof m === 'object' ? { _id: String((m as { _id: string })._id) } : String(m)))
              : [];
            return { _id, members, name: sel.name, avatar: sel.avatar };
          }
          return { _id, name: sel.name, avatar: sel.avatar };
        })();
        setGlobalSelectedChat(norm);
        if (sel?.name) setRemoteName(String(sel.name));
        else setRemoteName('');
        if (sel?.avatar) setRemoteAvatar(String(sel.avatar));
        else setRemoteAvatar(undefined);
        setCallDurationSec(0);
        outgoingRef.current = true;
        const overrideTargetId =
          !isG && norm && typeof norm._id === 'string' && norm._id ? String(norm._id) : undefined;
        void startCall(t, overrideTargetId);
      } catch {}
    };
    window.addEventListener('startCall', handler as EventListener);
    return () => window.removeEventListener('startCall', handler as EventListener);
  }, [startCall, pathname]);

  const outgoingRef = React.useRef<boolean>(false);
  const prevCallActiveRef = React.useRef<boolean>(false);
  const endedSentRef = React.useRef<boolean>(false);
  useEffect(() => {
    const prev = prevCallActiveRef.current;
    if (prev && !callActive && !endedSentRef.current && outgoingRef.current) {
      endedSentRef.current = true;
      void sendCallNotify('ended');
    }
    prevCallActiveRef.current = callActive;
    if (callActive) {
      endedSentRef.current = false;
    }
  }, [callActive]);
  // Bỏ lưu trạng thái call theo room trong localStorage cho 1-1

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Sidebar Desktop */}
      {isAuthed && (
        <div className="hidden md:block">
          <SidebarMenu
            totalUnread={totalUnread}
            unreadGroups={unreadGroups}
            unreadContacts={unreadContacts}
          />
        </div>
      )}

      {/* Trang chưa đăng nhập – Sang trọng như Zalo Premium */}
      {!isAuthed && checked && isProfilePage && (
        <div className="w-1/3 flex items-center justify-center p-6">
          <div className="absolute " />
          <div className="relative z-10 w-full max-w-md">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="p-10 text-center">
                <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <HiSparkles className="w-16 h-16 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Hupuna
                </h1>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">Chào mừng bạn đến với thế hệ chat mới</p>

                <div className="space-y-4">
                  <button
                    onClick={() => router.push('/login')}
                    className="w-full cursor-pointer py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
                  >
                    <HiUserCircle className="w-7 h-7" />
                    Đăng nhập ngay
                  </button>

                  <button
                    onClick={() => router.push('/login?mode=register')}
                    className="w-full cursor-pointer py-5 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-lg rounded-2xl shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
                  >
                    <HiSparkles className="w-7 h-7" />
                    Tạo tài khoản mới
                  </button>
                </div>

                <p className="mt-8 text-sm text-gray-500">Bắt đầu hành trình kết nối không giới hạn</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <main
        className={`flex-1 overflow-hidden ${isAuthed && !(hideMobileFooter || isWidgetIframe) ? 'pb-20 md:pb-0' : ''}`}
      >
        {showNewMsgBanner && (
          <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[200] pointer-events-auto">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white shadow-xl animate-pulse">
              <span className="text-sm font-semibold">Bạn có tin nhắn mới</span>
              <button
                onClick={() => setShowNewMsgBanner(false)}
                className="ml-2 text-white/80 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        )}
        {children}
      </main>

      {/* Global Call Overlay – áp dụng mọi page */}
      {isAuthed && checked && currentUser && (
          <>
            {(incomingCall || callConnecting || callActive) && (
              <div
                className={`fixed z-[2000] ${globalIsDesktop ? '' : globalCallMin ? '' : 'inset-0 w-full h-full'}`}
                style={
                  globalIsDesktop
                    ? { left: globalCallPos.x, top: globalCallPos.y, width: globalCallSize.w, display: globalCallHidden ? 'none' : 'block' }
                    : globalCallMin
                    ? {
                        left: globalCallPos.x,
                        top: globalCallPos.y,
                        width: globalCallSize.w,
                        height: callType === 'video' ? 180 : 200,
                        display: globalCallHidden ? 'none' : 'block',
                      }
                    : { display: globalCallHidden ? 'none' : 'block' }
                }
                onClick={
                  !globalIsDesktop && globalCallMin
                    ? () => {
                        const prev = globalPrevSizeRef.current;
                        if (prev) setGlobalCallSize(prev);
                        setGlobalCallMin(false);
                      }
                    : undefined
                }
                onMouseDown={!globalIsDesktop && globalCallMin ? handleGlobalDragStart : undefined}
                onTouchStart={!globalIsDesktop && globalCallMin ? handleGlobalTouchDragStart : undefined}
              >
                <div
                  className={`absolute ${globalCallMin ? '' : globalIsDesktop ? 'w-full md:max-w-[90vw]' : 'inset-0 w-full h-full'} md:rounded-xl rounded-none p-0 shadow-2xl ring-1 ring-black/10 bg-white/5 backdrop-blur`}
                >
                  <div
                    className="md:cursor-move md:flex hidden items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none"
                    onMouseDown={handleGlobalDragStart}
                    onTouchStart={handleGlobalTouchDragStart}
                  >
                    <span className="text-sm">
                      {callActive
                        ? remoteName ? `${remoteName}` : 'Đang gọi'
                        : incomingCall
                          ? remoteName ? `Cuộc gọi từ ${remoteName}` : 'Cuộc gọi đến'
                          : 'Đang kết nối...'}
                    </span>
                    <span className="text-xs">
                      {callType === 'video' ? 'Video' : 'Thoại'}
                      {callActive && callDurationSec > 0 ? ` • ${Math.floor(callDurationSec / 60)
                        .toString()
                        .padStart(2, '0')}:${(callDurationSec % 60).toString().padStart(2, '0')}` : ''}
                      <button
                        className="ml-3 text-xs px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
                        onClick={() => setGlobalCallHidden(true)}
                        title="Ẩn cửa sổ gọi"
                      >
                        Ẩn
                      </button>
                    </span>
                  </div>
                  <div className={`${globalCallMin ? 'rounded-lg overflow-hidden bg-black' : globalIsDesktop ? 'md:rounded-b-xl rounded-none md:pt-2 md:p-2 p-0 relative bg-black/20' : 'rounded-none p-0 h-full bg-black'}`}>
                    {incomingCall && !callActive && !callConnecting && (
                      <IncomingCallModal
                        avatar={remoteAvatar || '/logo/avata.webp'}
                        name={remoteName || 'Cuộc gọi đến'}
                        callType={incomingCall.type}
                        onAccept={async () => {
                          outgoingRef.current = false;
                          await acceptIncomingCall();
                        }}
                        onReject={() => {
                          socketRef.current?.emit('call_reject', {
                            roomId: String(incomingCall.roomId),
                            targets: [String(incomingCall.from)],
                          });
                          void sendCallNotify('rejected');
                        }}
                      />
                    )}
                    {!incomingCall && callConnecting && (
                      <ModalCall
                        avatar={remoteAvatar || '/logo/avata.webp'}
                        name={remoteName || 'Đang kết nối...'}
                        mode="connecting"
                        callType={callType === 'video' ? 'video' : 'voice'}
                        onEndCall={() => {
                          endCall('local');
                          void sendCallNotify('timeout');
                        }}
                      />
                    )}
                    {callActive && livekitToken && livekitUrl && (
                      <LiveKitCall
                        serverUrl={livekitUrl}
                        token={livekitToken}
                        onDisconnected={() => {}}
                        onRequestEnd={() => {
                          endCall('local');
                        }}
                        className={`${globalCallMin ? '' : globalIsDesktop ? 'rounded-lg overflow-hidden' : 'rounded-none overflow-hidden h-full'}`}
                        titleName={remoteName || ''}
                        callStartAt={callStartAt}
                        avatarUrl={remoteAvatar || '/logo/avata.webp'}
                        myName={currentUser.name}
                        myAvatarUrl={currentUser.avatar}
                        localPreviewSize={
                          globalCallMin
                            ? { w: Math.max(120, Math.min(160, Math.floor(globalCallSize.w / 3))), h: 90 }
                            : { w: Math.max(240, Math.min(300, Math.floor(globalCallSize.w / 2))), h: 160 }
                        }
                        offMinHeight={320}
                      />
                    )}
                    <div
                      className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize bg-white/30 hover:bg-white/50 rounded-sm"
                      onMouseDown={handleResizeStart}
                      onTouchStart={handleResizeStart}
                    />
                  </div>
                </div>
              </div>
            )}
            {(incomingCall || callConnecting || callActive) && globalCallHidden && (
              <div
                ref={openBtnRef}
                className="fixed z-[2000] cursor-move"
                style={{ left: openBtnPos.x, top: openBtnPos.y }}
                onMouseDown={handleOpenBtnDragStart}
                onTouchStart={handleOpenBtnTouchDragStart}
              >
                <button
                  className="cursor-pointer cursor-move px-3 py-2 rounded-full bg-green-500 text-white shadow-md"
                  onClick={() => {
                    if (openBtnDraggingRef.current) return;
                    setGlobalCallHidden(false);
                  }}
                  title="Mở cửa sổ cuộc gọi"
                >
                  Mở cuộc gọi
                </button>
              </div>
            )}
          </>
        )}

      

      {/* Mobile Bottom Navigation – ĐẸP NHƯ ZALO PRO 2025 */}
      {isAuthed && !(hideMobileFooter || isWidgetIframe) && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pointer-events-none">
          <div className="relative pointer-events-auto bg-white border-t border-gray-200 shadow-lg">
            <div className="flex">
              {mobileTabs.map((tab) => {
                const active = isActive(tab.paths);
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      if (tab.key === 'profile') {
                        try {
                          const raw = typeof window !== 'undefined' ? localStorage.getItem('info_user') : null;
                          const u = raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
                          const id = String((u?.['username'] as string) || (u?.['_id'] as string) || '').trim();
                          router.push(id ? `/profile/${id}` : '/profile');
                        } catch {
                          router.push('/profile');
                        }
                      } else {
                        router.push(tab.paths[0]);
                      }
                    }}
                    className="cursor-pointer flex-1 py-3 flex flex-col items-center gap-1 relative"
                  >
                    <div className="relative">
                      <Icon className={`w-6 h-6 ${active ? 'text-indigo-600' : 'text-gray-500'}`} />
                      {tab.key === 'home' && totalUnread > 0 && (
                        <span className="absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                          {totalUnread > 99 ? '99+' : totalUnread}
                        </span>
                      )}
                      {tab.key === 'group' && unreadGroups > 0 && (
                        <span className="absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                          {unreadGroups > 99 ? '99+' : unreadGroups}
                        </span>
                      )}
                      {tab.key === 'directory' && unreadContacts > 0 && (
                        <span className="absolute -top-2 -right-3 min-w-[1.5rem] px-1.5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                          {unreadContacts > 99 ? '99+' : unreadContacts}
                        </span>
                      )}
                    </div>

                    <span className={`text-xs font-medium ${active ? 'text-indigo-600' : 'text-gray-500'}`}>
                      {tab.label}
                    </span>

                    {active && <div className="absolute bottom-0 w-10 h-0.5 bg-indigo-600 rounded-full" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutBase;
