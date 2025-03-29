EmployWise React App

Project Overview
EmployWise is a React-based user management application that integrates with the Reqres API to perform authentication, editing, and deletion functionalities.

This project was built using React (Vite), Tailwind CSS, React Router, Redux-toolkit and Axios for API communication.

Features
✅ Level 1: Authentication
Users can log in with credentials (email: eve.holt@reqres.in, password: cityslicka).

Token is stored in localStorage upon successful login.

Users are redirected to the Users List page.

✅ Level 2: User List
Fetch and display paginated users from https://reqres.in/api/users?page=1.

Users' first name, last name, and avatar are displayed in a responsive layout.

Pagination is implemented for navigating through different pages.

✅ Level 3: Edit & Delete Users
Users can edit their details (first name, last name, email).

Updates are handled via PUT /api/users/{id}.

Users can delete their profiles using DELETE /api/users/{id}.

✅ Additional Enhancements
React Router for smooth navigation.

Error handling for API failures.

Responsive UI using Tailwind CSS.

Tech Stack
Frontend: React (Vite)

UI Framework: Tailwind CSS

State Management: Redux-toolkit

Routing: React Router

API Calls: Axios

Deployment: [Your Deployment Platform]

Installation & Setup
1️⃣ Install Dependencies  
    npm install

2️⃣ Start the Development Server
    npm run dev
    The app will run on http://localhost:5173/ (or as shown in the terminal).

Endpoints Used
Login: POST /api/login

Fetch Users: GET /api/users?page=1

Update User: PUT /api/users/{id}

Delete User: DELETE /api/users/{id}

Author
👤 Purushottam Tulse
📧 Contact: purushottam Tulse
🔗 GitHub: https://github.com/purushottam113