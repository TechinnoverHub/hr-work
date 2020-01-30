import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

function Login() {
  return (
    <div>
      <Header />
      <div className="login-section-wrapper">
        <div className="login-section">
          <span className="login-text">Login</span>
          <div className="login-horizontal-line"></div>
          <div className="media-login-wrapper">
            <div className="facebook-login">
              <div className="facebook-login-text">Login with</div>
              <div className="facebook-login-icon"></div>
            </div>
            <div className="google-login">
              <span className="google-login-text">Login with</span>
              <div className="google-login-icon"></div>
            </div>
          </div>
          <div className="login-horizontal-line"></div>

          <div className="login-form-section">
            <form className="login-form">
              <div>
                <div className="login-label">Email Address or Phone Number</div>
                <input
                  type="text"
                  placeholder="Enter Email Address OR Phone Number"
                />
              </div>

              <div>
                <div className="login-label">Password</div>
                <input type="password" placeholder="Enter Password here" />
              </div>

              <div className="login-button">
                <button type="button">Login</button>
              </div>
            </form>
          </div>
          <div className="login-horizontal-line"></div>
          <div className="login-bottom-section">
            <span className="login-bottom-text">Don’t have an Account?</span>
            <div className="create-account-button">
              <button type="button">Create an Account</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
