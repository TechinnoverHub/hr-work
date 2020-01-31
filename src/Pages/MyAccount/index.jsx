import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';

class MyAccount extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="myAccount-wrapper">
          <div className="myAccount-section">
            <div className="myAccount-left-box-wrapper">
              <div className="myAccount-left-box-text">My Account</div>
              <div className="myAccount-left-box">
                <ul>
                  <li>
                    <Link className="myAccount-list">Dashboard</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>
                  <li>
                    <Link className="myAccount-list">Orders</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>

                  <li>
                    <Link className="myAccount-list">Addresses</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>

                  <li>
                    <Link className="myAccount-list">Payment Methods</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>

                  <li>
                    <Link className="myAccount-list">Account Details</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>

                  <li>
                    <Link className="myAccount-list">Logout</Link>
                  </li>
                  <div className="myAccount-horizontal-line"></div>
                </ul>
              </div>
            </div>
            <div className="myAccount-right-box-wrapper">
              <div className="myAccount-right-box">
                <table className="myAccount-table">
                  <thead className="myAccount-table-header">
                    <tr className="myAccount-table-header-text">
                      <th scope="col">Order</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Total</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="myAccount-table-rows-parent">
                      <td className="myAccount-table-rows">#3121</td>
                      <td className="myAccount-table-rows">Jan 14, 2020</td>
                      <td className="myAccount-table-rows">Cancelled</td>
                      <td className="myAccount-table-rows">
                        ₦28,000.00 <span>for 1 item</span>
                      </td>
                      <td className="myAccount-table-rows">view</td>
                    </tr>
                    <tr className="myAccount-table-rows-parent">
                      <td className="myAccount-table-rows">#3121</td>
                      <td className="myAccount-table-rows">Jan 14, 2020</td>
                      <td className="myAccount-table-rows">Cancelled</td>
                      <td className="myAccount-table-rows">
                        ₦28,000.00 <span>for 1 item</span>
                      </td>
                      <td className="myAccount-table-rows">view</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyAccount;
