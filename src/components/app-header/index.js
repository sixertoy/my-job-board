import { connect } from 'react-redux';

import { loadFeeds } from '../../redux/actions';
import AppHeaderComponent from './component';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  forceRefresh: () => dispatch(loadFeeds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderComponent);
