import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

import noteRoutes from '../routes/noteRoutes.js';
import connectDB from '../config/database.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/notes', noteRoutes);

beforeAll(async () => {
    console.log('Connecting to database...');
    await connectDB();
    console.log('Database connected');
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Notes API', () => {
    let createdNoteId;

    test('should create a note', async () => {
        const res = await request(app)
            .post('/notes')
            .send({ title: 'Test Note', content: 'This is a test note.' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body).toHaveProperty('catfact');
        createdNoteId = res.body._id;
    });

    test('should get all notes', async () => {
        const res = await request(app).get('/notes');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('should search for notes', async () => {
        const res = await request(app).get('/notes/search?q=test');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('should delete a note', async () => {
        const res = await request(app).delete(`/notes/${createdNoteId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Note deleted');
    });
});