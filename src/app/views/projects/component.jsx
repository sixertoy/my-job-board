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
        showCounter
        showProgress
        counterPosition="bottom" // both, top, bottom
        order="asc" // false, desc, asc
        orderBy="label" // label, mtime, ctime, id
        tasks={tasks}
        // title="TODO LIST"
        onChange={(id, checked) => {
          const next = tasks.map(obj => {
            if (id !== obj.id) return obj;
            return { ...obj, checked };
          });
          setTasks(next);
        }}
        onDelete={id => {
          const next = tasks.filter(obj => id !== obj.id);
          setTasks(next);
        }}
        // onToggle={checked => {
        //   const next = tasks.map(obj => ({ ...obj, checked }));
        //   setTasks(next);
        // }}
      />
    </div>
  );
};

ProjectsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ProjectsComponent);
