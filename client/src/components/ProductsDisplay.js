import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView from './ItemView'

const ProductsDisplay = () => {
  return (
    <div>
      <div className="recommendedArea">
          <p>Recommended for you</p>
          <div className="item">
              <ItemView/><ItemView/><ItemView/><ItemView/>
          </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
