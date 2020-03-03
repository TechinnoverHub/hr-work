// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #565656;
    font-weight: 600;

    &:nth-of-type(3) {
      text-transform: capitalize;
    }
  }

  p {
    font-size: 14px;
    font-weight: 600;

    @media screen and (min-width: 800px) {
      font-size: 16px;
    }

    &:last-of-type {
      color: #888888;
    }
  }

  span {
    font-size: 14px;
    color: #565656;
    font-weight: 600;
    margin: 0 5px;

    @media screen and (min-width: 800px) {
      font-size: 16px;
      margin: 0;
    }
  }
`;

const BreadCrumbs = ({ category, categoryItem }) => {
  return (
    <div css={styles}>
      <Link to="/">Home</Link>
      <span>{'>'}</span>
      <Link to="/packages">Packages</Link>
      <span>{'>'}</span>
      <Link to={`/packages/${category}`}>{category}</Link>
      <span>{'>'}</span>
      <p>{categoryItem}</p>
    </div>
  );
};

export default BreadCrumbs;
