import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import { ITEM_TYPES } from '../../../constants';
import ListComponent from './list';
import NoteComponent from './note';

const styles = {
  grid: {
    composes: ['flex-columns', 'flex-wrap'],
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
  },
  project: {
    height: 100,
    margin: '1%',
    width: '23%',
  },
};

const ProjectComponent = ({
  classes,
  // description,
  id,
  items,
  onCreateList,
  onCreateNote,
  // onDeleteProject,
  // title,
}) => {
  return (
    <div className={classes.project} data-id={`projects-${id}`}>
      {/* <span>{title}</span>
      {description && <span>{description}</span>}
      <button type="button" onClick={() => onDelete(id)}>
        <FaTrash />
      </button> */}
      <button type="button" onClick={onCreateNote}>
        <span>Nouvelle note</span>
      </button>
      <button type="button" onClick={onCreateList}>
        <span>Nouvelle liste</span>
      </button>
      <div className={classes.grid}>
        {items.map(obj => {
          const { id: key, type } = obj;
          const Component =
            type === ITEM_TYPES.NOTE ? NoteComponent : ListComponent;
          return <Component key={key} item={obj} />;
        })}
      </div>
    </div>
  );
};

// ProjectComponent.defaultProps = {
//   description: null,
// };

ProjectComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  // description: PropTypes.string,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCreateList: PropTypes.func.isRequired,
  onCreateNote: PropTypes.func.isRequired,
  // onDeleteProject: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectComponent);
