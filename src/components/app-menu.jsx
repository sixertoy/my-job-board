import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosListBox, IoIosOptions, IoMdCalendar } from 'react-icons/io';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.blue,
    composes: [
      'is-full-height',
      'px12',
      'flex-rows',
      'flex-between',
      'no-no-flex-grow',
    ],
  },
  item: {
    '&:hover': { color: theme.colors.dark },
    color: theme.colors.white,
    composes: ['is-block', 'fs20', 'my12'],
  },
});

const AppMenuComponent = React.memo(({ classes }) => {
  return (
    <div className={classes.container} id="app-menu">
      <nav className={classes.top}>
        <a className={classes.item} href="/board">
          <IoIosListBox />
        </a>
        <a className={classes.item} href="/calendar">
          <IoMdCalendar />
        </a>
      </nav>
      <nav className={classes.bottom}>
        <a className={classes.item} href="/options">
          <IoIosOptions />
        </a>
      </nav>
    </div>
  );
});

AppMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppMenuComponent);
