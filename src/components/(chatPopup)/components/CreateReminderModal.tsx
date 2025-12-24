import React, { useMemo, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { HiCalendarDays, HiCheck, HiBellAlert, HiClock, HiUserGroup, HiUser } from 'react-icons/hi2';

interface CreateReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (payload: {
    content: string;
    dateTime: string;
    note?: string;
    repeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  }) => Promise<void> | void;
  createLoading: boolean;
}

export default function CreateReminderModal({ isOpen, onClose, onCreate, createLoading }: CreateReminderModalProps) {
  const [content, setContent] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [repeat, setRepeat] = useState<'none' | 'daily' | 'weekly' | 'monthly'>('none');
  const [showRepeatSheet, setShowRepeatSheet] = useState(false);
  const [showDateSheet, setShowDateSheet] = useState(false);

  const defaultDateTime = useMemo(() => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const y = now.getFullYear();
    const m = pad(now.getMonth() + 1);
    const d = pad(now.getDate());
    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
    return `${y}-${m}-${d}T${hh}:${mm}`;
  }, []);

  const dtLabel = useMemo(() => {
    const raw = dateTime || defaultDateTime;
    const ms = Date.parse(raw);
    if (Number.isNaN(ms)) return 'Chọn thời gian';
    const dateObj = new Date(ms);
    return dateObj.toLocaleString('vi-VN', { hour12: false });
  }, [dateTime, defaultDateTime]);

  const repeatLabel = useMemo(() => {
    switch (repeat) {
      case 'daily':
        return 'Hàng ngày';
      case 'weekly':
        return 'Hàng tuần';
      case 'monthly':
        return 'Hàng tháng';
      default:
        return 'Không lặp lại';
    }
  }, [repeat]);

  const canSubmit = content.trim().length > 0 && (dateTime || defaultDateTime).trim().length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:absolute sm:inset-0 z-[50] w-full h-full flex items-stretch justify-center bg-black/50 sm:bg-black/20 backdrop-blur-sm">
      <div className="bg-white w-full h-full rounded-none overflow-hidden animate-in fade-in duration-200 flex flex-col">
        <div className="p-3 pb-3 bg-gray-100 text-black w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <button onClick={onClose} className=" cursor-pointer top-3 left-3 p-2 ">
                <HiX className="w-5 h-5" />
              </button>
              <h3 className="text-xl ">Tạo nhắc hẹn mới</h3>
            </div>

            <button
              onClick={() => {
                const finalDt = dateTime || defaultDateTime;
                onCreate({ content, dateTime: finalDt, repeat });
              }}
              disabled={createLoading}
              className={`px-4 py-2 font-bold transition-all duration-200 
                ${
                  canSubmit && !createLoading
                    ? 'text-blue-500 cursor-pointer active:opacity-70'
                    : 'text-gray-400 cursor-not-allowed opacity-50'
                }`}
            >
              <div className="flex items-center gap-2 text-blue-500 justify-end ">Xong</div>
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 space-y-2 flex-1 overflow-y-auto">
          <div className="flex items-center gap-3 px-3 py-3  border-b border-gray-300 ">
            <div className="text-rose-600">
              <HiBellAlert className="w-6 h-6" />
            </div>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg"
              placeholder="Nhập tiêu đề nhắc hẹn..."
              type="text"
            />
          </div>

          <button
            className="w-full text-left px-3 py-3 border-b border-gray-300  flex items-center gap-3 cursor-pointer active:scale-[0.99]"
            onClick={() => setShowDateSheet(true)}
          >
            <div className="text-gray-700">
              <HiClock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-[15px]">{dtLabel}</p>
            </div>
          </button>

          <button
            className="w-full text-left px-3 py-3 border-b border-gray-300 flex items-center gap-3 cursor-pointer active:scale-[0.99]"
            onClick={() => setShowRepeatSheet(true)}
          >
            <div className="text-gray-700">
              <HiCalendarDays className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-[15px]">Chọn kiểu lặp lại</p>
              <p className="text-gray-500 text-xs">{repeatLabel}</p>
            </div>
          </button>
        </div>

        {showRepeatSheet && (
          <div className="fixed inset-0 z-[10000] flex items-end bg-black/40" onClick={() => setShowRepeatSheet(false)}>
            <div
              className="w-full bg-white rounded-t-2xl p-4"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex items-center justify-between pb-2">
                <p className="font-semibold">Chọn kiểu lặp lại</p>
                <button
                  onClick={() => setShowRepeatSheet(false)}
                  className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  Xong
                </button>
              </div>
              <div className="space-y-2">
                {[
                  { key: 'none', label: 'Không lặp lại' },
                  { key: 'daily', label: 'Hàng ngày' },
                  { key: 'weekly', label: 'Hàng tuần' },
                  { key: 'monthly', label: 'Hàng tháng' },
                ].map((opt) => (
                  <label
                    key={opt.key}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="repeat"
                      checked={repeat === (opt.key as 'none' | 'daily' | 'weekly' | 'monthly')}
                      onChange={() => setRepeat(opt.key as 'none' | 'daily' | 'weekly' | 'monthly')}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {showDateSheet && (
          <div className="fixed inset-0 z-[10000] flex items-end bg-black/40" onClick={() => setShowDateSheet(false)}>
            <div
              className="w-full bg-white rounded-t-2xl p-4 space-y-3"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="px-1">
                <input
                  type="datetime-local"
                  value={dateTime || defaultDateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowDateSheet(false)}
                  className="px-3 py-2 rounded-xl bg-blue-600 text-white font-semibold cursor-pointer"
                >
                  Chọn
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
