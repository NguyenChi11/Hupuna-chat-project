/* eslint-disable @typescript-eslint/no-unused-vars */

import { getProxyUrl } from '@/utils/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';
import { HiPencil, HiCheck, HiX } from 'react-icons/hi';

interface UserAvatarSectionProps {
  userName: string;
  userAvatar?: string;
  onUpdateNickname?: (name: string, options?: { silent?: boolean }) => Promise<void> | void;
}

export default function UserAvatarSection({ userName, userAvatar, onUpdateNickname }: UserAvatarSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditName(userName);
  }, [userName]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleSave = async () => {
    const newVal = editName.trim();
    const oldVal = (userName || '').trim();
    if (newVal !== oldVal || newVal === '') {
      try {
        setIsSaving(true);
        await onUpdateNickname?.(newVal, { silent: true });
      } finally {
        setIsSaving(false);
      }
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(userName);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Avatar người dùng */}
      <div className="relative group">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-gray-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
          {userAvatar ? (
            <Image
              width={100}
              height={100}
              src={getProxyUrl(userAvatar)}
              alt={userName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : (
            <Image
              src="/logo/avata.webp"
              alt={userName}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Hiệu ứng sáng nhẹ khi hover */}
        <div className="absolute inset-0 rounded-full ring-4 ring-transparent group-hover:ring-blue-300/30 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Tên người dùng */}
      <div className="mt-6 text-center relative group/name w-full flex justify-center">
        {isEditing ? (
          <div className="flex items-center justify-center gap-2">
            <input
              ref={inputRef}
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="text-xl font-bold text-gray-900 text-center border-b-2 border-blue-500 focus:outline-none bg-transparent min-w-[9.375rem] max-w-[15.625rem]"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
              disabled={isSaving}
            />
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`p-1 rounded-full transition-colors cursor-pointer ${isSaving ? 'bg-green-100 text-green-500 opacity-70' : 'hover:bg-green-100 text-green-500'}`}
            >
              {isSaving ? (
                <span className="w-5 h-5 inline-block border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <HiCheck className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={handleCancel}
              disabled={isSaving}
              className="p-1 rounded-full hover:bg-red-100 text-red-500 transition-colors cursor-pointer"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div
            className="flex items-center justify-center gap-2 group/edit cursor-pointer"
            onClick={() => onUpdateNickname && setIsEditing(true)}
          >
            <h3 className="text-xl font-bold text-gray-900 tracking-tight truncate max-w-[15.625rem]">
              {userName || 'Người dùng'}
            </h3>
          </div>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500 font-medium">Đang trò chuyện riêng</p>
    </div>
  );
}
