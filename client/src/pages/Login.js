import React from 'react';
import '../styles/loginStyles.css';

const Login = () => {
  return (
    <div className='login-con'>
      <div className='login-wrap'>
        <h2>WIT Marketplace Login</h2>
        <div className='inputs-con'>
          <input type='email' placeholder='WIT email' className='login-in' />
          <input type='password' placeholder='Password' className='login-in' />
        </div>
        <button type='submit' className='login-btn'>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
