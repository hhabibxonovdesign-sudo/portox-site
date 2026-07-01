# Portox — Personal Portfolio & Agency Site

A pixel-close, animated recreation of the "Portox" Framer template, rebuilt as a
production-ready React app.

**Stack:** React 18 · Vite · React Router · Tailwind CSS · Framer Motion

## Pages

- `/` — Home (hero, services, process, portfolio preview, testimonials, blog preview)
- `/about` — About (bio, skill bars, awards, gallery, FAQ)
- `/portfolio` — Portfolio (filterable project grid)
- `/blog` — Blog (featured post + list)
- `/contact` — Contact (booking form)
- `*` — Animated 404 page

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Go to https://vercel.com/new, import this repository.
3. Framework preset: **Vite** (auto-detected). No extra config needed.
4. Deploy.

## Push to GitHub

```bash
git init
git add -A
git commit -m "Initial commit: Portox portfolio site"
git branch -M main
git remote add origin https://github.com/hhabibxonovdesign-sudo/portox-site.git
git push -u origin main
```

> If a `.git` folder already exists in this folder and `git init` complains about
> a broken config, delete the `.git` folder first and run `git init` again.

## Notes

- Colors, typography scale (Fustat font) and spacing were extracted directly
  from the original Framer file's design system (color styles + text styles).
- Images are placeholder stock photos (Unsplash) standing in for the original
  Framer project's licensed photography — swap the URLs in `src/data/content.js`
  and the page files with your own assets.
