import React from 'react';
import PropTypes from 'prop-types';

// application
import './commentbox.css';

const CommentBox = ({ readonly, comment }) => (
  <div>
    {!readonly
      ? (
        <div>
          <textarea>Type your comment</textarea>
          <button onClick={() => {}}>
            <span>Save</span>
          </button>
        </div>
      )
      : (
        <div>
          <span>{comment.date}</span>
          <p>{comment.content}</p>
        </div>
      )}
  </div>
);

CommentBox.defaultProps = {
  comment: {},
  readonly: false
};

CommentBox.propTypes = {
  readonly: PropTypes.bool,
  comment: PropTypes.object
};

export default CommentBox;
