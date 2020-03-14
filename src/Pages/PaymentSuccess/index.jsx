import React, { useEffect } from 'react';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import { useHistory, Link, Redirect } from 'react-router-dom';
import Styles from './index.module.scss';
import { getCartTotal } from 'Utils/cartHelpers';
import { useCartDispatch } from 'Context/cart.context';

const OrderItem = ({ item }) => {
  const quantity =
    item.productType.toLocaleLowerCase() === 'retainership' ? 1 : item.qty;

  return (
    <div className={Styles.order__row}>
      <p>
        {item.title}&nbsp; x {quantity}
        {/* <span> x {quantity}</span> */}
      </p>
      <p>₦{(quantity * item.price).toLocaleString()}</p>
    </div>
  );
};

const PaymentSuccess = () => {
  const history = useHistory();
  const dispatch = useCartDispatch();
  const {
    location: { state }
  } = history;

  const { total, price } = getCartTotal(state);

  useEffect(() => {
    const historyPath = history.location.search.split('?cart=')[1];
    if (historyPath) {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, []);

  if (!state) {
    return <Redirect to="/" />;
  }

  return (
    <div className={Styles.body}>
      <AltHeader />
      <main className={Styles.main}>
        <div className={Styles.container}>
          <h1>Payment Successful</h1>
          <h2>Order Summary</h2>

          <div className={Styles.table}>
            <div className={Styles.header}>
              <p>Product</p>
              <p>Total</p>
            </div>

            <div>
              {state
                ? state.map(item => <OrderItem item={item} key={item._id} />)
                : null}
            </div>

            <div className={Styles.row}>
              <p>Sub Total</p>
              <p>
                ₦{price.toLocaleString()}&nbsp;<span>for {total} item</span>
              </p>
            </div>

            <div className={Styles.row}>
              <p>Payment Method</p>
              <p>Debit or Credit Card</p>
            </div>

            <div className={Styles.row}>
              <p>Total</p>
              <p>₦{price.toLocaleString()}</p>
            </div>
          </div>

          <div className={Styles.link__container}>
            <Link to="/" className={Styles.link}>
              Proceed to homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
