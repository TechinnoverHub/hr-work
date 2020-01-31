import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { Link } from 'react-router-dom';

class OrderDetail extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="order-detail-wrapper">
          <div className="order-detail-section">
            <div className="order-detail-left-box-wrapper">
              <div className="order-detail-left-box-text">My Account</div>
              <div className="order-detail-left-box">
                <ul>
                  <li>
                    <Link className="order-detail-list">Dashboard</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>
                  <li>
                    <Link className="order-detail-list">Orders</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>

                  <li>
                    <Link className="order-detail-list">Addresses</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>

                  <li>
                    <Link className="order-detail-list">Payment Methods</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>

                  <li>
                    <Link className="order-detail-list">Account Details</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>

                  <li>
                    <Link className="order-detail-list">Logout</Link>
                  </li>
                  <div className="order-detail-horizontal-line"></div>
                </ul>
              </div>
            </div>

            <div className="order-detail-right-box-wrapper">
              <div className="order-detail-right-box-text">
                Order <span>#3121</span> was placed on Jan 14, 2020 and is
                currently cancelled
              </div>
              <h3>Order Details</h3>
              <div className="order-detail-right-box">
                <table className="order-detail-table">
                  <thead className="order-detail-table-header">
                    <tr className="order-detail-table-header-text">
                      <th scope="col">Product</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="order-detail-table-rows-parent">
                      <td className="order-detail-table-rows">
                        HR Remote Manager <span> x 1</span>
                      </td>
                      <td className="order-detail-table-row2">₦28,000.00</td>
                    </tr>

                    <tr className="order-detail-table-rows-parent">
                      <td className="order-detail-table-rows">Sub Total</td>
                      <td className="order-detail-table-row2">
                        ₦28,000.00 <span>for 1 item</span>
                      </td>
                    </tr>

                    <tr className="order-detail-table-rows-parent">
                      <td className="order-detail-table-rows">Shipping</td>
                      <td className="order-detail-table-row2">
                        ₦1,000.00 <span>via flat rate</span>
                      </td>
                    </tr>

                    <tr className="order-detail-table-rows-parent">
                      <td className="order-detail-table-rows">
                        Payment Method
                      </td>
                      <td className="order-detail-table-row2">
                        Debit or Credit Cards
                      </td>
                    </tr>

                    <tr className="order-detail-table-rows-parent">
                      <td className="order-detail-table-rows">Total</td>
                      <td className="order-detail-table-row2">₦28,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="order-detail-smallbox-wrapper">
                <div className="order-detail-smallbox1">
                  <div className="order-detail-smallbox1-header">
                    Billing Address
                  </div>
                  <div className="order-detail-smallbox1-text">
                    John Doe
                    <br />
                    Keystone Towers, VI, Lagos
                    <br /> 08000000000 john.doe@gmail.com
                  </div>
                </div>
                <div className="order-detail-smallbox2">
                  <div className="order-detail-smallbox2-header">
                    Shipping Address
                  </div>
                  <div className="order-detail-smallbox2-text">
                    John Doe
                    <br />
                    Keystone Towers, VI, Lagos
                    <br /> 08000000000 john.doe@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderDetail;
