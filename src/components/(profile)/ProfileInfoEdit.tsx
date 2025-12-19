// components/(profile)/ProfileInfoEdit.tsx

import DepartmentDropdown from '@/components/(profile)/DepartmentDropdown';
import GenderSelector from '@/components/(profile)/GenderSelector';
import InputField from '@/components/(profile)/InputField';
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
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <div className="space-y-4">
        <InputField
          icon="user"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Tên hiển thị"
        />
        <InputField
          icon="phone"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          placeholder="Số điện thoại"
          type="tel"
        />
        <GenderSelector value={form.gender} onChange={(v) => setForm({ ...form, gender: v })} />
        <InputField
          icon="calendar"
          value={form.birthday}
          onChange={(v) => setForm({ ...form, birthday: v })}
          type="date"
        />
        <DepartmentDropdown value={form.department} onChange={(v) => setForm({ ...form, department: v })} />
        <InputField
          icon="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="Email"
          type="email"
        />
        <InputField
          icon="location"
          value={form.address}
          onChange={(v) => setForm({ ...form, address: v })}
          placeholder="Địa chỉ"
        />

        <InputField
          icon="briefcase"
          value={form.title}
          onChange={(v) => setForm({ ...form, title: v })}
          placeholder="Chức vụ"
        />
      </div>

      <button
        onClick={onSave}
        disabled={isSaving}
        className="w-full mt-4 py-4 bg-[#0068ff] hover:bg-[#005edc] disabled:bg-gray-400 text-white font-bold text-base rounded-2xl shadow-md transition-all duration-200 active:scale-95 disabled:opacity-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
