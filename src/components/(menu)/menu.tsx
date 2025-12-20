'use client';

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

export default function SidebarMenu() {
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
      <div className="h-screen w-12 bg-gradient-to-b from-sky-500 via-blue-500 to-blue-500 flex flex-col items-center py-6 text-white shadow-2xl">
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
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center text-2xl font-bold shadow-inner">
                {(userInfo?.name || 'U').charAt(0).toUpperCase()}
              </div>
            )}
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Avatar Menu */}
          {openMenu.avatar && userInfo && (
            <div className="absolute left-4 top-12 w-80 bg-white text-gray-800 rounded-3xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
              {/* Header - Thông tin người dùng */}
              <div
                className="px-5 py-4 bg-[#0068ff] text-white cursor-pointer hover:bg-[#005edc] transition-all duration-200"
                onClick={() => {
                  setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                  router.push(`/profile/${userInfo.username}`);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                    {userInfo.avatar ? (
                      <Image
                        src={getProxyUrl(userInfo.avatar)}
                        width={80}
                        height={80}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/30 backdrop-blur-md flex items-center justify-center text-3xl font-bold">
                        {(userInfo.name || 'U').charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold truncate">{userInfo.name}</p>
                    <p className="text-sm opacity-90 truncate">@{userInfo.username}</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {/* Thông tin tài khoản */}
                <div
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer transition-all duration-150"
                  onClick={() => {
                    setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                    setShowAccountModal(true);
                  }}
                >
                  <HiUserCircle className="w-6 h-6 text-[#0068ff]" />
                  <span className="font-medium text-gray-800">Thông tin tài khoản</span>
                </div>

                {/* Ngôn ngữ */}
                <div className="relative">
                  <div
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer transition-all duration-150"
                    onClick={() =>
                      setOpenMenu((prev) => ({ ...prev, submenu: prev.submenu === 'lang' ? null : 'lang' }))
                    }
                  >
                    <div className="flex items-center gap-4">
                      <HiOutlineTranslate className="w-6 h-6 text-green-600" />
                      <span className="font-medium text-gray-800">Ngôn ngữ</span>
                    </div>
                    <HiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openMenu.submenu === 'lang' ? 'rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Submenu Ngôn ngữ */}
                  {openMenu.submenu === 'lang' && (
                    <div
                      className="absolute left-full top-0 ml-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {['Tiếng Việt', 'English', '中文 (简体)'].map((lang, i) => (
                        <div
                          key={i}
                          className="px-5 py-3.5 hover:bg-[#0068ff]/5 flex items-center justify-between cursor-pointer transition-all"
                        >
                          <span className="font-medium">{lang}</span>
                          {i === 0 && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hỗ trợ */}
                <div className="relative">
                  <div
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer transition-all duration-150"
                    onClick={() =>
                      setOpenMenu((prev) => ({ ...prev, submenu: prev.submenu === 'support' ? null : 'support' }))
                    }
                  >
                    <div className="flex items-center gap-4">
                      <HiQuestionMarkCircle className="w-6 h-6 text-blue-600" />
                      <span className="font-medium text-gray-800">Hỗ trợ</span>
                    </div>
                    <HiChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openMenu.submenu === 'support' ? 'rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Submenu Hỗ trợ */}
                  {openMenu.submenu === 'support' && (
                    <div
                      className="absolute left-full top-0 ml-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {[
                        {
                          icon: <HiInformationCircle className="w-5 h-5 text-gray-600" />,
                          label: 'Thông tin phiên bản',
                          onClick: () => {
                            setShowContactCard(true);
                            setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                          },
                        },
                        { icon: <HiSupport className="w-5 h-5 text-gray-600" />, label: 'Liên hệ hỗ trợ' },
                        { icon: <HiUpload className="w-5 h-5 text-gray-600" />, label: 'Gửi file log tới Zalo' },
                        { icon: <HiBookOpen className="w-5 h-5 text-gray-600" />, label: 'Hướng dẫn sử dụng' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="px-5 py-3.5 hover:bg-[#0068ff]/5 flex items-center gap-4 cursor-pointer transition-all"
                          onClick={item.onClick}
                        >
                          {item.icon}
                          <span className="font-medium text-gray-800">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Đăng xuất - phân cách bằng divider */}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <div
                    className="flex items-center gap-4 px-5 py-4 hover:bg-red-50 cursor-pointer transition-all duration-150 text-red-600 font-medium"
                    onClick={() => {
                      setOpenMenu({ avatar: false, business: false, cloud: false, submenu: null });
                      handleLogout();
                    }}
                  >
                    <HiLogout className="w-6 h-6" />
                    <span>Đăng xuất</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex flex-col items-center gap-4 mt-4">
          <button
            onClick={() => navigate('/home', 'home')}
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'home' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiHome className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/group', 'group')}
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'group' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiRectangleGroup className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/moments', 'moments')}
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'moments' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <FaPager className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/directory', 'directory')}
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'directory' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
          >
            <HiUserGroup className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              if (userInfo?._id) {
                navigate(`/profile/${userInfo._id}`, 'profile');
              } else {
                console.warn('User info or ID missing');
              }
            }}
            className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${activeItem === 'profile' ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
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
              className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${openMenu.cloud ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
            >
              <HiUpload className="w-5 h-5" />
            </button>
            {openMenu.cloud && (
              <div className="absolute left-24 bottom-0 z-50">
                <ZaloCloudPopup onClose={() => toggleMenu('cloud', false)} />
              </div>
            )}
          </div>

          <button className="p-2 cursor-pointer rounded-2xl hover:bg-white/10 hover:scale-110 transition-all">
            <HiDeviceMobile className="w-5 h-5" />
          </button>

          {/* zBusiness */}
          <div ref={businessRef} className="relative">
            <button
              onClick={() => toggleMenu('business')}
              className={`p-2 cursor-pointer rounded-2xl transition-all duration-300 ${openMenu.business ? 'bg-white/20 shadow-xl scale-110' : 'hover:bg-white/10 hover:scale-110'}`}
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
