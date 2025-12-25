'use client';

import React from 'react';

export default function DeleteModal({
  open,
  name,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  name: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-0 lg:p-4">
      <div className="w-full h-full rounded-none bg-white p-6 shadow-none lg:max-w-md lg:h-auto lg:rounded-2xl lg:shadow-xl">
        <h3 className="text-base font-semibold text-gray-900">Xóa thư mục</h3>
        <p className="mt-2 text-sm text-gray-600">
          Bạn chắc chắn muốn xóa <span className="font-semibold text-gray-900">{name}</span>?
        </p>
        <div className="mt-4 flex items-center justify-end gap-2">
          <button onClick={onCancel} className="rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
            Hủy
          </button>
          <button onClick={onConfirm} className="rounded-xl bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
