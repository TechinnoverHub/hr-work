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
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 15.5vh;

    @media screen and (min-width: 800px) {
      padding-bottom: 24.5vh;
      background-position: initial;
    }
  `;
};

export default ({ imgUrl, heroTitle }) => {
  return (
    <div css={heroStyles(imgUrl)}>
      <div
        css={css`
          margin: 0 auto;
          width: 80%;

          @media screen and (min-width: 50rem) {
            width: auto;
            max-width: 1100px;
          }
        `}
      >
        <h3
          css={css`
            font-weight: bold;
            text-align: center;
            color: #ffffff;
            font-size: 35px;
            line-height: 1;

            @media screen and (min-width: 50rem) {
              font-size: 50px;
            }
          `}
        >
          {heroTitle}
        </h3>
      </div>
    </div>
  );
};
