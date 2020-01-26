import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import NewsLetter from 'Components/Newsletter';
import CustomMap from 'Components/CustomMap';
import Hero from 'Components/Hero';
import contactImg from 'Assets/images/get-in-touch-image.png';

function Contact() {
  return (
    <div>
      <Header />
      <Hero imgUrl={contactImg} heroTitle="Contact Us" />
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
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" />
            </label>
          </div>

          <div className="second-row">
            <label htmlFor="purpose">
              Purpose
              <input
                type="text"
                name="purpose"
                id="purpose"
                placeholder="Select subject"
              />
            </label>

            <label htmlFor="otherPurpose">
              Kindly specify here, if others
              <input type="text" name="otherPurpose" id="otherPurpose" />
            </label>
          </div>

          <div className="third-row">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" />
            </label>

            <label htmlFor="phoneNumber">
              Phone Number
              <input type="text" name="phoneNumber" id="phoneNumber" />
            </label>
          </div>

          <div className="fourth-row">
            <label htmlFor="companyName">
              Company Name
              <input type="text" name="companyName" id="companyName" />
            </label>
          </div>

          <div className="fifth-row">
            <label htmlFor="message">
              Message
              <textarea
                rows="5"
                cols="50"
                id="message"
                name="message"
              ></textarea>
            </label>
          </div>

          <div className="contact-btn">
            <button>
              <span>Submit</span>
              <i className="fa fa-play"></i>
            </button>
          </div>
        </form>
      </div>
      <div style={{ height: '327px' }}>
        <CustomMap />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
