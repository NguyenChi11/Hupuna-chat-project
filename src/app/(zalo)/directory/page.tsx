'use client';

import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import IncomingCallModal from '@/components/(call)/IncomingCallModal';

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
import { stopGlobalRingTone } from '@/utils/callRing';

export default function DirectoryPage() {
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
  } = useHomePage({ onlyPersonal: true });

  const socketRef = useRef<ReturnType<typeof io> | null>(null);
  // Overlay gọi đến được xử lý ở layout.tsx (toàn cục)

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

    const socket = (socketRef.current = io(resolveSocketUrl(), {
      transports: ['websocket'],
      withCredentials: false,
    }));

    socket.emit('join_user', { userId: String(currentUser._id) });

    // Cleanup cũ
    socket.off('call_offer');
    socket.off('call_end');
    socket.off('call_reject');
    socket.off('call_answer');

    const handleOffer = () => {};

    const handleEnd = () => {
      stopGlobalRingTone();
      try {
        localStorage.removeItem('pendingIncomingCall');
      } catch {}
    };

    const handleReject = () => {
      stopGlobalRingTone();
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

  if (isLoading || !currentUser) {
    return <div className="flex h-screen items-center justify-center bg-white">Loading...</div>;
  }

  return (
    <div className="flex h-screen w-full font-sans">
      <HomeDesktop
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
        onNavigateToMessage={handleNavigateToMessage}
        onlyPersonal={true}
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
        onlyPersonal={true}
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
        onGroupCreated={(group?: GroupConversation) => {
          if (group) {
            setSelectedChat(group);
          }
          setShowCreateGroupModal(false);
        }}
        reLoad={fetchAllData}
      />

      {/* Overlay cuộc gọi đến đã được xử lý ở layout.tsx */}
    </div>
  );
}
