import React from 'react';
import '../styles/itemStyle.css';
import Carousel from 'react-elastic-carousel';

//Add product images her
import img0 from '../Images/e0.jpeg';
import img1 from '../Images/e1.jpeg';
import img2 from '../Images/e2.jpeg';
import img3 from '../Images/e3.jpeg';

export default function showItem({ product }) {
  return (
    <div className='carousel500px'>
      <Carousel className='imgCarousel'>
        <div>
          <img src={img0} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
      <div id='info'>
        <p>title</p>
        <p>$1,000</p>
      </div>
    </div>
  );
}
