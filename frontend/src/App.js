import React, { useState, useEffect } from 'react';
import { fetchNotes, createNote, deleteNote, searchNotes } from './services/noteService';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getNotes = async () => {
      const notesData = await fetchNotes();
      setNotes(notesData);
    };
    getNotes();
  }, []);
  

  const handleCreateNote = async (noteData) => {
    const newNote = await createNote(noteData);
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const filteredNotes = await searchNotes(searchQuery);
      setNotes(filteredNotes);
    } else {
      const notesData = await fetchNotes();
      setNotes(notesData);
    }
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm onSubmit={handleCreateNote} />
      <input
        type="text"
        placeholder="Search notes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;