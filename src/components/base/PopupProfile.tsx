'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import CropImageModal from '@/components/base/CropImageModal';

import ProfileView from '@/components/(profile)/popup-profile/ProfileView';
import EditInfoView from '@/components/(profile)/popup-profile/EditInfoView';
import ChangePasswordView from '@/components/(profile)/popup-profile/ChangePasswordView';

import { useToast } from '@/components/base/toast';
import { PopupProfileProps, ViewMode } from '@/types/types';
import Header from '@/components/(profile)/popup-profile/Header';
import { useUploadAvatar } from '@/hooks/useUploadAvatar';
import { useUpdateUser } from '@/hooks/useUpdateUser';

export default function PopupProfile({ isOpen, onClose, user, onAvatarUpdated, onUserUpdated }: PopupProfileProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('profile');

  const toast = useToast();

  const { upload, isUploading, avatarFailed, setAvatarFailed } = useUploadAvatar(user, onAvatarUpdated);
  const [isUploadingBackground, setIsUploadingBackground] = useState(false);
  const [cropOpen, setCropOpen] = useState(false);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [cropKind, setCropKind] = useState<'avatar' | 'background' | null>(null);
  const [cropFileName, setCropFileName] = useState<string>('image.jpg');
  const [pendingReset, setPendingReset] = useState<(() => void) | null>(null);

  const { updateUser, loading } = useUpdateUser(String(user._id), onUserUpdated);

  const [form, setForm] = useState({
    name: String(user.name || ''),
    phone: String(user.phone || ''),
    gender: String(user.gender || ''),
    birthday: String(user.birthday || ''),
    email: String(user.email || ''),
    address: String(user.address || ''),
    title: String(user.title || ''),
    department: String(user.department || ''),
    status: String(user.status || ''),
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const departmentOptions = [
    {
      id: 1,
      name: 'Ban lãnh đạo',
    },
    {
      id: 2,
      name: 'Quản lý',
    },
    {
      id: 3,
      name: 'Kinh doanh',
    },
    {
      id: 4,
      name: 'Thiết kế',
    },
    {
      id: 5,
      name: 'Sản xuất',
    },
    {
      id: 6,
      name: 'Sàn TMĐT',
    },
    {
      id: 7,
      name: 'Kế toán',
    },
    {
      id: 8,
      name: 'Kho TM',
    },
    {
      id: 9,
      name: 'HCNS',
    },
    {
      id: 10,
      name: 'Maketing',
    },
  ];

  const statusOptions = [
    { value: '1', label: 'Hoạt động' },
    { value: '2', label: 'Tạm khóa' },
    { value: '3', label: 'Nghỉ phép' },
  ];

  const handleEditInfoSubmit = () => {
    const name = String(form.name || '').trim();
    const email = String(form.email || '').trim();
    const phone = String(form.phone || '').trim();
    const birthday = String(form.birthday || '').trim();

    if (!name) {
      toast({ type: 'error', message: 'Vui lòng nhập tên hiển thị' });
      return;
    }

    if (!email) {
      toast({ type: 'error', message: 'Vui lòng nhập email' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ type: 'error', message: 'Email không hợp lệ' });
      return;
    }

    if (phone) {
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 8 || digits.length > 15) {
        toast({ type: 'error', message: 'Số điện thoại không hợp lệ' });
        return;
      }
    }

    if (birthday) {
      const d = new Date(birthday);
      if (Number.isNaN(d.getTime())) {
        toast({ type: 'error', message: 'Ngày sinh không hợp lệ' });
        return;
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d > today) {
        toast({ type: 'error', message: 'Ngày sinh không được lớn hơn hôm nay' });
        return;
      }
    }

    void updateUser({
      ...form,
      name,
      email,
      phone,
      birthday,
    });
  };

  if (!isOpen) return null;

  const displayName = user.name || user.username || 'Tài khoản';
  const displayId = user.username || user._id;
  const profilePath = `/profile/${displayId}`;
  const profileUrl = typeof window !== 'undefined' ? window.location.origin + profilePath : profilePath;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[400px] bg-white rounded-lg shadow-2xl h-auto max-h-[90vh] overflow-hidden no-scrollbar relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Thông tin tài khoản</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Header */}
          <Header
            displayName={displayName}
            avatarUrl={user.avatar}
            backgroundUrl={user.background as string | undefined}
            isUploading={isUploading}
            avatarFailed={avatarFailed}
            setAvatarFailed={setAvatarFailed}
            onSelectFile={(e: React.ChangeEvent<HTMLInputElement>) => {
              const inputEl = e.target;
              const f = inputEl.files?.[0];
              if (!f) return;
              try {
                const reader = new FileReader();
                reader.onload = () => {
                  setCropSrc(String(reader.result || ''));
                  setCropKind('avatar');
                  setCropFileName(f.name || 'avatar.jpg');
                  setPendingReset(() => () => {
                    inputEl.value = '';
                  });
                  setCropOpen(true);
                };
                reader.readAsDataURL(f);
              } catch {}
            }}
            isUploadingBackground={isUploadingBackground}
            onSelectBackgroundFile={async (e: React.ChangeEvent<HTMLInputElement>) => {
              const inputEl = e.currentTarget;
              const f = inputEl.files?.[0];
              if (!f) return;
              try {
                const reader = new FileReader();
                reader.onload = () => {
                  setCropSrc(String(reader.result || ''));
                  setCropKind('background');
                  setCropFileName(f.name || 'background.jpg');
                  setPendingReset(() => () => {
                    inputEl.value = '';
                  });
                  setCropOpen(true);
                };
                reader.readAsDataURL(f);
              } catch {}
            }}
          />

          <div className="pb-5 px-4">
            {/* MODE SWITCH */}
            {viewMode === 'profile' && (
              <ProfileView
                user={user}
                displayName={displayName}
                displayId={displayId}
                departmentOptions={departmentOptions.map((item) => ({
                  value: String(item.id),
                  label: item.name,
                }))}
                statusOptions={statusOptions.map((item) => ({
                  value: String(item.value),
                  label: item.label,
                }))}
                onEdit={() => setViewMode('editInfo')}
                onChangePassword={() => setViewMode('changePassword')}
              />
            )}

            {viewMode === 'editInfo' && (
              <EditInfoView
                form={form}
                setForm={(updater) => {
                  if (typeof updater === 'function') {
                    setForm((prev) => {
                      const next = (updater as (prev: typeof form) => Partial<typeof form>)(prev);
                      return {
                        name: String(next.name ?? prev.name),
                        phone: String(next.phone ?? prev.phone),
                        gender: String(next.gender ?? prev.gender),
                        birthday: String(next.birthday ?? prev.birthday),
                        email: String(next.email ?? prev.email),
                        address: String(next.address ?? prev.address),
                        title: String(next.title ?? prev.title),
                        department: String(next.department ?? prev.department),
                        status: String(next.status ?? prev.status),
                      };
                    });
                  } else {
                    setForm({
                      name: String(updater.name ?? form.name),
                      phone: String(updater.phone ?? form.phone),
                      gender: String(updater.gender ?? form.gender),
                      birthday: String(updater.birthday ?? form.birthday),
                      email: String(updater.email ?? form.email),
                      address: String(updater.address ?? form.address),
                      title: String(updater.title ?? form.title),
                      department: String(updater.department ?? form.department),
                      status: String(updater.status ?? form.status),
                    });
                  }
                }}
                loading={loading}
                departmentOptions={departmentOptions.map((item) => ({
                  value: String(item.id),
                  label: item.name,
                }))}
                statusOptions={statusOptions.map((item) => ({
                  value: String(item.value),
                  label: item.label,
                }))}
                onSubmit={handleEditInfoSubmit}
                onCancel={() => setViewMode('profile')}
              />
            )}

            {viewMode === 'changePassword' && (
              <ChangePasswordView
                form={passwordForm}
                setForm={setPasswordForm}
                loading={loading}
                onSubmit={async () => {
                  await updateUser(passwordForm);
                  setViewMode('profile');
                }}
                onCancel={() => setViewMode('profile')}
              />
            )}
          </div>
        </div>
        <CropImageModal
          open={cropOpen}
          src={cropSrc}
          onClose={() => {
            setCropOpen(false);
          }}
          onConfirm={async (file: File) => {
            if (cropKind === 'avatar') {
              await upload(file, () => pendingReset?.());
            } else if (cropKind === 'background') {
              try {
                setIsUploadingBackground(true);
                const MAX = 1024 * 1024 * 1024;
                if (!file.type.startsWith('image/') || file.size > MAX) {
                  toast({ type: 'error', message: 'Ảnh không hợp lệ hoặc quá lớn (>1GB)' });
                  return;
                }
                const formData = new FormData();
                formData.append('file', file);
                formData.append('roomId', 'background');
                formData.append('sender', String(user._id));
                formData.append('receiver', '');
                formData.append('type', 'image');
                formData.append('folderName', 'Backgrounds');
                const uploadRes = await fetch(`/api/upload?uploadId=background_${user._id}`, {
                  method: 'POST',
                  body: formData,
                });
                const uploadJson = await uploadRes.json();
                if (!uploadRes.ok || !uploadJson.success || !uploadJson.link) {
                  toast({ type: 'error', message: 'Upload thất bại' });
                  return;
                }
                const newUrl = String(uploadJson.link);
                let updateOk = false;
                try {
                  const res1 = await fetch('/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      action: 'update',
                      field: '_id',
                      value: String(user._id),
                      data: { background: newUrl },
                    }),
                  });
                  const json1 = await res1.json();
                  updateOk = res1.ok && !json1.error;
                } catch {}
                if (!updateOk) {
                  try {
                    const res2 = await fetch('/api/users', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        action: 'update',
                        field: 'username',
                        value: String(user.username || ''),
                        data: { background: newUrl },
                      }),
                    });
                    const json2 = await res2.json();
                    updateOk = res2.ok && !json2.error;
                  } catch {}
                }
                if (!updateOk) {
                  toast({ type: 'error', message: 'Cập nhật nền thất bại' });
                  return;
                }
                try {
                  const raw = localStorage.getItem('info_user');
                  if (raw) {
                    const parsed = JSON.parse(raw);
                    localStorage.setItem('info_user', JSON.stringify({ ...parsed, background: newUrl }));
                  }
                } catch {}
                onUserUpdated?.({ background: newUrl });
                toast({ type: 'success', message: 'Cập nhật nền thành công!' });
              } finally {
                setIsUploadingBackground(false);
                pendingReset?.();
              }
            }
            setCropOpen(false);
            setCropSrc(null);
            setCropKind(null);
          }}
          aspectRatio={cropKind === 'background' ? 16 / 9 : 1}
          circle={cropKind === 'avatar'}
          fileName={cropFileName}
          outputType="image/jpeg"
          quality={0.92}
        />
      </div>
    </div>
  );
}
