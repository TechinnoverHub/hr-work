// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const StyleSheet = css`
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 18px;
    color: #ef0633;
    font-weight: 500;
    margin-bottom: 10px;
  }

  a {
    // text-decoration: none;
    font-size: 14px;
    color: #888888;
  }
`;

const EmptyCart = () => {
  return (
    <div css={StyleSheet}>
      <p>Your cart is empty </p>
      <Link to="/packages">View available products</Link>
    </div>
  );
};

export default EmptyCart;
