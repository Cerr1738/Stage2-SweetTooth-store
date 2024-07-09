import React from 'react';
import '../styles/Footer.css';
import email from '../Assets/mail (1).png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h1>Sweet Tooth</h1>
        <div className="footer-category">
          <h4>Category</h4>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Cart</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>+234 7013417684, +234 9076572493</p>
          <p>winnie@gmail.com, ezechisom@gmail.com</p>
          <div className="social-media">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div className="newsletter">
          <h4>NEWSLETTER-SIGN UP FOR 10% OFF</h4>
          <div className="email">
            <input type="email" placeholder="Email" />
            <img src={email} alt="Email Icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Sweet Tooth 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
