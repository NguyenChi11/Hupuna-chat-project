'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import { fetchLiveKitToken } from '@/utils/livekit';

type CallType = 'voice' | 'video';

export type IncomingInvite = {
  from: string;
  type: CallType;
  roomId: string;
  name?: string;
  avatar?: string;
};

export function useLiveKitCall(currentUserId?: string) {
  const socketRef = useRef<Socket | null>(null);
  const [incomingInvite, setIncomingInvite] = useState<IncomingInvite | null>(null);
  const [ringing, setRinging] = useState(false);
  const [activeRoomId, setActiveRoomId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [callType, setCallType] = useState<CallType>('voice');
  const [participants, setParticipants] = useState<string[]>([]);
  const [callStartAt, setCallStartAt] = useState<number | null>(null);

  useEffect(() => {
    const s = socketRef.current || io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
    socketRef.current = s;
    if (currentUserId) s.emit('join_user', { userId: String(currentUserId) });

    const onInvite = (data: IncomingInvite) => {
      if (!currentUserId) return;
      if (String(data.from) === String(currentUserId)) return;
      setIncomingInvite(data);
      setRinging(true);
    };
    const onAccept = (data: { roomId: string; userId: string }) => {
      if (String(data.userId) === String(currentUserId)) return;
      setParticipants((prev) => Array.from(new Set([...prev, String(data.userId)])));
      setCallStartAt((p) => p || Date.now());
    };
    const onEnd = (data: { roomId: string }) => {
      if (String(data.roomId) === String(activeRoomId)) {
        setActiveRoomId('');
        setToken('');
        setParticipants([]);
        setCallStartAt(null);
      }
      setIncomingInvite(null);
      setRinging(false);
    };
    const onState = (data: { roomId: string; participants: string[]; active: boolean; startAt?: number }) => {
      setParticipants(Array.isArray(data.participants) ? data.participants.map(String) : []);
      setCallStartAt(typeof data.startAt === 'number' ? data.startAt : null);
    };

    s.on('lk_invite', onInvite);
    s.on('lk_accept', onAccept);
    s.on('lk_end', onEnd);
    s.on('lk_state', onState);
    return () => {
      s.off('lk_invite', onInvite);
      s.off('lk_accept', onAccept);
      s.off('lk_end', onEnd);
      s.off('lk_state', onState);
    };
  }, [currentUserId, activeRoomId]);

  const startCall = useCallback(
    async (roomId: string, targets: string[], type: CallType) => {
      if (!currentUserId || !roomId || targets.length === 0) return;
      const s = socketRef.current || io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socketRef.current = s;
      setCallType(type);
      setActiveRoomId(roomId);
      setRinging(true);
      s.emit('lk_invite', { roomId, from: String(currentUserId), targets, type });
      try {
        const tk = await fetchLiveKitToken({
          room: roomId,
          identity: String(currentUserId),
          canPublish: true,
          canSubscribe: true,
        });
        setToken(tk);
        setParticipants((prev) => Array.from(new Set([...prev, String(currentUserId)])));
      } catch (e) {
        setActiveRoomId('');
        setRinging(false);
      }
    },
    [currentUserId],
  );

  const accept = useCallback(async () => {
    if (!currentUserId || !incomingInvite) return;
    const roomId = String(incomingInvite.roomId);
    const s = socketRef.current || io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
    socketRef.current = s;
    setCallType(incomingInvite.type);
    setActiveRoomId(roomId);
    setRinging(false);
    s.emit('lk_accept', { roomId, userId: String(currentUserId) });
    try {
      const tk = await fetchLiveKitToken({
        room: roomId,
        identity: String(currentUserId),
        canPublish: true,
        canSubscribe: true,
      });
      setToken(tk);
      setParticipants((prev) => Array.from(new Set([...prev, String(currentUserId)])));
      setIncomingInvite(null);
    } catch (e) {
      setIncomingInvite(null);
      setActiveRoomId('');
    }
  }, [currentUserId, incomingInvite]);

  const reject = useCallback(() => {
    if (!currentUserId || !incomingInvite) return;
    const roomId = String(incomingInvite.roomId);
    const s = socketRef.current;
    s?.emit('lk_reject', { roomId, userId: String(currentUserId) });
    setIncomingInvite(null);
    setRinging(false);
  }, [currentUserId, incomingInvite]);

  const end = useCallback(() => {
    const s = socketRef.current;
    if (activeRoomId && currentUserId) {
      s?.emit('lk_end', { roomId: activeRoomId, userId: String(currentUserId) });
    }
    setActiveRoomId('');
    setToken('');
    setParticipants([]);
    setCallStartAt(null);
  }, [activeRoomId, currentUserId]);

  return {
    ringing,
    incomingInvite,
    activeRoomId,
    token,
    callType,
    participants,
    callStartAt,
    startCall,
    accept,
    reject,
    end,
  };
}

