import { connect } from 'react-redux';

// import { loadFortuneCookies } from '../../../redux/actions';
import ViewHomeComponent from './component';

const mapStateToProps = state => {
  const { fortune } = state;
  return { fortune };
};

const mapDispatchToProps = () => ({
  // const mapDispatchToProps = dispatch => ({
  loadFortunes: () => {},
  // loadFortunes: () => dispatch(loadFortuneCookies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewHomeComponent);
