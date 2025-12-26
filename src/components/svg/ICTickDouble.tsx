import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

const ICTickDouble: React.FC<IconProps> = ({
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
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      <path d="M1.75 9.75L4.25 12.25" />
      <path d="M5.75 8.25L8.25 5.75" />
      <path d="M3.75 10.25L6.25 12.75L12.25 6.25" />
    </svg>
  );
};

export default ICTickDouble;
