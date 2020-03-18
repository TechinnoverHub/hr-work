import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './article.module.scss';

const ArticleListItem = ({ article }) => {
  console.log('FROM ARTICLE LIST', article.fields.featured);
  return (
    <div className={Styles.single_post__container}>
      <Link to={`articles/${article.sys.id}`}>
        <div className={Styles.articleImg}>
          {article.fields.featured && (
            <img
              alt="Blog post"
              src={article.fields.featured.fields.file.url}
            />
          )}
        </div>
      </Link>
      <div className={Styles.card_text__section}>
        <h2 className={Styles.card_text__heading}>
          <Link to={`articles/${article.sys.id}`}>{article.fields.title}</Link>
        </h2>

        <div className={Styles.card__metaData}>
          <span className={Styles.card__metaData__date}>
            {article.fields.date}
          </span>
          <span className={Styles.card__learnMore}>
            <Link to={`articles/${article.sys.id}`}>Read more</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object
};

export default ArticleListItem;
