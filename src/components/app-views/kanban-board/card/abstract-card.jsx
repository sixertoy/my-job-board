import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => {
    const backgroundColor = `${theme.colors[name].white}11`;
    return {
      backgroundColor,
      borderRadius: 5,
      color: theme.colors[name].white,
      composes: ['p12'],
    };
  },
  source: ({ theme: name }) => {
    const backgroundColor = `${theme.colors[name].white}11`;
    return {
      backgroundColor,
      borderRadius: 4,
      composes: ['is-inline-block', 'fs10', 'px7', 'py5', 'mb7'],
    };
  },
  title: {
    composes: ['fs14'],
    lineHeight: '1.5rem',
  },
});

const KanbanBoardAbstractCard = ({ classes, item }) => (
  <div className={classes.container}>
    <small className={classes.source}>{item.sourceKey}</small>
    <h5 className={classes.title}>{item.title}</h5>
  </div>
);

KanbanBoardAbstractCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  // NOTE add a item shape custom type
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(KanbanBoardAbstractCard);
