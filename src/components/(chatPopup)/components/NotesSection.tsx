import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';
import { HiChevronRight } from 'react-icons/hi2';

interface NotesSectionProps {
  onOpen: () => void;
}

export default function NotesSection({ onOpen }: NotesSectionProps) {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full px-5 py-4 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách ghi chú"
      >
        <div className="rounded-xl">
          <CiBookmarkCheck className="w-5 h-5 text-gray-500" />
        </div>
        <div className="text-left">
          <p className="text-base text-[1.125rem] md:text-[1rem] text-gray-900 group-hover:text-amber-600 transition-colors">
            Ghi chú
          </p>
        </div>
        <div className="ml-auto text-gray-400 group-hover:text-amber-600 transition-colors">
          <HiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
        </div>
      </button>
    </div>
  );
}

