import React from 'react';
import '../styles/sellStyles.css';

const Login = () => {
    return (
        <div className='login-con'>
            <div className='login-wrap'>
                <h2>What do you want to sell?</h2>
                <div className='inputs-con'>
                    <input type='text' placeholder='What' className='login-in' />
                    <input type='text' placeholder='Price?' className='login-in' />
                </div>
                <button type='submit' className='login-btn'>
                    SELL
                </button>
            </div>
        </div>
    );
};

export default Login;
