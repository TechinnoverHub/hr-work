import React, { useState } from 'react';
import './index.scss';
import Axios from 'Services';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';

export default () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submitForm = async e => {
    e.preventDefault();
    setLoading('FETCHING');
    try {
      const result = await Axios({
        method: 'post',
        url: 'form/newsletter',
        data: { email }
      });

      setLoading('SUCCESS');
      setEmail('');
      console.log(result);
    } catch (error) {
      // e.reset();
      setLoading('ERROR');
      console.log(error);
    }
  };
  // const reqLoading = true;
  const reqLoading = loading === 'FETCHING';
  const showConfirmation = loading === 'SUCCESS';

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <h3>Subscribe to our newsletter</h3>
        <p className="newsletter-subtitle">
          Stay updated with the latest news, reports and HR updates.
        </p>
        {showConfirmation ? (
          <p className="email-confirmation">
            Thank you, your sign-up request was successful! Please check your
            email inbox to confirm.
          </p>
        ) : null}
        <form className="newsletter-field" onSubmit={submitForm}>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              className="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address here"
              required
            />
          </label>
          <button type="submit" disabled={reqLoading}>
            <span>Subscribe</span>
            {reqLoading ? <Spinner className="newsletter-spinner" /> : null}
          </button>
        </form>
      </div>
    </div>
  );
};
