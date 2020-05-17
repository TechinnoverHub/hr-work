import React, { useState } from 'react';
import { Redirect, useLocation, Link } from 'react-router-dom';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import Styles from './index.module.scss';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';
import { useUserState } from 'Context/user.context';

const ResetEmail = () => {
  const [reqStatus, setStatus] = useState('');
  const userState = useUserState();
  const location = useLocation();

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
          <form>
            <h3 className={Styles.form__heading}>Reset password</h3>

            {reqStatus === 'SUCCESS' ? (
              <p className={Styles.form__confirmation}>
                An email has been sent to you. Click the link in your email to
                confirm password reset
              </p>
            ) : (
              <>
                <div className={Styles.form__control}>
                  <label htmlFor="email">
                    <span>Email</span>
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
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

export default ResetEmail;
