import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    '&:hover': {
      backgroundColor: '#DCDEE4',
    },
    borderRadius: 3,
    color: '#5e6c84',
    display: 'block',
    // flex: '1 0 auto',
    padding: '4px 8px',
    textAlign: 'left',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minHeight: 20,
    padding: '2px 4px 8px 8px',
  },
  label: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  plus: {
    fontSize: '1.3rem',
    marginRight: 5,
  },
});

const KanbanBoardFooter = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      {onClick && (
        <button className={classes.button} type="button" onClick={onClick}>
          <span className={classes.plus}>+</span>
          <span className={classes.label}>Ajouter une carte</span>
        </button>
      )}
    </div>
  );
};

KanbanBoardFooter.defaultProps = {
  onClick: null,
};

KanbanBoardFooter.propTypes = {
  onClick: PropTypes.func,
};

export default KanbanBoardFooter;
