import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITEM_TYPES } from '../../../constants';
import ListComponent from './list';
import NoteComponent from './note';

const useStyles = createUseStyles({
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
});

const GridComponent = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {items.map(obj => {
        const { id: key, type } = obj;
        const Component =
          type === ITEM_TYPES.NOTE ? NoteComponent : ListComponent;
        return <Component key={key} item={obj} onChange={() => {}} />;
      })}
    </div>
  );
};

GridComponent.defaultProps = {};

GridComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GridComponent;
