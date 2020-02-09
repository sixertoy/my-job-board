import { connect } from 'react-redux';

import { loadFeeds } from '../../../../redux/actions';
import KanbanBoardSettingsComponent from './component';

const mapStateToProps = state => {
  const { theme } = state;
  return { theme };
};

const mapDispatchToProps = dispatch => ({
  forceRefresh: () => dispatch(loadFeeds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardSettingsComponent);
