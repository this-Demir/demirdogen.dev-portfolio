import { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react';
import PersonalizedHeader from './PersonalizedHeader';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';
import { useLanguage } from '../context/language';

const GITHUB_URL = 'https://github.com/this-Demir';
const LINKEDIN_URL = 'https://www.linkedin.com/in/demir-demirdöğen-46604a1a0/';

/** Section ids in document order, paired with their mobile-nav icon. */
const SECTIONS = [
  { id: 'about', icon: User },
  { id: 'experience', icon: Briefcase },
  { id: 'projects', icon: Code2 },
  { id: 'education', icon: GraduationCap },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // Dark is the default; an explicit choice is remembered across visits.
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof localStorage === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        }),
      { threshold: 0.3 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLabels: Record<SectionId, string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    education: t.nav.education,
  };

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a
        href="#content"
        className="sr-only rounded bg-accent px-4 py-2 font-medium text-[hsl(var(--accent-foreground))] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="lg:flex lg:gap-16">
          {/* Sidebar: sticky on desktop, static header on mobile */}
          <div className="py-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-20">
            <div>
              <PersonalizedHeader />

              <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
                <ul className="space-y-1">
                  {SECTIONS.map(({ id }) => {
                    const isActive = activeSection === id;
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(id)}
                          aria-current={isActive ? 'true' : undefined}
                          className="group flex items-center gap-4 py-2"
                        >
                          <span
                            className={`h-px transition-all duration-200 ${
                              isActive
                                ? 'w-12 bg-accent'
                                : 'w-6 bg-subtle group-hover:w-12 group-hover:bg-foreground'
                            }`}
                          />
                          <span
                            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                              isActive
                                ? 'text-accent'
                                : 'text-subtle group-hover:text-foreground'
                            }`}
                          >
                            {navLabels[id]}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="mt-10 hidden items-center gap-1 lg:flex">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded p-2 text-subtle transition-colors hover:text-foreground"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded p-2 text-subtle transition-colors hover:text-foreground"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <LanguageSwitch value={lang} onChange={setLang} />
              <ThemeSwitch value={theme} onChange={setTheme} />
            </div>
          </div>

          <div className="pb-28 lg:w-[55%] lg:py-20 lg:pb-20">
            <main id="content">{children}</main>
          </div>
        </div>
      </div>

      {/* Mobile section nav */}
      <nav
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-around rounded-full border border-border bg-surface/90 px-2 py-2 backdrop-blur lg:hidden"
        aria-label="Section navigation"
      >
        {SECTIONS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            aria-label={navLabels[id]}
            aria-current={activeSection === id ? 'true' : undefined}
            className={`rounded-full p-2.5 transition-colors ${
              activeSection === id ? 'text-accent' : 'text-subtle'
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        ))}
      </nav>

      {/* Mobile utility menu */}
      <div className="fixed bottom-24 right-4 z-40 flex flex-col-reverse items-center gap-2 lg:hidden">
        <button
          type="button"
          onClick={() => setIsActionMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-transform active:scale-95"
          aria-label={isActionMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isActionMenuOpen}
        >
          {isActionMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>

        <div
          className={`flex flex-col items-center gap-2 transition-all duration-200 ${
            isActionMenuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible translate-y-2 opacity-0'
          }`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface">
            <ThemeSwitch value={theme} onChange={setTheme} />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface">
            <LanguageSwitch value={lang} onChange={setLang} />
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-subtle transition-colors hover:text-foreground"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-subtle transition-colors hover:text-foreground"
            aria-label="GitHub profile"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
