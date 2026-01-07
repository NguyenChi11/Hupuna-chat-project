/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICCalendar } from '@/components/svg/ICCalendar';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { HiClock } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi2';
interface ReminderSectionProps {
  onOpen: () => void;
}
export default function ReminderSection({ onOpen }: ReminderSectionProps) {
  return (
    <div className="bg-white   border border-gray-100 overflow-hidden">
      <button
        className="cursor-pointer w-full px-5 py-4 flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 group"
        onClick={onOpen}
        title="Xem danh sách nhắc hẹn"
      >
        {/* Icon với gradient + hiệu ứng */}
        <div className=" rounded-xl   ">
          <CiCalendarDate className="w-5 h-5 text-gray-500" />
        </div>

        {/* Nội dung */}
        <div className="text-left">
          <p className="text-base text-[1.125rem] md:text-[1rem] text-gray-900 group-hover:text-amber-600 transition-colors">
            Lịch hẹn
          </p>
        </div>

        {/* Mũi tên chỉ thị */}
        <div className="ml-auto text-gray-400 group-hover:text-amber-600 transition-colors">
          <HiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
        </div>
      </button>
    </div>
  );
}
