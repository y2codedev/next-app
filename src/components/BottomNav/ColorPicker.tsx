'use client';

import React from 'react';
import OptimizedImage from '../OptimizedImage';
import { MockJsonData } from '@/data/navData';

interface Props {
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ selectedColor, onSelect }) => {
  const colorUrls = Array.from(
    new Set(
      MockJsonData.flatMap(product =>
        product.item_variants.flatMap(variant => variant.color)
      )
    )
  );

  return (
    <div className="w-full">
      <p className="text-white text-sm mb-1">Color</p>
      <div className="flex items-center gap-2 overflow-x-auto">
        {colorUrls?.map((url, index) => {
          const isSelected = selectedColor === url;
          return (
            <button
              key={index}
              onClick={() => onSelect(url)}
              aria-label={`Color option ${index}`}
              className={`rounded-full p-[2px] border-1 transition ${
                isSelected ? 'border-white/50' : 'border-transparent'
              }`}
            >
              <OptimizedImage
                src={url}
                alt={`Color option ${index}`}
                width={28}
                height={28}
                className="rounded-full"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
