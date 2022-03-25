import React from 'react';
import '../styles/signupStyles.css';

const Signup = () => {
  return (
    <div className='signup-con'>
      <div className='signup-wrap'>
        <h2>WIT Marketplace Signup</h2>
        <div className='name-con'>
          <input type='text' className='name-in' placeholder='First' />
          <input type='text' className='name-in' placeholder='Last' />
        </div>

        <div className='inputs-con'>
          <input type='email' placeholder='WIT email' className='signup-in' />
          <input type='password' placeholder='Password' className='signup-in' />
        </div>

        <button type='submit' className='signup-btn'>
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Signup;
