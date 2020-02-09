import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import {
  IoIosListBox,
  IoIosOptions,
  IoMdCalendar,
  IoMdHome,
} from 'react-icons/io';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].active,
    composes: [
      'is-full-height',
      'px12',
      'flex-rows',
      'flex-between',
      'no-no-flex-grow',
    ],
  }),
  item: ({ theme: name }) => ({
    '&:hover': { color: theme.colors[name].background },
    color: theme.colors[name].color,
    composes: ['is-block', 'fs20', 'my12'],
  }),
});

const AppMenuComponent = React.memo(({ classes }) => {
  return (
    <div className={classes.container} id="app-menu">
      <nav className={classes.top}>
        <Link className={classes.item} to="/">
          <IoMdHome />
        </Link>
        <Link className={classes.item} to="/board">
          <IoIosListBox />
        </Link>
        <Link className={classes.item} to="/calendar">
          <IoMdCalendar />
        </Link>
      </nav>
      <nav className={classes.bottom}>
        <Link className={classes.item} to="/options">
          <IoIosOptions />
        </Link>
      </nav>
    </div>
  );
});

AppMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppMenuComponent);
