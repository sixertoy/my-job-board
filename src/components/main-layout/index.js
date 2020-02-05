import { connect } from 'react-redux';

import { loadFeeds } from '../../redux/actions';
import MainLayoutComponent from './main-layout-component';

const mapStateToProps = state => {
  const { loading } = state;
  return { loading };
};

const mapDispatchToProps = dispatch => ({
  loadFeeds: () => {
    dispatch(loadFeeds());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayoutComponent);
