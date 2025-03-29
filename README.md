# EmployWise - React App

## 📌 live on: https://employwisse.netlify.app/

## 📌 Project Overview
EmployWise is a React-based user management application that integrates with the Reqres API to handle authentication, user editing, and deletion functionalities.

This project is built using:
- React (Vite)
- Tailwind CSS
- React Router
- Redux Toolkit
- Axios for API communication

---
## 🚀 Features

### ✅ Level 1: Authentication
- Users can log in with credentials:  
  **Email**: `eve.holt@reqres.in`  
  **Password**: `cityslicka`
- Token is stored in `sessionStorage` upon successful login.
- Users are redirected to the **Users List** page.

### ✅ Level 2: User List
- Fetch and display paginated users from [Reqres API](https://reqres.in/api/users?page=1).
- Displays user's **first name, last name, and avatar** in a responsive layout.
- Implements **pagination** for navigating between pages.

### ✅ Level 3: Edit & Delete Users
- Users can edit their details (**first name, last name, email**).
- Updates are handled via `PUT /api/users/{id}`.
- Users can delete their profiles using `DELETE /api/users/{id}`.

### ✅ Additional Enhancements
- **React Router** for smooth navigation.
- **Error handling** for API failures.
- **Responsive UI** with Tailwind CSS.

---
## 🛠️ Tech Stack

| Technology       | Usage |
|-----------------|--------|
| **Frontend**    | React (Vite) |
| **UI Framework** | Tailwind CSS |
| **State Management** | Redux Toolkit |
| **Routing** | React Router |
| **API Calls** | Axios |
| **Deployment** | Netify |

---
## 🔧 Installation & Setup

1️⃣ **Install Dependencies**  
```sh
npm install
```

2️⃣ **Start the Development Server**  
```sh
npm run dev
```
The app will run on **http://localhost:5173/** (or as specified in the terminal).

---
## 📡 API Endpoints Used

| Action | Method | Endpoint |
|--------|--------|-----------|
| **Login** | `POST` | `/api/login` |
| **Fetch Users** | `GET` | `/api/users?page=1` |
| **Update User** | `PUT` | `/api/users/{id}` |
| **Delete User** | `DELETE` | `/api/users/{id}` |

---
## 👤 Author
**Purushottam Tulse**
- 📧 Contact: purushottamtulse@gmail.com
- 🔗 GitHub: [Purushottam Tulse](https://github.com/purushottam113)

