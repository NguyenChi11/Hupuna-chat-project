'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { HiX, HiSearch, HiShieldCheck, HiCheck, HiChevronDown, HiPencil } from 'react-icons/hi';

import CreateGroupModal from '../../app/(zalo)/home/CreateGroupModal';
import { User } from '../../types/User';
import { MemberInfo, GroupRole } from '../../types/Group';
import { getProxyUrl, resolveSocketUrl } from '../../utils/utils';
import { useToast } from './toast';
import { confirmAlert } from './alert';
import { HiUserMinus, HiUserPlus } from 'react-icons/hi2';
import ICPeopleGroup from '@/components/svg/ICPeopleGroup';
import io from 'socket.io-client';
import { KeyIcon } from 'lucide-react';

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
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [localMembers, setLocalMembers] = useState<LocalMemberInfo[]>([]);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [editingNicknameMember, setEditingNicknameMember] = useState<{
    id: string;
    name: string;
    currentVal: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'invited'>('all');
  const [showSearch, setShowSearch] = useState(false);
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

  const RoleBadge = ({ role }: { role: GroupRole }) => {
    if (role === 'OWNER')
      return (
        <span className=" px-3 py-1.5 rounded-full text-[0.5rem] font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md flex items-center gap-1.5">
          <KeyIcon className="w-3 h-3" />
          Trưởng nhóm
        </span>
      );
    if (role === 'ADMIN')
      return (
        <span className="ml-2 px-3 py-1.5 rounded-full text-[0.5rem] font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md flex items-center gap-1.5">
          <HiShieldCheck className="w-3 h-3" />
          Phó nhóm
        </span>
      );
    return null;
  };

  const modalNode = (
    <div
      className={`${isDesktop ? 'absolute inset-0' : 'fixed inset-0'} z-50 flex items-stretch justify-center ${
        isDesktop ? 'bg-black/20' : 'bg-black/40'
      } backdrop-blur-sm sm:px-0`}
    >
      <div className="bg-white w-full h-full rounded-none overflow-hidden flex flex-col">
        {/* HEADER */}
        <div className="flex-none bg-gradient-to-b from-sky-500 to-blue-500 text-white">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                onClick={() =>
                  confirmAlert({
                    title: 'Rời nhóm',
                    message: 'Bạn chắc chắn muốn rời nhóm này?',
                    okText: 'Rời nhóm',
                    onOk: () => handleLeaveGroup(),
                  })
                }
                className="p-2 rounded-full cursor-pointer hover:bg-white/20 active:scale-95"
                title="Rời nhóm"
              >
                <HiUserMinus className="w-6 h-6" />
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
                <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/90 text-gray-900" />
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
        <div className="flex-1 flex flex-col min-h-0 bg-white sm:bg-gray-50">
          {/* Tabs */}
          <div className="flex items-center gap-4 px-4 py-2 border-b border-gray-300">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                activeTab === 'all' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tất cả
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
              <span className="text-xl font-bold text-[#0088ff]">{searchUser.length}</span>
            </div>

            <div className="space-y-1">
              {(activeTab === 'all' ? searchUser : []).map((member) => {
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

                        <div className=" gap-3 flex-wrap ">
                          <RoleBadge role={member.role} />
                        </div>
                      </div>
                    </div>

                    {/* Actions - chỉ hiện khi hover */}
                    {!isLoading && (
                      <div className="flex items-center gap-2  transition-opacity">
                        <button
                          onClick={() => {
                            const currentRoomNick = String(member.nickname || '');
                            setEditingNicknameMember({
                              id: memberId,
                              name: member.name,
                              currentVal: currentRoomNick,
                            });
                          }}
                          className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                          title="Đặt biệt danh"
                        >
                          <HiPencil className="w-5 h-5 text-gray-600" />
                        </button>

                        {!isMe && (
                          <>
                            {canPromote(memberRole) && (
                              <button
                              onClick={() =>
                                  confirmAlert({
                                    title: 'Bổ nhiệm làm Phó nhóm',
                                    message: `Bổ nhiệm ${member.name} làm Phó nhóm?`,
                                    okText: 'Bổ nhiệm',
                                    onOk: () => handleAction('promote', memberId),
                                  })
                                }
                                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                                title="Bổ nhiệm làm Phó nhóm"
                              >
                                <HiCheck className="w-5 h-5 text-green-600" />
                              </button>
                            )}
                            {canDemote(memberRole) && (
                              <button
                               onClick={() =>
                                  confirmAlert({
                                    title: 'Hủy quyền Phó nhóm',
                                    message: `Hủy quyền Phó nhóm ${member.name}?`,
                                    okText: 'Có',
                                    onOk: () => handleAction('demote', memberId),
                                  })
                                }
                                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                                title="Bãi nhiệm"
                              >
                                <HiUserMinus className="w-5 h-5 text-yellow-600" />
                              </button>
                            )}
                            {canKick(memberRole) && (
                              <button
                                onClick={() =>
                                  confirmAlert({
                                    title: 'Xóa thành viên',
                                    message: `Xóa ${member.name} khỏi nhóm?`,
                                    okText: 'Xóa',
                                    onOk: () => handleAction('kick', memberId),
                                  })
                                }
                                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                                title="Xóa khỏi nhóm"
                              >
                                <HiUserMinus className="w-5 h-5 text-red-600" />
                              </button>
                            )}
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

              {searchUser.length === 0 && (
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
