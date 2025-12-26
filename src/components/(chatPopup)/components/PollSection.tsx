import React from 'react';
import { HiChartBar } from 'react-icons/hi2';

interface PollSectionProps {
  onOpen: () => void;
}

export default function PollSection({ onOpen }: PollSectionProps) {
  return (
    <div className="bg-white  border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full p-2 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách bình chọn"
      >
        <div className="py-3 rounded-xl  text-gray-500  ">
          <HiChartBar className="w-7 h-7" />
        </div>
        <div className="text-left">
          <p className="text-base text-[18px] text-gray-900 group-hover:text-indigo-600 transition-colors">
            Bình chọn
          </p>
        </div>
        <div className="ml-auto text-gray-400 group-hover:text-indigo-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
