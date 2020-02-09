import { connect } from 'react-redux';

import AppHeaderComponent from './component';

const mapStateToProps = state => {
  const { theme } = state;
  const tooltipType = theme === 'night' ? 'light' : 'dark';
  return { theme, tooltipType };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderComponent);
