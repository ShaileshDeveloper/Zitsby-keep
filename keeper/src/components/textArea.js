import React, { useState, useContext } from "react";
import { NoteContext } from "../context/noteContext";
import "./textArea.css";

function TextArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const { setNotes } = useContext(NoteContext);

  function handleSubmit(e) {
    setNotes((prev) => [...prev, note]);
    e.preventDefault();
    setNote({ title: "", content: "" });
  }
  return (
    <div className="text_area">
      <form>
        <input
          value={note.title}
          placeholder="title"
          onChange={(e) =>
            setNote((prev) => {
              return { ...note, title: e.target.value };
            })
          }
        />
        <p>
          {" "}
          <textarea
            value={note.content}
            placeholder="Put your toughts..."
            onChange={(e) =>
              setNote((prev) => {
                return { ...note, content: e.target.value };
              })
            }
          ></textarea>
        </p>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default TextArea;
