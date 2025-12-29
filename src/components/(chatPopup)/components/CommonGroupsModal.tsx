import React from 'react';
import CommonGroupsMobile from '@/components/(group)/CommonGroupsMobile';
import { User } from '@/types/User';
import { GroupConversation } from '@/types/Group';

interface CommonGroupsModalProps {
  isOpen: boolean;
  onClose: () => void;
  groups: GroupConversation[];
  partner: User;
  onShowCreateGroup: () => void;
  onShowAddToGroup: () => void;
}

export default function CommonGroupsModal({
  isOpen,
  onClose,
  groups,
  partner,
  onShowCreateGroup,
  onShowAddToGroup,
}: CommonGroupsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white md:bg-black/50 md:flex md:items-center md:justify-center">
      <div className="bg-white md:rounded-2xl shadow-2xl w-full h-full md:h-[45rem] md:max-w-md overflow-hidden flex flex-col">
        <CommonGroupsMobile
           groups={groups}
           partner={partner}
           onBack={onClose}
           onShowCreateGroup={onShowCreateGroup}
           onShowAddToGroup={onShowAddToGroup}
        />
      </div>
    </div>
  );
}
