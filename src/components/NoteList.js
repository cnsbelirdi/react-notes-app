import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteAsync, selectFilteredNotes  } from '../redux/notesSlice';
import Note from './Note'

function NoteList() {
  const dispatch = useDispatch();
  const filteredNotes = useSelector(selectFilteredNotes)

  useEffect(() => {
    dispatch(getNoteAsync())
  }, [dispatch]);

  return (
    <div className='notelist'>
        {
          filteredNotes.map((item) => (
              <Note item={item} key={item.id}/>
          ))
        }
    </div>
  )
}

export default NoteList