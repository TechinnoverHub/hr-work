import React from 'react';
import './index.scss';

import eachItemImage from 'Assets/images/each-item-image.png';
import { useCartDispatch } from 'Context/cart.context';

const CartItem = ({ item }) => {
  const dispatch = useCartDispatch();
  const itemTotal =
    item && Number(item.discountPrice || item.price) * Number(item.qty);

  if (!item) return null;

  return (
    <div className="each-items">
      <div className="each-items--container">
        <div className="each-item-image-wrapper">
          <div className="cart-item-image-wrapper">
            <img src={eachItemImage} alt="cart item" />
          </div>
          <div className="each-item-text">
            <p>{item.title}</p>
            <p>{item.productType}</p>
          </div>
        </div>

        <div className="item-quantity-wrapper">
          <div className="quantity-counter">
            <button
              onClick={() =>
                dispatch({ type: 'DECREASE_ITEM_QTY', payload: item })
              }
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() =>
                dispatch({ type: 'INCREASE_ITEM_QTY', payload: item })
              }
            >
              +
            </button>
          </div>
          <div className="price-items">
            <p>
              ₦{itemTotal && itemTotal.toLocaleString()}
              <span>
                {item.discountPrice
                  ? `₦${item.discountPrice.toLocaleString()}`
                  : `₦${item.price && item.price.toLocaleString()}`}{' '}
                x {item.qty} {item.qty === 1 ? 'item' : 'items'}
              </span>
            </p>
          </div>
        </div>

        <div className="action-links">
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
