import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../constants';
import AppHeaderComponent from './component';

const mapStateToProps = state => {
  const { theme } = state;
  return { theme };
};

const mapDispatchToProps = dispatch => ({
  changeTheme: name => () => {
    dispatch({ name, type: EVENT_TYPES.THEME_CHANGE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderComponent);
