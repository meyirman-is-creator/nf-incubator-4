// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
