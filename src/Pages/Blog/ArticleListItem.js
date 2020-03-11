import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleListItem extends React.Component {
  render() {
    const { article } = this.props;

    console.log('FROM ARTICLE LIST', article.fields.featured);
    return (
      <div className="single-post-content">
        <Link to={`articles/${article.fields.slug}`} className="slug-link">
          <div>
            {article.fields.featured && (
              <img
                className="single-post-image"
                alt="Blog post"
                src={article.fields.featured.fields.file.url}
              />
            )}
          </div>
        </Link>
        <div className="single-post-text-wrapper">
          <h2>
            <Link to={`articles/${article.sys.id}`} className="slug-link">
              {article.fields.title}
            </Link>
          </h2>
          <span className="single-post-text"></span>
          <span className="mini-text">{article.fields.date}</span>
          <span className="mini-text2">
            <Link to={`articles/${article.sys.id}`} className="slug-link">
              Read more
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

ArticleListItem.propTypes = {
  article: PropTypes.object
};

export default ArticleListItem;
