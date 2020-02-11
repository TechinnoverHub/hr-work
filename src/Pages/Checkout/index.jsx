import React from 'react';
import './index.scss';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';
import arrowUpIcon from 'Assets/svg/arrowup.svg';
import paystack from 'Assets/svg/paystack.svg';
import mastercard from 'Assets/svg/mastercard.svg';
import visa from 'Assets/svg/visa.svg';
import verve from 'Assets/svg/verve.svg';
import deliveryImage from 'Assets/images/delivery-option-image.png';

function Checkout() {
  return (
    <div>
      <AltHeader />
      <div className="checkout-text">
        <h3>Checkout</h3>
      </div>
      <div className="checkout-page-wrapper">
        {/* <div className="checkout-delivery-detail-wrapper">
          <div className="checkout-delivery-detail">
            <h3>Delivery Details</h3>
            <div className="delivery-detail-form-section">
              <form className="delivery-detail-form">
                <div className="delivery-name-row">
                  <label htmlFor="fname">
                    First Name
                    <input type="text" placeholder="Enter First Name" />
                  </label>

                  <label>
                    Last Name
                    <input type="text" placeholder="Enter Last Name" />
                  </label>
                </div>

                <div className="delivery-phonenumber-row">
                  <label>
                    Phone Number
                    <input type="text" placeholder="Enter Phone Number" />
                  </label>

                  <label>
                    Street Address
                    <input type="text" placeholder="Enter Delivery Address" />
                  </label>
                </div>

                <div className="state-row">
                  <label htmlFor="state">
                    State
                    <input type="text" placeholder="Select" />
                  </label>
                  <label htmlFor="city">
                    City
                    <input type="text" placeholder="City" />
                  </label>
                  <label htmlFor="LGA">
                    LGA
                    <input type="text" placeholder="Select" />
                  </label>
                </div>

                <div className="delivery-save-button">
                  <div className="delivery-save-btn">
                    <button>Save Address</button>
                  </div>
                  <div className="delivery-cancel-btn">
                    <button>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}

        <div className="review-order-super-wrapper">
          <div className="review-order-wrapper">
            <div className="review-order-section">
              <div className="review-order-text">
                <h3>Review Order</h3>
              </div>
              <div className="review-order-header">
                <div id="order-itemDelivered">Items Details</div>
                <div id="order-itemQuantity">Quantity</div>
                <div id="order-itemPrice">Items Price</div>
                <div id="order-itemAction">Action </div>
              </div>

              <div className="order-each-items">
                <div className="order-image-text-wrapper">
                  <img src={deliveryImage} alt="item" />
                  <div className="order-each-item-text">
                    HR Remote Manager
                    <p>Basic, Bronze, Foundation</p>
                  </div>
                </div>

                <div className="order-item-quantity-wrapper">
                  <div className="order-quantity-counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="order-price-items">
                    ₦3,480
                    <br />
                    <span>₦3,480 x 1 item</span>
                  </div>
                </div>

                <div className="order-action-links">
                  <Link>Remove item</Link>
                  <br />
                  <Link>Save for Later</Link>
                </div>
              </div>
              <div className="order-item-details-horizontal-line"></div>
              <div className="order-each-items">
                <div className="order-image-text-wrapper">
                  <img src={deliveryImage} alt="item" />
                  <div className="order-each-item-text">
                    HR Remote Manager
                    <p>Basic, Bronze, Foundation</p>
                  </div>
                </div>

                <div className="order-item-quantity-wrapper">
                  <div className="order-quantity-counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="order-price-items">
                    ₦3,480
                    <br />
                    <span>₦3,480 x 1 item</span>
                  </div>
                </div>

                <div className="order-action-links">
                  <Link>Remove item</Link>
                  <br />
                  <Link>Save for Later</Link>
                </div>
              </div>
            </div>

            <div className="payment-option">
              <h3>Payment Options</h3>
              <div className="payment-option-horizontal-line"></div>
              <div className="add-voucher">
                Add a Voucher / Gift Card
                <img src={arrowUpIcon} alt="arrowup" />
              </div>
              <div className="payment-option-horizontal-line"></div>
              <div className="apply-gift-card">
                <input type="text" placeholder="Add a Voucher / Gift Card" />
                <button type="submit">Apply</button>
              </div>
              <div className="payment-option-horizontal-line"></div>
              <div className="paynow">
                <div>Pay Now</div>
                <input type="radio" />
              </div>
              {/* <div className="payment-option-horizontal-line"></div> */}
              {/* <div className="pay-on-delivery">
                <div>Pay on Delivery</div>
                <input type="radio" />
              </div> */}
              <div className="payment-option-horizontal-line"></div>
              <div className="delivery-subtotal">
                <div className="delivery-subtotal-text">Subtotal:</div>
                <div className="delivery-subtotal-amount">₦3,480</div>
              </div>
              <div className="payment-option-horizontal-line"></div>
              {/* <div className="delivery-charges">
                <div className="delivery-charges-text">Delivery Charges:</div>
                <div className="delivery-charge-amount">₦3,480</div>
              </div> */}
              <div className="payment-option-horizontal-line"></div>
              <div className="delivery-total">
                <div>
                  <div className="delivery-total-text">Total</div>
                  <div className="delivery-total-amount">₦3,480</div>
                </div>
                <button type="button">Continue to Payment</button>
                <div className="payment-option-horizontal-line"></div>

                <div className="delivery-total-icon">
                  <div className="delivery-total-icon-text">we accept:</div>
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

export default Checkout;
