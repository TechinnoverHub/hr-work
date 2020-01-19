import React from 'react';
import './index.scss';
import Header from 'components/header';
// import homepage from '../../Assets/images/homepage-header.png';
import homepageImage from '../../Assets/images/homepage-side-image.png';
import { Link } from 'react-router-dom';
import Footer from 'components/footer';
import LatestBlog from 'components/latestBlog';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="box">
        <div className="homepage-image"></div>
        <div className="social-icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <p className="heading-text">
          <span className="heading-primary-small">
            We know that you are busy with deadlines and customer demands and
            this
            <br />
            consumes all your available time and as your business expands.
          </span>
          <br />
          <span className="heading-primary-big">
            We are HR Experts we can help
          </span>
        </p>
      </div>
      <div className="section-who-we-are">
        <h2>Who we are</h2>
        <hr />
        <div className="col">
          <div className="col1">
            HR Work is an advisory firm with strong competence and experience in
            providing Human Resources Retainership Services to small or medium
            sized organisations. <br />
            <br />
            We know that you are busy with deadlines and customer demands and
            this consumes all your available time and as your business expands,
            your employee challenges begin to multiply and then problems with
            hiring, setting and measuring performance, policies for direction
            among others become more evitable.
            <div className="Col-small-box">
              <div className="Col-small-box1">
                <h4>Our Mission:</h4>
                <p>
                  To make HR Systems work for Small to Medium sized companies.
                </p>
              </div>
              <div className="Col-small-box2">
                <h4>Our Vision:</h4>
                <p>
                  To be the HR retainership firm of choice to thriving
                  businesses
                </p>
              </div>
            </div>
            <button className="discover-btn">
              <span>Discover more</span>
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="col2">
            <img src={homepageImage} alt="side-bar" />
          </div>
        </div>
      </div>

      {/* PACKAGES SECTION */}
      <div className="section-packages">
        <h2>Packages</h2>
        <hr />
        <div className="package-box">
          <div className="box-image1">
            <div className="package-image">
              <div className="package-image-label">Retainership Category</div>
            </div>
            <div className="package-body">
              <h3>HR Remote Manager</h3>
              <p className="price">#3,480</p>
              <p>Basic, Bronze, Foundation</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="box-image2">
            <div className="package-image">
              <div className="package-image-label">Retainership Category</div>
            </div>
            <div className="package-body">
              <h3>HR Remote Manager</h3>
              <p className="price">3,480</p>
              <p>Basic, Bronze, Foundation</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="box-image3">
            <div className="package-image">
              <div className="package-image-label">Retainership Category</div>
            </div>
            <div className="package-body">
              <h3>HR Remote Manager</h3>
              <p className="price">#3,480</p>
              <p>Basic, Bronze, Foundation</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="packages-btn">
            <span>View more packages</span>
            <i className="fa fa-play"></i>
          </button>
        </Link>
      </div>

      <div className="why-hr-work">
        <div className="why-bg-image">
          <div className="hr-work-container">
            <span>
              <p>We bring a wealth of local market knowledge…</p>
              <h3>Why HR Work</h3>
            </span>
            <div className="why-three-boxes">
              <div className="each-box">
                <h3>Our approach</h3>
                <p>
                  <b>Our attention is on you!</b>
                  <br /> Our consultancy model is intentionally small to put all
                  the attention on you. We have a policy of working with very
                  few clients within a certain period so you don’t have to be
                  worry about feeling like a number in a crowded room.
                </p>
              </div>
              <div className="each-box">
                <h3>Understanding of your needs</h3>
                <p>
                  <b>We are attentive to your needs!</b>
                  <br /> One of our greatest strengths is the ability to listen
                  and understand your employee problems and then create a
                  tailored approach that will address the unique situation your
                  business is facing
                </p>
              </div>
              <div className="each-box">
                <h3>Highly skilled professionals</h3>
                <p>
                  <b>We have been there!</b>
                  <br /> Because we have passed the roads before and have
                  experience in managing complex employee problems. We know how
                  to partner with you to make it work. We are driven by a team
                  of well-seasoned HR Experts in Nigeria and led by Efeguom
                  Oriero
                </p>
              </div>
            </div>
            <div className="why-two-boxes">
              <div className="single-box">
                <h3>Concerned about your business</h3>
                <p>
                  <b>Results Minded!</b>
                  <br /> We want you to succeed, we carry you along through out
                  the entire process in a timely and professional manner
                </p>
              </div>
              <div className="single-box">
                <h3>Affordable </h3>
                <p>
                  <b>Highly Affordable!</b>
                  <br /> You can get AC for a fraction of the cost of an
                  in-house HR Unit, but you would still receive the quality
                  expertise you need at the time you need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default Home;