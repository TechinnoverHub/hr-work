// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const containerStyle = containerHeight => {
  return css`
    height: ${containerHeight};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export default ({ containerHeight, spinnerSize, borderSize, color }) => {
  const borderWidth = borderSize || '6px';
  const spinnerDimension = spinnerSize || '70px';
  const spinnerColor = color || '#ef0633';
  const wrapperHeight = containerHeight || '70vh';

  return (
    <div css={containerStyle(wrapperHeight)}>
      <div
        css={css`
          height: ${spinnerDimension};
          width: ${spinnerDimension};
          border: ${borderWidth} solid #f3f3f3;
          border-radius: 50%;
          border-top: ${borderWidth} solid ${spinnerColor};
          animation: ${spin} 2s linear infinite;
        `}
      />
    </div>
  );
};
