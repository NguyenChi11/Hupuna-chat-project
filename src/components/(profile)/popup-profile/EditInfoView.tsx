'use client';

import { HiUser, HiCalendar, HiMapPin, HiBriefcase, HiIdentification } from 'react-icons/hi2';
import { useState } from 'react';
import { Field } from '@/components/ui/Field';
import { Dropdown } from '@/components/ui/Dropdown';
import { HiMail, HiOfficeBuilding, HiPhone, HiStatusOnline } from 'react-icons/hi';

export default function EditInfoView({
  form,
  setForm,
  onSubmit,
  onCancel,
  departmentOptions,
  statusOptions,
  loading,
}: {
  form: Record<string, string | number | boolean | undefined>;
  setForm: (value: Record<string, string | number | boolean | undefined>) => void;
  onSubmit: () => void;
  onCancel: () => void;
  departmentOptions: { value: string; label: string }[];
  statusOptions: { value: string; label: string }[];
  loading: boolean;
}) {
  const [openDept, setOpenDept] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const genderOptions = [
    { value: 'Nam', label: 'Nam' },
    { value: 'Nữ', label: 'Nữ' },
    { value: 'Khác', label: 'Khác' },
  ];

  return (
    <div className="w-full space-y-5">
      {/* Form Grid */}
      <div className="flex flex-col gap-4">
        {/* Tên hiển thị */}
        <Field icon={<HiUser className="w-5 h-5 text-indigo-600" />} label="Tên hiển thị" required>
          <input
            type="text"
            value={String(form.name ?? '')}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm font-medium transition-all bg-white"
          />
        </Field>

        {/* Số điện thoại */}
        <Field icon={<HiPhone className="w-5 h-5 text-blue-600" />} label="Số điện thoại">
          <input
            type="tel"
            value={String(form.phone ?? '')}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0123456789"
            className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-medium transition-all bg-white"
          />
        </Field>

        {/* Giới tính */}
        <Field icon={<HiIdentification className="w-5 h-5 text-purple-600" />} label="Giới tính">
          <Dropdown
            items={genderOptions}
            value={String(form.gender ?? '')}
            placeholder="Chọn giới tính"
            open={openGender}
            onToggle={() => {
              setOpenGender(!openGender);
              setOpenDept(false);
              setOpenStatus(false);
            }}
            onSelect={(v) => {
              setForm({ ...form, gender: v });
              setOpenGender(false);
            }}
            className="h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 text-sm"
          />
        </Field>

        {/* Ngày sinh */}
        <Field icon={<HiCalendar className="w-5 h-5 text-emerald-600" />} label="Ngày sinh">
          <input
            type="date"
            value={form.birthday ? String(form.birthday) : ''}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
            className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 text-sm font-medium transition-all bg-white"
          />
        </Field>

        {/* Email */}
        <Field icon={<HiMail className="w-5 h-5 text-orange-600" />} label="Email" required>
          <input
            type="email"
            value={String(form.email ?? '')}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-sm font-medium transition-all bg-white"
          />
        </Field>

        {/* Chức vụ */}
        <Field icon={<HiBriefcase className="w-5 h-5 text-teal-600" />} label="Chức vụ">
          <input
            type="text"
            value={String(form.title ?? '')}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Ví dụ: Nhân viên kinh doanh"
            className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm font-medium transition-all bg-white"
          />
        </Field>

        {/* Địa chỉ */}
        <div>
          <Field icon={<HiMapPin className="w-5 h-5 text-rose-600" />} label="Địa chỉ">
            <input
              type="text"
              value={String(form.address ?? '')}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Số nhà, đường, phường/xã..."
              className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-sm font-medium transition-all bg-white"
            />
          </Field>
        </div>

        {/* Phòng ban */}
        <div>
          <Field icon={<HiOfficeBuilding className="w-5 h-5 text-blue-600" />} label="Phòng ban">
            <Dropdown
              items={departmentOptions}
              value={String(form.department ?? '')}
              placeholder="Chọn phòng ban"
              open={openDept}
              onToggle={() => {
                setOpenDept(!openDept);
                setOpenStatus(false);
                setOpenGender(false);
              }}
              onSelect={(v) => {
                setForm({ ...form, department: v });
                setOpenDept(false);
              }}
              className="h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 text-sm"
            />
          </Field>
        </div>

        {/* Trạng thái */}
        <div>
          <Field icon={<HiStatusOnline className="w-5 h-5 text-green-600" />} label="Trạng thái làm việc">
            <Dropdown
              items={statusOptions}
              value={String(form.status ?? '')}
              placeholder="Chọn trạng thái"
              open={openStatus}
              onToggle={() => {
                setOpenStatus(!openStatus);
                setOpenDept(false);
                setOpenGender(false);
              }}
              onSelect={(v) => {
                setForm({ ...form, status: v });
                setOpenStatus(false);
              }}
              className="h-[2.5rem] rounded-lg border border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 text-sm"
            />
          </Field>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onSubmit}
          disabled={loading}
          className="cursor-pointer flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            'Đang lưu...'
          ) : (
            <>
              Lưu thay đổi
              <HiUser className="w-4 h-4" />
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
