import Note from '../models/Note.js';
import { fetchRandomCatFact } from '../services/catFactService.js';

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const catfact = await fetchRandomCatFact();

        const newNote = new Note({ title, content, catfact });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create note' });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        res.status(200).json({ message: 'Note deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
};

export const searchNotes = async (req, res) => {
    try {
        const { q } = req.query;
        const regex = new RegExp(q, 'i');
        const notes = await Note.find({
            $or: [{ title: regex }, { content: regex }, { catfact: regex }]
        });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to search notes' });
    }
};
