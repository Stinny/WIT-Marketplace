import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView from './ItemView'

const ProductsDisplay = () => {
  return (
      // <div className='prods-con'>
      //   <div className='prods-wrap'>
    <div>
      <div className="recommendedArea">
          <p>Recommended for you</p>
          <div className="item">
              <ItemView/>
          </div>
          <div className="item">
              <ItemView/>
          </div>
          <div className="item">
              <ItemView/>
          </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
