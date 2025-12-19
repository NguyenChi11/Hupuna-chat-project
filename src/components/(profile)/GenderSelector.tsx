// components/(profile)/GenderSelector.tsx
'use client';

import React, { useState } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi2';

interface GenderSelectorProps {
  value: string;
  onChange: (gender: string) => void;
}

const genders = ['Nam', 'Nữ', 'Khác'] as const;

export default function GenderSelector({ value, onChange }: GenderSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = value || 'Chọn giới tính';

  return (
    <div className="relative">
      {/* Nút chọn chính – style giống hệt Zalo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-5 py-4 rounded-2xl bg-gray-100 font-medium text-left
          flex items-center justify-between transition-all duration-200
          focus:outline-none
          ${isOpen ? 'bg-white ring-4 ring-[#0068ff]/20 border-[#0068ff]' : 'border-2 border-transparent hover:bg-gray-200'}
          ${value ? 'text-gray-900' : 'text-gray-500'}
        `}
      >
        <span className="flex items-center gap-3">
          {value && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
          {selectedLabel}
        </span>
        <HiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown menu – hiện từ dưới lên như Zalo mobile */}
      {isOpen && (
        <>
          {/* Backdrop mờ để đóng khi bấm ngoài */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Danh sách lựa chọn */}
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() => {
                  onChange(gender);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-5 py-4 text-left font-medium flex items-center justify-between
                  transition-all duration-150
                  ${value === gender ? 'bg-[#0068ff]/5 text-[#0068ff]' : 'text-gray-800 hover:bg-gray-100'}
                  active:bg-gray-200
                `}
              >
                <span>{gender}</span>
                {value === gender && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
