import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { setToken, setAuthHeaders, deleteToken } from 'Utils/authHelpers';

import { getToken } from 'Utils/authHelpers';
import { fetchUser } from 'Actions/user';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER': {
      const {
        payload: { token, user }
      } = action;
      setToken(token);
      setAuthHeaders(token);
      return { ...state, isAuthenticated: true, user };
    }

    case 'LOG_OUT_USER': {
      deleteToken();
      return { ...state, isAuthenticated: false };
    }

    case 'USER_FETCHING_REQUEST': {
      return { ...state, reqStatus: 'FETCHING' };
    }

    case 'USER_FETCHING_SUCCESS': {
      return { ...state, reqStatus: 'SUCCESS', user: action.payload };
    }

    case 'USER_FETCHING_ERROR': {
      return { ...state, reqStatus: 'ERROR' };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    isAuthenticated: false,
    user: { orders: [] },
    reqStatus: ''
  });

  function autoLogin() {
    if (!state.isAuthenticated) {
      const token = getToken();

      if (token) {
        dispatch({ type: 'SET_LOGGED_IN_USER', payload: { token } });
        fetchUser(dispatch);
      }
    }
  }

  useEffect(() => {
    autoLogin();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch };
