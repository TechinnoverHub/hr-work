import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import PackagesLink from 'Components/PackagesLink';
import Newsletter from 'Components/Newsletter';
import Hero from 'Components/Hero';
import packageImg from 'Assets/images/packages-header-image.png';

// const categoryColor = {
//   retainership: 'package-page-image-label-blue',
//   professionals: 'package-page-image-label-red',
//   'off-shelf': 'package-page-image-label-green'
// };

// const PackageItem = ({ item: { id, categoryKey, name, price, category } }) => {
//   return (
//     <div className="package-page-itemCard">
//       <Link className="package-page-item-image" to={`/package/${id}`}>
//         <img src={itemImg} alt="item" />
//         <div className={categoryColor[categoryKey]}>
//           <span>{category} Category</span>
//         </div>
//       </Link>
//       <div className="package-page-item--body">
//         <Link to={`/package/${id}`} className="package-page-item--body-heading">
//           HR Remote Manager
//         </Link>
//         <p className="package-page-item--body-price">₦3,480</p>
//         <p className="package-page-item--body-category">
//           Basic, Bronze, Foundation
//         </p>
//         <button className="package-page-item--body-button">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

function Packages() {
  return (
    <div>
      <Header />
      <Hero imgUrl={packageImg} heroTitle="Our Packages" />
      <div className="package-page-section">
        <PackagesLink />
        <div className="packages-grid">
          <div className="package-page-grid-box">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="package-page-grid-box">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="package-page-grid-box">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
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
                <button className="package-page-grid-button">
                  Add to Cart
                </button>
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
      </div>

      <div className="services-section-wrapper">
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
