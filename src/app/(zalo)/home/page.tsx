'use client';

import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';

import HomeDesktop from '@/components/(home)/HomeDesktop';
import HomeMobile from '@/components/(home)/HomeMobile';
import HomeOverlays from '@/components/(home)/HomeOverlays';
import { useHomePage } from '@/hooks/useHomePage';
import type { GroupConversation } from '@/types/Group';
import {
  subscribeNotification,
  addUserTags,
  loginOneSignal,
  ensureSubscribed,
  waitForOneSignalReady,
} from '@/lib/onesignal';
import { playGlobalRingTone, stopGlobalRingTone } from '@/utils/callRing';
import { useCallSession } from '@/hooks/useCallSession';
import ModalCall from '@/components/(call)/ModalCall';
import IncomingCallModal from '@/components/(call)/IncomingCallModal';

export default function HomePage() {
  const {
    currentUser,
    isLoading,
    allUsers,
    groups,
    selectedChat,
    searchTerm,
    setSearchTerm,
    showCreateGroupModal,
    setShowCreateGroupModal,
    showGlobalSearchModal,
    globalSearchTerm,
    globalSearchResults,
    scrollToMessageId,
    setScrollToMessageId,
    roomSearchKeyword,
    setRoomSearchKeyword,
    handleOpenGlobalSearch,
    handleGlobalSearch,
    handleSelectContact,
    handleNavigateToMessage,
    fetchAllData,
    handleChatAction,
    handleSelectChat,
    setSelectedChat,
  } = useHomePage();

  const socketRef = useRef<ReturnType<typeof io> | null>(null);
  const [incomingCallHome, setIncomingCallHome] = useState<{
    from: string;
    type: 'voice' | 'video';
    roomId: string;
    sdp: RTCSessionDescriptionInit;
  } | null>(null);

  const isGroup = !!(selectedChat && 'isGroup' in selectedChat && selectedChat.isGroup === true);
  const getOneToOneRoomId = (user1Id: string | number, user2Id: string | number) => {
    return [user1Id, user2Id].sort().join('_');
  };
  const roomId =
    selectedChat && currentUser
      ? isGroup
        ? String(selectedChat._id)
        : getOneToOneRoomId(String(currentUser._id), String(selectedChat._id))
      : '';

  const {
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
  } = useCallSession({
    socketRef,
    roomId,
    currentUserId: String(currentUser?._id || ''),
    isGroup,
    selectedChat,
  });

  const [callTicker, setCallTicker] = useState(0);
  useEffect(() => {
    if (!callActive) return;
    const id = window.setInterval(() => setCallTicker((x) => x + 1), 1000);
    return () => window.clearInterval(id);
  }, [callActive]);

  const [callWindowMin, setCallWindowMin] = useState(false);
  const [callModalSize, setCallModalSize] = useState<{ w: number; h: number | null }>({ w: 320, h: null });
  const prevSizeRef = useRef<{ w: number; h: number | null } | null>(null);
  const callModalRef = useRef<HTMLDivElement | null>(null);
  const [callWindowPos, setCallWindowPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });

  const toggleMinimize = () => {
    if (!callWindowMin) {
      prevSizeRef.current = { ...callModalSize };
      const w = callType === 'video' ? 280 : 260;
      const h = callType === 'video' ? 160 : 180;
      setCallModalSize({ w, h });
      setCallWindowMin(true);
    } else {
      const prev = prevSizeRef.current;
      if (prev) setCallModalSize(prev);
      setCallWindowMin(false);
    }
  };
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const state = { startX: e.clientX, startY: e.clientY, originX: callWindowPos.x, originY: callWindowPos.y };
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - state.startX;
      const dy = ev.clientY - state.startY;
      const x = state.originX + dx;
      const y = state.originY + dy;
      const maxX = Math.max(8, window.innerWidth - (callModalSize.w + 24));
      const maxY = Math.max(8, window.innerHeight - ((callModalSize.h ?? 320) + 24));
      setCallWindowPos({ x: Math.min(Math.max(8, x), maxX), y: Math.min(Math.max(8, y), maxY) });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const handleResizeStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const originW = callModalSize.w;
    const originH = callModalSize.h ?? (callType === 'video' ? 420 : 300);
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const minW = 240;
      const minH = 150;
      const maxW = Math.max(320, window.innerWidth - 32);
      const maxH = Math.max(200, window.innerHeight - 32);
      const w = Math.min(Math.max(originW + dx, minW), maxW);
      const h = Math.min(Math.max(originH + dy, minH), maxH);
      setCallModalSize({ w, h });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      try {
        localStorage.setItem(
          'callModalSize',
          JSON.stringify({ w: callModalSize.w, h: callModalSize.h ?? (callType === 'video' ? 420 : 300) }),
        );
      } catch {}
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const d = (e as CustomEvent).detail || {};
        const t = d.type === 'video' ? 'video' : 'voice';
        void startCall(t);
      } catch {}
    };
    window.addEventListener('startCall', handler as EventListener);
    return () => window.removeEventListener('startCall', handler as EventListener);
  }, [startCall]);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('pendingIncomingCall') : null;
      if (!raw) return;
      if (callActive || callConnecting) return;
      const data = JSON.parse(raw) as {
        roomId: string;
        from: string;
        type: 'voice' | 'video';
        sdp: RTCSessionDescriptionInit;
      };
      if (!data || String(data.roomId) !== String(roomId)) return;
      (async () => {
        await acceptIncomingCallWith({
          from: String(data.from),
          type: data.type,
          roomId: String(data.roomId),
          sdp: data.sdp,
        });
        try {
          localStorage.removeItem('pendingIncomingCall');
        } catch {}
      })();
    } catch {}
  }, [roomId, incomingCall, callActive, callConnecting, acceptIncomingCallWith]);

  useEffect(() => {
    const run = async () => {
      if (!currentUser || !currentUser._id) return;
      await waitForOneSignalReady();
      await subscribeNotification();
      const subId = await ensureSubscribed();
      await loginOneSignal(String(currentUser._id));
      await addUserTags({ userId: String(currentUser._id) });
      if (typeof window !== 'undefined') {
        try {
          console.log('OneSignal subscription id', subId);
        } catch {}
      }
      if (subId) {
        try {
          await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'addOneSignalSub',
              currentUserId: String(currentUser._id),
              data: { subId: String(subId) },
            }),
          });
        } catch {}
      }
    };
    void run();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser || !currentUser._id) return;
    if (!socketRef.current || !socketRef.current.connected) {
      socketRef.current = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      socketRef.current.emit('join_user', { userId: String(currentUser._id) });
    }
    const socket = socketRef.current!;
    socket.off('call_offer');
    socket.off('call_end');
    socket.off('call_reject');
    socket.off('call_answer');

    const handleOffer = (data: {
      roomId: string;
      target: string;
      from: string;
      type: 'voice' | 'video';
      sdp: RTCSessionDescriptionInit;
    }) => {
      if (String(data.target) !== String(currentUser._id)) return;
      if (selectedChat) return;
      if (incomingCallHome) return;
      setIncomingCallHome({
        from: String(data.from),
        type: data.type,
        roomId: String(data.roomId),
        sdp: data.sdp,
      });
      playGlobalRingTone();
    };

    const handleEnd = () => {
      stopGlobalRingTone();
      setIncomingCallHome(null);
      try {
        localStorage.removeItem('pendingIncomingCall');
      } catch {}
    };

    const handleReject = () => {
      stopGlobalRingTone();
      setIncomingCallHome(null);
      try {
        localStorage.removeItem('pendingIncomingCall');
      } catch {}
    };

    const handleAnswer = () => {
      stopGlobalRingTone();
    };

    socket.on('call_offer', handleOffer);
    socket.on('call_end', handleEnd);
    socket.on('call_reject', handleReject);
    socket.on('call_answer', handleAnswer);

    return () => {
      socket.off('call_offer', handleOffer);
      socket.off('call_end', handleEnd);
      socket.off('call_reject', handleReject);
      socket.off('call_answer', handleAnswer);
    };
  }, [currentUser]);

  useEffect(() => {
    const close = () => setIncomingCallHome(null);
    window.addEventListener('closeIncomingOverlay', close as EventListener);
    return () => window.removeEventListener('closeIncomingOverlay', close as EventListener);
  }, []);

  useEffect(() => {
    if (!selectedChat) {
      try {
        const raw = localStorage.getItem('__return_room_results__');
        if (raw) {
          const data = JSON.parse(raw);
          if (data && data.origin === 'global') {
            if (!showGlobalSearchModal) {
              handleOpenGlobalSearch();
            }
          }
        }
      } catch {}
    }
  }, [selectedChat, showGlobalSearchModal, handleOpenGlobalSearch]);

  if (isLoading || !currentUser) {
    return <div className="flex h-screen items-center justify-center bg-white">Loading...</div>;
  }
  
  return (
    <div className="flex h-screen w-full font-sans">
      {/* Theo dõi việc ChatPopup đã xử lý pendingIncomingCall để đóng overlay trên mobile list */}
      {incomingCallHome && (
        <Watcher />
      )}
      <HomeDesktop
        onNavigateToMessage={handleNavigateToMessage}
        currentUser={currentUser}
        groups={groups}
        allUsers={allUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowCreateGroupModal={setShowCreateGroupModal}
        selectedChat={selectedChat}
        onSelectChat={handleSelectChat}
        onBackFromChat={() => setSelectedChat(null)}
        onChatAction={handleChatAction}
        scrollToMessageId={scrollToMessageId}
        onScrollComplete={() => setScrollToMessageId(null)}
        roomSearchKeyword={roomSearchKeyword}
        setRoomSearchKeyword={setRoomSearchKeyword}
        fetchAllData={fetchAllData}
        onShowGlobalSearch={handleOpenGlobalSearch}
      />

      <HomeMobile
        currentUser={currentUser}
        groups={groups}
        allUsers={allUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowCreateGroupModal={setShowCreateGroupModal}
        selectedChat={selectedChat}
        onSelectChat={handleSelectChat}
        onBackFromChat={() => setSelectedChat(null)}
        onChatAction={handleChatAction}
        scrollToMessageId={scrollToMessageId}
        onScrollComplete={() => {
          setScrollToMessageId(null);
          setRoomSearchKeyword(null);
        }}
        roomSearchKeyword={roomSearchKeyword}
        setRoomSearchKeyword={setRoomSearchKeyword}
        fetchAllData={fetchAllData}
        onShowGlobalSearch={handleOpenGlobalSearch}
        onNavigateToMessage={handleNavigateToMessage}
      />

      <HomeOverlays
        currentUser={currentUser}
        allUsers={allUsers}
        showGlobalSearchModal={showGlobalSearchModal}
        globalSearchTerm={globalSearchTerm}
        globalSearchResults={globalSearchResults}
        onCloseGlobalSearch={handleOpenGlobalSearch}
        onSearch={handleGlobalSearch}
        onNavigateToMessage={handleNavigateToMessage}
        onSelectContact={handleSelectContact}
        showCreateGroupModal={showCreateGroupModal}
        onCloseCreateGroup={() => setShowCreateGroupModal(false)}
        // Sau khi tạo nhóm:
        // - Đóng modal
        // - Nếu có group mới trả về -> auto chọn group đó để mở giao diện chat
        onGroupCreated={(group?: GroupConversation) => {
          if (group) {
            setSelectedChat(group);
          }
          setShowCreateGroupModal(false);
        }}
        reLoad={fetchAllData}
      />

      {(callActive || incomingCall || callConnecting) && (
        <div
          className="fixed z-[2000]"
          style={{ left: callWindowPos.x, top: callWindowPos.y, width: callModalSize.w }}
        >
          <div
            className="cursor-move flex items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none"
            onMouseDown={handleDragStart}
          >
            <span className="text-sm">{callActive ? 'Đang gọi' : incomingCall ? 'Cuộc gọi đến' : 'Đang kết nối...'}</span>
            <span className="flex items-center gap-3">
              <button
                className="text-xs px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
                onClick={toggleMinimize}
              >
                {callWindowMin ? 'Khôi phục' : 'Thu nhỏ'}
              </button>
              <span className="text-xs">{callType === 'video' ? 'Video' : 'Thoại'}</span>
            </span>
          </div>
          <div
            ref={callModalRef}
            className="rounded-b-xl pt-2 p-4 backdrop-blur-sm relative"
            style={{
              width: callModalSize.w,
              height: callModalSize.h ?? undefined,
              maxWidth: 'calc(100vw - 2rem)',
              maxHeight: 'calc(100vh - 2rem)',
            }}
          >
            {!callActive &&
              incomingCall &&
              (() => {
                const rid = String(incomingCall.roomId || '');
                const parts = rid.split('_').filter(Boolean);
                const isOneToOneIncoming = parts.length === 2;
                const group = !isOneToOneIncoming ? groups.find((g) => String(g._id) === rid) : null;
                const caller = allUsers.find((u) => String(u._id) === String(incomingCall?.from));
                const avatar = isOneToOneIncoming ? caller?.avatar : group?.avatar;
                const name = isOneToOneIncoming ? caller?.name || (selectedChat as any)?.name : group?.name || (selectedChat as any)?.name;
                return (
                  <IncomingCallModal
                    avatar={avatar}
                    name={name}
                    callType={incomingCall?.type === 'video' ? 'video' : 'voice'}
                    onAccept={async () => {
                      await acceptIncomingCall();
                    }}
                    onReject={() => {
                      const from = incomingCall?.from;
                      const targetRoom = incomingCall?.roomId || roomId;
                      socketRef.current?.emit('call_reject', {
                        roomId: String(targetRoom),
                        targets: from ? [String(from)] : [],
                      });
                      setIncomingCall(null);
                      stopGlobalRingTone();
                      try {
                        localStorage.removeItem('pendingIncomingCall');
                      } catch {}
                    }}
                  />
                );
              })()}
            {!callActive &&
              callConnecting &&
              (() => {
                const parts = String(roomId).split('_');
                const otherId = isGroup
                  ? null
                  : parts.find((p) => p && p !== String(currentUser._id)) || String(selectedChat?._id || '');
                const other = !isGroup ? allUsers.find((u) => String(u._id) === String(otherId)) : null;
                const avatar = isGroup ? (selectedChat as any)?.avatar : other?.avatar;
                const name = isGroup ? (selectedChat as any)?.name : other?.name || (selectedChat as any)?.name;
                return (
                  <ModalCall
                    avatar={avatar}
                    name={name}
                    mode="connecting"
                    callType={callType === 'video' ? 'video' : 'voice'}
                    onEndCall={() => endCall('local')}
                  />
                );
              })()}
            {callActive &&
              (() => {
                const remoteIds = Array.from(remoteStreamsState.keys());
                const participantOtherId =
                  roomParticipants && roomParticipants.length > 0
                    ? roomParticipants.find((id) => String(id) !== String(currentUser._id))
                    : undefined;
                const otherId =
                  counterpartId ||
                  participantOtherId ||
                  remoteIds[0] ||
                  incomingCall?.from ||
                  String(activeRoomId || roomId)
                    .split('_')
                    .find((p) => p && p !== String(currentUser._id)) ||
                  (!isGroup ? String(selectedChat?._id || '') : null);
                const other = otherId ? allUsers.find((u) => String(u._id) === String(otherId)) : null;
                const isOneToOneCall = counterpartId
                  ? true
                  : roomParticipants && roomParticipants.length > 0
                  ? roomParticipants.length === 2
                  : remoteIds.length <= 1;
                const currentCallRoomId = String(activeRoomId || roomId);
                const currentGroup = groups.find((g) => String(g._id) === currentCallRoomId);
                const avatar = isOneToOneCall ? other?.avatar : currentGroup?.avatar || (selectedChat as any)?.avatar;
                const name = isOneToOneCall ? other?.name || (selectedChat as any)?.name : currentGroup?.name || (selectedChat as any)?.name;
                const remotePeers = Array.from(remoteStreamsState.entries()).map(([uid, stream]) => {
                  const u = allUsers.find((x) => String(x._id) === String(uid));
                  return { userId: uid, stream, name: u?.name, avatar: u?.avatar };
                });
                const participantIds = new Set<string>();
                roomParticipants.forEach((id) => participantIds.add(String(id)));
                remoteIds.forEach((id) => participantIds.add(String(id)));
                participantIds.delete(String(currentUser._id));
                const participantsList = Array.from(participantIds).map((uid) => {
                  const u = allUsers.find((x) => String(x._id) === String(uid));
                  return { userId: uid, name: u?.name, avatar: u?.avatar };
                });
                return (
                  <ModalCall
                    avatar={avatar}
                    name={name}
                    mode="active"
                    callType={callType === 'video' ? 'video' : 'voice'}
                    callStartAt={callStartAt}
                    localVideoRef={localVideoRef}
                    currentUserName={currentUser.name}
                    currentUserAvatar={currentUser.avatar}
                    remotePeers={remotePeers}
                    participants={participantsList}
                    micEnabled={micEnabled}
                    camEnabled={camEnabled}
                    onToggleMic={toggleMic}
                    onToggleCamera={toggleCamera}
                    onEndCall={() => endCall('local')}
                  />
                );
              })()}
            <div
              className="absolute bottom-1 right-1 w-4 h-4 rounded cursor-nwse-resize bg-white/60 hover:bg-white/80"
              onMouseDown={handleResizeStart}
              title="Kéo để thay đổi kích thước"
            />
          </div>
        </div>
      )}

      {incomingCallHome && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center">
          <div className=" rounded-xl w-full max-w-md p-4">
            {(() => {
              const caller = allUsers.find((u) => String(u._id) === String(incomingCallHome.from));
              const avatar = caller?.avatar;
              const name = caller?.name || 'Cuộc gọi đến';
              return (
                <IncomingCallModal
                  avatar={avatar}
                  name={name}
                  callType={incomingCallHome.type}
                  onAccept={() => {
                    try {
                      localStorage.setItem('pendingIncomingCall', JSON.stringify(incomingCallHome));
                    } catch {}
                    const group = groups.find((g) => String(g._id) === String(incomingCallHome.roomId));
                    if (group) {
                      setSelectedChat(group as unknown as GroupConversation);
                    } else {
                      const c = allUsers.find((u) => String(u._id) === String(incomingCallHome.from));
                      if (c) {
                        setSelectedChat(c as unknown as GroupConversation);
                      }
                    }
                    stopGlobalRingTone();
                  }}
                  onReject={() => {
                    socketRef.current?.emit('call_reject', {
                      roomId: incomingCallHome.roomId,
                      targets: [String(incomingCallHome.from)],
                    });
                    setIncomingCallHome(null);
                    stopGlobalRingTone();
                  }}
                />
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

function Watcher() {
  const seenRef = useRef(false);
  useEffect(() => {
    const check = () => {
      try {
        const raw = localStorage.getItem('pendingIncomingCall');
        if (raw) {
          seenRef.current = true;
          return;
        }
        if (seenRef.current) {
          const evt = new CustomEvent('closeIncomingOverlay');
          window.dispatchEvent(evt);
        }
      } catch {}
    };
    const id = setInterval(check, 300);
    window.addEventListener('storage', check);
    return () => {
      clearInterval(id);
      window.removeEventListener('storage', check);
    };
  }, []);
  return null;
}
