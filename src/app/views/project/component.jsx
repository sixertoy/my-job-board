import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import GridComponent from './grid';

const styles = {
  container: {},
  header: {
    composes: ['flex-columns'],
  },
};

const ProjectComponent = ({
  classes,
  // description,
  id,
  items,
  // onDeleteProject,
  // title,
}) => {
  return (
    <div className={classes.container} data-id={`projects-${id}`}>
      {/* <span>{title}</span>
      {description && <span>{description}</span>}
      <button type="button" onClick={() => onDelete(id)}>
        <FaTrash />
      </button> */}
      <GridComponent items={items} />
    </div>
  );
};

// ProjectComponent.defaultProps = {
//   description: null,
// };

ProjectComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  // description: PropTypes.string,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // onDeleteProject: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectComponent);
