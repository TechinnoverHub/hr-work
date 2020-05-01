import React, { useEffect } from 'react';
import './index.scss';
import Footer from 'Components/Footer';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import AltHeader from 'Components/AltHeader';
import AccountOrders from 'Pages/AccountOrders';
import OrderDetail from 'Pages/OrderDetail';
import AccountDetails from 'Pages/AccountDetails';
import Dashboard from 'Pages/Dashboard';
import DashboardError from 'Pages/DashboardError';
import { useUserDispatch, useUserState } from 'Context/user.context';
import { fetchUser } from 'Actions/user';
import Spinner from 'Components/Spinner';

const MyAccount = () => {
  const { path } = useRouteMatch();
  const dispatch = useUserDispatch();
  const userStore = useUserState();

  useEffect(() => {
    fetchUser(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dashboardError = userStore.reqStatus === 'ERROR';
  return (
    <div>
      <AltHeader />
      <div className="myAccount-wrapper">
        <h1 className="myAccount-left-box-text">My Account</h1>

        {userStore.reqStatus === 'FETCHING' ? (
          <Spinner />
        ) : (
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
                    <button
                      className="myAccount-list-button"
                      onClick={() => dispatch({ type: 'LOG_OUT_USER' })}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="myAccount-right-box-wrapper">
              <Switch>
                <Route exact path={path}>
                  {dashboardError ? <DashboardError /> : <Dashboard />}
                </Route>
                <Route path={`${path}/orders/:id`}>
                  {dashboardError ? <DashboardError /> : <OrderDetail />}
                </Route>
                <Route path={`${path}/orders`}>
                  {dashboardError ? (
                    <DashboardError />
                  ) : (
                    <AccountOrders orders={userStore.user.orders} />
                  )}
                </Route>
                <Route path={`${path}/details`}>
                  {dashboardError ? (
                    <DashboardError />
                  ) : (
                    <AccountDetails user={userStore.user} />
                  )}
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
