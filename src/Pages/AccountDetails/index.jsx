import React from 'react';
import './index.scss';

const AccountDetails = () => {
  return (
    <div className="account-right-box-wrapper">
      <div className="account-form">
        <form className="account-form-container">
          <div className="name-row">
            <label>
              First Name
              <input type="text" placeholder="Enter First Name" />
            </label>

            <label>
              Last Name
              <input type="text" placeholder="Enter Last Name" />
            </label>
          </div>

          <div className="account-field-row">
            <label>
              Email account
              <input type="email" placeholder="Enter Email account" />
            </label>
          </div>
          <div className="change-password-text">Password change</div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
