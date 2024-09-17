import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src="/xecutable.png" alt="Logo" className="footer-logo" />
          <p>
            We are committed to providing the best service and products to our customers. Our goal is to exceed your expectations with quality and professionalism.
          </p>
        </div>
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/engineering-services">Services</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column subscribe">
          <h3>Subscribe Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email..." />
            {/* <button type="submit"><i className="fa fa-arrow-right"></i></button> */}
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved by xecutables.com</p>
        {/* <p className="designed-by">Designed and developed by <a href="https://www.iiiqbets.com/">iiiQbets</a></p> */}
      </div>
    </footer>
  );
};

export default Footer;
