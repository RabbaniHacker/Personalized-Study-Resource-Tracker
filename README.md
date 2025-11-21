# Personalized-Study-Resource-Tracker
Personalized Study Resource Tracker is a web application designed to help students organize study materials in one place. Users can create boards for subjects or topics, add external links (YouTube, Drive, articles), categorize resources by type, and track progress using simple status levels like To-Do, In-Progress, and Completed.

# Personalized Study Resource Tracker (React)

Frontend built with React + Vite + Tailwind. Stores data in localStorage so team members can prototype quickly.

## Setup

1. Install dependencies

```
npm install
```

2. Run dev server

```
npm run dev
```

3. Build

```
npm run build
```

## Push to GitHub

```
git add .
git commit -m "React frontend: initial"
git push origin main
```

## Deploy
Use Vercel or Netlify — connect your GitHub repo and deploy the `main` branch.
```

---

# How I recommend you proceed (quick guide)

1. Create a new folder on your machine.
2. Paste all files above in correct structure.
3. Run `npm install`.
4. Run `npm run dev` and open the local dev server.
5. Test features: create boards, add resources, mark progress.
6. Push to existing GitHub repo (you already have remote set):

```
git add .
git commit -m "React frontend: initial"
git push
```

7. Deploy using Vercel or Netlify: connect the GitHub repo and pick main branch. Vercel auto-detects Vite+React.

---

# Notes for Hackathon polish (optional improvements)

- Add user authentication (Firebase Auth) to sync per-user boards.
- Add cloud DB (Firebase Firestore) to allow team-wide sharing.
- Add CSV/Import export for sharing resources.
- Add progress analytics & charts (Recharts).
- Improve UI: icons, smoother animations, drag-and-drop ordering.