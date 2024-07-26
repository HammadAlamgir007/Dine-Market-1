import React from 'react';
import Cardss from './Cardss';

const Products = () => {
    return (
      <section>
      <div className='subtitle'>
      <span>Products</span>
      <h1>Chckout What We Have</h1>
    </div>
      <div className='products-container'>
    <Cardss/>
            </div>
            </section>
  );
}

export default Products;
