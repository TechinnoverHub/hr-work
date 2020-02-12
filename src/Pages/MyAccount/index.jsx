import React from 'react';
import './index.scss';
import Footer from 'Components/Footer';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import AltHeader from 'Components/AltHeader';
import AccountOrders from 'Pages/AccountOrders';
import OrderDetail from 'Pages/OrderDetail';
import AccountDetails from 'Pages/AccountDetails';
import Dashboard from 'Pages/Dashboard';

const MyAccount = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <AltHeader />
      <div className="myAccount-wrapper">
        <h1 className="myAccount-left-box-text">My Account</h1>
        <div className="myAccount-section">
          <div className="myAccount-left-box-wrapper">
            <div className="myAccount-left-box">
              <ul>
                <li>
                  <NavLink
                    exact
                    className="myAccount-list"
                    to="/account"
                    activeClassName="myAccount-list-active"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <div className="myAccount-horizontal-line"></div>
                <li>
                  <NavLink
                    className="myAccount-list"
                    to="/account/orders"
                    activeClassName="myAccount-list-active"
                  >
                    Orders
                  </NavLink>
                </li>
                <div className="myAccount-horizontal-line"></div>
                <li>
                  <NavLink
                    exact
                    className="myAccount-list"
                    to="/account/details"
                    activeClassName="myAccount-list-active"
                  >
                    Account Details
                  </NavLink>
                </li>
                <div className="myAccount-horizontal-line"></div>

                <li>
                  <button className="myAccount-list-button">Logout</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="myAccount-right-box-wrapper">
            <Switch>
              <Route exact path={path}>
                <Dashboard />
              </Route>
              <Route path={`${path}/orders/:id`}>
                <OrderDetail />
              </Route>
              <Route path={`${path}/orders`}>
                <AccountOrders />
              </Route>
              <Route path={`${path}/details`}>
                <AccountDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
