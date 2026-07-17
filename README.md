# diptanshumahish.in

My personal portfolio: [diptanshumahish.in](https://diptanshumahish.in).

Built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP and Locomotive Scroll. Blog content is authored in Notion and rendered natively through the Notion API.

## Getting started

This project uses [Bun](https://bun.sh).

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint` | Lint |

## Environment

Create a `.env` with:

```
NOTION_DATABASE_SECRET=
NOTION_DATABASE_ID=
```

Both come from a Notion integration with read access to the blog database. Without them the site still builds, but `/blogs` renders empty.

## Structure

```
src/app                      routes (home, blogs, hire, privacy)
src/components/portfolio     home page sections: header, experience, work, contact
src/components/NotionRender  Notion block -> React renderers
public/Assets/work           per-project mockups (desktop + mobile SVG)
public/resume.pdf            served at /resume.pdf
```

Work items live in `src/components/portfolio/Work/Work.tsx`. Each entry optionally takes `itemImage` and `itemMobileImage`; without them the item renders text-only.
