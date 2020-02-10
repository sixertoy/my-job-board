import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTasks } from 'react-icons/fa';
import {
  IoIosListBox,
  IoIosOptions,
  IoMdCalendar,
  IoMdHome,
} from 'react-icons/io';
import { NavLink } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    borderRight: `1px solid ${theme.colors.border}`,
    composes: [
      'is-full-height',
      'px12',
      'flex-rows',
      'flex-between',
      'no-no-flex-grow',
    ],
  },
  item: {
    '&.active': { color: theme.colors.active },
    '&:hover': { color: theme.colors.active },
    color: `${theme.colors.disabled}66`,
    composes: ['is-block', 'fs24', 'my24'],
    transition: 'color 0.5s',
  },
  tooltipOpaque: {
    opacity: '1 !important',
  },
});

const AppMenuComponent = React.memo(({ classes }) => {
  return (
    <div className={classes.container} id="app-menu">
      <nav className={classes.top}>
        <NavLink exact activeClassName="active" className={classes.item} to="/">
          <IoMdHome />
        </NavLink>
        <NavLink
          activeClassName="active"
          className={classes.item}
          // data-for="menu-toolip"
          // data-tip="hello board"
          to="/board">
          <IoIosListBox />
        </NavLink>
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/calendar">
          <IoMdCalendar />
        </NavLink>
        <NavLink activeClassName="active" className={classes.item} to="/tasks">
          <FaTasks />
        </NavLink>
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/settings">
          <IoIosOptions />
        </NavLink>
      </nav>
      {/* <ReactTooltip
        className={classes.tooltipOpaque}
        effect="solid"
        id="menu-toolip"
        place="right"
        type={tooltipType}
      /> */}
    </div>
  );
});

AppMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  // tooltipType: PropTypes.string.isRequired,
};

export default withStyles(styles)(AppMenuComponent);