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
    />
  )
}

export default AddToCart
