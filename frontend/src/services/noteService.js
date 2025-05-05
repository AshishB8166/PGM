import axios from 'axios';

const API_URL = 'http://localhost:5000/notes'; // backend URL

export const fetchNotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

export const createNote = async (noteData) => {
    try {
        const response = await axios.post(API_URL, noteData);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};

export const searchNotes = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error searching notes:', error);
        throw error;
    }
};