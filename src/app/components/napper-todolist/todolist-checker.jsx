import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    alignItems: 'flex-start',
    color: theme.color,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1rem',
  }),
  task: {
    marginBottom: 12,
  },
});

const NapperTodoListCheckerComponent = React.memo(({ onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.task}>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          const next = !checked;
          setChecked(next);
          onChange(next);
        }}>
        <div className={classes.label}>
          {!checked && <span>Check all</span>}
          {checked && <span>Uncheck all</span>}
        </div>
      </button>
    </div>
  );
});

NapperTodoListCheckerComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NapperTodoListCheckerComponent;
