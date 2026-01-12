import React from 'react';

interface CallBannerProps {
  isGroup: boolean;
  roomCallActiveLocal: boolean;
  globalIncoming: boolean;
  globalCallConnecting: boolean;
  globalCallActive: boolean;
  roomCallTypeLocal: string;
  onRejoinCall: () => void;
}

const CallBanner: React.FC<CallBannerProps> = ({
  isGroup,
  roomCallActiveLocal,
  globalIncoming,
  globalCallConnecting,
  globalCallActive,
  roomCallTypeLocal,
  onRejoinCall,
}) => {
  if (!isGroup || !roomCallActiveLocal || globalIncoming || globalCallConnecting || globalCallActive) {
    return null;
  }

  return (
    <div className="fixed z-[2000] left-6 top-6 w-[90vw] max-w-[560px]">
      <div className="rounded-xl p-0 shadow-2xl ring-1 ring-black/10 bg-white/5 backdrop-blur">
        <div className="flex items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none">
          <span className="text-sm">Cuộc gọi nhóm đang diễn ra</span>
          <span className="text-xs">{roomCallTypeLocal === 'video' ? 'Video' : 'Thoại'}</span>
        </div>
        <div className="rounded-b-xl pt-2 p-2 relative bg-black/20">
          <div className="rounded-lg overflow-hidden bg-black/30 text-white px-3 py-3">
            <div className="text-sm mb-2">Cuộc gọi nhóm đang diễn ra</div>
            <button
              className="cursor-pointer px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition"
              onClick={onRejoinCall}
            >
              Tham gia lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBanner;
