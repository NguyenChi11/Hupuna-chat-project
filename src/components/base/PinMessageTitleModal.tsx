import React, { useState } from 'react';
import { HiMapPin, HiXMark } from 'react-icons/hi2';

interface PinMessageTitleModalProps {
  onClose: () => void;
  onConfirm: (title: string) => void;
}

export default function PinMessageTitleModal({
  onClose,
  onConfirm,
}: PinMessageTitleModalProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <HiMapPin className="w-5 h-5 text-blue-600" />
            Ghim tin nhắn
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <p className="text-sm text-gray-600 mb-3">
            Bạn có thể đặt tiêu đề cho tin nhắn ghim này (tùy chọn):
          </p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            autoFocus
          />
          
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
            >
              Ghim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
