import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosRefresh } from 'react-icons/io';

const styles = theme => ({
  container: {
    composes: ['flex-0'],
  },
  refresh: {
    color: theme.colors.white,
    composes: ['fs12'],
  },
  update: {},
});

const KanbanBoardHeaderComponent = ({ classes, forceRefresh, nextUpdate }) => {
  return (
    <div className={classes.container}>
      <b>Prochaine mise à jour automatique&nbsp;</b>
      <span>{nextUpdate}</span>
      <button className={classes.refresh} type="button" onClick={forceRefresh}>
        <span>Mettre à jour</span>
        <IoIosRefresh />
      </button>
    </div>
  );
};

KanbanBoardHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  forceRefresh: PropTypes.func.isRequired,
  nextUpdate: PropTypes.string.isRequired,
};

export default withStyles(styles)(KanbanBoardHeaderComponent);
