import React from 'react';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import './index.scss';
import NewsLetter from 'Components/newsletter';

function About() {
  return (
    <div>
      <Header />
      <div className="about-image">
        <h3 className="about-text">About Us</h3>
      </div>
      <div className="section-who-we-are">
        <div className="section-text">Who we are</div>
        <div className="container-box">
          <div className="container-box1">
            <p className="container-box1-text">
              <p>
                HR Work is an advisory firm with strong competence and
                experience in providing Human Resources Retainership Services to
                small or medium sized organisations.
              </p>
              <p>
                We know that you are busy with deadlines and customer demands
                and this consumes all your available time and as your business
                expands, your employee challenges begin to multiply and then
                problems with hiring, setting and measuring performance,
                policies for direction among others become more evitable.
                <b> WE ARE HR EXPERTS WE CAN HELP</b>
              </p>
              <p>
                Our focus is on supporting small and medium sized companies,
                companies with under 100 employees it doesn’t matter if you are
                start-up or already established. Some firms do not like to work
                with small businesses but we embrace that fact. Our services
                will help resolve employee related issues, give you the peace of
                mind you deserve so you can focus on growing your business.
              </p>
            </p>
          </div>
          <div className="container-box2">
            <div className="small-box">
              <p>
                <b>Our Mission:</b>
                <br />
                To make HR Systems work for Small to Medium sized companies.
              </p>
            </div>
            <div className="small-box">
              <p>
                <b>Our Vision:</b>
                <br />
                To be the HR retainership firm of choice to thriving businesses
              </p>
            </div>
          </div>
          <div></div>
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
                  <b>Our attention is on you!</b>
                  <br /> Our consultancy model is intentionally small to put all
                  the attention on you. We have a policy of working with very
                  few clients within a certain period so you don’t have to be
                  worry about feeling like a number in a crowded room.
                </p>
              </div>
              <div className="why-hr-work-box2">
                <h3>Understanding of your needs</h3>
                <p>
                  <b>We are attentive to your needs!</b>
                  <br /> One of our greatest strengths is the ability to listen
                  and understand your employee problems and then create a
                  tailored approach that will address the unique situation your
                  business is facing
                </p>
              </div>
              <div className="why-hr-work-box3">
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
            <div className="why-hr-work-two-boxes">
              <div className="two-box1">
                <h3>Concerned about your business</h3>
                <p>
                  <b>Results Minded!</b>
                  <br /> We want you to succeed, we carry you along through out
                  the entire process in a timely and professional manner
                </p>
              </div>
              <div className="two-box2">
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
          <div className="section-our-value">
            <div className="side-image">
              <h2>Our Value Proposition</h2>
            </div>
            <div className="values">
              <div className="values-box">
                <p>
                  We take pride in our team of highly experienced HR
                  professionals who have a deep understanding of being a
                  business partner.
                </p>
              </div>
              <div className="values-box">
                <p>
                  We focus on getting results, we understand your need and
                  advise you on how to solve the problem with proven and clear
                  methods borne out of experience.
                </p>
              </div>
              <div className="values-box">
                <p>
                  All our customers are important and unique and so we don’t use
                  a ‘one size fits all' template, we ensure you get the best
                  solution to your need and so we customize our solutions to
                  suit your business and make it work for you!
                </p>
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
