import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView500px from './ItemView500px'
import Carousel from "react-elastic-carousel";

const ProductsDisplay = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 700, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ]

  return (
    <div className='product-display-con'>
      <div className="suggestionsArea">
          <p className="section"> Recommended Items</p>
          <div className="item">
              <Carousel className="parent" breakPoints={breakPoints}>
                  <ItemView500px className="child"/>
                  <ItemView500px className="child"/>
                  <ItemView500px className="child"/>
                  <ItemView500px className="child"/>
                  <ItemView500px className="child"/>
                  <ItemView500px className="child"/>
              </Carousel>
          </div>
      </div>
        <div className="suggestionsArea">
            <p className="section"> Recommended Items</p>
            <div className="item">
                <Carousel className="parent" breakPoints={breakPoints}>
                    <ItemView500px className="child"/>
                    <ItemView500px className="child"/>
                    <ItemView500px className="child"/>
                    <ItemView500px className="child"/>
                    <ItemView500px className="child"/>
                    <ItemView500px className="child"/>
                </Carousel>
            </div>
        </div>
    </div>
  );
};

export default ProductsDisplay;
