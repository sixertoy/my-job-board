import { withStyles } from '@iziges/napper-react';
import NapperTodoList from '@iziges/napper-todolist';
import PropTypes from 'prop-types';
import React from 'react';

import NewTodosForm from './new-todos-form';

const styles = {
  container: {},
};

const ProjectTodosGridComponent = ({ classes, createTodosHandler }) => (
  <div className={classes.container}>
    <NewTodosForm onSubmitHandler={createTodosHandler} />
    <NapperTodoList
      completedAtBottom
      showCompleted
      showProgress
      tasks={[]}
      title="This is the title of a list"
      onChange={() => {}}
    />
  </div>
);

ProjectTodosGridComponent.defaultProps = {};

ProjectTodosGridComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  createTodosHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProjectTodosGridComponent);
