import { withStyles } from '@iziges/napper-core-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    borderBottom: `1px solid ${theme.colors[name].border}`,
    color: theme.colors[name].color,
    composes: ['p24', 'flex-0'],
  }),
  date: ({ theme: name }) => ({
    color: theme.colors[name].disabled,
    composes: ['is-uppercase'],
  }),
  title: {
    composes: ['is-uppercase', 'is-bold'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
  },
});

const AppHeaderComponent = React.memo(({ classes }) => {
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <div className={classes.wrapper}>
        <div>
          <span className={classes.date}>{date}</span>
          <h3 className={classes.title}>Job Board</h3>
        </div>
        <div>
          <FaBars />
        </div>
      </div>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
