import React from 'react';
import ProductsDisplay from '../components/ProductsDisplay';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <ProductsDisplay />
      </div>
    </div>
  );
};

export default Home;
