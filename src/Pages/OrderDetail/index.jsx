import React from 'react';
import './index.scss';

class OrderDetail extends React.Component {
  render() {
    return (
      <div className="order-detail-right-box-wrapper">
        <div className="order-detail-right-box-text">
          Order <span>#3121</span> was placed on Jan 14, 2020 and is currently
          cancelled
        </div>
        <h3>Order Details</h3>
        <div className="order-detail-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  HR Remote Manager <span> x 1</span>
                </td>
                <td>₦28,000.00</td>
              </tr>
              <tr>
                <td>
                  HR Remote Manager <span> x 1</span>
                </td>
                <td>₦28,000.00</td>
              </tr>
              <tr>
                <td>
                  HR Remote Manager <span> x 1</span>
                </td>
                <td>₦28,000.00</td>
              </tr>

              <tr>
                <td>Sub Total</td>
                <td>
                  ₦28,000.00 <span>for 1 item</span>
                </td>
              </tr>

              {/* <tr>
                <td>Shipping</td>
                <td>
                  ₦1,000.00 <span>via flat rate</span>
                </td>
              </tr> */}

              <tr>
                <td>Payment Method</td>
                <td>Debit or Credit Cards</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>₦28,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="order-detail-smallbox-wrapper">
          <div className="order-detail-smallbox1">
            <div className="order-detail-smallbox1-header">
              <p>Billing Address</p>
            </div>
            <div className="order-detail-smallbox1-text">
              <p>
                John Doe
                <br />
                Keystone Towers, VI, Lagos
                <br /> 08000000000 <br />
                john.doe@gmail.com
              </p>
            </div>
          </div>
          <div className="order-detail-smallbox2">
            <div className="order-detail-smallbox2-header">
              <p>Shipping Address</p>
            </div>
            <div className="order-detail-smallbox2-text">
              <p>
                John Doe
                <br />
                Keystone Towers, VI, Lagos
                <br /> 08000000000 <br />
                john.doe@gmail.com
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default OrderDetail;
