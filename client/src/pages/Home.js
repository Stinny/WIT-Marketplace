import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsDisplay from '../components/ProductsDisplay';
import AddCarousel from '../components/AddCarousel';
import { getAllProducts } from '../api/calls';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  console.log(products);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  return (
    <div>
      <div>
        <AddCarousel />
        <ProductsDisplay products={products} />
      </div>
    </div>
  );
};

export default Home;
