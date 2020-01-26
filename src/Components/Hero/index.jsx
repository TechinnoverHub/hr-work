// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const heroStyles = imgUrl => {
  return css`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 15.36%,
        rgba(0, 0, 0, 0.688) 90.13%
      ),
      url(${imgUrl});
    clip-path: ellipse(70% 80% at 50% 20%);
    max-width: 100vw;
    height: 70vh;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 24.5vh;
  `;
};

export default ({ imgUrl, heroTitle }) => {
  return (
    <div css={heroStyles(imgUrl)}>
      <div
        css={css`
          max-width: 1100px;
          margin: 0 auto;
        `}
      >
        <h3
          css={css`
            font-weight: bold;
            font-size: 50px;
            text-align: center;
            color: #ffffff;
          `}
        >
          {heroTitle}
        </h3>
      </div>
    </div>
  );
};
