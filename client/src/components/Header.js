import React from 'react';
import '../styles/header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className='nav-con'>
      <div className='header-con'>
        <div className='logo-con'>
          <span style={{ color: 'rgb(255, 199, 8)' }}>Leopard</span> Marketplace
        </div>

        <div className='links-con'>
          <a href='#' className='signup-link'>
            Signup
          </a>
          <a href='#' className='login-link'>
            Login
          </a>
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Header;
