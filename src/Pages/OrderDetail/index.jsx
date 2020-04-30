import React from 'react';
import './index.scss';
import { useLocation, Redirect } from 'react-router-dom';

const OrderDetail = () => {
  const location = useLocation();

  if (!location.state) {
    return <Redirect to="/account/orders" />;
  }

  const {
    state: { ref, date, items, total }
  } = location;
  return (
    <div className="order-detail-right-box-wrapper">
      <div className="order-detail-right-box-text">
        Order <span>#{ref}</span> was placed on {new Date(date).toDateString()}
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
            {items.map(item => (
              <tr key={item._id}>
                <td>
                  {item.package.title} <span> x 1</span>
                </td>
                <td>₦{item.package.price.toLocaleString()}</td>
              </tr>
            ))}

            <tr>
              <td>Sub Total</td>
              <td>
                ₦{total.toLocaleString()} <span>for {items.length} item</span>
              </td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>Debit or Credit Cards</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>₦{total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
