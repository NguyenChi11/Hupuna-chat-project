'use client';

import ProfileQR from '@/components/(profile)/PorfileQR';
import ProfileSettings from '@/components/(profile)/ProfileSettings';
import ProfileOverview from '@/components/(profile)/ProfileOverview';
import { ProfileInfo } from '@/components/(profile)/ProfileInfo';

import { HiUser, HiQrCode, HiCog6Tooth, HiInformationCircle } from 'react-icons/hi2';

export default function ProfileContent({
  tab,
  isOwner,
  overviewData,
  handleOverviewData,
}: {
  tab: string;
  isOwner: boolean;
  overviewData: Record<string, unknown>;
  handleOverviewData: (data: Record<string, unknown>) => void;
}) {
  return (
    <div className="p-4">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        {/* Thông tin cá nhân (chỉ owner chỉnh sửa được) */}
        {tab === 'info' && (
          <>
            {isOwner ? (
              <ProfileInfo
                isOwner={isOwner}
                onDataChange={(data) => handleOverviewData(data as Record<string, unknown>)}
              />
            ) : (
              <ProfileOverview
                data={
                  overviewData as {
                    phone: string;
                    gender: string;
                    birthday: string;
                    email: string;
                    address: string;
                    department: string;
                    title: string;
                  }
                }
              />
            )}
          </>
        )}

        {/* Mã QR */}
        {tab === 'qr' && (
          <div className="flex justify-center py-6">
            <div className=" p-2  ">
              <ProfileQR />
            </div>
          </div>
        )}

        {/* Cài đặt – chỉ owner */}
        {tab === 'settings' && isOwner && (
          <div className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200">
            <ProfileSettings />
          </div>
        )}

        {/* Hồ sơ công khai (profile tab) */}
        {tab === 'profile' && (
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-3xl p-6 border border-blue-100">
            <ProfileOverview
              data={
                overviewData as {
                  phone: string;
                  gender: string;
                  birthday: string;
                  email: string;
                  address: string;
                  department: string;
                  title: string;
                }
              }
            />
          </div>
        )}
      </div>

      {/* Empty state nếu không có gì (hiếm khi xảy ra) */}
      {!['info', 'qr', 'settings', 'profile'].includes(tab) && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">Chưa có nội dung</p>
        </div>
      )}
    </div>
  );
}
