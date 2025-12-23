import React from 'react';

interface MicOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

const MicIcon: React.FC<MicOutlineIconProps> = ({ strokeWidth = 10, className, ...props }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="black"
      fill="none"
      {...props}
    >
      {/* Thân mic */}
      <path
        d="m251.81,298.44c-23.98,0-43.48-19.51-43.48-43.48v-66.07c0-23.98,19.51-43.49,43.48-43.49s43.48,19.51,43.48,43.49v66.07c0,23.98-19.51,43.48-43.48,43.48Z"
        strokeWidth={strokeWidth}
      />

      {/* Vòng mic */}
      <path
        d="m250.16,323.9c-18.31,0-36.25-7.74-49.47-21.41-13.97-14.43-21.3-34.12-20.1-54.01"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="m250.16,323.9c18.24-.49,36.01-8.76,48.77-22.7,13.27-14.49,19.93-33.21,18.73-52.7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Chân mic */}
      <path d="m277.58,354.6h-51.54" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="m251.81,320.37v27.21" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default MicIcon;
