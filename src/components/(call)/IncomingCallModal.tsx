import React from 'react';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
import { HiPhone, HiVideoCamera } from 'react-icons/hi2';
import { PiPhoneDisconnectFill } from 'react-icons/pi';

type Props = {
  avatar?: string;
  name: string;
  onAccept: () => void | Promise<void>;
  onReject: () => void | Promise<void>;
  acceptText?: string;
  rejectText?: string;
  titleText?: string;
  callType?: 'voice' | 'video';
};

export default function IncomingCallModal({
  avatar,
  name,
  onAccept,
  onReject,
  titleText = 'Cuộc gọi đến',
  callType = 'voice',
}: Props) {
  return (
    <div className="relative w-full min-h-[46vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black md:pt-10 pt-16">
      {avatar && (
        <Image
          src={getProxyUrl(avatar)}
          alt={name || ''}
          fill
          className="object-cover blur-xl opacity-40"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-3">
          {avatar ? (
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60">
              <Image
                src={getProxyUrl(avatar)}
                alt={name || ''}
                width={96}
                height={96}
                className="w-full h-full  object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
              <Image
                src="/logo/avata.webp"
                alt={name}
                width={64}
                height={64}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          )}
          <div className="text-white font-medium text-base">{name}</div>
          <div className="text-white/80 text-sm">
            {titleText || (callType === 'video' ? 'Cuộc gọi video đến' : 'Cuộc gọi thoại đến')}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
            onClick={() => void onAccept()}
            title={titleText || 'Chấp nhận'}
          >
            {callType === 'video' ? (
              <HiVideoCamera className="w-7 h-7 text-green-500" />
            ) : (
              <HiPhone className="w-7 h-7 text-green-500" />
            )}
          </button>
          <button
            className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
            onClick={() => void onReject()}
            title="Từ chối"
          >
            {callType === 'video' ? (
              <PiPhoneDisconnectFill className="w-7 h-7 text-red-500" />
            ) : (
              <PiPhoneDisconnectFill className="w-7 h-7 text-red-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
