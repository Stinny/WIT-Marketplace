import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView from './ItemView';
import Carousel from 'react-elastic-carousel';

var count = 0;

const ProductsDisplay = ({ products }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  let x = 0;

  function initNum()
  {
    x++;
    return x;
  }

  //Set to the desired number of the newest items to show in the top
  let nItems = 10;

  return (
    <div className='product-display-con'>
      {}
      <div className='suggestionsArea'>
        <p className='section'>Newest Items</p>
        <div className='item'>
        <Carousel className='parent' breakPoints={breakPoints} enableAutoPlay={true}>
            {products.slice(products.length - nItems, products.length).map((product) => (
              <ItemView className='child' product={product} itemID={products.length - nItems + initNum() - 1}
              itemSize={"large"}/>
            )).reverse()}
          </Carousel>
        </div>
      </div>

      <div className='allItems suggestionsArea'>
        <p className='section'> All Available Items</p>
        <div className='grid'>
          {products.slice(0, products.length - (nItems+1)).map((product) => (
              <ItemView className='itemListHome' product={product} itemID={initNum() - (nItems+1)}
                             itemSize={"small"}/>
          )).reverse()}
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
