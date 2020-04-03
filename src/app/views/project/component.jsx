import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { Link, Route, Switch } from 'react-router-dom';

import ProjectNotes from './notes';
import ProjectTodos from './todos';

const styles = {
  project: {
    height: 100,
    margin: '1%',
    width: '23%',
  },
};

const ProjectComponent = ({ classes, description, id, onDelete, title }) => {
  const basepath = `/projects/${id}`;
  return (
    <div className={classes.project} data-id={`projects-${id}`}>
      <span>{title}</span>
      {description && <span>{description}</span>}
      <button type="button" onClick={() => onDelete(id)}>
        <FaTrash />
      </button>
      <nav>
        <Link to={`${basepath}/notes`}>
          <span>
            <IoIosDocument />
          </span>
        </Link>
        <Link to={`${basepath}/todos`}>
          <span>
            <MdDashboard />
          </span>
        </Link>
      </nav>
      <Switch>
        <Route component={ProjectTodos} path="/projects/:id/todos" />
        <Route component={ProjectNotes} path="/projects/:id/notes" />
      </Switch>
    </div>
  );
};

ProjectComponent.defaultProps = {
  description: null,
};

ProjectComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectComponent);