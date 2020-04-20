import { sleep } from '@nappr/nappr-core';
import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../../constants';
import Component from './component';

const mapStateToProps = state => {
  const titles = state.projects.map(obj => obj.title);
  return { titles };
};

const mapDispatchToProps = dispatch => ({
  addProjectHandler: async ({ project }) => {
    await sleep(100);
    dispatch({ project, type: EVENT_TYPES.PROJECT_CREATE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
