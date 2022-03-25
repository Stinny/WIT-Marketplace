import React from 'react';
import '../styles/cartStyles.css';

const Cart = () => {
  return (
    <div className='cart-con'>
      <h1>Your Cart</h1>
      <div className='cart-wrap'>
        <div className='items-con'>
          <h2 style={{ textAlign: 'center' }}>Cart items will display here</h2>
        </div>
        <div className='total-con'>
          <h3>Your Total:</h3>
          <div className='total-ex'></div>
          <button className='check-btn'>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
