import React, { useEffect, useMemo, useState } from 'react';
import { LiveKitRoom, VideoConference, RoomAudioRenderer } from '@livekit/components-react';

type Props = {
  roomName: string;
  identity: string;
  kind: 'voice' | 'video';
  onClose: () => void;
};

export default function LiveKitCall({ roomName, identity, kind, onClose }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const serverUrl = useMemo(() => process.env.NEXT_PUBLIC_LIVEKIT_URL || '', []);

  useEffect(() => {
    let canceled = false;
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/livekit/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roomName, identity }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(String(data?.error || 'Failed to fetch token'));
        }
        if (!canceled) setToken(String(data?.token || ''));
      } catch (e) {
        if (!canceled) setError('Không thể khởi tạo cuộc gọi');
      } finally {
        if (!canceled) setLoading(false);
      }
    };
    run();
    return () => {
      canceled = true;
    };
  }, [roomName, identity]);

  if (!serverUrl) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center p-6">
        <div className="text-sm text-gray-700">Thiếu cấu hình LiveKit server</div>
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer" onClick={onClose}>
          Đóng
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="h-6 w-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-3" />
        <div className="text-sm text-gray-700">Đang kết nối...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center p-6">
        <div className="text-sm text-red-600">{error}</div>
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer" onClick={onClose}>
          Đóng
        </button>
      </div>
    );
  }
  if (!token) return null;

  return (
    <div className="w-full h-full">
      <LiveKitRoom
        serverUrl={serverUrl}
        token={token}
        connect
        video={kind === 'video'}
        audio
        onDisconnected={onClose}
        className="w-[90vw] h-[80vh]"
      >
        {kind === 'video' ? (
          <VideoConference />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-white">
            <RoomAudioRenderer />
            <div className="text-sm text-gray-700 mb-4">Đang gọi thoại</div>
            <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 hover:cursor-pointer" onClick={onClose}>
              Kết thúc
            </button>
          </div>
        )}
      </LiveKitRoom>
    </div>
  );
}

