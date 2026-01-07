import React from 'react';
import type { User } from '@/types/User';
import type { GroupConversation } from '@/types/Group';
import BaseManagerModal, { ManagerConfig } from './BaseManagerModal';

interface CategoryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserId?: string;
  currentUser?: User;
  groups?: GroupConversation[];
  allUsers?: User[];
}

const config: ManagerConfig = {
  titles: {
    main: 'Quản lý thẻ phân loại',
    list: 'Danh sách thẻ phân loại',
    add: 'Thêm phân loại',
    edit: 'Chi tiết thẻ phân loại',
    create: 'Thêm phân loại',
    deleteConfirm: 'Xác nhận xóa',
    itemName: 'thẻ phân loại',
  },
  fields: {
    userTags: 'categoryTags',
    chatTagsBy: 'categoriesBy',
    chatTagsSimple: 'categories',
  },
  events: {
    userUpdated: 'userCategoryTagsUpdated',
    chatUpdated: 'chatCategoriesUpdated',
    localStorageKeyPrefix: 'chatCategories',
  },
  api: {
    updateChatAction: 'updateCategories',
    updateChatDataField: 'categories',
  },
};

export default function CategoryManagerModal(props: CategoryManagerModalProps) {
  return <BaseManagerModal {...props} config={config} />;
}
