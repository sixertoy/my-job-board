import { sleep } from '@iziges/napper-core';
import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../../constants';
import BoardContextMenuComponent from './component';

const mapStateToProps = state => {
  const existingTitles = state.projects.map(obj => obj.title);
  return { existingTitles };
};

const mapDispatchToProps = dispatch => ({
  addProjectHandler: async ({ project }) => {
    await sleep(100);
    dispatch({ project, type: EVENT_TYPES.PROJECT_CREATE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContextMenuComponent);
