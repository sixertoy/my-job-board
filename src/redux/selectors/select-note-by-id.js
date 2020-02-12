import createCachedSelector from 're-reselect';

import { mapArgsToMemoizeSelector } from '../../helpers';

const getNotesFromState = state => state.notes;
const getIdFromProps = (state, id) => id;

function expensiveComputation(notes, id) {
  const selectedNote = notes.find(obj => obj.id === id);
  return selectedNote;
}

const selectNoteById = createCachedSelector(
  getNotesFromState,
  getIdFromProps,
  (notes, id) => expensiveComputation(notes, id)
)(mapArgsToMemoizeSelector('note'));

export default selectNoteById;
