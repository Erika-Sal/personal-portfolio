# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Erika Salvador's personal portfolio website: a Next.js 14 (App Router) site with three pages — Home, About, Projects — built in plain JavaScript (no TypeScript).

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint (eslint-config-next/core-web-vitals)
```

There is no test suite configured in this repo.

Note: `next.config.mjs` sets `eslint.ignoreDuringBuilds: true`, so `npm run build` will succeed even with lint errors — run `npm run lint` separately to catch them.

## Architecture

- **Routing**: Next.js App Router under [src/app/](src/app/). Each route is a `page.js`: [src/app/page.js](src/app/page.js) (home), [src/app/about/page.js](src/app/about/page.js), [src/app/project/page.js](src/app/project/page.js). [src/app/layout.js](src/app/layout.js) is the root layout (Inter font, page metadata).
- **Import alias**: `@/*` maps to `./src/*` (see [jsconfig.json](jsconfig.json)), though most existing files use relative imports (`../components/...`).
- **Styling**: Tailwind is configured ([tailwind.config.js](tailwind.config.js)) but is not the primary styling approach in practice — each page/section is styled with hand-written CSS imported directly into the component: [src/app/globals.css](src/app/globals.css) (home page sections `sec1`–`sec4`), [src/app/styles/project.css](src/app/styles/project.css), [src/app/styles/carousel.css](src/app/styles/carousel.css). `src/app/styles/about.module.css` is currently empty. When editing a page's look, find and edit the matching CSS file rather than adding Tailwind classes, to stay consistent with the existing pattern.
- **Components** ([src/app/components/](src/app/components/)): `Navbar` (site nav, used on every page), `Top` (scroll-to-top button, though most pages currently inline their own scroll-to-top button/handler instead of using this component), and the Embla carousel trio (`EmblaCarousel`, `EmblaCarouselArrowButton`, `EmblaCarouselDotButton`) used for the photo carousel on the About page.
- **Static assets**: All images/PDFs live in [public/](public/) and are referenced by absolute path (e.g. `/Erika_home.JPG`, `/ErikaResume.pdf`) via plain `<img>` tags rather than `next/image`.
- **Projects data**: Project entries for the Projects page are a hardcoded array inside [src/app/project/page.js](src/app/project/page.js) (id, title, tagline, description, image, GitHub link, tech list) — add new projects by extending this array.
- **Dependencies note**: `react-bootstrap` and `react-responsive-carousel` are listed in package.json but are not actually imported anywhere in the codebase; the carousel is implemented with `embla-carousel-react` only.
