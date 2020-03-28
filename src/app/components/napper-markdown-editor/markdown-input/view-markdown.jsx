import { debounce } from '@iziges/napper-core';
import PropTypes from 'prop-types';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import {
  MARKDOWN_DEBOUNCE_MS,
  MARKDOWN_EDITOR_TOOLBAR,
  parseMarkdown,
  stringifyMarkdown,
} from './utils';

// NOTE: react-draft-wysiwyg documentation
// https://jpuri.github.io/react-draft-wysiwyg/#/docs
class RichTextEditorMarkdown extends React.PureComponent {
  constructor(props) {
    super(props);
    const { content } = props;
    const editorState = parseMarkdown(content || '');
    this.state = { editorState };
  }

  updateInputAfterStateChanges = () => {
    const debounced = debounce(() => {
      const { editorState } = this.state;
      const { onChangeHandler } = this.props;
      const rawvalue = stringifyMarkdown(editorState);
      onChangeHandler(rawvalue);
    }, MARKDOWN_DEBOUNCE_MS);
    return debounced;
  };

  onEditorStateChange = editorState => {
    this.setState({ editorState }, this.updateInputAfterStateChanges);
  };

  render() {
    const { editorState } = this.state;
    const { readonly, visible } = this.props;
    const classes = visible ? 'is-block' : 'is-hidden';
    return (
      <div className={classes}>
        <Editor
          editorClassName="markdown-draft-editor"
          initialEditorState={editorState}
          readOnly={readonly}
          toolbar={MARKDOWN_EDITOR_TOOLBAR}
          toolbarClassName="markdown-draft-toolbar"
          wrapperClassName="markdown-draft-wrapper"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

RichTextEditorMarkdown.defaultProps = {
  content: '',
  readonly: false,
  visible: true,
};

RichTextEditorMarkdown.propTypes = {
  content: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
  visible: PropTypes.bool,
};

export default RichTextEditorMarkdown;
