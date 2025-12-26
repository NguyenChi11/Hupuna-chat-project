import React, { useState } from 'react';
import Image from 'next/image';
import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import { getProxyUrl } from '@/utils/utils';
import ICTickDouble from '@/components/svg/ICTickDouble';

interface SenderInfo {
  _id: string;
  name: string;
  avatar: string | null;
}

interface ReadStatusProps {
  message: Message;
  isGroup: boolean;
  isRecalled?: boolean;
  isMine: boolean;
  isLast: boolean;
  myId: string;
  allUsersMap: Map<string, string>;
  getSenderInfo: (sender: User | string) => SenderInfo;
  isMobile?: boolean;
}

export default function ReadStatus({
  message,
  isGroup,
  isRecalled,
  isMine,
  isLast,
  myId,
  allUsersMap,
  getSenderInfo,
  isMobile,
}: ReadStatusProps) {
  const [open, setOpen] = useState(false);
  //   const shouldOpen = !!isMobile || (typeof window !== 'undefined' && window.innerWidth <= 1024);

  if (!isMine || !isLast || isRecalled) return null;

  const readBy = (message.readBy || []) as string[];

  if (!isGroup) {
    const seen = readBy.some((id) => String(id) !== String(myId));
    return (
      <span className="flex items-center bg-gray-400 text-[12px] md:text-[14px] mt-2 text-white px-2 py-0.5 rounded-full">
        <ICTickDouble className=" w-4 h-4" />
        {seen ? 'Đã xem' : 'Đã gửi'}
      </span>
    );
  }

  const readers = readBy.filter((id) => String(id) !== String(myId));

  const names = readers.map((id) => allUsersMap.get(String(id)) || 'Người dùng');

  return (
    <>
      <div
        className="flex mt-2 cursor-pointer"
        title={readers.length > 0 ? names.join(', ') : undefined}
        onClick={() => {
           setOpen(true);
        }}
      >
        <div className="flex items-center justify-center gap-1">
          {readers.length === 0 ? (
            <span className="flex items-center gap-1 bg-gray-400 text-[12px] md:text-[14px] text-white px-2 py-0.5 rounded-full">
              <ICTickDouble className="w-4 h-4 flex-shrink-0" />
              Đã gửi
            </span>
          ) : (
            <>
              {readers.slice(0, 6).map((id, idx) => {
                const info = getSenderInfo(id);
                const key = `${message._id}-reader-${idx}`;
                return (
                  <div
                    key={key}
                    className="w-4 h-4 rounded-full bg-gray-300 overflow-hidden ring-1 ring-white flex-shrink-0"
                  >
                    <Image
                      src={info.avatar ? getProxyUrl(info.avatar) : '/logo/avata.webp'}
                      alt={info.name}
                      width={16}
                      height={16}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
              {readers.length > 6 && (
                <div className="w-4 h-4 rounded-full bg-gray-200 text-gray-700 text-[0.625rem] flex items-center justify-center ring-1 ring-white flex-shrink-0">
                  +{readers.length - 6}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {open && readers.length > 0 && (
        <>
          {/* Backdrop - đóng khi click */}
          <div className="fixed inset-0 z-[9998]" onClick={() => setOpen(false)} />

          {/* Popup modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            <div
              className="min-w-[11.25rem] max-w-[18rem] px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-700">Đã xem</span>
                <span className="text-xs text-gray-500">{readers.length} người</span>
              </div>
              <ul className="space-y-1.5 max-h-48 overflow-y-auto">
                {readers.map((id, idx) => {
                  const info = getSenderInfo(id);
                  const displayName = info.name || allUsersMap.get(String(id)) || 'Người dùng';
                  return (
                    <li key={`${message._id}-reader-name-${idx}`} className="flex items-center gap-2 py-1">
                      <div className="w-4 h-4 rounded-full bg-gray-300 overflow-hidden ring-1 ring-white flex-shrink-0">
                        <Image
                          src={info.avatar ? getProxyUrl(info.avatar) : '/logo/avata.webp'}
                          alt={displayName}
                          width={16}
                          height={16}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-700">{displayName}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
