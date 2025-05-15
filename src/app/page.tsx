'use client';

import React, { useState, useEffect, useMemo } from 'react';
import HeroSections from '@/components/Home/HeroSections';
import BottomNav from '@/components/BottomNav/BottomNav';
import { MockJsonData } from '@/data/navData';
import { ProductType } from '@/types/home';

const Home: React.FC<ProductType> = () => {
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

  const { product, variant } = useMemo(() => {
    const product = MockJsonData.find((p) =>
      p.item_variants.some((v) => v.thumbnail === selectedFixture)
    );

    const variant = product?.item_variants.find(
      (v) =>
        v.thumbnail === selectedFixture &&
        v.color.includes(selectedColor)
    ) || product?.item_variants.find((v) => v.thumbnail === selectedFixture);

    return { product, variant };
  }, [selectedFixture, selectedColor]);

  const title = variant?.title || product?.title || '';
  const description = variant?.description || product?.description || '';
  const price = variant?.price || product?.item_variants[0].price || 0;

  return (
    <>
      <div className="scroll-container relative">
        <div className="scroll-section">
          <HeroSections selectedFixture={selectedFixture} selectedColor={selectedColor} title={title} description={description} />
        </div>
        <div className="scroll-section">
          <HeroSections selectedFixture={selectedFixture} selectedColor={selectedColor} title={title} description={description} />
        </div>
      </div>

      <BottomNav
        onFixtureChange={setSelectedFixture}
        onColorChange={setSelectedColor}
        selectedColor={selectedColor}
        selectedFixture={selectedFixture}
        price={price}
      />
    </>
  );
};

export default Home;
