import React, { useEffect, useState } from 'react';
import './index.scss';
import Footer from 'Components/Footer';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import AltHeader from 'Components/AltHeader';
import AccountOrders from 'Pages/AccountOrders';
import OrderDetail from 'Pages/OrderDetail';
import AccountDetails from 'Pages/AccountDetails';
import Dashboard from 'Pages/Dashboard';
import { useUserDispatch } from 'Context/user.context';
import { getUserProfile } from 'Services/Auth.service';

const MyAccount = () => {
  const { path } = useRouteMatch();
  const dispatch = useUserDispatch();
  const [userRequest, setUserRequest] = useState('');
  const [userDetails, setUserDetails] = useState({});

  const fetchUser = async () => {
    try {
      const { data: response } = await getUserProfile();

      const {
        data: { user }
      } = response;
      setUserDetails(user);
      console.log(response);
    } catch (error) {
      console.log(error, 'main dash error');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
                <Dashboard />
              </Route>
              <Route path={`${path}/orders/:id`}>
                <OrderDetail />
              </Route>
              <Route path={`${path}/orders`}>
                <AccountOrders orders={userDetails.orders} />
              </Route>
              <Route path={`${path}/details`}>
                <AccountDetails user={userDetails} />
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
