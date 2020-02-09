import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].background,
    color: theme.colors[name].color,
    composes: ['p24'],
    height: 'auto',
  }),
});

const AppHeaderComponent = React.memo(({ classes }) => {
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <div>{date}</div>
      <h2>My Job Board</h2>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
