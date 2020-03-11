import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { useUserDispatch, useUserState } from 'Context/user.context';
import { loginUser } from 'Services/Auth.service';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import ErrorField from 'Components/ErrorField';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';

function Login() {
  const [reqLoading, setReqLoading] = useState(false);
  const userState = useUserState();
  const dispatch = useUserDispatch();
  const location = useLocation();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('email is Required'),
      password: Yup.string()
        .min(7, 'Password must contain at least 7 characters')
        .required('password is Required')
    }),
    onSubmit: values => {
      handleLogin(values);
    }
  });

  const handleLogin = async values => {
    try {
      setReqLoading(true);
      const { data: response } = await loginUser(values);
      const {
        data: { token }
      } = response;

      setReqLoading(false);
      dispatch({
        type: 'SET_LOGGED_IN_USER',
        payload: { token }
      });
    } catch (error) {
      console.log(error, 'login error');
      setReqLoading(false);
    }
  };

  // const loginRedirect = () => {
  //   history.replace(from);÷
  // };

  if (userState.isAuthenticated) {
    let { from } = location.state || { from: { pathname: '/account' } };
    return <Redirect to={from} />;
  }

  return (
    <div>
      <AltHeader />
      <div className="login-section-wrapper">
        <div className="login-section">
          <span className="login-text">Login</span>
          <div className="login-horizontal-line"></div>
          <div className="login-form-section">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <div>
                <label className="login-label" htmlFor="email">
                  Email Address
                </label>
                <ErrorField formik={formik} fieldName="email" />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>

              <div>
                <label className="login-label" htmlFor="password">
                  Password
                </label>
                <ErrorField formik={formik} fieldName="password" />
                <input
                  type="password"
                  placeholder="Enter Password here"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>

              <div className="login-button">
                <button type="submit" disabled={reqLoading}>
                  <span>Login</span>
                  {reqLoading ? <Spinner className="login-spinner" /> : null}
                </button>
              </div>
            </form>
          </div>
          <div className="login-horizontal-line"></div>
          <div className="login-bottom-section">
            <span className="login-bottom-text">Don’t have an Account?</span>
            <div className="create-account-button">
              <button
                type="button"
                onClick={() => history.push('/create-account')}
              >
                Create an Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
