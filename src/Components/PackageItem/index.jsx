// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import itemImg from 'Assets/images/packages-image.png';
import { Link } from 'react-router-dom';
import { useCartDispatch } from 'Context/cart.context';
import Skeleton from 'react-loading-skeleton';

const categoryColor = {
  retainership: '#0057da',
  professional: '#ef0633',
  'off-the-shelf': '#00ba34'
};

const cardWrapperStyle = isFetching => css`
  width: 100%;
  margin-bottom: 36px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 15px rgba(136, 136, 136, 0.25);
  height: 65vh;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    /* flex-basis: 30%; */
    margin-bottom: 50px;
    height: 450px;

    & > span {
      flex: ${isFetching && 1};
    }
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
    object-fit: cover;
    object-position: center;
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
    text-transform: capitalize;

    @media screen and (min-width: 420px) {
      font-size: 14px;
    }
  }
`;

const packageBodyStyle = css`
  padding-top: 2.3rem;
  padding-bottom: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #565656;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  padding: 22px 0px;
`;

// const packageCategoryStyle = css`
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 23px;
//   text-align: center;
//   color: #565656;
//   text-decoration: none;
// `;

// const packageButtonStyle = css`
//   border-radius: 50px;
//   background-color: transparent;
//   border: 1.5px solid #565656;
//   color: #565656;
//   font-size: 18px;
//   font-weight: bold;
//   margin-top: 15px;
//   width: 90%;
//   padding: 10px;

//   @media screen and (min-width: 800px) {
//     padding: 15px 40px;
//   }
// `;

const packageLinkStyle = css`
  border-radius: 50px;
  background-color: transparent;
  border: 1.5px solid #565656;
  color: #565656;
  font-size: 18px;
  font-weight: bold;
  /* margin-top: 15px; */
  /* margin: 15px auto 0; */
  margin: auto;
  margin-bottom: 0;
  width: 70%;
  padding: 10px;
  display: block;
  text-decoration: none;

  @media screen and (min-width: 800px) {
    padding: 10px 20px;
  }
`;

const itemImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/f_auto,q_auto/v1580899349/packages-image_b2ow2y.png';

const PackageItem = ({
  item: { _id, productType, price, title, plans, slug, productCode },
  packageLoading
}) => {
  // const dispatch = useCartDispatch();
  const planPrice = price || (plans && plans[0] && plans[0].price);
  const slugCode = `${slug}_${productCode}`;
  const isFetching = packageLoading === 'FETCHING';

  if (isFetching) {
    return (
      <div css={cardWrapperStyle(isFetching)}>
        <Skeleton height="100%" width="100%" />
      </div>
    );
  }

  return (
    <div css={cardWrapperStyle}>
      <Link css={imgStyleWrapper} to={`/package/${slugCode}`}>
        <img src={itemImg} alt="item" />
        <div css={categorySpan(productType && productType.toLowerCase())}>
          <span>{productType && productType.toLowerCase()} Category</span>
        </div>
      </Link>
      <div css={packageBodyStyle}>
        <Link to={`/package/${slugCode}`} css={packageHeadingStyle}>
          {title}
        </Link>
        <p css={packagePriceStyle}>
          ₦{planPrice && planPrice.toLocaleString()}
        </p>
        <Link css={packageLinkStyle} to={`/package/${slugCode}`}>
          View Package
        </Link>
      </div>
    </div>
  );
};

// "title": "HR Remote Manager",
// "productType": "RETAINERSHIP",
// "price": null,
// "productCode": "c4238c51-0d82-4cea-967a-e041c7f95643",
// "slug": "hr-remote-manager",

export default PackageItem;
