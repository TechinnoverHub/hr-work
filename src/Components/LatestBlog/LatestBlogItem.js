import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './index.module.scss';

class LatestBlogItem extends React.Component {
  render() {
    const { article } = this.props;

    console.log('FROM ARTICLE LIST', article.fields.featured);
    return (
      <div className={Styles.latest_blog__boxWrapper}>
        <div className={Styles.latest_blog__textWrapper}>
          <span className={Styles.latest_blog__text}>
            <Link to={`articles/${article.sys.id}`} className="slug-link">
              {article.fields.title}
            </Link>
          </span>
          <p>{article.fields.date}</p>
        </div>
        <div>
          <Link to={`articles/${article.fields.slug}`} className="slug-link">
            {article.fields.featured && (
              <img
                className={Styles.latest_blog__image}
                alt="Blog post"
                src={article.fields.featured.fields.file.url}
              />
            )}
          </Link>
        </div>
      </div>
    );
  }
}

LatestBlogItem.propTypes = {
  article: PropTypes.object
};

export default LatestBlogItem;
