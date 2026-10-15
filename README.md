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

## Special Thanks

* **Design Inspiration:** The visual design of this site was inspired by
  [Brittany Chiang](https://brittanychiang.com).
  * *Disclaimer: This project is not affiliated with Brittany Chiang.*
