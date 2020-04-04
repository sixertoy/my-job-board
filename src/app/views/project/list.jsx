import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { MdList } from 'react-icons/md';

const styles = {
  list: {
    maxWidth: 230,
    minWidth: 230,
    width: 230,
  },
};

const ListComponent = ({ classes, item }) => (
  <div className={classes.list}>
    <MdList />
    <span>{item.title}</span>
  </div>
);

ListComponent.defaultProps = {};

ListComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ListComponent);
