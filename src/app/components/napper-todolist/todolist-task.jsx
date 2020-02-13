import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import {
  NapperTodoListIconChecked,
  NapperTodoListIconUnchecked,
} from './assets';
import { IconType } from './core/prop-types';

const useStyles = createUseStyles({
  button: {
    fontSize: '1rem',
  },
  checkbox: {
    marginRight: 3,
    paddingTop: '0.2rem',
  },
  label: {
    fontSize: '1rem',
    lineHeight: '1.3rem',
  },
  task: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12,
  },
});

function toggleCheked(value) {
  return !value;
}

const NapperTodoListTaskComponent = ({
  Icons,
  checked,
  id,
  label,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.task} data-id={`napper-todolist-task-${id}`}>
      <div className={classes.checkbox}>
        <button
          className={classes.button}
          type="button"
          onClick={() => onClick(id, toggleCheked(checked))}>
          {checked && Icons.Checked}
          {!checked && Icons.Unchecked}
        </button>
      </div>
      <div className={classes.label}>
        <span>{label}</span>
      </div>
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
  onClick: PropTypes.func.isRequired,
};

export default NapperTodoListTaskComponent;
