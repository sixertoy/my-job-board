import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {},
});

const ProjectsComponent = ({ classes, projects }) => (
  <div className={classes.container}>
    {projects.map(obj => {
      return <div key={obj.title}>{obj.title}</div>;
    })}
  </div>
);

ProjectsComponent.defaultProps = {
  projects: [
    {
      title: 'toto',
    },
    {
      title: 'titi',
    },
    {
      title: 'tata',
    },
    {
      title: 'tutu',
    },
    {
      title: 'tyty',
    },
    {
      title: 'tete',
    },
  ],
};

ProjectsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()),
};

export default withStyles(styles)(ProjectsComponent);
