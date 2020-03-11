import React, { useEffect } from 'react';
import './index.scss';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
// import { Link } from 'react-router-dom';
// import arrowUpIcon from 'Assets/svg/arrowup.svg';
import paystack from 'Assets/svg/paystack.svg';
import mastercard from 'Assets/svg/mastercard.svg';
import visa from 'Assets/svg/visa.svg';
import verve from 'Assets/svg/verve.svg';
import CartItem from 'Components/CartItem';
import { useCartState } from 'Context/cart.context';
import { getCartLength } from 'Utils/cartHelpers';
import EmptyCart from 'Components/EmptyCart';
import { useState } from 'react';
import PaystackButton from 'react-paystack';
import paystackSecure from 'Assets/images/secured-by-paystack.png';

function getPayStackKey() {
  const paystack_key = process.env.REACT_APP_PAYSTACK_KEY;
  if (paystack_key) {
    return paystack_key;
  } else {
    throw new Error('PAYSTACK KEY IS MISSING!!!');
  }
}

function Checkout() {
  const cart = useCartState();
  const API_KEY = getPayStackKey();
  const [paymentInfo, setPaymentInfo] = useState({
    email: 'tom@gmail.com'
  });
  const { total: totalQty, price: totalPrice } = getCartLength(cart);

  useEffect(() => {
    setPaymentInfo(state => ({ ...state, amount: totalPrice * 100 }));
  }, [totalPrice]);

  const callback = response => {
    alert('success. transaction ref is ' + response.reference);
  };

  const close = () => {
    console.log('Payment closed');
  };

  const getReference = () => {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

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

              {totalQty > 0 ? (
                Object.entries(cart).map(itemData => (
                  <CartItem item={itemData[1]} />
                ))
              ) : (
                <EmptyCart />
              )}
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
              <div className="delivery-subtotal-amount">
                {' '}
                ₦{totalPrice && totalPrice.toLocaleString()}{' '}
              </div>
            </div>
            <div className="payment-option-horizontal-line"></div>
            <div className="payment-option-horizontal-line"></div>
            <div className="delivery-total">
              <div>
                <div className="delivery-total-text">Total</div>
                <div className="delivery-total-amount">
                  ₦{totalPrice && totalPrice.toLocaleString()}
                </div>
              </div>
              {/* <button type="button" disabled={totalQty < 1}>
                Continue to Payment
              </button> */}
              <PaystackButton
                text="Make Payment"
                callback={callback}
                close={close}
                disabled={totalQty < 1}
                embed={false}
                reference={getReference()}
                email={paymentInfo.email}
                amount={paymentInfo.amount}
                paystackkey={API_KEY}
                tag="button"
              />
              {/* <div className="payment-option-horizontal-line"></div> */}

              <div className="paystack-secure">
                <img src={paystackSecure} alt="secured-by-paystack" />
              </div>
              {/* <div className="delivery-total-icon">
                <div className="delivery-total-icon-text">we accept:</div>
                <img src={paystack} alt="paystack" />
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={verve} alt="verve" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
