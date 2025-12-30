import React from 'react';
import { CiLogout, CiTrash } from 'react-icons/ci';

interface GroupDangerZoneProps {
  isGroup: boolean;
  canLeaveGroup: boolean;
  canDisbandGroup: boolean;
  onLeaveClick: () => void;
  onDisbandClick: () => void;
}

export default function GroupDangerZone({
  isGroup,
  canLeaveGroup,
  canDisbandGroup,
  onLeaveClick,
  onDisbandClick,
}: GroupDangerZoneProps) {
  if (!isGroup) return null;

  return (
    <>
      {/* Rời nhóm */}
      {canLeaveGroup && (
        <button
          onClick={onLeaveClick}
          className="w-full px-5 py-4 flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group cursor-pointer mb-0"
        >
          <CiLogout className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors" />
          <span className="text-[1.125rem] md:text-[1rem] text-red-500 font-medium group-hover:text-red-600 transition-colors">
            Rời nhóm
          </span>
        </button>
      )}

      {/* Giải tán nhóm (chỉ chủ nhóm) */}
      {canDisbandGroup && (
        <>
          <button
            onClick={onDisbandClick}
            className="w-full px-5 py-4 flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group cursor-pointer"
          >
            <CiTrash className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors" />
            <span className="text-[1.125rem] md:text-[1rem] text-red-500 font-medium group-hover:text-red-600 transition-colors">
              Giải tán nhóm
            </span>
          </button>
        </>
      )}
    </>
  );
}
