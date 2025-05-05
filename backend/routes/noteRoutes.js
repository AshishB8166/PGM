import express from 'express';
import {
    createNote,
    getAllNotes,
    deleteNote,
    searchNotes
} from '../controllers/noteController.js';

const router = express.Router();

router.post('/', createNote);
router.get('/', getAllNotes);
router.delete('/:id', deleteNote);
router.get('/search', searchNotes);

export default router;