import PropTypes from 'prop-types';
import React from 'react';
import { IoIosRefresh } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {},
  refresh: {
    color: theme.colors.color,
    composes: ['fs12'],
  },
}));

const KanbanBoardSettingsComponent = ({ forceRefresh }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="kanban-settings">
      <button className={classes.refresh} type="button" onClick={forceRefresh}>
        <span>Mettre à jour</span>
        <IoIosRefresh />
      </button>
    </div>
  );
};

KanbanBoardSettingsComponent.propTypes = {
  forceRefresh: PropTypes.func.isRequired,
};

export default KanbanBoardSettingsComponent;
