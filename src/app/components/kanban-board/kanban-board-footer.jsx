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
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const KanbanBoardFooter = ({ addCardToListHandler, listCanBeEdited }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        {addCardToListHandler && (
          <button
            className={classes.buttonAdd}
            type="button"
            onClick={addCardToListHandler}>
            <span className={classes.iconPlus}>
              <IconPlus />
            </span>
            <span className={classes.label}>Ajouter une carte</span>
          </button>
        )}
        {listCanBeEdited && (
          <button
            className={classes.buttonSettings}
            type="button"
            onClick={() => {}}>
            <span className={classes.iconCog}>
              <IconCog />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

KanbanBoardFooter.defaultProps = {
  addCardToListHandler: null,
};

KanbanBoardFooter.propTypes = {
  addCardToListHandler: PropTypes.func,
  listCanBeEdited: PropTypes.bool.isRequired,
};

export default KanbanBoardFooter;
