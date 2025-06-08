# 📝 Blog Speaks

**Blog Speaks** is a modern AI-powered blogging platform that blends human creativity with artificial intelligence. Whether you're a beginner or a seasoned writer, Blog Speaks helps you create smarter, more impactful content effortlessly.

![Blog Speaks Screenshot](/frontend/src/website.JPG)

---

## 🚀 Features

- ✍️ **Write and Publish**: Compose and manage blog posts with an intuitive interface.
- 🤖 **AI-Enhanced Suggestions**: Improve your content quality using AI-driven recommendations (planned feature).
- 📊 **SEO Tips**: Optimize your posts with built-in SEO support (planned feature).
- 📚 **CRUD Operations**: Full control over blog posts — Create, Read, Update, and Delete.
- 🧑‍💻 **Author Profile**: View and manage personal author details.
- 📱 **Responsive Design**: Works smoothly on all screen sizes using React-Bootstrap.
- 🔗 **Integrated Backend**: Built with Flask for easy API communication and data handling.

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Vite) v.19
- React Router      v.6
- React-Bootstrap   v.5.3
- Axios             v.1.9

**Backend:**
- Flask             
- Flask-CORS
- SQLite (or any database)

---

## 📁 Project Structure
```
blog_speak/
│
├── backend/             # Flask backend
│ ├── app.py             # Flask main app
│ ├── db.py              # SQLite database
│ └── requirements.txt   # python dependency
│
├── frontend/            # React frontend
│ ├── src/
│ │ ├── templates/       # Child React components
│ │ ├── template/        # Page templates (Home, About, etc.)
│ │ ├── App.tsx          # main structured parent react component
│ │ ├── global.css       # global style sheet
│ │ └── main.tsx         # react routing component
│
└── README.md
```
---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js and npm
- Python v.3.9 ++
- pip    v.25.

---

### 🔌 Backend Setup (Flask)

1. Navigate to the backend directory:

```
cd backend
```
create and activate a virtual environment:
```
python -m venv blogspk         (environment name) to create the environment variable
blogspk\Scripts\activate                          to activate the environment variable

```
Install dependencies:
```
pip install -r requirements.txt
```

Run the Flask app:
```
python app.py

The backend will start at: http://localhost:5000
```
💻 Frontend Setup (React)

Navigate to the frontend directory:
```
cd frontend
```
Install dependencies:
```
npm install
```
Run the React app:
```
npm run dev
The frontend will start at: http://localhost:5173
```

🧪 API Endpoints
```
Method	Endpoint	Description
GET	/posts	Fetch all posts
POST	/posts	Create new post
DELETE	/posts/<id>	Delete a post

More endpoints like PUT for update can be added easily.
```

🙋‍♂️ Creator
<div>Shom Dash</div>
<div>Data Science | Full Stack Developer</div>
<div><a href="https://github.com/SD-95" target="_blank">🔗 GitHub</a></div>
<div><a href="https://www.linkedin.com/in/somes-dash-976201155" target="_blank">🔗 LinkedIn</a></div>
<div>📧 Somes.dash1995@gmail.com</div>