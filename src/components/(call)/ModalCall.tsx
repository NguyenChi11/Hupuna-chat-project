import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getProxyUrl } from '@/utils/utils';
import { HiChevronLeft, HiChevronRight, HiMicrophone, HiPhone, HiVideoCamera } from 'react-icons/hi2';
import MicOffIcon from '../svg/MicOffIcon';
import ICVideoOff from '../svg/ICVideoOff';

type RemotePeer = { userId: string; stream: MediaStream; name?: string; avatar?: string };
type Participant = { userId: string; name?: string; avatar?: string };
type Props = {
  avatar?: string;
  name: string;
  mode: 'connecting' | 'active';
  callType: 'voice' | 'video';
  callStartAt?: number | null;
  localVideoRef?: React.RefObject<HTMLVideoElement | null>;
  currentUserName?: string;
  currentUserAvatar?: string;
  remotePeers?: RemotePeer[];
  participants?: Participant[];
  micEnabled?: boolean;
  camEnabled?: boolean;
  onToggleMic?: () => void;
  onToggleCamera?: () => void;
  onEndCall: () => void;
};

export default function ModalCall({
  avatar,
  name,
  mode,
  callType,
  callStartAt,
  localVideoRef,
  currentUserName,
  currentUserAvatar,
  remotePeers = [],
  participants = [],
  micEnabled = true,
  camEnabled = true,
  onToggleMic,
  onToggleCamera,
  onEndCall,
}: Props) {
  const timer = (() => {
    if (!callStartAt) return '';
    const now = Date.now();
    const s = Math.floor((now - callStartAt) / 1000);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    const mm = String(m).padStart(2, '0');
    const sss = String(ss).padStart(2, '0');
    return `${mm}:${sss}`;
  })();
  const [hiddenCam, setHiddenCam] = useState(false);
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  useEffect(() => {
    remotePeers.forEach((peer) => {
      const a = audioRefs.current.get(peer.userId);
      if (a) {
        try {
          a.muted = false;
          (a as HTMLAudioElement & { autoplay?: boolean }).autoplay = true;
          (a as HTMLAudioElement & { srcObject?: MediaStream }).srcObject = peer.stream;
          void a.play().catch(() => {});
        } catch {}
      }
      const v = videoRefs.current.get(peer.userId);
      if (v) {
        try {
          (v as HTMLVideoElement & { srcObject?: MediaStream }).srcObject = peer.stream;
          void v.play().catch(() => {});
        } catch {}
      }
    });
  }, [remotePeers]);
  if (mode === 'connecting') {
    return (
      <div className="relative w-full min-h-[46vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black">
        {avatar && (
          <Image src={getProxyUrl(avatar)} alt={name} fill className="object-cover blur-xl opacity-40" sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-blue/40" />
        {/* Mobile top actions */}
        <div className="absolute top-6 left-4 md:hidden">
          <button
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={onEndCall}
            title="Quay lại"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-3 pt-10">
            {avatar ? (
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60">
                <Image
                  src={getProxyUrl(avatar)}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center rounded-full justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
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
            <div className="text-white/80 text-sm">Đang đổ chuông...</div>
          </div>
          {/* Desktop row */}
          <div className="mt-6 md:flex hidden items-center justify-center gap-4">
            <button
              className="px-4 py-3 rounded-full bg-white/10 text-white opacity-60 cursor-default"
              disabled
              title="Mic"
            >
              <HiMicrophone className="w-6 h-6" />
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onEndCall}
              title="Kết thúc"
            >
              <HiPhone className="w-7 h-7 text-red-500" />
            </button>
            {callType === 'video' && (
              <button className="px-4 py-3 rounded-full bg-white/10 opacity-60 cursor-default" disabled title="Video">
                <HiVideoCamera className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
          {/* Mobile bottom controls */}
          <div className="fixed bottom-8 left-0 right-0 md:hidden flex justify-center gap-6">
            {callType === 'video' && (
              <div className="flex flex-col items-center gap-2">
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                  onClick={() => onToggleCamera && onToggleCamera()}
                  title={camEnabled ? 'Tắt camera' : 'Bật camera'}
                >
                  {camEnabled ? <HiVideoCamera className="w-6 h-6" /> : <ICVideoOff className="w-6 h-6" />}
                </button>
                <span className="text-white text-xs">Camera</span>
              </div>
            )}

            <div className="flex flex-col items-center gap-2">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                onClick={() => onToggleMic && onToggleMic()}
                title={micEnabled ? 'Tắt mic' : 'Bật mic'}
              >
                {micEnabled ? <HiMicrophone className="w-6 h-6" /> : <MicOffIcon className="w-6 h-6" stroke="red" />}
              </button>
              <span className="text-white text-xs">Mic</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                onClick={onEndCall}
                title="Kết thúc"
              >
                <HiPhone className="w-6 h-6" />
              </button>
              <span className="text-white text-xs">Kết thúc</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[46vh] md:min-h-[24rem] md:max-h-[28rem] md:rounded-xl rounded-none overflow-hidden bg-black">
      {avatar && (
        <Image src={getProxyUrl(avatar)} alt={name} fill className="object-cover blur-xl opacity-40" sizes="100vw" />
      )}
      <div className=" inset-0 bg-black/30" />
      {timer && (
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2 py-1 rounded bg-green-700 text-white text-xs font-medium">{timer}</span>
        </div>
      )}
      {callType === 'voice' ? (
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-5 pt-10">
          {avatar ? (
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/60">
              <Image
                src={getProxyUrl(avatar)}
                alt={name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center rounded-full justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
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
          <div className=" b-0 left-0 right-0 flex items-center justify-center gap-4">
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onToggleMic}
              title={micEnabled ? 'Tắt mic' : 'Bật mic'}
            >
              {micEnabled ? (
                <HiMicrophone className="w-6 h-6 text-white" />
              ) : (
                <MicOffIcon className="w-6 h-6" stroke="red" />
              )}
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onEndCall}
              title="Kết thúc"
            >
              <HiPhone className="w-7 h-7 text-red-500" />
            </button>
          </div>
          <div className="sr-only">
            {remotePeers.map((peer) => (
              <audio
                key={peer.userId}
                autoPlay
                ref={(el) => {
                  if (el) {
                    const a = el as HTMLAudioElement & { srcObject?: MediaStream };
                    a.srcObject = peer.stream;
                    try {
                      a.play();
                    } catch {}
                    audioRefs.current.set(peer.userId, el);
                  }
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 p-3">
          {remotePeers.length <= 1 ? (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              {(() => {
                const peer = remotePeers[0];
                const hasRemoteVideo = !!peer && peer.stream.getVideoTracks().some((t) => t.enabled);
                if (peer && hasRemoteVideo) {
                  return (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      playsInline
                      ref={(el) => {
                        if (el) {
                          const v = el as HTMLVideoElement & { srcObject?: MediaStream };
                          v.srcObject = peer.stream;
                          try {
                            v.play();
                          } catch {}
                        }
                      }}
                    />
                  );
                }
                const remoteAvatar: string | undefined = peer?.avatar ?? avatar;
                const nameShow: string | undefined = peer?.name ?? name;
                return (
                  <div className="flex items-center justify-center w-full h-full bg-black">
                    {remoteAvatar ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60">
                        <Image
                          src={getProxyUrl(remoteAvatar)}
                          alt={nameShow || ''}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-28 h-28 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
                        <Image
                          src="/logo/avata.webp"
                          alt={name}
                          width={64}
                          height={64}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })()}
              <div className="">
                {!hiddenCam ? (
                  <button
                    className="cursor-pointer hover:bg-gray-600 z-[50] absolute top-4 right-4 text-white text-sm bg-black/50 px-1 py-1 rounded-full transition-colors"
                    onClick={() => setHiddenCam(true)}
                  >
                    <HiChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ) : (
                  <button
                    className="cursor-pointer hover:bg-gray-600 z-[50] absolute top-4 right-4 text-white text-sm bg-black/50 px-1 py-1 rounded-full transition-colors"
                    onClick={() => setHiddenCam(false)}
                  >
                    <HiChevronLeft className="w-4 h-4 text-gray-400" />
                  </button>
                )}

                <div
                  className={`absolute top-3 right-3 w-40 aspect-video bg-black/80 rounded-lg overflow-hidden border border-white/20 ${
                    hiddenCam ? 'hidden' : ''
                  }`}
                >
                  <video
                    ref={localVideoRef}
                    className={`w-full h-full object-cover ${camEnabled ? '' : 'opacity-0'}`}
                    muted
                    playsInline
                    autoPlay
                  />
                  {!camEnabled && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {currentUserAvatar ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/60">
                          <Image
                            src={getProxyUrl(currentUserAvatar)}
                            alt={currentUserName || ''}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-xl font-semibold ring-2 ring-white/60">
                          <Image
                            src="/logo/avata.webp"
                            alt={name}
                            width={64}
                            height={64}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <p className="absolute bottom-3 left-3 text-white text-sm">{name || 'U'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  ref={localVideoRef}
                  className={`w-full h-full object-cover ${camEnabled ? '' : 'opacity-0'}`}
                  muted
                  playsInline
                  autoPlay
                />
                {!camEnabled && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    {currentUserAvatar ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60">
                        <Image
                          src={getProxyUrl(currentUserAvatar)}
                          alt={currentUserName || ''}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
                        <Image
                          src="/logo/avata.webp"
                          alt={name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              {remotePeers.map((peer) => (
                <div key={peer.userId} className="relative bg-black rounded-lg overflow-hidden aspect-video">
                  {peer.stream.getVideoTracks().some((t) => t.enabled) ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      playsInline
                      ref={(el) => {
                        if (el) {
                          const v = el as HTMLVideoElement & { srcObject?: MediaStream };
                          try {
                            v.muted = true;
                          } catch {}
                          v.srcObject = peer.stream;
                          try {
                            v.play();
                          } catch {}
                          videoRefs.current.set(peer.userId, el);
                        }
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-black">
                      {peer.avatar ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/60">
                          <Image
                            src={getProxyUrl(peer.avatar)}
                            alt={peer.name || ''}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-white text-2xl font-semibold ring-4 ring-white/60">
                          <Image
                            src="/logo/avata.webp"
                            alt={name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="sr-only">
                {remotePeers.map((peer) => (
                  <audio
                    key={`aud-${peer.userId}`}
                    autoPlay
                    ref={(el) => {
                      if (el) {
                        const a = el as HTMLAudioElement & { srcObject?: MediaStream };
                        a.srcObject = peer.stream;
                        try {
                          a.play();
                        } catch {}
                        audioRefs.current.set(peer.userId, el);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-4 mt-3">
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onToggleMic}
              title={micEnabled ? 'Tắt mic' : 'Bật mic'}
            >
              {micEnabled ? (
                <HiMicrophone className="w-6 h-6 text-white" />
              ) : (
                <MicOffIcon className="w-6 h-6" stroke="red" />
              )}
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onToggleCamera}
              title={camEnabled ? 'Tắt video' : 'Bật video'}
            >
              {camEnabled ? (
                <HiVideoCamera className="w-6 h-6 text-white" />
              ) : (
                <ICVideoOff className="w-6 h-6" stroke="red" />
              )}
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:cursor-pointer"
              onClick={onEndCall}
              title="Kết thúc"
            >
              <HiPhone className="w-7 h-7 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
