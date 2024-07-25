import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";

const Cartbtn = () => {
  const [showCart, setShowCart] = useState(true); // Example state
  const totalQty = 5;

  return (
    <div className="nav-item">
      {showCart && (
        <a href="/cart">
          <button className="cart" onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className="cart-item-qty">{totalQty}</span>
          </button>
        </a>
      )}
    </div>
  );
};

export default Cartbtn;