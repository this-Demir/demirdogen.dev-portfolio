import type { Config } from "tailwindcss";

export default {
  // Works with either: <html class="dark"> or <html data-theme="dark">
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /**
         * Semantic tokens. Every value is defined once in src/index.css and
         * flipped per theme there — never hard-code a hex or a raw hsl() in a
         * component.
         */
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        subtle: "hsl(var(--subtle) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",

        // shadcn/ui primitives (toaster, tooltip, sonner) resolve against these.
        input: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--accent) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--background) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        /**
         * System UI stack — no webfont request, no layout shift, and it renders
         * as the reader's native interface font on every platform.
         */
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(0.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        /**
         * Shifts one track fully off-screen plus the 2rem gap separating it
         * from its duplicate, so the duplicate lands exactly where the first
         * started and the loop is seamless.
         */
        marquee: {
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s var(--ease-out) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
} satisfies Config;
