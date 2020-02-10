import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    '&:hover': {
      color: theme.colors.active,
    },
    color: theme.colors.button,
    composes: ['is-absolute', 'fs24'],
    right: 12,
    top: 12,
    transition: 'color 0.5s',
  },
});

const KanbanBoardCardPreviewCloseComponent = ({ classes }) => (
  <Link className={classes.container} to="/board">
    <IoMdCloseCircle />
  </Link>
);

KanbanBoardCardPreviewCloseComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(KanbanBoardCardPreviewCloseComponent);
