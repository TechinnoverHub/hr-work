import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './index.scss';
import Header from 'Components/AltHeader';
import Footer from 'Components/Footer';
import CartItem from 'Components/CartItem';
import { useCartState } from 'Context/cart.context';
import { getCartLength } from 'Utils/cartHelpers';
import EmptyCart from 'Components/EmptyCart';
import PaymentSecure from 'Components/PaymentSecure';

const ShoppingCart = () => {
  const cart = useCartState();
  const history = useHistory();
  const { total: totalQty, price: totalPrice } = getCartLength(cart);

  console.log(cart);

  return (
    <div>
      <Header />
      <div className="shopping-cart-wrapper">
        <div className="shopping-cart-header">
          <div className="shopping-cart-navigation-link">
            <ul>
              <li>
                <Link className="shopping-navigation-list" to="/">
                  Home
                </Link>
              </li>
              <span></span>
              <li>Shopping Cart</li>
            </ul>
          </div>
          <h3>Shopping Cart</h3>
        </div>

        <div className="shopping-cart-details-wrapper">
          <div className="shopping-cart-details-contents">
            <Link className="continue-shopping" to="/packages">
              <i className="fa fa-play"></i>Continue Shopping
            </Link>

            <div className="two-boxes-wrapper">
              <div className="item-details">
                <div className="item-details-header">
                  <div id="itemDetails">Item Details</div>
                  <div id="itemQuantity">Quantity</div>
                  <div id="itemPrice">Item Price</div>
                  <div id="itemAction">Action </div>
                </div>

                <div>
                  {totalQty > 0 ? (
                    Object.entries(cart).map(itemData => (
                      <CartItem item={itemData[1]} key={itemData[1].id} />
                    ))
                  ) : (
                    <EmptyCart />
                  )}
                </div>
              </div>

              <div className="order-summary">
                <div className="order-head">
                  <div className="order">Order Summary</div>
                  <div className="number-items">{`${totalQty} ${
                    totalQty === 1 ? 'item' : 'items'
                  }`}</div>
                </div>
                <div className="order-summary-horizontal-line"></div>
                <div className="order-subtotal">
                  <div className="subtotal">Subtotal:</div>
                  <div className="subtotal-figure">
                    ₦{totalPrice && totalPrice.toLocaleString()}{' '}
                  </div>
                </div>
                <div className="order-summary-horizontal-line"></div>

                <div className="total-box">
                  <div className="total">Total</div>
                  <div className="total-figure">
                    ₦{totalPrice && totalPrice.toLocaleString()}
                  </div>
                </div>
                <div className="checkout-button">
                  <button
                    className="order-checkout-button"
                    disabled={totalQty < 1}
                    onClick={() => history.push('/checkout/regular')}
                  >
                    Continue to Checkout
                  </button>
                </div>
                <div className="checkout-payment-secure">
                  <PaymentSecure />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
