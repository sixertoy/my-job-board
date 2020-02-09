import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import ViewSettingsComponent from './component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeTheme: name => () => {
    dispatch({ name, type: EVENT_TYPES.THEME_CHANGE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSettingsComponent);
