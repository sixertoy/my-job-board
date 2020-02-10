import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    borderBottom: `1px solid ${theme.colors[name].border}`,
    color: theme.colors[name].color,
    composes: ['p24'],
    height: 'auto',
  }),
  date: ({ theme: name }) => ({
    color: theme.colors[name].disabled,
    composes: ['is-uppercase'],
  }),
  title: {
    composes: ['is-uppercase', 'is-bold'],
  },
});

const AppHeaderComponent = React.memo(({ classes }) => {
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <span className={classes.date}>{date}</span>
      <h2 className={classes.title}>Job Board</h2>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
