import React from 'react'
import { useDispatch } from 'react-redux'
import { filterNote } from '../redux/notesSlice'

function Header() {
  const dispatch = useDispatch();
  return (
    <div className='header'>
        <h2>NotesApp</h2>
        <input placeholder='Search..' onChange={(e) => dispatch(filterNote(e.target.value))} />
    </div>
  )
}

export default Header