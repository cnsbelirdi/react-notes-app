import { useSelector, useDispatch } from 'react-redux'
import {Selected} from './Icons'
import { toggleCheck, addNoteAsync } from '../redux/notesSlice';
import { useState } from 'react';

function Form() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const colors = useSelector((state) => state.notes.colors);
  const selectedColor = useSelector((state) => state.notes.selectedColor);

  const handleNewNote = async (e) => {
    e.preventDefault();
    if(!note){
      alert("Your note is empty. Please type your note and try again!");
      return;
    }
    else if(!selectedColor){
      alert("Please select a color for your note and try again!");
      return;
    }
    await dispatch(addNoteAsync({content : note, color : selectedColor.name}))
    setNote('');
  }

  return (
    <div className='form'>
      <textarea placeholder='Enter your note here...' onChange={(e) => setNote(e.target.value)} value={note} ></textarea>
      <div className='form-bottom'>
        <div className='colors'>
          {
            colors.map((color) => (
              <button key={color.id} className={color.name} onClick={() => dispatch(toggleCheck({ id : color.id}))}>
                {color.isChecked && <Selected />}
              </button>
            ))
          }
        </div>
        <button onClick={handleNewNote}>ADD</button>
      </div>
    </div>
  )
}

export default Form