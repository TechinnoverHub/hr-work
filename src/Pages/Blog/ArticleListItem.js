import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './article.module.scss';
import Skeleton from 'react-loading-skeleton';

const ArticleListItem = ({ article, itemLoading }) => {
  // console.log('FROM ARTICLE LIST', article.fields.featured);
  const articleLink = article.fields ? `articles/${article.sys.id}` : '';
  const isFetching = itemLoading === 'FETCHING';

  return (
    <div className={Styles.single_post__container}>
      <Link to={articleLink}>
        <div className={Styles.articleImg}>
          {isFetching ? (
            <Skeleton height="100%" width="100%" />
          ) : (
            article.fields &&
            article.fields.featured && (
              <img
                alt="Blog post"
                src={article.fields && article.fields.featured.fields.file.url}
              />
            )
          )}
        </div>
      </Link>
      <div className={Styles.card_text__section}>
        <h2 className={Styles.card_text__heading}>
          {isFetching ? (
            <Skeleton height={45} />
          ) : (
            <Link to={articleLink}>
              {article.fields && article.fields.title}
            </Link>
          )}
        </h2>

        <div className={Styles.card__metaData}>
          <span className={Styles.card__metaData__date}>
            {isFetching ? (
              <Skeleton height={30} width="70%" />
            ) : (
              article.fields && article.fields.date
            )}
          </span>
          <span className={Styles.card__learnMore}>
            {isFetching ? (
              <Skeleton height={25} width="40%" />
            ) : (
              <Link to={articleLink}>Read more</Link>
            )}
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
