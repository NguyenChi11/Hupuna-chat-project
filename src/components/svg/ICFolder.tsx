import React from 'react';

interface FormIconProps extends React.SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

const ICFolder: React.FC<FormIconProps> = ({ strokeWidth = 8, className, ...props }) => {
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
      <path d="m314.8,347.88h-129.61c-18.24,0-33.08-14.84-33.08-33.08v-129.61c0-18.24,14.84-33.08,33.08-33.08h129.61c18.24,0,33.08,14.84,33.08,33.08v129.61c0,18.24-14.84,33.08-33.08,33.08Z" />

      {/* Dòng nội dung */}
      <line x1="155.36" y1="257.35" x2="300.48" y2="257.35" />
      <line x1="239.53" y1="206.15" x2="295.04" y2="206.15" />

      {/* Avatar */}
      <circle cx="200.03" cy="206.15" r="13.74" />
    </svg>
  );
};

export default ICFolder;
