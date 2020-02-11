import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { IconCog, IconPlus } from './icons';

const bases = {
  button: {
    '&:hover': {
      backgroundColor: ({ theme }) => theme.buttonHover,
    },
    borderRadius: 3,
    color: ({ theme }) => theme.buttonColor,
    display: 'block',
    marginRight: 4,
    minHeight: 28,
    padding: '4px 8px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '0.6rem',
  },
};

const useStyles = createUseStyles({
  buttonAdd: {
    ...bases.button,
    textAlign: 'left',
    width: '100%',
  },
  buttonSettings: {
    ...bases.button,
    marginLeft: 4,
  },
  footer: {
    flex: 0,
    height: 40,
    padding: '2px 4px 7px 8px',
  },
  iconCog: { ...bases.icon, fontSize: '0.7rem' },
  iconPlus: {
    ...bases.icon,
    marginRight: 5,
  },
  label: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'row',
  },
});

const KanbanBoardFooter = ({ onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        {onClick && (
          <button className={classes.buttonAdd} type="button" onClick={onClick}>
            <span className={classes.iconPlus}>
              <IconPlus />
            </span>
            <span className={classes.label}>Ajouter une carte</span>
          </button>
        )}
        <button
          className={classes.buttonSettings}
          type="button"
          onClick={onClick}>
          <span className={classes.iconCog}>
            <IconCog />
          </span>
        </button>
      </div>
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
