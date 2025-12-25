// components/(profile)/ProfileInfoView.tsx

import InfoRow from '@/components/(profile)/InforRow';

const departments: Record<string, { label: string; color: string }> = {
  '1': { label: 'Ban lãnh đạo', color: 'bg-pink-100 text-pink-700' },
  '2': { label: 'Quản lý', color: 'bg-purple-100 text-purple-700' },
  '3': { label: 'Kinh doanh', color: 'bg-blue-100 text-blue-700' },
  '4': { label: 'Thiết kế', color: 'bg-green-100 text-green-700' },
  '5': { label: 'Sản xuất', color: 'bg-yellow-100 text-yellow-700' },
  '6': { label: 'Sàn TMĐT', color: 'bg-orange-100 text-orange-700' },
  '7': { label: 'Kế toán', color: 'bg-red-100 text-red-700' },
  '8': { label: 'Kho TM', color: 'bg-gray-100 text-gray-700' },
  '9': { label: 'HCNS', color: 'bg-teal-100 text-teal-700' },
  '10': { label: 'Maketing', color: 'bg-pink-100 text-pink-700' },
};

export default function ProfileInfoView({
  form,
}: {
  form: {
    name?: string;
    phone?: string;
    gender?: string;
    birthday?: string;
    email?: string;
    address?: string;
    department?: string;
    title?: string;
  };
}) {
  const dept = form.department ? departments[form.department] : undefined;

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <InfoRow icon="user" label="Tên hiển thị" value={form.name || 'Chưa đặt'} />
      <InfoRow icon="phone" label="Số điện thoại" value={form.phone || 'Chưa đặt'} />
      <InfoRow icon="user" label="Giới tính" value={form.gender || 'Chưa chọn'} />
      <InfoRow icon="calendar" label="Ngày sinh" value={form.birthday || 'Chưa chọn'} />
      <InfoRow icon="email" label="Email" value={form.email || 'Chưa đặt'} />
      <InfoRow icon="location" label="Địa chỉ" value={form.address || 'Chưa đặt'} />
      <InfoRow
        icon="building"
        label="Phòng ban"
        value={dept?.label || 'Chưa xác định'}
        badge={dept && <span className={`px-3 py-1 rounded-full text-xs font-medium ${dept.color}`}>{dept.label}</span>}
      />
      <InfoRow icon="briefcase" label="Chức vụ" value={form.title || 'Chưa đặt'} />
    </div>
  );
}
