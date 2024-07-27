import React from "react";
import event1 from "/src/assets/event.1.png";
import header from "/src/assets/head.er.png";
import event2 from "/src/assets/header.png";

const Cardss = () => {
  return (
    <div className="products-container">
      <div className="product-card">
        <img
          src={header}
          alt="Brushed Raglan Sweatshirt"
          className="product-image"
        />
        <div className="product-info">
          <p className="product-name">Brushed Raglan Sweatshirt</p>
          <p className="product-price">$195</p>
        </div>
      </div>

      <div className="product-card">
        <img
          src={event1}
          alt="Cameryn Sash Tie Dress"
          className="product-image"
        />
        <div className="product-info">
          <p className="product-name">Cameryn Sash Tie Dress</p>
          <p className="product-price">$545</p>
        </div>
      </div>

      <div className="product-card">
        <img src={event2} alt="Flex Sweatshirt" className="product-image" />
        <div className="product-info">
          <p className="product-name">Flex Sweatshirt</p>
          <p className="product-price">$175</p>
        </div>
      </div>
    </div>
  );
};

export default Cardss;
