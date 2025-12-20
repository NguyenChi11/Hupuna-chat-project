'use client';

import React from 'react';
import Image from 'next/image';

import type { Message } from '@/types/Message';
import type { User } from '@/types/User';
import { getProxyUrl, isVideoFile } from '@/utils/utils';

interface ReplyBannerProps {
  replyingTo: Message | null;
  getSenderName: (sender: User | string) => string;
  onCancel: () => void;
}

export default function ReplyBanner({ replyingTo, getSenderName, onCancel }: ReplyBannerProps) {
  if (!replyingTo) return null;

  const url = String(replyingTo.fileUrl || replyingTo.previewUrl || '');
  const isVid =
    replyingTo.type === 'video' || isVideoFile(replyingTo.fileName) || isVideoFile(url);
  const isImg =
    replyingTo.type === 'image' ||
    /\.(jpg|jpeg|png|gif|webp|bmp|svg|avif)$/i.test(String(replyingTo.fileName || url || ''));

  const contentLabel = replyingTo.isRecalled
    ? 'đã thu hồi tin nhắn'
    : replyingTo.type === 'file'
      ? replyingTo.fileName || '[File]'
      : replyingTo.type === 'image'
        ? '[Ảnh]'
        : replyingTo.type === 'video'
          ? '[Video]'
          : replyingTo.type === 'sticker'
            ? '[Sticker]'
            : replyingTo.type === 'reminder'
              ? replyingTo.content || '[Nhắc nhở]'
              : replyingTo.content || 'Tin nhắn';

  return (
    <div className=" bottom-full left-0 right-0 p-3 bg-blue-50 border-t border-blue-200 flex justify-between items-center text-sm text-gray-700">
      <div className="border-l-2 border-blue-600 pl-2">
        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          Trả lời {getSenderName(replyingTo.sender)}
        </div>
        <div className="flex items-center gap-2 mt-1">
          {!replyingTo.isRecalled && (isImg || isVid) && (
            isImg ? (
              <Image
                src={getProxyUrl(url)}
                alt="Ảnh"
                width={40}
                height={40}
                className="w-10 h-10 rounded-md object-cover border border-blue-200"
              />
            ) : (
              <div className="relative w-10 h-10 bg-black rounded-md overflow-hidden border border-blue-200">
                <video
                  src={getProxyUrl(url)}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-800">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          )}
          <p className="text-xs text-gray-700 w-full">{contentLabel}</p>
        </div>
      </div>
      <button onClick={onCancel} className="cursor-pointer text-red-500 hover:text-red-700 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
