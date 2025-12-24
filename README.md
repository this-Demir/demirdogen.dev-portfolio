# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, which is currently live at [demirdogen.dev](https://demirdogen.dev).



The project is a comprehensive Single Page Application (SPA) designed to demonstrate software engineering capabilities, architectural understanding, and frontend development skills. It features a completely custom design system, bilingual support (English/Turkish), and a responsive layout built with performance and accessibility in mind.

## Project Overview

The application is engineered using React and TypeScript, utilizing Vite as the build tool for optimized performance. The architecture focuses on component reusability and separation of concerns. Key architectural decisions include a custom-built localization system, a dual-theme (Light/Dark) mechanism using CSS variables, and a modular UI component library based on headless primitives.

## Technologies Used

### Core Stack
* **React 18:** Utilized for building the component-based user interface.
* **TypeScript:** Employed to ensure type safety, reduce runtime errors, and improve developer experience.
* **Vite:** Chosen for its fast development server and efficient production bundling.

### Styling and UI Architecture
* **Tailwind CSS:** Used for utility-first styling, enabling rapid UI development and consistent design tokens.
* **Radix UI:** Implemented as the foundation for accessible, unstyled UI primitives (Dialogs, Tooltips, Toasts, etc.), ensuring full WAI-ARIA compliance.
* **Lucide React:** Utilized for a consistent and lightweight icon set.
* **CSS Variables:** Leveraged for defining semantic color tokens to support dynamic theming.

### State Management & Logic
* **React Context API:** Manages global application states such as language preferences and active themes.
* **Custom Hooks:** Encapsulates reusable logic, such as device detection (`use-mobile`) and toast notifications (`use-toast`).
* **React Router DOM:** Handles client-side routing and navigation.

## Project Structure

The project follows a scalable directory structure that categorizes files by their function and scope.

```text
src/
├── assets/                 # Static assets including images, SVGs, and documents
│   ├── certificates/       # Certificate images
│   ├── projects/           # Project screenshots
│   └── tech-logos/         # Technology icons
├── components/
│   ├── ui/                 # Reusable, headless UI primitives      
│   ├── Layout.tsx          # Main application wrapper handling common layout elements
│   ├── ProjectCard.tsx     # Specialized component for displaying project details
│   ├── ExperienceCard.tsx  # Component for rendering professional experience
│   └── ...                 # Other domain-specific components
├── context/
│   └── LanguageContext.tsx # Context provider managing application-wide localization
├── data/
│   └── content.tsx         # Centralized dictionary for text 
├── hooks/
│   ├── use-mobile.tsx      # Hook for responsive design logic and breakpoints
│   └── use-toast.ts        # Hook for managing toast notification state
├── lib/
│   └── utils.ts            # Shared utility functions 
├── pages/
│   ├── Index.tsx           # The main landing page container
│   └── NotFound.tsx        # 404 Error page handling
├── styles/
│   └── theme.css           # Definition of global CSS variables and theme tokens
├── App.tsx                 # Root component and routing configuration
└── main.tsx                # Entry point for the React application
```

## Key Features Implementation

### Custom Localization System
Instead of relying on heavy external libraries, the application implements a lightweight, type-safe localization system. Text content is stored in a structured object dictionary within `src/data/content.tsx`. The `LanguageContext` provider manages the active language state, persists the user's preference in Local Storage, and serves the appropriate content string to components, ensuring a seamless bilingual experience (English/Turkish).

### Dynamic Theming
A robust theming system is implemented using native CSS variables defined in `src/styles/theme.css`. The application supports both Light and Dark modes. Tailwind CSS is configured to reference these variables, allowing semantic color usage (e.g., `bg-background`, `text-foreground`) that automatically adapts when the theme changes, ensuring consistency across the entire design system.

### Interactive UI Elements
The user interface includes several advanced interactive elements designed to enhance user engagement without compromising performance:
* **Mouse Flashlight Effect:** A dynamic spotlight effect that follows the cursor, implemented in `MouseFlashlight.tsx`, adding depth to the visual experience.
* **Scroll Animations:** Elements trigger fade-in and slide-up animations using Intersection Observers upon scrolling into view.
* **Expandable Details:** Project cards feature expandable sections to reveal in-depth technical details (such as architectural decisions or performance metrics) without cluttering the main view.

## Installation and Setup

To run this project locally for development or testing purposes, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/this-Demir/portfolio.git](https://github.com/this-Demir/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    Ensure you have Node.js installed on your machine.
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This will start the local server, typically at `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    To create an optimized build for deployment:
    ```bash
    npm run build
    ```

## License

This project is open source and available under the MIT License.