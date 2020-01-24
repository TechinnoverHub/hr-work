import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

function SinglePackage() {
  return (
    <div>
      <Header />
      <div className="packages-header-image">
        <div className="packages-header-text-wrapper">
          <h3>Our Packages</h3>
        </div>
      </div>

      <div className=""></div>
      <Footer />
    </div>
  );
}

export default SinglePackage;
