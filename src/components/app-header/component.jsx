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
  themeDay: {
    backgroundColor: theme.colors.day.background,
    border: `1px solid ${theme.colors.day.color}`,
    borderRadius: 9,
    composes: ['is-block', 'no-overflow'],
    height: 18,
    maxHeight: 18,
    maxWidth: 18,
    minHeight: 18,
    minWidth: 18,
    width: 18,
  },
  themeNight: {
    backgroundColor: theme.colors.night.background,
    border: `1px solid ${theme.colors.night.color}`,
    borderRadius: 9,
    composes: ['is-block', 'no-overflow'],
    height: 18,
    maxHeight: 18,
    maxWidth: 18,
    minHeight: 18,
    minWidth: 18,
    width: 18,
  },
});

const AppHeaderComponent = React.memo(({ changeTheme, classes }) => {
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <div>
        <div>{date}</div>
        <h2>My Job Board</h2>
      </div>
      <div>
        <button
          className={classes.themeNight}
          type="button"
          onClick={changeTheme('night')}>
          &nbsp;
        </button>
        <button
          className={classes.themeDay}
          type="button"
          onClick={changeTheme('day')}>
          &nbsp;
        </button>
      </div>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
