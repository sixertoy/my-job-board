import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosRefresh } from 'react-icons/io';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.dark,
    color: theme.colors.white,
    composes: ['p24'],
    height: 'auto',
  },
  refresh: {
    color: theme.colors.white,
    composes: ['fs24'],
  },
});

const AppHeaderComponent = React.memo(
  ({ classes, forceRefresh, nextUpdate }) => {
    return (
      <div className={classes.container} id="screen-header">
        <h2>My Job Board</h2>
        <p>
          <b>Next Update</b>
          <span style={{ marginLeft: '5px' }}>
            {!nextUpdate ? '' : new Date(nextUpdate).toLocaleString()}
          </span>
          <button
            className={classes.refresh}
            type="button"
            onClick={forceRefresh}>
            <IoIosRefresh />
          </button>
        </p>
      </div>
    );
  }
);

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  forceRefresh: PropTypes.func.isRequired,
  nextUpdate: PropTypes.number.isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
