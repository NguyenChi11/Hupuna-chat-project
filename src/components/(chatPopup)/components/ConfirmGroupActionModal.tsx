import React from 'react';
import { HiX, HiTrash } from 'react-icons/hi';
import { HiOutlineUserMinus } from 'react-icons/hi2';

type ConfirmAction = 'leave' | 'disband' | null;

interface ConfirmGroupActionModalProps {
  confirmAction: ConfirmAction;
  onCancel: () => void;
  onConfirmLeave: () => void;
  onConfirmDisband: () => void;
}

export default function ConfirmGroupActionModal({
  confirmAction,
  onCancel,
  onConfirmLeave,
  onConfirmDisband,
}: ConfirmGroupActionModalProps) {
  if (!confirmAction) return null;

  const isLeave = confirmAction === 'leave';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-4 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{isLeave ? 'Rời khỏi nhóm?' : 'Giải tán nhóm?'}</h3>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        <div className="h-px bg-gray-100 mx-4" />

        {/* Nội dung */}
        <div className="px-4 py-6">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-red-50 text-red-500 mb-4">
              {isLeave ? <HiOutlineUserMinus className="w-8 h-8" /> : <HiTrash className="w-8 h-8" />}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {isLeave
                ? 'Bạn sẽ không còn nhận được tin nhắn từ nhóm này nữa. Bạn vẫn có thể tham gia lại nếu được mời.'
                : 'Toàn bộ thành viên sẽ bị xóa khỏi nhóm và lịch sử trò chuyện sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.'}
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-100 mx-4 mb-4" />

        {/* Nút hành động */}
        <div className="flex items-center justify-end gap-3 px-4 pb-4">
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={isLeave ? onConfirmLeave : onConfirmDisband}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
          >
            {isLeave ? (
              <>
                <HiOutlineUserMinus className="w-4 h-4" />
                Rời nhóm
              </>
            ) : (
              <>
                <HiTrash className="w-4 h-4" />
                Giải tán nhóm
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
