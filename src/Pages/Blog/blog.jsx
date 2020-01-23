import React from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

function Blog() {
  return (
    <div>
      <Header />
      <div className="blog-header-image">
        <div className="blog-header-text">
          <h3>Events, pictures, videos and more</h3>
        </div>
      </div>
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
        <span className="gallery-text">
          <h3>Gallery</h3>
        </span>
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
