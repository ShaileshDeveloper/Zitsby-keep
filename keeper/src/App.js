import TextArea from "./components/textArea";
import "./App.css";
import Note from "./components/note";
import { useContext,useEffect } from "react";
import { NoteContext } from "./context/noteContext";

function App() {
const {notes} =  useContext(NoteContext)
  
useEffect(() => {
  localStorage.setItem('items', JSON.stringify(notes));
});
  return (
    <div className="App">
      <div className="header">
        <span>TOUGHTS KEEPER</span>
      </div>
      <hr></hr>
      <TextArea />
      <div className='notes_container'>
      {notes.map((note,index) => (
       <Note id={index}title={note.title} content={note.content} />
      ))}
      </div>
    </div>
  );
}

export default App;
