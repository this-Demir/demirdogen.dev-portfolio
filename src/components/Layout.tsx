import { useEffect, useRef, useState } from 'react';
import { Github, FileDown, User, Briefcase, Code2, Wrench, Menu, X, Linkedin } from 'lucide-react';
import MouseFlashlight from './MouseFlashlight';
import PersonalizedHeader from './PersonalizedHeader';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';
import { useLanguage } from '../context/LanguageContext';

// PDF asset
import cvPdf from '../assets/cv/Demir-Demirdogen-CV.pdf';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  // Context hook kullanımı
  const { lang, setLang, t } = useLanguage();

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const userThemeChosenRef = useRef(false); // kullanıcı manuel tema seçti mi?

  // Theme initialization: Strictly default to 'dark'
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      userThemeChosenRef.current = true;
    } else {
      setTheme('dark'); // Force dark mode as default
    }
  }, []);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (v: 'light' | 'dark') => {
    userThemeChosenRef.current = true;
    setTheme(v);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.3 }
    );
    ['about', 'experience', 'projects', 'writing'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Mouse ışığını ismin üstüne taşı
  useEffect(() => {
    const t = setTimeout(() => {
      const anchor = document.getElementById('hero-name-anchor');
      if (!anchor) return;
      const r = anchor.getBoundingClientRect();
      const ev = new MouseEvent('mousemove', {
        clientX: r.left + r.width / 2,
        clientY: r.top + r.height / 2,
        bubbles: true,
      });
      window.dispatchEvent(ev);
      document.dispatchEvent(ev);
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <MouseFlashlight />



      {/* Skip to content */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ui-blue text-midnight px-4 py-2 rounded-lg z-50 font-medium animate-scale-in"
      >
        Skip to Content
      </a>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="lg:flex lg:gap-8">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-0 lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-between py-6 md:py-12 lg:py-24">
            <div className="space-y-6">
              <div className="animate-fade-in-up" id="hero-name-anchor">
                <PersonalizedHeader />
              </div>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-12 w-max">
                  {[
                    { id: 'about', label: t.nav.about },
                    { id: 'experience', label: t.nav.experience },
                    { id: 'projects', label: t.nav.projects },
                    { id: 'writing', label: t.nav.skills },
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-deep-blue/50 ${activeSection === id ? 'active bg-deep-blue/30' : ''
                          }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px bg-cool-gray transition-all duration-300 group-hover:w-16 group-hover:bg-ui-blue ${activeSection === id
                            ? 'w-16 bg-ui-blue'
                            : 'w-8 group-focus-visible:w-16 group-focus-visible:bg-ui-blue'
                            }`}
                        />
                        <span
                          className={`nav-text text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeSection === id
                            ? 'text-ui-blue'
                            : 'text-cool-gray group-hover:text-ui-blue group-focus-visible:text-ui-blue'
                            }`}
                        >
                          {label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom: Sosyal + (Dil/Tema) yan yana, sağa yaslanmadan */}
            <div className="mt-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="hidden lg:flex items-center gap-6 flex-wrap">
                {/* GitHub */}
                <a
                  href="https://github.com/this-Demir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    View Projects
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/demir-demirdöğen-46604a1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                {/* CV */}
                <a
                  href={cvPdf}
                  download="Demir-Demirdogen-CV.pdf"
                  className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="Download CV (PDF)"
                >
                  <FileDown className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Download CV
                  </span>
                </a>

                {/* Dil & Tema — aynı satır, çok hafif mor vurgu */}
                <div className="hidden lg:flex items-center gap-3">
                  <LanguageSwitch value={lang} onChange={setLang} />
                  <ThemeSwitch value={theme} onChange={handleThemeChange} />
                </div>
              </div>

              {/* Availability + Email */}

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 pt-6 pb-28 md:pt-12 md:pb-28 lg:py-24">
            <main id="content">{children}</main>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-4 left-4 right-4 z-50 lg:hidden bg-midnight/80 backdrop-blur-lg border border-steel-blue/30 rounded-full px-6 py-3 shadow-lg flex items-center justify-between">
        <button
          onClick={() => scrollToSection('about')}
          className={`p-2 transition-colors ${activeSection === 'about' ? 'text-ui-blue' : 'text-cool-gray'}`}
          aria-label={t.nav.about}
        >
          <User className="h-6 w-6" />
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className={`p-2 transition-colors ${activeSection === 'experience' ? 'text-ui-blue' : 'text-cool-gray'}`}
          aria-label={t.nav.experience}
        >
          <Briefcase className="h-6 w-6" />
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className={`p-2 transition-colors ${activeSection === 'projects' ? 'text-ui-blue' : 'text-cool-gray'}`}
          aria-label={t.nav.projects}
        >
          <Code2 className="h-6 w-6" />
        </button>
        <button
          onClick={() => scrollToSection('writing')}
          className={`p-2 transition-colors ${activeSection === 'writing' ? 'text-ui-blue' : 'text-cool-gray'}`}
          aria-label={t.nav.skills}
        >
          <Wrench className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Expandable Action Menu */}
      <div className="fixed bottom-24 right-4 z-50 flex flex-col-reverse items-end gap-3 lg:hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-ui-blue to-ui-purple text-white shadow-lg shadow-ui-blue/20 transition-transform active:scale-95 border border-white/20"
          aria-label="Toggle Menu"
          aria-expanded={isActionMenuOpen}
        >
          {isActionMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Action Items (Expanded) */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-300 origin-bottom ${isActionMenuOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-75 opacity-0 translate-y-8 pointer-events-none'
            }`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight/80 backdrop-blur-lg border border-steel-blue/40 shadow-xl">
            <ThemeSwitch value={theme} onChange={handleThemeChange} className="!p-1.5" />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight/80 backdrop-blur-lg border border-steel-blue/40 shadow-xl">
            <LanguageSwitch value={lang} onChange={setLang} className="!p-1.5" />
          </div>
          <a
            href={cvPdf}
            download="Demir-Demirdogen-CV.pdf"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight/80 backdrop-blur-lg border border-steel-blue/40 text-cool-gray hover:text-ui-blue shadow-xl transition-colors"
          >
            <FileDown className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/demir-demirdöğen-46604a1a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight/80 backdrop-blur-lg border border-steel-blue/40 text-cool-gray hover:text-ui-blue shadow-xl transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/this-Demir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight/80 backdrop-blur-lg border border-steel-blue/40 text-cool-gray hover:text-ui-purple shadow-xl transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;