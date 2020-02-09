import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import {
  IoIosListBox,
  IoIosOptions,
  IoMdCalendar,
  IoMdHome,
} from 'react-icons/io';
import { NavLink } from 'react-router-dom';

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
  item: {
    '&.active': { color: theme.colors.white },
    '&:hover': { color: theme.colors.white },
    color: `${theme.colors.white}33`,
    composes: ['is-block', 'fs20', 'my12'],
  },
});

const AppMenuComponent = React.memo(({ classes }) => {
  return (
    <div className={classes.container} id="app-menu">
      <nav className={classes.top}>
        <NavLink exact activeClassName="active" className={classes.item} to="/">
          <IoMdHome />
        </NavLink>
        <NavLink activeClassName="active" className={classes.item} to="/board">
          <IoIosListBox />
        </NavLink>
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/calendar">
          <IoMdCalendar />
        </NavLink>
      </nav>
      <nav className={classes.bottom}>
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/options">
          <IoIosOptions />
        </NavLink>
      </nav>
    </div>
  );
});

AppMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppMenuComponent);
