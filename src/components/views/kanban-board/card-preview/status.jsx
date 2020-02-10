import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import { getCardStatusSelectValues } from './utils';

const styles = theme => ({
  container: {
    composes: ['mb12'],
  },
  select: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].button,
    color: theme.colors[name].color,
    composes: ['fs12', 'is-uppercase'],
    height: 32,
    width: '100%',
  }),
});

const KanbanBoardCardPreviewStatusComponent = ({
  classes,
  onChange,
  selected,
  status,
}) => {
  return (
    <div className={classes.container}>
      <select
        className={classes.select}
        value={selected}
        onChange={evt => {
          const nextValue = evt.target.value;
          onChange(nextValue);
        }}>
        {status.map(({ key, label }) => {
          return (
            <option key={key} value={key}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

KanbanBoardCardPreviewStatusComponent.defaultProps = {
  status: getCardStatusSelectValues(),
};

KanbanBoardCardPreviewStatusComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  status: PropTypes.arrayOf(PropTypes.shape()),
};

export default withStyles(styles)(KanbanBoardCardPreviewStatusComponent);
