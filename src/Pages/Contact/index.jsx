import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import NewsLetter from 'Components/Newsletter';
// import CustomMap from 'Components/CustomMap';
import Hero from 'Components/Hero';
import ErrorField from 'Components/ErrorField';
import { contactFormSubmit } from 'Services/Form.service';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';

// import contactImg from 'Assets/images/contactPGIMG.png';

const contactImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/f_auto,q_auto:best/v1580899334/contactPGIMG_nsqly2.png';

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      purpose: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('full name is required'),
      purpose: Yup.string().required('subject is required'),
      phone: Yup.string().required('phone number is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('email is required'),
      company: Yup.string().required('company name is required'),
      message: Yup.string().required('message is required')
    }),
    onSubmit: values => {
      submitContactForm(values);
    }
  });

  const submitContactForm = async values => {
    try {
      setFormStatus('SUBMITTING');
      const { data: response } = await contactFormSubmit(values);

      if (response.status === 'success') {
        setFormStatus('SUCCESS');
        toast.success('Form submission successful', {
          position: toast.POSITION.TOP_CENTER
        });
        formik.resetForm();
      }
    } catch (error) {
      setFormStatus('ERROR');
      toast.error('Error submitting form', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div>
      <Header />
      <Hero imgUrl={contactImg} heroTitle="Contact Us" />
      <div className="get-in-touch">
        <h3>Get in Touch</h3>
        <p>Just a click and we can talk more!</p>
        <span className="get-in-touch-icons">
          <i className="fa fa-facebook"></i>

          <a
            href="https://www.instagram.com/hrworkng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </span>
      </div>

      <div className="send-message">
        <h3>Send a Message</h3>
      </div>
      <div className="form">
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className="first-row">
            <label htmlFor="name">
              Name
              <ErrorField formik={formik} fieldName="name" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </label>
          </div>

          <div className="second-row">
            <label htmlFor="purpose">
              Subject
              <ErrorField formik={formik} fieldName="purpose" />
              <input
                type="text"
                name="purpose"
                id="purpose"
                placeholder="Enter subject"
                onChange={formik.handleChange}
                value={formik.values.purpose}
              />
            </label>

            <label htmlFor="company">
              Company Name
              <ErrorField formik={formik} fieldName="company" />
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Enter company name"
                onChange={formik.handleChange}
                value={formik.values.company}
              />
            </label>
          </div>

          <div className="third-row">
            <label htmlFor="email">
              Email
              <ErrorField formik={formik} fieldName="email" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>

            <label htmlFor="phoneNumber">
              Phone Number
              <ErrorField formik={formik} fieldName="phone" />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </label>
          </div>

          <div className="fifth-row">
            <label htmlFor="message">
              Message
              <ErrorField formik={formik} fieldName="message" />
              <textarea
                rows="5"
                cols="50"
                id="message"
                name="message"
                placeholder="Enter message"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
            </label>
          </div>

          <div className="contact-btn">
            <button type="submit" disabled={formStatus === 'SUBMITTING'}>
              <span>Submit</span>
              {formStatus === 'SUBMITTING' ? (
                <Spinner className="login-spinner spinner" />
              ) : null}

              {formStatus !== 'SUBMITTING' ? (
                <i className="fa fa-play"></i>
              ) : null}
            </button>
          </div>
        </form>
      </div>
      {/* <div style={{ height: '327px' }}><CustomMap /></div> */}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Contact;
