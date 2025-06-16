
'use client';
import { FiX } from 'react-icons/fi';
import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  size?: number;
  iconColor?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = '',
  size = 18,
  iconColor = '#333',
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Close"
      className={`absolute top-1 right-1 z-10 h-6 cursor-pointer w-6 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition duration-150 ${className}`}
    >
      <FiX size={size} color={iconColor} />
    </button>
  );
};

export default CloseButton;