import React from 'react';

interface FaceIconProps extends React.SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

const EmojiIcon: React.FC<FaceIconProps> = ({ strokeWidth = 6, className, ...props }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="black"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Khung */}
      <path d="m312.44,345.37h-124.89c-18.15,0-32.92-14.77-32.92-32.92v-124.89c0-18.15,14.77-32.92,32.92-32.92h124.89c18.15,0,32.92,14.77,32.92,32.92v124.89c0,18.15-14.77,32.92-32.92,32.92Z" />

      {/* Mắt */}
      <ellipse cx="222.83" cy="224.56" rx="11.56" ry="14.65" />
      <ellipse cx="278.39" cy="224.56" rx="11.56" ry="14.65" />

      {/* Miệng */}
      <path d="m204.84,269.87c13.44,12.59,27.01,18.65,40.11,18.16,12.12-.5,24.5-6.61,36.81-18.16" />

      {/* Cằm / cảm xúc */}
      <path d="m252.81,291.77c0,8.6,6.11,15.39,14.53,16.13,5.93.52,10.35-1.21,13.06-5.17" />
    </svg>
  );
};

export default EmojiIcon;
