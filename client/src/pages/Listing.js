import React from 'react';
import '../styles/listingStyles.css';
import ItemView from '../components/ItemView'

const Cart = () => {
    return (
        <div class='page-con'>
            <div class='listings-con'>
                <div class='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
                <div className='item'>
                    <ItemView/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
