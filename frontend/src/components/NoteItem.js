import React from 'react';

const NoteItem = ({ note, onDelete }) => {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p><strong>Cat Fact:</strong> {note.catfact}</p>
            <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
    );
};

export default NoteItem;