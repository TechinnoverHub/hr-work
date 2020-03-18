import React from 'react';
import Styles from './index.module.scss';
import LatestBlogItem from './LatestBlogItem';
import client from 'Components/Services/client';

export default class LatestBlog extends React.Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    client
      .getEntries()
      .then(response => {
        this.setState({ articles: response.items });
      })
      .catch(err => {
        console.log('ERROR FROM CONTENTFUL', err);
      });
  }

  render() {
    const articles = this.state.articles.map((article, i) => (
      <LatestBlogItem id={i} key={i} article={article} />
    ));
    return (
      <div className={Styles.latest_blog}>
        <div>
          <h2>Latest News</h2>
        </div>
        <div className={Styles.latest_blog__box}>{articles}</div>
      </div>
    );
  }
  // return (
  //   <div className={Styles.latest_blog}>
  //     <div>
  //       <h2>Latest News</h2>
  //       <hr />
  //     </div>

  //     <div className={Styles.latest_blog__box}>
  //       <div className={Styles.latest_blog__boxWrapper}>
  //         <div className={Styles.latest_blog__textWrapper}>
  //           <span className={Styles.latest_blog__text}>
  //             Lorem ipsum dolor sit amet, consectetuer adipiscing elit
  //           </span>
  //           <p>30th Oct, 2019</p>
  //         </div>
  //         <div className={Styles.latest_blog__image}>{/* <img /> */}</div>
  //       </div>

  //       // <div className={Styles.latest_blog__boxWrapper}>
  //       //   <div className={Styles.latest_blog__textWrapper}>
  //       //     <span className={Styles.latest_blog__text}>
  //       //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit
  //       //     </span>
  //       //     <p>30th Oct, 2019</p>
  //       //   </div>
  //       //   <div className={Styles.latest_blog__image}></div>
  //       // </div>

  //       // <div className={Styles.latest_blog__boxWrapper}>
  //       //   <div className={Styles.latest_blog__textWrapper}>
  //       //     <span className={Styles.latest_blog__text}>
  //       //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit
  //       //     </span>
  //       //     <p>30th Oct, 2019</p>
  //       //   </div>
  //       //   <div className={Styles.latest_blog__image}></div>
  //       // </div>

  //       // <div className={Styles.latest_blog__boxWrapper}>
  //       //   <div className={Styles.latest_blog__textWrapper}>
  //       //     <span className={Styles.latest_blog__text}>
  //       //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit
  //       //     </span>
  //       //     <p>30th Oct, 2019</p>
  //       //   </div>
  //       //   <div className={Styles.latest_blog__image}></div>
  //       // </div>
  //     </div>
  //   </div>
  // );
}
