// components/(profile)/DepartmentDropdown.tsx
'use client';

import React, { useState } from 'react';
import { HiBuildingOffice2, HiChevronDown, HiCheck } from 'react-icons/hi2';

interface Department {
  id: number;
  name: string;
  color: string;
}

const departments: Department[] = [
  { id: 1, name: 'Ban lãnh đạo', color: 'bg-pink-500 text-white' },
  { id: 2, name: 'Quản lý', color: 'bg-purple-500 text-white' },
  { id: 3, name: 'Kinh doanh', color: 'bg-blue-500 text-white' },
  { id: 4, name: 'Thiết kế', color: 'bg-green-500 text-white' },
  { id: 5, name: 'Sản xuất', color: 'bg-yellow-500 text-black' },
  { id: 6, name: 'Sàn TMĐT', color: 'bg-orange-500 text-white' },
  { id: 7, name: 'Kế toán', color: 'bg-red-500 text-white' },
  { id: 8, name: 'Kho TM', color: 'bg-gray-500 text-white' },
  { id: 9, name: 'HCNS', color: 'bg-teal-500 text-white' },
  { id: 10, name: 'Maketing', color: 'bg-pink-500 text-white' },
];

interface DepartmentDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DepartmentDropdown({ value, onChange }: DepartmentDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = departments.find((d) => d.id === Number(value));

  return (
    <div className="relative">
      {/* Nút chọn chính – style giống Zalo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-5 py-4 rounded-2xl bg-gray-100 font-medium text-left
          flex items-center justify-between transition-all duration-200
          focus:outline-none
          ${
            isOpen
              ? 'bg-white ring-4 ring-[#0068ff]/20 border-2 border-[#0068ff]'
              : 'border-2 border-transparent hover:bg-gray-200'
          }
          ${selected ? 'text-gray-900' : 'text-gray-500'}
        `}
      >
        <div className="flex items-center gap-4">
          <HiBuildingOffice2 className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <span>{selected?.name || 'Chọn phòng ban'}</span>
          {/* Hiển thị tag màu nếu đã chọn */}
          {selected && (
            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${selected.color}`}>
              {selected.name}
            </span>
          )}
        </div>
        <HiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop đóng khi bấm ngoài */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Danh sách phòng ban */}
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => {
                  onChange(String(dept.id));
                  setIsOpen(false);
                }}
                className={`
                  w-full px-5 py-4 flex items-center justify-between text-left font-medium
                  transition-all duration-150
                  ${value === String(dept.id) ? 'bg-[#0068ff]/5 text-[#0068ff]' : 'text-gray-800 hover:bg-gray-100'}
                  active:bg-gray-200
                `}
              >
                <span>{dept.name}</span>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${dept.color}`}>{dept.name}</span>
                  {value === String(dept.id) && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
