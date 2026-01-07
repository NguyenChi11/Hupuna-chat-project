import { useRef, useState } from 'react';
import type { Socket } from 'socket.io-client';

type CallType = 'voice' | 'video';
type Member = string | { _id: string };

export function useCallSession({
  socketRef,
  roomId,
  currentUserId,
  isGroup,
  selectedChat,
  onCallNotify,
}: {
  socketRef: React.MutableRefObject<Socket | null>;
  roomId: string;
  currentUserId: string;
  isGroup: boolean;
  selectedChat?: { _id?: string; members?: Member[] } | null;
  onCallNotify?: (payload: {
    status: 'answered' | 'timeout';
    type: CallType;
    durationSec?: number;
    wasIncoming: boolean;
    roomId: string;
    counterpartId?: string | null;
  }) => void;
}) {
  const [callActive] = useState(false);
  const [callType] = useState<CallType | null>(null);
  const [callStartAt] = useState<number | null>(null);
  const [callConnecting] = useState(false);
  const [incomingCall, setIncomingCall] = useState<{
    from: string;
    type: CallType;
    roomId: string;
    sdp: RTCSessionDescriptionInit;
  } | null>(null);
  const [roomCallActive] = useState(false);
  const [roomCallType] = useState<CallType | null>(null);
  const [roomParticipants] = useState<string[]>([]);
  const [activeRoomId] = useState<string>(roomId);
  const [counterpartId] = useState<string | null>(null);
  const [micEnabled] = useState(true);
  const [camEnabled] = useState(true);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const [remoteStreamsState] = useState<Map<string, MediaStream>>(new Map());

  const startCall = async () => {};
  const endCall = () => {};
  const toggleMic = () => {};
  const toggleCamera = () => {};
  const acceptIncomingCall = async () => {};
  const acceptIncomingCallWith = async (_payload: { from: string; type: CallType; roomId: string; sdp: RTCSessionDescriptionInit }) => {};

  return {
    callActive,
    callType,
    callStartAt,
    callConnecting,
    remoteStreamsState,
    incomingCall,
    localVideoRef,
    startCall,
    endCall,
    toggleMic,
    toggleCamera,
    acceptIncomingCall,
    acceptIncomingCallWith,
    setIncomingCall,
    micEnabled,
    camEnabled,
    roomCallActive,
    roomCallType,
    roomParticipants,
    activeRoomId,
    counterpartId,
  };
}
