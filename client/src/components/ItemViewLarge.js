import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import '../styles/itemStyle.css';

//Add product images her
import img0 from '../Images/e0.jpeg';
import img1 from '../Images/e1.jpeg';
import img2 from '../Images/e2.jpeg';
import img3 from '../Images/e3.jpeg';
import nullImage from '../Images/nullImage.png';

var counter = 0;

function increment(num)
{
  return num++;
}

export default function showItem({ product, itemID, itemSize }) {

    let size = itemSize
    let sizeFormat = size == "large" ? "carouselLarge" :  "smallCarousel";
    console.log(sizeFormat)
  
  if((product != 'undefined' && product))
    {
      if(product.images.length < 1)
        {
          return(
            <div className={sizeFormat} >
            <Carousel className="imgCarousel">
                <div>
                  <Link to = {"/item/" + itemID}>
                  <img src={nullImage}/>
                  </Link>
                    
                </div>
            </Carousel>
            <div id="info">
                <p>{product.title}</p>
                <p>{"$" + product.price}</p>
            </div>

          </div>
          )
        }
      return (
        <div className={sizeFormat} >

        <div className = "imgCarousel">
        <Carousel itemsToShow={1}>
          {product.images.map((image) => {
            return <item>
              <Link to = {"item/" + itemID}>
              <img src = {image}/>
              </Link>
              
              </item>
          })}
        </Carousel>
        <div id="info">
                <p>{product.title}</p>
                <p>{"$" + product.price}</p>
            </div>
        </div>
        </div>
      );

    }

  return (
    <div className={sizeFormat}>
      <Carousel className='imgCarousel'>
        <div>
          <Link to = "/item/0">
             <img src = {img0}/>
          </Link>
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
