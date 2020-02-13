import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FieldLabel } from '../commons';
import { buildStyles } from '../utils';
import {
  MARKDOWN_VIEWS,
  MarkdownEditorControls,
  // MarkdownEditorView,
  // MarkdownEditorRaw,
} from './markdown-input';

const jss = buildStyles(
  {
    'markdown-editor-container': {},
    'markdown-textarea-container': {},
  },
  'markdowninput'
);

class MarkdownInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeView: MARKDOWN_VIEWS[0] };
  }

  onToggleViewHandler = activeView => {
    this.setState({ activeView });
  };

  render() {
    const { activeView } = this.state;
    const { className, classes, input, label, required } = this.props;
    const { name } = input;
    // const showMarkdownView = activeView === VIEWS.markdown;
    return (
      <div className={classnames(jss.classname, 'field-container', className)}>
        <label htmlFor={name}>
          <FieldLabel label={label} required={required} />
          <div className={classes['markdown-editor-container']}>
            <MarkdownEditorControls
              activeView={activeView}
              clickHandler={this.onToggleViewHandler}
            />
            {/* <MarkdownEditorView
              content={input.value}
              onChangeHandler={input.onChange}
            /> */}
            <div className={classes['markdown-textarea-container']}>
              <textarea {...input} className="markdown-editor-input" />
            </div>
          </div>
        </label>
      </div>
    );
  }
}

MarkdownInput.defaultProps = {
  className: 'richtext-input',
  required: false,
};

MarkdownInput.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default withStyles(jss.styles)(MarkdownInput);
