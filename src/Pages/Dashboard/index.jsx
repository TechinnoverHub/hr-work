import React from 'react';
import './index.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <p>
          Hello Johnbosco (not johnbosco?? Log out)
          <div className="dashboard-para">
            From your account dashboard you can view your
            <a href="account/orders"> recent orders</a>, manage your shipping
            and billing addresses, and edit your password and account details.
          </div>
        </p>
      </div>
    );
  }
}

export default Dashboard;
