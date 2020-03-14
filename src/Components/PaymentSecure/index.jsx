// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import paystackSecure from 'Assets/images/secured-by-paystack.png';

const PaymentSecure = () => {
  return (
    <div
      css={css`
        img {
          height: 100%;
          width: 100%;
        }
      `}
    >
      <img src={paystackSecure} alt="secured-by-paystack" />
    </div>
  );
};

export default PaymentSecure;
