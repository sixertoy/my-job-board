import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { MdList } from 'react-icons/md';

const styles = {
  header: {},
  list: {
    margin: '1%',
    maxWidth: 230,
    minWidth: 230,
    width: 230,
  },
  wrapper: {},
};

const ListComponent = ({ classes, item }) => (
  <div className={classes.list}>
    <div className={classes.header}>
      <div>
        <MdList />
        <span>{item.title}</span>
      </div>
    </div>
    <div className={classes.wrapper} />
  </div>
);

ListComponent.defaultProps = {};

ListComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ListComponent);
