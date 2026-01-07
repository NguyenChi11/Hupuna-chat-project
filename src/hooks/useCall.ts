'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Socket } from 'socket.io-client';
import type { User } from '../types/User';

export type CallType = 'voice' | 'video';
export type CallStatus = 'idle' | 'ringing' | 'active' | 'ended';

export interface CallData {
  callId: string;
  callerId: string;
  callerName: string;
  callerAvatar?: string;
  receiverIds: string[];
  roomId: string;
  callType: CallType;
  isGroup: boolean;
  status: CallStatus;
  participants: string[];
  startTime?: number;
}

export interface IncomingCall {
  callId: string;
  callerId: string;
  callerName: string;
  callerAvatar?: string;
  roomId: string;
  callType: CallType;
  isGroup: boolean;
}

export function useCall(currentUser: User | null, socket: Socket | null) {
  const [incomingCall, setIncomingCall] = useState<IncomingCall | null>(null);
  const [activeCall, setActiveCall] = useState<CallData | null>(null);
  const [ringtonePlaying, setRingtonePlaying] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamsRef = useRef<Map<string, MediaStream>>(new Map());
  const remoteStreams = useMemo(() => remoteStreamsRef.current, []);

  const startCall = async (
    _receiverIds: string[],
    _roomId: string,
    _callType: CallType,
    _isGroup: boolean,
  ): Promise<string | null> => {
    if (!currentUser) return null;
    const type = _isGroup ? 'group' : 'one_to_one';
    const media = _callType;
    const res = await fetch('/api/calls/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversation_id: _roomId,
        type,
        media,
        created_by: currentUser._id,
        target_user_ids: _receiverIds,
      }),
    });
    const json = await res.json();
    if (!json || !json.ok) return null;
    setActiveCall({
      callId: json.call_id,
      callerId: currentUser._id,
      callerName: currentUser.name,
      receiverIds: _receiverIds,
      roomId: _roomId,
      callType: _callType,
      isGroup: _isGroup,
      status: 'ringing',
      participants: [currentUser._id],
      startTime: Date.now(),
    });
    return json.call_id as string;
  };

  const acceptCall = async () => {
    if (!currentUser || !incomingCall) return;
    const res = await fetch('/api/calls/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ call_id: incomingCall.callId, user_id: currentUser._id }),
    });
    const json = await res.json();
    if (!json || !json.ok) return;
    setActiveCall({
      callId: incomingCall.callId,
      callerId: incomingCall.callerId,
      callerName: incomingCall.callerName,
      receiverIds: [currentUser._id],
      roomId: incomingCall.roomId,
      callType: incomingCall.callType,
      isGroup: incomingCall.isGroup,
      status: 'active',
      participants: [incomingCall.callerId, currentUser._id],
      startTime: Date.now(),
    });
    setIncomingCall(null);
  };
  const rejectCall = async () => {
    if (!incomingCall) return;
    const recipients = activeCall ? [activeCall.callerId, ...(activeCall.receiverIds || [])] : [];
    if (socket) {
      socket.emit('call-declined', { call_id: incomingCall.callId, user_id: currentUser?._id, recipients });
    }
    setIncomingCall(null);
  };
  const endCall = async () => {
    if (!currentUser || !activeCall) return;
    await fetch('/api/calls/end', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ call_id: activeCall.callId, user_id: currentUser._id }),
    });
    setActiveCall(null);
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
    }
    remoteStreamsRef.current.clear();
  };

  const toggleMic = () => {
    const next = !isMicMuted;
    setIsMicMuted(next);
  };

  const toggleCamera = () => {
    const next = !isCameraOff;
    setIsCameraOff(next);
  };

  useEffect(() => {
    if (!socket) return;
    const handleIncoming = (data: { call_id: string; conversation_id: string; type: string; media: string; room_name: string; from: string }) => {
      if (!currentUser) return;
      setIncomingCall({
        callId: data.call_id,
        callerId: data.from,
        callerName: '',
        roomId: data.conversation_id,
        callType: (data.media === 'video' ? 'video' : 'voice') as CallType,
        isGroup: data.type === 'group',
      });
    };
    const handleAccepted = (data: { call_id: string }) => {
      if (activeCall && activeCall.callId === data.call_id) {
        setActiveCall({ ...activeCall, status: 'active' });
      }
    };
    const handleDeclined = (data: { call_id: string; user_id: string }) => {
      if (incomingCall && incomingCall.callId === data.call_id) {
        setIncomingCall(null);
      }
    };
    const handleJoined = (data: { call_id: string; user_id: string }) => {
      if (activeCall && activeCall.callId === data.call_id) {
        const set = new Set<string>(activeCall.participants || []);
        set.add(data.user_id);
        setActiveCall({ ...activeCall, participants: Array.from(set) });
      }
    };
    const handleLeft = (data: { call_id: string; user_id: string }) => {
      if (activeCall && activeCall.callId === data.call_id) {
        const arr = (activeCall.participants || []).filter((x) => String(x) !== String(data.user_id));
        setActiveCall({ ...activeCall, participants: arr });
      }
    };
    const handleEnded = (data: { call_id: string }) => {
      if (activeCall && activeCall.callId === data.call_id) {
        setActiveCall(null);
      }
    };
    socket.on('incoming-call', handleIncoming);
    socket.on('call-accepted', handleAccepted);
    socket.on('call-declined', handleDeclined);
    socket.on('participant-joined', handleJoined);
    socket.on('participant-left', handleLeft);
    socket.on('call-ended', handleEnded);
    return () => {
      socket.off('incoming-call', handleIncoming);
      socket.off('call-accepted', handleAccepted);
      socket.off('call-declined', handleDeclined);
      socket.off('participant-joined', handleJoined);
      socket.off('participant-left', handleLeft);
      socket.off('call-ended', handleEnded);
    };
  }, [socket, currentUser, activeCall, incomingCall]);

  return {
    incomingCall,
    activeCall,
    startCall,
    acceptCall,
    rejectCall,
    endCall,
    localStream: localStreamRef.current,
    remoteStreams,
    ringtonePlaying,
    isMicMuted,
    isCameraOff,
    toggleMic,
    toggleCamera,
  };
}
