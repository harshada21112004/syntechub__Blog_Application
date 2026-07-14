# syntechub__Blog_Application
📝 BlogHub - MERN Blog Application

A full-stack MERN Blog Application that allows users to register, log in securely, create blogs, manage their own posts, and explore blogs created by others. The project uses JWT Authentication for secure access and follows RESTful API architecture.

🚀 Features


**👤 User Authentication**
- Register new users
- Secure login with JWT
- Password hashing using bcryptjs
- Protected routes
- Logout functionality

**📝 Blog Management**
- Create new blog posts
- View all blogs
- View blog details
- Edit your own blogs
- Delete your own blogs
- My Blogs dashboard



**🎨 Frontend**
- Responsive UI using Bootstrap
- React Router for navigation
- User name displayed after login
- Clean and modern interface

**⚙️ Backend**
- RESTful APIs
- Express.js server
- MongoDB database
- Mongoose ODM
- JWT Authentication
- Multer support for image upload (if implemented)

**🛠️ Tech Stack**

***Frontend***
- React.js
- Vite
- Bootstrap 5
- Axios
- React Router DOM

***Backend***
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer

**📂 Project Structure**
```
BlogHub/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md

```
**⚙️ Installation**
1. Clone the Repository
git clone https://github.com/your-username/BlogHub.git
3. Go to Project Folder
cd BlogHub
4. Install Backend Dependencies
cd backend
npm install
5. Install Frontend Dependencies
cd ../frontend
npm install

***🔐 Environment Variables**
```
Create a .env file inside the backend folder.

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```
***▶️ Run the Backend***

cd backend
npm start

__Server runs on:__

http://localhost:5000


***▶️ Run the Frontend***

cd frontend
npm run dev

__Frontend runs on:__

http://localhost:5173

__📡 API Endpoints__

- Authentication

Method	Endpoint	Description

POST	/api/auth/register	Register User

POST	/api/auth/login	Login User

GET	/api/auth/profile	Get User Profile

- Blog APIs

  
Method	Endpoint	Description

GET	/api/blogs	Get All Blogs

GET	/api/blogs/:id	Get Single Blog

GET	/api/blogs/myblogs	Get Logged-in User Blogs

POST	/api/blogs	Create Blog

PUT	/api/blogs/:id	Update Blog

DELETE	/api/blogs/:id	Delete Blog



***This project uses JWT (JSON Web Token) for secure authentication.***

- User Login
- Protected Routes
- Authorization Middleware
- Secure Password Hashing using bcryptjs

