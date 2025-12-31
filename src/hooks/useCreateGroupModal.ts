'use client';

import { useMemo, useState } from 'react';
import io from 'socket.io-client';
import { resolveSocketUrl } from '@/utils/utils';
import type { User } from '@/types/User';
import type { GroupConversation } from '@/types/Group';

interface UseCreateGroupModalParams {
  currentUser: User;
  allUsers: User[];
  mode: 'create' | 'add';
  conversationId?: string;
  existingMemberIds?: string[];
  reLoad?: () => void;
  onMembersAdded?: (users: User[]) => void;
  /**
   * Được gọi sau khi tạo nhóm / thêm thành viên thành công.
   * - Với mode "create": nhận về group vừa tạo để FE có thể auto mở khung chat.
   * - Với mode "add": không cần tham số.
   */
  onGroupCreated: (group?: GroupConversation) => void;
  onClose: () => void;
}

export function useCreateGroupModal({
  currentUser,
  allUsers,
  mode,
  conversationId,
  existingMemberIds = [],
  reLoad,
  onMembersAdded,
  onGroupCreated,
  onClose,
}: UseCreateGroupModalParams) {
  const [groupName, setGroupName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [selectedMembers, setSelectedMembers] = useState<string[]>(() => {
    const currentUserId = String(currentUser._id);
    const initialSet = new Set<string>([...existingMemberIds.map(String), currentUserId]);
    return Array.from(initialSet);
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleMemberToggle = (_id: string) => {
    if (mode === 'add' && existingMemberIds.includes(_id)) return;
    setSelectedMembers((prev) => (prev.includes(_id) ? prev.filter((id) => id !== _id) : [...prev, _id]));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Vui lòng chọn file ảnh');
      return;
    }

    // Remove size limit
    // const MAX = 5 * 1024 * 1024; // 5MB
    // if (file.size > MAX) { ... }

    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
    setError('');
  };

  const groupedUsers = useMemo(() => {
    let filtered = allUsers;
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      filtered = allUsers.filter((u) => (u.name || '').toLowerCase().includes(lowerTerm));
    }

    const sortedUsers = [...filtered].sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    const groups: Record<string, User[]> = {};
    sortedUsers.forEach((user) => {
      const firstLetter = (user.name?.charAt(0) || '#').toUpperCase();
      const key = /^[A-Z]$/.test(firstLetter) ? firstLetter : '#';
      if (!groups[key]) groups[key] = [];
      groups[key].push(user);
    });

    return groups;
  }, [allUsers, searchTerm]);

  const sortedGroupKeys = useMemo(() => {
    return Object.keys(groupedUsers).sort((a, b) => {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });
  }, [groupedUsers]);

  const handleSubmit = async () => {
    if (mode === 'create' && !groupName.trim()) {
      setError('Vui lòng nhập tên nhóm');
      return;
    }

    const newMembersOnly = selectedMembers.filter((_id) => !existingMemberIds.includes(_id));

    if (mode === 'add' && newMembersOnly.length === 0) {
      setError('Bạn chưa chọn thêm thành viên mới nào');
      return;
    }
    if (mode === 'create' && selectedMembers.length < 3) {
      setError('Nhóm phải có ít nhất 3 thành viên (bao gồm bạn)');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let avatarUrl = '';
      if (mode === 'create' && avatarFile) {
        const uploadId = `group_avatar_${Date.now()}`;
        const formData = new FormData();
        formData.append('file', avatarFile);
        formData.append('roomId', 'new_group');
        formData.append('sender', String(currentUser._id));
        formData.append('type', 'image');
        formData.append('folderName', 'GroupAvatars');

        const uploadRes = await fetch(`/api/upload?uploadId=${uploadId}`, {
          method: 'POST',
          body: formData,
        });
        const uploadJson = await uploadRes.json();
        if (uploadJson.success && uploadJson.link) {
          avatarUrl = uploadJson.link;
        }
      }

      type CreateGroupBody = {
        action: 'createGroup';
        data: {
          name: string;
          members: string[];
          createdBy: string;
          avatar?: string;
        };
      };

      type AddMembersBody = {
        action: 'addMembers';
        conversationId: string | undefined;
        newMembers: string[];
        _id: string;
      };

      let bodyData: CreateGroupBody | AddMembersBody;

      if (mode === 'create') {
        bodyData = {
          action: 'createGroup',
          data: {
            name: groupName,
            members: selectedMembers,
            createdBy: currentUser._id,
            avatar: avatarUrl || undefined,
          },
        };
      } else {
        bodyData = {
          action: 'addMembers',
          conversationId,
          newMembers: newMembersOnly,
          _id: String(currentUser._id),
        };
      }

      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const result = await res.json();

      if (result.success) {
        // Chỉ reload lại dữ liệu khi thao tác thành công
        reLoad?.();

        if (mode === 'add' && onMembersAdded) {
          const addedUsersFullInfo = allUsers.filter((u) => newMembersOnly.includes(String(u._id)));
          onMembersAdded(addedUsersFullInfo);
          try {
            const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
            const prevMembersPayload = (existingMemberIds || []).map((id) => ({ _id: String(id) }));
            const nextMembersPayload = newMembersOnly.map((id) => ({
              _id: id,
              role: 'MEMBER',
              joinedAt: Date.now(),
              addedBy: String(currentUser._id),
            }));
            sock.emit('group_members_updated', {
              conversationId,
              members: [...prevMembersPayload, ...nextMembersPayload],
              action: 'add',
            });
            setTimeout(() => sock.disconnect(), 500);
          } catch {}
          onGroupCreated();
        } else if (mode === 'create') {
          const createdGroup = result.group as GroupConversation | undefined;
          onGroupCreated(createdGroup);

          // 🔥 Emit socket để tất cả thành viên thấy nhóm mới ngay trên sidebar
          try {
            const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
            const roomIdStr = String(createdGroup?._id || result?.groupId || '');
            const membersRaw = createdGroup?.members || selectedMembers;
            const membersPayload = Array.isArray(membersRaw)
              ? membersRaw.map((m) => (typeof m === 'object' && m?._id ? { _id: String(m._id) } : String(m)))
              : [];

            sock.emit('group_created', {
              roomId: roomIdStr,
              members: membersPayload,
              sender: currentUser._id,
              senderName: currentUser.name,
              groupName: createdGroup?.name || groupName,
            });
            setTimeout(() => sock.disconnect(), 500);
          } catch {}
        }

        onClose();
      } else {
        setError(result.error || 'Thực hiện thất bại');
      }
    } catch (err) {
      console.error(err);
      setError('Lỗi kết nối server');
    } finally {
      setLoading(false);
    }
  };

  return {
    groupName,
    setGroupName,
    searchTerm,
    setSearchTerm,
    selectedMembers,
    loading,
    error,
    groupedUsers,
    sortedGroupKeys,
    handleMemberToggle,
    handleSubmit,
    avatarFile,
    avatarPreview,
    handleAvatarChange,
  };
}
