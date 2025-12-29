'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { HiX, HiChevronLeft, HiBan } from 'react-icons/hi';
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
import ItemDropdownMenu from '@/components/(chatPopup)/components/ItemDropdownMenu';
import RenameGroupModal from '@/components/(chatPopup)/components/RenameGroupModal';
import ConfirmGroupActionModal from '@/components/(chatPopup)/components/ConfirmGroupActionModal';
import { useChatContext } from '@/context/ChatContext';
import ReminderList from '@/components/(chatPopup)/components/ReminderList';
import PinnedMessagesList from '@/components/(chatPopup)/components/PinnedMessagesList';
import PollList from '@/components/(chatPopup)/components/PollList';
import io from 'socket.io-client';
import { getProxyUrl, resolveSocketUrl } from '@/utils/utils';
import GroupInviteLinkSection from '@/components/(chatPopup)/components/GroupInviteLinkSection';
import PinnedMessagesSection from '@/components/(chatPopup)/components/PinnedMessagesSection';
import { HiPencil } from 'react-icons/hi';
import Image from 'next/image';
import ImageIconZalo from '@/components/svg/ICIconImageZalo';
import {
  HiEyeSlash,
  HiChevronRight,
  HiUser,
  HiBell,
  HiStar,
  HiBookOpen,
  HiPlus,
  HiUsers,
  HiCog,
  HiClock,
  HiShieldCheck,
  HiPlay,
} from 'react-icons/hi2';
import ICPin from '@/components/svg/ICPin';
import PopupProfile from '@/components/base/PopupProfile';
import { useRouter } from 'next/navigation';
import SuccessModal from '@/components/modal/SuccessModal';
import { confirmAlert } from '@/components/base/alert';

import AddToGroupModal from '@/components/(chatPopup)/components/AddToGroupModal';
import CommonGroupsModal from '@/components/(chatPopup)/components/CommonGroupsModal';

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
  initialSection?: 'reminder' | 'poll' | 'members' | null;
  groups?: GroupConversation[];
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
  initialSection,
  groups = [],
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
  const [isPinnedMessagesOpen, setIsPinnedMessagesOpen] = useState(false);
  const [isPollOpen, setIsPollOpen] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false);
  const [assetsTab, setAssetsTab] = useState<'media' | 'file' | 'link'>('media');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBestFriend, setIsBestFriend] = useState(false);
  const [callAlertEnabled, setCallAlertEnabled] = useState(true);
  const [autoDeletePolicy, setAutoDeletePolicy] = useState<'off' | '24h' | '7d'>('off');
  const [showAutoDeleteModal, setShowAutoDeleteModal] = useState(false);
  const router = useRouter();
  const [showAddToGroupModal, setShowAddToGroupModal] = useState(false);
  const [showCommonGroupsModal, setShowCommonGroupsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const commonGroups = useMemo(() => {
    if (isGroup || !selectedChat || !groups) return [];
    const partnerId = String((selectedChat as User)._id);
    return groups.filter((g) => {
      if (!Array.isArray(g.members)) return false;
      return g.members.some((m) => {
        const mId = typeof m === 'string' ? m : m._id || (m as { id?: string }).id;
        return String(mId) === partnerId;
      });
    });
  }, [groups, selectedChat, isGroup]);

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

  useEffect(() => {
    if (initialSection === 'reminder') {
      setIsReminderOpen(true);
      setIsPollOpen(false);
      setOpenMember(false);
    } else if (initialSection === 'poll') {
      setIsPollOpen(true);
      setIsReminderOpen(false);
      setOpenMember(false);
    } else if (initialSection === 'members') {
      setIsReminderOpen(false);
      setIsPollOpen(false);
      if (isGroup) setOpenMember(true);
      else setOpenMember(false);
    }
  }, [initialSection]);

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
  const openAddToGroupModal = useCallback(() => {
    setShowAddToGroupModal(true);
  }, []);

  useEffect(() => {
    if (mediaList.length === 0) {
      void fetchAssets('media', false);
    }
  }, [mediaList.length, fetchAssets]);
  const latestImages = useMemo(
    () =>
      [...mediaList]
        .filter((m) => m.type === 'image')
        .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
        .slice(0, 4),
    [mediaList],
  );

  const getOneToOneRoomId = (user1Id: string | number, user2Id: string | number) => {
    return [user1Id, user2Id].sort().join('_');
  };
  const roomId = isGroup
    ? String((selectedChat as GroupConversation)._id)
    : getOneToOneRoomId(String(currentUser._id), String((selectedChat as User)._id));

  useEffect(() => {
    try {
      const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
      const v = localStorage.getItem(k) === 'true';
      setIsMuted(v);
    } catch {}
  }, [roomId, currentUser._id]);

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

  useEffect(() => {
    if (isGroup) return;
    try {
      const partnerId = String((selectedChat as User)._id);
      const bfRaw = localStorage.getItem(`best_friend_${partnerId}`);
      setIsBestFriend(bfRaw ? bfRaw === '1' : false);
      const callRaw = localStorage.getItem(`call_alert_${roomId}`);
      setCallAlertEnabled(callRaw ? callRaw === '1' : true);
      const adRaw = localStorage.getItem(`auto_delete_${roomId}`);
      const val = adRaw === '24h' ? '24h' : adRaw === '7d' ? '7d' : 'off';
      setAutoDeletePolicy(val);
    } catch {}
  }, [isGroup, selectedChat, roomId]);

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
      ) : isPinnedMessagesOpen ? (
        <PinnedMessagesList onClose={() => setIsPinnedMessagesOpen(false)} onJumpToMessage={onJumpToMessage} />
      ) : isPollOpen ? (
        <PollList onClose={() => setIsPollOpen(false)} onRefresh={onRefresh} />
      ) : (
        <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
          {/* Header cố định */}
          <div className="bg-blue-400 to-indigo-700 text-white p-3 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200 block sm:hidden"
                aria-label="Quay lại"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold">Tùy chọn</h2>
            </div>
            <div className="hidden sm:block">
              <button
                onClick={onClose}
                className="p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200"
                aria-label="Đóng"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nội dung cuộn */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="space-y-3  bg-gray-200">
              <div className="bg-white p-5">
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
                  isGroup={isGroup}
                  localIsPinned={localIsPinned}
                  localIsHidden={localIsHidden}
                  onPinToggle={() => handleChatActionClick('pin')}
                  onHideToggle={() => handleChatActionClick('hide')}
                  onCreateGroup={() => {
                    onShowCreateGroup();
                    onClose();
                  }}
                  onOpenMembers={() => setOpenMember(true)}
                  onSearchMessages={() => {
                    try {
                      const ev = new CustomEvent('openRoomSearch', { detail: { roomId } });
                      window.dispatchEvent(ev);
                    } catch {}
                  }}
                  onChangeWallpaper={() => {
                    alert('Tính năng đổi hình nền sẽ sớm có mặt.');
                  }}
                  isMuted={isMuted}
                  onToggleMute={() => {
                    const next = !isMuted;
                    setIsMuted(next);
                    try {
                      const k = `roomMuted:${roomId}:${String(currentUser._id)}`;
                      localStorage.setItem(k, String(next));
                      const evt = new CustomEvent('roomMutedChanged', {
                        detail: { roomId, muted: next },
                      });
                      window.dispatchEvent(evt);
                    } catch {}
                  }}
                  onOpenProfile={() => {
                    if (!isGroup) {
                      const partnerId = String((selectedChat as User)._id);
                      if (partnerId) router.push(`/profile/${partnerId}`);
                    }
                  }}
                />
              </div>

              {isGroup && (
                <div className="bg-white  border border-gray-200">
                  <button
                    className="cursor-pointer w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-all"
                    title="Thêm mô tả nhóm"
                  >
                    <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Thêm mô tả nhóm</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {!isGroup && (
                <div className="bg-white shadow-sm border border-gray-100 overflow-hidden mt-2">
                  <div className="divide-y divide-gray-100">
                    <button
                      onClick={() => {
                        const partnerId = String((selectedChat as User)._id);
                        const name = (selectedChat as User).name || (selectedChat as User).username || 'Người dùng';
                        setEditingPersonalNickname({
                          id: partnerId,
                          name,
                          currentVal: partnerNicknameOverride,
                        });
                      }}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiPencil className="w-5 h-5 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Đổi tên gọi nhớ</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    <div className="px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <HiStar className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Đánh dấu bạn thân</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={isBestFriend}
                          onChange={() => {
                            alert('Chức năng đang được hoàn thiện');
                          }}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"></div>
                      </label>
                    </div>

                    <button
                      onClick={() => alert('Chức năng đang được hoàn thiện')}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiBookOpen className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Nhật ký chung</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-white  shadow-sm border border-gray-200 mt-2">
                <button
                  onClick={() => {
                    setIsAssetsModalOpen(true);
                    void fetchAssets('media', true);
                    void fetchAssets('file', true);
                    void fetchAssets('link', true);
                  }}
                  className="cursor-pointer w-full py-2 px-1 flex items-center justify-between hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2">
                    <ImageIconZalo className="w-10 h-10" />
                    <span className="text-[1.125rem] md:text-[1rem] text-gray-900">Ảnh, file, link</span>
                  </div>

                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="pl-5 pr-1 pb-2 border-t border-gray-100">
                  {latestImages.length > 0 ? (
                    <div className="grid grid-cols-5 gap-[0.125rem] mt-2">
                      {latestImages.map((img) => (
                        <div
                          key={img.id}
                          className="relative aspect-square rounded-[0.25rem] overflow-hidden bg-gray-100 cursor-pointer group"
                          onClick={() => {
                            setAssetsTab('media');
                            setIsAssetsModalOpen(true);
                          }}
                        >
                          <Image
                            width={200}
                            height={200}
                            src={getProxyUrl(img.url)}
                            alt="Ảnh"
                            className="w-full h-full object-cover"
                          />

                          <ItemDropdownMenu
                            itemUrl={img.url}
                            itemId={img.id}
                            fileName={img.fileName}
                            activeMenuId={activeMenuId}
                            onClose={closeMenu}
                            onJumpToMessage={onJumpToMessage}
                            onShareById={(mid) => {
                              try {
                                const evt = new CustomEvent('shareMessage', { detail: { messageId: mid } });
                                window.dispatchEvent(evt);
                              } catch {}
                            }}
                          />
                        </div>
                      ))}
                      <div
                        className="relative aspect-square rounded-[0.25rem] overflow-hidden bg-gray-100 cursor-pointer group flex items-center justify-center"
                        onClick={() => {
                          setAssetsTab('media');
                          setIsAssetsModalOpen(true);
                          void fetchAssets('media', true);
                          void fetchAssets('file', true);
                          void fetchAssets('link', true);
                        }}
                        title="Xem tất cả ảnh, file, link"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">Chưa có ảnh nào</div>
                  )}
                </div>

                <div className="pt-2">
                  <ReminderSection onOpen={() => setIsReminderOpen(true)} />
                  <PinnedMessagesSection onOpen={() => setIsPinnedMessagesOpen(true)} />
                  {isGroup && <PollSection onOpen={() => setIsPollOpen(true)} />}
                </div>
              </div>

              {!isGroup && (
                <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    <button
                      onClick={() => {
                        try {
                          const w = window as Window & { __createGroupInitialMemberIds?: string[] };
                          w.__createGroupInitialMemberIds = [String((selectedChat as User)._id)];
                        } catch {}
                        onShowCreateGroup();
                      }}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiPlus className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">
                          Tạo nhóm với {(selectedChat as User).name || (selectedChat as User).username || 'Người dùng'}
                        </span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => {
                        openAddToGroupModal();
                      }}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between   hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiUsers className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800 ">
                          Thêm {(selectedChat as User).name || (selectedChat as User).username || 'Người dùng'} vào nhóm
                        </span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={() => setShowCommonGroupsModal(true)}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiUser className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Xem nhóm chung</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-white space-y-2">
                {isGroup && (
                  <GroupMembersSection
                    isGroup={isGroup}
                    groupName={groupName}
                    membersCount={(selectedChat as GroupConversation).members.length}
                    onOpenMembers={() => setOpenMember(true)}
                  />
                )}
                {isGroup && (
                  <GroupInviteLinkSection
                    groupId={(selectedChat as GroupConversation)._id}
                    inviteCode={(selectedChat as GroupConversation).inviteCode}
                    onGenerateLink={handleGenerateInviteLink}
                    onRegenerateLink={handleRegenerateInviteLink}
                  />
                )}
              </div>
              <div className="bg-white  shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <ICPin className="w-5 h-5 text-gray-600" />
                      <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Ghim trò chuyện</span>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={localIsPinned}
                        onChange={() => handleChatActionClick('pin')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"></div>
                    </label>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <HiEyeSlash className="w-5 h-5 text-gray-500" />
                      <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Ẩn trò chuyện</span>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={localIsHidden}
                        onChange={() => handleChatActionClick('hide')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"></div>
                    </label>
                  </div>
                  {!isGroup && (
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <HiBell className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Báo cuộc gọi đến</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={callAlertEnabled}
                          onChange={() => {
                            alert('Chức năng đang được hoàn thiện');
                          }}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"></div>
                      </label>
                    </div>
                  )}
                  {!isGroup && (
                    <button
                      onClick={() => alert('Chức năng đang được hoàn thiện')}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiCog className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Cài đặt cá nhân</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                  {!isGroup && (
                    <button
                      onClick={() => alert('Chức năng đang được hoàn thiện')}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiClock className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Tin nhắn tự xóa</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">
                        {autoDeletePolicy === 'off' ? 'Không tự xóa' : autoDeletePolicy === '24h' ? '24 giờ' : '7 ngày'}
                      </span>
                    </button>
                  )}
                  {!isGroup && (
                    <button
                      onClick={() => {
                        alert('Chức năng đang được hoàn thiện');
                      }}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiShieldCheck className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Báo xấu</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                  {!isGroup && (
                    <button
                      onClick={() => alert('Chức năng đang được hoàn thiện')}
                      className="cursor-pointer w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <HiBan className="w-6 h-6 text-gray-600" />
                        <span className="text-[1.125rem] md:text-[1rem] text-gray-800">Quản lý chặn</span>
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
              {/* <ChatFlashSection isOpen={openItems['ChatFlash']} onToggle={() => toggleItem('ChatFlash')} /> */}

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
      {isProfileOpen && !isGroup && (
        <PopupProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} user={selectedChat as User} />
      )}
      {showAutoDeleteModal && !isGroup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800">Tin nhắn tự xóa</h3>
              <button
                onClick={() => setShowAutoDeleteModal(false)}
                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors"
              >
                <HiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <button
                onClick={() => {
                  setAutoDeletePolicy('off');
                  try {
                    localStorage.setItem(`auto_delete_${roomId}`, 'off');
                  } catch {}
                  setShowAutoDeleteModal(false);
                }}
                className={`w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === 'off' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                Không tự xóa
              </button>
              <button
                onClick={() => {
                  setAutoDeletePolicy('24h');
                  try {
                    localStorage.setItem(`auto_delete_${roomId}`, '24h');
                  } catch {}
                  setShowAutoDeleteModal(false);
                }}
                className={`w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === '24h' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                24 giờ
              </button>
              <button
                onClick={() => {
                  setAutoDeletePolicy('7d');
                  try {
                    localStorage.setItem(`auto_delete_${roomId}`, '7d');
                  } catch {}
                  setShowAutoDeleteModal(false);
                }}
                className={`w-full cursor-pointer px-4 py-3 rounded-xl text-left ${autoDeletePolicy === '7d' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
              >
                7 ngày
              </button>
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
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
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
      {showAddToGroupModal && !isGroup && (
        <AddToGroupModal
          isOpen={showAddToGroupModal}
          onClose={() => setShowAddToGroupModal(false)}
          currentUser={currentUser}
          selectedChat={selectedChat as User}
          onShowCreateGroup={() => {
            if (window.innerWidth < 768) {
              setShowAddToGroupModal(false);
              setTimeout(() => onShowCreateGroup(), 300);
            } else {
              onShowCreateGroup();
            }
          }}
          reLoad={reLoad}
        />
      )}
      {showCommonGroupsModal && !isGroup && (
        <CommonGroupsModal
          isOpen={showCommonGroupsModal}
          onClose={() => setShowCommonGroupsModal(false)}
          groups={commonGroups}
          partner={selectedChat as User}
          onShowCreateGroup={() => {
            if (window.innerWidth < 768) {
              setShowCommonGroupsModal(false);
              setTimeout(() => {
                try {
                  const w = window as Window & { __createGroupInitialMemberIds?: string[] };
                  w.__createGroupInitialMemberIds = [String((selectedChat as User)._id)];
                } catch {}
                onShowCreateGroup();
              }, 300);
            } else {
              try {
                const w = window as Window & { __createGroupInitialMemberIds?: string[] };
                w.__createGroupInitialMemberIds = [String((selectedChat as User)._id)];
              } catch {}
              onShowCreateGroup();
            }
          }}
          onShowAddToGroup={() => {
            setShowCommonGroupsModal(false);
            setTimeout(() => setShowAddToGroupModal(true), 300);
          }}
        />
      )}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thành công"
        description="Đã thêm thành viên vào nhóm thành công."
      />
      {editingSelfNickname && !isGroup && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
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

      {isAssetsModalOpen && (
        <div
          className={`${typeof window !== 'undefined' && window.innerWidth >= 1024 ? 'absolute inset-0' : 'fixed inset-0'} z-50 flex flex-col bg-white`}
        >
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-3 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAssetsModalOpen(false)}
                className="p-2 cursor-pointer rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold">Ảnh, file, link</h2>
            </div>
          </div>
          <div className="p-3 bg-white border-b border-gray-200 flex items-center gap-2">
            <button
              onClick={() => setAssetsTab('media')}
              className={`cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${
                assetsTab === 'media' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Ảnh
            </button>
            <button
              onClick={() => setAssetsTab('file')}
              className={` cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${
                assetsTab === 'file' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              File
            </button>
            <button
              onClick={() => setAssetsTab('link')}
              className={`cursor-pointer px-3 py-1.5 rounded-full text-sm font-semibold ${
                assetsTab === 'link' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Link
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {assetsTab === 'media' && (
              <div className="px-5 py-4">
                {(mediaGroups && mediaGroups.length > 0
                  ? mediaGroups
                  : [
                      {
                        dateLabel: '',
                        items: mediaList as { id: string; type: 'image' | 'video'; url: string; fileName?: string }[],
                      },
                    ]
                ).map((group, gi) => (
                  <div key={`${group.dateLabel}-${gi}`} className="mt-4">
                    {group.dateLabel && (
                      <div className="text-xs font-semibold text-gray-500 mb-2">{group.dateLabel}</div>
                    )}
                    <div className="grid grid-cols-3 gap-3">
                      {group.items.map((item) => (
                        <div
                          key={item.id}
                          className={`relative aspect-square rounded-xl cursor-pointer ${
                            item.type === 'video' ? ' w-[8rem] h-[5rem] flex gap-2' : ''
                          }  group bg-gray-100 ${activeMenuId === item.id ? 'z-50' : 'z-0'}`}
                          onClick={() => {
                            const mediaType = item.type === 'video' ? 'video' : 'image';
                            setPreviewMedia({ url: item.url, type: mediaType });
                          }}
                        >
                          {item.type === 'video' ? (
                            <div className="relative">
                              <video
                                src={getProxyUrl(item.url)}
                                className="w-full h-full object-cover pointer-events-none"
                                preload="metadata"
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow">
                                  <HiPlay className="w-5 h-5 text-blue-600 ml-0.5" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Image
                              width={200}
                              height={200}
                              src={getProxyUrl(item.url)}
                              alt="Media"
                              className="w-full h-full object-cover"
                            />
                          )}
                          <button
                            className={`cursor-pointer absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-200 z-10 ${
                              activeMenuId === item.id
                                ? 'opacity-100 ring-2 ring-blue-500'
                                : 'opacity-0 group-hover:opacity-100'
                            } hover:bg-white hover:scale-110`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMenuId(activeMenuId === item.id ? null : item.id);
                            }}
                          >
                            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="5" cy="12" r="2" />
                              <circle cx="12" cy="12" r="2" />
                              <circle cx="19" cy="12" r="2" />
                            </svg>
                          </button>
                          <ItemDropdownMenu
                            itemUrl={item.url}
                            itemId={item.id}
                            fileName={item.fileName}
                            activeMenuId={activeMenuId}
                            onClose={closeMenu}
                            onJumpToMessage={onJumpToMessage}
                            onShareById={(mid) => {
                              try {
                                const evt = new CustomEvent('shareMessage', { detail: { messageId: mid } });
                                window.dispatchEvent(evt);
                              } catch {}
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {assetsTab === 'file' && (
              <div className="px-5 py-4">
                {(fileGroups && fileGroups.length > 0 ? fileGroups : [{ dateLabel: '', items: fileList }]).map(
                  (g, gi) => (
                    <div key={`${g.dateLabel}-${gi}`} className="mt-4">
                      {g.dateLabel && <div className="text-xs font-semibold text-gray-500 mb-2">{g.dateLabel}</div>}
                      <div className="space-y-3">
                        {g.items.map((file) => (
                          <div
                            key={file.id}
                            className="relative flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-blue-300"
                            onClick={() => window.open(file.url, '_blank')}
                          >
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                                {file.fileName}
                              </p>
                            </div>
                            <button
                              className={`cursor-pointer p-2 rounded-full  bg-white/90 backdrop-blur-sm shadow-md transition-all duration-200 z-10 ${
                                activeMenuId === file.id
                                  ? 'opacity-100 ring-2 ring-blue-500'
                                  : 'opacity-0 group-hover:opacity-100'
                              } hover:bg-white hover:scale-110`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(activeMenuId === file.id ? null : file.id);
                              }}
                            >
                              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="5" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="19" cy="12" r="2" />
                              </svg>
                            </button>
                            <ItemDropdownMenu
                              itemUrl={file.url}
                              itemId={file.id}
                              fileName={file.fileName}
                              activeMenuId={activeMenuId}
                              onClose={closeMenu}
                              onJumpToMessage={onJumpToMessage}
                              onShareById={(mid) => {
                                try {
                                  const evt = new CustomEvent('shareMessage', { detail: { messageId: mid } });
                                  window.dispatchEvent(evt);
                                } catch {}
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
            {assetsTab === 'link' && (
              <div className="px-5 py-4">
                {(linkGroups && linkGroups.length > 0 ? linkGroups : [{ dateLabel: '', items: linkList }]).map(
                  (g, gi) => (
                    <div key={`${g.dateLabel}-${gi}`} className="mt-4">
                      {g.dateLabel && <div className="text-xs font-semibold text-gray-500 mb-2">{g.dateLabel}</div>}
                      <div className="space-y-3">
                        {g.items.map((link) => {
                          const href = link.url.startsWith('http') ? link.url : `https://${link.url}`;
                          return (
                            <div
                              key={link.id}
                              className="relative flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group cursor-pointer border border-gray-200 hover:border-purple-300"
                              onClick={() => window.open(href, '_blank')}
                            >
                              <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-500 text-white shadow-lg">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M3.9 12a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-5-5zm7-3h2a3 3 0 0 1 0 6h-2a3 3 0 0 1 0-6z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-purple-600 truncate group-hover:underline transition-all">
                                  {link.url}
                                </p>
                              </div>
                              <button
                                className={`cursor-pointer p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md transition-all duration-200 z-10 ${
                                  activeMenuId === link.id
                                    ? 'opacity-100 ring-2 ring-purple-500'
                                    : 'opacity-0 group-hover:opacity-100'
                                } hover:bg-white hover:scale-110`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveMenuId(activeMenuId === link.id ? null : link.id);
                                }}
                              >
                                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                  <circle cx="5" cy="12" r="2" />
                                  <circle cx="12" cy="12" r="2" />
                                  <circle cx="19" cy="12" r="2" />
                                </svg>
                              </button>
                              <ItemDropdownMenu
                                itemUrl={link.url}
                                itemId={link.id}
                                activeMenuId={activeMenuId}
                                onClose={closeMenu}
                                onJumpToMessage={onJumpToMessage}
                                onShareById={(mid) => {
                                  try {
                                    const evt = new CustomEvent('shareMessage', { detail: { messageId: mid } });
                                    window.dispatchEvent(evt);
                                  } catch {}
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
