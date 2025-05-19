'use client';

import React from 'react';
import { OptimizedImage } from '@/components';
import { MockJsonData } from '@/data/navData';

interface Props {
  onSelect: (fixture: string) => void;
  selectedFixture: string;
}

const FixturePicker: React.FC<Props> = ({ onSelect, selectedFixture }) => {
  return (
    <div className="w-full">
      <p className="text-white text-sm mb-1">Fixture</p>
      <div className="flex items-center gap-2 overflow-x-auto">
        {MockJsonData.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item.thumbnail)}
            className={`border ${selectedFixture === item.thumbnail ? 'border-white/50' : 'border-transparent'} p-1 rounded`}
          >
            <OptimizedImage
              src={item.thumbnail}
              alt={item.title}
              width={36}
              height={36}
              className="rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FixturePicker;
