"use client";

import React, { useState, useRef } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import SliderArrow from "../SliderArrow";
import PaymentMethods from "../BottomNav/PaymentMethods";
import AddToCart from "../BottomNav/AddToCart";
import { ColorCode, VariantItem } from "@/types/home";
import { productData } from "@/data/navData";
import Slider from "react-slick";

const HeroSections: React.FC = () => {
  const variant = productData?.variants[0];
  const defaultColor = variant?.colors.all_colors[0];
  const defaultItem = variant?.items[defaultColor];

  const [selectedColor, setSelectedColor] = useState<ColorCode>(defaultColor);
  const [variantItem, setVariantItem] = useState<VariantItem>(defaultItem);
  const [selectedImage, setSelectedImage] = useState<string>(defaultItem.images[0]);

  const sliderRef = useRef<Slider>(null);

  const handleColorSelect = (color: ColorCode) => {
    const item = variant?.items[color];
    if (!item) return;
    setSelectedColor(color);
    setVariantItem(item);
    setSelectedImage(item.images[0]);
    sliderRef.current?.slickGoTo(0);
  };

  const handleImageSelect = (image: string) => {
    const index = variantItem?.images.findIndex((img) => img === image);
    if (index !== -1) {
      sliderRef.current?.slickGoTo(index);
      setSelectedImage(image);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
    beforeChange: (_: number, next: number) => {
      setSelectedImage(variantItem.images[next]);
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Slider {...sliderSettings} ref={sliderRef}>
        {variantItem?.images?.map((img, idx) => (
          <div key={idx} className="relative w-full min-h-screen">
            <OptimizedImage
              src={img}
              alt={`${variantItem.title} image ${idx + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl md:text-4xl text-white font-bold">
                {variantItem.title}
              </h2>
              <p className="mt-2 md:mt-4 text-base text-white md:text-lg max-w-2xl">
                {variantItem.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <nav className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-black/40 sm:px-4 px-2 py-3 rounded-md backdrop-blur-md shadow-md w-[97vw] sm:w-1/2">
        <div className="flex justify-between items-center mb-4 gap-4">
          <div className="w-full ">
            <span className="text-sm pb-2 text-white block">Images</span>
            <div className="flex gap-3 overflow-x-auto">
              {variantItem?.images?.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageSelect(img)}
                  className={`w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] cursor-pointer flex items-center justify-center rounded border overflow-hidden transition ${img === selectedImage
                    ? "border-indigo-600"
                    : "border-gray-300"
                    }`}
                >
                  <OptimizedImage
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full ">
            <span className="text-sm text-white pb-2 block">Color</span>
            <div className="flex gap-2  flex-wrap">
              {variant.colors.all_colors.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={` w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer border-1 transition duration-200 ${selectedColor === color
                    ? "border-white"
                    : "border-transparent"
                    }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                  title={`Color: ${color}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <AddToCart price={variantItem?.price} />
        </div>
        <PaymentMethods />
      </nav>
    </div>
  );
};

export default HeroSections;