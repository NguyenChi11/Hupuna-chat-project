import React from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';

interface ScrollToBottomButtonProps {
  showScrollDown: boolean;
  pendingNewCount: number;
  onClick: () => void;
}

const ScrollToBottomButton: React.FC<ScrollToBottomButtonProps> = ({
  showScrollDown,
  pendingNewCount,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Cuộn xuống cuối"
      className={`absolute cursor-pointer hover:bg-gray-100 md:bottom-35 bottom-45 right-4 z-5 rounded-full bg-white border border-gray-200 shadow-lg p-3 transition-all ${
        showScrollDown ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        <HiChevronDoubleDown className="w-6 h-6 text-gray-700" />
        {pendingNewCount > 0 && (
          <span className="absolute -top-6 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
            {pendingNewCount}
          </span>
        )}
      </div>
    </button>
  );
};

export default ScrollToBottomButton;
