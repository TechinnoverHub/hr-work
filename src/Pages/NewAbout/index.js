import React from 'react';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import './index.scss';
import NewsLetter from 'Components/Newsletter';
import Hero from 'Components/Hero';

const aboutImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/q_auto:best,f_auto/v1580899341/about-header-image_byjwqa.png';

function About() {
  return (
    <div>
      <Header />
      <Hero imgUrl={aboutImg} heroTitle="About Us" />

      <div className="section-who-we-are">
        <div className="section-text">Who we are</div>
        <div className="red-line"></div>
        <div className="container-box">
          <div className="container-box1">
            <div className="container-box1-text">
              <p>
                HR Work is an advisory firm with strong competence and
                experience in providing human resources retainership services to
                small and medium-sized organisations.
              </p>
              <p>
                We understand that deadlines and customer demands can become
                time-consuming as your business expands. Your employee
                challenges begin to multiply, and problems with recruiting,
                setting and measuring performance, and policies for direction
                among others, are inevitable
                <strong> We are HR experts. We can help.</strong>
              </p>
              <p>
                Our focus is on supporting small and medium-sized companies. It
                doesn’t matter whether you are a start-up or an already
                established business. Whereas some firms do not like to work
                with small businesses, we embrace companies with under 100
                employees. Our services will help resolve employee-related
                issues, giving you the peace of mind you deserve so you can
                focus on growing your business.
              </p>
            </div>
          </div>
          <div className="container-box2">
            <div className="small-box">
              <p>
                <b>OUR MISSION</b>
                <br />
                To make HR systems work for small to medium-sized companies.
              </p>
            </div>
            <div className="small-box">
              <p>
                <b>OUR VISION</b>
                <br />
                To be the HR retainership firm of choice for thriving
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-hr-work-section">
        <span>
          <h3>Why HR Work</h3>
          <p>We bring a wealth of local market knowledge…</p>
        </span>
      </div>
      <div className="section2">
        <div className="why-hr-work-container">
          <div className="boxes-container">
            <div className="why-hr-work-three-boxes">
              <div className="why-hr-work-box1">
                <h3>Our approach</h3>
                <p>
                  <b>The spotlight is on you!</b>
                  <br /> Our consultancy model is intentionally small, so all
                  the attention can be on you. Our policy is to work with very
                  few clients within a certain period; you’ll never have to
                  worry about being just a number in a crowded room.
                </p>
              </div>
              <div className="why-hr-work-box2">
                <h3>Understanding of your needs</h3>
                <p>
                  <b>We are attentive to your needs!</b>
                  <br /> One of our greatest strengths is our ability to listen
                  and understand your employee problems, and then create a
                  tailored approach to accurately address the unique challenge
                  your business is faced with.
                </p>
              </div>
              <div className="why-hr-work-box3">
                <h3>Highly skilled professionals</h3>
                <p>
                  <b>We have been there!</b>
                  <br /> We have walked these paths and garnered significant
                  experience in managing complex employee problems. Our team of
                  well-seasoned HR experts, led by Efeguom Oriero, knows how to
                  partner with you for business growth.
                </p>
              </div>
            </div>
            <div className="why-hr-work-two-boxes">
              <div className="two-box1">
                <div className="two-box-container">
                  <h3>Concerned about your business</h3>
                  <p>
                    <strong>Results-oriented!</strong>
                    <br /> We want you to succeed, we carry you along through
                    out the entire process in a timely and professional manner.
                  </p>
                </div>
              </div>
              <div className="two-box2">
                <div className="two-box-container">
                  <h3>Affordable </h3>
                  <p>
                    <strong>Our services are cost-effective!</strong>
                    <br /> You can get a HR Work resource person for a fraction
                    of the cost of an in-house HR Unit, and still receive the
                    top-notch expertise you need, when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-our-value">
            <div className="side-image">
              <div className="side-image-container">
                <h2>Our Value Proposition</h2>
              </div>
            </div>
            <div className="values">
              <div className="values-box">
                <div className="values-box-container">
                  <p>
                    We take pride in our team of highly experienced HR
                    professionals who have a deep understanding of what being a
                    business partner entails.
                  </p>
                </div>
              </div>
              <div className="values-box">
                <div className="values-box-container">
                  <p>
                    We are result-oriented. We take the time to understand your
                    needs and provide support by advising you on how to solve
                    each problem with proven and clear methods.
                  </p>
                </div>
              </div>
              <div className="values-box">
                <div className="values-box-container">
                  <p>
                    Every client is unique and important to us, so we don’t use
                    a ‘one size fits all’ template. We ensure you get first-rate
                    solutions customised to meet the specific needs of your
                    business!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default About;
