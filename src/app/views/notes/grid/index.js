import { connect } from 'react-redux';

import NotesGridComponent from './component';

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotesGridComponent);
