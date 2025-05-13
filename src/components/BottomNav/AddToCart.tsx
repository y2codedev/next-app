'use client'

import React from 'react'
import Button from '@/components/Button'

const AddToCart: React.FC = () => {
  const handleClick = () => {
    console.log('Added to cart!')
  }

  return (
    <Button
      label="Add to Cart"
      price="399"
      onClick={handleClick}
      variant="primary"
    />
  )
}

export default AddToCart
