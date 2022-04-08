import React from 'react';
import '../styles/productsDisplayStyles.css';
import ItemView500px from './ItemView500px';
import Carousel from 'react-elastic-carousel';

var count = 0;

const ProductsDisplay = ({ products }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  var x = 0;

  function initNum()
  {
    x++;
    return x;
  }


  return (
    <div className='product-display-con'>
      {}
      <div className='suggestionsArea'>
        <p className='section'>Newest Items</p>
        <div className='item'>
        {/* <Carousel className='parent' breakPoints={breakPoints}>
            {products.slice(products.length - 5, products.length).map((product) => (
              <ItemView500px className='child' product={product} itemID={initNum() - 1}/>
            )).reverse()}
          </Carousel>  can be used to limit the amount of new products shown, the page calculation needs to be fixed though*/}

          
          <Carousel className='parent' breakPoints={breakPoints}>
            {products.map((product) => (
              <ItemView500px className='child' product={product} itemID={initNum() - 1}/>
            )).reverse()}
          </Carousel>
        </div>
      </div>
      <div className='suggestionsArea'>
        <p className='section'> Recommended Items</p>
        <div className='item'>
          <Carousel className='parent' breakPoints={breakPoints}>
            <ItemView500px className='child' />
            <ItemView500px className='child' />
            <ItemView500px className='child' />
            <ItemView500px className='child' />
            <ItemView500px className='child' />
            <ItemView500px className='child' />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
