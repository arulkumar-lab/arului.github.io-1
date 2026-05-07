# Arul — AI Developer Portfolio

Personal portfolio and blog of **Arulkumar Radhakrishnan** — AI Developer, MCP Practitioner, and Full-Stack Engineer based in Glasgow.

Live: [arului.github.io](https://arului.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 + custom `globals.css` utilities |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Theming | next-themes (dark / light) |
| Visual FX | Liquid-glass CSS + SVG `feDisplacementMap` (Chrome) |

---

## Project Structure

```
app/
  layout.tsx          # Root layout — ThemeProvider, Navbar, Footer, metadata
  globals.css         # Tailwind layers, liquid-glass utilities, blob animations
  page.tsx            # Homepage — hero, stats, AI activities, blog CTA
  about/page.tsx      # About — bio, skills, timeline, interests
  services/page.tsx   # Services offered
  contact/page.tsx    # Contact form

components/
  Navbar.tsx          # Fixed top nav with theme toggle and Logo
  Footer.tsx          # Site footer
  Logo.tsx            # Animated SVG neural-spark logo (theme-aware)
  BlogCard.tsx        # Reusable blog post card
  ThemeProvider.tsx   # next-themes wrapper
  LiquidGlassFilter.tsx  # SVG displacement-map filters (Chrome progressive enhancement)

data/
  page-data.json      # Single source of truth for all static homepage content

public/
  logo.svg            # Standalone SVG logo (also used as favicon)

.github/
  copilot-instructions.md   # Workspace Copilot instructions
  skills/
    add-page/
      SKILL.md        # Skill: add a new page to this portfolio
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server (port 5500)
npm run dev

# Production build
npm run build

# Start production server (port 5500)
npm start
```

Open [http://localhost:5500](http://localhost:5500).

---

## Key Conventions

### Static Content → `data/page-data.json`

All homepage data arrays live in `data/page-data.json`. Do **not** declare inline arrays in `page.tsx`.

```ts
import pageData from "@/data/page-data.json";
// then use pageData.careerStats, pageData.blogPosts, etc.
```

### Icon Names in JSON → `ICON_MAP`

JSON stores icon names as strings. `page.tsx` resolves them at render time:

```ts
const ICON_MAP: Record<string, LucideIcon> = {
  Brain, Cpu, Zap, Layers, TrendingUp, Star, GitBranch, Server, Sparkles,
  Github, ArrowRight, BookOpen, Rss,
};
// usage:
const Icon = ICON_MAP[item.icon];
return <Icon size={20} className="text-white" />;
```

When adding a new icon: add it to the `lucide-react` import line **and** to `ICON_MAP`.

### Liquid-Glass Classes

| Class | Usage |
|---|---|
| `liquid-glass` | Cards, bento boxes |
| `liquid-glass-on-color` | Cards on coloured backgrounds |
| `liquid-glass-button` | All CTA buttons (pill shape, lip-bezel effect) |

`<LiquidGlassFilter />` must be rendered once near the top of a page's JSX tree for the Chrome SVG displacement filter to apply.

### Adding a New Page

Use the `/add-page` Copilot skill (`.github/skills/add-page/SKILL.md`).

---

## Logo

The `<Logo>` component is a theme-aware animated SVG neural-spark mark:
- **Dark mode**: deep-indigo background, fuchsia/cyan accent nodes
- **Light mode**: soft lavender background, deep-violet/teal accent nodes
- Uses `useTheme` + a `mounted` guard to avoid SSR hydration flicker

```tsx
import { Logo } from "@/components/Logo";
<Logo size={36} className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 5500 |
| `npm run build` | Production build |
| `npm start` | Serve production build on port 5500 |
| `npm run lint` | ESLint check |
