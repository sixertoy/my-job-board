import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';

const styles = () => ({
  container: {
    composes: ['flex-0'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between'],
  },
});

const KanbanBoardHeaderComponent = ({ classes, nextUpdate }) => {
  return (
    <div className={classes.container} id="kanban-header">
      <div className={classes.wrapper}>
        <div>
          <b>Prochaine mise à jour automatique&nbsp;</b>
          <span>{nextUpdate}</span>
        </div>
        <div>
          <Link className={classes.refresh} to="/board/settings">
            <IoIosSettings />
          </Link>
        </div>
      </div>
    </div>
  );
};

KanbanBoardHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  nextUpdate: PropTypes.string.isRequired,
};

export default withStyles(styles)(KanbanBoardHeaderComponent);
