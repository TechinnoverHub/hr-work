import React, { useState, useEffect } from 'react';
import Styles from './index.module.scss';
import LatestBlogItem from './LatestBlogItem';
import client from 'Components/Services/client';

const LatestBlog = () => {
  const [articles, setArticles] = useState([{}, {}, {}, {}]);
  const [contentStatus, setContentStatus] = useState('');

  const fetchArticles = () => {
    setContentStatus('FETCHING');
    client
      .getEntries({ content_type: 'blogPost', limit: 4 })
      .then(response => {
        setContentStatus('SUCCESS');
        setArticles(response.items);
      })
      .catch(err => {
        setContentStatus('ERROR');
        console.log('ERROR FROM CONTENTFUL', err);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesCard = articles.map((article, i) => (
    <LatestBlogItem
      id={i}
      key={i}
      article={article}
      contentStatus={contentStatus}
    />
  ));

  return (
    <div className={Styles.latest_blog}>
      <div>
        <h2>Latest News</h2>
        <hr />
      </div>
      <div className={Styles.latest_blog__box}>{articlesCard}</div>
    </div>
  );
};

export default LatestBlog;
