import { createContext, useState,useEffect } from "react";

export const NoteContext = createContext();

export function NoteProvider({ children }) {
  // const [notes, setNotes] = useState([]);

 
  const saveditems = JSON.parse(localStorage.getItem('items'));
  const [notes, setNotes] = useState(saveditems || []);
  

  const addNotes = (note) => setNotes((prev) => note);

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNotes }}>
      {children}
    </NoteContext.Provider>
  );
}
