import React from 'react';
import '../styles/itemStyle.css';
import Carousel from "react-elastic-carousel";

//Add product images her
import img0_0 from '../Images/Items/0_0.jpeg';
import img0_1 from '../Images/Items/0_1.jpeg';
import img0_2 from '../Images/Items/0_2.jpeg';
import img0_3 from '../Images/Items/0_3.jpeg';
import img1_0 from '../Images/Items/1_0.jpeg';
import img1_1 from '../Images/Items/1_1.jpeg';
import img1_2 from '../Images/Items/1_2.jpeg';
import img1_3 from '../Images/Items/1_3.jpeg';


export default function showItem(){

    
    var pathArray = window.location.pathname.split('/');
    if(pathArray[2] == 1)
    {
        return(
            <div className="smallCarousel" >
                <Carousel className="imgCarousel">
                    <div>
                        <img src={img1_0}/>
                    </div>
                    <div>
                        <img src={img1_1}/>
                    </div>
                    <div>
                        <img src={img1_2}/>
                    </div>
                    <div>
                        <img src={img1_3}/>
                    </div>
                </Carousel>
                <div id="info">
                    <p>Item title</p>
                    <a href = "/item/0"></a>
                    <p>$1,000</p>
                </div>
    
            </div>
        );
    
    }
    return(
        <div className="smallCarousel" >
            <Carousel className="imgCarousel">
                <div>
                    <img src={img0_0}/>
                </div>
                <div>
                    <img src={img0_1}/>
                </div>
                <div>
                    <img src={img0_2}/>
                </div>
                <div>
                    <img src={img0_3}/>
                </div>
            </Carousel>
            <div id="info">
                <p>Item title</p>
                <a href = "/item/0"></a>
                <p>$1,000</p>
            </div>

        </div>
    );

    
}
