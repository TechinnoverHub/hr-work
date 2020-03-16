import React from 'react';
import Styles from './index.module.scss';

class MyCommentBox extends React.Component {
  render() {
    return (
      <div className={Styles.comment_wrapper}>
        <form className={Styles.comment_area}>
          <input
            type="text"
            placeholder="type in your name before commenting"
          />
          <textarea
            col="50"
            rows="10"
            placeholder="type in your message here"
          />
          <button type="reset">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyCommentBox;
