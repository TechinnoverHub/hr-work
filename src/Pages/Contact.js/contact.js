import React from 'react';
import './index.scss';
import Header from 'components/header';
import Footer from 'components/footer';
import NewsLetter from 'components/newsletter';

function Contact() {
  return (
    <div>
      <Header />
      <div className="get-in-touch-image">
        <h3>Contact Us</h3>
      </div>
      <div className="get-in-touch">
        <h3>Get in Touch</h3>
        <p>Just a click and we can talk more!</p>
        <span className="get-in-touch-icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </span>
      </div>

      <div className="send-message">
        <h3>Send a Message</h3>
      </div>
      <div className="form">
        <form className="form-container">
          <div className="form-content">
            <div className="label">First Name</div>
            <input type="text" />
          </div>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
