import React from 'react';
import './index.scss';

const AccountOrders = () => {
  return (
    <div className="account-orders-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col" className="account-orders-desktop-only">
              Status
            </th>
            <th scope="col">Total</th>
            <th scope="col" className="account-orders-desktop-only">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              #3121 <br />
              <span className="account-orders-mobile-only">Cancelled</span>
            </td>
            <td>
              Jan 14, 2020 <br />
              <span className="account-orders-mobile-only account-red-text">
                View
              </span>
            </td>
            <td className="account-orders-desktop-only">Cancelled</td>
            <td>
              ₦28,000.00
              <span className="account-orders-item-quantity"> for 1 item</span>
            </td>
            <td className="account-orders-desktop-only">View</td>
          </tr>

          <tr>
            <td>
              #3121 <br />
              <span className="account-orders-mobile-only">Cancelled</span>
            </td>
            <td>
              Jan 14, 2020 <br />
              <span className="account-orders-mobile-only account-red-text">
                View
              </span>
            </td>
            <td className="account-orders-desktop-only">Cancelled</td>
            <td>
              ₦28,000.00
              <span className="account-orders-item-quantity"> for 1 item</span>
            </td>
            <td className="account-orders-desktop-only">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountOrders;
