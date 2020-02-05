import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import PackagesLink from 'Components/PackagesLink';
import Newsletter from 'Components/Newsletter';
import Hero from 'Components/Hero';
import packageImg from 'Assets/images/packages-header-image.png';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import dummyData from './dummydata';
import PackageItem from 'Components/PackageItem';

function Packages() {
  const { params } = useRouteMatch();
  const history = useHistory();

  const filterItems = (paramsData, dataItems) => {
    if (paramsData.id) {
      return dataItems.filter(item => item.categoryKey === paramsData.id);
    } else {
      return dataItems;
    }
  };

  return (
    <div>
      <Header />
      <Hero imgUrl={packageImg} heroTitle="Our Packages" />
      <div className="package-page-section">
        <PackagesLink />
        <div className="packages-page-grid">
          {filterItems(params, dummyData).map(item => (
            <PackageItem item={item} />
          ))}
        </div>
        {/* <div className="show-more-wrapper">
          <button className="show-more-btn">
            <span>Show More</span>
            <i className="fa fa-play"></i>
          </button>
        </div> */}
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
              <button onClick={() => history.push('/contact')}>
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
