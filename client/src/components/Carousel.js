import React from 'react';
import '../styles/carouselStyles.css';
import Carousel from "react-elastic-carousel"
//Just import advertisement images here
import add1 from '../Images/add1.jpg';
import add2 from '../Images/add2.jpg';
import add3 from '../Images/add3.jpg';
import add4 from '../Images/add4.jpg';

export default function showCarousel(){

    return(
        <div className="carousel" >
            <Carousel>
                <div>
                    <img src={add1}/>
                </div>
                <div>
                    <img src={add2}/>
                </div>
                <div>
                    <img src={add3}/>
                </div>
                <div>
                    <img src={add4}/>
                </div>
            </Carousel>
        </div>
    );
}