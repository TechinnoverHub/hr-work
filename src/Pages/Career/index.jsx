import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import ErrorField from 'Components/ErrorField';
import './index.scss';

import { careerFormSubmit } from 'Services/Form.service';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';
// import careerHeroImg from 'Assets/images/career-image.png';

const careerHeroImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/f_auto,q_auto/v1580899356/career-image_vmgskx.png';

const fileToBase64 = file => {
  return new Promise(resolve => {
    var reader = new FileReader();
    // Read file content on file loaded event
    reader.onload = function(event) {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });
};

function Career() {
  const [formStatus, setFormStatus] = useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      role: '',
      resume: '',
      cover_letter: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('required'),
      lastname: Yup.string().required('required'),
      role: Yup.string().required('required'),
      message: Yup.string().required('required'),
      phone: Yup.string().required('required'),
      email: Yup.string()
        .email('Invalid email')
        .required('required')
    }),
    validate: values => {
      const errors = {};

      if (!(values.resume instanceof File)) {
        errors.resume = 'required';
      }

      if (!(values.cover_letter instanceof File)) {
        errors.cover_letter = 'required';
      }

      return errors;
    },
    onSubmit: async values => {
      try {
        const [resume_base64, cover_letter_base64] = await Promise.all([
          fileToBase64(values.resume),
          fileToBase64(values.cover_letter)
        ]);

        submitCareerForm({
          ...values,
          resume: resume_base64,
          cover_letter: cover_letter_base64
        });
      } catch (error) {
        toast.error('error uploading file', {
          position: toast.POSITION.TOP_CENTER
        });
        console.error('error uploading file');
      }
    }
  });

  const submitCareerForm = async values => {
    try {
      setFormStatus('SUBMITTING');
      const { data: response } = await careerFormSubmit(values);

      if (response.status === 'success') {
        setFormStatus('SUCCESS');
        toast.success('Form submission successful', {
          position: toast.POSITION.TOP_CENTER
        });
        formik.resetForm();
      }
    } catch (error) {
      setFormStatus('ERROR');
      console.log(error, 'error');
      toast.error('Error submitting form', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div>
      <Header />
      <Hero imgUrl={careerHeroImg} heroTitle="Join us let’s collaborate" />
      <div className="working-at-hr-work-container">
        <div className="working-at-hr-work-box1">
          <p>A great experience</p>
          <h3>Working at HR Work</h3>
          <hr />
          <p>
            We are always looking for exceptional individuals, enthusiastic
            about making a difference as we grow along. Since 2017, Our focus is
            on supporting small and medium sized companies, companies with under
            100 employees it doesn’t matter if you are start-up or already
            established. Some firms do not like to work with small businesses
            but we embrace that fact. Our services will help resolve employee
            related issues, give you the peace of mind you deserve so you can
            focus on growing your business.
          </p>
          <button className="read-more" onClick={() => history.push('/about')}>
            <span>Read more</span>
            <i className="fa fa-play"></i>
          </button>
        </div>
        <div className="working-at-hr-work-box2"></div>
      </div>
      <button className="read-more2">
        Read more<i className="fa fa-play"></i>
      </button>
      <div className="join-our-team">
        <div className="join-our-team-box1"></div>
        <div className="join-our-team-box2">
          <p>Careers</p>
          <h3>Join our team</h3>
          <hr />
          <p>
            We have created an environment that supports professionalism and
            integrity which encourages high performance in our teams. We also
            ensure continuous professional development for our employees by
            investing significant resources in unique training and development
            programs in line with our mission to recruit, retain and reward a
            high-performance workforce.
          </p>
        </div>
      </div>
      <div className="disclaimer">
        <div className="disclaimer--topSection">
          <p>Apply Below</p>
          <h3>Disclaimer</h3>
          <hr />
        </div>
        <div className="disclaimer--boxContainer">
          <div className="disclaimer-box1">
            <p>
              • If you have a keen interest in working with us, please go ahead
              and apply below. If none of the roles here suits you, you can send
              an unsolicited application via info@alphaduxconsulting.com
            </p>
            <p className="paragraph">
              • We do not advertise job openings for our teams, but we’re open
              to receive applications for various role categories and will
              contact you if your application meets our criteria.
            </p>
          </div>
          <div className="disclaimer-box2">
            <p>
              • You can apply by filling out the form below or sending in your
              professional resume with your cover letter to our careers mail
              above and we will get back to you.
            </p>
          </div>
        </div>
      </div>

      <div className="form-area">
        <div className="form-area-container">
          <form id="form1" onSubmit={formik.handleSubmit}>
            <div className="first-row-form">
              <label htmlFor="firstname">
                First Name
                <ErrorField formik={formik} fieldName="firstname" />
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
              </label>

              <label htmlFor="lastname">
                Last Name
                <ErrorField formik={formik} fieldName="lastname" />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
              </label>
            </div>

            <div className="second-row-form">
              <label htmlFor="email">
                Email
                <ErrorField formik={formik} fieldName="email" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </label>

              <label htmlFor="phone">
                Phone Number
                <ErrorField formik={formik} fieldName="phone" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </label>
            </div>

            <div className="third-row-form">
              <label htmlFor="role">
                Desired Role
                <ErrorField formik={formik} fieldName="role" />
                <input
                  type="text"
                  name="role"
                  id="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                />
              </label>
            </div>

            <div className="fourth-row-form">
              <label htmlFor="message">
                Why do you want to work here
                <ErrorField formik={formik} fieldName="message" />
                <textarea
                  rows="5"
                  cols="50"
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
              </label>
            </div>

            <div className="fifth-row-form">
              <label htmlFor="resume">
                Attach Resume
                <ErrorField formik={formik} fieldName="resume" />
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={e =>
                    formik.setFieldValue('resume', e.target.files[0])
                  }
                  onBlur={() => formik.setFieldTouched('resume', true)}
                />
              </label>

              <label htmlFor="cover_letter">
                Attach cover letter
                <ErrorField formik={formik} fieldName="cover_letter" />
                <input
                  type="file"
                  name="cover_letter"
                  id="cover_letter"
                  onChange={e =>
                    formik.setFieldValue('cover_letter', e.target.files[0])
                  }
                  onBlur={() => formik.setFieldTouched('cover_letter', true)}
                />
              </label>
            </div>
          </form>
          <div className="image-box"></div>
        </div>
        <button
          className="join-us"
          type="submit"
          form="form1"
          disabled={formStatus === 'SUBMITTING'}
        >
          <span>Join us today</span>
          {formStatus === 'SUBMITTING' ? (
            <Spinner className="login-spinner spinner" />
          ) : null}

          {formStatus !== 'SUBMITTING' ? <i className="fa fa-play"></i> : null}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
