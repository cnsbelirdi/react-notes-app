import { useDispatch } from 'react-redux'
import { deleteNoteAsync } from '../redux/notesSlice';
import { Delete } from './Icons'

function Note(props) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if(window.confirm('Are you sure?')){
      dispatch(deleteNoteAsync(id))
    }
  }
  return (
    <div className={`note ${props.item.color}`} key={props.key}>
      <button onClick={() => handleDelete(props.item.id)}><Delete /></button>
      <p>{props.item.content}</p>
    </div>
  )
}

export default Note