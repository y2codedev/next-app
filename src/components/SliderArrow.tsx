import { FaArrowLeftLong,FaArrowRight } from "react-icons/fa6";

import React from 'react'

interface SliderArrowProps {
  onClick?: () => void
  direction: 'left' | 'right'
}

const SliderArrow: React.FC<SliderArrowProps> = ({ onClick, direction }) => {
  const isLeft = direction === 'left'

  return (
    <button
      onClick={onClick}
      className={`absolute z-10 p-1 rounded-ful  sm:hidden justify-center items-center   text-white  transition-all ${
        isLeft ? 'left-1' : 'right-1'
      } top-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 md:left-6 md:right-6
      bottom-4 md:bottom-auto`}
      aria-label={isLeft ? 'Previous Slide' : 'Next Slide'}
    >
      {isLeft ? <FaArrowLeftLong size={20}  /> : <FaArrowRight size={20}  />}
    </button>
  )
}

export default SliderArrow
