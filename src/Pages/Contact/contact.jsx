import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import NewsLetter from 'Components/newsletter';

function Contact() {
  return (
    <div>
      <Header />
      <div className="get-in-touch-image">
        <div className="get-in-touch-text">
          <h3>Contact Us</h3>
        </div>
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
          <div className="first-row">
            <div className="label">Name</div>
            <input type="text" />
          </div>

          <div className="second-row">
            <div className="second-row-child">
              <div className="label">Purpose</div>
              <input type="text" placeholder="Select subject" />
            </div>

            <div className="second-row-child">
              <div className="label">Kindly specify here, if others</div>
              <input type="text" placeholder="Select subject" />
            </div>
          </div>

          <div className="third-row">
            <div className="third-row-child">
              <div className="label">Email</div>
              <input type="text" placeholder="Enter email address here" />
            </div>

            <div className="third-row-child">
              <div className="label">Phone Number</div>
              <input type="text" />
            </div>
          </div>

          <div className="fourth-row">
            <div className="label">Company Name</div>
            <input type="text" />
          </div>

          <div className="fifth-row">
            <div className="label">Message</div>
            <textarea cols="50" rows="4"></textarea>
          </div>

          <div className="contact-btn">
            <button>
              Submit<i className="fa fa-play"></i>
            </button>
          </div>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
