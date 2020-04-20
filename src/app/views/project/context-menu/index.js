import { sleep } from '@nappr/nappr-core/lib/utils';
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

const mapDispatchToProps = (dispatch, { history, location, match }) => ({
  onCreateList: async ({ list }) => {
    await sleep(100);
    const { id: project } = match.params;
    dispatch({ list, project, type: EVENT_TYPES.LIST_CREATE });
  },
  onCreateNote: async ({ note }) => {
    await sleep(100);
    const { id: project } = match.params;
    dispatch({ note, project, type: EVENT_TYPES.NOTE_CREATE });
  },
  onDeleteProject: () => {
    const { id } = match.params;
    const { pathname } = location;
    const [basepath] = pathname
      .split('/')
      .filter(v => v)
      .slice(0, 1);
    history.replace(`/${basepath}`);
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
