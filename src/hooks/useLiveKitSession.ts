'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import { playGlobalRingTone, stopGlobalRingTone } from '@/utils/callRing';
import type { User } from '@/types/User';

type CallType = 'voice' | 'video';
type Member = string | { _id: string };

export function useLiveKitSession({
  socketRef,
  roomId,
  currentUserId,
  currentUser,
  isGroup,
  selectedChat,
}: {
  socketRef: React.MutableRefObject<Socket | null>;
  roomId: string;
  currentUserId: string;
  currentUser: User | null;
  isGroup: boolean;
  selectedChat?: { _id?: string; members?: Member[] } | null;
}) {
  const [incomingCall, setIncomingCall] = useState<{ from: string; type: CallType; roomId: string } | null>(null);
  const [callActive, setCallActive] = useState(false);
  const [callType, setCallType] = useState<CallType | null>(null);
  const [callStartAt, setCallStartAt] = useState<number | null>(null);
  const [callConnecting, setCallConnecting] = useState(false);
  const [roomCallActive, setRoomCallActive] = useState(false);
  const [roomCallType, setRoomCallType] = useState<CallType | null>(null);
  const [roomParticipants, setRoomParticipants] = useState<string[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>(roomId);
  const [counterpartId, setCounterpartId] = useState<string | null>(null);
  const [livekitToken, setLivekitToken] = useState<string | null>(null);
  const [livekitUrl, setLivekitUrl] = useState<string | null>(null);

  const receiversRef = useRef<string[]>([]);
  const ringTimeoutRef = useRef<number | null>(null);
  const callActiveRef = useRef<boolean>(false);
  const callConnectingRef = useRef<boolean>(false);
  const lastJoinedRoomRef = useRef<string>('');
  const activeRoomIdRef = useRef<string>('');
  const ignoreRemoteEndUntilRef = useRef<number>(0);
  const roomParticipantsRef = useRef<string[]>([]);
  const callTypeRef = useRef<CallType | null>(null);

  useEffect(() => {
    callActiveRef.current = callActive;
  }, [callActive]);
  useEffect(() => {
    callTypeRef.current = callType;
  }, [callType]);
  useEffect(() => {
    callConnectingRef.current = callConnecting;
  }, [callConnecting]);
  useEffect(() => {
    activeRoomIdRef.current = String(activeRoomId || '');
  }, [activeRoomId]);
  useEffect(() => {
    roomParticipantsRef.current = roomParticipants;
  }, [roomParticipants]);
  useEffect(() => {
    const ensureUserJoin = async () => {
      try {
        if (!currentUserId) return;
        if (!socketRef.current || !socketRef.current.connected) {
          socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
          await new Promise<void>((resolve) => {
            socketRef.current!.on('connect', () => resolve());
          });
        }
        socketRef.current!.emit('join_user', { userId: String(currentUserId) });
      } catch {}
    };
    void ensureUserJoin();
  }, [currentUserId]);
  useEffect(() => {
    if (callActive || callConnecting) {
      ignoreRemoteEndUntilRef.current = Date.now() + 5000;
      return;
    }
    setActiveRoomId(roomId);
  }, [roomId, callActive, callConnecting]);
  useEffect(() => {
    const rid = String(roomId || '');
    if (!rid) {
      setRoomCallActive(false);
      setRoomCallType(null);
      setRoomParticipants([]);
      return;
    }
    if (callActiveRef.current || callConnectingRef.current) return;
    setRoomCallActive(false);
    setRoomCallType(null);
    setRoomParticipants([]);
  }, [roomId]);
  useEffect(() => {
    const rid = String(roomId || '');
    if (!rid) return;
    const ensureJoin = async () => {
      try {
        if (callActive || callConnecting) return;
        if (!socketRef.current || !socketRef.current.connected) {
          socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
          await new Promise<void>((resolve) => {
            socketRef.current!.on('connect', () => resolve());
          });
          socketRef.current!.emit('join_user', { userId: String(currentUserId) });
        }
        if (lastJoinedRoomRef.current !== rid) {
          socketRef.current?.emit('join_room', rid);
          lastJoinedRoomRef.current = rid;
        }
      } catch {}
    };
    void ensureJoin();
  }, [roomId, currentUserId, socketRef, callActive, callConnecting]);

  // Bỏ hoàn toàn lưu trạng thái phòng gọi vào localStorage

  const getReceiverIds = useCallback(() => {
    if (isGroup) {
      const members = (selectedChat?.members || []) as Member[];
      const ids = members
        .map((m) => (typeof m === 'object' ? String(m._id) : String(m)))
        .filter((id) => id !== String(currentUserId));
      return ids;
    }
    const id = String(selectedChat?._id || '');
    return id ? [id] : [];
  }, [isGroup, selectedChat, currentUserId]);

  const fetchToken = useCallback(async (rid: string) => {
    const res = await fetch(`/api/livekit/token?room=${encodeURIComponent(rid)}`, { method: 'GET' });
    if (!res.ok) throw new Error('token failed');
    const data = await res.json();
    setLivekitToken(String(data.token || ''));
    setLivekitUrl(String(data.serverUrl || ''));
  }, []);

  const sendNotify = useCallback(
    async (content: string) => {
      if (!roomId || !currentUserId) return;
      const myName = currentUser?.name || 'Bạn';
      const msgData = {
        roomId,
        sender: currentUserId,
        type: 'notify',
        content,
        timestamp: Date.now(),
      };
      try {
        const res = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'create',
            data: msgData,
          }),
        });
        const json = await res.json();
        if (json.success && json._id) {
          let members: Member[] = [];
          if (selectedChat && String(selectedChat._id) === String(roomId) && isGroup) {
            members = selectedChat.members || [];
          }

          socketRef.current?.emit('send_message', {
            ...msgData,
            _id: json._id,
            senderName: myName,
            isGroup,
            receiver: null,
            members,
          });
        }
      } catch (e) {
        console.error('Failed to send notify', e);
      }
    },
    [roomId, currentUserId, currentUser, isGroup, selectedChat, socketRef],
  );

  const joinActiveGroupCall = useCallback(async () => {
    try {
      if (!isGroup || !roomCallActive) return;
      const rid = String(roomId);
      if (!socketRef.current || !socketRef.current.connected) {
        socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
        await new Promise<void>((resolve) => {
          socketRef.current!.on('connect', () => resolve());
        });
        socketRef.current!.emit('join_user', { userId: String(currentUserId) });
      }
      socketRef.current?.emit('join_room', rid);
      const target = (Array.isArray(roomParticipants) ? roomParticipants : []).find(
        (id) => String(id) !== String(currentUserId),
      );
      if (target) {
        socketRef.current?.emit('call_answer', {
          roomId: rid,
          target: String(target),
          from: String(currentUserId),
          sdp: null,
        });
      }
      setActiveRoomId(rid);
      setCallType(roomCallType || 'voice');
      setCallConnecting(false);
      await fetchToken(rid);
      setCallActive(true);

      const myName = currentUser?.name || 'Bạn';
      void sendNotify(`${myName} đã tham gia cuộc gọi video`);
    } catch {
      // ignore
    }
  }, [
    isGroup,
    roomCallActive,
    roomParticipants,
    roomId,
    currentUserId,
    roomCallType,
    fetchToken,
    currentUser,
    sendNotify,
  ]);

  const startCall = useCallback(
    async (type: CallType, overrideTargetId?: string) => {
      try {
        if (!socketRef.current || !socketRef.current.connected) {
          socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
          await new Promise<void>((resolve) => {
            socketRef.current!.on('connect', () => resolve());
          });
          socketRef.current.emit('join_room', roomId);
          socketRef.current.emit('join_user', { userId: String(currentUserId) });
        }
      } catch {}
      const receivers = (() => {
        if (!isGroup && overrideTargetId) {
          return [String(overrideTargetId)];
        }
        if (isGroup && roomCallActive && roomParticipants && roomParticipants.length > 0) {
          return roomParticipants.filter((id) => String(id) !== String(currentUserId));
        }
        return getReceiverIds();
      })();
      receiversRef.current = receivers;
      if (receivers.length === 0) return;

      if (isGroup) {
        const myName = currentUser?.name || 'Bạn';
        void sendNotify(`${myName} đã tham gia cuộc gọi video`);
      }

      setCallType(type);
      setCallStartAt(null);
      setCallConnecting(true);
      setLivekitToken(null);
      setLivekitUrl(null);
      setActiveRoomId(roomId);
      {
        const otherId = (() => {
          if (isGroup) return null;
          if (overrideTargetId) return String(overrideTargetId);
          if (receivers.length > 0) return String(receivers[0]);
          const parts = String(roomId).split('_').filter(Boolean);
          const me = String(currentUserId);
          const t = parts.length === 2 ? parts.find((id) => String(id) !== me) : undefined;
          return t ? String(t) : null;
        })();
        setCounterpartId(otherId);
      }
      if (ringTimeoutRef.current) {
        window.clearTimeout(ringTimeoutRef.current);
        ringTimeoutRef.current = null;
      }
      playGlobalRingTone();
      ringTimeoutRef.current = window.setTimeout(() => {
        if (!callActiveRef.current && callConnectingRef.current) {
          stopGlobalRingTone();
          endCall('local');
        }
      }, 30000);
      try {
        for (const otherId of receivers) {
          socketRef.current?.emit('call_offer', {
            roomId,
            target: otherId,
            from: String(currentUserId),
            type,
            sdp: null,
          });
        }
      } catch {
        setCallConnecting(false);
      }
    },
    [getReceiverIds, roomId, currentUserId, isGroup, roomCallActive, roomParticipants, currentUser, sendNotify],
  );

  const endCall = useCallback(
    (source: 'local' | 'remote' = 'local') => {
      stopGlobalRingTone();
      setCallActive(false);
      setCallType(null);
      setCallStartAt(null);
      setCallConnecting(false);
      setIncomingCall(null);
      setCounterpartId(null);
      setActiveRoomId('');
      setLivekitToken(null);
      setLivekitUrl(null);
      if (ringTimeoutRef.current) {
        window.clearTimeout(ringTimeoutRef.current);
        ringTimeoutRef.current = null;
      }
      if (source === 'local' && socketRef.current?.connected) {
        if (isGroup) {
          socketRef.current.emit('call_leave', {
            roomId,
            userId: String(currentUserId),
          });

          const myName = currentUser?.name || 'Bạn';
          void sendNotify(`${myName} đã rời cuộc gọi video`);

          const type = callTypeRef.current;
          if (type === 'video') {
            const currentParts = roomParticipantsRef.current || [];
            const remaining = currentParts.filter((id) => String(id) !== String(currentUserId));
            if (remaining.length === 0) {
              const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
              void sendNotify(`Cuộc gọi video đã kết thúc lúc ${time}`);
            }
          }
          setRoomParticipants((prev) => {
            const next = (prev || []).filter((id) => String(id) !== String(currentUserId));
            if (next.length === 0) {
              setRoomCallActive(false);
              setRoomCallType(null);
            }
            return next;
          });
        } else {
          let targets = receiversRef.current;
          if (!targets || targets.length === 0) {
            const other = counterpartId
              ? String(counterpartId)
              : (() => {
                  const parts = String(roomId).split('_').filter(Boolean);
                  const me = String(currentUserId);
                  const t = parts.length === 2 ? parts.find((id) => String(id) !== me) : undefined;
                  return t ? String(t) : undefined;
                })();
            targets = other ? [other] : [];
          }
          socketRef.current.emit('call_end', {
            roomId,
            from: String(currentUserId),
            targets,
          });
        }
      }
    },
    [roomId, currentUserId, counterpartId, isGroup, callType, currentUser, sendNotify],
  );

  const acceptIncomingCall = useCallback(async () => {
    if (!incomingCall) return;
    stopGlobalRingTone();
    setCallType(incomingCall.type);
    setActiveRoomId(incomingCall.roomId);
    setCallConnecting(false);
    try {
      if (!socketRef.current || !socketRef.current.connected) {
        socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
        await new Promise<void>((resolve) => {
          socketRef.current!.on('connect', () => resolve());
        });
        socketRef.current!.emit('join_user', { userId: String(currentUserId) });
      }
      socketRef.current?.emit('join_room', incomingCall.roomId);
      socketRef.current?.emit('call_answer', {
        roomId: incomingCall.roomId,
        target: String(incomingCall.from),
        from: String(currentUserId),
        sdp: null,
      });
      const parts = String(incomingCall.roomId).split('_').filter(Boolean);
      if (parts.length === 2) {
        setCounterpartId(String(incomingCall.from));
      } else {
        setCounterpartId(null);
      }
      setCallActive(true);
      await fetchToken(incomingCall.roomId);
      setIncomingCall(null);
      setCallStartAt((prev) => (prev && prev > 0 ? prev : Date.now()));
    } catch {
      setCallActive(true);
    }
  }, [incomingCall, fetchToken, currentUserId]);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;
    socket.off('call_offer');
    socket.off('call_answer');
    socket.off('call_end');
    socket.off('call_reject');
    socket.off('call_leave');
    socket.off('call_state');
    const handleCallOffer = (data: { roomId: string; target: string; from: string; type: CallType }) => {
      if (String(data.target) !== String(currentUserId)) return;
      if (callActiveRef.current || callConnectingRef.current) {
        socket.emit('call_candidate', {
          roomId: data.roomId,
          target: data.from,
          from: currentUserId,
          candidate: 'busy-signal',
        });
        return;
      }
      setIncomingCall({ from: String(data.from), type: data.type, roomId: data.roomId });
      playGlobalRingTone();
    };
    const handleCallCandidate = (data: {
      roomId: string;
      target?: string;
      candidate?: string | RTCIceCandidate;
      from?: string;
    }) => {
      if (data.target && String(data.target) !== String(currentUserId)) return;
      if (data.candidate === 'busy-signal') {
        const ev = new CustomEvent('callBusy', { detail: { roomId: data.roomId, from: data.from } });
        window.dispatchEvent(ev as unknown as Event);
      }
    };
    const handleCallAnswer = async (data: { roomId: string; target: string; from: string }) => {
      if (String(data.target) !== String(currentUserId)) return;
      stopGlobalRingTone();
      setCallConnecting(false);
      setActiveRoomId(data.roomId);
      setCallStartAt((prev) => (prev && prev > 0 ? prev : Date.now()));
      await fetchToken(data.roomId);
      setCallActive(true);
    };
    const handleCallEnd = (data: { roomId: string; from?: string; targets?: string[] }) => {
      stopGlobalRingTone();
      setIncomingCall(null);
      const isDirect = String(data.roomId).split('_').filter(Boolean).length === 2;
      const fromOther = typeof data.from === 'string' && String(data.from) !== String(currentUserId);
      const explicit = fromOther || (Array.isArray(data.targets) && data.targets.length > 0);
      // 1-1: luôn kết thúc khi roomId trùng phòng đang gọi (dù explicit hay không)
      if (isDirect) {
        if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
        endCall('remote');
        if (String(data.roomId) === String(roomId)) {
          setRoomCallActive(false);
          setRoomCallType(null);
          setRoomParticipants([]);
        }
        return;
      }
      if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
      endCall('remote');
      if (String(data.roomId) === String(roomId)) {
        setRoomCallActive(false);
        setRoomCallType(null);
        setRoomParticipants([]);
      }
    };
    const handleCallReject = (data: { roomId: string }) => {
      stopGlobalRingTone();
      setIncomingCall(null);
      if (String(data.roomId).split('_').filter(Boolean).length === 2) {
        if (String(data.roomId) !== String(activeRoomIdRef.current)) return;
        endCall('remote');
        if (String(data.roomId) === String(roomId)) {
          setRoomCallActive(false);
          setRoomCallType(null);
          setRoomParticipants([]);
        }
      }
    };
    const handleCallLeave = (data: { roomId: string; userId: string }) => {
      if (String(data.roomId) !== String(roomId)) return;
      setRoomParticipants((prev) => {
        const next = (prev || []).filter((id) => String(id) !== String(data.userId));
        if (next.length === 0) {
          setRoomCallActive(false);
          setRoomCallType(null);
        }
        return next;
      });
    };
    const handleCallState = (data: {
      roomId: string;
      type: CallType;
      participants: string[];
      active: boolean;
      startAt?: number | null;
    }) => {
      if (String(data.roomId) !== String(roomId)) return;
      const isDirect = String(data.roomId).split('_').filter(Boolean).length === 2;
      if (isDirect) return;
      setRoomCallActive(!!data.active);
      setRoomCallType(data.type);
      setRoomParticipants(Array.isArray(data.participants) ? data.participants.map((x) => String(x)) : []);
      setCallStartAt(typeof data.startAt === 'number' ? data.startAt : null);
    };
    socket.on('call_offer', handleCallOffer);
    socket.on('call_answer', handleCallAnswer);
    socket.on('call_end', handleCallEnd);
    socket.on('call_reject', handleCallReject);
    socket.on('call_leave', handleCallLeave);
    socket.on('call_state', handleCallState);
    socket.on('call_candidate', handleCallCandidate);
    return () => {
      socket.off('call_offer', handleCallOffer);
      socket.off('call_answer', handleCallAnswer);
      socket.off('call_end', handleCallEnd);
      socket.off('call_reject', handleCallReject);
      socket.off('call_leave', handleCallLeave);
      socket.off('call_state', handleCallState);
      socket.off('call_candidate', handleCallCandidate);
    };
  }, [currentUserId, socketRef, endCall, roomId, fetchToken]);

  useEffect(() => {
    if (!callConnecting) {
      stopGlobalRingTone();
      if (ringTimeoutRef.current) {
        window.clearTimeout(ringTimeoutRef.current);
        ringTimeoutRef.current = null;
      }
    }
  }, [callConnecting]);
  useEffect(() => {
    if (!incomingCall) {
      stopGlobalRingTone();
      if (ringTimeoutRef.current) {
        window.clearTimeout(ringTimeoutRef.current);
        ringTimeoutRef.current = null;
      }
    }
  }, [incomingCall]);

  return {
    callActive,
    callType,
    callStartAt,
    callConnecting,
    incomingCall,
    startCall,
    endCall,
    acceptIncomingCall,
    setIncomingCall,
    roomCallActive,
    roomCallType,
    roomParticipants,
    activeRoomId,
    counterpartId,
    livekitToken,
    livekitUrl,
    joinActiveGroupCall,
  };
}
