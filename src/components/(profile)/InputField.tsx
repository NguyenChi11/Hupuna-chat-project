// components/(profile)/InputField.tsx
import React from 'react';
import { HiUser, HiPhone, HiCalendar, HiEnvelope, HiMapPin, HiBriefcase } from 'react-icons/hi2';

const iconMap: Record<string, React.ReactNode> = {
  user: <HiUser className="w-4 h-4" />,
  phone: <HiPhone className="w-4 h-4" />,
  calendar: <HiCalendar className="w-4 h-4" />,
  email: <HiEnvelope className="w-4 h-4" />,
  location: <HiMapPin className="w-4 h-4" />,
  briefcase: <HiBriefcase className="w-4 h-4" />,
};

interface InputFieldProps {
  icon: keyof typeof iconMap;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export default function InputField({ icon, placeholder = '', value, onChange, type = 'text' }: InputFieldProps) {
  return (
    <div className="relative group">
      {/* Icon bên trái - mặc định xám, focus chuyển xanh Zalo */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#0068ff] transition-colors duration-200 pointer-events-none">
        {iconMap[icon]}
      </div>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-14 pr-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent 
               focus:bg-white focus:border-[#0068ff] focus:ring-4 focus:ring-[#0068ff]/20 
               transition-all duration-200 text-base font-medium outline-none 
               placeholder:text-gray-500"
      />
    </div>
  );
}
