'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { HiX, HiSearch } from 'react-icons/hi';
import CreateGroupModal from '../../app/(zalo)/home/CreateGroupModal';
import { User } from '../../types/User';
import { MemberInfo, GroupRole } from '../../types/Group';
import { getProxyUrl, resolveSocketUrl } from '../../utils/utils';
import { useToast } from './toast';
import { confirmAlert } from './alert';
import { HiUserMinus, HiUserPlus, HiEllipsisVertical } from 'react-icons/hi2';
import ICPeopleGroup from '@/components/svg/ICPeopleGroup';
import io from 'socket.io-client';
import { KeyIcon } from 'lucide-react';
import RoleBadge from './RoleBadge';

type LocalMemberInfo = MemberInfo & { originalName?: string };

interface Props {
  isOpen: boolean;
  members: MemberInfo[];
  onClose: () => void;
  currentUser: User;
  allUsers: User[];
  groupName?: string;
  conversationId?: string;
  reLoad?: () => void;
  onMembersAdded: (users: User[]) => void;
  onMemberRemoved?: (memberId: string, memberName: string) => void;
  onRoleChange?: (memberId: string, memberName: string, newRole: 'ADMIN' | 'MEMBER') => void;
  sendNotifyMessage?: (text: string) => Promise<void> | void;
  lastUpdated?: number;
}

// 🔥 Helper function để normalize ID
function normalizeId(value: unknown): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (typeof value === 'object' && value !== null) {
    if ('_id' in value) return normalizeId(value._id);
    if ('id' in value) return normalizeId(value.id);
  }
  return String(value);
}

// 🔥 Helper function để so sánh ID
function compareIds(id1: unknown, id2: unknown): boolean {
  const normalized1 = normalizeId(id1);
  const normalized2 = normalizeId(id2);

  if (normalized1 === normalized2) return true;

  // So sánh cả dạng number
  const num1 = Number(normalized1);
  const num2 = Number(normalized2);
  if (!isNaN(num1) && !isNaN(num2) && num1 === num2) return true;

  return false;
}

export default function GroupMembersModal({
  members,
  onClose,
  isOpen,
  groupName,
  currentUser,
  allUsers,
  conversationId,
  reLoad,
  onMembersAdded,
  onMemberRemoved,
  onRoleChange,
  sendNotifyMessage,
  lastUpdated,
}: Props) {
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [localMembers, setLocalMembers] = useState<LocalMemberInfo[]>([]);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [editingNicknameMember, setEditingNicknameMember] = useState<{
    id: string;
    name: string;
    currentVal: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'admin' | 'invited' | 'blocked'>('all');
  const [showSearch, setShowSearch] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const toast = useToast();
  const router = useRouter();

  // 🔥 Tạo user map với nhiều key formats
  const userMap = React.useMemo(() => {
    const map = new Map<string, User>();

    // Add current user
    if (currentUser) {
      const currentId = normalizeId(currentUser._id || currentUser.id);
      if (currentId) {
        map.set(currentId, currentUser);

        // Thêm key dạng number nếu có thể
        if (!isNaN(Number(currentId))) {
          map.set(String(Number(currentId)), currentUser);
        }
      }
    }

    // Add all users
    allUsers.forEach((user) => {
      const userId = normalizeId(user._id || user.id);
      if (userId) {
        map.set(userId, user);

        // Thêm key dạng number nếu có thể
        if (!isNaN(Number(userId))) {
          map.set(String(Number(userId)), user);
        }
      }
    });

    return map;
  }, [currentUser, allUsers]);

  useEffect(() => {
    const enriched: MemberInfo[] = (members || [])
      .map((m: unknown) => {
        const raw = m as Partial<MemberInfo> & { id?: string | number; _id?: string | number };
        const memberId = normalizeId(raw._id ?? raw.id);
        console.log(`[ModalMembers] Process member ${memberId}:`, {
          name: raw.name,
          role: raw.role,
          addedBy: raw.addedBy,
          rawObject: raw,
        });

        if (!memberId) {
          console.warn('⚠️ Member without ID:', raw);
          return null;
        }

        const baseRole = (raw.role as GroupRole) ?? 'MEMBER';
        const baseJoinedAt = typeof raw.joinedAt === 'number' ? raw.joinedAt : Date.now();

        // 🔥 Tìm user info trong userMap
        let foundUser = userMap.get(memberId);

        // Thử tìm với number format nếu chưa có
        if (!foundUser && !isNaN(Number(memberId))) {
          foundUser = userMap.get(String(Number(memberId)));
        }

        const myId = normalizeId(currentUser._id || currentUser.id);

        const originalName = raw.name || foundUser?.name || 'Thành viên';
        // 🔥 Use nickname from Group Member Data (Global) or Personal Nickname (Local)
        const nickname = raw.nickname || foundUser?.nicknames?.[myId];
        const name = nickname || originalName;
        const avatar = raw.avatar || foundUser?.avatar;

        return {
          _id: memberId,
          name,
          avatar,
          role: baseRole,
          joinedAt: baseJoinedAt,
          addedBy: raw.addedBy,
          originalName,
        } as LocalMemberInfo;
      })
      .filter(Boolean) as LocalMemberInfo[];

    // 🔥 Deduplicate members by ID
    const uniqueMembersMap = new Map<string, LocalMemberInfo>();
    enriched.forEach((m) => {
      const id = normalizeId(m._id || m.id);
      if (!uniqueMembersMap.has(id)) {
        uniqueMembersMap.set(id, m);
      }
    });

    setLocalMembers(Array.from(uniqueMembersMap.values()));
  }, [members, allUsers, userMap, currentUser, conversationId, lastUpdated]);

  if (!isOpen) return null;

  const myId = normalizeId(currentUser._id || currentUser.id);
  const myMemberInfo = localMembers.find((m) => compareIds(m._id || m.id, myId));
  const myRole: GroupRole = myMemberInfo?.role || 'MEMBER';

  const canKick = (targetRole: GroupRole) => {
    if (myRole === 'OWNER') return true;
    if (myRole === 'ADMIN' && targetRole === 'MEMBER') return true;
    return false;
  };

  const canPromote = (targetRole: GroupRole) => myRole === 'OWNER' && targetRole === 'MEMBER';
  const canDemote = (targetRole: GroupRole) => myRole === 'OWNER' && targetRole === 'ADMIN';

  const handleOpenProfile = (targetUserId: string) => {
    const id = normalizeId(targetUserId);
    router.push(`/profile/${id}`);
  };

  const handleOptimisticAddMember = (newUsers: User[]) => {
    const newMembersFormatted: MemberInfo[] = newUsers.map((u) => ({
      _id: normalizeId(u._id ?? u.id),
      name: u.name,
      avatar: u.avatar,
      role: 'MEMBER',
      joinedAt: Date.now(),
      addedBy: myId, // ✅ Include addedBy for optimistic UI
    }));
    setLocalMembers((prev) => [...prev, ...newMembersFormatted]);
    setShowCreateGroupModal(false);
    onMembersAdded(newUsers);
  };

  const handleAction = async (action: 'kick' | 'promote' | 'demote', targetUserId: string) => {
    if (!conversationId) return;
    setLoadingAction(targetUserId);

    const targetMember = localMembers.find((m) => compareIds(m._id || m.id, targetUserId));
    const targetName = targetMember ? targetMember.name : 'Thành viên';

    try {
      const prevMembersSnapshot = [...localMembers];
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          action === 'kick'
            ? { conversationId, targetUserId, action: 'kickMember', _id: myId }
            : {
                conversationId,
                targetUserId,
                action: 'changeRole',
                data: { role: action === 'promote' ? 'ADMIN' : 'MEMBER' },
                _id: myId,
              },
        ),
      });

      if (res.ok) {
        if (action === 'kick') {
          setLocalMembers((prev) => prev.filter((m) => !compareIds(m._id || m.id, targetUserId)));
          if (onMemberRemoved) onMemberRemoved(targetUserId, targetName);

          // 🔥 Báo realtime để cập nhật sidebar & đóng phòng cho người bị kick
          try {
            const roomIdStr = String(conversationId || '');
            const nextMembers = prevMembersSnapshot.filter((m) => !compareIds(m._id || m.id, targetUserId));
            const payloadMembers = nextMembers.map((m) => ({
              _id: String(m._id || m.id || ''),
              role: m.role,
              name: m.name,
              avatar: m.avatar,
            }));
            const prevMembers = prevMembersSnapshot.map((m) => ({
              _id: String(m._id || m.id || ''),
            }));
            const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
            sock.emit('group_members_updated', {
              roomId: roomIdStr,
              members: payloadMembers,
              prevMembers,
              sender: myId,
              senderName: currentUser.name,
              groupName,
            });
            setTimeout(() => sock.disconnect(), 500);
          } catch {}
        } else if (action === 'promote' || action === 'demote') {
          const newRole: GroupRole = action === 'promote' ? 'ADMIN' : 'MEMBER';
          setLocalMembers((prev) =>
            prev.map((m) => (compareIds(m._id || m.id, targetUserId) ? { ...m, role: newRole } : m)),
          );
          onRoleChange?.(targetUserId, targetName, newRole);
        }
        reLoad?.();
      } else {
        toast({ type: 'error', message: 'Thao tác thất bại', duration: 3000 });
      }
    } catch {
      toast({ type: 'error', message: 'Lỗi mạng, vui lòng thử lại', duration: 3000 });
    } finally {
      setLoadingAction(null);
    }
  };

  const handleLeaveGroup = async () => {
    if (!conversationId) return;
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'leaveGroup',
          conversationId,
          _id: myId,
        }),
      });
      if (!res.ok) throw new Error('Leave failed');
      const actorName = currentUser.name || 'Một thành viên';
      const text = `${actorName} đã rời nhóm`;
      try {
        await sendNotifyMessage?.(text);
      } catch {}
      try {
        const roomIdStr = String(conversationId);
        const nextMembers = localMembers.filter((m) => !compareIds(m._id || m.id, myId));
        const payloadMembers = nextMembers.map((m) => ({
          _id: String(m._id || m.id || ''),
          role: m.role,
          name: m.name,
          avatar: m.avatar,
        }));
        const prevMembers = localMembers.map((m) => ({ _id: String(m._id || m.id || '') }));
        const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
        sock.emit('group_members_updated', {
          roomId: roomIdStr,
          members: payloadMembers,
          prevMembers,
          sender: myId,
          senderName: currentUser.name,
          groupName,
        });
        setTimeout(() => sock.disconnect(), 500);
      } catch {}
      setLocalMembers((prev) => prev.filter((m) => !compareIds(m._id || m.id, myId)));
      reLoad?.();
      onClose();
    } catch {
      toast({ type: 'error', message: 'Rời nhóm thất bại', duration: 3000 });
    }
  };
  const searchUser = localMembers.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const displayMembers = searchUser.filter((m) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'admin') return m.role === 'OWNER' || m.role === 'ADMIN';
    // TODO: Implement invited and blocked lists when data is available
    if (activeTab === 'invited') return false;
    if (activeTab === 'blocked') return false;
    return true;
  });

  const existingMemberIds = localMembers.map((m) => normalizeId(m._id || m.id));
  const setNickname = async (targetId: string, nickname: string) => {
    if (!conversationId) return;

    try {
      // 1. Call API
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateMemberNickname',
          conversationId,
          targetUserId: targetId,
          data: { nickname },
        }),
      });

      if (!res.ok) throw new Error('Failed to update nickname');

      // 2. Optimistic Update Local State
      const v = String(nickname || '').trim();
      setLocalMembers((prev) =>
        prev.map((m) => {
          if (compareIds(m._id || m.id, targetId)) {
            const foundUser = userMap.get(normalizeId(targetId)) || userMap.get(String(Number(targetId)));
            const globalNickname = foundUser?.nicknames?.[myId];
            const originalName = (m as LocalMemberInfo).originalName || foundUser?.name || m.name;
            const resolvedName = v || globalNickname || originalName;
            return { ...m, name: resolvedName || 'Thành viên', nickname: v };
          }
          return m;
        }),
      );

      // 3. Emit Socket Event for real-time update
      try {
        const socket = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
        socket.emit('room_nickname_updated', {
          roomId: conversationId,
          targetUserId: targetId,
          nickname: v,
        });
        setTimeout(() => socket.disconnect(), 500);
      } catch {}

      // 4. Reload data
      reLoad?.();

      // 5. Send Notification
      if (sendNotifyMessage) {
        const actorName = currentUser.name || 'Một thành viên';
        const targetMember = localMembers.find((m) => compareIds(m._id || m.id, targetId));
        const foundUser = userMap.get(normalizeId(targetId)) || userMap.get(String(Number(targetId)));
        const targetName = foundUser?.name || targetMember?.name || 'Thành viên';

        let msg = '';
        if (v) {
          msg = `${actorName} đã đặt biệt danh cho ${targetName} là "${v}".`;
        } else {
          msg = `${actorName} đã xóa biệt danh của ${targetName}.`;
        }
        sendNotifyMessage(msg);
      }
    } catch {
      toast({ type: 'error', message: 'Cập nhật biệt danh thất bại', duration: 3000 });
    }
  };

  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-50 flex items-stretch justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/40'
      } backdrop-blur-sm sm:px-0`}
    >
      <div className="bg-white w-full h-full rounded-none overflow-hidden flex flex-col">
        {/* HEADER */}
        <div className="flex-none bg-blue-400 text-white">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-bold">Thành viên</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCreateGroupModal(true)}
                className="p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95"
                title="Thêm thành viên"
              >
                <HiUserPlus className="w-6 h-6" />
              </button>

              <button
                onClick={() => setShowSearch((v) => !v)}
                className="p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95"
                title="Tìm kiếm"
              >
                <HiSearch className="w-6 h-6" />
              </button>
            </div>
          </div>
          {showSearch && (
            <div className="px-4 pb-3">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/90 focus:outline-none focus:bg-white focus:text-gray-900 transition-all" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm thành viên"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/15 text-white  focus:outline-none focus:bg-white focus:text-gray-900 transition-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="flex-1 flex flex-col min-h-0  bg-white sm:bg-gray-50">
          {/* Tabs */}
          <div className="flex items-center gap-6 px-4 border-b border-gray-200 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'admin'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Trưởng và phó nhóm
            </button>
            <button
              onClick={() => setActiveTab('invited')}
              className={`cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'invited'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Đã mời
            </button>
            <button
              onClick={() => setActiveTab('blocked')}
              className={`cursor-pointer py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'blocked'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Đã chặn
            </button>
          </div>
          {/* NICKNAME MODAL - style giống Zalo */}
          {editingNicknameMember && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Đặt biệt danh</h3>
                  <button onClick={() => setEditingNicknameMember(null)} className="p-2 hover:bg-gray-100 rounded-full">
                    <HiX className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <div className="p-6 space-y-5">
                  <p className="text-base text-gray-600">
                    Đặt biệt danh cho <b>{editingNicknameMember.name}</b> trong nhóm này.
                  </p>
                  <input
                    type="text"
                    autoFocus
                    defaultValue={editingNicknameMember.currentVal || editingNicknameMember.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-[#0088ff] focus:ring-2 focus:ring-[#0088ff]/30"
                    placeholder="Nhập biệt danh..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setNickname(editingNicknameMember.id, e.currentTarget.value);
                        setEditingNicknameMember(null);
                      }
                    }}
                    id="nickname-input"
                  />
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setEditingNicknameMember(null)}
                      className="px-6 py-3 text-gray-600 font-medium rounded-2xl hover:bg-gray-100"
                    >
                      Hủy
                    </button>
                    <button
                      onClick={() => {
                        const val = (document.getElementById('nickname-input') as HTMLInputElement)?.value;
                        setNickname(editingNicknameMember.id, val);
                        setEditingNicknameMember(null);
                      }}
                      className="px-6 py-3 bg-[#0088ff] text-white font-medium rounded-2xl hover:bg-[#0070d9] transition-colors"
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Member List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Danh sách thành viên</h3>
              <span className="text-xl font-bold text-[#0088ff]">{displayMembers.length}</span>
            </div>

            <div className="space-y-1">
              {displayMembers.map((member) => {
                const memberId = normalizeId(member._id || member.id);
                const memberRole: GroupRole = member.role;
                const isMe = compareIds(memberId, myId);
                const isLoading = loadingAction === memberId;

                return (
                  <div
                    key={memberId}
                    className={`flex items-center justify-between gap-4 py-3 px-3 rounded-2xl hover:bg-gray-50 transition-colors relative group ${isLoading ? 'opacity-60' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
                        onClick={() => handleOpenProfile(memberId)}
                      >
                        {member.avatar ? (
                          <Image
                            src={getProxyUrl(member.avatar)}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src="/logo/avata.webp"
                            alt={member.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Info */}
                      <div className=" min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-base font-medium text-gray-900">{member.name}</p>

                          {isMe && (
                            <span className="px-2.5  py-1 bg-[#0088ff]/10 text-[#0088ff] rounded-full text-xs font-medium">
                              Bạn
                            </span>
                          )}
                        </div>

                        <div className=" gap-3 flex ">
                          <RoleBadge role={member.role} />
                        </div>
                        {member.addedBy && (
                          <div className="text-xs text-gray-500">
                            {compareIds(member.addedBy, myId) ? (
                              'Thêm bởi bạn'
                            ) : (
                              <>
                                {'Thêm bởi '}
                                <span className="font-medium">
                                  {(() => {
                                    const adder = userMap.get(normalizeId(member.addedBy));
                                    if (!adder) console.warn('[ModalMembers] Unknown adder:', member.addedBy);
                                    return adder?.name || 'Người dùng';
                                  })()}
                                </span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {!isLoading && (
                      <div className="relative">
                        <button
                          onClick={() => setOpenMenuId(openMenuId === memberId ? null : memberId)}
                          className="p-2 rounded-full cursor-pointer hover:bg-gray-200 active:scale-95"
                          title="Thêm"
                        >
                          <HiEllipsisVertical className="w-5 h-5 text-gray-700" />
                        </button>
                        {openMenuId === memberId && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                            <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-20 overflow-hidden">
                              <button
                                onClick={() => {
                                  const currentRoomNick = String(member.nickname || '');
                                  setEditingNicknameMember({
                                    id: memberId,
                                    name: member.name,
                                    currentVal: currentRoomNick,
                                  });
                                  setOpenMenuId(null);
                                }}
                                className="cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                              >
                                Đặt biệt danh
                              </button>

                              {/* {!isMe && canPromote(memberRole) && (
                                <button
                                  onClick={() => {
                                    confirmAlert({
                                      title: 'Phân làm Phó nhóm',
                                      message: `Phân ${member.name} làm Phó nhóm?`,
                                      okText: 'Phân quyền',
                                      onOk: () => handleAction('promote', memberId),
                                    });
                                    setOpenMenuId(null);
                                  }}
                                  className="cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                                >
                                  Phân làm Phó nhóm
                                </button>
                              )} */}
                              {!isMe && canPromote(memberRole) && (
                                <button
                                  onClick={() => {
                                    confirmAlert({
                                      title: 'Bổ nhiệm làm Phó nhóm',
                                      message: `Bổ nhiệm ${member.name} làm Phó nhóm?`,
                                      okText: 'Bổ nhiệm',
                                      onOk: () => handleAction('promote', memberId),
                                    });
                                    setOpenMenuId(null);
                                  }}
                                  className="cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                                >
                                  Bổ nhiệm làm Phó nhóm
                                </button>
                              )}
                              {!isMe && canDemote(memberRole) && (
                                <button
                                  onClick={() => {
                                    confirmAlert({
                                      title: 'Hủy quyền Phó nhóm',
                                      message: `Hủy quyền Phó nhóm ${member.name}?`,
                                      okText: 'Có',
                                      onOk: () => handleAction('demote', memberId),
                                    });
                                    setOpenMenuId(null);
                                  }}
                                  className="cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                                >
                                  Bãi nhiệm
                                </button>
                              )}
                              {!isMe && canKick(memberRole) && (
                                <button
                                  onClick={() => {
                                    confirmAlert({
                                      title: 'Xóa thành viên',
                                      message: `Xóa ${member.name} khỏi nhóm?`,
                                      okText: 'Xóa',
                                      onOk: () => handleAction('kick', memberId),
                                    });
                                    setOpenMenuId(null);
                                  }}
                                  className="cursor-pointer w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600"
                                >
                                  Xóa khỏi nhóm
                                </button>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Loading overlay */}
                    {isLoading && (
                      <div className="absolute inset-0 bg-white/70 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-[#0088ff] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                );
              })}

              {displayMembers.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  <HiSearch className="w-20 h-20 mx-auto mb-6 opacity-30" />
                  <p className="text-lg font-medium">Không tìm thấy thành viên</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer hidden for clean full-screen */}
      </div>

      {showCreateGroupModal && (
        <CreateGroupModal
          mode="add"
          conversationId={conversationId}
          existingMemberIds={existingMemberIds}
          currentUser={currentUser}
          allUsers={allUsers}
          onClose={() => setShowCreateGroupModal(false)}
          reLoad={reLoad}
          onMembersAdded={handleOptimisticAddMember}
          onGroupCreated={() => setShowCreateGroupModal(false)}
        />
      )}
    </div>
  );
  const target =
    isDesktop && typeof document !== 'undefined' ? document.getElementById('right-sidebar-container') : null;
  return isDesktop && target ? createPortal(modalNode, target) : modalNode;
}
