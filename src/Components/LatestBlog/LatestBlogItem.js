import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './index.module.scss';
import Skeleton from 'react-loading-skeleton';

const LatestBlogItem = ({ article, contentStatus }) => {
  const isFetching = contentStatus === 'FETCHING';
  if (isFetching) {
    return (
      <div
        className={`${Styles.latest_blog__boxWrapper} ${
          isFetching ? Styles.flex : ''
        }`}
      >
        <Skeleton height="100%" width="100%" />
      </div>
    );
  }

  const articleLink = article.fields ? `articles/${article.sys.id}` : '';

  return (
    <div className={Styles.latest_blog__boxWrapper}>
      <div className={Styles.latest_blog__textWrapper}>
        <span className={Styles.latest_blog__text}>
          <Link to={articleLink}>{article.fields && article.fields.title}</Link>
        </span>
        <p>{article.fields && article.fields.date}</p>
      </div>
      <div className={Styles.latest_blog__image}>
        <Link to={articleLink}>
          {article.fields && (
            <img
              alt="Blog post"
              src={article.fields.featured.fields.file.url}
            />
          )}
        </Link>
      </div>
    </div>
  );
};

LatestBlogItem.propTypes = {
  article: PropTypes.object
};

export default LatestBlogItem;
