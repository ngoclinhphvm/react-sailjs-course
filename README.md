## 🏗️ Architecture

This project consists of two main components:

- **Frontend**: React application built with Vite for fast development and optimized builds
- **Backend**: Sails.js RESTful API server with real-time capabilities

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.15 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Quick Start

### 1. Navigate to the Project Directory
````bash
cd <path-to-the-project>
````

### 2. Install Dependencies

Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Start the Development Servers

You'll need to run both the backend and frontend servers. Open two terminal windows:

**Terminal 1 - Backend (API Server):**
```bash
cd backend
sails lift
```
The backend server will start on `http://localhost:1337`

**Terminal 2 - Frontend (React App):**
```bash
cd frontend
npm run dev
```
The frontend development server will start on `http://localhost:5173`
### 4. Access the Application
Open your web browser and navigate to `http://localhost:5173` to view the React application. The frontend will communicate with the backend API running on `http://localhost:1337`.