import React from 'react';
import '../styles/productsDisplayStyles.css';

const ProductsDisplay = () => {
  return (
    <div className='prods-con'>
      <div className='prods-wrap'>
        <h1 style={{ textAlign: 'center' }}>Products Section</h1>
        <p style={{ textAlign: 'center' }}>
          all products will be displayed here in some kind of grid format
        </p>
      </div>
    </div>
  );
};

export default ProductsDisplay;
