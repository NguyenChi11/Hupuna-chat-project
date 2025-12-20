// components/(profile)/ProfileInfoEdit.tsx

import DepartmentDropdown from '@/components/(profile)/DepartmentDropdown';
import GenderSelector from '@/components/(profile)/GenderSelector';
import InputField from '@/components/(profile)/InputField';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi2';

interface Props {
  form: {
    name: string;
    phone: string;
    gender: string;
    birthday: string;
    email: string;
    address: string;
    department: string;
    title: string;
  };
  setForm: (form: Props['form']) => void;
  isSaving: boolean;
  onSave: () => void;
}

export default function ProfileInfoEdit({ form, setForm, isSaving, onSave }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDepartment, setIsOpenDepartment] = useState(false);
  const departmentOptions = [
    { value: '101', label: 'Kinh doanh' },
    { value: '102', label: 'Marketing' },
    { value: '103', label: 'Kỹ thuật' },
    { value: '104', label: 'Nhân sự' },
    { value: '105', label: 'Tài chính' },
  ];

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Chỉnh sửa thông tin</h3>

      <div className="space-y-4">
        {/* Tên hiển thị */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Tên hiển thị</span>
          <input
            className="flex-1 text-right text-gray-900 font-medium focus:outline-none placeholder-gray-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Chưa cập nhật"
          />
        </div>

        {/* Giới tính */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Giới tính</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`
      w-full px-5 p-2 rounded-2xl  text-base font-medium text-left
      flex items-center justify-between transition-all duration-200
      focus:outline-none
      ${isOpen ? 'bg-white ring-4 ring-[#0068ff]/20 border-2 border-[#0068ff]' : 'border-2 border-transparent '}
      ${form.gender ? 'text-gray-900' : 'text-gray-500'}
    `}
            >
              <span>{form.gender || 'Chưa cập nhật'}</span>
              <HiChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <>
                {/* Backdrop để đóng khi click ngoài */}
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                {/* Danh sách lựa chọn */}
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
                  {['Nam', 'Nữ', 'Khác'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setForm({ ...form, gender: option });
                        setIsOpen(false);
                      }}
                      className={`
              w-full px-5 py-4 text-left font-medium transition-all duration-150
              ${form.gender === option ? 'bg-[#0068ff]/5 text-[#0068ff]' : 'text-gray-800 hover:bg-gray-100'}
              active:bg-gray-200 flex items-center justify-between
            `}
                    >
                      <span>{option}</span>
                      {form.gender === option && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
                    </button>
                  ))}

                  {/* Option "Chưa cập nhật" */}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Ngày sinh */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Ngày sinh</span>
          <input
            type="date"
            className="flex-1 text-right text-gray-900 font-medium focus:outline-none bg-transparent"
            value={form.birthday}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
          />
        </div>

        {/* Điện thoại */}
        <div className="py-2 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 w-32">Điện thoại</span>
            <input
              type="tel"
              className="flex-1 text-right text-gray-900 font-medium focus:outline-none placeholder-gray-400"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Chưa cập nhật"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 pl-32">
            Số điện thoại chỉ hiển thị với người có lưu số bạn trong danh bạ máy
          </p>
        </div>

        {/* Email */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Email</span>
          <input
            type="email"
            className="flex-1 text-right text-gray-900 font-medium focus:outline-none placeholder-gray-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Chưa cập nhật"
          />
        </div>

        {/* Địa chỉ */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Địa chỉ</span>
          <input
            className="flex-1 text-right text-gray-900 font-medium focus:outline-none placeholder-gray-400"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Chưa cập nhật"
          />
        </div>

        {/* Phòng ban */}
        <div className="flex justify-between items-center py-4 border-b border-gray-100">
          <span className="text-gray-500 text-base w-32">Phòng ban</span>

          {/* Custom Dropdown thay thế <select> */}
          <div className="flex-1 relative">
            <button
              type="button"
              onClick={() => setIsOpenDepartment(!isOpenDepartment)}
              className={`
        w-full px-4 py-1 text-right font-medium text-base transition-all duration-200
        flex items-center justify-end gap-3
        ${form.department ? 'text-gray-900' : 'text-gray-500'}
        focus:outline-none
      `}
            >
              <span className="truncate max-w-[180px]">
                {departmentOptions.find((opt) => opt.value === form.department)?.label || 'Chưa cập nhật'}
              </span>
              <HiChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpenDepartment ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown menu */}
            {isOpenDepartment && (
              <>
                {/* Backdrop đóng khi click ngoài */}
                <div className="fixed inset-0 z-40" onClick={() => setIsOpenDepartment(false)} />

                {/* Danh sách lựa chọn */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
                  {/* Option "Chưa cập nhật" */}
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ ...form, department: '' });
                      setIsOpenDepartment(false);
                    }}
                    className={`
              w-full px-5 py-4 text-left font-medium transition-all duration-150
              ${!form.department ? 'bg-[#0068ff]/5 text-[#0068ff]' : 'text-gray-800 hover:bg-gray-100'}
              active:bg-gray-200 flex items-center justify-between
            `}
                  >
                    <span>Chưa cập nhật</span>
                    {!form.department && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
                  </button>

                  {/* Các phòng ban */}
                  {departmentOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setForm({ ...form, department: opt.value });
                        setIsOpenDepartment(false);
                      }}
                      className={`
                w-full px-5 py-4 text-left font-medium transition-all duration-150 border-t border-gray-100
                ${form.department === opt.value ? 'bg-[#0068ff]/5 text-[#0068ff]' : 'text-gray-800 hover:bg-gray-100'}
                active:bg-gray-200 flex items-center justify-between
              `}
                    >
                      <span>{opt.label}</span>
                      {form.department === opt.value && <HiCheck className="w-5 h-5 text-[#0068ff]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        {/* Chức vụ */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 w-32">Chức vụ</span>
          <input
            className="flex-1 text-right text-gray-900 font-medium focus:outline-none placeholder-gray-400"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Chưa cập nhật"
          />
        </div>
      </div>

      <button
        onClick={onSave}
        disabled={isSaving}
        className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-full shadow-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
      >
        {isSaving ? (
          'Đang lưu...'
        ) : (
          <>
            <HiCheck className="w-5 h-5" />
            Lưu thông tin
          </>
        )}
      </button>
    </div>
  );
}
