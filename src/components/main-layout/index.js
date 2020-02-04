import { connect } from 'react-redux';

import MainLayoutComponent from './main-layout-component';

const mapStateToProps = () => ({
  loading: true,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayoutComponent);
