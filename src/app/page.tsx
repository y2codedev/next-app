import BottomNav from '@/components/BottomNav/BottomNav'
import HeroSections from '@/components/Home/HeroSections'
import { BannerSlide } from '@/types/home'
import React from 'react'

const page = () => {
  const slides: BannerSlide[] = [
    {
      id: 1,
      imageUrl: 'https://cdn.keepconverting.ai/Blu/Images/TKP/HH2.png',
      title: 'Welcome to Swissblu',
      description: 'Experience the power of clean water with our filters.',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.keepconverting.ai/Blu/Images/TKP/HH3.png',
      title: 'Fresh. Pure. Filtered.',
      description: 'Innovative technology for a better shower experience.',
    },
    {
      id: 3,
      imageUrl: 'https://cdn.keepconverting.ai/Blu/Images/TKP/HH1.png',
      title: 'Shop the Future of Shower Filters',
      description: 'Smart filtering systems for your modern lifestyle.',
    },
  ]
  return (
   <div>
      <HeroSections slides={slides} />
      <BottomNav />
   </div>
  )
}

export default page