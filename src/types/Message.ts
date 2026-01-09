import { User } from '@/types/User';

export const MESSAGES_COLLECTION_NAME = 'Messages';

export type MessageType = 'text' | 'image' | 'file' | 'notify' | 'sticker' | 'video' | 'reminder' | 'poll' | 'contact';

export interface Message {
  [key: string]: unknown;
  _id: string;
  roomId: string;
  sender: string | User;
  batchId?: string;
  content?: string;
  fileUrl?: string;
  fileName?: string;
  previewUrl?: string;
  videoCropConfig?: {
    crop: { x: number; y: number };
    zoom: number;
    rotation: number;
    croppedAreaPixels: { x: number; y: number; width: number; height: number } | null;
    baseWidth?: number;
    baseHeight?: number;
  } | null;
  type: MessageType;
  timestamp: number;
  serverTimestamp?: number;
  pinnedAt?: number | null;
  readBy?: (string | number)[];
  isRecalled?: boolean;
  replyToMessageId?: string;
  replyToMessageName?: string;
  isPinned?: boolean;
  pinnedTitle?: string;
  mentions?: string[];
  originalContent?: string;
  editedAt?: number;
  reminderAt?: number;
  reminderNote?: string;
  reminderFired?: boolean;
  reminderRepeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  pollQuestion?: string;
  pollOptions?: string[];
  pollVotes?: Record<string, string[]>;
  isPollLocked?: boolean;
  pollLockedAt?: number;
  pollAllowMultiple?: boolean;
  pollAllowAddOptions?: boolean;
  pollHideVoters?: boolean;
  pollHideResultsUntilVote?: boolean;
  pollEndAt?: number | null;
  sharedFrom?: {
    messageId: string;
    originalSender: string;
    originalRoomId: string;
  };
  callerId?: string;
  calleeId?: string;
  callType?: 'voice' | 'video';
  callStatus?: 'answered' | 'rejected' | 'timeout';
  callDurationSec?: number;
  callStartedAt?: number;
  callEndedAt?: number;
  contactCard?: {
    _id: string;
    name: string;
    username?: string;
    avatar?: string;
  };
}
export interface MessageCreate {
  [key: string]: unknown;
  roomId: string;
  sender: string;
  batchId?: string;
  content?: string;
  fileUrl?: string;
  fileName?: string;
  previewUrl?: string;
  videoCropConfig?: {
    crop: { x: number; y: number };
    zoom: number;
    rotation: number;
    croppedAreaPixels: { x: number; y: number; width: number; height: number } | null;
    baseWidth?: number;
    baseHeight?: number;
  } | null;
  type: MessageType;
  timestamp: number;
  serverTimestamp?: number;
  isRecalled?: boolean;
  replyToMessageId?: string;
  replyToMessageName?: string;
  isPinned?: boolean;
  pinnedTitle?: string;
  originalContent?: string;
  editedAt?: number;
  reminderAt?: number;
  reminderNote?: string;
  reminderFired?: boolean;
  reminderRepeat?: 'none' | 'daily' | 'weekly' | 'monthly';
  pollQuestion?: string;
  pollOptions?: string[];
  pollVotes?: Record<string, string[]>;
  isPollLocked?: boolean;
  pollLockedAt?: number;
  pollAllowMultiple?: boolean;
  pollAllowAddOptions?: boolean;
  pollHideVoters?: boolean;
  pollHideResultsUntilVote?: boolean;
  pollEndAt?: number | null;
  sharedFrom?: {
    messageId: string;
    originalSender: string;
    originalRoomId: string;
  };
  callerId?: string;
  calleeId?: string;
  callType?: 'voice' | 'video';
  callStatus?: 'answered' | 'rejected' | 'timeout';
  callDurationSec?: number;
  callStartedAt?: number;
  callEndedAt?: number;
  contactCard?: {
    _id: string;
    name: string;
    username?: string;
    avatar?: string;
  };
}
