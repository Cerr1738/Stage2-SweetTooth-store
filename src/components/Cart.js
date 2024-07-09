import React from 'react';
import '../styles/Cart.css';

import image1 from '../Assets/image10.png';
import image2 from '../Assets/image16.png';
import image3 from '../Assets/image13.png';
import image4 from '../Assets/image20.png';
import trash from '../Assets/circum_trash.png';

const cartItems = [
  { id: 1, image: image1, name: 'Dingo Latte', weight: '3L', price: 5000, quantity: 1 },
  { id: 2, image: image2, name: 'M&ms Chocolate', weight: '1L', price: 600, quantity: 1 },
  { id: 3, image: image3, name: 'Nestle Classic', weight: '40g', price: 2000, quantity: 1 },
  { id: 4, image: image4, name: 'Melken Chocolate', weight: '40g', price: 100, quantity: 1 }
];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 1000;
  const total = subtotal + delivery;

  return (
    <div className="cart">
      <h1>CART</h1>
      <div className="words">
        <p>PRODUCT</p> 
        <span>
          <p>QUANTITY</p>
          <p>PRICE</p>
          <p>DELETE</p>
        </span>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="image-name">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <h6>{item.weight}</h6>
              </div>
            </div>

            <div className="q-price">
              <p>-{item.quantity}+</p>
              <p>${item.price}</p>
              <img src={trash} alt="Delete" className="trash" />
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>TOTAL</h2>
        <div className="sub">
          <h3>SUBTOTAL <span>${subtotal}</span></h3>
          <h3>DELIVERY <span>${delivery}</span></h3>
        </div>
        <h4>TOTAL PRICE <span>${total}</span></h4>
        <p>Do you have a discount?</p>
        <div className="discount">
          <input type="text" placeholder="DISCOUNT CODE" />
          <button>APPLY</button>
        </div>
        <button className="checkoutBtn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
