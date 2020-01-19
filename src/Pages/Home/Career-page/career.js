import React from 'react';
import Header from 'components/header';
import './index.scss';
import Footer from 'components/footer';

function Career() {
  return (
    <div>
      <Header />
      <div className="career-image">
        <h3 className="career-text">Join us let’s collaborate</h3>
      </div>
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
            Read more<i className="fa fa-play"></i>
          </button>
        </div>
        <div className="working-at-hr-work-box2"></div>
      </div>
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
        <div className="disclaimer-box1">
          <p>Apply Below</p>
          <h3>Disclaimer</h3>
          <hr />
          <p>
            • If you have a keen interest in working with us, please go ahead
            and apply below. If none of the roles here suits you, you can send
            an unsolicited application via info@alphaduxconsulting.com
          </p>
          <p className="paragraph">
            • We do not advertise job openings for our teams, but we’re open to
            receive applications for various role categories and will contact
            you if your application meets our criteria.
          </p>
        </div>
        <div className="disclaimer-box2">
          <p>
            • You can apply by filling out the form below or sending in your
            professional resume with your cover letter to our careers mail above
            and we will get back to you.
          </p>
        </div>
      </div>
      <div className="form-area">
        <div className="form-box">
          <form>
            <div className="top-form">
              <div className="inner-form">
                <div className="label">First Name</div>
                <input type="text" />
              </div>
              <div className="inner-form">
                <div className="label">Last Name</div>
                <input type="text" />
              </div>
            </div>
            <div className="second-row">
              <div className="inner-form">
                <div className="label">Email</div>
                <input type="email" />
              </div>
              <div className="inner-form">
                <div className="label">Phone Number</div>
                <input type="number" />
              </div>
            </div>
            <div className="third-row">
              <div className="label">Desired Role</div>
              <input type="text" />
            </div>
            <div className="fourth-row">
              <div className="label">Why do you want to work here</div>
              <textarea rows="5" cols="50"></textarea>
            </div>
            <div className="second-row">
              <div className="inner-form">
                <div className="label">Attach Resume</div>
                <input type="text" />
              </div>
              <div className="inner-form">
                <div className="label">Attach cover letter</div>
                <input type="text" />
              </div>
            </div>
            <button className="join-us">
              Join us today <i className="fa fa-play"></i>
            </button>
          </form>
        </div>

        <div className="image-box"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
