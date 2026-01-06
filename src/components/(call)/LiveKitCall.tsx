'use client';

import React from 'react';
import '@livekit/components-styles';
import {
  LiveKitRoom,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
  TrackReference,
  TrackReferenceOrPlaceholder,
  useRoomContext,
} from '@livekit/components-react';
import { Track } from 'livekit-client';

type Props = {
  serverUrl: string;
  token: string;
  onDisconnected?: () => void;
  maxParticipants?: number;
  showStatus?: boolean;
  avatar?: string;
  name?: string;
  onHangUp?: () => void;
};

export default function LiveKitCall({
  serverUrl,
  token,
  onDisconnected,
  maxParticipants = 9,
  showStatus = true,
  avatar,
  name,
  onHangUp,
}: Props) {
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden">
      <LiveKitRoom
        serverUrl={serverUrl}
        token={token}
        connect={true}
        audio={true}
        video={true}
        onDisconnected={onDisconnected}
        options={{ adaptiveStream: true, dynacast: true }}
      >
        <RoomContent
          maxParticipants={maxParticipants}
          showStatus={showStatus}
          avatar={avatar}
          name={name}
          onHangUp={onHangUp}
        />
      </LiveKitRoom>
    </div>
  );
}

function RoomContent({
  maxParticipants,
  showStatus,
  avatar,
  name,
  onHangUp,
}: {
  maxParticipants: number;
  showStatus: boolean;
  avatar?: string;
  name?: string;
  onHangUp?: () => void;
}) {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.Microphone, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: true },
    ],
    { onlySubscribed: false },
  );
  const limited = React.useMemo(() => tracks.slice(0, Math.max(1, maxParticipants)), [tracks, maxParticipants]);
  const room = useRoomContext();
  const [micEnabled, setMicEnabled] = React.useState(true);
  const [camEnabled, setCamEnabled] = React.useState(true);
  const [startAt, setStartAt] = React.useState<number | null>(null);
  const camTracks = React.useMemo(
    () => limited.filter((t) => t.source === Track.Source.Camera),
    [limited],
  );
  const remoteCam = React.useMemo(
    () => camTracks.find((t) => !t.participant?.isLocal),
    [camTracks],
  );
  const localCam = React.useMemo(
    () => camTracks.find((t) => t.participant?.isLocal),
    [camTracks],
  );
  React.useEffect(() => {
    if (remoteCam && !startAt) {
      setStartAt(Date.now());
    }
  }, [remoteCam, startAt]);
  const timerText = React.useMemo(() => {
    if (!startAt) return '';
    const now = Date.now();
    const s = Math.floor((now - startAt) / 1000);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    const mm = String(m).padStart(2, '0');
    const sss = String(ss).padStart(2, '0');
    return `${mm}:${sss}`;
  }, [startAt, limited]);
  const toggleMic = async () => {
    const next = !micEnabled;
    try {
      await room.localParticipant.setMicrophoneEnabled(next);
    } catch {}
    setMicEnabled(next);
  };
  const toggleCam = async () => {
    const next = !camEnabled;
    try {
      await room.localParticipant.setCameraEnabled(next);
    } catch {}
    setCamEnabled(next);
  };
  const hangUp = async () => {
    try {
      await room.disconnect();
    } catch {}
    if (onHangUp) onHangUp();
  };
  return (
    <div className="flex flex-col h-full">
      <RoomAudioRenderer />
      {!remoteCam ? (
        <div className="relative w-full h-full">
          {avatar && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${avatar})`,
                backgroundSize: 'cover',
                filter: 'blur(16px)',
                opacity: 0.4,
              }}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-3">
              {avatar ? (
                <img src={avatar} alt={name || ''} className="w-24 h-24 rounded-full ring-4 ring-white/60 object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-500 ring-4 ring-white/60" />
              )}
              <div className="text-white font-medium text-base">{name || ''}</div>
              <div className="text-white/80 text-sm">Đang đổ chuông...</div>
            </div>
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-5">
              <button
                className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
                onClick={toggleCam}
                title={camEnabled ? 'Tắt video' : 'Bật video'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z"></path>
                </svg>
              </button>
              <button
                className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
                onClick={hangUp}
                title="Kết thúc"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 10.34a16 16 0 0 0-9-2.34 16 16 0 0 0-9 2.34A2 2 0 0 0 3 12.59V16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a12.67 12.67 0 0 1 6 0v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3.41a2 2 0 0 0-.99-1.25Z"></path>
                </svg>
              </button>
              <button
                className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
                onClick={toggleMic}
                title={micEnabled ? 'Tắt mic' : 'Bật mic'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm5 7a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8v2h8v-2h-3v-3.08A7 7 0 0 0 19 10Z"></path>
                </svg>
              </button>
              <button className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" title="Cài đặt">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm8.14 4a6.6 6.6 0 0 0-.06-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.1 7.1 0 0 0-1.73-1l-.38-2.65a.5.5 0 0 0-.5-.43h-4a.5.5 0 0 0-.5.43l-.38 2.65a7.1 7.1 0 0 0-1.73 1l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64L3.92 11a6.6 6.6 0 0 0 0 2l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.49-1a7.1 7.1 0 0 0 1.73 1l.38 2.65a.5.5 0 0 0 .5.43h4a.5.5 0 0 0 .5-.43l.38-2.65a7.1 7.1 0 0 0 1.73-1l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64ZM12 16a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {timerText && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2 py-1 rounded bg-green-700 text-white text-xs font-medium">{timerText}</span>
            </div>
          )}
          <div className="absolute inset-0">
            <GridLayout tracks={[remoteCam]}>
              <ParticipantTile />
            </GridLayout>
          </div>
          <div className="absolute top-3 right-3 w-40 aspect-video bg-black/80 rounded-lg overflow-hidden border border-white/20">
            {localCam ? (
              <GridLayout tracks={[localCam]}>
                <ParticipantTile />
              </GridLayout>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/60 text-xs">Không có video</div>
            )}
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-5">
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              onClick={toggleCam}
              title={camEnabled ? 'Tắt video' : 'Bật video'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7a2 2 0 0 0-2-2H5A2 2 0 0 0 3 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z"></path>
              </svg>
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              onClick={hangUp}
              title="Kết thúc"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 10.34a16 16 0 0 0-9-2.34 16 16 0 0 0-9 2.34A2 2 0 0 0 3 12.59V16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a12.67 12.67 0 0 1 6 0v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3.41a2 2 0 0 0-.99-1.25Z"></path>
              </svg>
            </button>
            <button
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              onClick={toggleMic}
              title={micEnabled ? 'Tắt mic' : 'Bật mic'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm5 7a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8v2h8v-2h-3v-3.08A7 7 0 0 0 19 10Z"></path>
              </svg>
            </button>
            <button className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer" title="Cài đặt">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4Zm8.14 4a6.6 6.6 0 0 0-.06-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.1 7.1 0 0 0-1.73-1l-.38-2.65a.5.5 0 0 0-.5-.43h-4a.5.5 0 0 0-.5.43l-.38 2.65a7.1 7.1 0 0 0-1.73 1l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64L3.92 11a6.6 6.6 0 0 0 0 2l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.49-1a7.1 7.1 0 0 0 1.73 1l.38 2.65a.5.5 0 0 0 .5.43h4a.5.5 0 0 0 .5-.43l.38-2.65a7.1 7.1 0 0 0 1.73-1l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64ZM12 16a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      {showStatus && (
        <div className="px-3 py-2 text-white/80 text-xs">
          <span>Đang nói: </span>
          <ActiveSpeakers tracks={limited} />
        </div>
      )}
    </div>
  );
}

function ActiveSpeakers({ tracks }: { tracks: (TrackReference | TrackReferenceOrPlaceholder)[] }) {
  const names = tracks
    .filter((t) => t.participant?.isSpeaking)
    .map((t) => t.participant?.name || t.participant?.identity || 'Người dùng');
  if (names.length === 0) return <span>—</span>;
  return <span>{names.join(', ')}</span>;
}
