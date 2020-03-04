import React from 'react';
import './index.scss';

import eachItemImage from 'Assets/images/each-item-image.png';

const CartItem = () => {
  return (
    <div className="each-items">
      <div className="each-items--container">
        <div className="each-item-image-wrapper">
          <div className="cart-item-image-wrapper">
            <img src={eachItemImage} alt="cart item" />
          </div>
          <div className="each-item-text">
            <p>HR Remote Manager</p>
            <p>Basic, Bronze, Foundation</p>
          </div>
        </div>

        <div className="item-quantity-wrapper">
          <div className="quantity-counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="price-items">
            <p>
              ₦3,480
              <span>₦3,480 x 1 item</span>
            </p>
          </div>
        </div>

        <div className="action-links">
          <button>Remove item</button>
          <button>Save for Later</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
