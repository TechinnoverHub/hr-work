// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import itemImg from 'Assets/images/packages-image.png';
import { Link } from 'react-router-dom';

const categoryColor = {
  retainership: '#0057da',
  professionals: '#ef0633',
  'off-shelf': '#00ba34'
};

const cardWrapperStyle = css`
  width: 100%;
  margin-bottom: 36px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 15px rgba(136, 136, 136, 0.25);
  height: 80vh;

  @media screen and (min-width: 800px) {
    flex-basis: 30%;
    margin-bottom: 50px;
    height: 555px;
  }
`;

const imgStyleWrapper = css`
  height: 50%;
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  @media screen and (min-width: 800px) {
    background-position: initial;
  }
`;

const categorySpan = categoryKey => css`
  border-radius: 0px 17.5px 17.5px 0px;
  margin-top: 33px;
  display: inline-block;
  padding: 6px 10px;
  position: absolute;
  left: 0;
  background-color: ${categoryColor[categoryKey]};

  @media screen and (min-width: 420px) {
    padding: 6px 20px;
  }

  span {
    color: #ffffff;
    line-height: 23px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;

    @media screen and (min-width: 420px) {
      font-size: 14px;
    }
  }
`;

const packageBodyStyle = css`
  padding-top: 3.125rem;
  padding-bottom: 2.375rem;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #565656;
`;

const packageHeadingStyle = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #565656;
  text-decoration: none;
`;

const packagePriceStyle = css`
  font-weight: bold;
  font-size: 25px;
  line-height: 23px;
  text-align: center;
  color: #ef0633;
  margin: 10px 0px 22px;
`;

const packageCategoryStyle = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #565656;
  text-decoration: none;
`;

const packageButtonStyle = css`
  border-radius: 50px;
  background-color: transparent;
  border: 1.5px solid #565656;
  color: #565656;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  width: 90%;
  padding: 10px;

  @media screen and (min-width: 800px) {
    padding: 15px 40px;
  }
`;

const PackageItem = ({ item: { id, categoryKey, name, price, category } }) => {
  return (
    <div css={cardWrapperStyle}>
      <Link css={imgStyleWrapper} to={`/package/${id}`}>
        <img src={itemImg} alt="item" />
        <div css={categorySpan(categoryKey)}>
          <span>{category} Category</span>
        </div>
      </Link>
      <div css={packageBodyStyle}>
        <Link to={`/package/${id}`} css={packageHeadingStyle}>
          HR Remote Manager
        </Link>
        <p css={packagePriceStyle}>₦3,480</p>
        <p css={packageCategoryStyle}>Basic, Bronze, Foundation</p>
        <button css={packageButtonStyle}>Add to Cart</button>
      </div>
    </div>
  );
};

export default PackageItem;
