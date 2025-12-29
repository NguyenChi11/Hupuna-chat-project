import React from 'react';
import { HiEye, HiUserGroup } from 'react-icons/hi';
import { HiEyeSlash, HiMapPin, HiBell, HiBellSlash, HiMagnifyingGlass, HiUserPlus, HiPhoto } from 'react-icons/hi2';

interface ChatQuickActionsProps {
  isGroup?: boolean;
  localIsPinned: boolean;
  localIsHidden: boolean;
  onPinToggle: () => void;
  onHideToggle: () => void;
  onCreateGroup: () => void;
  onOpenMembers?: () => void;
  onSearchMessages?: () => void;
  onChangeWallpaper?: () => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
  onOpenProfile?: () => void;
}

export default function ChatQuickActions({
  isGroup,
  localIsPinned,
  localIsHidden,
  onPinToggle,
  onHideToggle,
  onCreateGroup,
  onOpenMembers,
  onSearchMessages,
  onChangeWallpaper,
  isMuted,
  onToggleMute,
  onOpenProfile,
}: ChatQuickActionsProps) {
  if (isGroup) {
    return (
      <div className="flex justify-around items-center ">
        <button
          onClick={onSearchMessages}
          className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl "
          title="Tìm tin nhắn"
        >
          <div className="p-3 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all  group-hover:shadow-lg">
            <HiMagnifyingGlass className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-gray-700">Tìm tin nhắn</span>
        </button>
        <button
          onClick={onOpenMembers}
          className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300 active:scale-95"
          title="Thêm thành viên"
        >
          <div className="p-3 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all  group-hover:shadow-lg">
            <HiUserPlus className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-gray-700">Thêm thành viên</span>
        </button>

        <button
          onClick={onToggleMute}
          className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-full transition-all duration-300 active:scale-95"
          title={isMuted ? 'Bật thông báo' : 'Tắt thông báo'}
        >
          <div
            className={`p-3 rounded-3xl transition-all duration-300  group-hover:shadow-lg ${
              isMuted
                ? 'bg-red-100 text-red-600 ring-2 ring-red-200'
                : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
            }`}
          >
            {isMuted ? <HiBellSlash className="w-5 h-5" /> : <HiBell className="w-5 h-5" />}
          </div>
          <span className={`text-xs font-medium ${isMuted ? 'text-red-700' : 'text-gray-700'}`}>
            {isMuted ? 'Đã tắt' : 'Tắt thông báo'}
          </span>
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-around items-center ">
      <button
        onClick={onSearchMessages}
        className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300 hover:bg-gray-50 active:scale-95"
        title="Tìm tin nhắn"
      >
        <div className="p-3 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all group-hover:shadow-lg">
          <HiMagnifyingGlass className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-gray-700">Tìm tin nhắn</span>
      </button>
      <button
        onClick={onOpenProfile}
        className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-2xl transition-all duration-300  active:scale-95"
        title="Trang cá nhân"
      >
        <div className="p-3 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-all group-hover:shadow-lg">
          <HiUserGroup className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-gray-700">Trang cá nhân</span>
      </button>

      <button
        onClick={onToggleMute}
        className="cursor-pointer group flex flex-col items-center gap-3 p-2 rounded-full transition-all duration-300 active:scale-95"
        title={isMuted ? 'Bật thông báo' : 'Tắt thông báo'}
      >
        <div
          className={`p-3 rounded-full transition-all duration-300  group-hover:shadow-lg ${
            isMuted
              ? 'bg-red-100 text-red-600 ring-2 ring-red-200'
              : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
          }`}
        >
          {isMuted ? <HiBellSlash className="w-6 h-6" /> : <HiBell className="w-6 h-6" />}
        </div>
        <span className={`text-xs font-medium ${isMuted ? 'text-red-700' : 'text-gray-700'}`}>
          {isMuted ? 'Đã tắt' : 'Tắt thông báo'}
        </span>
      </button>
    </div>
  );
}
