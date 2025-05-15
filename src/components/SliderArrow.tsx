import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import React from 'react';

interface SliderArrowProps {
  onClick?: () => void;
  direction: 'left' | 'right';
}

const SliderArrow: React.FC<SliderArrowProps> = ({ onClick, direction }) => {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      className={`absolute z-10 p-2 flex justify-center items-center  cursor-pointer rounded-full 
        top-1/2 -translate-y-1/2 
        ${isLeft ? 'left-2 md:left-6' : 'right-2 md:right-6'}`}
      aria-label={isLeft ? 'Previous Slide' : 'Next Slide'}
    >
      {isLeft ? <FaArrowLeftLong size={15} color="black" /> : <FaArrowRight size={15} color="black" />}
    </button>
  );
};

export default SliderArrow;
