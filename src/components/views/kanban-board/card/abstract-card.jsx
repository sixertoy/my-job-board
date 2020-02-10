import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    borderRadius: 5,
    color: theme.colors[name].color,
    composes: ['p12', 'no-select'],
  }),
  source: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].background,
    borderRadius: 4,
    composes: ['is-inline-block', 'fs10', 'px7', 'py5', 'mb7'],
  }),
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
