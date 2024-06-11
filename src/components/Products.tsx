// src/components/Products.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productsService';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const Products = () => {
  const { data, error, isLoading } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Loading Products...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-4 h-[145px]">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  if (error) return <div className="text-center mt-10">Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {data?.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center border-[1px] border-gray-400">
            <div className="p-[20px]">
                <img src={product.image} alt={product.title} className="w-[auto] h-48 "/>

            </div>
            <div className="p-4 bg-gray-400 h-full w-full">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
