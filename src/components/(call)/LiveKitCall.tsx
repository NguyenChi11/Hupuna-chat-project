import React from 'react';
import {
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  TrackToggle,
  DisconnectButton,
  VideoTrack,
  ParticipantName,
  useIsMuted,
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import { CiPhone } from 'react-icons/ci';
import Image from 'next/image';
import type { TrackReference, TrackReferenceOrPlaceholder } from '@livekit/components-core';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

type Props = {
  serverUrl: string;
  token: string;
  onDisconnected?: () => void;
  className?: string;
  titleName?: string;
  durationSec?: number;
  avatarUrl?: string;
  myName?: string;
  myAvatarUrl?: string;
  localPreviewSize?: { w: number; h: number };
  offMinHeight?: number;
  onParticipantsChanged?: (participants: Array<{ id: string; name?: string }>) => void;
};

function CustomTrackTile({
  trackRef,
  title,
  avatarUrl,
  offMinHeight,
}: {
  trackRef: TrackReferenceOrPlaceholder;
  title?: string | null;
  avatarUrl?: string;
  offMinHeight?: number;
}) {
  const isMuted = useIsMuted(trackRef);
  const [portrait, setPortrait] = React.useState<boolean>(false);
  const handleMeta = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    const w = v.videoWidth || 0;
    const h = v.videoHeight || 0;
    setPortrait(w > 0 && h > 0 ? h > w : false);
  };
  const displayName =
    title ??
    ((trackRef as unknown as { participant?: { name?: string; identity?: string } })?.participant?.name ||
      (trackRef as unknown as { participant?: { identity?: string } })?.participant?.identity ||
      '');
  return (
    <div className="relative w-full h-full bg-black">
      {!isMuted && (trackRef as TrackReference)?.publication ? (
        <VideoTrack
          trackRef={trackRef as TrackReference}
          className={portrait ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
          onLoadedMetadata={handleMeta}
          muted
          playsInline
          autoPlay
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center bg-black"
          style={{ minHeight: offMinHeight ?? 240 }}
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={title || 'avatar'}
              width={240}
              height={240}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-white/10" />
          )}
        </div>
      )}
      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {displayName}
      </div>
    </div>
  );
}

function CallTiles({
  titleName,
  avatarUrl,
  offMinHeight,
  myName,
  myAvatarUrl,
}: {
  titleName?: string | null;
  avatarUrl?: string;
  offMinHeight?: number;
  myName?: string;
  myAvatarUrl?: string;
}) {
  const cameraTracks = useTracks([Track.Source.Camera]);
  const remoteTracks = cameraTracks.filter((t) => !t.participant?.isLocal);
  const localTrack = cameraTracks.find((t) => t.participant?.isLocal);
  const cols = remoteTracks.length <= 1 ? 1 : remoteTracks.length === 2 ? 2 : remoteTracks.length <= 4 ? 2 : remoteTracks.length <= 9 ? 3 : 4;
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-black" style={{ minHeight: offMinHeight ?? 240 }}>
      {remoteTracks.length > 0 ? (
        <div className="grid w-full h-full" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {remoteTracks.map((tr, i) => (
            <div key={`${String((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '')}-${i}`} className="relative">
              <CustomTrackTile trackRef={tr} offMinHeight={offMinHeight} />
            </div>
          ))}
        </div>
      ) : localTrack ? (
        <div className="w-full h-full">
          <CustomTrackTile trackRef={localTrack} title={myName} avatarUrl={myAvatarUrl} offMinHeight={offMinHeight} />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white/80 text-sm">Đang chờ đối phương bật camera...</div>
        </div>
      )}
    </div>
  );
}

function formatTime(sec?: number) {
  const s = Math.max(0, Math.floor(sec || 0));
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, '0');
  const r = (s % 60).toString().padStart(2, '0');
  return `${m}:${r}`;
}

export default function LiveKitCall({
  serverUrl,
  token,
  onDisconnected,
  className,
  titleName,
  durationSec,
  avatarUrl,
  myName,
  myAvatarUrl,
  localPreviewSize,
  offMinHeight,
  onParticipantsChanged,
}: Props) {
  const [showLocalPreview, setShowLocalPreview] = React.useState(true);
  const [showControls, setShowControls] = React.useState(false);
  const initialPreview = React.useMemo(() => {
    return { w: localPreviewSize?.w ?? 80, h: localPreviewSize?.h ?? 50 };
  }, [localPreviewSize]);

  const toggleControls = () => {
    setShowControls((prev) => !prev);
  };

  function ParticipantsCounter() {
    const tracks = useTracks([Track.Source.Camera]);
    const count = tracks.filter((t) => !t.participant?.isLocal).length;
    return (
      <div className="absolute top-3 right-3 text-xs font-semibold bg-white/20 text-white px-2 py-1 rounded">
        {count} người
      </div>
    );
  }
  function ParticipantsWatcher({ onChanged }: { onChanged?: (parts: Array<{ id: string; name?: string }>) => void }) {
    const tracks = useTracks([Track.Source.Camera]);
    const parts = React.useMemo(() => {
      return tracks
        .filter((t) => !t.participant?.isLocal)
        .map((t) => ({
          id: String(((t as unknown as { participant?: { identity?: string } })?.participant?.identity || '').trim()),
          name: String(
            (
              (t as unknown as { participant?: { name?: string; identity?: string } })?.participant?.name ||
              (t as unknown as { participant?: { identity?: string } })?.participant?.identity ||
              ''
            ).trim(),
          ),
        }))
        .filter((p) => !!p.id);
    }, [tracks]);
    const prevRef = React.useRef<Array<{ id: string; name?: string }>>([]);
    React.useEffect(() => {
      const prev = prevRef.current;
      const changed = prev.length !== parts.length || prev.some((p, i) => p.id !== parts[i]?.id);
      if (changed) {
        prevRef.current = parts;
        if (onChanged) onChanged(parts);
      }
    }, [parts, onChanged]);
    return null;
  }

  return (
    <div className={className ? className : ''}>
      <LiveKitRoom serverUrl={serverUrl} token={token} connect video={true} audio={true} onDisconnected={onDisconnected}>
        <RoomAudioRenderer />
        <div className="relative w-full h-full" onClick={toggleControls}>
          <CallTiles titleName={titleName} avatarUrl={avatarUrl} offMinHeight={offMinHeight} myName={myName} myAvatarUrl={myAvatarUrl} />
          
          <div className="absolute top-3 left-3 text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded">
            {formatTime(durationSec)}
          </div>
          <ParticipantsCounter />
          <ParticipantsWatcher onChanged={onParticipantsChanged} />
          
          {/* Local preview (toggleable) */}
          {showLocalPreview && (
            <LocalPreview myName={myName} myAvatarUrl={myAvatarUrl} size={initialPreview} />
          )}

          <div className="absolute left-0 right-0 bottom-4 flex justify-center group">
            <div className={`flex items-center gap-3 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
              <TrackToggle
                source={Track.Source.ScreenShare}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              />
              <TrackToggle
                source={Track.Source.Camera}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              />
              <DisconnectButton
                stopTracks
                className="cursor-pointer p-2 rounded-full bg-red-600 hover:bg-red-700 transition text-white"
              >
                <CiPhone className="w-5 h-5" />
              </DisconnectButton>
              <TrackToggle
                source={Track.Source.Microphone}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              />
              <button
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                onClick={() => setShowLocalPreview((v) => !v)}
                title={showLocalPreview ? 'Ẩn cam của tôi' : 'Hiện cam của tôi'}
              >
                {showLocalPreview ? <HiEyeSlash className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </LiveKitRoom>
    </div>
  );
}

function LocalPreview({
  myName,
  myAvatarUrl,
  size,
}: {
  myName?: string;
  myAvatarUrl?: string;
  size: { w: number; h: number };
}) {
  const cameraTracks = useTracks([Track.Source.Camera]);
  const localTrack = cameraTracks.find((t) => t.participant?.isLocal);
  return (
    <div
      className="absolute top-2 right-2 rounded-lg overflow-hidden ring-2 ring-white/60 shadow-lg bg-black"
      style={{ width: size.w, height: size.h }}
    >
      {localTrack ? (
        <CustomTrackTile trackRef={localTrack} title={myName} avatarUrl={myAvatarUrl} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white/70 text-xs px-2 py-1">Không có camera</div>
        </div>
      )}
    </div>
  );
}
