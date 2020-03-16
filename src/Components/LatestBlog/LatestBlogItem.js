import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './index.modules.scss';

class LatestBlogItem extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <div className={Styles.latest_blog__box}>
        <div className={Styles.latest_blog__boxWrapper}>
          <div className={Styles.latest_blog__textWrapper}>
            <span className={Styles.latest_blog__text}></span>
            <p>30th Oct, 2019</p>
          </div>
          <div className={Styles.latest_blog__image}></div>
        </div>
      </div>

      // <div className="single-post-content">
      //   <Link to={`articles/${article.fields.slug}`} className="slug-link">
      //     <div>
      //       {article.fields.featured && (
      //         <img
      //           className="single-post-image"
      //           alt="Blog post"
      //           src={article.fields.featured.fields.file.url}
      //         />
      //       )}
      //     </div>
      //   </Link>
      //   <div className="single-post-text-wrapper">
      //     <h2>
      //       <Link to={`articles/${article.sys.id}`} className="slug-link">
      //         {article.fields.title}
      //       </Link>
      //     </h2>
      //     <span className="single-post-text"></span>
      //     <span className="mini-text">{article.fields.date}</span>
      //     <span className="mini-text2">
      //       <Link to={`articles/${article.sys.id}`} className="slug-link">
      //         Read more
      //       </Link>
      //     </span>
      //   </div>
      // </div>
    );
  }
}

LatestBlogItem.propTypes = {
  article: PropTypes.object
};

export default LatestBlogItem;
