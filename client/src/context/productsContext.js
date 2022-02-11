import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    await axios
      .get('http://localhost:8000/api/products')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //special hook provided by react
  //will run on every component render/page load
  useEffect(() => {
    getAllProducts();
  }, []);

  return <ProductsProvider value={{ products }}>{children}</ProductsProvider>;
};
