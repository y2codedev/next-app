'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import { BannerSlide } from '@/types/home'
import OptimizedImage from "@/components/OptimizedImage";
import SliderArrow from "@/components/SliderArrow";

interface BannerSliderProps {
  slides: BannerSlide[]
}

const HeroSections: React.FC<BannerSliderProps> = ({ slides }) => {
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
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-h-screen w-full">
            <OptimizedImage
              src={slide.imageUrl}
              alt={slide.title}
              fill={true}
              className="brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 md:mt-4 text-base md:text-lg max-w-2xl px-4">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeroSections
