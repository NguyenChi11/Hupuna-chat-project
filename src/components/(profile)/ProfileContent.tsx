'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

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
    <div className="">
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
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Mã QR</h3>
            <div className="flex justify-center py-6">
              <div className=" p-2  ">
                <ProfileQR />
              </div>
            </div>
          </div>
        )}

        {/* Cài đặt – chỉ owner */}
        {tab === 'settings' && isOwner && (
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cài đặt</h3>
            <ProfileSettings />
          </div>
        )}

        {/* Hồ sơ công khai (profile tab) */}
        {tab === 'profile' && (
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
