import { sleep } from '@iziges/napper-core';
import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../../constants';
import BoardContextMenuComponent from './component';

const mapStateToProps = state => {
  const { feeds } = state;
  return { feeds };
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
