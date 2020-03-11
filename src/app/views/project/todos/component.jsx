import { withStyles } from '@iziges/napper-react';
import NapperTodoList from '@iziges/napper-todolist';
import PropTypes from 'prop-types';
import React from 'react';

import NewTodosForm from './new-todos-form';

const styles = {
  container: {},
};

const ProjectTodosGridComponent = ({ classes, createTodosHandler, todos }) => (
  <div className={classes.container}>
    <NewTodosForm onSubmitHandler={createTodosHandler} />
    {todos.map(obj => {
      return <NapperTodoList canCreate title={obj.title} onChange={() => {}} />;
    })}
  </div>
);

ProjectTodosGridComponent.defaultProps = {};

ProjectTodosGridComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  createTodosHandler: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectTodosGridComponent);
