import React from 'react';
import Header from 'Components/Header';
import './index.scss';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import careerHeroImg from 'Assets/images/career-image.png';

function Career() {
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
          <button className="read-more">
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
          <form id="form1">
            <div className="first-row-form">
              <label htmlFor="firstName">
                First Name
                <input type="text" name="firstName" id="firstName" />
              </label>

              <label htmlFor="lastName">
                Last Name
                <input type="text" name="lastName" id="lastName" />
              </label>
            </div>

            <div className="second-row-form">
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" required />
              </label>

              <label htmlFor="phoneNumber">
                Phone Number
                <input type="number" name="phoneNumber" id="phoneNumber" />
              </label>
            </div>

            <div className="third-row-form">
              <label htmlFor="desiredRole">
                Desired Role
                <input type="text" name="desiredRole" id="desiredRole" />
              </label>
            </div>

            <div className="fourth-row-form">
              <label htmlFor="reason">
                Why do you want to work here
                <textarea
                  rows="5"
                  cols="50"
                  id="reason"
                  name="reason"
                ></textarea>
              </label>
            </div>

            <div className="fifth-row-form">
              <label htmlFor="">
                Attach Resume
                <input type="text" name="resume" id="resume" />
              </label>

              <label htmlFor="">
                Attach cover letter
                <input type="text" name="coverLetter" id="coverLetter" />
              </label>
            </div>
          </form>
          <div className="image-box"></div>
        </div>
        <button className="join-us" type="submit" form="form1">
          <span>Join us today</span>
          <i className="fa fa-play"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
