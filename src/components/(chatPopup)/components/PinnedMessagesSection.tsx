import React from 'react';
import ICPin from '@/components/svg/ICPin';

interface PinnedMessagesSectionProps {
  onOpen: () => void;
}

export default function PinnedMessagesSection({ onOpen }: PinnedMessagesSectionProps) {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full p-2 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách tin nhắn đã ghim"
      >
        <div className="py-3 rounded-xl">
          <ICPin className="w-5 h-5 text-gray-500" />
        </div>
        <div className="text-left">
          <p className="text-base text-[1.125rem] text-gray-900 group-hover:text-amber-600 transition-colors">
            Tin nhắn đã ghim
          </p>
        </div>
        <div className="ml-auto text-gray-400 group-hover:text-amber-600 transition-colors">
          <svg
            className="w-5 h-5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}
