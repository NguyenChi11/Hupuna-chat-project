'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
import { useLiveKitSession } from '@/hooks/useLiveKitSession';
import LiveKitCall from '@/components/(call)/LiveKitCall';
import IncomingCallModal from '@/components/(call)/IncomingCallModal';
import ModalCall from '@/components/(call)/ModalCall';

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
  const [incomingCallHome, setIncomingCallHome] = useState<{ from: string; type: 'voice' | 'video'; roomId: string } | null>(null);

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
  } = useLiveKitSession({
    socketRef,
    roomId,
    currentUserId: String(currentUser?._id || ''),
    isGroup,
    selectedChat,
  });

  const [callWindowMin, setCallWindowMin] = useState(false);
  const [callWindowHidden, setCallWindowHidden] = useState(false);

  const [callModalSize, setCallModalSize] = useState<{ w: number; h: number | null }>({ w: 320, h: 150 });
  const prevSizeRef = useRef<{ w: number; h: number | null } | null>(null);
  const callModalRef = useRef<HTMLDivElement | null>(null);
  const [callWindowPos, setCallWindowPos] = useState<{ x: number; y: number }>({ x: 24, y: 24 });
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const apply = () => setIsDesktop(typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);
  useEffect(() => {
    const hide = () => setCallWindowHidden(true);
    window.addEventListener('hideCallOverlay', hide as EventListener);
    return () => window.removeEventListener('hideCallOverlay', hide as EventListener);
  }, []);

  useEffect(() => {
    try {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
      if (isDesktop) {
        const w = Math.floor(window.innerWidth * 0.5);
        const h = Math.floor(window.innerHeight * 0.5);
        setCallModalSize({ w: Math.max(400, w), h: Math.max(300, h) });
      }
    } catch {}
  }, []);

  const toggleMinimize = () => {
    if (!callWindowMin) {
      prevSizeRef.current = { ...callModalSize };
      const w = callType === 'video' ? 300 : 280;
      const h = callType === 'video' ? 180 : 200;
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
  const handleTouchDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const t = e.touches[0];
    const state = { startX: t.clientX, startY: t.clientY, originX: callWindowPos.x, originY: callWindowPos.y };
    const onMove = (ev: TouchEvent) => {
      const tt = ev.touches[0];
      const dx = tt.clientX - state.startX;
      const dy = tt.clientY - state.startY;
      const x = state.originX + dx;
      const y = state.originY + dy;
      const maxX = Math.max(8, window.innerWidth - (callModalSize.w + 24));
      const maxY = Math.max(8, window.innerHeight - ((callModalSize.h ?? 320) + 24));
      setCallWindowPos({ x: Math.min(Math.max(8, x), maxX), y: Math.min(Math.max(8, y), maxY) });
    };
    const onUp = () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
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
  const handleResizeTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const t = e.touches[0];
    const startX = t.clientX;
    const startY = t.clientY;
    const originW = callModalSize.w;
    const originH = callModalSize.h ?? (callType === 'video' ? 420 : 300);
    const onMove = (ev: TouchEvent) => {
      const tt = ev.touches[0];
      const dx = tt.clientX - startX;
      const dy = tt.clientY - startY;
      const minW = 240;
      const minH = 150;
      const maxW = Math.max(320, window.innerWidth - 32);
      const maxH = Math.max(200, window.innerHeight - 32);
      const w = Math.min(Math.max(originW + dx, minW), maxW);
      const h = Math.min(Math.max(originH + dy, minH), maxH);
      setCallModalSize({ w, h });
    };
    const onUp = () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      try {
        localStorage.setItem(
          'callModalSize',
          JSON.stringify({ w: callModalSize.w, h: callModalSize.h ?? (callType === 'video' ? 420 : 300) }),
        );
      } catch {}
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
  };

  const openBtnRef = useRef<HTMLDivElement | null>(null);
  const openBtnDraggingRef = useRef<boolean>(false);
  const handleOpenBtnDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = openBtnRef.current?.getBoundingClientRect();
    const bw = rect?.width ?? 140;
    const bh = rect?.height ?? 48;
    const st = { sx: e.clientX, sy: e.clientY, ox: callWindowPos.x, oy: callWindowPos.y };
    const onMove = (ev: MouseEvent) => {
      openBtnDraggingRef.current = true;
      const dx = ev.clientX - st.sx;
      const dy = ev.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
      setCallWindowPos({ x: nx, y: ny });
    };
    const onUp = () => {
      setTimeout(() => (openBtnDraggingRef.current = false), 0);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const handleOpenBtnTouchDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = openBtnRef.current?.getBoundingClientRect();
    const bw = rect?.width ?? 140;
    const bh = rect?.height ?? 48;
    const t = e.touches[0];
    const st = { sx: t.clientX, sy: t.clientY, ox: callWindowPos.x, oy: callWindowPos.y };
    const onMove = (ev: TouchEvent) => {
      openBtnDraggingRef.current = true;
      const tt = ev.touches[0];
      const dx = tt.clientX - st.sx;
      const dy = tt.clientY - st.sy;
      const nx = Math.min(Math.max(8, st.ox + dx), Math.max(8, (window.innerWidth || 360) - bw - 8));
      const ny = Math.min(Math.max(8, st.oy + dy), Math.max(8, (window.innerHeight || 640) - bh - 8));
      setCallWindowPos({ x: nx, y: ny });
    };
    const onUp = () => {
      setTimeout(() => (openBtnDraggingRef.current = false), 0);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp, { passive: false });
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

  useEffect(() => {}, []);

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

    const handleOffer = (data: { roomId: string; target: string; from: string; type: 'voice' | 'video' }) => {
      if (String(data.target) !== String(currentUser._id)) return;
      if (selectedChat) return;
      if (incomingCallHome) return;
      setIncomingCallHome({
        from: String(data.from),
        type: data.type,
        roomId: String(data.roomId),
      });
      playGlobalRingTone();
    };

    const handleEnd = () => {
      stopGlobalRingTone();
      setIncomingCallHome(null);
    };

    const handleReject = () => {
      stopGlobalRingTone();
      setIncomingCallHome(null);
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
          className={`fixed z-[2000] ${isDesktop ? '' : 'inset-0 w-full h-full'}`}
          style={
            isDesktop
              ? {
                  left: callWindowPos.x,
                  top: callWindowPos.y,
                  width: callModalSize.w,
                  display: callWindowHidden ? 'none' : 'block',
                }
              : { display: callWindowHidden ? 'none' : 'block' }
          }
        >
          {isDesktop && (
            <div
              className="cursor-move flex items-center justify-between px-3 py-2 bg-black/70 text-white rounded-t-xl select-none"
              onMouseDown={handleDragStart}
              onTouchStart={handleTouchDragStart}
            >
              <span className="text-sm">{callActive ? 'Đang gọi' : incomingCall ? 'Cuộc gọi đến' : 'Đang kết nối...'}</span>
              <span className="flex items-center gap-3">
                <button
                  className="text-xs px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
                  onClick={toggleMinimize}
                >
                  {callWindowMin ? 'Khôi phục' : 'Thu nhỏ'}
                </button>
                <button
                  className="text-xs px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
                  onClick={() => setCallWindowHidden(true)}
                >
                  Ẩn
                </button>
                <span className="text-xs">{callType === 'video' ? 'Video' : 'Thoại'}</span>
              </span>
            </div>
          )}
          <div
            ref={callModalRef}
            className={`${isDesktop ? 'rounded-b-xl pt-2 p-4' : 'rounded-none p-0 h-full'} backdrop-blur-sm relative`}
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
                const name = isOneToOneIncoming
                  ? caller?.name || ''
                  : group?.name || (selectedChat as GroupConversation)?.name || '';
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
                const avatar = isGroup ? (selectedChat as GroupConversation)?.avatar : other?.avatar;
                const name = isGroup ? (selectedChat as GroupConversation)?.name : other?.name || '';
                return (
                  <ModalCall
                    avatar={avatar || '/logo/avata.webp'}
                    name={name || ''}
                    mode="connecting"
                    callType={callType === 'video' ? 'video' : 'voice'}
                    onEndCall={() => endCall('local')}
                  />
                );
              })()}
            {callActive &&
              (() => {
                const participantOtherId =
                  roomParticipants && roomParticipants.length > 0
                    ? roomParticipants.find((id) => String(id) !== String(currentUser._id))
                    : undefined;
                const otherId =
                  counterpartId ||
                  participantOtherId ||
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
                  : true;
                const currentCallRoomId = String(activeRoomId || roomId);
                const currentGroup = groups.find((g) => String(g._id) === currentCallRoomId);
                const avatar = isOneToOneCall ? other?.avatar : currentGroup?.avatar || (selectedChat as GroupConversation)?.avatar;
                const name = isOneToOneCall ? other?.name || '' : currentGroup?.name || (selectedChat as GroupConversation)?.name || '';
                return (
                  <div className="relative h-full">
                    {livekitToken && livekitUrl ? (
                      <LiveKitCall
                        serverUrl={livekitUrl}
                        token={livekitToken}
                        onDisconnected={() => endCall('local')}
                        className="rounded-lg overflow-hidden h-full bg-black"
                        titleName={name}
                        callStartAt={callStartAt}
                        avatarUrl={avatar || '/logo/avata.webp'}
                        myName={currentUser.name}
                        myAvatarUrl={currentUser.avatar}
                        localPreviewSize={{ w: 180, h: 110 }}
                      />
                    ) : (
                      <div className="bg-black/60 text-white rounded-xl p-4">Đang chuẩn bị cuộc gọi...</div>
                    )}
                  </div>
                );
              })()}
            <div
              className="absolute bottom-1 right-1 w-4 h-4 rounded cursor-nwse-resize bg-white/60 hover:bg-white/80"
              onMouseDown={handleResizeStart}
              onTouchStart={handleResizeTouchStart}
              title="Kéo để thay đổi kích thước"
            />
          </div>
        </div>
      )}
      {(callActive || incomingCall || callConnecting) && callWindowHidden && (
        <div
          ref={openBtnRef}
          className="fixed z-[2000] cursor-move"
          style={{ left: callWindowPos.x, top: callWindowPos.y }}
          onMouseDown={handleOpenBtnDragStart}
          onTouchStart={handleOpenBtnTouchDragStart}
        >
          <button
            className="cursor-pointer cursor-move px-3 py-2 rounded-full bg-green-500 text-white shadow-md"
            onClick={() => {
              if (openBtnDraggingRef.current) return;
              setCallWindowHidden(false);
            }}
            title="Mở cửa sổ cuộc gọi"
          >
            Mở cuộc gọi
          </button>
        </div>
      )}

      {incomingCallHome && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center">
          <div className="w-full h-full md:h-auto md:max-w-md md:rounded-xl md:p-4 p-0">
            {(() => {
              const caller = allUsers.find((u) => String(u._id) === String(incomingCallHome.from));
              const avatar = caller?.avatar;
              const name = caller?.name || 'Cuộc gọi đến';
              return (
                <IncomingCallModal
                  avatar={avatar}
                  name={name}
                  callType={incomingCallHome.type}
                  onAccept={async () => {
                    setIncomingCall({
                      from: String(incomingCallHome.from),
                      type: incomingCallHome.type === 'video' ? 'video' : 'voice',
                      roomId: String(incomingCallHome.roomId),
                    });
                    await acceptIncomingCall();
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
                    setIncomingCallHome(null);
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
