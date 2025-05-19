import React from 'react';
import { ProductDetail } from '@/components';
import { searchDataProps } from '@/types/type';

const mockProduct: searchDataProps = {
  id: 1,
  title: 'Aquaguard Marvel NXT knowledge about the particular.',
  slug: 'aquaguard-marvel-nxt',
  description:
    'Knowledge about the particular products a company offers, Knowledge about the particular products a company offers, especially compared to those offered by its competitors especially compared to those offered by its competitors Knowledge about the particular products a company offers, especially compared to those offered by its competitors',
  price: 12999,
  image: 'https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330847_640.jpg',
  color: ['#000000', '#ffffff', '#ff5733', '#33ff57', '#3357ff'],
  quantity: 20,
};

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen container py-20">
      <ProductDetail product={mockProduct} />
    </div>
  );
};

export default ProductDetailPage;
