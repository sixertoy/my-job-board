import PropTypes from 'prop-types';
import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import { createUseStyles } from 'react-jss';

import ListFormComponent from './list-form';
import NoteFormComponent from './note-form';

const useStyles = createUseStyles({
  container: {
    composes: ['p12'],
    maxWidth: 320,
    minWidth: 320,
    width: 320,
  },
});

const ProjectsContextMenuComponent = ({
  onCreateList,
  onCreateNote,
  onDeleteProject,
  titles,
}) => {
  const classes = useStyles();
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
  onCreateList: PropTypes.func.isRequired,
  onCreateNote: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  titles: PropTypes.shape({
    lists: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectsContextMenuComponent;
