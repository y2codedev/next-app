"use client";
import React from "react";
import Slider from "react-slick";
import {OptimizedImage} from "@/components";

type ThumbnailSliderProps = {
  images: string[];
  activeImage?: string;
  onImageClick?: (src: string) => void;
};

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({
  images,
  activeImage,
  onImageClick,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images?.map((imgSrc, idx) => (
          <div key={idx} className="px-1">
            <div
              onClick={() => onImageClick?.(imgSrc)}
              className={`relative w-20 sm:w-40 h-20 sm:h-40 cursor-pointer rounded overflow-hidden border ${
                activeImage === imgSrc ? "border-indigo-600" : "border-gray-200"
              }`}
            >
              <OptimizedImage
                src={imgSrc}
                alt={`Preview ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ThumbnailSlider;
