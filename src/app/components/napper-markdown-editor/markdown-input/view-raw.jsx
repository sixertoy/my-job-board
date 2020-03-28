import PropTypes from 'prop-types';
import React from 'react';

const MarkdownEditorRaw = ({ input, readonly, visible }) => {
  const classes = visible ? 'is-block' : 'is-hidden';
  return (
    <div className={classes}>
      <textarea
        {...input}
        readOnly={readonly}
        style={{
          height: '180px',
          resize: 'none',
          width: '100%',
        }}
      />
    </div>
  );
};

MarkdownEditorRaw.defaultProps = {
  readonly: true,
  visible: false,
};

MarkdownEditorRaw.propTypes = {
  input: PropTypes.shape().isRequired,
  readonly: PropTypes.bool,
  visible: PropTypes.bool,
};

export default MarkdownEditorRaw;
