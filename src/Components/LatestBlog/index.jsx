import React from 'react';
import Styles from './index.module.scss';

export default () => {
  return (
    <div className={Styles.latest_blog}>
      <div>
        <h2>Latest News</h2>
        <hr />
      </div>

      <div className={Styles.latest_blog__box}>
        <div className={Styles.latest_blog__boxWrapper}>
          <div className={Styles.latest_blog__textWrapper}>
            <span className={Styles.latest_blog__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className={Styles.latest_blog__image}>{/* <img /> */}</div>
        </div>

        <div className={Styles.latest_blog__boxWrapper}>
          <div className={Styles.latest_blog__textWrapper}>
            <span className={Styles.latest_blog__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className={Styles.latest_blog__image}></div>
        </div>

        <div className={Styles.latest_blog__boxWrapper}>
          <div className={Styles.latest_blog__textWrapper}>
            <span className={Styles.latest_blog__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className={Styles.latest_blog__image}></div>
        </div>

        <div className={Styles.latest_blog__boxWrapper}>
          <div className={Styles.latest_blog__textWrapper}>
            <span className={Styles.latest_blog__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className={Styles.latest_blog__image}></div>
        </div>
      </div>
    </div>
  );
};
