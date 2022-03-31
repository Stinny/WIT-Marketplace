import React from 'react';
import ProductsDisplay from '../components/ProductsDisplay';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <div>
        <Carousel />
        <ProductsDisplay />
      </div>
    </div>
  );
};

export default Home;
