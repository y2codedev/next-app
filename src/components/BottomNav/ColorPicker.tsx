'use client'

import { colorOptions } from '@/data/navData'
import OptimizedImage from '../OptimizedImage'
import React from 'react'

interface ColorPickerProps {
  selected: number
  onSelect: (index: number) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ selected, onSelect }) => (
  <div className="w-full">
    <p className="text-white text-sm mb-1">Color</p>
    <div className="flex items-center gap-1 overflow-x-auto">
      {colorOptions?.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`p-0 border rounded-full transition-all duration-300 flex items-center justify-center w-9 h-9 min-w-[2.25rem] ${
            selected === index ? 'border-white' : 'border-transparent'
          }`}
          aria-label={item.alt}
        >
          <OptimizedImage
            src={item.src}
            alt={item.alt}
            width={28}
            height={28}
            className="rounded-full"
          />
        </button>
      ))}
    </div>
  </div>
)

export default ColorPicker
