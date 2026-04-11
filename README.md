# Tauri + FastAPI App

Simple desktop app using:
- Tauri (desktop shell)
- Vanilla frontend (HTML + JS)
- FastAPI (backend API)

---

## 📦 Project structure

- `frontend/` → UI (HTML + JS)
- `backend/` → FastAPI server
- `src-tauri/` → Tauri config

---

## 🚀 Run the backend (FastAPI)

In one terminal:

```bash
uvicorn backend.main:app --reload --port 8000
```

Test API:

http://127.0.0.1:8000/ping

Expected:

```json
pong 
```

---

## 🖥️ Run the desktop app (Tauri)

In another terminal (inside `tauri-app`):

```bash
npm run tauri dev
```

This will:
- start the frontend dev server (if configured in Tauri)
- open the desktop window

---

## ⚠️ Important notes

- Backend runs on **port 8000**
- Frontend runs on **port 1420 (dev)**
- Do NOT manually start multiple servers on the same port

---

## 🧠 Architecture

Tauri UI → calls FastAPI → returns JSON → UI updates

Example flow:

1. Click button in desktop app
2. JS calls `http://127.0.0.1:8000/ping`
3. FastAPI returns result
4. UI updates display
```