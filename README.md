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
``` bash
url-shortener/
├── index.js            # Entry point
├── connect.js          # Database connection
├── controllers/        # Route controllers
│   ├── url.js
│   └── user.js
├── middlewares/        # Middleware functions
│   └── auth.js
├── models/             # Mongoose models
│   ├── url.js
│   └── user.js
└── package.json
```


## 🛠️ Installation  
1. Clone or download this repository.  
2. Open Chrome and go to: 
3. Enable **Developer Mode**.  
4. Click **Load Unpacked** and select the project folder.  
5. The extension will appear in your browser toolbar.  

---

## 📈 Outcome  
- Simplified link management by offering a lightweight, custom solution.  
- Improved workflow efficiency by allowing users to revisit leads quickly.  
- Demonstrated hands-on skills in building browser-based productivity tools.  
