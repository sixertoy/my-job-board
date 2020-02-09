import { connect } from 'react-redux';

import AppHeaderComponent from './component';

const mapStateToProps = state => {
  const { theme } = state;
  return { theme };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderComponent);
