/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// Group members section component
import { HiOutlineArrowRight, HiUserGroup } from 'react-icons/hi';
import { HiOutlineUserGroup } from 'react-icons/hi2';

interface GroupMembersSectionProps {
  isGroup: boolean;
  groupName: string;
  membersCount: number;
  onOpenMembers: () => void;
}

export default function GroupMembersSection({ isGroup, membersCount, onOpenMembers }: GroupMembersSectionProps) {
  if (!isGroup) return null;

  return (
    <div className="bg-white overflow-hidden">
      <button onClick={onOpenMembers} className="cursor-pointer w-full px-5 py-4 flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <div className="rounded-xl  text-gray-500">
            <HiOutlineUserGroup className="w-5 h-5" />
          </div>
          <span className="text-[1.125rem] md:text-[1rem] text-gray-900">
            Xem thành viên <span className="text-gray-500">({membersCount})</span>
          </span>
        </div>
        <HiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
      </button>
    </div>
  );
}
