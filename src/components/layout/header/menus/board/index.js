import { connect } from 'react-redux';

import BoardContextMenuComponent from './component';

const mapStateToProps = state => {
  const { feeds } = state;
  return { feeds };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContextMenuComponent);
