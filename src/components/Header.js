import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'

import image33 from '../Assets/ei_search.png'
import image34 from '../Assets/Vector (1).png'
import image35 from '../Assets/Vector.png'

const fonts = [
  { id: 1, name: 'search-icon', image: image33 },
  { id: 3, name: 'cart-icon', image: image35 },
  { id: 2, name: 'heart-icon', image: image34 }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <h1>Sweet Tooth</h1>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
          <div className="icon3">
            {fonts.map(font => (
              <div className="icon33" key={font.id}>
                <img src={font.image} alt={font.name} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
