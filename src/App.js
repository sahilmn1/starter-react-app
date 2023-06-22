import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');



  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  // const handleAddNote = () => {
  //   if (newNote.trim() !== '') {
  //     setNotes([...notes, newNote]);
  //     setNewNote('');
  //   }
  // };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([newNote, ...notes]); // Prepend newNote to the notes array
      setNewNote('');
    }
  };


  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1 className="title">Notes App</h1>

      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a new note"
        />
        <button className="add-button" onClick={handleAddNote}>
          Add Note
        </button>

       
      </div>

      <hr />
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li className="note-item" key={index}>
            <span className="note-text">{note}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
     
      <div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.80185929636!2d78.19089894999999!3d26.21415585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1687423285271!5m2!1sen!2sin" width={600} height={300} allowfullscreen></iframe>
     </div>
    </div>
   
  );
};

export default App;
