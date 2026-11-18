# Anku Birthday Surprise ❤️

A responsive interactive birthday website built with React, Vite, Tailwind CSS and Framer Motion.

## Run locally

1. Install Node.js (18+ recommended).
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
npm run preview
```

Deploy the project to Vercel or Netlify. For Vercel, import the project/repository and use the defaults:
- Build command: `npm run build`
- Output directory: `dist`

## Personalise it

- Change the three memory cards in the `memories` array near the top of `src/App.jsx`.
- Change the four flip-card messages in the `reasons` array.
- Edit the birthday letter in the `love-letter` section of `src/App.jsx`.
- Add your own photos by placing image files in `public/` and using `<img src="/your-photo.jpg" ... />` in a section.

The opening message and Anku's name are already included. The gift, flip cards, letter reveal, candle interaction and celebration confetti are interactive.
