import { useEffect, useRef, useState } from 'react';
import { Github, FileDown } from 'lucide-react';
import MouseFlashlight from './MouseFlashlight';
import PersonalizedHeader from './PersonalizedHeader';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

// PDF asset
import cvPdf from '../assets/cv/Demir-Demirdogen-CV.pdf';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState('about');
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const userThemeChosenRef = useRef(false); // kullanıcı manuel tema seçti mi?

  // Dil: storage yoksa system locale'den
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    let initial: 'en' | 'tr';
    if (saved === 'en' || saved === 'tr') {
      initial = saved;
    } else {
      const nav = (navigator.language || 'en').toLowerCase();
      initial = nav.startsWith('tr') ? 'tr' : 'en';
    }
    setLang(initial);
    document.documentElement.lang = initial;
    document.documentElement.setAttribute('data-lang', initial);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  // Tema: storage yoksa system theme'den; kullanıcı seçene kadar system değişimine senkron
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    let initial: 'light' | 'dark';
    if (saved === 'light' || saved === 'dark') {
      initial = saved;
      userThemeChosenRef.current = true;
    } else {
      initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(initial);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (!userThemeChosenRef.current) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

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
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
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
                    { id: 'about', label: 'About' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'writing', label: 'Skills' },
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-deep-blue/50 ${
                          activeSection === id ? 'active bg-deep-blue/30' : ''
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px bg-cool-gray transition-all duration-300 group-hover:w-16 group-hover:bg-ui-blue ${
                            activeSection === id
                              ? 'w-16 bg-ui-blue'
                              : 'w-8 group-focus-visible:w-16 group-focus-visible:bg-ui-blue'
                          }`}
                        />
                        <span
                          className={`nav-text text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                            activeSection === id
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
              <div className="flex items-center gap-6 flex-wrap">
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

                {/* Email */}
                <a
                  href="mailto:demirdemirdogen@gmail.com"
                  className="group relative text-cool-gray hover:text-ui-teal transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="Email Contact"
                >
                  <svg className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Contact Me
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
                <LanguageSwitch value={lang} onChange={setLang} />
                <ThemeSwitch value={theme} onChange={handleThemeChange} />
              </div>

              {/* Availability + Email */}
              
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 py-6 md:py-12 lg:py-24">
            <main id="content">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
