// components/(profile)/ProfileInfo.tsx
'use client';

import { useState, useMemo, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useViewingUser } from '@/hooks/(profile)/useViewingUser';
import { useUploadImage } from '@/hooks/(profile)/useUploadImage';
import { useCurrentUser } from '@/hooks/(profile)/useCurrentUser';
import { getProxyUrl } from '@/utils/utils';

import ProfileContent from '@/components/(profile)/ProfileContent';
import MobileProfileSheet from '@/components/(profile)/MobileProfileSheet';

import {
  HiUserCircle,
  HiQrCode,
  HiCog6Tooth,
  HiInformationCircle,
  HiPhone,
  HiEnvelope,
  HiCalendar,
  HiMapPin,
  HiChevronLeft,
  HiEllipsisHorizontal,
  HiClock,
  HiPencilSquare,
  HiCamera,
  HiPhoto,
  HiSparkles,
  HiArchiveBox,
  HiCheck,
  HiBuildingOffice2,
  HiBriefcase,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi';

export default function ProfileByIdPage() {
  const params = useParams();
  const router = useRouter();
  const viewingId = typeof params?.['user'] === 'string' ? params['user'] : '';

  const { currentUser, currentId } = useCurrentUser();
  const isOwner = Boolean(
    viewingId &&
      (viewingId === String(currentUser?.['_id'] || '') ||
        viewingId === String((currentUser?.['username'] as string) || '')),
  );

  const {
    overviewData,
    setOverviewData,
    displayName,
    setDisplayName,
    displayDept,
    setDisplayDept,
    displayTitle,
    setDisplayTitle,
    displayBio,
    setDisplayBio,
    avatar,
    background,
    setAvatar,
    setBackground,
  } = useViewingUser(viewingId, !!isOwner, currentUser);

  const { handleUpload, isUploadingAvatar, isUploadingBackground } = useUploadImage(
    currentId,
    !!isOwner,
    setAvatar,
    setBackground,
  );

  const [tabMobile, setTabMobile] = useState<
    'profile' | 'qr' | 'info' | 'settings' | 'edit_intro' | 'more_actions' | 'general_settings' | 'privacy' | 'account'
  >('profile');
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [introText, setIntroText] = useState('');
  const [shareToDiary, setShareToDiary] = useState(false);

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const handleUpdateProfile = async (field: string, value: string) => {
    if (!currentId || !isOwner) return;
    try {
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          field: '_id',
          value: currentId,
          data: { [field]: value },
        }),
      });

      // Update local storage
      try {
        const raw = localStorage.getItem('info_user');
        if (raw) {
          const parsed = JSON.parse(raw);
          localStorage.setItem('info_user', JSON.stringify({ ...parsed, [field]: value }));
        }
      } catch {}

      // Update local state
      if (field === 'title') {
        setDisplayTitle(value);
        setOverviewData((prev) => ({ ...prev, title: value }));
      }
      if (field === 'bio') {
        setDisplayBio(value);
        setOverviewData((prev) => ({ ...prev, bio: value }));
      }
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  const tabsMobile = isOwner ? ['profile', 'qr', 'info', 'settings'] : ['profile', 'qr'];

  const departmentLabel = useMemo(() => {
    const opts = [
      { value: '101', label: 'Kinh doanh' },
      { value: '102', label: 'Marketing' },
      { value: '103', label: 'Kỹ thuật' },
      { value: '104', label: 'Nhân sự' },
      { value: '105', label: 'Tài chính' },
    ];
    const val = String(displayDept || overviewData.department || '');
    return opts.find((o) => o.value === val)?.label || val || 'Chưa xác định';
  }, [displayDept, overviewData.department]);

  const handleProfileUpdate = (data: Record<string, unknown>) => {
    setOverviewData((prev) => ({ ...prev, ...data }));
    if (data.title !== undefined) setDisplayTitle(String(data.title));
    if (data.bio !== undefined) setDisplayBio(String(data.bio));
    if (data.department !== undefined) setDisplayDept(String(data.department));
    if (data.name !== undefined) setDisplayName(String(data.name));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ">
      {/* ==================== UNIFIED MOBILE-LIKE VIEW ==================== */}
      <div className="w-full bg-gray-50 h-screen overflow-y-auto custom-scrollbar pb-[5rem] md:pb-0 relative no-scrollbar">
        {/* Top Header Section */}
        <div className="relative bg-white pb-4 mb-2">
          {/* Header Actions */}
          <div className="absolute top-0 left-0 right-0 z-30 flex md:justify-end justify-between items-center p-4 text-white">
            <button
              onClick={() => router.back()}
              className="cursor-pointer md:hidden block p-1.5 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              <button className="cursor-pointer p-1.5 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
                <HiClock className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setTabMobile('more_actions');
                  setIsMobileSheetOpen(true);
                }}
                className="cursor-pointer p-1.5 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors"
              >
                <HiEllipsisHorizontal className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative h-64 w-full z-0">
            {background ? (
              <Image src={getProxyUrl(background)} alt="Cover" fill className="object-cover" priority sizes="100vw" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
            )}

            {/* Loading Overlay for Background */}
            {isUploadingBackground && (
              <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center backdrop-blur-sm">
                <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Edit Cover Button (Owner only) */}
            {isOwner && !isUploadingBackground && (
              <label className="absolute bottom-4 right-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/40 transition-colors z-10">
                <HiCamera className="w-5 h-5" />
                <input
                  ref={backgroundInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'background')}
                />
              </label>
            )}
          </div>

          {/* Avatar & Info */}
          <div className="relative px-4 flex flex-col items-center -mt-16 pointer-events-none">
            <div className="relative pointer-events-auto">
              {/* Status Bubble */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-2xl shadow-lg border border-gray-100 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-white animate-bounce">
                Trạng thái hiện tại
              </div>

              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden relative bg-gray-200 z-10">
                {avatar ? (
                  <Image
                    src={getProxyUrl(avatar)}
                    alt="Avatar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                    <HiUserCircle className="w-20 h-20" />
                  </div>
                )}

                {/* Loading Overlay for Avatar */}
                {isUploadingAvatar && (
                  <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Edit Avatar (Owner) */}
                {isOwner && !isUploadingAvatar && (
                  <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-10">
                    <HiCamera className="w-8 h-8 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'avatar')}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Name */}
            <h1 className="mt-3 text-2xl font-bold text-gray-900 pointer-events-auto">{displayName}</h1>

            {/* Edit Intro Link */}
            <button
              onClick={() => {
                setTabMobile('edit_intro');
                setIntroText(displayBio || '');
                setIsMobileSheetOpen(true);
              }}
              className="mt-1 flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline pointer-events-auto"
            >
              <HiPencilSquare className="w-4 h-4" />
              {displayBio || 'Cập nhật giới thiệu bản thân'}
            </button>
            {/* Additional Info (Mobile) */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 w-full pointer-events-auto">
              {(overviewData.title || displayTitle) && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiBriefcase className="w-3.5 h-3.5 text-purple-500" />
                  {overviewData.title || displayTitle}
                </div>
              )}
              {(overviewData.department || displayDept) && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiBuildingOffice2 className="w-3.5 h-3.5 text-orange-500" />
                  {departmentLabel}
                </div>
              )}
              {overviewData.gender && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiUserCircle className="w-3.5 h-3.5 text-indigo-500" />
                  {overviewData.gender}
                </div>
              )}
              {overviewData.birthday && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiCalendar className="w-3.5 h-3.5 text-pink-500" />
                  {overviewData.birthday}
                </div>
              )}
              {overviewData.phone && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiPhone className="w-3.5 h-3.5 text-green-500" />
                  {overviewData.phone}
                </div>
              )}
              {overviewData.email && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiEnvelope className="w-3.5 h-3.5 text-blue-500" />
                  <span className="truncate max-w-[150px]">{overviewData.email}</span>
                </div>
              )}
              {overviewData.address && (
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                  <HiMapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="truncate max-w-[150px]">{overviewData.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Actions */}
          <div className="mt-6 pl-4 flex justify-center  gap-3 overflow-x-auto custom-scrollbar pb-2 mx-2">
            {/* Cài zStyle (Placeholder for Settings/Style) */}
            <button className="cursor-pointer flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <HiSparkles className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Cài zStyle</span>
            </button>

            {/* Ảnh của tôi */}
            <button className="cursor-pointer flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <HiPhoto className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Ảnh của tôi</span>
            </button>

            {/* Kho khoảnh khắc */}
            <button className="cursor-pointer flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <HiArchiveBox className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Kho khoảnh...</span>
            </button>

            {/* Info Button (Restoring old functionality) */}
            <button
              onClick={() => {
                setTabMobile('info');
                setIsMobileSheetOpen(true);
              }}
              className="cursor-pointer flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <HiInformationCircle className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Thông tin</span>
            </button>

            {/* QR Button */}
            <button
              onClick={() => {
                setTabMobile('qr');
                setIsMobileSheetOpen(true);
              }}
              className="cursor-pointer flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform mr-4"
            >
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <HiQrCode className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Mã QR</span>
            </button>
          </div>
        </div>

        {/* Diary Section */}
        <div className="bg-white p-6 text-center">
          <div className="relative w-full max-w-[200px] mx-auto mb-4">
            {/* Illustration placeholder */}
            <div className="w-24 h-40 mx-auto bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center relative shadow-inner">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <HiUserCircle className="w-10 h-10 text-gray-300" />
              </div>
              {/* Chat bubble icon */}
              <div className="absolute -top-2 -right-4 bg-green-500 p-1.5 rounded-lg">
                <HiEllipsisHorizontal className="w-4 h-4 text-white" />
              </div>
              {/* Heart icon */}
              <div className="absolute top-10 -left-4 text-red-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Hôm nay {displayName} có gì vui?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
            Đây là Nhật ký của bạn - Hãy làm đầy Nhật ký với những dấu ấn cuộc đời và kỷ niệm đáng nhớ nhé!
          </p>

          <button className="cursor-pointer bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-200 active:scale-95 transition-transform hover:bg-blue-700">
            Đăng lên Nhật ký
          </button>
        </div>
        <MobileProfileSheet
          isOpen={isMobileSheetOpen}
          onClose={() => setIsMobileSheetOpen(false)}
          title={
            tabMobile === 'profile'
              ? 'Hồ sơ'
              : tabMobile === 'qr'
                ? 'Mã QR'
                : tabMobile === 'info'
                  ? 'Thông tin'
                  : tabMobile === 'edit_intro'
                    ? 'Chỉnh sửa lời giới thiệu'
                    : tabMobile === 'more_actions'
                      ? displayName
                      : tabMobile === 'general_settings'
                        ? 'Cài đặt'
                        : tabMobile === 'privacy'
                          ? 'Quyền riêng tư'
                          : tabMobile === 'account'
                            ? 'Quản lý tài khoản'
                            : 'Cài đặt'
          }
          headerClassName={tabMobile === 'more_actions' ? 'bg-blue-500 text-white border-blue-500' : undefined}
          titleClassName={tabMobile === 'more_actions' ? 'text-white' : undefined}
          backButtonClassName={
            tabMobile === 'more_actions' ? 'text-white hover:bg-blue-600 active:bg-blue-700' : undefined
          }
          rightAction={
            tabMobile === 'edit_intro' ? (
              <button
                onClick={() => {
                  handleUpdateProfile('bio', introText);
                  setIsMobileSheetOpen(false);
                }}
                className="text-blue-600 font-bold text-base"
              >
                Lưu
              </button>
            ) : tabMobile === 'general_settings' ? (
              <button className="text-gray-800">
                <HiOutlineMagnifyingGlass className="w-6 h-6" />
              </button>
            ) : undefined
          }
        >
          {tabMobile === 'edit_intro' ? (
            <div className="p-4">
              <textarea
                className="w-full h-32 text-lg text-gray-800 placeholder-gray-400 focus:outline-none resize-none bg-transparent"
                placeholder="Thêm lời giới thiệu của bạn"
                maxLength={100}
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                autoFocus
              />
              <div className="text-right text-gray-400 text-sm mt-2">{introText.length}/100</div>
              <div
                className="mt-6 flex items-center gap-3 cursor-pointer"
                onClick={() => setShareToDiary(!shareToDiary)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    shareToDiary ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}
                >
                  {shareToDiary && <HiCheck className="text-white w-4 h-4" />}
                </div>
                <span className="text-gray-600 font-medium">Chia sẻ lên nhật ký</span>
              </div>
            </div>
          ) : tabMobile === 'more_actions' ? (
            <div className="bg-gray-50 min-h-[50vh] pb-8">
              {/* Group 1 */}
              <div className="bg-white">
                <button
                  onClick={() => setTabMobile('info')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Thông tin
                </button>
                <button
                  onClick={() => avatarInputRef.current?.click()}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Đổi ảnh đại diện
                </button>
                <button
                  onClick={() => backgroundInputRef.current?.click()}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Đổi ảnh bìa
                </button>
                <button
                  onClick={() => {
                    setTabMobile('edit_intro');
                    setIntroText(displayBio || '');
                  }}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Cập nhật giới thiệu bản thân
                </button>
                <button
                  onClick={() => alert('Tính năng Ví của tôi đang được phát triển')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                >
                  Ví của tôi
                </button>
              </div>

              {/* Spacer */}
              <div className="h-2 bg-transparent"></div>

              {/* Group 2 */}
              <div className="bg-white">
                <div className="px-4 py-3 text-blue-500 font-medium text-sm border-b border-gray-100">Cài đặt</div>
                <button
                  onClick={() => setTabMobile('qr')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Mã QR của tôi
                </button>
                <button
                  onClick={() => setTabMobile('privacy')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Quyền riêng tư
                </button>
                <button
                  onClick={() => setTabMobile('account')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 border-b border-gray-100 active:bg-gray-100"
                >
                  Quản lý tài khoản
                </button>
                <button
                  onClick={() => setTabMobile('settings')}
                  className="w-full text-left px-4 py-3.5 text-base text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                >
                  Cài đặt chung
                </button>
              </div>
            </div>
          ) : tabMobile === 'privacy' ? (
            <div className="flex flex-col bg-gray-100 min-h-[80vh]">
              <div className="bg-white mb-2 mt-2">
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-gray-800">Nhật ký</span>
                  <span className="text-gray-500 text-sm">Công khai</span>
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-gray-800">Tin nhắn</span>
                  <span className="text-gray-500 text-sm">Mọi người</span>
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-gray-800">Sinh nhật</span>
                  <span className="text-gray-500 text-sm">Bạn bè</span>
                </button>
              </div>
            </div>
          ) : tabMobile === 'account' ? (
            <div className="flex flex-col bg-gray-100 min-h-[80vh]">
              <div className="bg-white mb-2 mt-2">
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-gray-800">Thông tin tài khoản</span>
                  <HiChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-gray-800">Đổi mật khẩu</span>
                  <HiChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100 last:border-0">
                  <span className="text-base text-red-500">Xóa tài khoản</span>
                  <HiChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ) : (
            <ProfileContent
              tab={tabMobile}
              isOwner={!!isOwner}
              overviewData={overviewData}
              handleOverviewData={handleProfileUpdate}
            />
          )}
        </MobileProfileSheet>
      </div>
    </div>
  );
}
