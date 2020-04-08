import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import { ITEM_TYPES } from '../../../constants';
import ListComponent from './list';
import NoteComponent from './note';

const styles = {
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
};

const GridComponent = ({ classes, items }) => (
  <div className={classes.grid}>
    {items.map(obj => {
      const { id: key, type } = obj;
      const Component =
        type === ITEM_TYPES.NOTE ? NoteComponent : ListComponent;
      return <Component key={key} item={obj} onChange={() => {}} />;
    })}
  </div>
);

GridComponent.defaultProps = {};

GridComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(GridComponent);
