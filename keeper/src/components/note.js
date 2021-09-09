import React, { useContext } from 'react'
import { NoteContext } from '../context/noteContext'
import './note.css'
function Note({title ,content,id}) {
  const {notes,setNotes} = useContext(NoteContext)

const handleDelete =(id)=>{
   setNotes(notes.filter((note,index)=> index!==id))
}


    return (
        <div className='note'>
        <span>{title}</span>
        <p>{content}</p>
        <button onClick={()=> handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Note
