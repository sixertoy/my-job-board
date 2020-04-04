import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdTrash } from 'react-icons/io';

import ListFormComponent from './list-form';
import NoteFormComponent from './note-form';

const styles = {
  container: {
    composes: ['p12'],
    maxWidth: 320,
    minWidth: 320,
    width: 320,
  },
};

const ProjectsContextMenuComponent = ({
  classes,
  onCreateList,
  onCreateNote,
  onDeleteProject,
  titles,
}) => {
  return (
    <div className={classes.container}>
      <NoteFormComponent titles={titles.notes} onChange={onCreateNote} />
      <ListFormComponent titles={titles.lists} onChange={onCreateList} />
      <button type="button" onClick={onDeleteProject}>
        <IoMdTrash />
        <span>Supp. projet</span>
      </button>
    </div>
  );
};

ProjectsContextMenuComponent.defaultProps = {};

ProjectsContextMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  onCreateList: PropTypes.func.isRequired,
  onCreateNote: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  titles: PropTypes.shape({
    lists: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default withStyles(styles)(ProjectsContextMenuComponent);
