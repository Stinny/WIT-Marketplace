import React from 'react';
import ProductsDisplay from '../components/ProductsDisplay';
import AddCarousel from '../components/AddCarousel';

const Home = () => {
  return (
    <div>
      <div>
        <AddCarousel />
        <ProductsDisplay />
      </div>
    </div>
  );
};

export default Home;
