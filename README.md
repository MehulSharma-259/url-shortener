# URL Shortener 🚀

A simple and secure **URL Shortener** built with **Node.js, Express, and MongoDB**.  
It allows users to create short links, manage them, and handle authentication for secure access.

---

## ✨ Features
- 🔑 User authentication (signup/login)  
- 🔗 Generate short URLs from long URLs  
- 📑 Store and retrieve shortened links  
- 📊 Track and manage user-specific URLs  
- 🗄️ MongoDB for persistent storage  
- ⚡ Express.js backend with modular structure  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **View Engine**: EJS (if templates are used)  
- **Authentication**: JWT  

---

## 📂 Project Structure
url-shortener/
│── index.js            # Entry point
│── connect.js          # Database connection
│── controllers/        # Route controllers
│ ├── url.js
│ ├── user.js
│── middlewares/        # Middleware functions
│ ├── auth.js
│── models/             # Mongoose models
│ ├── url.js
│ ├── user.js
│── package.json