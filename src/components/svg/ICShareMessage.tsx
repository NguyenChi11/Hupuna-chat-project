import React from 'react';

interface ArrowIconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const ICShareMessage: React.FC<ArrowIconProps> = ({
  size = 24,
  color = '#000',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M512,230.431L283.498,44.621v94.807C60.776,141.244-21.842,307.324,4.826,467.379
        c48.696-99.493,149.915-138.677,278.672-143.14v92.003L512,230.431z"
      />
    </svg>
  );
};

export default ICShareMessage;
