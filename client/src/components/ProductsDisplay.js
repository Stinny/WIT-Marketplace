import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView from './ItemView'
import Carousel from "react-elastic-carousel";

const ProductsDisplay = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ]

  return (
    <div>
      <div className="recommendedArea">
          <p>Recommended for you</p>
          <div className="item">
              <Carousel className="parent" breakPoints={breakPoints}>
                  <ItemView className="child"/>
                  <ItemView className="child"/>
                  <ItemView className="child"/>
                  <ItemView className="child"/>
                  <ItemView className="child"/>
                  <ItemView className="child"/>
              </Carousel>
          </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
