import React from 'react';
import '../styles/heroStyles.css';
import Card from './Card'
import Carousel from "react-elastic-carousel"

export default function showCarousel(){
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ];

    return(
        <div className="carousel">
            <Carousel breakPoints={breakPoints}>
                <Card number="1"/>
                <Card number="2"/>
                <Card number="3"/>
                <Card number="4"/>
                <Card number="5"/>
                <Card number="6"/>
                <Card number="7"/>
                <Card number="8"/>
            </Carousel>
        </div>
    );
}