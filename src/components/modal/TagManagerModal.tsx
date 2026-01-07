import React from 'react';
import type { User } from '@/types/User';
import type { GroupConversation } from '@/types/Group';
import BaseManagerModal, { ManagerConfig } from './BaseManagerModal';

interface TagManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserId?: string;
  currentUser?: User;
  groups?: GroupConversation[];
  allUsers?: User[];
}

const config: ManagerConfig = {
  titles: {
    main: 'Quản lý thẻ tags',
    list: 'Danh sách thẻ tags',
    add: 'Thêm thẻ mới',
    edit: 'Chi tiết thẻ tags',
    create: 'Thêm thẻ mới',
    deleteConfirm: 'Xác nhận xóa',
    itemName: 'thẻ tags',
  },
  fields: {
    userTags: 'userTags',
    chatTagsBy: 'tagsBy',
    chatTagsSimple: 'tags',
  },
  events: {
    userUpdated: 'userTagsUpdated',
    chatUpdated: 'chatTagsUpdated',
    localStorageKeyPrefix: 'chatTags',
  },
  api: {
    updateChatAction: 'updateTags',
    updateChatDataField: 'tags',
  },
};

export default function TagManagerModal(props: TagManagerModalProps) {
  return <BaseManagerModal {...props} config={config} />;
}
