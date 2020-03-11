import React, { useState } from 'react';
import './index.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserDispatch, useUserState } from 'Context/user.context';
import { toast } from 'react-toastify';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import ErrorField from 'Components/ErrorField';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';
import { createUser } from 'Services/Auth.service';

function CreateAccount() {
  const [reqState, setReqState] = useState('');
  const [reqErr, setReqErr] = useState('');
  const history = useHistory();
  const dispatch = useUserDispatch();
  const userState = useUserState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('email is Required'),
      password: Yup.string()
        .min(7, 'Password must contain at least 7 characters')
        .required('password is Required'),
      firstname: Yup.string().required('first name is Required'),
      lastname: Yup.string().required('last name is Required'),
      phone: Yup.string()
        .min(11, 'enter a valid phone number')
        .required('phone number is Required')
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      handleSignUp(values);
    }
  });

  const handleSignUp = async values => {
    try {
      setReqState('LOADING');
      const { data: response } = await createUser(values);
      const {
        data: { token }
      } = response;

      setReqState('SUCCESS');
      toast.success('Account creation successful', {
        position: toast.POSITION.TOP_CENTER
      });
      dispatch({
        type: 'SET_LOGGED_IN_USER',
        payload: { token }
      });
    } catch (error) {
      setReqState('ERROR');
      if (error.response.data) {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };

  if (userState.isAuthenticated) {
    return <Redirect to={{ pathname: '/account' }} />;
  }

  return (
    <div>
      <AltHeader />
      <div className="create-account-wrapper">
        <div className="create-account-section">
          <div className="create-account-text">Create An Account</div>
          <div className="create-account-horizontal-line"></div>
          <form className="create-account-form" onSubmit={formik.handleSubmit}>
            <div>
              <label className="create-account-label" htmlFor="firstname">
                First Name
              </label>
              <ErrorField formik={formik} fieldName="firstname" />
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                id="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
            </div>

            <div>
              <label className="create-account-label" htmlFor="lastname">
                Last Name
              </label>
              <ErrorField formik={formik} fieldName="lastname" />
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                id="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
            </div>

            <div>
              <label className="create-account-label" htmlFor="phone">
                Phone Number
              </label>
              <ErrorField formik={formik} fieldName="phone" />
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>

            <div>
              <label className="create-account-label" htmlFor="email">
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
              <label className="create-account-label" htmlFor="password">
                Password
              </label>
              <ErrorField formik={formik} fieldName="password" />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <div className="create-account-login-btn">
              <button type="submit" disabled={reqState === 'LOADING'}>
                <span>Create your account</span>
                {reqState === 'LOADING' ? (
                  <Spinner className="create-account-btn-spinner" />
                ) : null}
              </button>
            </div>

            <div className="create-account-login-text">
              By signing up you accept our terms and conditions
            </div>
          </form>

          <div className="create-account-horizontal-line"></div>

          <div className="create-account-login-section-bottom">
            <div className="create-account-login-text">
              Already have an Account?
            </div>
            <div className="create-account-login-btn-bottom">
              <button type="button" onClick={() => history.push('/login')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateAccount;
