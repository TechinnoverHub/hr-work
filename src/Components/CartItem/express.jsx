import React from 'react';

import eachItemImage from 'Assets/images/each-item-image.png';
// import { useCartDispatch } from 'Context/cart.context';
import Styles from './express.module.scss';

const CartItem = ({ item }) => {
  // const dispatch = useCartDispatch();
  const itemTotal = item && (item.discountPrice || item.price);

  if (!item) return null;

  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.header__details}>Item Details</div>
        {item.plans.length > 0 ? (
          <div className={Styles.header__plan}>Package Plan</div>
        ) : null}

        <div className={Styles.header__quantity}>Quantity</div>
        <div className={Styles.header__price}>Price</div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.inner__container}>
          <div className={Styles.column__details}>
            <div className={Styles.column__details__img}>
              <img src={eachItemImage} alt="cart item" />
            </div>
            <div className={Styles.column__details__text}>
              <p>{item.title}</p>
              <p>{item.productType}</p>
            </div>
          </div>

          {item.plans.length > 0 ? (
            <div className={Styles.column__plan}>
              <p>{item.planName}</p>
            </div>
          ) : null}
          <div className={Styles.column__quantity}>
            <p>1</p>
          </div>
          <div className={Styles.column__price}>
            <p>₦{itemTotal && itemTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
