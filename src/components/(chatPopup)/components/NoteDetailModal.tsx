import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiX, HiOutlineDuplicate } from 'react-icons/hi';

interface NoteDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    content: string;
    creatorName: string;
    timestamp: number | string | Date;
  } | null;
}

export default function NoteDetailModal({ isOpen, onClose, data }: NoteDetailModalProps) {
  const [isCopied, setIsCopied] = useState(false);
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;

  useEffect(() => {
    if (isOpen) {
      setIsCopied(false);
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatTime = (ts: number | string | Date) => {
    try {
      const date = new Date(ts);
      const now = new Date();

      const timeStr = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

      const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

      if (isToday) {
        return `${timeStr} Hôm nay`;
      }

      const dateStr = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
      return `${timeStr} ${dateStr}`;
    } catch {
      return '';
    }
  };

  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[100] flex items-center justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/50'
      } backdrop-blur-sm`}
    >
      <div className="bg-white w-full max-w-md shadow-2xl rounded-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col mx-4">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">Ghi chú</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-0 flex-1 overflow-y-auto min-h-[150px] max-h-[60vh]">
          <div className="bg-gray-50 py-3 px-4 text-center border-b border-gray-100">
            <p className="text-xs text-gray-500">
              Tạo bởi {data.creatorName} - {formatTime(data.timestamp)}
            </p>
          </div>
          <div className="p-4">
            <p className="text-gray-800 whitespace-pre-wrap break-words text-sm leading-relaxed">{data.content}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer relative group"
            title="Sao chép"
          >
            <HiOutlineDuplicate className="w-6 h-6" />
            {isCopied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                Đã sao chép
              </span>
            )}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors cursor-pointer text-sm"
            >
              Đóng
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors cursor-pointer text-sm">
              Chỉnh sửa
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  const portalTarget = target || (typeof document !== 'undefined' ? document.body : null);

  return portalTarget ? createPortal(modalNode, portalTarget) : modalNode;
}
