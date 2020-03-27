// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = css`
  color: red;
`;

const ErrorField = ({ formik, fieldName, selectField }) => {
  return (
    <>
      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <p css={styles}>
          {selectField
            ? formik.errors[fieldName].name
            : formik.errors[fieldName]}
        </p>
      ) : null}
    </>
  );
};

export default ErrorField;
