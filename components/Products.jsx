import React from 'react';
import header from '../src/assets/head.er.png'; 
import event1  from '../src/assets/event.1.png'; 
import event2 from '../src/assets/header.png'; 

const Products = () => {
    return (
      <section>
      <div className='subtitle'>
      <span>Products</span>
      <h1>Chckout What We Have</h1>
    </div>
      <div className='products-container'>
    
      <div className='product-card'>
        <img src={header} alt='Brushed Raglan Sweatshirt' className='product-image' />
        <p className='product-name'>Brushed Raglan Sweatshirt</p>
        <p className='product-price'>$195</p>
      </div>

      <div className='product-card'>
        <img src={event1} alt='Cameryn Sash Tie Dress' className='product-image' />
        <p className='product-name'>Cameryn Sash Tie Dress</p>
        <p className='product-price'>$545</p>
      </div>

      <div className='product-card'>
        <img src={event2} alt='Flex Sweatshirt' className='product-image' />
        <p className='product-name'>Flex Sweatshirt</p>
        <p className='product-price'>$175</p>
      </div>
            </div>
            </section>
  );
}

export default Products;
