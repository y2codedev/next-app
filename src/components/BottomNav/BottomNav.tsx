'use client';

import React from 'react';
import FixturePicker from './FixturePicker';
import ColorPicker from './ColorPicker';
import AddToCart from './AddToCart';
import PaymentMethods from './PaymentMethods';

interface Props {
  onFixtureChange: (fixture: string) => void;
  onColorChange: (color: string) => void;
  selectedColor: string;
  selectedFixture: string;
}

const BottomNav: React.FC<Props> = ({ onFixtureChange, onColorChange ,selectedColor,selectedFixture}) => {
  return (
    <nav className="fixed bottom-0 sm:bottom-4 left-0 w-full sm:rounded-md sm:w-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2  z-30 bg-black/20 px-2 py-4 backdrop-blur-sm">
      <div className="flex gap-3 justify-center items-center">
        <FixturePicker onSelect={onFixtureChange} selectedFixture={selectedFixture} />
        <ColorPicker selectedColor={selectedColor} onSelect={onColorChange} />
      </div>
      <div className="mt-4">
        <AddToCart />
        <PaymentMethods />
      </div>
    </nav>
  );
};

export default BottomNav;
