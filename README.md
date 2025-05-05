# 🐾 Cat-Fact Note-Taking App (MERN Stack)

A simple full-stack note-taking app built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. Each note is automatically associated with a random cat fact from [catfact.ninja](https://catfact.ninja/fact).

---

## 🚀 Features

- Create and manage notes
- Automatically assign random cat facts to each note
- Search notes by title, content, or cat fact
- RESTful API (backend)
- React-based frontend with clean layout
- Docker support for both frontend and backend

---

## 📦 Requirements

- Node.js (v20.x recommended)
- MongoDB (local or Docker)
- Docker (for containerized deployment)
- npm

---

## 📁 Project Structure

PGM/  
├── backend/  
│ ├── server.js, routes/, controllers/, models/, services/, tests/  


├── frontend/  
│ ├── src/, public/, Dockerfile  
├── docker-compose.yml


## 🔧 Backend Setup

### 1. Navigate to backend

```bash
cd backend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the server
```bash
npm run start
```
### 4. Run Tests
```bash
npm run test
```

## 🔧 Frontend Setup

### 1. Navigate to frontend

```bash
cd frontend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the React App
```bash
npm start
```
App will run at http://localhost:3000

## 🌐 API Endpoints (Backend)

| Method | Endpoint               | Description                   |
| ------ | ---------------------- | ----------------------------- |
| POST   | `/notes`               | Create a note with a cat fact |
| GET    | `/notes`               | Retrieve all notes            |
| GET    | `/notes/search?q=test` | Search notes                  |
| DELETE | `/notes/:id`           | Delete a note by ID           |
  
  
## 🐳 Run with Docker (Optional)

### 1. Start both frontend and backend via Docker Compose:
```bash
docker-compose up --build
```
### 2. Access the app:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/notes

## 🧪 Technologies Used
 - Frontend: React, Axios, CSS
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Testing: Jest, Supertest
- Other: Docker, dotenv, morgan

