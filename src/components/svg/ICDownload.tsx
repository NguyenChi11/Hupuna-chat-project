import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  onClick?: () => void;
}

const ICDownload: React.FC<IconProps> = ({
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
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      {/* Arrow down */}
      <path d="M12 3V15" />
      <path d="M8 11L12 15L16 11" />

      {/* Bottom container */}
      <path d="M3 15V15.05C3 18 4.5 20 9 20H15C19.5 20 21 18 21 15.05V15" />
    </svg>
  );
};

export default ICDownload;
