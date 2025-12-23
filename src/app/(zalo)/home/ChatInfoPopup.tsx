'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { HiX } from 'react-icons/hi';
import ModalMembers from '@/components/base/ModalMembers';
import { GroupConversation, MemberInfo, GroupRole } from '@/types/Group';
import { User } from '@/types/User';
import { useChatInfoPopup } from '@/hooks/useChatInfoPopup';
import MediaPreviewModal from '@/components/(chatPopup)/MediaPreviewModal';
import GroupAvatarSection from '@/components/(chatPopup)/components/GroupAvatarSection';
import UserAvatarSection from '@/components/(chatPopup)/components/UserAvatarSection';
import ChatQuickActions from '@/components/(chatPopup)/components/ChatQuickActions';
import GroupDangerZone from '@/components/(chatPopup)/components/GroupDangerZone';
import GroupMembersSection from '@/components/(chatPopup)/components/GroupMembersSection';
import ReminderSection from '@/components/(chatPopup)/components/ReminderSection';
import PollSection from '@/components/(chatPopup)/components/PollSection';
import MediaSection from '@/components/(chatPopup)/components/MediaSection';
import FileSection from '@/components/(chatPopup)/components/FileSection';
import LinkSection from '@/components/(chatPopup)/components/LinkSection';
import RenameGroupModal from '@/components/(chatPopup)/components/RenameGroupModal';
import ConfirmGroupActionModal from '@/components/(chatPopup)/components/ConfirmGroupActionModal';
import { useChatContext } from '@/context/ChatContext';
import ReminderList from '@/components/(chatPopup)/components/ReminderList';
import PollList from '@/components/(chatPopup)/components/PollList';
import io from 'socket.io-client';
import { getProxyUrl, resolveSocketUrl } from '@/utils/utils';
import GroupInviteLinkSection from '@/components/(chatPopup)/components/GroupInviteLinkSection';
import ChatFlashSection from '@/components/(chatPopup)/components/ChatFlashSection';
import { HiPencil } from 'react-icons/hi';
import Image from 'next/image';

interface ChatInfoPopupProps {
  onClose: () => void;
  onShowCreateGroup: () => void;
  onMembersAdded: (users: User[]) => void;
  members?: MemberInfo[];
  onJumpToMessage: (messageId: string) => void;
  onMemberRemoved?: (memberId: string, memberName: string) => void;
  onRoleChange?: (memberId: string, memberName: string, newRole: 'ADMIN' | 'MEMBER') => void;
  onChatAction: (roomId: string, actionType: 'pin' | 'hide', isChecked: boolean, isGroup: boolean) => void;
  reLoad?: () => void;
  onLeftGroup?: () => void;
  onRefresh?: () => void;
  sendNotifyMessage?: (text: string, membersOverride?: string[]) => Promise<void> | void;
  lastUpdated?: number;
}

export default function ChatInfoPopup({
  onClose,
  onShowCreateGroup,
  onMembersAdded,
  members,
  onJumpToMessage,
  onMemberRemoved,
  onRoleChange,
  onChatAction,
  reLoad,
  onLeftGroup,
  onRefresh,
  sendNotifyMessage,
  lastUpdated,
}: ChatInfoPopupProps) {
  const { messages, currentUser, allUsers, chatName, isGroup, selectedChat } = useChatContext();
  const [openMember, setOpenMember] = useState(false);
  const [groupAvatar, setGroupAvatar] = useState<string | undefined>(
    isGroup ? (selectedChat as GroupConversation).avatar : undefined,
  );
  const [isGroupAvatarUploading, setIsGroupAvatarUploading] = useState(false);
  const [groupName, setGroupName] = useState(chatName || '');
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [renameInput, setRenameInput] = useState('');
  const [previewMedia, setPreviewMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  const [confirmAction, setConfirmAction] = useState<'leave' | 'disband' | null>(null);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isPollOpen, setIsPollOpen] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const myId = String(currentUser._id || (currentUser as { id?: string })?.id || '');
  const myRole = useMemo(() => {
    if (!isGroup || !members) return 'MEMBER';
    const member = members.find((m) => String(m._id || (m as { id?: string }).id) === myId);
    return (member?.role || 'MEMBER') as GroupRole;
  }, [members, myId, isGroup]);
  const [editingPersonalNickname, setEditingPersonalNickname] = useState<{
    id: string;
    name: string;
    currentVal: string;
  } | null>(null);
  const [editingSelfNickname, setEditingSelfNickname] = useState<{
    id: string;
    name: string;
    currentVal: string;
  } | null>(null);

  const canLeaveGroup = isGroup;
  const canDisbandGroup = isGroup && myRole === 'OWNER';

  useEffect(() => {
    setGroupName(chatName || '');
  }, [chatName]);

  const {
    localIsPinned,
    localIsHidden,
    openItems,
    activeMenuId,
    setActiveMenuId,
    handleChatActionClick,
    toggleItem,
    closeMenu,
    mediaList,
    mediaGroups,
    fileList,
    fileGroups,
    linkList,
    linkGroups,
    mediaTotal,
    fileTotal,
    linkTotal,
    isMediaExpanded,
    isFileExpanded,
    isLinkExpanded,
    fetchAssets,
  } = useChatInfoPopup({
    selectedChat,
    isGroup,
    messages,
    currentUser,
    onChatAction,
  });

  const getOneToOneRoomId = (user1Id: string | number, user2Id: string | number) => {
    return [user1Id, user2Id].sort().join('_');
  };
  const roomId = isGroup
    ? String((selectedChat as GroupConversation)._id)
    : getOneToOneRoomId(String(currentUser._id), String((selectedChat as User)._id));

  const [partnerNicknameOverride, setPartnerNicknameOverride] = useState<string>(
    isGroup ? '' : String((selectedChat as User).nicknames?.[myId] || ''),
  );
  const [selfNicknameOverride, setSelfNicknameOverride] = useState<string>(() => {
    const partnerId = String((selectedChat as User)._id);
    return String(currentUser.nicknames?.[partnerId] || '');
  });
  useEffect(() => {
    if (isGroup) return;
    setPartnerNicknameOverride(String((selectedChat as User).nicknames?.[myId] || ''));
  }, [isGroup, selectedChat, myId]);
  useEffect(() => {
    if (isGroup) return;
    const partnerId = String((selectedChat as User)._id);
    (async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getById', _id: String(currentUser._id) }),
        });
        const data = await res.json();
        const doc = data?.row ?? data;
        const nn = doc?.nicknames?.[partnerId] ?? '';
        setSelfNicknameOverride(String(nn || ''));
      } catch {}
    })();
  }, [isGroup, selectedChat, currentUser._id]);

  const handleToggleMediaExpanded = useCallback(() => {
    void fetchAssets('media', !isMediaExpanded);
  }, [fetchAssets, isMediaExpanded]);
  const handleToggleFileExpanded = useCallback(() => {
    void fetchAssets('file', !isFileExpanded);
  }, [fetchAssets, isFileExpanded]);
  const handleToggleLinkExpanded = useCallback(() => {
    void fetchAssets('link', !isLinkExpanded);
  }, [fetchAssets, isLinkExpanded]);

  const handleChangeGroupAvatar = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !isGroup) return;
      e.target.value = '';

      // Remove size limit if any
      // const MAX = 5 * 1024 * 1024;
      // if (file.size > MAX) { ... }

      setIsGroupAvatarUploading(true);
      try {
        const groupId = (selectedChat as GroupConversation)._id;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('roomId', String(groupId));
        formData.append('sender', String(currentUser._id));
        formData.append('type', 'image');
        formData.append('folderName', `GroupAvatar_${groupId}`);

        const uploadRes = await fetch(`/api/upload?uploadId=group-avatar-${groupId}-${Date.now()}`, {
          method: 'POST',
          body: formData,
        });
        const uploadJson = await uploadRes.json();

        if (!uploadRes.ok || !uploadJson?.success || !uploadJson?.link) throw new Error('Upload failed');

        const updateRes = await fetch('/api/groups', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'updateAvatar',
            conversationId: groupId,
            data: { avatar: uploadJson.link },
          }),
        });

        if (!updateRes.ok) throw new Error('Update failed');

        setGroupAvatar(uploadJson.link);
        reLoad?.();
      } catch {
        alert('Cập nhật ảnh nhóm thất bại. Vui lòng thử lại.');
      } finally {
        setIsGroupAvatarUploading(false);
      }
    },
    [isGroup, selectedChat, currentUser._id, reLoad],
  );

  const handleRenameGroup = () => {
    setRenameInput(groupName);
    setIsRenameModalOpen(true);
  };

  const handleSubmitRenameGroup = async () => {
    if (!isGroup || renameInput.trim() === groupName) {
      setIsRenameModalOpen(false);
      return;
    }

    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'renameGroup',
          conversationId: (selectedChat as GroupConversation)._id,
          data: { name: renameInput.trim() },
        }),
      });

      if (!res.ok) throw new Error();

      setGroupName(renameInput.trim());
      setIsRenameModalOpen(false);
      reLoad?.();
    } catch {
      alert('Đổi tên nhóm thất bại.');
    }
  };

  const handleLeaveGroup = async () => {
    // Logic giống cũ, rút gọn
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'leaveGroup',
          conversationId: (selectedChat as GroupConversation)._id,
          _id: currentUser._id,
        }),
      });
      if (!res.ok) throw new Error();
      const name = currentUser.name || 'Một thành viên';
      const text = `${name} đã rời nhóm`;
      await sendNotifyMessage?.(text);
      try {
        const roomIdStr = String((selectedChat as GroupConversation)._id);
        const myIdStr = String(currentUser._id);
        const nextMembers = (members || []).filter((m) => {
          const id = String((m as MemberInfo)._id ?? (m as { id?: string }).id ?? '');
          return id !== myIdStr;
        });
        const payloadMembers = nextMembers.map((m) => ({
          _id: String((m as MemberInfo)._id ?? (m as { id?: string }).id ?? ''),
          role: (m as MemberInfo).role,
          name: (m as MemberInfo).name,
          avatar: (m as MemberInfo).avatar,
        }));
        const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
        sock.emit('group_members_updated', {
          roomId: roomIdStr,
          members: payloadMembers,
          sender: myIdStr,
          senderName: currentUser.name,
        });
        setTimeout(() => sock.disconnect(), 500);
      } catch {}
      reLoad?.();
      onLeftGroup?.();
      onClose();
    } catch {
      alert('Rời nhóm thất bại.');
    }
  };

  const handleDisbandGroup = async () => {
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'disbandGroup',
          conversationId: (selectedChat as GroupConversation)._id,
          _id: currentUser._id,
        }),
      });
      if (!res.ok) throw new Error();
      onClose();
      onLeftGroup?.();
      reLoad?.();
    } catch {
      alert('Giải tán nhóm thất bại.');
    }
  };

  const handleGenerateInviteLink = useCallback(async (): Promise<string> => {
    if (!isGroup) throw new Error('Not a group');

    const groupId = (selectedChat as GroupConversation)._id;

    const res = await fetch('/api/groups/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'generate',
        groupId,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Tạo link thất bại');
    }

    return data.inviteCode;
  }, [isGroup, selectedChat]);

  const handleRegenerateInviteLink = useCallback(async (): Promise<string> => {
    if (!isGroup) throw new Error('Not a group');

    const groupId = (selectedChat as GroupConversation)._id;

    const res = await fetch('/api/groups/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'regenerate',
        groupId,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Tạo link mới thất bại');
    }

    reLoad?.();
    return data.inviteCode;
  }, [isGroup, selectedChat, reLoad]);

  const handleUpdateNicknameForPartner = useCallback(
    async (nickname: string, options?: { silent?: boolean }) => {
      if (!selectedChat?._id || !currentUser?._id) return;
      try {
        const v = String(nickname || '').trim();
        setPartnerNicknameOverride(v);
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'updateNickname',
            roomId: (selectedChat as User)._id,
            currentUserId: currentUser._id,
            data: { nickname: v },
          }),
        });
        const ok = res.ok;
        if (!ok) throw new Error();
        try {
          const room = getOneToOneRoomId(String(currentUser._id), String((selectedChat as User)._id));
          window.dispatchEvent(
            new CustomEvent('roomNicknamesUpdated', {
              detail: { roomId: room, targetUserId: String((selectedChat as User)._id), nickname: v },
            }),
          );
        } catch {}
        if (sendNotifyMessage && !options?.silent) {
          const actorName = currentUser.name || 'Bạn';
          const targetName = (selectedChat as User).name || (selectedChat as User).username || 'Người dùng';
          const msg = v
            ? `${actorName} đã đặt biệt danh cho ${targetName} là "${v}".`
            : `${actorName} đã xóa biệt danh của ${targetName}.`;
          void sendNotifyMessage(msg);
        }
      } catch {
        setPartnerNicknameOverride(
          String((selectedChat as User).nicknames?.[myId] || (selectedChat as User).name || ''),
        );
        alert('Cập nhật biệt danh thất bại');
      }
    },
    [selectedChat, currentUser, sendNotifyMessage, myId],
  );

  const handleUpdateNicknameForMe = useCallback(
    async (nickname: string) => {
      if (!selectedChat?._id || !currentUser?._id) return;
      try {
        const partnerId = String((selectedChat as User)._id);
        const v = String(nickname || '').trim();
        setSelfNicknameOverride(v);
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'updateNickname',
            roomId: currentUser._id,
            currentUserId: (selectedChat as User)._id,
            data: { nickname: v },
          }),
        });
        const ok = res.ok;
        if (!ok) throw new Error();
        try {
          const room = getOneToOneRoomId(String(currentUser._id), String(partnerId));
          window.dispatchEvent(
            new CustomEvent('roomNicknamesUpdated', {
              detail: { roomId: room, targetUserId: String(currentUser._id), nickname: v },
            }),
          );
        } catch {}
        if (sendNotifyMessage) {
          const actorName = currentUser.name || 'Bạn';
          const msg = v
            ? `${actorName} đã đặt biệt danh của chính mình là "${v}".`
            : `${actorName} đã xóa biệt danh của chính mình.`;
          void sendNotifyMessage(msg);
        }
      } catch {
        const partnerId = String((selectedChat as User)._id);
        setSelfNicknameOverride(String(currentUser.nicknames?.[partnerId] || currentUser.name || ''));
        alert('Cập nhật biệt danh thất bại');
      }
    },
    [selectedChat, currentUser, sendNotifyMessage],
  );

  return (
    <>
      {isReminderOpen ? (
        <ReminderList onClose={() => setIsReminderOpen(false)} />
      ) : isPollOpen ? (
        <PollList onClose={() => setIsPollOpen(false)} onRefresh={onRefresh} />
      ) : (
        <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
          {/* Header cố định */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-3 flex items-center justify-between shadow-lg">
            <h2 className="text-lg font-semibold">Thông tin trò chuyện</h2>
            <button
              onClick={onClose}
              className="p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Nội dung cuộn */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="space-y-5 p-5 pb-24">
              {/* Avatar + Tên */}
              {isGroup ? (
                <GroupAvatarSection
                  isGroup={isGroup}
                  groupAvatar={groupAvatar}
                  groupName={groupName}
                  chatName={chatName}
                  isGroupAvatarUploading={isGroupAvatarUploading}
                  avatarInputRef={avatarInputRef}
                  onChangeGroupAvatar={handleChangeGroupAvatar}
                  onRenameGroup={handleRenameGroup}
                />
              ) : (
                <UserAvatarSection
                  userName={
                    partnerNicknameOverride ||
                    (selectedChat as User).nicknames?.[myId] ||
                    (selectedChat as User).name ||
                    (selectedChat as User).username ||
                    'Người dùng'
                  }
                  userAvatar={(selectedChat as User).avatar}
                  onUpdateNickname={handleUpdateNicknameForPartner}
                />
              )}

              <ChatQuickActions
                localIsPinned={localIsPinned}
                localIsHidden={localIsHidden}
                onPinToggle={() => handleChatActionClick('pin')}
                onHideToggle={() => handleChatActionClick('hide')}
                onCreateGroup={() => {
                  onShowCreateGroup();
                  onClose();
                }}
              />

              {!isGroup && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Thành viên</h3>
                    <span className="text-xs font-bold text-indigo-600">2</span>
                  </div>
                  <div className="px-4 pb-4 space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-200">
                      <div className="w-8 h-8 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl">
                        {currentUser.avatar ? (
                          <Image
                            width={40}
                            height={40}
                            src={getProxyUrl(currentUser.avatar)}
                            alt={currentUser.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center">
                            {(currentUser.name || 'B').charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <p className="text-[0.875rem] font-bold text-gray-900">
                            {(selfNicknameOverride || '').trim() ||
                              (currentUser.nicknames?.[String((selectedChat as User)._id)] || '').trim() ||
                              currentUser.name ||
                              'Bạn'}
                          </p>
                          <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-[0.675rem] font-bold">
                            Bạn
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            const partnerId = String((selectedChat as User)._id);
                            const cur = (currentUser.nicknames && currentUser.nicknames?.[partnerId]) || '';
                            setEditingSelfNickname({
                              id: String(currentUser._id),
                              name: currentUser.name || 'Bạn',
                              currentVal: String(cur),
                            });
                          }}
                          className="p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all active:scale-95"
                          title="Đặt biệt danh cho chính mình"
                        >
                          <HiPencil className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-200">
                      <div className="w-8 h-8 rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl">
                        {(selectedChat as User).avatar ? (
                          <Image
                            width={40}
                            height={40}
                            src={getProxyUrl((selectedChat as User).avatar as string)}
                            alt={(selectedChat as User).name || 'Người dùng'}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center">
                            {((selectedChat as User).name || (selectedChat as User).username || 'N')
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <p className="text-[0.875rem] font-bold text-gray-900">
                            {(partnerNicknameOverride || '').trim() ||
                              ((selectedChat as User).nicknames?.[myId] || '').trim() ||
                              (selectedChat as User).name ||
                              (selectedChat as User).username ||
                              'Người dùng'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            const cur =
                              ((selectedChat as User).nicknames && (selectedChat as User).nicknames?.[myId]) || '';
                            setEditingPersonalNickname({
                              id: String((selectedChat as User)._id),
                              name: (selectedChat as User).name || (selectedChat as User).username || 'Người dùng',
                              currentVal: String(cur),
                            });
                          }}
                          className="p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all active:scale-95"
                          title="Đặt biệt danh"
                        >
                          <HiPencil className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isGroup && (
                <GroupMembersSection
                  isGroup={isGroup}
                  groupName={groupName}
                  membersCount={(selectedChat as GroupConversation).members.length}
                  onOpenMembers={() => setOpenMember(true)}
                />
              )}

              <ReminderSection onOpen={() => setIsReminderOpen(true)} />
              {isGroup && <PollSection onOpen={() => setIsPollOpen(true)} />}

              <MediaSection
                isOpen={openItems['Ảnh/Video']}
                onToggle={() => toggleItem('Ảnh/Video')}
                mediaList={mediaList}
                groups={mediaGroups}
                totalCount={mediaTotal}
                isExpanded={isMediaExpanded}
                onToggleExpanded={handleToggleMediaExpanded}
                setPreviewMedia={setPreviewMedia}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                onJumpToMessage={onJumpToMessage}
                closeMenu={closeMenu}
              />

              <FileSection
                isOpen={openItems['File']}
                onToggle={() => toggleItem('File')}
                fileList={fileList}
                groups={fileGroups}
                totalCount={fileTotal}
                isExpanded={isFileExpanded}
                onToggleExpanded={handleToggleFileExpanded}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                onJumpToMessage={onJumpToMessage}
                closeMenu={closeMenu}
              />

              <LinkSection
                isOpen={openItems['Link']}
                onToggle={() => toggleItem('Link')}
                linkList={linkList}
                groups={linkGroups}
                totalCount={linkTotal}
                isExpanded={isLinkExpanded}
                onToggleExpanded={handleToggleLinkExpanded}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
                onJumpToMessage={onJumpToMessage}
                closeMenu={closeMenu}
              />
              {/* <ChatFlashSection isOpen={openItems['ChatFlash']} onToggle={() => toggleItem('ChatFlash')} /> */}
              {isGroup && (
                <GroupInviteLinkSection
                  groupId={(selectedChat as GroupConversation)._id}
                  inviteCode={(selectedChat as GroupConversation).inviteCode}
                  onGenerateLink={handleGenerateInviteLink}
                  onRegenerateLink={handleRegenerateInviteLink}
                />
              )}
              {isGroup && (
                <GroupDangerZone
                  isGroup={isGroup}
                  canLeaveGroup={canLeaveGroup}
                  canDisbandGroup={canDisbandGroup}
                  onLeaveClick={() => setConfirmAction('leave')}
                  onDisbandClick={() => setConfirmAction('disband')}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {/* Modals */}
      {openMember && isGroup && (
        <ModalMembers
          allUsers={allUsers}
          currentUser={currentUser}
          isOpen={openMember}
          onClose={() => setOpenMember(false)}
          members={members || []}
          groupName={chatName}
          onMembersAdded={onMembersAdded}
          conversationId={selectedChat._id}
          onMemberRemoved={onMemberRemoved}
          onRoleChange={onRoleChange}
          sendNotifyMessage={sendNotifyMessage}
          lastUpdated={lastUpdated}
        />
      )}

      {editingPersonalNickname && !isGroup && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800">Đặt biệt danh</h3>
              <button
                onClick={() => setEditingPersonalNickname(null)}
                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"
              >
                <HiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-600">
                Đặt biệt danh cho <b>{editingPersonalNickname.name}</b> trong cuộc trò chuyện này.
              </p>
              <input
                type="text"
                autoFocus
                defaultValue={editingPersonalNickname.currentVal || editingPersonalNickname.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập biệt danh..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const v = (e.currentTarget.value || '').trim();
                    void handleUpdateNicknameForPartner(v);
                    setEditingPersonalNickname(null);
                  }
                }}
                id="personal-nickname-input"
              />
              <div className="flex gap-2 justify-end pt-2">
                <button
                  onClick={() => setEditingPersonalNickname(null)}
                  className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={() => {
                    const val = (document.getElementById('personal-nickname-input') as HTMLInputElement)?.value;
                    const v = String(val || '').trim();
                    void handleUpdateNicknameForPartner(v);
                    setEditingPersonalNickname(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {editingSelfNickname && !isGroup && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800">Đặt biệt danh của bạn</h3>
              <button
                onClick={() => setEditingSelfNickname(null)}
                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"
              >
                <HiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-600">
                Biệt danh của bạn sẽ hiển thị với <b>{(selectedChat as User).name || 'đối phương'}</b>.
              </p>
              <input
                type="text"
                autoFocus
                defaultValue={editingSelfNickname.currentVal || editingSelfNickname.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập biệt danh..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const v = (e.currentTarget.value || '').trim();
                    void handleUpdateNicknameForMe(v);
                    setEditingSelfNickname(null);
                  }
                }}
                id="self-nickname-input"
              />
              <div className="flex gap-2 justify-end pt-2">
                <button
                  onClick={() => setEditingSelfNickname(null)}
                  className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={() => {
                    const val = (document.getElementById('self-nickname-input') as HTMLInputElement)?.value;
                    const v = String(val || '').trim();
                    void handleUpdateNicknameForMe(v);
                    setEditingSelfNickname(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isRenameModalOpen && isGroup && (
        <RenameGroupModal
          isOpen={isRenameModalOpen}
          renameInput={renameInput}
          onChangeInput={setRenameInput}
          onClose={() => setIsRenameModalOpen(false)}
          onSubmit={handleSubmitRenameGroup}
        />
      )}

      {confirmAction && isGroup && (
        <ConfirmGroupActionModal
          confirmAction={confirmAction}
          onCancel={() => setConfirmAction(null)}
          onConfirmLeave={handleLeaveGroup}
          onConfirmDisband={handleDisbandGroup}
        />
      )}

      <MediaPreviewModal
        media={previewMedia}
        chatName={chatName}
        isGroup={isGroup}
        roomId={roomId}
        onClose={() => setPreviewMedia(null)}
      />

      {/* Loading overlay */}
      {isGroupAvatarUploading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl">
            <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-700 font-medium">Đang cập nhật ảnh nhóm...</span>
          </div>
        </div>
      )}
    </>
  );
}
