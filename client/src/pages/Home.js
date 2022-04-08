import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsDisplay from '../components/ProductsDisplay';
import AddCarousel from '../components/AddCarousel';
import { getAllProducts } from '../api/calls';

const Home = () => {

  var count = 0;


  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);


  useEffect(() => {
    getAllProducts(dispatch);

  }, []);

  
  var product = products[0];
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
