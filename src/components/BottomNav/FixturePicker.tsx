'use client'

import { fixtureOptions } from '@/data/navData'
import OptimizedImage from '../OptimizedImage'
import React from 'react'

interface FixturePickerProps {
  selected: number
  onSelect: (index: number) => void
}

const FixturePicker: React.FC<FixturePickerProps> = ({ selected, onSelect }) => (
  <div className="w-full">
    <p className="text-white text-sm mb-1">Fixture</p>
    <div className="flex items-center gap-2 overflow-x-auto">
      {fixtureOptions?.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`p-0 border rounded-md transition-all duration-300 flex items-center justify-center w-10 h-10 min-w-[2.25rem] ${
            selected === index ? 'border-white' : 'border-transparent'
          }`}
          aria-label={item.alt}
        >
          <OptimizedImage
            src={item.src}
            alt={item.alt}
            width={36}
            height={36}
            className="rounded"
          />
        </button>
      ))}
    </div>
  </div>
)

export default FixturePicker
