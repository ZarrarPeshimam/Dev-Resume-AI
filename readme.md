# 💼 DevResume.AI — Build Smart, Beautiful, ATS-Friendly Resumes

**DevResume.AI** is a modern, drag-and-drop resume builder powered by AI.
Generate perfectly structured, ATS-compliant resumes with smart bullet points, summaries, and beautiful designs — all in your browser.

---

## 🚀 Features

* 🎯 Drag-and-drop resume sections
* ✨ AI-generated bullet points, summaries, and job descriptions
* 📄 Export as polished PDF
* 🎨 A7UI-styled modern design (TailwindCSS)
* 🧠 Built with React + Node.js + OpenAI

---

## 🔧 Tech Stack

| Layer    | Tech Used                                                       |
| -------- | --------------------------------------------------------------- |
| Frontend | React, Vite, TailwindCSS, Framer Motion (optional), html2pdf.js |
| Backend  | Node.js, Express.js, OpenAI API                                 |
| Hosting  | Vercel (Frontend), Render / Railway (Backend)                   |
| Tools    | ESLint, Prettier, dotenv, GitHub Actions (planned)              |

---

## 📁 Project Structure

```
devresume-ai/
├── frontend/   ← React + Tailwind App
└── backend/    ← Node.js + Express + OpenAI
```

---

## 🛠️ Local Setup Instructions

### ✅ Prerequisites

* Node.js installed
* npm or yarn
* OpenAI API key (for AI features)

---

### 🖥️ Step 1: Clone the Repository

```bash
git clone https://github.com/Anasmalik57/devresume-ai.git
cd devresume-ai
```

---

### 🎨 Step 2: Set Up the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to view the app.

---

### 🧠 Step 3: Set Up the Backend (AI Engine)

```bash
cd ../backend
npm install
```

Create a `.env` file in the `backend/` directory:

```
OPENAI_API_KEY=your_api_key_here
```

Then run the backend server:

```bash
npm run dev
```

> Backend runs on `http://localhost:5000`

---

## 🔗 Connecting Frontend to Backend

Frontend makes a POST request to:

```
http://localhost:5000/api/ai/generate
```

**Sample Payload:**

```json
{
  "prompt": "Generate bullet points for a React developer"
}
```

---

## 🤝 How to Contribute

We welcome all kinds of contributions!

### 🪼 Steps to Contribute

1. **Fork** the repo
2. **Clone** your fork
3. Create a new **branch**
   `git checkout -b feature-name`
4. Make your changes
5. **Commit** your changes
   `git commit -m "✨ Added drag for experience block"`
6. **Push** to your fork
7. Create a **Pull Request**

---

## 🏷️ Labels for Issues

* `good first issue` — Great for beginners
* `feature` — New functionality
* `bug` — Fix something broken
* `UI/UX` — Design tweaks or suggestions
* `AI` — OpenAI prompt improvements

---

## 🧪 Testing & Code Quality

* Run `npm run lint` to check for lint errors
* Keep PRs small and focused
* Follow the existing folder & component structure

---

## 📄 .env Example

```env
# backend/.env
OPENAI_API_KEY=your_openai_key
```

> ⚠️ **Never commit your real API key!**

---

## 🌐 Deployment

| Layer    | Platform                 |
| -------- | ------------------------ |
| Frontend | Vercel                   |
| Backend  | Render / Railway         |
| Database | MongoDB Atlas (optional) |

---

## ❓ FAQ

### 🟡 Do I need an OpenAI key to contribute?

No — unless you're working on the AI features. You can use dummy responses or request a temporary key.

### 🔵 Can I add my own resume template?

Yes! Make a PR to `/frontend/src/templates` with a new JSON-based template.

---

## 💬 Community & Support

* [GitHub Discussions](https://github.com/Anasmalik57/devresume-ai/discussions)
* GSSoC Discord Channel
* [LinkedIn](https://linkedin.com/in/your-link)

---

## 📜 License

MIT License — free to use, fork, and build on 🚀

---

## 💖 Star the Repo if You Like It!

```
⭐ Star us — it motivates us and helps others discover the project!
```

---

> ✅ Let me know your GitHub username and LinkedIn link to personalize the links above.
> Ready to generate:
>
> * `.env.example`
> * `CONTRIBUTING.md`
> * First 5 beginner-friendly issues?

Just say: **"let’s prep the rest"** and I’ll drop them instantly... 🚀

