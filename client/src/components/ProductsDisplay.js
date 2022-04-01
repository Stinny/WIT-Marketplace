import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView from './ItemView'

const ProductsDisplay = () => {
  return (
    <div className='prods-con'>
      <div className='prods-wrap'>
          <ItemView/>
          <ItemView/>
          <ItemView/>
      </div>
    </div>
  );
};

export default ProductsDisplay;
