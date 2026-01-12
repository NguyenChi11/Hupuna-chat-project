import { useState, useEffect, useCallback } from 'react';
import { User } from '@/types/User';
import { ChatItem } from '@/types/Group';

interface UseChatRoomProps {
  roomId: string;
  currentUser: User;
  isGroup: boolean;
  selectedChat: ChatItem;
}

export function useChatRoom({ roomId, currentUser, isGroup, selectedChat }: UseChatRoomProps) {
  const [roomMuted, setRoomMuted] = useState(false);
  const [roomCallActiveLocal, setRoomCallActiveLocal] = useState(false);
  const [roomCallTypeLocal, setRoomCallTypeLocal] = useState<'voice' | 'video'>('voice');
  const [roomParticipantsLocal, setRoomParticipantsLocal] = useState<string[]>([]);

  const [globalCallActive, setGlobalCallActive] = useState(false);
  const [globalCallConnecting, setGlobalCallConnecting] = useState(false);
  const [globalIncoming, setGlobalIncoming] = useState(false);

  useEffect(() => {
    try {
      const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
      const v = localStorage.getItem(k) === 'true';
      setRoomMuted(v);
    } catch {}
  }, [roomId, currentUser._id]);

  useEffect(() => {
    try {
      localStorage.setItem('CURRENT_ROOM_ID', String(roomId));
      const ev = new CustomEvent('currentRoomChanged', { detail: { roomId: String(roomId) } });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}
  }, [roomId]);

  useEffect(() => {
    try {
      const a = localStorage.getItem(`livekit_room_${roomId}_active`) === 'true';
      const tRaw = localStorage.getItem(`livekit_room_${roomId}_type`);
      const t = (tRaw === 'video' ? 'video' : 'voice') as 'voice' | 'video';
      const pRaw = localStorage.getItem(`livekit_room_${roomId}_participants`);
      const p = pRaw ? (JSON.parse(pRaw) as string[]) : [];
      setRoomCallActiveLocal(!!a);
      setRoomCallTypeLocal(t);
      setRoomParticipantsLocal(Array.isArray(p) ? p.map((x) => String(x)) : []);
    } catch {}
  }, [roomId]);

  useEffect(() => {
    const handler = (e: Event) => {
      const d =
        (
          e as unknown as {
            detail?: { roomId?: string; active?: boolean; type?: 'voice' | 'video'; participants?: string[] };
          }
        ).detail || {};
      if (String(d.roomId) !== String(roomId)) return;
      setRoomCallActiveLocal(!!d.active);
      setRoomCallTypeLocal((d.type === 'video' ? 'video' : 'voice') as 'voice' | 'video');
      setRoomParticipantsLocal(Array.isArray(d.participants) ? d.participants.map((x) => String(x)) : []);
    };
    window.addEventListener('roomCallStateChanged', handler as EventListener);
    return () => window.removeEventListener('roomCallStateChanged', handler as EventListener);
  }, [roomId]);

  useEffect(() => {
    try {
      setGlobalIncoming(localStorage.getItem('GLOBAL_INCOMING_CALL') === '1');
      setGlobalCallActive(localStorage.getItem('GLOBAL_CALL_ACTIVE') === '1');
      setGlobalCallConnecting(localStorage.getItem('GLOBAL_CALL_CONNECTING') === '1');
    } catch {}

    const handler = (e: Event) => {
      const d =
        (
          e as unknown as {
            detail?: { active?: boolean; connecting?: boolean; incoming?: boolean };
          }
        ).detail || {};

      setGlobalCallActive(!!d.active);
      setGlobalCallConnecting(!!d.connecting);
      setGlobalIncoming(!!d.incoming);
    };

    window.addEventListener('globalCallStatusChanged', handler as EventListener);
    return () => window.removeEventListener('globalCallStatusChanged', handler as EventListener);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const d = (e as unknown as { detail?: { roomId?: string; muted?: boolean } }).detail;
      if (!d) return;
      if (String(d.roomId) !== String(roomId)) return;
      setRoomMuted(!!d.muted);
    };
    window.addEventListener('roomMutedChanged', handler as EventListener);
    return () => window.removeEventListener('roomMutedChanged', handler as EventListener);
  }, [roomId]);

  const handleRejoinCall = useCallback(() => {
    try {
      const ev = new CustomEvent('startCall', {
        detail: {
          type: roomCallTypeLocal,
          roomId,
          isGroup: isGroup,
          selectedChat: selectedChat,
        },
      });
      window.dispatchEvent(ev as unknown as Event);
    } catch {}
  }, [roomCallTypeLocal, roomId, isGroup, selectedChat]);

  return {
    roomMuted,
    setRoomMuted,
    roomCallActiveLocal,
    roomCallTypeLocal,
    roomParticipantsLocal,
    globalCallActive,
    globalCallConnecting,
    globalIncoming,
    handleRejoinCall,
  };
}
