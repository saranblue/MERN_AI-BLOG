# 🧠 MERN AI Blog Generator (with Auth & Dark Mode)

An elegant full-stack MERN (MongoDB, Express, React, Node.js) application where users can sign up, log in, and generate AI-written blogs using [Ollama](https://ollama.com/) (no API key needed). Includes protected routes, token-based authentication, and a dark/light theme toggle.

---

## 🔥 Features

- ✅ User Signup & Login (with JWT-based Auth)
- ✅ Protected Route: Blog Page accessible only after login
- ✅ AI Blog Generation via Ollama (local models like `mistral`)
- ✅ Dark/Light Mode Toggle (with localStorage persistence)
- ✅ Responsive UI using Bootstrap
- ✅ Logout & Session Management

---

## 🚀 Getting Started

### 1. Clone this repo
```bash
git clone https://github.com/saranblue/mern-ai-blog.git
cd mern-ai-blog
```
### 📦 Backend Setup
## 2. Go to the backend directory
cd server

## 3. Install dependencies
npm install

## 4. Start the server
node index.js

## 💡 Frontend Setup
## 5. Open another terminal and go to the client
cd client

## 6. Install dependencies
npm install

## 7. Start the frontend
npm start
```
Runs on http://localhost:3000
```

## 🤖 Ollama (AI Model)
Make sure you have Ollama installed and running:
ollama run mistral
No API key required! This runs models locally like mistral, llama3, etc.

## 🎨 Dark Mode
Toggle with a button on the top-right

State stored in localStorage

Applies globally using Bootstrap utility classes
## 🛠 Technologies
-Frontend: React, Bootstrap, Axios, React Router

-Backend: Node.js, Express, MongoDB, JWT

-AI: Ollama (local LLMs like Mistral)

-Auth: JSON Web Token (JWT)


## 💬 Want to Add?
You can contribute features like:

-✍️ Save blog history per user

-📃 User profile page

-🌐 Language toggle

-📤 Export blog to .txt or .md


## 📂 Folder Structure
```
mern-ai-blog/
├── client/
│   ├── src/
│   ├── components/
├── server/
│   ├── routes/
│   └── index.js
```


![dashboard-preview](client/src/components/output.png) 














