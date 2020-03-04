import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import Header from 'Components/AltHeader';
import Footer from 'Components/Footer';
import CartItem from 'Components/CartItem';

import paystack from 'Assets/svg/paystack.svg';
import mastercard from 'Assets/svg/mastercard.svg';
import visa from 'Assets/svg/visa.svg';
import verve from 'Assets/svg/verve.svg';

const ShoppingCart = () => {
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
              <span>></span>
              <li>
                {/* <Link className="shopping-navigation-list"> */}
                Shopping Cart
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <h3>Shopping Cart</h3>
        </div>

        <div className="shopping-cart-details-wrapper">
          <div className="shopping-cart-details-contents">
            <button className="continue-shopping">
              <i className="fa fa-play"></i>Continue Shopping
            </button>

            <div className="two-boxes-wrapper">
              <div className="item-details">
                <div className="item-details-header">
                  <div id="itemDetails">Item Details</div>
                  <div id="itemQuantity">Quantity</div>
                  <div id="itemPrice">Item Price</div>
                  <div id="itemAction">Action </div>
                </div>

                <div>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </div>
              </div>

              <div className="order-summary">
                <div className="order-head">
                  <div className="order">Order Summary</div>
                  <div className="number-items">3 items</div>
                </div>
                <div className="order-summary-horizontal-line"></div>
                <div className="order-subtotal">
                  <div className="subtotal">Subtotal:</div>
                  <div className="subtotal-figure">₦3,480 </div>
                </div>
                <div className="order-summary-horizontal-line"></div>

                <div className="total-box">
                  <div className="total">Total</div>
                  <div className="total-figure">₦3,480</div>
                </div>
                <div className="checkout-button">
                  <button className="order-checkout-button">
                    Continue to Checkout
                  </button>
                </div>
                <div className="order-summary-horizontal-line"></div>
                <div className="we-accept">
                  <p className="we-accept-text">We accept:</p>
                  <img src={paystack} alt="paystack" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={visa} alt="visa" />
                  <img src={verve} alt="verve" />
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
