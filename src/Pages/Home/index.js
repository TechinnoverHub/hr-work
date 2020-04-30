import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
// import LatestBlog from 'Components/LatestBlog';
import { useHistory } from 'react-router-dom';
import { SIDE_IMAGE } from './imageLinks';
import { getAllPackages } from 'Services/Package.service';
import PackageItem from 'Components/PackageItem';
import Carousel from 'Components/Carouselv2';

// import
function Home() {
  const history = useHistory();
  const [packages, setPackages] = useState([{}, {}, {}]);
  const [packagesLoading, setPackagesLoading] = useState('');

  const getPackages = async () => {
    try {
      setPackagesLoading('FETCHING');
      const { data: response } = await getAllPackages({ limit: 3 });
      if (response.status === 'success') {
        setPackagesLoading('SUCCESS');
        setPackages(response.data.packages);
      }
    } catch (error) {
      setPackagesLoading('ERROR');
      setPackages([]);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="homepage-image">
        <div className="social-icons">
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
        </div>

        <p className="heading-text">
          <span className="heading-primary-small">
            We know that you are busy with deadlines and customer demands and
            this consumes all your available time and as your business expands.
          </span>
          <span className="heading-primary-big">
            We are HR Experts we can help
          </span>
        </p>
      </div>

      <div className="section-who-we-are-homepage">
        <h2>Who we are</h2>
        <hr />
        <div className="col">
          <div className="col1">
            <p className="home-paragraph">
              HR Work is an advisory firm with strong competence and experience
              in providing Human Resources Retainership Services to small or
              medium sized organisations.
            </p>
            <p className="home-paragraph paragraph-two">
              We know that you are busy with deadlines and customer demands and
              this consumes all your available time and as your business
              expands, your employee challenges begin to multiply and then
              problems with hiring, setting and measuring performance, policies
              for direction among others become more inevitable.
            </p>
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
          </div>
          <div className="col2">
            <img src={SIDE_IMAGE} alt="side-bar" />
          </div>
        </div>
        <button className="discover-btn" onClick={() => history.push('/about')}>
          <span>Discover more</span>
          <i className="fa fa-play"></i>
        </button>
      </div>

      {/* PACKAGES SECTION */}
      <div className="section-packages">
        {packagesLoading === 'ERROR' ? null : (
          <>
            <h2>Packages</h2>
            <hr />
            <div className="home-package-box">
              {packages.map((item, index) => (
                <PackageItem
                  key={item._id || index}
                  item={item}
                  packageLoading={packagesLoading}
                />
              ))}
            </div>

            <div className="packages-btn-container">
              <button
                className="packages-btn"
                onClick={() => history.push('/packages')}
              >
                <span>View more packages</span>
                <i className="fa fa-play"></i>
              </button>
            </div>
          </>
        )}
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
                <div className="each-box-wrapper">
                  <h3>Our approach</h3>
                  <p>
                    <b>Our attention is on you!</b>
                    <br /> Our consultancy model is intentionally small to put
                    all the attention on you. We have a policy of working with
                    very few clients within a certain period so you don’t have
                    to be worry about feeling like a number in a crowded room.
                  </p>
                </div>
              </div>
              <div className="each-box">
                <div className="each-box-wrapper">
                  <h3>Understanding of your needs</h3>
                  <p>
                    <strong>We are attentive to your needs!</strong>
                    <br /> One of our greatest strengths is the ability to
                    listen and understand your employee problems and then create
                    a tailored approach that will address the unique situation
                    your business is facing
                  </p>
                </div>
              </div>
              <div className="each-box">
                <div className="each-box-wrapper">
                  <h3>Highly skilled professionals</h3>
                  <p>
                    <strong>We have been there!</strong>
                    <br /> Because we have passed the roads before and have
                    experience in managing complex employee problems. We know
                    how to partner with you to make it work. We are driven by a
                    team of well-seasoned HR Experts in Nigeria and led by
                    Efeguom Oriero
                  </p>
                </div>
              </div>
            </div>
            <div className="why-two-boxes">
              <div className="single-box">
                <div className="single-box-wrapper">
                  <h3>Concerned about your business</h3>
                  <p>
                    <strong>Results Minded!</strong>
                    <br /> We want you to succeed, we carry you along through
                    out the entire process in a timely and professional manner
                  </p>
                </div>
              </div>
              <div className="single-box">
                <div className="single-box-wrapper">
                  <h3>Affordable </h3>
                  <p>
                    <strong>Highly Affordable!</strong>
                    <br /> You can get AC for a fraction of the cost of an
                    in-house HR Unit, but you would still receive the quality
                    expertise you need at the time you need it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section-heading">
        <h2>What Clients Say</h2>
        <hr />
      </div>
      <Carousel />
      {/* <LatestBlog /> */}
      <Footer />
    </div>
  );
}

export default Home;
