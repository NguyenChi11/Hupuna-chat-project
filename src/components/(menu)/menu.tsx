'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { cookieBase } from '../../utils/cookie';
import { getProxyUrl } from '../../utils/utils';
import { User } from '../../types/User';

import PopupProfile from '../base/PopupProfile';
import ZaloContactCard from './help';
import ZaloCloudPopup from './icloud';
import { ConfirmModal } from '@/components/ui/ConfirmModal';

// React Icons - Full modern set
import {
  HiHome,
  HiUserGroup,
  HiBriefcase,
  HiCog,
  HiQuestionMarkCircle,
  HiOutlineTranslate,
  HiLogout,
  HiUserCircle,
  HiChevronRight,
  HiChevronDown,
  HiLightningBolt,
  HiCollection,
  HiChatAlt2,
  HiStar,
  HiClock,
  HiUpload,
  HiDeviceMobile,
  HiInformationCircle,
  HiSupport,
  HiDocumentText,
  HiBookOpen,
  HiCheck,
} from 'react-icons/hi';
import { FaPager } from 'react-icons/fa6';
import { HiRectangleGroup } from 'react-icons/hi2';
// import { FaPager } from 'react-icons/fa6';

interface SidebarMenuProps {
  totalUnread?: number;
  unreadGroups?: number;
  unreadContacts?: number;
}

export default function SidebarMenu({ totalUnread = 0, unreadGroups = 0, unreadContacts = 0 }: SidebarMenuProps) {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<{
    avatar: boolean;
    business: boolean;
    cloud: boolean;
    submenu: 'lang' | 'support' | null;
  }>({
    avatar: false,
    business: false,
    cloud: false,
    submenu: null,
  });

  const [activeItem, setActiveItem] = useState<string>('home');
  const [showContactCard, setShowContactCard] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const avatarRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  // Load user
  useEffect(() => {
    try {
      const raw = localStorage.getItem('info_user');
      if (raw) setUserInfo(JSON.parse(raw));
    } catch (e) {
      console.error('Failed to parse info_user', e);
    }
  }, []);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setOpenMenu((prev) => ({ ...prev, avatar: false, submenu: null }));
      }
      if (businessRef.current && !businessRef.current.contains(e.target as Node)) {
        setOpenMenu((prev) => ({ ...prev, business: false }));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
    setOpenMenu((prev) => ({ ...prev, avatar: false }));
  };

  const finalizeLogout = async () => {
    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' }),
      });
    } catch (err) {
      console.error('Logout error:', err);
    }

    cookieBase.remove('session_token');
    cookieBase.remove('remember_login');
    localStorage.removeItem('info_user');
    localStorage.removeItem('remember_login');
    router.push('/');
  };

  const navigate = useCallback(
    (path: string, key: string) => {
      setActiveItem(key);
      router.push(path);
    },
    [router],
  );

  const toggleMenu = (menu: keyof typeof openMenu, value?: boolean) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: value !== undefined ? value : !prev[menu],
      submenu: menu === 'avatar' && value !== true ? null : prev.submenu,
    }));
  };

  return (
    <>
      {/* Sidebar Gradient */}
      <div className="h-screen w-16 bg-blue-400 flex flex-col items-center py-6 text-white shadow-2xl">
        {/* Avatar Dropdown */}
        <div ref={avatarRef} className="mb-10 relative">
          <button
            onClick={() => toggleMenu('avatar')}
            className="group cursor-pointer relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 hover:ring-yellow-400 transition-all duration-300 shadow-2xl"
          >
            {userInfo?.avatar ? (
              <Image
                src={getProxyUrl(userInfo.avatar)}
                width={56}
                height={56}
                alt={userInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src="/logo/avata.webp"
                alt={userInfo?.name || 'User'}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Avatar Menu */}
          {openMenu.avatar && userInfo && (
            <div className="absolute left-4 top-12 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 border border-gray-100">
              {/* Header - Name */}
              <div className="px-4 py-4">
                <h3 className="text-xl font-bold text-gray-900">{userInfo.name}</h3>
              </div>

              <div className="h-px bg-gray-100 mx-4" />

              {/* Menu Items */}
              <div className="py-2">
                {/* Hồ sơ của bạn */}
                <div
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                    router.push(`/profile/${userInfo.username}`);
                  }}
                >
                  <span className="text-gray-700 font-medium">Hồ sơ của bạn</span>
                </div>

                {/* Cài đặt */}
                <div
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                    setShowAccountModal(true);
                  }}
                >
                  <span className="text-gray-700 font-medium">Tài khoản</span>
                </div>

                <div className="h-px bg-gray-100 mx-4 my-1" />

                {/* Đăng xuất */}
                <div
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                    handleLogout();
                  }}
                >
                  <span className="text-gray-700 font-medium">Đăng xuất</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex flex-col items-center gap-4 mt-4">
          <button
            onClick={() => navigate('/home', 'home')}
            className={`relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'home' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiHome className="w-5 h-5" />
            {totalUnread > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {totalUnread > 99 ? '99+' : totalUnread}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate('/group', 'group')}
            className={`relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'group' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiRectangleGroup className="w-5 h-5" />
            {unreadGroups > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {unreadGroups > 99 ? '99+' : unreadGroups}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate('/moments', 'moments')}
            className={`p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'moments' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <FaPager className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/directory', 'directory')}
            className={`relative p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'directory' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiUserGroup className="w-5 h-5" />
            {unreadContacts > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {unreadContacts > 99 ? '99+' : unreadContacts}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              if (userInfo?._id) {
                navigate(`/profile/${userInfo._id}`, 'profile');
              } else {
                console.warn('User info or ID missing');
              }
            }}
            className={`p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${activeItem === 'profile' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiUserCircle className="w-5 h-5" />
          </button>
        </nav>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-4">
          {/* Cloud Z */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('cloud')}
              className={`p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${openMenu.cloud ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
            >
              <HiUpload className="w-5 h-5" />
            </button>
            {openMenu.cloud && (
              <div className="absolute left-24 bottom-0 z-50">
                <ZaloCloudPopup onClose={() => toggleMenu('cloud', false)} />
              </div>
            )}
          </div>

          <button className="p-2 cursor-pointer rounded-[0.5rem] hover:bg-white/10 hover:scale-110 transition-all">
            <HiDeviceMobile className="w-5 h-5" />
          </button>

          {/* zBusiness */}
          <div ref={businessRef} className="relative">
            <button
              onClick={() => toggleMenu('business')}
              className={`p-2 cursor-pointer rounded-[0.5rem] transition-all duration-300 ${openMenu.business ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
            >
              <HiBriefcase className="w-5 h-5" />
            </button>
            {openMenu.business && (
              <div className="absolute left-24 bottom-0 w-96 bg-white rounded-3xl shadow-2xl p-8 z-50 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Công cụ zBusiness</h3>
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { icon: <HiLightningBolt className="w-10 h-10 text-yellow-500" />, label: 'Tin nhắn nhanh' },
                    { icon: <HiCollection className="w-10 h-10 text-gray-400" />, label: 'Danh mục', disabled: true },
                    {
                      icon: <HiChatAlt2 className="w-10 h-10 text-gray-400" />,
                      label: 'Trả lời tự động',
                      disabled: true,
                    },
                    { icon: <HiStar className="w-10 h-10 text-purple-500" />, label: 'Tin đánh dấu' },
                    { icon: <HiClock className="w-10 h-10 text-gray-400" />, label: 'Tin đồng thời', disabled: true },
                    { icon: <HiDocumentText className="w-10 h-10 text-blue-500" />, label: 'Ghi chú' },
                  ].map((tool, i) => (
                    <div
                      key={i}
                      className={`text-center ${tool.disabled ? 'opacity-40' : 'cursor-pointer hover:scale-110 transition-transform'}`}
                    >
                      <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center shadow-xl mb-3 mx-auto">
                        {tool.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{tool.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'setting' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiCog className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modals */}
      {showLogoutConfirm && (
        <ConfirmModal
          title="Đăng xuất"
          message="Bạn có chắc chắn muốn thoát khỏi tài khoản hiện tại?"
          confirmText="Đăng xuất"
          onCancel={() => setShowLogoutConfirm(false)}
          onConfirm={finalizeLogout}
        />
      )}

      {showContactCard && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowContactCard(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ZaloContactCard />
          </div>
        </div>
      )}

      {userInfo && (
        <PopupProfile
          isOpen={showAccountModal}
          onClose={() => setShowAccountModal(false)}
          user={userInfo}
          onAvatarUpdated={(newUrl) => setUserInfo((prev) => (prev ? { ...prev, avatar: newUrl } : null))}
          onUserUpdated={(updated) => setUserInfo((prev) => (prev ? { ...prev, ...updated } : prev))}
        />
      )}
    </>
  );
}
