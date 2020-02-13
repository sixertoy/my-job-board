import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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

const NapperTodoListCheckerComponent = ({ allChecked, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const needUpdate = allChecked !== checked;
    if (needUpdate) setChecked(allChecked);
  }, [allChecked, checked]);
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
};

NapperTodoListCheckerComponent.propTypes = {
  allChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NapperTodoListCheckerComponent;
