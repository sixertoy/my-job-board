import { connect } from 'react-redux';

import NotesGridComponent from './component';

const mapStateToProps = () => ({
  notes: [
    { label: 'titi', title: 'title' },
    { label: 'toto', title: 'title' },
    { label: 'tata', title: 'title' },
    { label: 'tutu', title: 'title' },
    { label: 'tyty', title: 'title' },
    { label: 'tete', title: 'title' },
  ],
});

const mapDispatchToProps = () => ({
  SAVE_NOTE: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesGridComponent);
