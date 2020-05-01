import React, { useState } from 'react';
import { useFormik } from 'formik';

import './index.scss';
// import { useEffect } from 'react';

const AccountDetails = ({ user }) => {
  return (
    <div className="account-right-box-wrapper">
      <div className="account-form">
        <form className="account-form-container" onSubmit={() => {}}>
          <div className="name-row">
            <label>
              First Name
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                value={user.firstname}
                readOnly={true}
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                value={user.lastname}
                readOnly={true}
              />
            </label>
          </div>

          <div className="account-field-row email">
            <label>
              Email account
              <input
                type="email"
                placeholder="Enter Email account"
                name="email"
                value={user.email}
                readOnly={true}
              />
            </label>
          </div>

          {/* <div className="change-password-text">Password change</div>
          <div className="change-password-section"></div>
          <div className="account-field-row">
            <label>
              Current password
              <span>(leave blank to leave unchanged)</span>
              <input type="password" />
            </label>
          </div>

          <div className="account-field-row">
            <label>
              New password<span>(leave blank to leave unchanged)</span>
              <input type="password" />
            </label>
          </div>

          <div className="account-field-row">
            <label>
              Confirm new password
              <input type="password" />
            </label>
          </div>
          <div className="account-save-button">
            <button type="submit">Save changes</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
