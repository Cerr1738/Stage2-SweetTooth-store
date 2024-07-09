import React from 'react';
import '../styles/Checkout.css';

import visa from '../Assets/Visa.jpg'
import paypal from '../Assets/Paypal.jpg'
import american from '../Assets/american express.jpg'
import master from '../Assets/mastercard.png'

import line1 from '../Assets/Line 13.png'
import line2 from '../Assets/Line 12.png'




const cards = [
  { id: 1, image: visa },
  { id: 2, image: paypal },
  { id: 3, image: american },
  { id: 4, image: master },
]

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>CHECKOUT</h1>

      <div className="ship-pay">
      <h6 className="circle1">&#10003;</h6> <p> Shipping <img src={line2}/> </p>
      <h6 className="circle2">2</h6><p> Payment <img src={line1}/></p> 
      <h6 className="circle1">3</h6><p> Confirmation</p>
      </div>


      <form>
        
          <div className="payment">
            <h2>PAYMENT DETAILS</h2>
            <h4></h4>
            <h3>CREDIT CARD INFORMATION</h3>
            <label>NAME ON CARD</label>
            <input type="text" />

            <label>CARD NUMBER</label>
            <input type="text" />

           <div className="security">
           <label>SECURITY CODE</label>
            <input type="text" />

            <label>EXPIRY DATE</label>
             <div className="month">
             <input type="text" placeholder='Month' />
             <input type="number" placeholder='Year' />
             </div>
            
           </div>
            

          </div>

          <div className="accepted-cards">
            <h2>ACCEPTED CARDS</h2>
            <div className="cards">
              {cards.map(card => (
                <div className="card">
                  <img src={card.image} alt={card.image} />

                </div>
              ))}

            </div>
          </div>


        <div className="billing">
        <h2>BILLING INFORMATION</h2>
        <label>FIRST NAME</label>
        <input type="text" />

        <label>SECOND NAME</label>
        <input type="text" />

        <label>BILLING ADDRESS</label>
        <input type="text" />

        <label>CITY</label>
        <input type="text" />

      <div className="zip">
      <label>ZIP</label>
        <input type="text" />
        
      <label>COUNTRY</label>
        <input type="text" />
      </div>
       
        </div>
       

        <button type="submit">SUBMIT PAYMENT</button>
      </form>



    </div>

  );
};

export default Checkout;
