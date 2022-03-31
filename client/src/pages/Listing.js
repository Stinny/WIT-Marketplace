import React from 'react';
import '../styles/listingStyles.css';

const Cart = () => {
    return (
        <div className='listings-con'>

            <div className='area-wrap'>

                <div className='filter-con'>
                    <h2> Filters </h2>
                </div>
                <div className='items-con'>
                    <h2> Results </h2>
                    <div className='items-show'></div>
                </div>

            </div>

        </div>
    );
};

export default Cart;
