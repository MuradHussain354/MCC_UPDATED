# MCC Group (Pvt) Ltd — Website

Next.js 14 (App Router, TypeScript, Tailwind CSS) marketing site for MCC
Group, built for static export and cPanel shared hosting.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Building for deployment (cPanel)

```bash
npm run build
```

This generates a static `out/` folder. Upload the **contents** of `out/`
(not the folder itself) to your `public_html` directory (or the relevant
subfolder) on cPanel.

## Project structure

- `app/` — pages (App Router): home, about, services, theaters,
  youtube-channels, contact
- `components/` — shared UI components
- `data/` — typed content arrays (theaters, services, channels, team) —
  edit these files to update site content without touching layout code
- `lib/animations.ts` — shared framer-motion animation variants
- `lib/utils.ts` — `cn()` className helper

## Design system

- Colors: `mcc-black`, `mcc-paper`, `mcc-red`, `mcc-red-deep`, `mcc-steel`
  (see `tailwind.config.ts`)
- Fonts: Bebas Neue (display/headings), Inter (body), IBM Plex Mono
  (eyebrow labels, ticket-style accents)
- Signature motifs: a film-sprocket perforation rail used as a section
  divider, and "ticket-stub" styled cards (rounded notch cutouts + dashed
  tear line) used throughout — both grounded in the cinema/film
  distribution subject matter.

See `TODO.md` for remaining items before launch.
