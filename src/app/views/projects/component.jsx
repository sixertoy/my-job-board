import { withStyles } from '@iziges/napper-core-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import NapperTotoListComponent from '../../components/napper-todolist';

const styles = {
  container: {
    backgroundColor: '#ACE539',
    composes: ['is-full-width'],
  },
};

const ProjectsComponent = ({ classes }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const url = 'http://5e44b58de85a4e001492c1c4.mockapi.io/api/v1/todo';
    axios.get(url).then(({ data }) => setTasks(data));
  }, []);
  return (
    <div className={classes.container}>
      <NapperTotoListComponent
        canCheckAll
        showCounter
        showProgress
        completedAtBottom={false}
        counterPosition="both" // top, bottom
        order="desc" // false, desc, asc
        orderBy="id" // label, mtime, ctime, id
        showCompleted={false}
        tasks={tasks}
        title="TODO LIST"
        onChange={(task, all) => setTasks(all)}
      />
    </div>
  );
};

ProjectsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ProjectsComponent);
