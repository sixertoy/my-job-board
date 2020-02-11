// application
import './commentbox.css';

import PropTypes from 'prop-types';
import React from 'react';

const CommentBox = ({ comment, readonly }) => (
  <div>
    {!readonly ? (
      <div>
        <textarea>Type your comment</textarea>
        <button onClick={() => {}}>
          <span>Save</span>
        </button>
      </div>
    ) : (
      <div>
        <span>{comment.date}</span>
        <p>{comment.content}</p>
      </div>
    )}
  </div>
);

CommentBox.defaultProps = {
  comment: {},
  readonly: false,
};

CommentBox.propTypes = {
  comment: PropTypes.object,
  readonly: PropTypes.bool,
};

export default CommentBox;
