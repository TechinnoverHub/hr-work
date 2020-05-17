import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Redirect, useLocation, Link } from 'react-router-dom';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import Styles from './index.module.scss';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';
import { useUserState } from 'Context/user.context';

const UpdatePassword = () => {
  const [reqStatus, setStatus] = useState('');
  const userState = useUserState();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    password: Yup.string().required('required'),
    confirmPassword: Yup.mixed()
      .test('match', 'Passwords do not match', function(confirmPassword) {
        return confirmPassword === this.options.parent.password;
      })
      .required('required'),
    onSubmit: values => {
      console.log(values);
    }
  });

  const reqLoading = reqStatus === 'LOADING';

  if (userState.isAuthenticated) {
    let { from } = location.state || { from: { pathname: '/account' } };
    return <Redirect to={from} />;
  }

  return (
    <div className={Styles.root}>
      <AltHeader />
      <main className={Styles.main__section}>
        <div className={Styles.container}>
          <form onSubmit={formik.handleSubmit}>
            <h3 className={Styles.form__heading}>Reset password</h3>

            {reqStatus === 'SUCCESS' ? (
              <div className={Styles.confirmation__container}>
                <p className={Styles.confirmation__text}>
                  You can now use your new password to log in to your account.
                </p>

                <Link to="/login">Login</Link>
              </div>
            ) : (
              <>
                <div className={Styles.form__control}>
                  <label htmlFor="password">
                    <span>New Password</span>
                    <input
                      type="password"
                      required
                      name="password"
                      id="password"
                      placeholder="Enter a new password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </label>
                </div>
                <div className={Styles.form__control}>
                  <label htmlFor="confirmPassword">
                    <span>Confirm New Password</span>
                    <input
                      type="password"
                      required
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm your new password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                  </label>
                </div>

                <div className={Styles.form__control}>
                  <button>
                    {reqLoading ? (
                      <>
                        <span>Submitting...</span>
                        <Spinner className={Styles.form__spinner} />
                      </>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdatePassword;
