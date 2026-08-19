# MiraLux Travel

Marketing site for MiraLux, a Tashkent-based travel agency operating since 2009 —
Silk Road tours across Uzbekistan (Samarkand, Bukhara, Khiva) plus international
travel, visas, flights, and hotel bookings.

Built with Next.js 16 (App Router) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

Single-page layout, sections live in `app/components/`: `Header`, `Hero`,
`TrustStrip`, `Destinations`, `Signature`, `Services`, `Packages`, `Reviews`,
`ContactCta`, `Footer`.

Destination photography lives in `public/images/` (Wikimedia Commons,
freely licensed).

## Content to keep current

- **`app/components/Reviews.tsx`** — currently links out to the Instagram
  review highlight; drop in 2–3 real client quotes once available.
- **`app/components/Packages.tsx`** — the third package is priced "on
  request"; update once a rate is set.
- Contact details (phone, email, address, socials) were pulled from
  mira-lux.uz and public directories — double-check before publishing.

## Deployment

Ready to deploy on Vercel — connect the repo in the Vercel dashboard, or run
`vercel deploy` from the project root.
