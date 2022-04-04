import React from 'react';
import '../styles/header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import testLogo from '../Images/testLogo.png';

const Header = () => {
  return (
    <nav className='nav-con'>
      <div className='header-con'>
        <div className='logo-con'>
          
          {<Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
            <img src ={testLogo} className = "logo"/>
          </Link>}
        </div>

        <div className='search-area'>
          <input className='search-bar' type='text'  placeholder='Enter search key words..'/>
          <Link to='./productdetail'>
            <button className='search-button' type='button'>Search</button>
          </Link>

          <Link to='/addproduct'>
            <button className='add-link'>Sell</button>
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
