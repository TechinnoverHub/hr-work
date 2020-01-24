import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import PackagesLink from 'Components/PackagesLink';
import Newsletter from 'Components/Newsletter';

function Packages() {
  return (
    <div>
      <Header />
      <div className="packages-header-image">
        <div className="packages-header-text-wrapper">
          <h3>Our Packages</h3>
        </div>
      </div>
      <div className="packages-section">
        <PackagesLink />
        <div className="packages-grid">
          <div className="package-box">
            <div className="box-image1">
              <div className="package-image">
                <div className="package-image-label-blue">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image2">
              <div className="package-image">
                <div className="package-image-label-red">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image3">
              <div className="package-image">
                <div className="package-image-label-green">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="package-box">
            <div className="box-image1">
              <div className="package-image">
                <div className="package-image-label-blue">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image2">
              <div className="package-image">
                <div className="package-image-label-red">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image3">
              <div className="package-image">
                <div className="package-image-label-green">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="package-box">
            <div className="box-image1">
              <div className="package-image">
                <div className="package-image-label-blue">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image2">
              <div className="package-image">
                <div className="package-image-label-red">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>

            <div className="box-image3">
              <div className="package-image">
                <div className="package-image-label-green">
                  <span>Retainership Category</span>
                </div>
              </div>
              <div className="package-body">
                <h3>HR Remote Manager</h3>
                <p className="price">₦3,480</p>
                <p className="package-body-category">
                  Basic, Bronze, Foundation
                </p>
                <button className="package-box-button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="show-more-wrapper">
            <button className="show-more-btn">
              <span>Show More</span>
              <i className="fa fa-play"></i>
            </button>
          </div>
        </div>

        <div className="services-section">
          <div className="services-text-wrapper">
            <h3>Our Service Offerings</h3>
            <p>
              You can’t find your Human Resources needs on our list? Don’t worry
              we have
              <br />
              Customised solutions to meet all your HR needs.
            </p>
            <div className="service-btn">
              <button>
                Contact Us <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Packages;
