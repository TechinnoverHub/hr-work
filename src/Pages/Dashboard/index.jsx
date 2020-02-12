import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <p>
        Welcome to your dashboard
        <div className="dashboard-para">
          From your account dashboard you can view your
          <Link to="account/orders"> recent orders</Link>, manage your shipping
          and billing addresses, and edit your password and account details.
        </div>
      </p>
    </div>
  );
};

export default Dashboard;
