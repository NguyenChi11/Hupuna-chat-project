/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { HiPencil, HiX, HiCheck } from 'react-icons/hi';

interface RenameGroupModalProps {
  isOpen: boolean;
  renameInput: string;
  onChangeInput: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function RenameGroupModal({
  isOpen,
  renameInput,
  onChangeInput,
  onClose,
  onSubmit,
}: RenameGroupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient đẹp như Zalo */}
        <div className="relative cursor-pointer px-6 pt-8 pb-6 bg-blue-400 text-white text-center">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 cursor-pointer rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 active:scale-95"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-2xl font-bold">Đổi tên nhóm</h3>
          <p className="mt-2 text-sm text-white/80">Tất cả thành viên sẽ thấy tên nhóm mới</p>
        </div>

        {/* Body */}
        <div className="p-6 pt-8">
          <div className="relative">
            <input
              type="text"
              value={renameInput}
              onChange={(e) => onChangeInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && renameInput.trim()) {
                  e.preventDefault();
                  onSubmit();
                }
              }}
              autoFocus
              placeholder="Nhập tên nhóm mới..."
              className="w-full pl-3 pr-12 py-2 bg-[#EAEDF0] rounded-md focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0068ff] transition-all duration-300 text-sm text-gray-900 placeholder-gray-500"
            />
            {renameInput && <HiCheck className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />}
          </div>

          <p className="mt-3 text-xs text-gray-500 text-center">
            Nhấn <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Enter</kbd> để lưu nhanh
          </p>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 pb-8">
          <button
            onClick={onClose}
            className="cursor-pointer flex-1 py-3.5 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-200 active:scale-95"
          >
            Hủy
          </button>
          <button
            onClick={onSubmit}
            disabled={!renameInput.trim()}
            className={`flex-1 py-3.5 cursor-pointer text-base font-bold text-white rounded-2xl shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2
              ${
                !renameInput.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 shadow-blue-300'
              }`}
          >
            <HiCheck className="w-5 h-5" />
            Lưu tên nhóm
          </button>
        </div>
      </div>
    </div>
  );
}
