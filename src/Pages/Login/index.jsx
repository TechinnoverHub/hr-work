import React, { useState } from 'react';
import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { useUserDispatch, useUserState } from 'Context/user.context';
import { loginUser } from 'Services/Auth.service';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import ErrorField from 'Components/ErrorField';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';
import { toast } from 'react-toastify';

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
      password: Yup.string().required('password is Required')
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
        data: { token, user }
      } = response;

      setReqLoading(false);
      dispatch({
        type: 'SET_LOGGED_IN_USER',
        payload: { token, user }
      });
    } catch (error) {
      setReqLoading(false);
      if (error.response) {
        const message =
          (error.response.data && error.response.data.message) ||
          'Login failed';
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error('Something went wrong, Try again.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };

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
            <div className="login-bottom-section-text">
              <span className="login-bottom-text">Don’t have an Account?</span>
              <Link className="login-bottom-text" to="/reset-password">
                Forgot Password?
              </Link>
            </div>
            <div className="create-account-button">
              <button
                type="button"
                onClick={() =>
                  history.push({
                    pathname: '/create-account',
                    state: location.state
                  })
                }
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
