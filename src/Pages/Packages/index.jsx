import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import PackagesLink from 'Components/PackagesLink';
import Newsletter from 'Components/Newsletter';
import Hero from 'Components/Hero';
import { useRouteMatch, useHistory } from 'react-router-dom';
import dummyData from './dummydata';
import PackageItem from 'Components/PackageItem';
import { getAllPackages } from 'Services/Package.service';

const packageImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/q_auto:best,f_auto/v1580899354/packages-header-image_ovgunu.png';

function Packages() {
  const { params } = useRouteMatch();
  const history = useHistory();
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [reqStatus, setReqStatus] = useState([]);

  const filterItems = (paramsData, dataItems) => {
    if (paramsData.id) {
      return dataItems.filter(
        item => item.productType.toLocaleLowerCase() === paramsData.id
      );
    } else {
      return dataItems;
    }
  };

  const getPackages = async ({ limit }) => {
    try {
      setReqStatus('FETCHING');
      const { data: response } = await getAllPackages({
        limit: null,
        page: null
      });
      if (response.status === 'success') {
        setPackages(response.data.packages);
        const packageList = filterItems(params, response.data.packages);
        setFilteredPackages(packageList);
        setReqStatus('SUCCESS');
      }
    } catch (error) {
      setReqStatus('ERROR');
    }
  };

  const NoPackages = () => {
    return (
      <div className="no-packages-data">
        <h2>There are currently no packages in this category.</h2>
      </div>
    );
  };

  useEffect(() => {
    getPackages({ limit: 9 });
  }, []);

  useEffect(() => {
    if (packages.length > 0) {
      const packageList = filterItems(params, packages);
      setFilteredPackages(packageList);
    }
  }, [params]);

  return (
    <div>
      <Header />
      <Hero imgUrl={packageImg} heroTitle="Our Packages" />
      <div className="package-page-section">
        <PackagesLink />
        <div className="packages-page-grid">
          {/* {filterItems(params, dummyData).map(item => (
            <PackageItem item={item} />
          ))} */}

          {filteredPackages.map(item => (
            <PackageItem key={item._id} item={item} />
          ))}
        </div>

        {filteredPackages.length < 1 && reqStatus === 'SUCCESS' ? (
          <NoPackages />
        ) : null}
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
