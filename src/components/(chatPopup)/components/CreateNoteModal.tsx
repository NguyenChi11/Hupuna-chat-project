import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';

interface CreateNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (payload: { content: string; pinned: boolean }) => Promise<void> | void;
  createLoading: boolean;
}

export default function CreateNoteModal({ isOpen, onClose, onCreate, createLoading }: CreateNoteModalProps) {
  const [content, setContent] = useState('');
  const [pinned, setPinned] = useState(false);
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

  if (!isOpen) return null;

  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-center justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/50'
      } backdrop-blur-sm`}
    >
      <div className="bg-white w-full md:max-w-md h-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">Tạo ghi chú</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">Nội dung</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Nhập nội dung mới hoặc dán link"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none min-h-[120px] text-gray-800"
              autoFocus
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                checked={pinned}
                onChange={(e) => setPinned(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
            </div>
            <span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">Ghim lên đầu trò chuyện</span>
          </label>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors cursor-pointer"
            disabled={createLoading}
          >
            Hủy
          </button>
          <button
            onClick={() => {
              if (content.trim()) {
                onCreate({ content, pinned });
                setContent('');
                setPinned(false);
              }
            }}
            disabled={createLoading || !content.trim()}
            className={`px-4 py-2 rounded-lg font-medium text-white transition-all shadow-sm ${
              createLoading || !content.trim()
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95'
            }`}
          >
            {createLoading ? 'Đang tạo...' : 'Tạo ghi chú'}
          </button>
        </div>
      </div>
    </div>
  );

  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  // Fallback to body if target not found (e.g. mobile or main chat view)
  const portalTarget = target || (typeof document !== 'undefined' ? document.body : null);

  return portalTarget ? createPortal(modalNode, portalTarget) : modalNode;
}
