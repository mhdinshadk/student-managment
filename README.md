# Student Management System API

A RESTful backend API built using Node.js, Express.js, TypeScript, and MongoDB Atlas.  
This system supports admin and student roles with JWT-based authentication.

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- dotenv

---

## Features

Admin Panel:
- Admin login
- Add students
- Assign tasks to students

Student Interface:
- Student login
- View assigned tasks
- See task status (pending, overdue, completed)
- Mark tasks as completed

Other:
- Role-based access control
- JWT authentication (no cookies / sessions)
- JSON request/response only
- Centralized error handling
- MongoDB Atlas database
- TypeScript implementation

---

## Project Setup

Clone the repository and install dependencies:

```
git clone <your-github-repo-url>
cd student-management-api
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Run Locally

Start the development server:

```
npm run dev
```

Production build:

```
npm run build
npm start
```

---

## Base URLs

Local:

```
http://localhost:5000
```

Production:

```
https://your-app-name.onrender.com
```

---

## Authentication

All protected routes require a JWT token.

Send token in header:

```
Authorization: Bearer <TOKEN>
```

No cookies or sessions are used.

---

## API Documentation

---

### Auth Routes

POST /api/auth/admin/login  
Admin login.

Request body:

```
{
  "email": "admin@mail.com",
  "password": "123456"
}
```

---

POST /api/auth/student/login  
Student login.

---

---

### Admin Routes (Protected)

POST /api/admin/students  
Add a new student.

Request body:

```
{
  "name": "Rahul",
  "email": "rahul@mail.com",
  "department": "CSE",
  "password": "123456"
}
```

---

POST /api/admin/tasks  
Assign a task to a student.

Request body:

```
{
  "studentId": "STUDENT_ID",
  "title": "Submit assignment",
  "description": "Upload PDF",
  "dueDate": "2026-02-20"
}
```

---

---

### Student Routes (Protected)

GET /api/student/tasks  
Get all assigned tasks for logged-in student.

---

PATCH /api/student/tasks/:taskId  
Update task status.

Request body:

```
{
  "status": "completed"
}
```

---

---

## Postman Testing Flow

1. Admin login → save token.
2. Add student using admin token.
3. Assign task to student.
4. Student login → save token.
5. Get tasks.
6. Update task status.

---

## Postman Collection

Export the Postman collection and include it in the repository:

```
postman/StudentAPI.postman_collection.json
```

Import it into Postman to test all endpoints easily.

---

## Deployment

The API is deployed on Render.

Production URL:

```
https://student-managment-uyrq.onrender.com
```

Environment variables configured on hosting platform:
- MONGO_URI
- JWT_SECRET
- NODE_ENV

---

## Git Ignore

The following files are excluded from Git:

- node_modules
- .env
- dist

---

## Submission Checklist

- API hosted and accessible
- MongoDB Atlas connected
- Environment variables configured
- README included
- API documentation present
- Postman collection exported
- JWT authentication implemented
- Role-based access working
- TypeScript used
- No cookies or HTML used

---
