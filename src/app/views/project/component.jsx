import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import GridComponent from './grid';

const useStyles = createUseStyles({
  container: {},
  header: {
    composes: ['flex-columns'],
  },
});

const ProjectComponent = ({
  // description,
  id,
  items,
  // onDeleteProject,
  // title,
}) => {
  const classes = useStyles();
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
  // description: PropTypes.string,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // onDeleteProject: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
};

export default ProjectComponent;
