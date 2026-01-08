import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { HiX } from 'react-icons/hi';
import { HiPlus, HiChevronRight } from 'react-icons/hi2';
import Image from 'next/image';
import { User } from '@/types/User';
import { GroupConversation } from '@/types/Group';
import { getProxyUrl, resolveSocketUrl, normalizeNoAccent } from '@/utils/utils';
import SuccessModal from '@/components/modal/SuccessModal';
import io from 'socket.io-client';

interface AddToGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
  selectedChat: User;
  onShowCreateGroup: () => void;
  reLoad?: () => void;
}

export default function AddToGroupModal({
  isOpen,
  onClose,
  currentUser,
  selectedChat,
  onShowCreateGroup,
  reLoad,
}: AddToGroupModalProps) {
  const [myGroupsQuick, setMyGroupsQuick] = useState<GroupConversation[]>([]);
  const [addToGroupLoading, setAddToGroupLoading] = useState(false);
  const [addToGroupError, setAddToGroupError] = useState('');
  const [groupSearch, setGroupSearch] = useState('');
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const maxSelectGroups = 5;

  const fetchMyGroupsQuick = useCallback(async () => {
    try {
      const res = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'readGroups', _id: currentUser._id }),
      });
      const data = await res.json();
      const list = Array.isArray(data.data) ? (data.data as GroupConversation[]) : [];
      setMyGroupsQuick(list);
    } catch {}
  }, [currentUser]);

  useEffect(() => {
    if (isOpen) {
      setAddToGroupError('');
      setGroupSearch('');
      setSelectedGroupIds([]);
      void fetchMyGroupsQuick();
    }
  }, [isOpen, fetchMyGroupsQuick]);

  const filteredGroups = useMemo(() => {
    const q = normalizeNoAccent(groupSearch.trim());
    if (!q) return myGroupsQuick;
    return myGroupsQuick.filter((g) => normalizeNoAccent(String(g.name || '')).includes(q));
  }, [groupSearch, myGroupsQuick]);

  const toggleSelectGroup = useCallback(
    (groupId: string) => {
      setAddToGroupError('');
      setSelectedGroupIds((prev) => {
        if (prev.includes(groupId)) return prev.filter((id) => id !== groupId);
        if (prev.length >= maxSelectGroups) {
          setAddToGroupError(`Chỉ chọn tối đa ${maxSelectGroups} nhóm`);
          return prev;
        }
        return [...prev, groupId];
      });
    },
    [maxSelectGroups],
  );

  const handleBatchAddToSelectedGroups = useCallback(async () => {
    if (selectedGroupIds.length === 0) return;
    setAddToGroupLoading(true);
    setAddToGroupError('');
    try {
      const sock = io(resolveSocketUrl(), { transports: ['websocket'], withCredentials: false });
      const targetId = String((selectedChat as User)._id);
      for (const gid of selectedGroupIds) {
        const res = await fetch('/api/groups', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'addMembers',
            conversationId: gid,
            newMembers: [targetId],
            _id: currentUser._id,
          }),
        });
        const json = await res.json();
        if (!json.success) {
          setAddToGroupError('Một số nhóm thêm thất bại');
        } else {
          const g = myGroupsQuick.find((x) => String(x._id) === String(gid)) || null;
          const prevRaw = Array.isArray(g?.members)
            ? (g!.members as Array<{ _id?: string; id?: string } | string>)
            : [];
          const prevIds = prevRaw
            .map((m) => (typeof m === 'string' ? String(m) : String(m._id || m.id || '')))
            .filter((v) => !!v);
          const nextIds = Array.from(new Set([...prevIds, targetId]));
          const prevMembersPayload = prevIds.map((id) => ({ _id: id }));
          const nextMembersPayload = nextIds.map((id) => ({ _id: id }));
          sock.emit('group_members_updated', {
            roomId: String(gid),
            members: nextMembersPayload,
            prevMembers: prevMembersPayload,
            sender: String(currentUser._id),
            senderName: currentUser.name,
            groupName: g?.name,
          });
        }
      }
      setTimeout(() => sock.disconnect(), 500);
      setShowSuccessModal(true);
      reLoad?.();
      onClose();
    } catch {
      setAddToGroupError('Lỗi kết nối');
    } finally {
      setAddToGroupLoading(false);
    }
  }, [selectedGroupIds, selectedChat, reLoad, onClose, currentUser._id, currentUser.name, myGroupsQuick]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white md:bg-black/50 md:px-4">
        <div className="bg-white md:rounded-2xl shadow-2xl w-full h-full md:h-[45rem] md:max-w-md overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50 flex-none">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Thêm vào nhóm</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-colors">
                <HiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Đã chọn: {selectedGroupIds.length}/{maxSelectGroups}
            </div>
          </div>
          <div className="p-3 border-b border-gray-100 flex-none">
            <input
              value={groupSearch}
              onChange={(e) => setGroupSearch(e.target.value)}
              placeholder="Nhập tên nhóm"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={() => {
              try {
                const w = window as Window & { __createGroupInitialMemberIds?: string[] };
                w.__createGroupInitialMemberIds = [String((selectedChat as User)._id)];
              } catch {}
              onShowCreateGroup();
              onClose();
            }}
            className="cursor-pointer w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all flex-none"
          >
            <div className="flex items-center gap-2">
              <HiPlus className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-800">
                Tạo nhóm với {(selectedChat as User).name || (selectedChat as User).username || 'Người dùng'}
              </span>
            </div>
            <HiChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <div className="p-4 space-y-2 overflow-y-auto flex-1 custom-scrollbar">
            {filteredGroups.length === 0 ? (
              <div className="text-sm text-gray-600">Chưa có nhóm nào</div>
            ) : (
              filteredGroups.map((g) => {
                const isAlreadyMember =
                  Array.isArray(g.members) &&
                  g.members.some((m: { _id?: string; id?: string } | string) => {
                    const mId = typeof m === 'string' ? m : m._id || m.id;
                    return String(mId) === String((selectedChat as User)._id);
                  });
                const selected = selectedGroupIds.includes(String(g._id));
                return (
                  <button
                    key={g._id}
                    onClick={() => {
                      if (isAlreadyMember || addToGroupLoading) return;
                      toggleSelectGroup(String(g._id));
                    }}
                    disabled={addToGroupLoading || isAlreadyMember}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                      isAlreadyMember
                        ? 'opacity-50 cursor-not-allowed bg-gray-50'
                        : selected
                          ? 'bg-blue-50'
                          : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          isAlreadyMember
                            ? 'bg-blue-400 border-blue-400'
                            : selected
                              ? 'bg-blue-600 border-blue-600'
                              : 'border-gray-300 bg-white'
                        }`}
                      >
                        {(selected || isAlreadyMember) && (
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        {g.avatar ? (
                          <Image
                            src={getProxyUrl(g.avatar)}
                            alt=""
                            width={36}
                            height={36}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-700 font-bold">
                            {String(g.name || 'N')
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-start min-w-0">
                        <span className="text-[1.3rem]  text-gray-800 truncate max-w-[15rem]">{g.name || 'Nhóm'}</span>
                        <span className="text-[1rem] text-gray-500">
                          {isAlreadyMember
                            ? 'Đã tham gia'
                            : `${Array.isArray(g.members) ? (g.members as unknown[]).length : 0} tv`}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
            {addToGroupError && <div className="text-xs text-red-600">{addToGroupError}</div>}
          </div>
          <div className="p-4 border-t border-gray-100 flex-none">
            <button
              disabled={selectedGroupIds.length === 0 || addToGroupLoading}
              onClick={handleBatchAddToSelectedGroups}
              className={`w-full px-4 py-2 rounded-xl font-bold ${
                selectedGroupIds.length === 0 || addToGroupLoading
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {addToGroupLoading ? 'Đang thêm...' : 'Thêm vào nhóm'}
            </button>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thành công"
        description="Đã thêm thành viên vào nhóm thành công."
      />
    </>
  );
}
