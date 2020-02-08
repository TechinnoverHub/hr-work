import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';
import paystack from 'Assets/svg/paystack.svg';
import mastercard from 'Assets/svg/mastercard.svg';
import visa from 'Assets/svg/visa.svg';
import verve from 'Assets/svg/verve.svg';
import eachItemImage from 'Assets/images/each-item-image.png';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="shopping-cart-wrapper">
          <div className="shopping-cart-header">
            <div className="shopping-cart-navigation-link">
              <ul>
                <li>
                  <Link className="shopping-navigation-list">Home</Link>
                </li>
                <span>></span>
                <li>
                  <Link className="shopping-navigation-list">
                    Shopping Cart
                  </Link>
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
                    <div id="itemDetails">Items Details</div>
                    <div id="itemQuantity">Quantity</div>
                    <div id="itemPrice">Items Price</div>
                    <div id="itemAction">Action </div>
                  </div>
                  <div className="each-items">
                    <div className="each-item-image-wrapper">
                      <img src={eachItemImage} alt="each-item" />
                      <div className="each-item-text">
                        HR Remote Manager
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
                        ₦3,480
                        <br />
                        <span>₦3,480 x 1 item</span>
                      </div>
                    </div>

                    <div className="action-links">
                      <Link>Remove item</Link>
                      <br />
                      <Link>Save for Later</Link>
                    </div>
                  </div>
                  <div className="item-details-horizontal-line"></div>

                  <div className="each-items">
                    <div className="each-item-image-wrapper">
                      <img src={eachItemImage} alt="each-item" />
                      <div className="each-item-text">
                        HR Remote Manager
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
                        ₦3,480
                        <br />
                        <span>₦3,480 x 1 item</span>
                      </div>
                    </div>

                    <div className="action-links">
                      <Link>Remove item</Link>
                      <br />
                      <Link>Save for Later</Link>
                    </div>
                  </div>
                  <div className="item-details-horizontal-line"></div>
                  <div className="each-items">
                    <div className="each-item-image-wrapper">
                      <img src={eachItemImage} alt="each-item" />
                      <div className="each-item-text">
                        HR Remote Manager
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
                        ₦3,480
                        <br />
                        <span>₦3,480 x 1 item</span>
                      </div>
                    </div>

                    <div className="action-links">
                      <Link>Remove item</Link>
                      <br />
                      <Link>Save for Later</Link>
                    </div>
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
                  <div className="delivery-charges-box">
                    <div className="delivery-charges">Delivery Charges:</div>
                    <div className="delivery-charge-text">
                      Delivery Charges <br />
                      will be added
                      <br /> during checkout
                    </div>
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
                    <div className="we-accept-text">we accept:</div>
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
  }
}

export default ShoppingCart;
