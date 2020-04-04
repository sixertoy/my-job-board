import { sleep } from '@iziges/napper-core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { EVENT_TYPES } from '../../../../constants';
import {
  selectListsByProjectId,
  selectNotesByProjectId,
} from '../../../../redux/selectors';
import Component from './component';

const mapStateToProps = (state, { match }) => {
  const { id: project } = match.params;
  const notes = selectNotesByProjectId(state, project).map(obj => obj.title);
  const lists = selectListsByProjectId(state, project).map(obj => obj.title);
  const titles = { lists, notes };
  return { titles };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  onCreateList: async () => {
    await sleep(100);
    const { id: project } = match.params;
    dispatch({ project, type: EVENT_TYPES.LIST_CREATE });
  },
  onCreateNote: async () => {
    await sleep(100);
    const { id: project } = match.params;
    dispatch({ project, type: EVENT_TYPES.NOTE_CREATE });
  },
  onDeleteProject: () => {
    const { id } = match.params;
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
