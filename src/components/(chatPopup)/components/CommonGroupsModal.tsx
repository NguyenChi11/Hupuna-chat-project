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
      <div className="w-full h-full md:w-[400px] md:h-[600px] md:bg-white md:rounded-xl overflow-hidden relative shadow-xl">
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
