import HeroSections from '@/components/Home/HeroSections'
import { BannerSlide } from '@/types/home'
import React from 'react'

const page = () => {
  const slides: BannerSlide[] = [
    {
      id: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/10/18/11/15/bathroom-8323895_1280.jpg',
      title: 'Welcome to Swissblu',
      description: 'Experience the power of clean water with our filters.',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/10/18/11/15/bathroom-8323895_1280.jpg',
      title: 'Fresh. Pure. Filtered.',
      description: 'Innovative technology for a better shower experience.',
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/10/18/11/15/bathroom-8323895_1280.jpg',
      title: 'Shop the Future of Shower Filters',
      description: 'Smart filtering systems for your modern lifestyle.',
    },
  ]
  return (
   <div>
      <HeroSections slides={slides} />
   </div>
  )
}

export default page