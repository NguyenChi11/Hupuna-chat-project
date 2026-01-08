'use client';

import React, { useState, useMemo } from 'react';
import { HiChevronLeft, HiUserAdd, HiX } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi2';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import Image from 'next/image';
import { User } from '@/types/User';
import { GroupConversation } from '@/types/Group';
import { getProxyUrl, normalizeNoAccent } from '@/utils/utils';

interface CommonGroupsMobileProps {
  groups: GroupConversation[];
  partner: User;
  onBack: () => void;
  onShowCreateGroup: () => void;
  onShowAddToGroup: () => void;
}

export default function CommonGroupsMobile({
  groups,
  partner,
  onBack,
  onShowCreateGroup,
  onShowAddToGroup,
}: CommonGroupsMobileProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = useMemo(() => {
    if (!searchTerm.trim()) return groups;
    const norm = normalizeNoAccent(searchTerm);
    return groups.filter((g) => normalizeNoAccent(g.name || '').includes(norm));
  }, [groups, searchTerm]);

  return (
    <div className="flex flex-col h-full bg-white w-full">
      {/* Header */}
      <div className="bg-blue-500 text-white px-4 py-3 flex items-center justify-between shrink-0 h-[3.5rem]">
        {isSearchOpen ? (
          <div className="flex items-center gap-2 w-full animate-fadeIn">
            <div className="flex-1 bg-white/20 rounded-lg flex items-center px-3 py-1.5">
              <HiMagnifyingGlass className="w-5 h-5 text-white/70" />
              <input
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm nhóm..."
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 ml-2 text-sm"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')}>
                  <HiX className="w-5 h-5 text-white/70" />
                </button>
              )}
            </div>
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchTerm('');
              }}
              className="text-black text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 p-1 rounded-xl"
            >
              Hủy
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-1 hover:bg-white/20 rounded-full cursor-pointer ">
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <h1 className="text-lg font-medium">Nhóm chung ({groups.length})</h1>
            </div>
            <button onClick={() => setIsSearchOpen(true)} className="p-1 hover:bg-white/20 rounded-full cursor-pointer">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Actions */}
      {!isSearchOpen && (
        <div className="bg-white shrink-0">
          <button
            onClick={onShowCreateGroup}
            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 active:bg-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <HiPlus className="w-6 h-6" />
            </div>
            <span className="text-blue-500 font-medium">Tạo nhóm với {partner.name || partner.username}</span>
          </button>

          <button
            onClick={onShowAddToGroup}
            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50 active:bg-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <HiUserAdd className="w-6 h-6" />
            </div>
            <span className="text-blue-500 font-medium">Thêm {partner.name || partner.username} vào nhóm</span>
          </button>
        </div>
      )}

      {!isSearchOpen && <div className="h-2 bg-gray-100 shrink-0" />}

      {/* Group List */}
      <div className="flex-1 overflow-y-auto ">
        {filteredGroups.map((group) => (
          <div key={group._id} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 ">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 shrink-0">
              {group.avatar ? (
                <Image src={getProxyUrl(group.avatar)} alt={group.name || 'Group'} fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {(group.name || 'G').charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <span className="text-[1.3rem] text-gray-800 truncate ">
              {group.name || 'Nhóm'}
            </span>
          </div>
        ))}
        {filteredGroups.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            {searchTerm ? 'Không tìm thấy nhóm nào' : 'Không có nhóm chung nào'}
          </div>
        )}
      </div>
    </div>
  );
}
