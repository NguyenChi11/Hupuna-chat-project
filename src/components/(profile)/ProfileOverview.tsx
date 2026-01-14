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
  const email = String(data.email || '').trim();
  const phone = String(data.phone || '').trim();
  const birthday = String(data.birthday || '').trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = email && emailRegex.test(email);

  const digits = phone.replace(/\D/g, '');
  const isPhoneValid = !phone || (digits.length >= 8 && digits.length <= 15);

  let birthdayDisplay = birthday;
  if (birthday) {
    const d = new Date(birthday);
    const isValidDate = !Number.isNaN(d.getTime());
    if (isValidDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d > today) {
        birthdayDisplay = '';
      }
    } else {
      birthdayDisplay = '';
    }
  }

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
  const deptLabel =
    departmentOptions.find((o) => o.id === Number(data.department))?.name || data.department || 'Chưa cập nhật';

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
          <span className="text-gray-900 font-medium flex-1 text-right">{birthdayDisplay || 'Chưa cập nhật'}</span>
        </div>

        <div className="py-2 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 w-32">Điện thoại</span>
            <span className="text-gray-900 font-medium flex-1 text-right">
              {isPhoneValid && phone ? phone : 'Chưa cập nhật'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2 pl-32">
            Số điện thoại chỉ hiển thị với người có lưu số bạn trong danh bạ máy
          </p>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Email</span>
          <span className="text-gray-900 font-medium flex-1 text-right">{isEmailValid ? email : 'Chưa cập nhật'}</span>
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
