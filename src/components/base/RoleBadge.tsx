import React from 'react';
import { GroupRole } from '@/types/Group';
import { FaCrown, FaUserShield } from 'react-icons/fa';

interface RoleBadgeProps {
  role: GroupRole;
  className?: string;
  showIcon?: boolean;
}

export default function RoleBadge({ role, className = '', showIcon = true }: RoleBadgeProps) {
  if (role === 'OWNER') {
    return (
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm flex items-center gap-1 ${className}`}
      >
        {showIcon && <FaCrown className="w-3 h-3" />}
        Trưởng nhóm
      </span>
    );
  }
  if (role === 'ADMIN') {
    return (
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm flex items-center gap-1 ${className}`}
      >
        {showIcon && <FaUserShield className="w-3 h-3" />}
        Phó nhóm
      </span>
    );
  }
  return null;
}
