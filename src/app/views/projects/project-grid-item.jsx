import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    height: 100,
    margin: '1%',
    width: '23%',
  },
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-full-height'],
  },
};

const ProjectGridItemComponent = ({ classes, data, onDelete, pathname }) => (
  <div className={classes.container} data-id={`project-${data.id}`}>
    <div className={classes.inner}>
      <Link to={`${pathname}/${data.id}/`}>
        <span>{data.title}</span>
      </Link>
      <button type="button" onClick={() => onDelete(data.id)}>
        <FaTrash />
      </button>
    </div>
  </div>
);

ProjectGridItemComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectGridItemComponent);
