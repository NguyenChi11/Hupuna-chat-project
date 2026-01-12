import React from 'react';

interface MobileSearchNavigationProps {
  isMobile: boolean;
  mobileSearchResultsCount: number;
  mobileSearchTerm: string;
  currentResultIndex: number;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const MobileSearchNavigation: React.FC<MobileSearchNavigationProps> = ({
  isMobile,
  mobileSearchResultsCount,
  mobileSearchTerm,
  currentResultIndex,
  onNavigate,
}) => {
  if (!isMobile || mobileSearchResultsCount === 0 || !mobileSearchTerm.trim()) {
    return null;
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-sm text-gray-700">
          {currentResultIndex + 1} / {mobileSearchResultsCount} kết quả
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate('prev')}
          className="p-1 rounded-full hover:bg-gray-200 text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={() => onNavigate('next')}
          className="p-1 rounded-full hover:bg-gray-200 text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileSearchNavigation;
