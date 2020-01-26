import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import heroImage from 'Assets/images/blog-header-image.png';

function Blog() {
  return (
    <div className="blog-body">
      <Header />
      <Hero imgUrl={heroImage} heroTitle="Events, pictures, videos and more" />
      <div className="News-section">
        <span className="News-text">
          <h3>News</h3>
        </span>
        <div className="News-box">
          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>

          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>

          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>

          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>

          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>

          <div className="single-post-content">
            <div className="single-post-image"></div>
            <div className="single-post-text-wrapper">
              <span className="single-post-text">
                Africa Prudential Shareholders Get N1 Billion Dividend, Lauds
                Digital Technology Initiatives
              </span>
              <span className="mini-text">March 26, 2019</span>
              <span className="mini-text2">Learn more</span>
            </div>
          </div>
        </div>
        <div className="view-news-btn">
          <button>
            View news <i className="fa fa-play"></i>
          </button>
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-text">
          <h3>Gallery</h3>
        </div>
        <div className="gallery-box">
          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>

          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>

          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>

          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>

          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>

          <div className="single-gallery-container">
            <div className="single-gallery-image"></div>
          </div>
        </div>

        <div className="gallery-btn">
          <button>
            View gallery <i className="fa fa-play"></i>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
