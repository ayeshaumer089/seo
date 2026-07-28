# TechNest Academy

A simple, modern, responsive technology blog built with **Next.js** and plain CSS.

This project is intentionally **not SEO-optimized**. SEO features were left out so you can practice adding them yourself later.

## Pages

- Home (`/`)
- About (`/about`)
- Blog (`/blog`)
- Single blog post (`/blog/[slug]`)
- Contact (`/contact`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm start` — run the production build locally
- `npm run lint` — run ESLint

## Project structure

```text
app/               # Pages and global styles
components/        # Reusable UI components
data/posts.js      # Dummy blog posts (no database)
public/            # Static assets
```

## Notes

- No backend, authentication, or database
- Contact and newsletter forms are frontend-only
- Images use regular `<img>` tags (no Next.js image optimization)
- Ready to deploy on Vercel or Netlify
