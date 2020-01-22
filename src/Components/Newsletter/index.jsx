import React from 'react';
import './index.scss';

export default () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <h3>Subscribe to our newsletter</h3>
        <p>Stay updated with the latest news, reports and HR updates.</p>
        <div className="newsletter-field">
          <input className="text" placeholder="Enter your email address here" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
