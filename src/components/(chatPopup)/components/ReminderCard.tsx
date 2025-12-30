import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
import { HiOutlineClock } from 'react-icons/hi2';

type Variant = 'create' | 'due' | 'message';

interface ReminderCardProps {
  variant: Variant;
  title: string;
  date: Date;
  senderName?: string;
  senderAvatar?: string | null;
  isMe?: boolean;
  highlighted?: boolean;
  onOpen?: () => void;
}

function timeDisplay(date: Date) {
  const today = new Date();
  const sameDay =
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate();
  const timeStr = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  const dateStr = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  return sameDay ? `Hôm nay lúc ${timeStr}` : `${dateStr} lúc ${timeStr}`;
}

export default function ReminderCard({
  variant,
  title,
  date,
  senderName,
  senderAvatar,
  isMe = false,
  highlighted = false,
  onOpen,
}: ReminderCardProps) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (variant === 'due') {
    return (
      <div
        className={`w-full max-w-[18rem] p-4 bg-white rounded-2xl border border-gray-200 shadow-sm text-center ${
          highlighted ? 'ring-2 ring-yellow-300' : ''
        }`}
      >
        <div className="flex justify-center mb-2">
          <HiOutlineClock className="w-7 h-7 text-red-500" />
        </div>
        <p className="text-base font-semibold text-gray-900 truncate">Nhắc hẹn: {title || ''}</p>
        <p className="text-sm text-gray-500 mt-0.5">{timeDisplay(date)}</p>
        <div className="pt-2">
          <button
            onClick={onOpen}
            className="w-[10rem] cursor-pointer px-4 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 font-bold text-sm uppercase transition-all"
          >
            MỞ LỊCH
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full max-w-[20rem] ${
        highlighted ? 'ring-2 ring-yellow-300' : ''
      }`}
    >
      <div className="flex items-center gap-2 p-3 border-b border-gray-100 bg-white">
        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
          {senderAvatar ? (
            <Image
              src={getProxyUrl(senderAvatar)}
              width={24}
              height={24}
              className="object-cover w-full h-full"
              alt=""
            />
          ) : (
            <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">
              <Image
                src="/logo/avata.webp"
                alt=""
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <span className="text-sm text-gray-700">{isMe ? 'Bạn' : senderName} đã tạo một nhắc hẹn</span>
      </div>
      <div className="flex p-4 gap-4 items-center cursor-pointer">
        <div className="flex flex-col items-center justify-center min-w-[50px]">
          <span className="text-red-500 text-xs font-bold uppercase tracking-wider">THG {month}</span>
          <span className="text-3xl text-gray-800 font-normal leading-none mt-1">{day}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="text-lg font-semibold text-gray-900 truncate">{title || 'Không có tiêu đề'}</p>
          <p className="text-sm text-gray-500 mt-0.5">{timeDisplay(date)}</p>
        </div>
      </div>
    </div>
  );
}
