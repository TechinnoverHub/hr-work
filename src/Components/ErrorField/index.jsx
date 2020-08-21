// eslint-disable-next-line no-unused-vars
import React from 'react';
// /** @jsx jsx */
// import { jsx, css } from '@emotion/core';

// const styles = css`
//   color: red;
// `;

const ErrorField = ({ formik, fieldName, selectField }) => {
  return (
    <React.Fragment>
      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <p styles={{ color: 'red' }}>
          {selectField
            ? formik.errors[fieldName].name
            : formik.errors[fieldName]}
        </p>
      ) : null}
    </React.Fragment>
  );
};

export default ErrorField;
