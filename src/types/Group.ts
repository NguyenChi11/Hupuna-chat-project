import { User } from './User';

export const GROUP_COLLECTION_NAME = 'Groups';

export type GroupRole = 'OWNER' | 'ADMIN' | 'MEMBER';

export interface GroupMemberSchema {
  _id: string; // User ID
  role: GroupRole;
  joinedAt: number;
}

export interface MemberInfo extends GroupMemberSchema {
  name: string;
  avatar?: string;
  id?: string;
}

export interface GroupConversation {
  [key: string]: unknown;
  _id: string;
  name: string;
  isGroup: boolean;
  members: GroupMemberSchema[] | MemberInfo[];

  createdBy: string;
  unreadCount?: number;
  lastMessage?: string;
  lastMessageAt?: number;
  avatar?: string;
  createdAt?: string;
  isRecall?: boolean;

  isPinned?: boolean;
  isHidden?: boolean;
  isPinnedBy?: Record<string, boolean>;
  isHiddenBy?: Record<string, boolean>;

  inviteCode?: string; // ✅ THÊM
  description?: string; // ✅ THÊM (optional)
}

export interface GroupConversationCreate {
  [key: string]: unknown;
  name: string;
  isGroup: boolean;

  // Khi tạo, ta lưu mảng object có role
  members: GroupMemberSchema[];
  createdBy: string;
  createdAt?: number;
}

export type ChatItem = User | GroupConversation;
