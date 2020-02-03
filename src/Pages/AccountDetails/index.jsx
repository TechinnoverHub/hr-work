import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';

class AccountDetails extends React.Component {
  render() {
    return (
      <di>
        <Header />
        <div className="account-wrapper">
          <div className="account-section">
            <div className="account-left-box-wrapper">
              <div className="account-left-box-text">My account</div>
              <div className="account-left-box">
                <ul>
                  <li>
                    <Link className="account-left-list">Dashboard</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>
                  <li>
                    <Link className="account-left-list">Orders</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>

                  <li>
                    <Link className="account-left-list">accountes</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>

                  <li>
                    <Link className="account-left-list">Payment Methods</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>

                  <li>
                    <Link className="account-left-list">account Details</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>

                  <li>
                    <Link className="account-left-list">Logout</Link>
                  </li>
                  <div className="account-left-horizontal-line"></div>
                </ul>
              </div>
            </div>

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

                  <div className="field-row">
                    <label>
                      Email account
                      <input type="email" placeholder="Enter Email account" />
                    </label>
                  </div>
                  <div className="change-password-text">Password change</div>
                  <div className="change-password-section"></div>
                  <div className="field-row">
                    <label>
                      Current password
                      <span>(leave blank to leave unchanged)</span>
                      <input type="password" />
                    </label>
                  </div>

                  <div className="field-row">
                    <label>
                      New password<span>(leave blank to leave unchanged)</span>
                      <input type="password" />
                    </label>
                  </div>

                  <div className="field-row">
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
          </div>
        </div>
        <Footer />
      </di>
    );
  }
}

export default AccountDetails;
