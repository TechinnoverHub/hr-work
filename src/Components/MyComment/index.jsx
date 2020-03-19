import React from 'react';
import Styles from './index.module.scss';
import { useState } from 'react';
import gravatar from 'Assets/images/gravatar.png';
import { ReactComponent as Spinner } from 'Assets/svg/spinner.svg';

const CommentItem = ({ comment }) => {
  const {
    fields: { name, body },
    sys: { createdAt }
  } = comment;
  const getDateTime = dateIso => {
    const dateTimeStr = new Date(dateIso);
    return `${dateTimeStr
      .toLocaleTimeString()
      .slice(0, 5)}, ${dateTimeStr.toDateString()}`;
  };

  const dateTime = createdAt ? getDateTime(createdAt) : '';

  return (
    <div className={Styles.comment__item}>
      <div className={Styles.avatar}>
        <img src={gravatar} alt={name || 'user'} />
      </div>
      <div className={Styles.container}>
        <h4 className={Styles.comment__author}>{name}</h4>
        <p className={Styles.comment__date}>{dateTime}</p>
        <p className={Styles.comment__body}>{body}</p>
      </div>
    </div>
  );
};

const MyCommentBox = ({ submitArticle, comments, createStatus }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  // console.log(comments, '+++ comments +++');
  const commentsLength = comments ? comments.length : 0;
  const isFetching = createStatus === 'FETCHING';

  return (
    <div className={Styles.comment_wrapper}>
      {commentsLength > 0 ? (
        <div>
          <h3 className={Styles.comment_heading}>
            {commentsLength} {commentsLength === 1 ? 'Comment' : 'Comments'}
          </h3>
          {comments
            ? comments.map(comment => (
                <CommentItem comment={comment} key={comment.sys.id} />
              ))
            : null}
        </div>
      ) : null}

      <form
        className={Styles.comment_area}
        onSubmit={e => submitArticle(e, { name, comment })}
      >
        <h3 className={Styles.comment_heading}>Leave a comment</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          col="50"
          rows="10"
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <button type="submit" disabled={isFetching}>
          <span>Submit</span>
          {isFetching ? <Spinner className="login-spinner" /> : null}
        </button>
      </form>
    </div>
  );
};

export default MyCommentBox;
