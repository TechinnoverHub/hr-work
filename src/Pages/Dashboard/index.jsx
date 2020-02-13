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
          <Link to="account/orders"> recent orders</Link> and{' '}
          <Link to="account/details">
            edit your password and account details.
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Dashboard;
