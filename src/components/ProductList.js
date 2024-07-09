import React from 'react';
import '../styles/ProductList.css';


import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'
import image4 from '../Assets/image4.png'
import image5 from '../Assets/image5.png'
import image6 from '../Assets/image6.png'
import image7 from '../Assets/image7.png'
import image8 from '../Assets/image8.png'
import image9 from '../Assets/image9.png'
import image10 from '../Assets/image10.png'
import image11 from '../Assets/image11.png'
import image12 from '../Assets/image12.png'
import image13 from '../Assets/image13.png'
import image14 from '../Assets/image14.png'
import image15 from '../Assets/image18.png'
import image16 from '../Assets/image16.png'
import image17 from '../Assets/image17.png'
import image18 from '../Assets/image18.png'
import image19 from '../Assets/image19.png'
import image20 from '../Assets/image20.png'
// import image21 from '../Assets/image18'

import heart1 from '../Assets/Vector.png'
import heart2 from '../Assets/Vector (1).png'
import heart3 from '../Assets/Vector (2).png'

import choco from '../Assets/image33.png'
import truffle from '../Assets/Gourmet Chocolates, Gift Baskets and Truffles 1.png'
import mms from '../Assets/Andy Anand Chocolatier Andy Anand Sugar Free Milk Chocolate Peanuts, Amazing-Delicious-Decadent, Birthday Valentine Christmas Mothers Fathers day___ 1.png'
import cart from '../Assets/mdi_cart-outline.png'


const products = [
  { id: 1, name: 'Holanda Chocolate Creame', price: 100, weight: '3L', image: image3 },
  { id: 2, name: 'Dasam Chocolate Creame', price: 600, weight: '24g', image: image2 },
  { id: 3, name: 'Duetto Chocolate', price: 70, weight: '1L', image: image4 },
  { id: 4, name: 'Snickers Creame', price: 800, weight: '30g', image: image5 },
  { id: 5, name: 'Nutella Chocolate Creame', price: 1900, weight: '1.5L', image: image6 },
  { id: 6, name: 'Nestle Classic', price: 1100, weight: '300g', image: image13 },
  { id: 7, name: 'Otanic Cream Chocolate', price: 7900, weight: '50g', image: image7 },
  { id: 8, name: 'Dasam Chocolate Creame', price: 3400, weight: '78g', image: image8 },
  { id: 9, name: 'Laive Yopi Mix', price: 9000, weight: '2L', image: image9 },
  { id: 10, name: 'Pingo de leite Chocolate', price: 500, weight: '3L', image: image10 },
  { id: 11, name: 'Nestle Nutren', price: 100, weight: '45g', image: image11 },
  { id: 12, name: 'Neugebauer', price: 60, weight: '65g', image: image14 },
  { id: 12, name: 'Aymore Chocolate', price: 10, weight: '33g', image: image15 },
  { id: 12, name: 'M&ms chocolate', price: 100, weight: '58g', image: image16 },
  { id: 12, name: 'Kopiko Candy', price: 190, weight: '20g', image: image17 },
  { id: 12, name: 'Aymore Chocolate', price: 1500, weight: '25g', image: image18 },
  { id: 12, name: 'Trento Special chocolate', price: 1500, weight: '80g', image: image19 },
  { id: 12, name: 'Melken Chocolate', price: 1500, weight: '90g', image: image20 },
  { id: 12, name: 'Moni Chocolate Creame', price: 1500, weight: '1L', image: image12 },



];

const icons1 = [
  { id: 1, name: 'cart', image: cart }
];

const hearts = [
  { id: 1, name: 'heart1', image: heart1 },
  { id: 2, name: 'heart2', image: heart2 },
  { id: 3, name: 'heart3', image: heart3 },

];

const ProductList = () => {
  return (
    <div className="body">
      <div className="Treat">
        <div className='treat-one'>
          <h2>Treat Yourself To Something Special</h2>
          <p>Handcrafted with Love, Devoured in Joy</p>
          <button>Shop Now</button>
        </div>


      </div>


      <div className="product-list">
        <div className="hotDeals">
          <h1>Hot Deals for This Week <span>Save Up to 50% Off</span></h1>
        </div>

        <div className="products">
          {products.map(product => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="nameCart">

                <div className="namePrice">
                  <h3>{product.name}</h3>
                  <h5>{product.weight}</h5>
                  <p>${product.price}</p>
                </div>

                {icons1.map(icon => (
                  <div className="icons" key={icon.id}>
                    <img src={icon.image} alt={icon.name} />
                  </div>
                ))}
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
