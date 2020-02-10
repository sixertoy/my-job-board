import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].danger,
    borderRadius: 4,
    composes: ['p7', 'fs14', 'mb12', 'text-center'],
  }),
  label: {
    color: theme.colors.white,
  },
});

const KanbanBoardCardPreviewDeleteComponent = ({ classes, onClick }) => (
  <div className={classes.container}>
    <button type="button" onClick={onClick}>
      <span className={classes.label}>Supprimer</span>
    </button>
  </div>
);

KanbanBoardCardPreviewDeleteComponent.defaultProps = {};

KanbanBoardCardPreviewDeleteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(KanbanBoardCardPreviewDeleteComponent);
