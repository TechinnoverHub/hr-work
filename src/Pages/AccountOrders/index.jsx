import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const TableRow = ({ data }) => {
  const { status, total, date, items, ref } = data;

  return (
    <tr>
      <td>
        #{ref} <br />
        <span className="account-orders-mobile-only">{status}</span>
      </td>
      <td>
        {new Date(date).toDateString()} <br />
        <Link
          className="account-orders-mobile-only account-red-text"
          to={`/account/orders/${1}`}
        >
          View
        </Link>
      </td>
      <td className="account-orders-desktop-only">{status}</td>
      <td>
        ₦{total.toLocaleString()}
        <span className="account-orders-item-quantity">
          {' '}
          for {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </td>
      <td className="account-orders-desktop-only">
        <Link to={{ pathname: `/account/orders/${1}`, state: data }}>View</Link>
      </td>
    </tr>
  );
};

const AccountOrders = ({ orders }) => {
  return (
    <div className="account-orders-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Order Reference</th>
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
          {orders.map(data => (
            <TableRow data={data} key={data._id} />
          ))}
        </tbody>
      </table>
      {orders.length < 1 ? (
        <div className="table-no-orders">No orders</div>
      ) : null}
    </div>
  );
};

export default AccountOrders;
