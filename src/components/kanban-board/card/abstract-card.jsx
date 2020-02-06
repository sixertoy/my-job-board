import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: () => {
    const backgroundColor = `${theme.colors.white}11`;
    return {
      backgroundColor,
      borderRadius: 5,
      color: theme.colors.white,
      composes: ['p7', 'fs14'],
      lineHeight: '1.2rem',
    };
  },
});

const KanbanBoardAbstractCard = ({ classes, item }) => (
  <div className={classes.container}>{item.title}</div>
);

KanbanBoardAbstractCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  // NOTE add a item shape custom type
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(KanbanBoardAbstractCard);
