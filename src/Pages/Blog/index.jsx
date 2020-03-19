import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import ArticleListItem from './ArticleListItem';
import client from 'Components/Services/client';

// const contentful = require('contentful');
// import heroImage from 'Assets/images/blog-header-image.png';

const heroImage =
  'https://res.cloudinary.com/hrworkmanager/image/upload/f_auto,q_auto/v1580899348/blog-header-image_woqsfl.png';
const Blog = () => {
  const [articles, setArticles] = useState([{}, {}, {}]);
  const [contentLoading, setContentLoading] = useState('');

  const fetchArticles = () => {
    setContentLoading('FETCHING');
    client
      .getEntries({ content_type: 'blogPost' })
      .then(response => {
        // console.log('FROM CONTENTFUL', response);
        setArticles(response.items);
        setContentLoading('SUCCESS');
      })
      .catch(err => {
        setContentLoading('ERROR');
        setArticles([]);
        console.log('ERROR FROM CONTENTFUL', err);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesData = articles.map((article, i) => (
    <ArticleListItem
      id={i}
      key={i}
      article={article}
      itemLoading={contentLoading}
    />
  ));
  return (
    <div className="blog-body">
      <Header />
      <Hero imgUrl={heroImage} heroTitle="Events, pictures, videos and more" />
      <div className="News-section">
        <span className="News-text">
          <h3>News</h3>
        </span>
        <div className="News-box">{articlesData}</div>
        {/* <div className="view-news-btn">
            <button>
              View news <i className="fa fa-play"></i>
            </button>
          </div> */}
      </div>

      {/* Gallery not figured out yet */}

      {/* <div className="gallery-section">
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
        </div> */}

      <Footer />
    </div>
  );
};

export default Blog;
