'use client';

import React, { useState, useEffect } from 'react';
import HeroSections from '@/components/Home/HeroSections';
import BottomNav from '@/components/BottomNav/BottomNav';
import { MockJsonData } from '@/data/navData';

const Page: React.FC = () => {
  const firstFixture = MockJsonData[0];
  const defaultFixture = firstFixture.thumbnail;
  const defaultColor = firstFixture.item_variants[0]?.color[0] || '';

  const [selectedFixture, setSelectedFixture] = useState(defaultFixture);
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  useEffect(() => {
    const matchingProduct = MockJsonData.find(
      (product) => product.thumbnail === selectedFixture
    );
    const fallbackColor = matchingProduct?.item_variants[0]?.color[0] || '';
    setSelectedColor(fallbackColor);
  }, [selectedFixture]);

  return (
    <>
      <div className="scroll-container">
        <div className="scroll-section">
          <HeroSections selectedFixture={selectedFixture} selectedColor={selectedColor} />
        </div>
        <div className="scroll-section">
          <HeroSections selectedFixture={selectedFixture} selectedColor={selectedColor} />
        </div>
      </div>

      <BottomNav
        onFixtureChange={setSelectedFixture}
        onColorChange={setSelectedColor}
        selectedColor={selectedColor}
        selectedFixture={selectedFixture}
      />
    </>
  );
};

export default Page;
