import React from 'react';
import '../styles/header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Images/testLogo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  //To navigate to other sites
  const navigate = useNavigate();

  //Add capability to search when enter is pressed. Need to wait for DOM.
  document.addEventListener("DOMContentLoaded", function(event) {
    let input = document.getElementById("search-input")

    //On enter navigate to listings
    input.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        navigate('/Listing');

        //input.value = "";
      }
    });
  });

  return (
    <nav className='nav-con'>
      <div className='header-con'>
        <div className='logo-con'>
          <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
            <img src = {logo}/>
            {/* <span style={{ color: 'rgb(255, 199, 8)' }}>WIT</span> Marketplace */}
          </Link>
        </div>

        <div className='search-area'>
          <input id="search-input"
            className='search-bar'
            type='text'
            placeholder='Enter search key words..'
          />
          <Link to='/Listing'>
            <button className='search-button' type='button'>
              Search
            </button>
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
