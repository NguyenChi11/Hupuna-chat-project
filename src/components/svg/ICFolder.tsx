import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

const ICFolder: React.FC<IconProps> = ({
  size = 16,
  className = '',
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      <path d="M1 1H5L8 3H13V5H3.75L2 11H4.1L5.25 7H15L13.5 14H1V1Z" />
    </svg>
  );
};

export default ICFolder;
