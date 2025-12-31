'use client';

import { HiLockClosed, HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useState } from 'react';

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordViewProps {
  form: ChangePasswordForm;
  setForm: React.Dispatch<React.SetStateAction<ChangePasswordForm>>;
  onSubmit: () => void;
  onCancel: () => void;
  loading: boolean;
}

export default function ChangePasswordView({ form, setForm, onSubmit, onCancel, loading }: ChangePasswordViewProps) {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleShow = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-4">
        <Field label="Mật khẩu hiện tại">
          <div className="relative">
            <input
              type={showPassword.current ? 'text' : 'password'}
              value={form.currentPassword}
              onChange={(e) => setForm({ ...form, currentPassword: e.target.value })}
              placeholder="Nhập mật khẩu hiện tại"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
            />
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="button"
              onClick={() => toggleShow('current')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition"
            >
              {showPassword.current ? (
                <HiEyeSlash className="w-4 h-4 text-gray-500" />
              ) : (
                <HiEye className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>
        </Field>

        <Field label="Mật khẩu mới">
          <div className="relative">
            <input
              type={showPassword.new ? 'text' : 'password'}
              value={form.newPassword}
              onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
              placeholder="Tạo mật khẩu mạnh"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm font-medium transition-all bg-white"
            />
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="button"
              onClick={() => toggleShow('new')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition"
            >
              {showPassword.new ? (
                <HiEyeSlash className="w-4 h-4 text-gray-500" />
              ) : (
                <HiEye className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>
        </Field>

        <Field label="Xác nhận mật khẩu">
          <div className="relative">
            <input
              type={showPassword.confirm ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              placeholder="Nhập lại mật khẩu mới"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
            />
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="button"
              onClick={() => toggleShow('confirm')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition"
            >
              {showPassword.confirm ? (
                <HiEyeSlash className="w-4 h-4 text-gray-500" />
              ) : (
                <HiEye className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>
        </Field>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onSubmit}
          disabled={loading}
          className="cursor-pointer flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            'Đang đổi...'
          ) : (
            <>
              Đổi mật khẩu
              <HiLockClosed className="w-4 h-4" />
            </>
          )}
        </button>

        <button
          onClick={onCancel}
          className="cursor-pointer flex-1 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm transition-all active:scale-98"
        >
          Hủy bỏ
        </button>
      </div>
    </div>
  );
}

// Giữ nguyên hoàn toàn cấu trúc Field
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
        <HiLockClosed className="w-3.5 h-3.5 text-blue-500" />
        {label}
      </p>
      {children}
    </div>
  );
}
