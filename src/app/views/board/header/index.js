import moment from 'moment';
import { connect } from 'react-redux';

import { UPDATE_INTERVAL_MS } from '../../../../constants';
import BoardHeaderComponent from './component';

const mapStateToProps = state => {
  const { lastFeedUpdate } = state;
  let nextUpdate = (lastFeedUpdate || '') + UPDATE_INTERVAL_MS;
  nextUpdate = moment(nextUpdate).calendar();
  return { nextUpdate };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHeaderComponent);
