'use client';

import React from 'react';
import { HiX, HiSearch, HiUserGroup, HiXCircle } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { User } from '../../../types/User';
import { formatTimeAgo } from '@/utils/dateUtils';
import { GroupConversation } from '@/types/Group';
import { useCreateGroupModal } from '@/hooks/useCreateGroupModal';
import { getProxyUrl } from '@/utils/utils';
import { HiMagnifyingGlass, HiOutlineUserPlus, HiCamera, HiFaceSmile, HiChevronLeft } from 'react-icons/hi2';

interface Props {
  currentUser: User;
  allUsers: User[];
  onClose: () => void;
  onGroupCreated: (group?: GroupConversation) => void;
  mode?: 'create' | 'add';
  conversationId?: string;
  existingMemberIds?: string[];
  reLoad?: () => void;
  onMembersAdded?: (users: User[]) => void;
}

export default function CreateGroupModal({
  currentUser,
  allUsers,
  onClose,
  onGroupCreated,
  mode = 'create',
  conversationId,
  existingMemberIds = [],
  reLoad,
  onMembersAdded,
}: Props) {
  const {
    groupName,
    setGroupName,
    searchTerm,
    setSearchTerm,
    selectedMembers,
    loading,
    error,
    groupedUsers,
    sortedGroupKeys,
    handleMemberToggle,
    handleSubmit,
    avatarPreview,
    handleAvatarChange,
  } = useCreateGroupModal({
    currentUser,
    allUsers,
    mode,
    conversationId,
    existingMemberIds,
    reLoad,
    onMembersAdded,
    onGroupCreated,
    onClose,
  });

  const [imgError, setImgError] = React.useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [avatarPreview]);

  const selectedUsers = React.useMemo(
    () => allUsers.filter((u) => selectedMembers.includes(String(u._id))),
    [allUsers, selectedMembers],
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm sm:px-0">
      <div className="bg-white w-full h-full sm:w-full sm:max-w-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white  border-b border-gray-100 sm:border-none">
          <div className="flex items-center gap-3 w-full">
            {/* Mobile Back Button */}
            <button
              onClick={onClose}
              className="sm:hidden p-2 -ml-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-800"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            {/* Desktop Icon (hidden on mobile) */}
            {/* <HiOutlineUserPlus className="w-5 h-5 hidden sm:block" /> */}

            <div className="flex flex-col items-start justify-center flex-1 sm:flex-none">
              <h2 className="text-lg font-bold leading-tight">
                {mode === 'create' ? 'Nhóm mới' : 'Thêm thành viên'}
              </h2>
              <p className="text-sm text-gray-500 font-medium sm:hidden">Đã chọn: {selectedMembers.length}</p>
            </div>
          </div>

          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="hidden sm:block p-2.5 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200 active:scale-90"
          >
            <HiX className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-50">
          {/* Input Section */}
          <div className="p-4 bg-white border-b border-gray-100">
            {/* Tên nhóm - chỉ hiện khi tạo mới */}
            {mode === 'create' && (
              <div className="flex items-center gap-4 mb-2">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <label
                    className="block w-full h-full rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden border border-gray-200"
                    title="Đổi ảnh nhóm"
                  >
                    {avatarPreview && !imgError ? (
                      <Image
                        src={avatarPreview}
                        alt="Group Avatar"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <HiCamera className="w-6 h-6 text-gray-500" />
                    )}
                    <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                  </label>
                </div>
                <div className="flex-1 relative border-b-2 focus-within:border-[#0068ff] border-gray-200 transition-colors pb-1">
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Đặt tên nhóm"
                    className="w-full py-2 bg-transparent focus:outline-none text-lg font-medium placeholder:text-gray-400 pr-8"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <HiFaceSmile className="w-6 h-6" />
                  </button>
                </div>
                {selectedMembers.length >= 3 && (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="p-1 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <FaCheck className="w-6 h-6 text-[#0068ff]" />
                  </button>
                )}
              </div>
            )}

            {/* Thanh tìm kiếm */}
            <div className="relative">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm tên hoặc số điện thoại"
                className="w-full pl-12 pr-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0068ff] text-base placeholder:text-gray-500 transition-all duration-200"
              />
            </div>

            {/* Lỗi */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3">
                <HiXCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-sm font-medium text-red-700">{error}</span>
              </div>
            )}
          </div>

          {/* Danh sách User (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <h4 className="hidden  font-semibold text-sm text-gray-600 mb-3 md:flex items-center">
              {mode === 'create' ? 'Danh sách bạn bè' : 'Thành viên có thể thêm'}
              <span className="ml-2 bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full text-xs">
                {selectedMembers.length}
              </span>
            </h4>

            {sortedGroupKeys.map((letter) => (
              <div key={letter} className="mb-2">
                {groupedUsers[letter].map((user) => {
                  const userIdStr = String(user._id);
                  const isAlreadyMember = existingMemberIds.includes(userIdStr);
                  const isSelected = selectedMembers.includes(userIdStr);
                  const isMe = userIdStr === String(currentUser._id);
                  const displayName =
                    String(user.nicknames?.[String(currentUser._id)] || '').trim() ||
                    String(user.name || user.username || 'Người dùng').trim();

                  return (
                    <label
                      key={user._id}
                      className={`flex items-center p-3 mb-1 cursor-pointer transition-colors justify-between rounded-2xl
                          ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'} ${
                            (mode === 'add' && isAlreadyMember) || isMe
                              ? 'bg-gray-50 opacity-60 cursor-not-allowed'
                              : ''
                          }
                                                `}
                    >
                      <div className="flex items-center">
                        <div className="sm:w-10 sm:h-10 w-10 h-10 mr-3 rounded-full overflow-hidden sm:ring-4 ring-2 ring-white shadow-md">
                          {user.avatar ? (
                            <Image
                              src={getProxyUrl(user.avatar)}
                              alt=""
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src="/logo/avata.webp"
                              alt=""
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        <div>
                          <div className="flex-1">
                            <p className="sm:text-sm font-semibold text-gray-900 px-1">{displayName}</p>
                          </div>
                          <span
                            className={`text-xs px-1 font-medium ${user.online ? 'text-green-600' : 'text-gray-500'}`}
                          >
                            {user.online
                              ? 'Đang hoạt động'
                              : user.lastSeen
                                ? `Hoạt động ${formatTimeAgo(user.lastSeen)} trước`
                                : 'Hoạt động gần đây'}
                          </span>
                          {isAlreadyMember && mode === 'add' && (
                            <span className="text-xs text-gray-400 font-medium">Đã tham gia</span>
                          )}
                        </div>
                        {isMe && <span className="text-xs text-gray-400 font-medium px-1">Bạn</span>}
                      </div>
                      <div className="relative flex items-center justify-center w-6 h-6 mr-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          disabled={(mode === 'add' && isAlreadyMember) || isMe}
                          onChange={() => handleMemberToggle(userIdStr)}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-[#0573ff] checked:border-[#0573ff] transition-all"
                        />
                        {/* Custom Checkmark Icon */}
                        <svg
                          className="absolute w-3.5 h-3.5 text-white hidden peer-checked:block pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </label>
                  );
                })}
              </div>
            ))}

            {sortedGroupKeys.length === 0 && (
              <div className="text-center py-10 opacity-50">
                <p>Không tìm thấy kết quả</p>
              </div>
            )}
          </div>
        </div>

        {/* Selected Users Horizontal Scroll */}
        {(selectedUsers.length > 0 || mode === 'create') && (
          <div className="px-3 py-2 bg-white border-t border-gray-100">
            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1 pt-2">
              {/* Creator (Fixed) */}
              {mode === 'create' && (
                <div className="relative flex-shrink-0 cursor-default opacity-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm">
                    {currentUser.avatar ? (
                      <Image
                        src={getProxyUrl(currentUser.avatar)}
                        alt={currentUser.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0068ff] to-[#00a0e9] text-white font-bold flex items-center justify-center text-lg">
                        {currentUser.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedUsers
                .filter((u) => mode !== 'create' || String(u._id) !== String(currentUser._id))
                .map((user) => (
                  <div
                    key={user._id}
                    className="relative flex-shrink-0 cursor-pointer group"
                    onClick={() => handleMemberToggle(String(user._id))}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm group-hover:opacity-70 transition-opacity">
                      {user.avatar ? (
                        <Image
                          src={getProxyUrl(user.avatar)}
                          alt={
                            String(user.nicknames?.[String(currentUser._id)] || '').trim() ||
                            String(user.name || user.username || 'Người dùng').trim()
                          }
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src="/logo/avata.webp"
                          alt=""
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="absolute -top-1 -right-1 bg-gray-100 rounded-full text-gray-500 hidden group-hover:flex">
                      <HiXCircle className="w-4 h-4" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Footer - Nút cố định dưới cùng */}
        <div className="p-3 bg-white border-t border-gray-200 flex gap-3">
          {/* Nút Hủy */}
          <button
            onClick={onClose}
            className="flex-1 py-3 cursor-pointer text-base font-medium text-gray-600 bg-transparent hover:bg-gray-100 rounded-2xl transition-all duration-200 active:scale-95"
          >
            Hủy
          </button>

          {/* Nút Tạo / Thêm */}
          <button
            onClick={handleSubmit}
            disabled={loading || selectedMembers.length === 0}
            className={`flex-1 py-3 text-base font-bold text-white rounded-2xl cursor-pointer transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 shadow-md
      ${
        loading || selectedMembers.length === 0
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-[#0068ff] hover:bg-[#005edc] shadow-[#0068ff]/50'
      }`}
          >
            {loading ? (
              <>Đang xử lý...</>
            ) : mode === 'create' ? (
              <>
                Tạo nhóm
                {selectedMembers.length > 0 && (
                  <span className="ml-1 text-sm font-normal opacity-90">({selectedMembers.length})</span>
                )}
              </>
            ) : (
              <>
                Thêm
                {selectedMembers.filter((id) => !existingMemberIds.includes(id)).length > 0 && (
                  <span className="ml-1 text-sm font-normal opacity-90">
                    ({selectedMembers.filter((id) => !existingMemberIds.includes(id)).length})
                  </span>
                )}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
