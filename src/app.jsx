import React, { useState } from "react";
import Heading from "./heading";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevNotes) => [...prevNotes, newNote]);
  }
  function deleteNote(id) {
    setNote((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.inputText}
            content={note.textArea}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

