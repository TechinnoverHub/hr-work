import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import packageImg from 'Assets/images/packages-header-image.png';
import BreadCrumbs from 'Pages/BreadCumbs';
import { useHistory } from 'react-router-dom';

function SinglePackage() {
  const history = useHistory();

  return (
    <div>
      <Header />
      <Hero imgUrl={packageImg} heroTitle="Our Packages" />
      <div className="single-package-section">
        {/* <div>
          <PackagesLink />
        </div> */}
        <div className="single-package-breadcrumbs-container">
          <BreadCrumbs
            category="retainership"
            categoryItem="HR Remote Manager"
          />
        </div>
        <div className="hr-remote-manager-section">
          <div className="hr-remote-manager-wrapper">
            <div className="hr-remote-manager-image"></div>
            <div className="hr-remote-manager-text">
              <h3>HR Remote Manager</h3>
              <span className="small-text">Basic, Bronze, Foundation</span>
              <div className="review-column">
                <div className="review">
                  <span className="review-icon">
                    <div className="review-star"></div>
                    <div className="review-star"></div>
                    <div className="review-star"></div>
                    <div className="review-star"></div>
                    <div className="review-star"></div>
                  </span>
                  <span className="review-text"> 5 reviews</span>
                </div>
                <div className="product-code">
                  <span>Product Code: </span>
                  <span>4310131</span>
                </div>
              </div>
              <hr />

              <div className="amount">
                <span className="big-amount">₦3,480</span>
                <span className="stroke-amount">₦5,000</span>
                <span className="you-save">You save ₦520</span>
              </div>

              <hr />

              <div className="quantity">
                <div className="quantity-text">Quantity:</div>
                <div className="counter">
                  <div className="minus">-</div>
                  <span>1</span>
                  <div className="plus">+</div>
                </div>
                <div>
                  <p className="bulk-purchase">
                    Call us for bulk purchases:
                    <br /> Click here to show phone number
                  </p>
                </div>
              </div>

              <div className="buy-now">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-wrapper">
          <div className="overview">
            <h3>Overview</h3>
            <p className="first-para">
              HR Work is an advisory firm with strong competence and experience
              in providing Human Resources Retainership Services to small or
              medium sized organisations.
            </p>
            <p className="second-para">
              We know that you are busy with deadlines and customer demands and
              this consumes all your available time and as your business
              expands, your employee challenges begin to multiply and then
              problems with hiring, setting and measuring performance, policies
              for direction among others become more evitable.
            </p>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p className="first-para">
              HR Work is an advisory firm with strong competence and experience
              in providing Human Resources Retainership Services to small or
              medium sized organisations.
            </p>
            <p className="second-para">
              We know that you are busy with deadlines and customer demands and
              this consumes all your available time and as your business
              expands, your employee challenges begin to multiply and then
              problems with hiring, setting and measuring performance, policies
              for direction among others become more evitable.
            </p>
          </div>
        </div>

        <div className="product-you-like-wrapper">
          <h3 className="product-you-like-text">You might also like</h3>
          <div className="product-you-like-box">
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
                <button className="product-you-like-box-button">
                  Add to Cart
                </button>
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
                <button className="product-you-like-box-button">
                  Add to Cart
                </button>
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
                <button className="product-you-like-box-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Stop here */}

          <div className="show-more-wrapper">
            <button
              className="show-more-btn"
              onClick={() => history.push('/packages')}
            >
              <span>Show More</span>
              <i className="fa fa-play"></i>
            </button>
          </div>
        </div>

        <div className="recently-viewed">
          <h3 className="recently-viewed-text">Recently viewed</h3>
          <div className="recently-viewed-box">
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
                <button className="recently-viewed-box-button">
                  Add to Cart
                </button>
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
                <button className="recently-viewed-box-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePackage;
