// components/(profile)/ProfileInfo.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/components/base/toast';

import ProfileInfoView from './ProfileInfoView';
import ProfileInfoEdit from './ProfileInfoEdit';

import { HiPencil } from 'react-icons/hi2';

export function ProfileInfo({
  onDataChange,
  isOwner: isOwnerProp,
}: {
  onDataChange?: (data: Record<string, unknown>) => void;
  isOwner?: boolean;
}) {
  const searchParams = useSearchParams();
  const toast = useToast();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    gender: '',
    birthday: '',
    email: '',
    address: '',
    department: '',
    title: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentUser = useMemo(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('info_user') : null;
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const currentId = useMemo(() => String(currentUser?.['username'] || currentUser?.['_id'] || ''), [currentUser]);
  const viewingId = searchParams.get('user') || '';
  const isOwner = isOwnerProp ?? (currentId && viewingId && currentId === viewingId);

  const initializedRef = useRef(false);
  useEffect(() => {
    if (initializedRef.current || !currentUser) return;
    const newForm = {
      name: String(currentUser['name'] || currentUser['username'] || ''),
      phone: String(currentUser['phone'] || ''),
      gender: String(currentUser['gender'] || ''),
      birthday: String(currentUser['birthday'] || ''),
      email: String(currentUser['email'] || ''),
      address: String(currentUser['address'] || ''),
      department: String(currentUser['department'] || ''),
      title: String(currentUser['title'] || ''),
    };
    setForm(newForm);
    initializedRef.current = true;
    onDataChange?.(newForm);
  }, [currentUser, onDataChange]);

  const handleSave = async () => {
    if (!isOwner) return;

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

    const nextForm = {
      ...form,
      name,
      email,
      phone,
      birthday,
    };

    setForm(nextForm);
    setIsSaving(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          field: currentUser?.['username'] ? 'username' : '_id',
          value: currentId,
          data: nextForm,
        }),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || 'Lưu thất bại');

      localStorage.setItem('info_user', JSON.stringify({ ...currentUser, ...nextForm }));
      onDataChange?.(nextForm);
      toast({ type: 'success', message: 'Đã lưu thông tin!' });
      setIsEditing(false);
    } catch (err: unknown) {
      toast({ type: 'error', message: (err as Error).message || 'Lỗi hệ thống' });
    } finally {
      setIsSaving(false);
    }
  };

  if (!mounted) return null;

  if (!isOwner) return <ProfileInfoView form={form} />;

  if (isEditing) {
    return <ProfileInfoEdit form={form} setForm={setForm} isSaving={isSaving} onSave={handleSave} />;
  }

  const departmentOptions = [
    { id: 2, name: 'Quản lý' },
    { id: 3, name: 'Kinh doanh' },
    { id: 4, name: 'Thiết kế' },
    { id: 5, name: 'Sản xuất' },
    { id: 6, name: 'Sàn TMĐT' },
    { id: 7, name: 'Kế toán' },
    { id: 8, name: 'Kho TM' },
    { id: 9, name: 'HCNS' },
    { id: 10, name: 'Maketing' },
  ];
  const deptLabel =
    departmentOptions.find((o) => o.id === Number(form.department))?.name || form.department || 'Chưa cập nhật';

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin cá nhân</h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Tên hiển thị</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.name || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Giới tính</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.gender || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Ngày sinh</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.birthday || 'Chưa cập nhật'}</span>
        </div>

        <div className="py-2 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 w-32">Điện thoại</span>
            <span className="text-gray-900 font-medium flex-1 text-right">{form.phone || 'Chưa cập nhật'}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 pl-32">
            Số điện thoại chỉ hiển thị với người có lưu số bạn trong danh bạ máy
          </p>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Email</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.email || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Địa chỉ</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.address || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Phòng ban</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{deptLabel}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Chức vụ</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{form.title || 'Chưa cập nhật'}</span>
        </div>
      </div>

      <button
        onClick={() => setIsEditing(true)}
        className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <HiPencil className="w-4 h-4" />
        Chỉnh sửa
      </button>
    </div>
  );
}

export default ProfileInfo;
