'use client';

export default function ProfileOverview({
  data,
}: {
  data: {
    phone: string;
    gender: string;
    birthday: string;
    email: string;
    address: string;
    department: string;
    title: string;
  };
}) {
  const departmentOptions = [
    { value: '101', label: 'Kinh doanh' },
    { value: '102', label: 'Marketing' },
    { value: '103', label: 'Kỹ thuật' },
    { value: '104', label: 'Nhân sự' },
    { value: '105', label: 'Tài chính' },
  ];
  const deptLabel = departmentOptions.find((o) => o.value === String(data.department))?.label || data.department || 'Chưa cập nhật';

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin cá nhân</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Giới tính</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{data.gender || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Ngày sinh</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{data.birthday || 'Chưa cập nhật'}</span>
        </div>

        <div className="py-2 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 w-32">Điện thoại</span>
            <span className="text-gray-900 font-medium flex-1 text-right">{data.phone || 'Chưa cập nhật'}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 pl-32">
            Số điện thoại chỉ hiển thị với người có lưu số bạn trong danh bạ máy
          </p>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Email</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{data.email || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Địa chỉ</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{data.address || 'Chưa cập nhật'}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Phòng ban</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{deptLabel}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Chức vụ</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{data.title || 'Chưa cập nhật'}</span>
        </div>
      </div>
    </div>
  );
}
