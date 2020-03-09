import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const styles = {
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-full-height'],
  },
  project: {
    height: 100,
    margin: '1%',
    width: '23%',
  },
};

const ProjectComponent = ({ classes, data, onDelete }) => (
  <div className={classes.project} data-id={`project-${data.id}`}>
    <div className={classes.inner}>
      <span>{data.title}</span>
      <span>{data.description}</span>
      <button type="button" onClick={() => onDelete(data.id)}>
        <FaTrash />
      </button>
    </div>
  </div>
);

ProjectComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProjectComponent);
