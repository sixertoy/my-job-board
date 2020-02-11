import { connect } from 'react-redux';

import BoardContextMenuComponent from './component';

const mapStateToProps = state => {
  const { feeds } = state;
  return { feeds };
};

const mapDispatchToProps = () => ({
  addFeedHandler: () => {
    // console.log('rest', values);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContextMenuComponent);
