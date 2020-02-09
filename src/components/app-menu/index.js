import { connect } from 'react-redux';

import AppHeaderComponent from './component';

const mapStateToProps = state => {
  const { theme } = state;
  const tooltipType = theme === 'night' ? 'dark' : 'light';
  return { theme, tooltipType };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderComponent);
