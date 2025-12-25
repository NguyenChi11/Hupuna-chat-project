import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlinePencil, HiOutlineClock, HiBellAlert, HiEllipsisVertical } from 'react-icons/hi2';
import type { Message } from '@/types/Message';
import { useChatContext } from '@/context/ChatContext';
import { updateMessageApi, deleteMessageApi, createMessageApi } from '@/fetch/messages';
import { io } from 'socket.io-client';
import { resolveSocketUrl, getProxyUrl } from '@/utils/utils';
import type { GroupConversation } from '@/types/Group';
import type { User } from '@/types/User';
import { HiX } from 'react-icons/hi';
import Image from 'next/image';

interface ReminderDetailModalProps {
  isOpen: boolean;
  message: Message | null;
  onClose: () => void;
  onRefresh?: () => void;
}

export default function ReminderDetailModal({ isOpen, message, onClose, onRefresh }: ReminderDetailModalProps) {
  const { selectedChat, currentUser, isGroup, allUsers } = useChatContext();
  const roomId = (() => {
    const me = String(currentUser._id);
    const other = String((selectedChat as unknown as { _id: string })._id);
    return isGroup ? other : [me, other].sort().join('_');
  })();
  const [content, setContent] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [repeat, setRepeat] = useState<'none' | 'daily' | 'weekly' | 'monthly'>('none');
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRepeatSheet, setShowRepeatSheet] = useState(false);
  const [showDateSheet, setShowDateSheet] = useState(false);
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

  useEffect(() => {
    if (!message) return;
    setContent(String(message.content || ''));
    const at = (message as Message & { reminderAt?: number }).reminderAt || message.timestamp;
    const isoLocal = new Date(at - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    setDateTime(isoLocal);
    setRepeat(
      (message as Message & { reminderRepeat?: 'none' | 'daily' | 'weekly' | 'monthly' }).reminderRepeat || 'none',
    );
    setEditing(false);
    setMenuOpen(false);
  }, [message]);

  const dtLabel = useMemo(() => {
    const ms = Date.parse(dateTime);
    if (Number.isNaN(ms)) return '';
    const dateObj = new Date(ms);
    return dateObj.toLocaleString('vi-VN', { hour12: false });
  }, [dateTime]);
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
  const creatorInfo = useMemo(() => {
    if (!message) return { name: '', avatar: null as string | null };
    const raw = message.sender as User | string;
    const sid =
      typeof raw === 'object' && raw
        ? String(
            (raw as unknown as { _id?: string; id?: string })._id ||
              (raw as unknown as { _id?: string; id?: string }).id ||
              '',
          )
        : String(raw || '');
    const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
    const member = members.find(
      (m) =>
        String(
          (m as unknown as { _id?: string; id?: string })._id ||
            (m as unknown as { _id?: string; id?: string }).id ||
            '',
        ) === sid,
    );
    const userAll = (allUsers || []).find(
      (u) =>
        String(
          (u as unknown as { _id?: string; id?: string })._id ||
            (u as unknown as { _id?: string; id?: string }).id ||
            '',
        ) === sid,
    );
    const senderObj = typeof raw === 'object' && raw ? (raw as User) : undefined;
    const finalAvatar =
      (member as unknown as { avatar?: string })?.avatar || userAll?.avatar || senderObj?.avatar || null;
    const finalNameRaw = senderObj?.name || (member as unknown as { name?: string })?.name || userAll?.name || '';
    const finalName = sid && String(currentUser._id) === sid ? 'Bạn' : finalNameRaw || 'Người dùng';
    return { name: finalName, avatar: finalAvatar };
  }, [message, isGroup, selectedChat, allUsers, currentUser._id]);

  if (!isOpen || !message) return null;

  const handleSave = async () => {
    const dt = Date.parse(dateTime);
    if (!content.trim() || Number.isNaN(dt)) return;
    setSaving(true);
    try {
      await updateMessageApi(String(message._id), {
        content: content.trim(),
        reminderAt: dt,
        reminderFired: false,
        reminderRepeat: repeat,
      });

      const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      const receiver = isGroup ? null : String((selectedChat as User)._id);
      const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
      socket.emit('edit_message', {
        _id: message._id,
        roomId,
        sender: String(currentUser._id),
        senderName: currentUser.name,
        isGroup,
        receiver,
        members,
        content: content.trim(),
        newContent: content.trim(),
        editedAt: Date.now(),
        originalContent: message.content,
        reminderAt: dt,
        reminderFired: false,
        reminderRepeat: repeat,
      });
      const name = currentUser.name;
      const timeStr = new Date(dt).toLocaleString('vi-VN');
      const notifyRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'notify',
        content: `${name} đã chỉnh sửa lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
        timestamp: Date.now(),
        replyToMessageId: String(message._id),
      });
      if (notifyRes?.success && typeof notifyRes._id === 'string') {
        socket.emit('send_message', {
          _id: notifyRes._id,
          roomId,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
          type: 'notify',
          content: `${name} đã chỉnh sửa lịch hẹn: "${content.trim()}" lúc ${timeStr}`,
          timestamp: Date.now(),
          replyToMessageId: String(message._id),
        });
      }
      socket.disconnect();
      if (onRefresh) {
        onRefresh();
      }
      onClose();
    } catch (error) {
      console.error('❌ Lỗi khi lưu lịch hẹn:', error);
      alert('Không thể lưu lịch hẹn. Vui lòng thử lại.');
    } finally {
      setSaving(false);
    }
  };

  const handleRecall = async () => {
    const ok = confirm('Bạn có chắc muốn xóa vĩnh viễn lịch hẹn này?');
    if (!ok) return;

    setSaving(true);
    try {
      await deleteMessageApi(String(message._id));
      const socket = io(resolveSocketUrl(), {
        transports: ['websocket'],
        withCredentials: false,
      });
      const receiver = isGroup ? null : String((selectedChat as User)._id);
      const members = isGroup ? (selectedChat as GroupConversation).members || [] : [];
      socket.emit('message_deleted', {
        _id: message._id,
        roomId,
        sender: String(currentUser._id),
        senderName: currentUser.name,
        isGroup,
        receiver,
        members,
        type: 'delete',
        timestamp: Date.now(),
      });
      const name = currentUser.name;
      const notifyRes = await createMessageApi({
        roomId,
        sender: String(currentUser._id),
        type: 'notify',
        content: `${name} đã xóa lịch hẹn: "${String(message.content || '')}"`,
        timestamp: Date.now(),
        replyToMessageId: String(message._id),
      });
      if (notifyRes?.success && typeof notifyRes._id === 'string') {
        socket.emit('send_message', {
          _id: notifyRes._id,
          roomId,
          sender: String(currentUser._id),
          senderName: currentUser.name,
          isGroup,
          receiver,
          members,
          type: 'notify',
          content: `${name} đã xóa lịch hẹn: "${String(message.content || '')}"`,
          timestamp: Date.now(),
          replyToMessageId: String(message._id),
        });
      }
      socket.disconnect();
      onClose();
    } catch (error) {
      console.error('❌ Lỗi khi xóa lịch hẹn:', error);
      alert('Không thể xóa lịch hẹn. Vui lòng thử lại.');
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
        <div className="p-3 bg-gray-100 text-black w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <button onClick={onClose} disabled={saving} className="p-2 cursor-pointer">
                <HiX className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <h3 className="text-lg md:text-2xl ">{editing ? 'Sửa nhắc hẹn' : 'Chi tiết nhắc hẹn'}</h3>
            </div>
            {!editing ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setEditing(true)}
                  className="p-2 rounded-xl hover:bg-gray-200 cursor-pointer"
                  title="Sửa"
                >
                  <HiOutlinePencil className="w-5 h-5" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="p-2 rounded-xl hover:bg-gray-200 cursor-pointer"
                    title="Thêm"
                  >
                    <HiEllipsisVertical className="w-5 h-5" />
                  </button>
                  {menuOpen && (
                    <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-10">
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setEditing(true);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          handleRecall();
                        }}
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                      >
                        Xóa
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={handleSave}
                disabled={saving}
                className={`px-4 py-1.5 font-bold cursor-pointer ${saving ? 'text-gray-400' : 'text-blue-600'}`}
              >
                Xong
              </button>
            )}
          </div>
        </div>

        {!editing ? (
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center gap-3 px-4 py-4">
              <div className="w-12 h-12 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl">
                {creatorInfo.avatar ? (
                  <Image
                    width={32}
                    height={32}
                    src={getProxyUrl(creatorInfo.avatar)}
                    alt={creatorInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl flex items-center justify-center">
                    {(creatorInfo.name || 'N').charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="text-gray-800 text-xl">{creatorInfo.name}</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="flex items-start gap-3 px-4 py-4">
                <HiBellAlert className="w-6 h-6 text-rose-600 shrink-0" />

                <p className="flex-1 min-w-0 text-2xl text-gray-800 whitespace-pre-wrap break-words">{content}</p>
              </div>
              <div className="flex items-center gap-3 px-4 py-4">
                <HiOutlineClock className="w-6 h-6 text-gray-700" />
                <div className="flex-1">
                  <div className="text-gray-800 text-2xl">{dtLabel}</div>
                  <div className="text-gray-500 text-xl">Lặp: {repeatLabel}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-gray-200">
              <div className="flex items-center gap-3 px-4 py-4">
                <div className="w-12 h-12 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl">
                  {creatorInfo.avatar ? (
                    <Image
                      width={32}
                      height={32}
                      src={getProxyUrl(creatorInfo.avatar)}
                      alt={creatorInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center">
                      {(creatorInfo.name || 'N').charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-gray-800 text-xl">{creatorInfo.name}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-4">
                <HiBellAlert className="w-6 h-6 text-rose-600" />
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[15px]"
                  placeholder="Nhập tiêu đề nhắc hẹn..."
                  type="text"
                />
              </div>
              <button
                className="w-full text-left flex items-center gap-3 px-4 py-4 cursor-pointer"
                onClick={() => setShowDateSheet(true)}
              >
                <HiOutlineClock className="w-6 h-6 text-gray-700" />
                <div className="flex-1">
                  <div className="text-gray-800 text-xl">{dtLabel}</div>
                </div>
              </button>
              <button
                className="w-full text-left flex items-center gap-3 px-4 py-4 cursor-pointer"
                onClick={() => setShowRepeatSheet(true)}
              >
                <HiOutlineClock className="w-6 h-6 text-gray-700" />
                <div className="flex-1">
                  <div className="text-gray-800 text-[15px]">Chọn kiểu lặp lại</div>
                  <div className="text-gray-500 text-xs">{repeatLabel}</div>
                </div>
              </button>
            </div>
          </div>
        )}

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
          <div className="fixed inset-0 z-[10000] flex items-end bg:black/40" onClick={() => setShowDateSheet(false)}>
            <div
              className="w-full bg-white rounded-t-2xl p-4 space-y-3"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="px-1">
                <input
                  type="datetime-local"
                  value={dateTime}
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
  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  return isDesktop && target ? createPortal(modalNode, target) : modalNode;
}
