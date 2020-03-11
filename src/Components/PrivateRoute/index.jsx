import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserState } from 'Context/user.context';

const PrivateRoute = ({ children, ...rest }) => {
  const user = useUserState();

  const renderFunc = ({ location }) =>
    user.isAuthenticated ? (
      children
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    );

  return <Route {...rest} render={renderFunc}></Route>;
};

export default PrivateRoute;
