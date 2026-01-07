'use client';

import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { io } from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';

import HomeDesktop from '@/components/(home)/HomeDesktop';
import HomeMobile from '@/components/(home)/HomeMobile';
import CommonGroupsMobile from '@/components/(group)/CommonGroupsMobile';
import AddToGroupModal from '@/components/(chatPopup)/components/AddToGroupModal';
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
import { useSearchParams } from 'next/navigation';

function GroupPageContent() {
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
  } = useHomePage({ onlyGroups: true });
  const searchParams = useSearchParams();
  const withUserId = searchParams?.get('with') || null;
  const openGroupId = searchParams?.get('open') || null;
  const filteredGroups = useMemo(() => {
    if (!withUserId) return groups;
    const id = String(withUserId);
    const getId = (m: unknown): string => {
      if (typeof m === 'string' || typeof m === 'number') return String(m);
      if (typeof m === 'object' && m !== null) {
        const mm = m as { _id?: unknown; id?: unknown };
        if (mm._id != null) return String(mm._id);
        if (mm.id != null) return String(mm.id);
      }
      return '';
    };
    return groups.filter((g) => Array.isArray(g.members) && g.members.map(getId).includes(id));
  }, [groups, withUserId]);

  const socketRef = useRef<ReturnType<typeof io> | null>(null);
  const [incomingCallHome, setIncomingCallHome] = useState<{
    from: string;
    type: 'voice' | 'video';
    roomId: string;
    sdp: RTCSessionDescriptionInit;
  } | null>(null);

  const [showAddToGroupModal, setShowAddToGroupModal] = useState(false);
  const partnerUser = useMemo(() => {
    if (!withUserId) return null;
    return allUsers.find((u) => String(u._id) === String(withUserId)) || null;
  }, [withUserId, allUsers]);

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
    socket.off('call_answer'); // ✅ THÊM LISTENER MỚI

    const handleOffer = () => {};

    const handleEnd = () => {
      stopGlobalRingTone(); // ✅ DÙNG GLOBAL
      setIncomingCallHome(null);
    };

    const handleReject = () => {
      stopGlobalRingTone(); // ✅ DÙNG GLOBAL
      setIncomingCallHome(null);
    };

    // ✅ THÊM HANDLER call_answer
    const handleAnswer = () => {
      stopGlobalRingTone(); // ✅ DÙNG GLOBAL
    };

    socket.on('call_offer', handleOffer);
    socket.on('call_end', handleEnd);
    socket.on('call_reject', handleReject);
    socket.on('call_answer', handleAnswer); // ✅ LẮNG NGHE call_answer

    return () => {
      socket.off('call_offer', handleOffer);
      socket.off('call_end', handleEnd);
      socket.off('call_reject', handleReject);
      socket.off('call_answer', handleAnswer);
    };
  }, [currentUser]);

  useEffect(() => {
    if (!openGroupId) return;
    const target = groups.find((g) => String(g._id) === String(openGroupId));
    if (target) {
      setSelectedChat(target);
    }
  }, [openGroupId, groups, setSelectedChat]);

  if (isLoading || !currentUser) {
    return <div className="flex h-screen items-center justify-center bg-white">Loading...</div>;
  }

  return (
    <div className="flex h-screen w-full font-sans">
      <HomeDesktop
        onNavigateToMessage={handleNavigateToMessage}
        currentUser={currentUser}
        groups={filteredGroups}
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
        onlyGroups={true}
      />

      {withUserId && partnerUser ? (
        <div className="md:hidden w-full h-full">
          <CommonGroupsMobile
            groups={filteredGroups}
            partner={partnerUser}
            onBack={() => {
              if (typeof window !== 'undefined') window.history.back();
            }}
            onShowCreateGroup={() => {
              // Hack to set initial member for create group
              try {
                const w = window as Window & { __createGroupInitialMemberIds?: string[] };
                w.__createGroupInitialMemberIds = [String(partnerUser._id)];
              } catch {}
              setShowCreateGroupModal(true);
            }}
            onShowAddToGroup={() => setShowAddToGroupModal(true)}
          />
        </div>
      ) : (
        <HomeMobile
          currentUser={currentUser}
          groups={filteredGroups}
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
          onlyGroups={true}
        />
      )}

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

      {showAddToGroupModal && partnerUser && (
        <AddToGroupModal
          isOpen={showAddToGroupModal}
          onClose={() => setShowAddToGroupModal(false)}
          currentUser={currentUser}
          selectedChat={partnerUser}
          onShowCreateGroup={() => {
            try {
              const w = window as Window & { __createGroupInitialMemberIds?: string[] };
              w.__createGroupInitialMemberIds = [String(partnerUser._id)];
            } catch {}
            setShowAddToGroupModal(false);
            setShowCreateGroupModal(true);
          }}
          reLoad={fetchAllData}
        />
      )}

      
    </div>
  );
}

export default function GroupPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Đang tải...</div>}>
      <GroupPageContent />
    </Suspense>
  );
}
