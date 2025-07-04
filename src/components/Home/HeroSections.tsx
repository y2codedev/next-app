"use client";

import React, { useState, useRef } from "react";
import { ColorCode, VariantItem } from "@/types/home";
import { productData } from "@/data/navData";
import Slider from "react-slick";
import {
  Button,
  AddToCartModal,
  PaymentMethods,
  SliderArrow,
  OptimizedImage,
} from "@/components";

const HeroSections = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const variant = productData?.variants[0];
  const defaultColor = variant?.colors.all_colors[0] || "#000000";
  const defaultItem = variant?.items[defaultColor] || {
    title: "",
    description: "",
    price: 0,
    images: [],
    stock: 0,
    thumbnail: "",
  };

  const [selectedColor, setSelectedColor] = useState<ColorCode>(defaultColor);
  const [variantItem, setVariantItem] = useState<VariantItem>(defaultItem);
  const [selectedImage, setSelectedImage] = useState<string>(
    defaultItem.images[0] || "",
  );

  const sliderRef = useRef<Slider>(null);

  const handleColorSelect = (color: ColorCode) => {
    const item = variant?.items[color];
    if (!item) return;
    setSelectedColor(color);
    setVariantItem(item);
    setSelectedImage(item.images[0] || "");
    sliderRef.current?.slickGoTo(0);
  };

  const handleImageSelect = (image: string) => {
    const index = variantItem?.images.findIndex((img) => img === image);
    if (index !== undefined && index !== -1) {
      sliderRef.current?.slickGoTo(index);
      setSelectedImage(image);
    }
  };

  const product = {
    id: variantItem?.id || 0,
    title: variantItem?.title || "Product",
    description: variantItem?.description || "",
    price: variantItem?.price || 0,
    images: variantItem?.images || [],
    stock: variantItem?.stock || 0,
    thumbnail: variantItem?.thumbnail || variantItem?.images[0] || "",
    discountPercentage: variantItem?.discountPercentage || 0,
    warrantyInformation: variantItem?.warrantyInformation || "",
    shippingInformation: variantItem?.shippingInformation || "",
    returnPolicy: variantItem?.returnPolicy || "",
    minimumOrderQuantity: variantItem?.minimumOrderQuantity || 1,
    rating: variantItem?.rating || 0,
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 600,
    arrows: true,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
    beforeChange: (_: number, next: number) => {
      setSelectedImage(variantItem.images[next] || "");
    },
  };

  if (!variant) return null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Slider {...sliderSettings} ref={sliderRef}>
        {variantItem.images?.map((img, idx) => (
          <div key={idx} className="relative w-full min-h-screen">
            <OptimizedImage
              src={img}
              alt={`${variantItem.title} image ${idx + 1}`}
              fill
              loading={idx === 0 ? "eager" : "lazy"}
              priority={idx === 0}
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

      <nav className="absolute bottom-5  left-1/2 transform -translate-x-1/2 z-30 bg-black/40 sm:px-4 px-2 py-3 rounded-md backdrop-blur-md shadow-md w-[97vw] sm:w-1/2">
        <div className="flex justify-between items-center mb-4 gap-4">
          <div className="">
            <span className="text-sm pb-2 text-white block">Images</span>
            <div className="flex gap-3 overflow-x-auto">
              {variantItem?.images?.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageSelect(img)}
                  className={`w-[30px] h-[30px]
                  sm:w-[60px] sm:h-[60px]
                  md:w-[30px] md:h-[30px]
                  lg:w-[60px] lg:h-[60px]
                  xl:w-[60px] xl:h-[60px]
                  2xl:w-[100px] 2xl:h-[100px]
                  cursor-pointer flex items-center justify-center rounded border overflow-hidden transition ${img === selectedImage
                      ? "border-indigo-600"
                      : "border-gray-300"
                    }`}
                >
                  <OptimizedImage
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={60}
                    height={60}
                    loading="lazy"
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <span className="text-sm text-white pb-2 block">Color</span>
            <div className="flex gap-2 flex-wrap">
              {variant.colors.all_colors.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer border-2 transition duration-200 ${selectedColor === color
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
        <div className="my-4 flex justify-center">
          <Button
            variant="custom"
            label="Add to Cart"
            price={`₹ ${variantItem.price}`}
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 font-semibold py-3 w-full text-2xlsm bg-gray-200 text-black rounded hover:bg-gray-300"
          />
        </div>
        <PaymentMethods />
      </nav>

      <AddToCartModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default HeroSections;