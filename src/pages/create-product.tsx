// src/pages/create-product.tsx
import React from 'react';
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';

const CreateProductPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <ProductForm />
      </div>
    </div>
  );
};

export default CreateProductPage;
