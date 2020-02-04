import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosListBox, IoIosOptions, IoMdCalendar } from 'react-icons/io';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.blue,
    composes: ['is-full-height', 'py24', 'px12'],
  },
  item: {
    '& + &': { composes: ['mt24'] },
    '&:hover': { color: theme.colors.white },
    color: theme.colors.white,
    composes: ['is-block', 'fs20'],
  },
});

const AppMenuComponent = ({ classes }) => (
  <nav className={classes.container}>
    <a className={classes.item} href="http://localhost:3000/">
      <IoIosListBox />
    </a>
    <a className={classes.item} href="http://localhost:3000/">
      <IoMdCalendar />
    </a>
    <a className={classes.item} href="http://localhost:3000/">
      <IoIosOptions />
    </a>
  </nav>
);

AppMenuComponent.defaultProps = {};

AppMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppMenuComponent);
