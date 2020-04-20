import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { getCardStatusSelectValues } from '../utils';

const useStyles = createUseStyles(theme => ({
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
}));

const KanbanBoardCardPreviewStatusComponent = ({
  onChange,
  selected,
  status,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  status: PropTypes.arrayOf(PropTypes.shape()),
};

export default KanbanBoardCardPreviewStatusComponent;
