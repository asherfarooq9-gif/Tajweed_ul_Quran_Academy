# Tajweed ul Quran Academy

Animated marketing website for **Tajweed ul Quran Academy** — an online Quran school
teaching recitation with proper Tajweed to students of every age, worldwide.

Built with Next.js (App Router), Tailwind CSS v4, shadcn/ui (base-nova) and Motion.
Styled to the **Sage Garden** theme (sage-green palette, Antic headings, radius 0.35rem).

## Pages

- **Home** (`/`) — hero, features, course preview, testimonials, call-to-action
- **Courses** (`/courses`) — full course catalog + FAQ
- **About** (`/about`) — mission, values, how learning works
- **Contact** (`/contact`) — enrolment form (sends via WhatsApp or email) + contact details

Enquiries have no backend: the enrolment form builds a pre-filled **WhatsApp** message
and a `mailto:` link, so submissions cost nothing to run.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Configuration

All site content and contact details live in [`lib/site-config.ts`](lib/site-config.ts).

Before going live, replace the placeholders:

| Field | Where | Notes |
|-------|-------|-------|
| `whatsapp` | `siteConfig.whatsapp` | International format, digits only (e.g. `447123456789`) |
| `email` | `siteConfig.email` | Contact / enrolment inbox |
| `phoneDisplay` | `siteConfig.phoneDisplay` | Shown on the contact page |
| `url` | `siteConfig.url` | Production domain (used for SEO + sitemap) |

Courses, features and testimonials are also edited in that one file.

## Tech

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4 + shadcn/ui (base-nova style, Base UI primitives)
- Motion (animations, scroll reveals, page transitions) with reduced-motion support
- Fully responsive — mobile, tablet and desktop
- SEO: per-page metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`

## Deploy

Deploy to [Vercel](https://vercel.com/new): import the repo, keep defaults, deploy.
Set the production domain in `siteConfig.url` first so SEO tags resolve correctly.
