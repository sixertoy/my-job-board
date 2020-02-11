import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    maxHeight: 40,
    minHeight: 40,
    padding: '6px 8px',
  },
  headerCount: {},
  headerTitle: {
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
    <div className={classes.header}>
      <div className={classes.headerTitle}>
        <span>{label}</span>
      </div>
      <div className={classes.headerCount}>
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
