import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Socket } from 'socket.io-client';

type CallType = 'voice' | 'video';

export function useLiveKitSession({
  socketRef,
  roomId,
  currentUserId,
  isGroup,
  selectedChat,
}: {
  socketRef?: React.MutableRefObject<Socket | null>;
  roomId: string;
  currentUserId: string;
  isGroup: boolean;
  selectedChat?: { _id?: string; members?: Array<string | { _id: string }> } | null;
}) {
  const [callActive, setCallActive] = useState(false);
  const [callType, setCallType] = useState<CallType | null>(null);
  const [callStartAt, setCallStartAt] = useState<number | null>(null);
  const [callConnecting, setCallConnecting] = useState(false);
  const [incomingCall, setIncomingCall] = useState<{
    callId: string;
    from: string;
    type: CallType;
    roomId: string;
  } | null>(null);
  const [roomCallActive, setRoomCallActive] = useState(false);
  const [roomCallType, setRoomCallType] = useState<CallType | null>(null);
  const [roomParticipants, setRoomParticipants] = useState<string[]>([]);
  const [activeRoomId, setActiveRoomId] = useState<string>(roomId);
  const [counterpartId, setCounterpartId] = useState<string | null>(null);
  const [livekitToken, setLivekitToken] = useState<string | null>(null);
  const [livekitUrl, setLivekitUrl] = useState<string | null>(null);
  const [pendingOutgoingCallId, setPendingOutgoingCallId] = useState<string | null>(null);
  const [activeCallId, setActiveCallId] = useState<string | null>(null);
  const [groupActiveCallId, setGroupActiveCallId] = useState<string | null>(null);
  const currentUserIdRef = useRef<string>(String(currentUserId));
  useEffect(() => {
    currentUserIdRef.current = String(currentUserId);
  }, [currentUserId]);
  useEffect(() => setActiveRoomId(roomId), [roomId]);
  const getReceiverIds = useCallback(() => {
    if (isGroup) {
      const arr = Array.isArray(selectedChat?.members) ? selectedChat!.members : [];
      return arr
        .map((m) => (typeof m === 'object' && m?._id ? String(m._id) : String(m)))
        .filter((id) => id && id !== String(currentUserIdRef.current));
    }
    const otherId = String(selectedChat?._id || '');
    return otherId ? [otherId] : [];
  }, [isGroup, selectedChat]);

  const startCall = useCallback(
    async (_type: CallType, overrideTargetId?: string) => {
      setCallType(_type);
      setCallConnecting(true);
      const targets = overrideTargetId ? [String(overrideTargetId)] : getReceiverIds();
      if (targets.length === 0) {
        setCallConnecting(false);
        return;
      }
      const type = isGroup ? 'group' : 'one_to_one';
      const conversationId = isGroup
        ? String(roomId)
        : String(roomId || [String(currentUserIdRef.current), String(targets[0])].sort().join('_'));
      const res = await fetch('/api/calls/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation_id: conversationId,
          type,
          media: _type,
          created_by: currentUserIdRef.current,
          target_user_ids: targets,
        }),
      });
      const json = await res.json();
      if (!json || !json.ok) {
        setCallConnecting(false);
        return;
      }
      if (isGroup) {
        const res2 = await fetch('/api/calls/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ call_id: String(json.call_id), user_id: currentUserIdRef.current }),
        });
        const joined = await res2.json();
        if (joined && joined.ok) {
          setLivekitToken(String(joined.token || ''));
          setLivekitUrl(String(joined.url || ''));
          setCallActive(true);
          setCallConnecting(false);
          setCallStartAt(Date.now());
          setActiveCallId(String(json.call_id));
        } else {
          setCallConnecting(false);
        }
      } else {
        setPendingOutgoingCallId(String(json.call_id));
        // 1-1: Chờ phía B accept rồi mới join
      }
    },
    [getReceiverIds, isGroup, roomId],
  );
  const endCall = useCallback(
    async (_source: 'local' | 'remote' = 'local') => {
      try {
        if (_source === 'local' && callActive) {
          await fetch('/api/calls/end', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ call_id: String(activeCallId || incomingCall?.callId || ''), user_id: currentUserIdRef.current }),
          });
        }
      } catch {}
      setCallActive(false);
      setCallType(null);
      setCallStartAt(null);
      setCallConnecting(false);
      setLivekitToken(null);
      setLivekitUrl(null);
      setRoomCallActive(false);
      setRoomParticipants([]);
      setIncomingCall(null);
      setActiveCallId(null);
      setGroupActiveCallId(null);
    },
    [callActive, incomingCall, activeCallId],
  );
  const acceptIncomingCall = useCallback(async (): Promise<boolean> => {
    if (!incomingCall) return false;
    const res = await fetch('/api/calls/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ call_id: String(incomingCall.callId), user_id: currentUserIdRef.current }),
    });
    const json = await res.json();
    if (json && json.ok) {
      setLivekitToken(String(json.token || ''));
      setLivekitUrl(String(json.url || ''));
      setCallActive(true);
      setCallStartAt(Date.now());
      setIncomingCall(null);
      setActiveCallId(String(incomingCall.callId));
      return true;
    }
    return false;
  }, [incomingCall]);
  const joinActiveGroupCall = useCallback(async () => {
    const cid = String(groupActiveCallId || '');
    if (!cid) return;
    setCallConnecting(true);
    try {
      const res = await fetch('/api/calls/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ call_id: cid, user_id: currentUserIdRef.current }),
      });
      const json = await res.json();
      if (json && json.ok) {
        setLivekitToken(String(json.token || ''));
        setLivekitUrl(String(json.url || ''));
        setCallActive(true);
        setCallConnecting(false);
        setCallStartAt(Date.now());
        setActiveCallId(cid);
      } else {
        setCallConnecting(false);
      }
    } catch {
      setCallConnecting(false);
    }
  }, [groupActiveCallId]);

  useEffect(() => {
    const s = socketRef?.current;
    if (!s) return;
    const handleAccepted = async (data: { call_id: string }) => {
      if (!pendingOutgoingCallId) return;
      if (String(data.call_id) !== String(pendingOutgoingCallId)) return;
      try {
        const res = await fetch('/api/calls/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ call_id: String(data.call_id), user_id: currentUserIdRef.current }),
        });
        const json = await res.json();
        if (json && json.ok) {
          setLivekitToken(String(json.token || ''));
          setLivekitUrl(String(json.url || ''));
          setCallActive(true);
          setCallConnecting(false);
          setCallStartAt(Date.now());
          setPendingOutgoingCallId(null);
          setActiveCallId(String(data.call_id));
        }
      } catch {
        setCallConnecting(false);
        setPendingOutgoingCallId(null);
      }
    };
    const handleIncoming = (data: { call_id: string; conversation_id: string; type: string; media: string; from: string }) => {
      setIncomingCall({
        callId: String(data.call_id),
        from: String(data.from),
        type: (data.media === 'video' ? 'video' : 'voice') as CallType,
        roomId: String(data.conversation_id),
      });
      setCallType((data.media === 'video' ? 'video' : 'voice') as CallType);
      setActiveRoomId(String(data.conversation_id));
      const parts = String(data.conversation_id).split('_').filter(Boolean);
      const me = String(currentUserIdRef.current);
      const other = parts.length === 2 ? parts.find((x) => String(x) !== me) : null;
      setCounterpartId(other ? String(other) : null);
    };
    const handleEnded = (data: { call_id: string }) => {
      endCall('remote');
    };
    const handleJoined = (data: { call_id: string; user_id: string }) => {
      setRoomParticipants((prev) => {
        const set = new Set(prev);
        set.add(String(data.user_id));
        return Array.from(set);
      });
      setRoomCallActive(true);
      setRoomCallType((callType || 'video') as CallType);
      setGroupActiveCallId(String(data.call_id));
    };
    const handleLeft = (data: { call_id: string; user_id: string }) => {
      setRoomParticipants((prev) => prev.filter((x) => String(x) !== String(data.user_id)));
    };
    s.on('call-accepted', handleAccepted);
    s.on('incoming-call', handleIncoming);
    s.on('call-ended', handleEnded);
    s.on('participant-joined', handleJoined);
    s.on('participant-left', handleLeft);
    return () => {
      s.off('call-accepted', handleAccepted);
      s.off('incoming-call', handleIncoming);
      s.off('call-ended', handleEnded);
      s.off('participant-joined', handleJoined);
      s.off('participant-left', handleLeft);
    };
  }, [socketRef, endCall, callType, pendingOutgoingCallId]);

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
