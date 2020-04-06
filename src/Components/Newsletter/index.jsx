import React, { useState } from 'react';
import './index.scss';
import Axios from 'axios';

export default () => {
  const [email, setEmail] = useState();

  const submitForm = async e => {
    e.preventDefault();
    try {
      // const result = await Axios({
      //   method: 'post',
      //   url: 'https://us1.api.mailchimp.com/3.0/lists/f350b0e706/members',
      //   data: {
      //     email_address: 'tomiadebanjo@gmail.com',
      //     status: 'pending'
      //   },
      //   auth: {
      //     username: 'hrworkfrontend',
      //     password: 'ea2d76d6156ebf3e184a95c8995c624a-us19'
      //   }
      // });
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <h3>Subscribe to our newsletter</h3>
        <p>Stay updated with the latest news, reports and HR updates.</p>
        <form className="newsletter-field" onSubmit={submitForm}>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              className="text"
              placeholder="Enter your email address here"
              required
            />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
