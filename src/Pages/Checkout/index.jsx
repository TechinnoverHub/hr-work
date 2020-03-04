import React from 'react';
import './index.scss';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
// import { Link } from 'react-router-dom';
// import arrowUpIcon from 'Assets/svg/arrowup.svg';
import paystack from 'Assets/svg/paystack.svg';
import mastercard from 'Assets/svg/mastercard.svg';
import visa from 'Assets/svg/visa.svg';
import verve from 'Assets/svg/verve.svg';
// import deliveryImage from 'Assets/images/delivery-option-image.png';
import CartItem from 'Components/CartItem';

function Checkout() {
  return (
    <div>
      <AltHeader />
      <div className="checkout-text">
        <h3>Checkout</h3>
      </div>
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

            <div>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>

          <div className="payment-option">
            <h3>Payment Options</h3>
            {/* <div className="payment-option-horizontal-line"></div> */}
            {/* <div className="add-voucher">
              Add a Voucher / Gift Card
              <img src={arrowUpIcon} alt="arrowup" />
            </div> */}
            {/* <div className="payment-option-horizontal-line"></div>
            <div className="apply-gift-card">
              <input type="text" placeholder="Add a Voucher / Gift Card" />
              <button type="submit">Apply</button>
            </div> */}
            <div className="payment-option-horizontal-line"></div>
            <div className="delivery-subtotal">
              <div className="delivery-subtotal-text">Subtotal:</div>
              <div className="delivery-subtotal-amount">₦3,480</div>
            </div>
            <div className="payment-option-horizontal-line"></div>
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
      <Footer />
    </div>
  );
}

export default Checkout;
