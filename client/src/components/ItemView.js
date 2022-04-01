import React from 'react';
import '../styles/itemStyle.css';
import Carousel from "react-elastic-carousel"

//Add product images her
import img0 from '../Images/e0.jpeg';
import img1 from '../Images/e1.jpeg';
import img2 from '../Images/e2.jpeg';
import img3 from '../Images/e3.jpeg';

export default function showItem(){
    return(
        <div className="smallCarousel" >
            <Carousel>
                <div>
                    <img src={img0}/>
                </div>
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <img src={img3}/>
                </div>
            </Carousel>
        </div>
    );
}