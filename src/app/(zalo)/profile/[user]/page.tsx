// components/(profile)/ProfileInfo.tsx
'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useViewingUser } from '@/hooks/(profile)/useViewingUser';
import { useUploadImage } from '@/hooks/(profile)/useUploadImage';
import { useCurrentUser } from '@/hooks/(profile)/useCurrentUser';
import { getProxyUrl } from '@/utils/utils';

import ProfileHeader from '@/components/(profile)/ProfileHeader';
import ProfileTabs from '@/components/(profile)/ProfileTabs';
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
} from 'react-icons/hi2';

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
    displayDept,
    displayTitle,
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

  const [tabLeft, setTabLeft] = useState<'profile' | 'qr'>('profile');
  const [tabRight, setTabRight] = useState<'info' | 'settings' | 'qr'>('info');
  const [tabMobile, setTabMobile] = useState<'profile' | 'qr' | 'info' | 'settings' | 'edit_intro'>('profile');
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [introText, setIntroText] = useState('');
  const [shareToDiary, setShareToDiary] = useState(false);

  const tabsLeft = isOwner ? ['profile', 'qr'] : [];
  const tabsRight = isOwner ? ['info', 'settings'] : ['info', 'qr'];
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

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'profile':
        return <HiUserCircle className="w-5 h-5" />;
      case 'qr':
        return <HiQrCode className="w-5 h-5" />;
      case 'info':
        return <HiInformationCircle className="w-5 h-5" />;
      case 'settings':
        return <HiCog6Tooth className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ">
      {/* ==================== MOBILE (<= md) & TABLET SMALL (<= lg) ==================== */}
      <div className="mx-auto md:hidden bg-gray-50 h-screen overflow-y-auto custom-scrollbar pb-[5rem]  ">
        {/* Top Header Section */}
        <div className="relative bg-white pb-4 mb-2">
          {/* Header Actions */}
          <div className="absolute top-0 left-0 right-0 z-30 flex justify-end items-center p-4 text-white">
            <div className="flex gap-3">
              <button className="p-1.5 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
                <HiClock className="w-6 h-6" />
              </button>
              <button className="p-1.5 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
                <HiEllipsisHorizontal className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative h-64 w-full">
            {background ? (
              <Image src={getProxyUrl(background)} alt="Cover" fill className="object-cover" priority />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
            )}
            {/* Edit Cover Button (Owner only) */}
            {isOwner && (
              <label className="absolute bottom-4 right-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-black/40 transition-colors">
                <HiCamera className="w-5 h-5" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'background')}
                />
              </label>
            )}
          </div>

          {/* Avatar & Info */}
          <div className="relative px-4 flex flex-col items-center -mt-16">
            <div className="relative">
              {/* Status Bubble */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-2xl shadow-lg border border-gray-100 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-white animate-bounce">
                Trạng thái hiện tại
              </div>

              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden relative bg-gray-200">
                {avatar ? (
                  <Image src={getProxyUrl(avatar)} alt="Avatar" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                    <HiUserCircle className="w-20 h-20" />
                  </div>
                )}
                {/* Edit Avatar (Owner) */}
                {isOwner && (
                  <label className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
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
            <h1 className="mt-3 text-2xl font-bold text-gray-900">{displayName}</h1>

            {/* Edit Intro Link */}
            <button
              onClick={() => {
                setTabMobile('edit_intro');
                setIntroText(displayTitle || '');
                setIsMobileSheetOpen(true);
              }}
              className="mt-1 flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
            >
              <HiPencilSquare className="w-4 h-4" />
              {displayTitle || 'Cập nhật giới thiệu bản thân'}
            </button>
            {/* Additional Info (Mobile) */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
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
          <div className="mt-6 pl-4 flex gap-3 overflow-x-auto custom-scrollbar pb-2 mx-2">
            {/* Cài zStyle (Placeholder for Settings/Style) */}
            <button
              onClick={() => isOwner && (setTabMobile('settings'), setIsMobileSheetOpen(true))}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <HiSparkles className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Cài zStyle</span>
            </button>

            {/* Ảnh của tôi */}
            <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <HiPhoto className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 text-sm">Ảnh của tôi</span>
            </button>

            {/* Kho khoảnh khắc */}
            <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform">
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
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform"
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
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm active:scale-95 transition-transform mr-4"
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

          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-200 active:scale-95 transition-transform hover:bg-blue-700">
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
                    : 'Cài đặt'
          }
          rightAction={
            tabMobile === 'edit_intro' ? (
              <button
                onClick={() => {
                  setOverviewData({ ...overviewData, title: introText });
                  setIsMobileSheetOpen(false);
                }}
                className="text-blue-600 font-bold text-base"
              >
                Lưu
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
          ) : (
            <ProfileContent
              tab={tabMobile}
              isOwner={!!isOwner}
              overviewData={overviewData}
              handleOverviewData={(data) => setOverviewData(data as Parameters<typeof setOverviewData>[0])}
            />
          )}
        </MobileProfileSheet>
      </div>

      {/* ==================== DESKTOP / TABLET LARGE (>= lg) ==================== */}
      <div className="hidden md:flex max-w-7xl mx-auto  max-h-[90vh]">
        <div className="flex-1 flex gap-6">
          {/* CỘT TRÁI */}
          <div className=" w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden custom-scrollbar border border-white/60">
            <ProfileHeader
              isOwner={!!isOwner}
              background={background ?? null}
              avatar={avatar ?? null}
              handleUpload={handleUpload}
              isUploadingAvatar={isUploadingAvatar}
              isUploadingBackground={isUploadingBackground}
            />

            <div className="px-8 pt-20 pb-2 text-center bg-gradient-to-b from-white to-gray-50">
              <h1 className="text-xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {displayName}
              </h1>
              {departmentLabel && (
                <p className="mt-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {departmentLabel}
                </p>
              )}
              {displayTitle && <p className="mt-2 text-base text-gray-600 font-medium">{displayTitle}</p>}
            </div>

            {/* Tabs trái (chỉ owner) */}
            {isOwner && (
              <ProfileTabs
                tabs={tabsLeft}
                tab={tabLeft}
                setTab={(item) => setTabLeft(item as 'profile' | 'qr')}
                icon={getTabIcon}
              />
            )}

            {/* Nội dung trái */}
            {isOwner && (
              <div className=" overflow-y-auto bg-gradient-to-br from-gray-50 to-white h-[20rem] custom-scrollbar">
                <ProfileContent
                  tab={tabLeft}
                  isOwner={true}
                  overviewData={overviewData}
                  handleOverviewData={(data) => setOverviewData(data as Parameters<typeof setOverviewData>[0])}
                />
              </div>
            )}
          </div>

          {/* CỘT PHẢI */}
          <div className="flex-1 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/60 ">
            <ProfileTabs
              tabs={tabsRight}
              tab={tabRight}
              setTab={(item) => setTabRight(item as 'info' | 'settings' | 'qr')}
              icon={getTabIcon}
            />

            <div className="h-full  bg-gradient-to-b from-gray-50/30 to-white">
              <ProfileContent
                tab={tabRight}
                isOwner={!!isOwner}
                overviewData={overviewData}
                handleOverviewData={(data) => setOverviewData(data as Parameters<typeof setOverviewData>[0])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
