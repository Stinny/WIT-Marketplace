import React from 'react';
import '../styles/itemStyle.css';
import Carousel from "react-elastic-carousel"
import { Link } from 'react-router-dom';

//Add product images her
import img0 from '../Images/e0.jpeg';
import img1 from '../Images/e1.jpeg';
import img2 from '../Images/e2.jpeg';
import img3 from '../Images/e3.jpeg';
import nullImage from '../Images/nullImage.png';

export default function showItem({ data }){
    if(data != 'undefined' && data)
    {
        console.log(data);
        if(data.images.length < 1)
        {
            return(
                <div className="smallCarousel" >
                    <Carousel className="imgCarousel">
                        <div>
                            <img src={nullImage}/>
                        </div>
                    </Carousel>
                    <div id="info">
                        <p>Item title</p>
                        <p>$1,000</p>
                    </div>
        
                </div>
            )
        }
        return (
            <div className = "smallCarousel">
                <Carousel itemsToShow={1}>
                {data.images.map((image) => {
                    return <item><img src = {image}/></item>
                })}
                </Carousel>
            </div>

        )
    }
    return(
        <div className="smallCarousel">
            <Carousel className="imgCarousel">
                <div>
                    <img src/>
                </div>
                <div>
                    <img src/>
                </div>
                <div>
                    <img src/>
                </div>
                <div>
                    <img src/>
                </div>
            </Carousel>
            
                <div id="info">
                <Link to = "/">
                    <p>Item title</p>
                </Link>
                   
                <p>$1,000</p>
                </div>

        </div>
    );

}