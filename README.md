# Shahal — AI/ML Engineer Portfolio

Built with React + Vite. Ported from an HTML/CSS/JS template into proper
React components.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Where to edit content

Almost everything you'll want to change lives in **`src/data/content.js`**:
- Your name, tagline, roles (typed-text rotation), email, phone, social links
- About section paragraphs and skills list
- Services list
- Projects list (**currently has placeholder projects — replace with real
  ones and real metrics before you rely on this for interviews**)
- Testimonials (currently empty — add real ones later, don't fabricate)

You generally should NOT need to edit component files in `src/components/`
unless you want to change layout or add a new section.

## TODOs before this is interview-ready

1. `src/data/content.js` — replace placeholder email, phone, social links,
   resume URL, and especially the **projects array** with your real projects
   and real, defensible numbers.
## Database & Contact Form Setup

1. **Environment Variables**: Add your Aiven PostgreSQL connection URL to `.env`:
   ```env
   DATABASE_URL=postgres://user:password@host:port/defaultdb?sslmode=require
   ```
2. **Initialize Database Table**: Run the setup script once before first use:
   ```bash
   npm run db:init
   ```
3. **Vercel Deployment**:
   - Go to project **Settings** -> **Environment Variables** in Vercel.
   - Add `DATABASE_URL` with your Aiven Postgres connection string.
   - Vercel automatically deploys `api/contact.js` as a serverless function!

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite — no config needed. Click Deploy.
4. Add your `DATABASE_URL` under **Settings -> Environment Variables**.
