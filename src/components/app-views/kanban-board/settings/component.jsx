import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosRefresh } from 'react-icons/io';

const styles = theme => ({
  container: {},
  refresh: ({ theme: name }) => ({
    color: theme.colors[name].white,
    composes: ['fs12'],
  }),
});

const KanbanBoardSettingsComponent = ({ classes, forceRefresh }) => (
  <div className={classes.container} id="kanban-settings">
    <button className={classes.refresh} type="button" onClick={forceRefresh}>
      <span>Mettre à jour</span>
      <IoIosRefresh />
    </button>
  </div>
);

KanbanBoardSettingsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  forceRefresh: PropTypes.func.isRequired,
};

export default withStyles(styles)(KanbanBoardSettingsComponent);
