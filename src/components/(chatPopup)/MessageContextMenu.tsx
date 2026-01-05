import React from 'react';
import { Message } from '@/types/Message';
import { HiOutlineDownload, HiOutlineTrash, HiPencil } from 'react-icons/hi';
import ICReply from '../svg/ICReply';
import ICShareMessage from '../svg/ICShareMessage';
import ICCopy from '../svg/ICCopy';
import ICPin from '../svg/ICPin';
import {
  FaCopy,
  FaDownload,
  FaPaperclip,
  FaRegPenToSquare,
  FaRegShareFromSquare,
  FaRepeat,
  FaReply,
  FaTrashCan,
} from 'react-icons/fa6';
import { FaShare } from 'react-icons/fa';

const getId = (u: Message['sender'] | string | undefined | null): string => {
  if (!u) return '';
  if (typeof u === 'string') return u;
  if (typeof u === 'object' && u !== null && '_id' in u && (u as { _id?: unknown })._id != null)
    return String((u as { _id: unknown })._id);
  if (typeof u === 'object' && u !== null && 'id' in u && (u as { id?: unknown }).id != null)
    return String((u as unknown as { id: unknown }).id);
  return '';
};

export interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  message: Message;
  placement?: 'above' | 'below';
  focusTop?: number;
  focusHeight?: number;
}

interface MenuItemProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement | HTMLAnchorElement>) => void;
  isRed?: boolean;
  isAnchor?: boolean;
  href?: string;
  download?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  isRed = false,
  isAnchor = false,
  href = '#',
  download = '',
}) => {
  const className = `cursor-pointer w-full text-left px-3 py-1 mb-1 hover:bg-gray-100 flex items-center gap-3 ${isRed ? 'text-red-500' : 'text-gray-700'}`;

  if (isAnchor) {
    return (
      <a href={href} download={download} onClick={onClick} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

interface MessageContextMenuProps {
  contextMenu: ContextMenuState | null;
  currentUserId: string;
  onClose: () => void;
  onPinMessage: (msg: Message) => void;
  onRecallMessage: (messageId: string) => void;
  setEditingMessageId?: (id: string | null) => void;
  setEditContent?: (content: string) => void;
  closeContextMenu?: () => void;
  onReplyMessage?: (msg: Message) => void;
  onShareMessage: (message: Message) => void;
}

const MessageContextMenu: React.FC<MessageContextMenuProps> = ({
  contextMenu,
  currentUserId,
  onClose,
  onPinMessage,
  onRecallMessage,
  setEditingMessageId,
  setEditContent,
  closeContextMenu,
  onReplyMessage,
  onShareMessage,
}) => {
  if (!contextMenu || !contextMenu.visible) return null;

  const { x, y, message: msg, placement } = contextMenu;
  const isMe = getId(msg.sender) === currentUserId;
  const isText = msg.type === 'text';
  const isRecalled = msg.isRecalled;
  const canCopy = isText && !isRecalled;
  const canDownload = (msg.type === 'image' || msg.type === 'file' || msg.type === 'sticker') && msg.fileUrl;
  const canRecall = isMe && !isRecalled;
  const isCurrentlyPinned = msg.isPinned === true;
  const canEdit = isMe && isText && !isRecalled;
  const style = {
    top: y,
    left: x,
  };

  const copyTextToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && (window as unknown as { isSecureContext?: boolean }).isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (ok) return true;
    } catch {}
    try {
      const ta2 = document.createElement('input');
      ta2.value = text;
      ta2.style.position = 'fixed';
      ta2.style.top = '0';
      ta2.style.left = '0';
      ta2.style.opacity = '0';
      document.body.appendChild(ta2);
      ta2.focus();
      ta2.select();
      const ok2 = document.execCommand('copy');
      document.body.removeChild(ta2);
      if (ok2) return true;
    } catch {}
    return false;
  };

  const animClass =
    placement === 'above'
      ? 'animate-in fade-in slide-in-from-bottom-2 duration-200'
      : 'animate-in fade-in slide-in-from-top-2 duration-200';

  return (
    <div
      data-context-menu="true"
      className={`fixed z-[9999] bg-white space-y-2 rounded-lg shadow-2xl border border-gray-200 py-1 w-[200px] text-sm ${animClass}`}
      style={style}
      onContextMenu={(e) => e.preventDefault()}
    >
      {!isRecalled && onReplyMessage && (
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onReplyMessage(msg);
            onClose();
          }}
        >
          <span className="flex items-center gap-4">
            <FaRepeat size={24} className="w-5 h-5" />
            <p className="text-[1rem]">Trả lời</p>
          </span>
        </MenuItem>
      )}
      {!isRecalled && (
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onShareMessage(msg);
            onClose();
          }}
        >
          <span className="flex gap-4 items-center">
            <FaRegShareFromSquare className="w-5 h-5" />
            <p className="text-[1rem]">Chia sẻ</p>
          </span>
        </MenuItem>
      )}

      {canCopy && (
        <MenuItem
          onClick={async (e) => {
            e.stopPropagation();
            e.preventDefault();
            const ok = await copyTextToClipboard(msg.content || '');
            if (!ok) {
              alert('Sao chép thất bại!');
            }
            onClose();
          }}
        >
          <span className="flex gap-4 items-center">
            <FaCopy className="w-5 h-5 " />
            <span className="text-[1rem] ">Sao chép</span>
          </span>
        </MenuItem>
      )}
      {!isRecalled && (
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onPinMessage(msg);
            onClose();
          }}
        >
          {isCurrentlyPinned ? (
            <p className="text-red-500 flex gap-4 items-center">
              <FaPaperclip className={`text-red-600 w-5 h-5 `} />
              <span className="text-[1rem]">Bỏ ghim tin nhắn</span>
            </p>
          ) : (
            <p className="flex gap-4 items-center ">
              <FaPaperclip className="w-5 h-5" />
              <span className="text-[1rem]">Ghim tin nhắn</span>
            </p>
          )}
        </MenuItem>
      )}

      {canEdit && (
        <MenuItem
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (setEditingMessageId && setEditContent && closeContextMenu) {
              setEditingMessageId(msg._id);
              setEditContent(msg.content || '');
              closeContextMenu();
            }
          }}
        >
          <span className="flex gap-4 items-center">
            <FaRegPenToSquare className="w-5 h-5" />
            <span className="text-[1rem]">Chỉnh sửa</span>
          </span>
        </MenuItem>
      )}

      {canDownload && (
        <MenuItem
          isAnchor={true}
          href={msg.fileUrl}
          download={msg.fileName || 'file_chat'}
          onClick={(e) => {
            e.stopPropagation();
            setTimeout(() => onClose(), 100);
          }}
        >
          <span className="flex gap-4 items-center">
            <FaDownload className="w-5 h-5" />
            <span className="text-[1rem]">Tải xuống</span>
          </span>
        </MenuItem>
      )}

      {canRecall && (
        <MenuItem
          isRed={true}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onRecallMessage(msg._id);
            onClose();
          }}
        >
          <span className="flex gap-4 items-center">
            <FaTrashCan className="w-5 h-5" />
            <span className="text-[1rem]">Thu hồi</span>
          </span>
        </MenuItem>
      )}
    </div>
  );
};

export default MessageContextMenu;
