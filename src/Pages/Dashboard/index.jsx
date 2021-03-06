import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const DashboardError = () => {
  return (
    <div className="dashboard-wrapper">
      <p>Welcome to your dashboard</p>
      <p className="dashboard-para">
        From your account dashboard you can view your
        <Link to="account/orders"> recent orders</Link> and{' '}
        <Link to="account/details">
          edit your password and account details.
        </Link>
      </p>
    </div>
  );
};

export default DashboardError;
