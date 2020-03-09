import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import { getCardStatusSelectValues } from '../utils';

const styles = theme => ({
  container: {
    composes: ['mb12'],
  },
  select: {
    backgroundColor: theme.colors.button,
    color: theme.colors.color,
    composes: ['fs12', 'is-uppercase'],
    height: 32,
    width: '100%',
  },
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
