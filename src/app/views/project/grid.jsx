import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITEM_TYPES } from '../../../constants';
import NoteCardComponent from './cards/note';
import TodosCardComponent from './cards/todos';

const useStyles = createUseStyles({
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
});

const GridComponent = ({ items, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {items.map(obj => {
        const { id: key, type } = obj;
        const Component =
          type === ITEM_TYPES.NOTE ? NoteCardComponent : TodosCardComponent;
        return <Component key={key} item={obj} />;
      })}
    </div>
  );
};

GridComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GridComponent;
