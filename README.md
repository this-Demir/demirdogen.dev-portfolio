# Personal Portfolio Website

Source code for my personal portfolio, live at [demirdogen.dev](https://demirdogen.dev).

A small, dependency-light single page application built to read like a CV rather than a
landing page. It ships a custom design system, bilingual content (English/Turkish), light
and dark themes, and a responsive layout built with performance and accessibility in mind.

## Project Overview

The site is built with React and TypeScript on Vite. The guiding constraint is restraint:
one neutral colour ramp with a single blue accent, system fonts, and no animation that
isn't doing work. Runtime dependencies are deliberately kept to React, React Router,
Lucide icons, and Vercel Analytics.

Content is fully separated from presentation. Translated copy lives in a typed dictionary,
non-translatable project metadata (repository URLs, tech lists) lives beside it, and
components only render what they are handed.

## Technologies Used

* **React 18** for the component-based UI.
* **TypeScript** in `strict` mode for type safety.
* **Vite** for the dev server and production bundle.
* **Tailwind CSS** for utility-first styling, wired to semantic CSS variables.
* **Lucide React** for a consistent, tree-shakeable icon set.
* **React Router DOM** for client-side routing.

## Project Structure

```text
src/
├── assets/                  # Static assets
│   ├── certificates/        # Certificate images
│   ├── projects/            # Project screenshots
│   └── tech-logos/          # Technology icons
├── components/
│   ├── Layout.tsx           # Page shell: sidebar, navigation, theme toggle
│   ├── Section.tsx          # Shared section wrapper and heading
│   ├── TimelineEntry.tsx    # Two-column CV row (date on the left, content on the right)
│   ├── ExperienceCard.tsx   # A single role
│   ├── ProjectCard.tsx      # A single project
│   ├── ProjectDetails.tsx   # Per-project expandable deep dives
│   ├── ExpandableDetails.tsx# Height-animating disclosure
│   ├── SkillMarquee.tsx     # Looping technology logo strip
│   └── ...
├── context/
│   ├── LanguageContext.tsx  # Provider component
│   └── language.ts          # Context object and the useLanguage hook
├── data/
│   ├── content.tsx          # Translated copy (English/Turkish)
│   ├── projects.ts          # Project metadata: ids, tiers, tech, links
│   ├── skills.ts            # Technology logos for the marquee
│   └── certificates.ts      # DENEYAP certificate list
├── pages/
│   ├── Index.tsx            # The single page
│   └── NotFound.tsx         # 404 route
├── index.css                # Design tokens, both themes, base styles
├── App.tsx                  # Routing
└── main.tsx                 # Entry point
```

## Credits & Acknowledgments

* **Layout & Scaffolding:** The initial layout and UI scaffolding for this project were
  generated using **Loveable AI**.
* **Development & Architecture:** All subsequent commits, including core logic
  implementation, dynamic features, and architectural refinements, were authored by
  **Demir Demirdöğen**.

## Special Thanks

* **Design Inspiration:** The visual design of this site was inspired by
  [Brittany Chiang](https://brittanychiang.com).
  * *Disclaimer: This project is not affiliated with Brittany Chiang.*

## License

This project is open source and available under the MIT License.