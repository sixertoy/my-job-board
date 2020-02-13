import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import {
  NapperTodoListIconChecked,
  NapperTodoListIconTrash,
  NapperTodoListIconUnchecked,
} from './assets';
import { IconType } from './core/prop-types';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  checkbox: {
    marginRight: 3,
    paddingTop: '0.2rem',
  },
  delete: {
    flex: '0 1',
    fontSize: '1.2rem',
    marginLeft: 6,
    marginRight: 12,
  },
  label: {
    fontSize: '1rem',
    lineHeight: '1.3rem',
  },
  task: ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.backgroundHover,
    },
    alignItems: 'center',
    borderRadius: theme.taskRadius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    paddingTop: 6,
  }),
});

const NapperTodoListTaskComponent = ({
  Icons,
  checked,
  id,
  label,
  onChange,
  onDelete,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [isHover, setIsHover] = useState(false);
  const canDelete = isHover && onDelete;
  return (
    <div
      className={classes.task}
      data-id={`napper-todolist-task-${id}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <button
        className={classes.button}
        type="button"
        onClick={() => onChange(id, !checked)}>
        <div className={classes.checkbox}>
          {checked && Icons.Checked}
          {!checked && Icons.Unchecked}
        </div>
        <div className={classes.label}>
          <span>{label}</span>
        </div>
      </button>
      {canDelete && (
        <button
          className={classes.delete}
          type="button"
          onClick={() => onDelete(id)}>
          <NapperTodoListIconTrash />
        </button>
      )}
    </div>
  );
};

NapperTodoListTaskComponent.defaultProps = {
  Icons: {
    Checked: <NapperTodoListIconChecked />,
    Unchecked: <NapperTodoListIconUnchecked />,
  },
};

NapperTodoListTaskComponent.propTypes = {
  Icons: IconType,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default NapperTodoListTaskComponent;
