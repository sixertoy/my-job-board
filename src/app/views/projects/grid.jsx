import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
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

const ReactDumbComponent = ({ classes, projects }) => (
  <div className={classes.grid}>
    {projects.map(obj => {
      return (
        <div key={obj.title} className={classes.project}>
          <div className={classes.inner}>{obj.title}</div>
        </div>
      );
    })}
  </div>
);

ReactDumbComponent.defaultProps = {
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

ReactDumbComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()),
};

export default withStyles(styles)(ReactDumbComponent);
