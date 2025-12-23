import React from 'react';

interface CopyIconProps {
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

const ICCopy: React.FC<CopyIconProps> = ({
  size = 24,
  className = '',
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.312}
      className={className}
      onClick={onClick}
    >
      {/* Trang trước */}
      <rect
        x="6.5"
        y="6.5"
        width="9"
        height="13"
        rx="1.5"
      />

      {/* Trang sau */}
      <path d="M8.5 6C8.5 5.17157 9.17157 4.5 10 4.5H16
        C16.8284 4.5 17.5 5.17157 17.5 6V16
        C17.5 16.8284 16.8284 17.5 16 17.5"
      />
    </svg>
  );
};

export default ICCopy;
