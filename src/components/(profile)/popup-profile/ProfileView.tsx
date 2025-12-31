'use client';

import { HiMail, HiOfficeBuilding, HiStatusOnline } from 'react-icons/hi';
import { HiPencil, HiLockClosed, HiPhone, HiMapPin, HiCalendar, HiBriefcase, HiIdentification } from 'react-icons/hi2';

interface Option {
  value: string;
  label: string;
}

interface Props {
  user: {
    department?: string | number;
    status?: string | number;
    phone?: string;
    gender?: string;
    birthday?: string;
    email?: string;
    address?: string;
    title?: string;
  };
  displayName: string;
  displayId: string;
  departmentOptions: Option[];
  statusOptions: Option[];
  onEdit: () => void;
  onChangePassword: () => void;
}

export default function ProfileView({
  user,
  displayName,
  displayId,
  departmentOptions,
  statusOptions,
  onEdit,
  onChangePassword,
}: Props) {
  return (
    <div className="w-full space-y-6">
      {/* Tên và ID */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900">{displayName}</h3>
        <p className="text-sm text-gray-500">ID: {displayId}</p>
      </div>

      {/* Thông tin chi tiết */}
      <div className="space-y-4">
        {/* Phòng ban */}
        {user.department !== undefined && (
          <InfoRow
            icon={<HiOfficeBuilding className="w-5 h-5 text-gray-400" />}
            label="Phòng ban"
            value={departmentOptions.find((o) => o.value === String(user.department))?.label || '—'}
          />
        )}

        {/* Trạng thái */}
        {user.status !== undefined && (
          <InfoRow
            icon={<HiStatusOnline className="w-5 h-5 text-gray-400" />}
            label="Trạng thái"
            value={statusOptions.find((o) => o.value === String(user.status))?.label || '—'}
          />
        )}

        <InfoRow icon={<HiPhone className="w-5 h-5 text-gray-400" />} label="Số điện thoại" value={user.phone} />
        <InfoRow icon={<HiIdentification className="w-5 h-5 text-gray-400" />} label="Giới tính" value={user.gender} />
        <InfoRow icon={<HiCalendar className="w-5 h-5 text-gray-400" />} label="Ngày sinh" value={user.birthday} />
        <InfoRow icon={<HiMail className="w-5 h-5 text-gray-400" />} label="Email" value={user.email} />
        <InfoRow icon={<HiMapPin className="w-5 h-5 text-gray-400" />} label="Địa chỉ" value={user.address} />
        <InfoRow icon={<HiBriefcase className="w-5 h-5 text-gray-400" />} label="Chức vụ" value={user.title} />
      </div>

      {/* Nút hành động */}
      <div className="space-y-3 pt-2">
        <button
          onClick={onEdit}
          className="cursor-pointer w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <HiPencil className="w-4 h-4" />
          Cập nhật thông tin
        </button>

        <button
          onClick={onChangePassword}
          className="cursor-pointer w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <HiLockClosed className="w-4 h-4" />
          Đổi mật khẩu
        </button>
      </div>
    </div>
  );
}

// Component nhỏ gọn, đẹp cho từng dòng thông tin
function InfoRow({
  icon,
  label,
  value,
  bold = false,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | number | null;
  bold?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5">{icon}</div>
      <div className="flex-1">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className={`text-sm ${bold ? 'font-bold text-gray-900' : 'font-medium text-gray-800'} mt-0.5`}>
          {value ? String(value) : <span className="text-gray-400">Chưa cập nhật</span>}
        </p>
      </div>
    </div>
  );
}
