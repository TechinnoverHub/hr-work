// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import testimonialData from './testimonialData';
import { ReactComponent as NextIcon } from 'Assets/svg/next.svg';
import { ReactComponent as BackIcon } from 'Assets/svg/back.svg';

const outerContainer = css`
  display: flex;
  /* background: lightpink; */
  justify-content: space-between;
  /* height: 400px; */
  align-items: center;
  width: 90vw;
  margin: 20px auto;

  @media (min-width: 800px) {
    max-width: 1100px;
    margin: 20px auto 50px;
  }

  button {
    height: 60px;
    max-width: 4.5%;
    flex-basis: 4.5%;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;

    svg {
      fill: #ef0633;
      height: 30px;
      width: 100%;
    }
  }
`;

const container = css`
  display: flex;
  overflow-x: auto;
  max-width: 88%;
  flex-basis: 90%;
  align-items: center;
  /* background: lightsalmon; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const cardCss = css`
  background: white;
  /* flex-shrink: 0; */
  min-width: 100%;
  flex-basis: 100%;
  padding: 0 20px;

  /* @media (min-width: 800px) {
    padding: 0 5px;
    min-width: 30%;
    flex-basis: 30%;
    margin-right: 5%;

    &:last-of-type {
      margin-right: 0;
    }
  } */

  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #565656;
  }

  h3 {
    text-align: center;
    margin-top: 22px;
    color: #565656;
    font-weight: 600;
  }
`;

const Carousel = () => {
  const scrollRef = useRef(null);
  const [clearIntervalState, updateClearIntervalState] = useState(false);

  const onClick = (direction = 'right') => {
    const container = scrollRef.current;
    // total overflow scroll width
    const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.getBoundingClientRect().width;
    const { width, marginRight } = getComputedStyle(container.children[0]);
    if (scrollLeft < 1 && direction === 'left') {
      return null;
    }

    const numWidth = Number(width.split('px')[0]);
    const numMarginRight = Number(marginRight.split('px')[0]);
    // total number to scroll by
    let scrollNum = numWidth + numMarginRight;
    let behavior = 'smooth';

    if (direction === 'right') {
      if (scrollLeft + containerWidth >= scrollWidth) {
        scrollNum = 0;
        behavior = 'auto';
      } else {
        scrollNum += scrollLeft;
      }
    } else {
      scrollNum = scrollLeft - scrollNum;
    }

    container.scrollTo({ top: 0, left: scrollNum, behavior });
  };

  const clickHandler = direction => {
    updateClearIntervalState(true);
    onClick(direction);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      onClick('right');
    }, 3000);
    if (clearIntervalState) {
      clearInterval(interval);
      updateClearIntervalState(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [clearIntervalState]);

  return (
    <div css={outerContainer}>
      <button onClick={() => clickHandler('left')}>
        <BackIcon />
      </button>
      <div css={container} ref={scrollRef}>
        {testimonialData.map(item => (
          <div css={cardCss} key={item.title}>
            <p>{item.body}</p>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => clickHandler('right')}>
        <NextIcon />
      </button>
    </div>
  );
};

export default Carousel;
