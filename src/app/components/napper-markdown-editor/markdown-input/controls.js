import { uniqKeyId } from '@iziges/napper-core/lib/utils';
import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import { buildStyles } from '../../../utils';
import { MARKDOWN_EDITOR_VIEWS } from './utils';

const jss = buildStyles({}, 'markdown-input-controls');

class RichTextEditorHeader extends React.PureComponent {
  render() {
    const { activeView, clickHandler, labels, views } = this.props;
    const baseUniqKeyId = ['markdown', 'editor', 'controls'];
    return (
      <div className="">
        {Object.keys(views).map((key, index) => {
          const keyvalue = key;
          const isdisabled = activeView === keyvalue;
          const uniqKey = uniqKeyId(baseUniqKeyId, keyvalue);
          const label = (labels && labels[index]) || views[key];
          return (
            <button
              key={uniqKey}
              disabled={isdisabled}
              type="button"
              onClick={() => clickHandler(keyvalue)}>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }
}

RichTextEditorHeader.defaultProps = {
  labels: null,
  views: MARKDOWN_EDITOR_VIEWS,
};

RichTextEditorHeader.propTypes = {
  activeView: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  views: PropTypes.shape(),
};

export default withStyles(jss.styles)(RichTextEditorHeader);
