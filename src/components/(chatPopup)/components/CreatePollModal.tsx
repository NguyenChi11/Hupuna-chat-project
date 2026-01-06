/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi2';

interface CreatePollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (payload: {
    question: string;
    options: string[];
    pollAllowMultiple?: boolean;
    pollAllowAddOptions?: boolean;
    pollHideVoters?: boolean;
    pollHideResultsUntilVote?: boolean;
    pollEndAt?: number | null;
  }) => Promise<void> | void;
}

export default function CreatePollModal({ isOpen, onClose, onCreate }: CreatePollModalProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '']);
  const [saving, setSaving] = useState(false);
  const maxOptions = 10;
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const [allowMultiple, setAllowMultiple] = useState(true);
  const [allowAddOptions, setAllowAddOptions] = useState(true);
  const [hideVoters, setHideVoters] = useState(false);
  const [hideResultsUntilVote, setHideResultsUntilVote] = useState(false);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [deadlineOpen, setDeadlineOpen] = useState(false);
  const [deadlineMode, setDeadlineMode] = useState<'none' | 'time'>(endAt ? 'time' : 'none');
  const [deadlineInput, setDeadlineInput] = useState<string>('');

  if (!isOpen) return null;

  const handleAddOption = () => {
    setOptions((prev) => (prev.length >= maxOptions ? prev : [...prev, '']));
  };

  const handleChangeOption = (index: number, value: string) => {
    setOptions((prev) => prev.map((o, i) => (i === index ? value : o)));
  };

  const handleSubmit = async () => {
    const trimmedQuestion = question.trim();
    const raw = options.map((o) => o.trim()).filter((o) => o);
    const lowerSet = Array.from(new Set(raw.map((o) => o.toLowerCase())));
    const unique = lowerSet.map((lo) => raw.find((x) => x.toLowerCase() === lo) as string);
    if (!trimmedQuestion || unique.length < 2) return;
    setSaving(true);
    try {
      await onCreate({
        question: trimmedQuestion,
        options: unique,
        pollAllowMultiple: allowMultiple,
        pollAllowAddOptions: allowAddOptions,
        pollHideVoters: hideVoters,
        pollHideResultsUntilVote: hideResultsUntilVote,
        pollEndAt: endAt ?? null,
      });
      setQuestion('');
      setOptions(['', '']);
      setAllowMultiple(true);
      setAllowAddOptions(true);
      setHideVoters(false);
      setHideResultsUntilVote(false);
      setEndAt(null);
      setDeadlineMode('none');
      setDeadlineInput('');
      setDeadlineOpen(false);
    } finally {
      setSaving(false);
    }
  };
  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-[50] flex items-stretch justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/50'
      } backdrop-blur-sm`}
    >
      <div className="bg-white w-full h-full rounded-none overflow-hidden flex flex-col">
        <div className=" px-4 pt-3 pb-2  text-black bg-gray-50 flex-shrink-0 border-b border-gray-200">
          <div className="flex gap-3 items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={onClose} disabled={saving} className=" cursor-pointer  ">
                <HiX className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 ">
                <h3 className="text-xl ">Tạo bình chọn</h3>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={
                saving ||
                !question.trim() ||
                new Set(
                  options
                    .map((o) => o.trim())
                    .filter((o) => o)
                    .map((o) => o.toLowerCase()),
                ).size < 2
              }
              className=" cursor-pointer hover:text-blue-700 text-blue-500 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className=" justify-end gap-2">{saving ? 'Đang tạo...' : 'Tạo'}</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-4 space-y-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Câu hỏi *</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
            placeholder="Đặt câu hỏi bình chọn"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">Tùy chọn *</label>
          <div className="space-y-2">
            {options.map((opt, idx) => (
              <input
                placeholder={`Phương án ${idx + 1}`}
                key={idx}
                type="text"
                value={opt}
                onChange={(e) => handleChangeOption(idx, e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            ))}
          </div>
          <div className="">
            <button
              onClick={handleAddOption}
              disabled={options.length >= maxOptions}
              className="cursor-pointer px-4 py-2 mb-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Thêm lựa chọn
            </button>
            <p className="text-xs px-4 text-gray-500">Cần tối thiểu 2 lựa chọn. Tối đa {maxOptions} lựa chọn.</p>
          </div>
          {(() => {
            const raw = options.map((o) => o.trim()).filter((o) => o);
            const uniqueCount = new Set(raw.map((o) => o.toLowerCase())).size;
            const notEnough = uniqueCount < 2;
            const hasDup = uniqueCount !== raw.length;
            return (
              <>
                {notEnough && <p className="text-xs px-4 text-gray-500">Cần ít nhất 2 lựa chọn hợp lệ</p>}
                {hasDup && <p className="text-xs px-4 text-gray-500">Các lựa chọn trùng lặp sẽ được tự loại bỏ</p>}
              </>
            );
          })()}

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Đặt thời hạn</p>
                <p className="text-xs text-gray-500">
                  {endAt ? new Date(endAt).toLocaleString('vi-VN') : 'Không có thời hạn'}
                </p>
              </div>
              <button
                onClick={() => {
                  setDeadlineOpen(true);
                  setDeadlineMode(endAt ? 'time' : 'none');
                  setDeadlineInput(
                    endAt
                      ? new Date(endAt).toISOString().slice(0, 16)
                      : new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().slice(0, 16),
                  );
                }}
                className="cursor-pointer px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-semibold"
              >
                Thiết lập
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Ẩn người bình chọn</span>
              <button
                onClick={() => setHideVoters((v) => !v)}
                className={`cursor-pointer w-12 h-6 rounded-full transition ${
                  hideVoters ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={hideVoters}
              >
                <span
                  className={`block ml-0.5  w-5 h-5 bg-white rounded-full transform transition ${
                    hideVoters ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Ẩn kết quả khi chưa bình chọn</span>
              <button
                onClick={() => setHideResultsUntilVote((v) => !v)}
                className={`cursor-pointer w-12 h-6 rounded-full transition ${
                  hideResultsUntilVote ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={hideResultsUntilVote}
              >
                <span
                  className={`block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${
                    hideResultsUntilVote ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Chọn nhiều phương án</span>
              <button
                onClick={() => setAllowMultiple((v) => !v)}
                className={`cursor-pointer w-12 h-6 rounded-full transition ${
                  allowMultiple ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={allowMultiple}
              >
                <span
                  className={`block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${
                    allowMultiple ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Có thể thêm phương án</span>
              <button
                onClick={() => setAllowAddOptions((v) => !v)}
                className={`cursor-pointer w-12 h-6 rounded-full transition ${
                  allowAddOptions ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-pressed={allowAddOptions}
              >
                <span
                  className={`block ml-0.5 w-5 h-5 bg-white rounded-full transform transition ${
                    allowAddOptions ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        {deadlineOpen && (
          <>
            <div className="absolute inset-0 bg-black/10" onClick={() => setDeadlineOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-800">Đặt thời hạn</p>
                <button onClick={() => setDeadlineOpen(false)} className="cursor-pointer text-gray-500">
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <label className="cursor-pointer flex items-center gap-2 text-sm">
                  <input type="radio" checked={deadlineMode === 'none'} onChange={() => setDeadlineMode('none')} />
                  Không giới hạn thời gian
                </label>
                <label className="cursor-pointer flex items-center gap-2 text-sm">
                  <input type="radio" checked={deadlineMode === 'time'} onChange={() => setDeadlineMode('time')} />
                  Chọn thời điểm kết thúc
                </label>
                {deadlineMode === 'time' && (
                  <input
                    type="datetime-local"
                    value={deadlineInput}
                    onChange={(e) => setDeadlineInput(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      if (deadlineMode === 'none') {
                        setEndAt(null);
                        setDeadlineOpen(false);
                        return;
                      }
                      const dt = Date.parse(deadlineInput);
                      if (!Number.isNaN(dt)) {
                        setEndAt(dt);
                        setDeadlineOpen(false);
                      }
                    }}
                    className="flex-1 cursor-pointer py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm"
                  >
                    Xong
                  </button>
                  <button
                    onClick={() => setDeadlineOpen(false)}
                    className="flex-1 cursor-pointer py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-sm"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  return isDesktop && target ? createPortal(modalNode, target) : modalNode;
}
