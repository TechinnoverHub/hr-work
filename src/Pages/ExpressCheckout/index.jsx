import React, { useEffect, useState } from 'react';
import './index.scss';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import ExpressCartItem from 'Components/CartItem/express';
import PaystackButton from 'react-paystack';
import PaymentSecure from 'Components/PaymentSecure';
import { useHistory, Redirect } from 'react-router-dom';
import { useUserState } from 'Context/user.context';
import { getReference, formatOrderObject } from 'Utils/cartHelpers';
import { saveOrder } from 'Utils/checkoutHelpers';
import { toast } from 'react-toastify';
import Spinner from 'Components/Spinner';

function getPayStackKey() {
  const paystack_key = process.env.REACT_APP_PAYSTACK_KEY;
  if (paystack_key) {
    return paystack_key;
  } else {
    throw new Error('PAYSTACK KEY IS MISSING!!!');
  }
}

function ExpressCheckout() {
  const API_KEY = getPayStackKey();
  const history = useHistory();
  const userData = useUserState();

  const {
    location: { state }
  } = history;

  const [paymentInfo, setPaymentInfo] = useState({
    email: '',
    amount: 0,
    planCode: ''
  });

  const callback = response => {
    console.log('success. transaction ref is ', response);
    const {
      payload: { _id, planId }
    } = state;
    const orderDetails = formatOrderObject({
      productId: _id,
      variantId: planId,
      ref: response.reference
    });
    saveOrder(orderDetails);

    return history.push('/payment-success', [{ ...state.payload }]);
  };

  const close = () => {
    console.log('Payment closed');
  };
  useEffect(() => {
    if (state && state.payload) {
      const { payload } = state;
      const priceNum = (payload && payload.price) || 0;
      const planCode = payload && payload.plan_code;
      setPaymentInfo(state => ({ ...state, amount: priceNum, planCode }));
    }
  }, [state]);

  if (!state) {
    toast.error('Something Went Wrong!!! contact us');
    return <Redirect to="/" />;
  }

  if (state && userData.reqStatus === 'FETCHING') {
    return <Spinner />;
  }

  if (state && userData.reqStatus === 'ERROR') {
    toast.error('Something Went Wrong!!! contact us');
    // console.log('judeeeeee');
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
            <ExpressCartItem item={state.payload} />
          </div>

          <div className="payment-option">
            <h3>Payment Options</h3>
            <div className="payment-option-horizontal-line"></div>
            <div className="delivery-subtotal">
              <div className="delivery-subtotal-text">Subtotal:</div>
              <div className="delivery-subtotal-amount">
                {' '}
                ₦{paymentInfo.amount.toLocaleString()}{' '}
              </div>
            </div>
            <div className="payment-option-horizontal-line"></div>
            <div className="payment-option-horizontal-line"></div>
            <div className="delivery-total">
              <div>
                <div className="delivery-total-text">Total</div>
                <div className="delivery-total-amount">
                  ₦{paymentInfo.amount.toLocaleString()}
                </div>
              </div>
              <PaystackButton
                text="Make Payment"
                plan={paymentInfo.planCode}
                callback={callback}
                close={close}
                disabled={false}
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

export default ExpressCheckout;
