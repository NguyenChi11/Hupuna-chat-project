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
import { HiEye, HiEyeSlash, HiChevronLeft, HiChevronRight, HiCamera, HiFaceSmile, HiHeart } from 'react-icons/hi2';

type Props = {
  serverUrl: string;
  token: string;
  onDisconnected?: () => void;
  onRequestEnd?: () => void;
  className?: string;
  titleName?: string;
  callStartAt?: number | null;
  avatarUrl?: string;
  myName?: string;
  myAvatarUrl?: string;
  localPreviewSize?: { w: number; h: number };
  offMinHeight?: number;
  onParticipantsChanged?: (participants: Array<{ id: string; name?: string }>) => void;
  callMode?: 'voice' | 'video';
};

function CustomTrackTile({
  trackRef,
  title,
  avatarUrl,
  offMinHeight,
  cover,
  contain,
  callMode,
}: {
  trackRef: TrackReferenceOrPlaceholder;
  title?: string | null;
  avatarUrl?: string;
  offMinHeight?: number;
  cover?: boolean;
  contain?: boolean;
  callMode?: 'voice' | 'video';
}) {
  const isMuted = useIsMuted(trackRef);
  const ref = trackRef as TrackReference;
  const pub = ref?.publication as unknown as
    | {
        isEnabled?: boolean;
        isSubscribed?: boolean;
      }
    | undefined;
  const showVideo = !!(pub && pub.isEnabled !== false && pub.isSubscribed !== false && !isMuted);
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
    <div className={`relative w-full  h-full bg-black`}>
      {showVideo ? (
        <VideoTrack
          trackRef={trackRef as TrackReference}
          className={
            contain
              ? 'w-full h-full object-contain'
              : cover || !portrait
                ? 'w-full  object-cover'
                : 'w-full  object-contain'
          }
          onLoadedMetadata={handleMeta}
          muted
          playsInline
          autoPlay
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={title || 'avatar'}
              width={240}
              height={240}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-white/10" />
          )}
        </div>
      )}
      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{displayName}</div>
    </div>
  );
}

function CallTiles({
  titleName,
  avatarUrl,
  offMinHeight,
  myName,
  myAvatarUrl,
  callMode,
}: {
  titleName?: string | null;
  avatarUrl?: string;
  offMinHeight?: number;
  myName?: string;
  myAvatarUrl?: string;
  callMode?: 'voice' | 'video';
}) {
  const cameraTracks = useTracks([Track.Source.Camera]);
  const remoteTracks = cameraTracks.filter((t) => !t.participant?.isLocal);
  const localTrack = cameraTracks.find((t) => t.participant?.isLocal);
  const isGridMode = cameraTracks.length >= 3;
  const gridTracks = isGridMode ? cameraTracks : remoteTracks;
  const [avatarsMap, setAvatarsMap] = React.useState<Record<string, string>>({});
  const [showRoster, setShowRoster] = React.useState(false);
  const [spotlightId, setSpotlightId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ids = gridTracks
      .map((tr) =>
        String(((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '').trim()),
      )
      .filter((id) => !!id && !avatarsMap[id]);
    if (ids.length === 0) return;
    const run = async () => {
      try {
        const results = await Promise.all(
          ids.map(async (id) => {
            const res = await fetch('/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ action: 'getById', _id: String(id) }),
            });
            const data = await res.json();
            const row = (data && (data.row || (Array.isArray(data?.data) ? data.data[0] : null))) || null;
            const avatar = typeof row?.avatar === 'string' ? row.avatar : '';
            return { id, avatar };
          }),
        );
        const next: Record<string, string> = { ...avatarsMap };
        results.forEach(({ id, avatar }) => {
          if (avatar) next[id] = avatar;
        });
        setAvatarsMap(next);
      } catch {}
    };
    void run();
  }, [gridTracks, avatarsMap]);

  const sortedTracks = React.useMemo(() => {
    if (!spotlightId) return gridTracks;
    const s = gridTracks.slice();
    const idx = s.findIndex(
      (tr) =>
        String(((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '').trim()) ===
        spotlightId,
    );
    if (idx > 0) {
      const [sp] = s.splice(idx, 1);
      s.unshift(sp);
    }
    return s;
  }, [gridTracks, spotlightId]);
  const displayTracks = sortedTracks.slice(0, 8);
  const moreCount = Math.max(0, sortedTracks.length - displayTracks.length);
  const cols = displayTracks.length <= 1 ? 1 : displayTracks.length <= 4 ? 2 : displayTracks.length <= 9 ? 3 : 4;
  const rows = Math.ceil(displayTracks.length / cols);

  return (
    <div
      className={`relative w-full h-full overflow-hidden max-md:h-[100vh]  ${callMode === 'voice' ? 'bg-blue-500' : 'bg-black'}`}
      style={{ minHeight: offMinHeight ?? 240 }}
    >
      <div className="md:block hidden rounded-lg w-full h-full">
        {callMode === 'voice' ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 mt-20">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={titleName || 'avatar'}
                  width={160}
                  height={160}
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white/10" />
              )}
              <div className="text-white/90 text-lg">{titleName || ''}</div>
            </div>
          </div>
        ) : displayTracks.length > 0 ? (
          <div
            className="grid w-full h-full"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {displayTracks.map((tr, i) => (
              <div
                key={`${String((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '')}-${i}`}
                className="relative"
              >
                <CustomTrackTile
                  trackRef={tr}
                  offMinHeight={offMinHeight}
                  avatarUrl={
                    ((tr as unknown as { participant?: { isLocal?: boolean } })?.participant?.isLocal
                      ? myAvatarUrl
                      : avatarsMap[
                          String(
                            (
                              (tr as unknown as { participant?: { identity?: string } })?.participant?.identity || ''
                            ).trim(),
                          )
                        ]) || (isGridMode ? undefined : avatarUrl)
                  }
                />
              </div>
            ))}
            {moreCount > 0 && (
              <button
                onClick={() => setShowRoster(true)}
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-md"
                title="Xem thêm"
              >
                +{moreCount}
              </button>
            )}
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
      <div className="md:hidden  w-full h-full flex items-center justify-center">
        {callMode === 'voice' ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 mt-40 max-md:mt-0">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={titleName || 'avatar'}
                  width={128}
                  height={128}
                  className="w-28 h-28 rounded-full object-cover"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-white/10" />
              )}
              <div className="text-white/90 text-xl font-bold">{titleName || ''}</div>
            </div>
          </div>
        ) : displayTracks.length > 0 ? (
          <div
            className="grid w-full h-full"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {displayTracks.map((tr, i) => (
              <div
                key={`${String((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '')}-${i}`}
                className="relative"
              >
                <CustomTrackTile
                  trackRef={tr}
                  offMinHeight={offMinHeight}
                  contain
                  avatarUrl={
                    ((tr as unknown as { participant?: { isLocal?: boolean } })?.participant?.isLocal
                      ? myAvatarUrl
                      : avatarsMap[
                          String(
                            (
                              (tr as unknown as { participant?: { identity?: string } })?.participant?.identity || ''
                            ).trim(),
                          )
                        ]) || (isGridMode ? undefined : avatarUrl)
                  }
                />
              </div>
            ))}
            {moreCount > 0 && (
              <button
                onClick={() => setShowRoster(true)}
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-lg font-semibold rounded-md"
                title="Xem thêm"
              >
                +{moreCount}
              </button>
            )}
          </div>
        ) : localTrack ? (
          <div className="w-full h-[85vh] mt-4">
            <CustomTrackTile
              trackRef={localTrack}
              title={myName}
              avatarUrl={myAvatarUrl}
              offMinHeight={offMinHeight}
              contain
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/80 text-sm">Đang chờ đối phương bật camera...</div>
          </div>
        )}
      </div>
      {showRoster && callMode === 'video' && (
        <div className="absolute inset-0 bg-black/80 z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-white text-sm">Người tham gia khác</div>
            <button
              className="px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20"
              onClick={() => setShowRoster(false)}
              title="Đóng"
            >
              Đóng
            </button>
          </div>
          <div className="flex-1 overflow-auto p-3">
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {sortedTracks.slice(8).map((tr, i) => {
                const id = String(
                  ((tr as unknown as { participant?: { identity?: string } })?.participant?.identity || '').trim(),
                );
                return (
                  <button
                    key={`${id}-${i}`}
                    className="relative rounded-md overflow-hidden bg-black"
                    onClick={() => {
                      setSpotlightId(id);
                      setShowRoster(false);
                    }}
                    title="Đẩy lên giao diện chính"
                  >
                    <CustomTrackTile
                      trackRef={tr}
                      offMinHeight={120}
                      contain
                      avatarUrl={
                        ((tr as unknown as { participant?: { isLocal?: boolean } })?.participant?.isLocal
                          ? myAvatarUrl
                          : avatarsMap[id]) || avatarUrl
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function formatTime(startAt?: number | null) {
  if (!startAt) return '00:00';
  const s = Math.max(0, Math.floor((Date.now() - startAt) / 1000));
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
  onRequestEnd,
  className,
  titleName,
  callStartAt,
  avatarUrl,
  myName,
  myAvatarUrl,
  localPreviewSize,
  offMinHeight,
  onParticipantsChanged,
  callMode = 'video',
}: Props) {
  const [showLocalPreview, setShowLocalPreview] = React.useState(true);
  const [showControls, setShowControls] = React.useState(false);
  const [tick, setTick] = React.useState(0);
  const initialPreview = React.useMemo(() => {
    return { w: localPreviewSize?.w ?? 80, h: localPreviewSize?.h ?? 50 };
  }, [localPreviewSize]);

  const toggleControls = () => {
    setShowControls((prev) => !prev);
  };
  React.useEffect(() => {
    if (!callStartAt) {
      setTick(0);
      return;
    }
    setTick(0);
    const id = window.setInterval(() => setTick((x) => x + 1), 1000);
    return () => window.clearInterval(id);
  }, [callStartAt]);

  // function ParticipantsCounter() {
  //   const tracks = useTracks([Track.Source.Camera]);
  //   const count = tracks.filter((t) => !t.participant?.isLocal).length;
  //   return (
  //     <div className="absolute top-3 right-3 text-xs font-semibold bg-white/20 text-white px-2 py-1 rounded">
  //       {count} người
  //     </div>
  //   );
  // }
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
      <LiveKitRoom
        serverUrl={serverUrl}
        token={token}
        connect
        video={callMode === 'video'}
        audio={true}
        onDisconnected={onDisconnected}
      >
        <RoomAudioRenderer />
        <div className="relative w-full h-full group" onClick={toggleControls}>
          <CallTiles
            titleName={titleName}
            avatarUrl={avatarUrl}
            offMinHeight={offMinHeight}
            myName={myName}
            myAvatarUrl={myAvatarUrl}
            callMode={callMode}
          />

          {/* Timer */}
          <div className="absolute md:block hidden top-3 left-3 text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded">
            {formatTime(callStartAt)}
          </div>
          <div className="absolute md:hidden block top-3 left-1/2 -translate-x-1/2 text-xs font-semibold  text-white px-2 py-1 rounded">
            <p className="text-green-500 text-[1rem]">{formatTime(callStartAt)}</p>
          </div>
          {/* Mobile top actions */}
          <div className="absolute top-3 left-3 md:hidden">
            <button
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                try {
                  window.dispatchEvent(new CustomEvent('minimizeCallOverlay'));
                  window.dispatchEvent(new CustomEvent('hideCallOverlay'));
                } catch {}
              }}
              title="Quay lại"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* <ParticipantsCounter /> */}
          <ParticipantsWatcher onChanged={onParticipantsChanged} />

          {/* Local preview (toggleable) */}
          {showLocalPreview && callMode === 'video' && (
            <LocalPreview myName={myName} myAvatarUrl={myAvatarUrl} size={initialPreview} />
          )}

          <div className="absolute left-0 right-0 bottom-4 md:flex hidden justify-center">
            <div className="flex items-center gap-3 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {callMode === 'video' && (
                <>
                  <TrackToggle
                    source={Track.Source.ScreenShare}
                    className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  />
                  <TrackToggle
                    source={Track.Source.Camera}
                    className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  />
                </>
              )}
              <button
                className="cursor-pointer p-2 rounded-full bg-red-600 hover:bg-red-700 transition text-white"
                onClick={() => {
                  if (onRequestEnd) onRequestEnd();
                }}
                title="Kết thúc"
              >
                <CiPhone className="w-5 h-5" />
              </button>
              <TrackToggle
                source={Track.Source.Microphone}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              />
              {callMode === 'video' && (
                <button
                  className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  onClick={() => setShowLocalPreview((v) => !v)}
                  title={showLocalPreview ? 'Ẩn cam của tôi' : 'Hiện cam của tôi'}
                >
                  {showLocalPreview ? <HiEyeSlash className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
          {/* Mobile controls – ẩn mặc định, hiện khi chạm */}
          <div
            className={`fixed bottom-6 left-0 right-0 md:hidden flex justify-center gap-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col items-center gap-2">
              {callMode === 'video' && (
                <>
                  <TrackToggle
                    source={Track.Source.Camera}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                  />
                  <span className="text-white text-xs">Camera</span>
                </>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrackToggle
                source={Track.Source.Microphone}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              />
              <span className="text-white text-xs">Mic</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                onClick={() => {
                  if (onRequestEnd) onRequestEnd();
                }}
                title="Kết thúc"
              >
                <CiPhone className="w-6 h-6" />
              </button>
              <span className="text-white text-xs">Kết thúc</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {callMode === 'video' && (
                <>
                  <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                    onClick={() => setShowLocalPreview((v) => !v)}
                    title={showLocalPreview ? 'Ẩn cam của tôi' : 'Hiện cam của tôi'}
                  >
                    {showLocalPreview ? <HiEyeSlash className="w-6 h-6" /> : <HiEye className="w-6 h-6" />}
                  </button>
                  <span className="text-white text-xs">{showLocalPreview ? 'Ẩn cam tôi' : 'Hiện cam tôi'}</span>
                </>
              )}
            </div>
          </div>
          {/* Mobile right-side quick actions */}
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

  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 12, y: 12 });
  React.useEffect(() => {
    const apply = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      const desktop = width >= 768;
      setIsDesktop(desktop);
      if (!desktop) {
        setPos({ x: Math.max(8, width - size.w - 12), y: 12 });
      }
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [size.w]);
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    const st = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - st.sx;
      const dy = ev.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - size.w - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - size.h - 8));
      setPos({ x: nx, y: ny });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    const t = e.touches[0];
    const st = { sx: t.clientX, sy: t.clientY, ox: pos.x, oy: pos.y };
    const onMove = (ev: TouchEvent) => {
      const tt = ev.touches[0];
      const dx = tt.clientX - st.sx;
      const dy = tt.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - size.w - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - size.h - 8));
      setPos({ x: nx, y: ny });
    };
    const onUp = () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
  };
  const style: React.CSSProperties = { width: size.w, height: size.h };
  if (isDesktop) {
    // desktop: fixed position handled by className; keep size only
  } else {
    style.left = pos.x;
    style.top = pos.y;
  }

  // Hide local preview if we have 3 or more participants (grid mode)
  if (cameraTracks.length >= 3) return null;

  return (
    <div
      className={`${isDesktop ? 'absolute top-2 right-2' : 'absolute'} rounded-lg overflow-hidden bg-black ${isDesktop ? '' : 'cursor-move'}`}
      style={style}
      onMouseDown={handleDragStart}
      onTouchStart={handleTouchStart}
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
