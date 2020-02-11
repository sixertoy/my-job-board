import { connect } from 'react-redux';

import { loadFortuneCookies } from '../../../redux/actions';
import ViewHomeComponent from './component';

const mapStateToProps = state => {
  const { fortune } = state;
  return { fortune };
};

const mapDispatchToProps = dispatch => ({
  loadFortunes: () => dispatch(loadFortuneCookies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewHomeComponent);
