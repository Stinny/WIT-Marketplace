import React from 'react';
import '../styles/header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav-con'>
      <div className='header-con'>
        <div className='logo-con'>
          <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
            <span style={{ color: 'rgb(255, 199, 8)' }}>WIT</span> Marketplace
          </Link>
        </div>

        <div className='links-con'>
          <Link to='/signup'>
            <button className='signup-link'>Signup</button>
          </Link>
          <Link to='login'>
            <button className='login-link'>Login</button>
          </Link>
          <Link to='/cart'>
            <FaShoppingCart style={{ color: '#000' }} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
