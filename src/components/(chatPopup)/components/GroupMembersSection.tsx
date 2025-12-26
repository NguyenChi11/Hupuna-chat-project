import React from 'react';
import { HiOutlineArrowRight, HiUserGroup } from 'react-icons/hi';

interface GroupMembersSectionProps {
  isGroup: boolean;
  groupName: string;
  membersCount: number;
  onOpenMembers: () => void;
}

export default function GroupMembersSection({
  isGroup,
  groupName,
  membersCount,
  onOpenMembers,
}: GroupMembersSectionProps) {
  if (!isGroup) return null;

  return (
    <div className="bg-white overflow-hidden">
      <button
        onClick={onOpenMembers}
        className="cursor-pointer w-full px-4 py-3 flex items-center justify-between "
      >
        <div className="flex items-center gap-3">
          <div className="py-2.5 rounded-xl  text-gray-500">
            <HiUserGroup className="w-7 h-7" />
          </div>
          <span className="text-[18px]  text-gray-900">
            Xem thành viên <span className="text-gray-500">({membersCount})</span>
          </span>
        </div>
        <HiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
      </button>
    </div>
  );
}
