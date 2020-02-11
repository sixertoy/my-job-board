import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '6px 8px',
  },
  count: {},
  title: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    lineHeight: '1.25rem',
    padding: '4px 8px',
    textTransform: 'uppercase',
  },
});

const KanbanBoardHeader = ({ count, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <span>{label}</span>
      </div>
      <div className={classes.count}>
        <span>{count}</span>
      </div>
    </div>
  );
};

KanbanBoardHeader.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default KanbanBoardHeader;
