'use client';

import React, { useMemo } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OptimizedImage from '@/components/OptimizedImage';
import SliderArrow from '@/components/SliderArrow';
import { MockJsonData } from '@/data/navData';

interface Props {
  selectedFixture: string;
  selectedColor: string;
  title: string;
  description: string;
}

const HeroSections: React.FC<Props> = ({ selectedFixture, selectedColor, title, description }) => {
  const variantPhotos = useMemo(() => {
    const product = MockJsonData.find(item =>
      item.item_variants.some(variant => variant.thumbnail === selectedFixture)
    );

    if (!product) return [];

    const variant = product.item_variants.find(v =>
      v.color.includes(selectedColor) && v.thumbnail === selectedFixture
    ) || product.item_variants.find(v => v.thumbnail === selectedFixture);

    return variant?.photos || product.photos;
  }, [selectedFixture, selectedColor]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {variantPhotos?.map((photo, index) => (
          <div key={index} className="w-full min-h-screen relative">
            <OptimizedImage
              src={photo}
              alt={`Variant Image`}
              fill
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl md:text-4xl text-white font-bold">{title}</h2>
              <p className="mt-2 md:mt-4 text-base text-white md:text-lg max-w-2xl">{description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSections;
