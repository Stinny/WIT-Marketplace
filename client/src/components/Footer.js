import React from 'react';
import '../styles/footer.css';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-con'>
      <div className='footer-wrap'>
          <div className='footer-logo'>
              <Link className='logo' to='/' style={{ textDecoration: 'none', color: '#000' }}>
                  <span style={{ color: 'rgb(255, 199, 8)' }}>WIT</span> Marketplace
              </Link>
          </div>
          <div className='footer-links'>
              <Link to='/aboutUs' className='footer-link'>
                  <span className='about-us-link'>About us |</span>
              </Link>
              <Link to='/help' className='footer-link'>
                  <span className='help-link'>Help |</span>
              </Link>
              <a href="#top" className='footer-link'>
                  <span className='to-top-link'>Top of page</span>
              </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
