// components/(profile)/ProfileInfo.tsx
'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useViewingUser } from '@/hooks/(profile)/useViewingUser';
import { useUploadImage } from '@/hooks/(profile)/useUploadImage';
import { useCurrentUser } from '@/hooks/(profile)/useCurrentUser';

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
} from 'react-icons/hi2';

export default function ProfileByIdPage() {
  const params = useParams();
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
  const [tabMobile, setTabMobile] = useState<'profile' | 'qr' | 'info' | 'settings'>('profile');
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      {/* ==================== MOBILE (<= md) & TABLET SMALL (<= lg) ==================== */}
      <div className=" mx-auto md:hidden">
        <div className=" h-[34rem] bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden custom-scrollbar border border-white/50 pb-28 ">
          {/* Header */}
          <ProfileHeader
            isOwner={!!isOwner}
            background={background ?? null}
            avatar={avatar ?? null}
            handleUpload={handleUpload}
            isUploadingAvatar={isUploadingAvatar}
            isUploadingBackground={isUploadingBackground}
          />

          {/* Info */}
          <div className="px-2 pt-4 pb-3 text-center">
            <h1 className="mt-14 text-xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {displayName || 'Hồ sơ'}
            </h1>
            {departmentLabel && (
              <p className="mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {departmentLabel}
              </p>
            )}
            {displayTitle && <p className="mt-1.5 text-sm text-gray-600 font-medium">{displayTitle}</p>}
          </div>

          {/* Additional Info (Mobile) */}
          <div className="flex flex-wrap justify-center gap-2 px-4 pb-4">
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

          {/* Tabs Mobile → mở nội dung trong popup */}
          <ProfileTabs
            tabs={tabsMobile}
            tab={tabMobile}
            setTab={(item) => {
              setTabMobile(item as 'profile' | 'qr' | 'info' | 'settings');
              setIsMobileSheetOpen(true);
            }}
            icon={getTabIcon}
          />

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
                    : 'Cài đặt'
            }
          >
            <ProfileContent
              tab={tabMobile}
              isOwner={!!isOwner}
              overviewData={overviewData}
              handleOverviewData={(data) => setOverviewData(data as Parameters<typeof setOverviewData>[0])}
            />
          </MobileProfileSheet>
        </div>
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
