import React, { Component } from 'react';

export default class LatestBlog extends Component {
  render() {
    return (
      <div className="latest-blog">
        <div>
          <h2>Latest News</h2>
          <hr />
        </div>
        <div className="latest-blog-box">
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <span className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <span className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
        </div>

        <div className="latest-blog-box">
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <span className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <span className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
            <p>30th Oct, 2019</p>
          </div>
        </div>
      </div>
    );
  }
}
