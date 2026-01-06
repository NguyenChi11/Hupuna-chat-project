/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, RefObject } from 'react';
import { HiPencil } from 'react-icons/hi';
import { getProxyUrl } from '@/utils/utils';
import Image from 'next/image';
import { CiEdit } from 'react-icons/ci';
import { GroupRole } from '@/types/Group';
import RoleBadge from '@/components/base/RoleBadge';

interface GroupAvatarSectionProps {
  isGroup: boolean;
  groupAvatar?: string;
  groupName: string;
  chatName?: string;
  isGroupAvatarUploading: boolean;
  avatarInputRef: RefObject<HTMLInputElement | null>;
  onChangeGroupAvatar: (e: ChangeEvent<HTMLInputElement>) => void;
  onRenameGroup: () => void;
  myRole?: GroupRole;
}

export default function GroupAvatarSection({
  isGroup,
  groupAvatar,
  groupName,
  chatName,
  isGroupAvatarUploading,
  avatarInputRef,
  onChangeGroupAvatar,
  onRenameGroup,
  myRole,
}: GroupAvatarSectionProps) {
  // if (!isGroup) return null;

  return (
    <div className="flex flex-col items-center mb-2 ">
      {/* Avatar lớn + hiệu ứng đổi ảnh */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => avatarInputRef.current?.click()}
          className="cursor-pointer relative block focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full transition-all duration-300"
          disabled={isGroupAvatarUploading}
          title="Nhấn để thay đổi ảnh nhóm"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
              {groupAvatar ? (
                <Image
                  width={100}
                  height={100}
                  src={getProxyUrl(groupAvatar)}
                  alt={chatName || 'Avatar nhóm'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}

              {/* Fallback: chữ cái đầu */}
              <div
                className={`w-full h-full flex items-center justify-center text-4xl font-bold text-white ${
                  groupAvatar ? 'hidden' : ''
                }`}
              >
                <Image
                  width={40}
                  height={40}
                  src="/logo/avata.webp"
                  alt={chatName || 'Avatar nhóm'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Overlay khi hover hoặc đang upload */}
          <div
            className={`absolute inset-0 rounded-full flex flex-col items-center justify-center transition-all duration-300
              ${
                isGroupAvatarUploading
                  ? 'bg-black/70 backdrop-blur-sm'
                  : 'bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100'
              }`}
          >
            {isGroupAvatarUploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <span className="text-white text-sm font-medium">Đang cập nhật...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white text-xs font-medium">Đổi ảnh</span>
              </div>
            )}
          </div>
        </button>

        {/* Nút camera nhỏ giống ảnh minh họa */}
        <button
          type="button"
          onClick={() => avatarInputRef.current?.click()}
          className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white shadow-lg  hover:bg-gray-50 transition"
          title="Đổi ảnh nhóm"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        <input type="file" accept="image/*" ref={avatarInputRef} className="hidden" onChange={onChangeGroupAvatar} />
      </div>

      {/* Tên nhóm + nút đổi tên */}
      <div className="mt-6 flex items-center gap-3 ">
        <h3 className="text-xl font-medium text-gray-900 tracking-tight truncate max-w-[10rem]">
          {groupName || 'Nhóm chat'}
        </h3>
        <button
          onClick={onRenameGroup}
          className="cursor-pointer p-1 rounded-xl  bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:shadow-md active:scale-95"
          title="Đổi tên nhóm"
        >
          <CiEdit className="w-4 h-4" />
        </button>
      </div>

      {isGroup && myRole && myRole !== 'MEMBER' && (
        <div className="mt-2">
          <RoleBadge role={myRole} />
        </div>
      )}
    </div>
  );
}
