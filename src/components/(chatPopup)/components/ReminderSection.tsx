import { ICCalendar } from '@/components/svg/ICCalendar';
import React from 'react';
import { HiClock } from 'react-icons/hi';
interface ReminderSectionProps {
  onOpen: () => void;
}
export default function ReminderSection({ onOpen }: ReminderSectionProps) {
  return (
    <div className="bg-white   border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full p-2 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách nhắc hẹn"
      >
        {/* Icon với gradient + hiệu ứng */}
        <div className="py-3 rounded-xl   ">
          <ICCalendar className="w-5 h-5 text-gray-500" />
        </div>

        {/* Nội dung */}
        <div className="text-left">
          <p className="text-base text-[1.125rem]  text-gray-900 group-hover:text-amber-600 transition-colors">
            Lịch hẹn
          </p>
        </div>

        {/* Mũi tên chỉ thị */}
        <div className="ml-auto text-gray-400 group-hover:text-amber-600 transition-colors">
          <svg
            className={`w-5 h-5 transition-transform duration-200 `}
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
