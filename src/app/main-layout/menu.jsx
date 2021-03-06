import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { NavLink } from 'react-router-dom';

import { getMenuItems } from '../../helpers';
import routes from '../../routes';

const menuItems = getMenuItems(routes);

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    borderRight: `1px solid ${theme.colors.border}`,
    composes: [
      'is-full-height',
      'px7',
      'flex-rows',
      'flex-between',
      'no-no-flex-grow',
    ],
  },
  item: {
    '&.active': { color: theme.colors.active },
    '&:hover': { color: theme.colors.active },
    color: `${theme.colors.disabled}66`,
    composes: ['is-block', 'fs14', 'my24'],
    transition: 'color 0.5s',
  },
  tooltipOpaque: {
    opacity: '1 !important',
  },
}));

const AppMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="app-menu">
      <nav className={classes.top}>
        {menuItems.map(({ icon: Icon, label, path }) => {
          return (
            <NavLink
              key={path}
              exact
              activeClassName="active"
              className={classes.item}
              data-tip={label}
              to={path}>
              <Icon />
            </NavLink>
          );
        })}
        {/* <NavLink exact activeClassName="active" className={classes.item} to="/">
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
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/projects">
          <FaTasks />
        </NavLink>
        <NavLink
          activeClassName="active"
          className={classes.item}
          to="/settings">
          <IoIosOptions />
        </NavLink> */}
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
  // tooltipType: PropTypes.string.isRequired,
};

export default AppMenuComponent;
