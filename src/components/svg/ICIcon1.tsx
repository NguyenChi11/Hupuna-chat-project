import React from 'react';

interface DotsIconProps extends React.SVGProps<SVGSVGElement> {
  dotColor?: string;
}

const DotsIcon: React.FC<DotsIconProps> = ({ dotColor = '#000000', className, ...props }) => {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect width="500" height="500" fill="none" />
      <circle cx="180.21" cy="250" r="14.38" fill={dotColor} />
      <circle cx="250" cy="250" r="14.38" fill={dotColor} />
      <circle cx="319.79" cy="250" r="14.38" fill={dotColor} />
    </svg>
  );
};

export default DotsIcon;
