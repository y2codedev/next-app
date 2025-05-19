'use client'

import React from 'react';
import { Button } from '@/components';

interface Props {
  price: number;
}

const AddToCart: React.FC<Props> = ({ price }) => {

  return (
    <Button
      label={'Add to Cart'}
      price={price}
      variant="primary"
      className=" rounded-md text-sm sm:text-base  hover:bg-[#c9d8ce] transition duration-300"
    />
  )
}

export default AddToCart
