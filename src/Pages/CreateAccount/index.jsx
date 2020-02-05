import React from 'react';
import './index.scss';
import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import { useHistory } from 'react-router-dom';

function CreateAccount() {
  const history = useHistory();

  return (
    <div>
      <AltHeader />
      <div className="create-account-wrapper">
        <div className="create-account-section">
          <div className="create-account-text">Create An Account</div>
          <div className="create-account-horizontal-line"></div>
          <form className="create-account-form">
            <div>
              <div className="create-account-label">First Name</div>
              <input type="text" placeholder="Enter First Name" />
            </div>

            <div>
              <div className="create-account-label">Last Name</div>
              <input type="text" placeholder="Enter First Name" />
            </div>

            <div>
              <div className="create-account-label">Email Address</div>
              <input type="email" placeholder="Enter Email Address" />
            </div>

            <div>
              <div className="create-account-label">Phone Number</div>
              <input type="Number" placeholder="Enter Phone Number" />
            </div>

            <div>
              <div className="create-account-label">Password</div>
              <input type="text" placeholder="Enter Password" />
            </div>

            <div className="create-account-login-btn">
              <button type="button">Create your account</button>
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