'use client';

import React, { useEffect, useState } from 'react';
import SidebarMenu from '../(menu)/menu';
import { useRouter, usePathname } from 'next/navigation';

// React Icons – Bộ hiện đại nhất 2025
import {
  HiChatBubbleLeftRight,
  HiUserGroup,
  HiPhoto,
  HiUserCircle,
  HiSparkles,
  HiRectangleGroup,
} from 'react-icons/hi2';
import type { User } from '@/types/User';
import type { GroupConversation } from '@/types/Group';

const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [hideMobileFooter, setHideMobileFooter] = useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [totalUnread, setTotalUnread] = useState<number>(0);
  const [unreadGroups, setUnreadGroups] = useState<number>(0);
  const [unreadContacts, setUnreadContacts] = useState<number>(0);

  const router = useRouter();
  const pathname = usePathname();

  const isProfilePage =
    pathname === '/profile' || pathname === '/me' || pathname?.startsWith('/profile') || pathname?.startsWith('/me');

  // Kiểm tra đăng nhập – giữ nguyên logic
  useEffect(() => {
    let mounted = true;
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/refresh', { credentials: 'include' });
        if (res.ok) {
          const meRes = await fetch('/api/users/me', { credentials: 'include' });
          const meJson = await meRes.json();
          if (mounted) setIsAuthed(!!meJson?.success);
        } else {
          const meRes = await fetch('/api/users/me', { credentials: 'include' });
          const meJson = await meRes.json();
          if (mounted) setIsAuthed(!!meJson?.success);
        }
      } catch {
        try {
          const raw = localStorage.getItem('info_user');
          const u = raw ? JSON.parse(raw) : null;
          if (mounted) setIsAuthed(!!u && !!u._id);
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

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Sidebar Desktop */}
      {isAuthed && (
        <div className="hidden md:block">
          <SidebarMenu />
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
        {children}
      </main>

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
