# HADCOVA Task Manager/Note App

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Description

This is a full-stack task manager and note-taking web application built with React for the frontend, Node.js/Express for the backend, and MongoDB for the database. The app allows users to create, update, categorize, and delete tasks and notes. It's designed to help users stay organized and manage their daily tasks and notes efficiently.

## Features

- **Categories:** Tasks and notes can be organized into categories to help users manage their information better.

- **CRUD Operations:** Users can perform basic CRUD (Create, Read, Update, Delete) operations on tasks and notes.

- **Rich Text Editing:** The app uses the `react-quill` package to allow users to create and edit notes with rich text formatting.

- **API Integration:** Axios is used to interact with the backend API to fetch and update task and note data.

## Technologies Used

### Backend
- Node.js/Express.js
- MongoDB
- Mongoose (ODM)
- Cors
- Dotenv (for environment variables)
- Nodemon (for development server auto-restart)

### Frontend
- React
- React Router (for routing)
- Axios (for making API requests)
- React Icons (for icons)
- React-Quill (for rich text editing)
- React Spinners (for loading spinners)

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/samojeyinka/hadcova-task-manager.git
   ```

2. Navigate to the project directory:

   ```
   cd project-directory
   ```

3. Install the backend dependencies:

   ```
   cd backend
   npm install
   ```

4. Install the frontend dependencies:

   ```
   cd frontend
   npm install
   ```

5. Create a `.env` file in the `backend` directory and set the required environment variables (e.g., MongoDB URI).

6. Start the backend server:

   ```
   cd backend
   npm start
   ```

7. Start the frontend development server:

   ```
   cd frontend
   npm start
   ```

## Usage

To use the app, open your web browser and navigate to `http://localhost:2500`. Start managing your tasks and notes.

## API Endpoints

- **GET /api/v1/tasks:** Get a list of tasks.
- **GET /api/v1/tasks/:id:** Get a specific task by ID.
- **POST /api/v1/tasks:** Create a new task.
- **PATCH /api/v1/tasks/:id:** Update a task by ID.
- **DELETE /api/v1/tasks/:id:** Delete a task by ID.

- **GET /api/v1/categories:** Get a list of categories.
- **GET /api/v1/categories/:id:** Get a specific category by ID.
- **POST /api/v1/categories:** Create a new category.
- **PUT /api/v1/categories/:id:** Update a category by ID.
- **DELETE /api/v1/categories/:id:** Delete a category by ID.
- **DELETE /api/v1/categories/:categoryID/tasks** Delete aall tasks in a category by ID.

## Contributing

If you'd like to contribute to this project, feel free to open issues, submit pull requests, or contact me.

## License

You are free to use, modify, and distribute this software as long as you include the original copyright notice and disclaimers.

---

If you have any questions or encounter any issues, please don't hesitate to reach out to me. I hope you find this app helpful for learning.
