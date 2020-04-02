import React, { useEffect, useState } from 'react';
import PaystackButton from 'react-paystack';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import './index.scss';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import CartItem from 'Components/CartItem';
import PaymentSecure from 'Components/PaymentSecure';
import EmptyCart from 'Components/EmptyCart';

import { useUserState } from 'Context/user.context';
import { useCartState, useCartDispatch } from 'Context/cart.context';
import {
  getCartLength,
  getReference,
  formatOrderObject,
  formatSuccessObject,
  formatCartOrderPayload
} from 'Utils/cartHelpers';
import Spinner from 'Components/Spinner';
import { saveOrder } from 'Utils/checkoutHelpers';

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
  const history = useHistory();
  const userData = useUserState();

  const [paymentInfo, setPaymentInfo] = useState({
    email: '',
    amount: 0
  });

  const API_KEY = getPayStackKey();
  const { total: totalQty, price: totalPrice } = getCartLength(cart);

  const callback = response => {
    // console.log('success. transaction ref is ' + response.reference);
    const orderDetails = formatCartOrderPayload(cart, response.reference);
    saveOrder(orderDetails);

    const successCart = formatSuccessObject(cart);
    return history.push('/payment-success?cart=true', successCart);
  };

  const close = () => {
    console.log('Payment closed');
  };

  useEffect(() => {
    setPaymentInfo(state => ({ ...state, amount: totalPrice * 100 }));
  }, [totalPrice]);

  if (totalQty < 1) {
    toast.error('Something Went Wrong!!! contact us');
    return <Redirect to="/" />;
  }

  if (userData.reqStatus === 'FETCHING') {
    return <Spinner />;
  }

  if (userData.reqStatus === 'ERROR') {
    toast.error('Something Went Wrong!!! contact us');
    return <Redirect to="/" />;
  }

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
              {totalQty > 0 ? (
                Object.entries(cart).map(itemData => (
                  <CartItem item={itemData[1]} key={itemData[1].id} />
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>

          <div className="payment-option">
            <h3>Payment Options</h3>
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
              <PaystackButton
                text="Make Payment"
                callback={callback}
                close={close}
                disabled={totalQty < 1}
                embed={false}
                reference={getReference()}
                email={userData.user.email}
                amount={paymentInfo.amount}
                paystackkey={API_KEY}
                tag="button"
              />

              <PaymentSecure />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
