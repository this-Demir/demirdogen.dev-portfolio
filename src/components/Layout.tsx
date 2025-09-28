import { useState, useEffect } from 'react';
import { Github, FileDown, Globe } from 'lucide-react'; // ← Globe added
import MouseFlashlight from './MouseFlashlight';
import PersonalizedHeader from './PersonalizedHeader';
import LanguageSwitch from './LanguageSwitch';

// PDF asset
import cvPdf from '../assets/cv/Demir-Demirdogen-CV.pdf';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState('about');
  const [lang, setLang] = useState<'en' | 'tr'>('en');

  // dil tercihlerini yükle
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    const initial = saved === 'tr' || saved === 'en' ? saved : 'en';
    setLang(initial as 'en' | 'tr');
    document.documentElement.lang = initial;
    document.documentElement.setAttribute('data-lang', initial);
  }, []);

  // dil değişince kalıcılaştır
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
      },
      { threshold: 0.3 }
    );
    ['about', 'experience', 'projects', 'writing'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // İlk yüklemede mouse ışığını ismin üstüne taşı
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
    <div className="min-h-screen bg-midnight font-sans text-snow relative">
      {/* Mouse spotlight */}
      <MouseFlashlight />

      {/* Skip to content link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ui-blue text-midnight px-4 py-2 rounded-lg z-50 font-medium animate-scale-in"
      >
        Skip to Content
      </a>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="lg:flex lg:gap-8">
          {/* Left Sidebar - Sticky */}
          <div className="lg:sticky lg:top-0 lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-between py-6 md:py-12 lg:py-24">
            <div className="space-y-8">
              {/* Header */}
              <div className="animate-fade-in-up" id="hero-name-anchor">
                <PersonalizedHeader />
              </div>

              {/* Navigation + Site language (birlikte) */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
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
            <div className="mt-4 flex items-center gap-3" role="group" aria-label="Site language">
                  <Globe className="h-4 w-4 text-ui-purple opacity-90" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-cool-gray select-none">
                    language
                  </span>
                  <LanguageSwitch value={lang} onChange={setLang} className="opacity-90 hover:opacity-100" />
                </div>

            {/* Bottom Section */}
            <div className="mt-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {/* Social Logos */}
              <div className="flex items-center space-x-6">
                {/* GitHub */}
                <a
                  href="https://github.com/this-Demir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    View Projects
                  </span>
                </a>

                {/* Email quick action */}
                <a
                  href="mailto:demirdemirdogen@gmail.com"
                  className="group relative text-cool-gray hover:text-ui-teal transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="Email Contact"
                >
                  <svg className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Contact Me
                  </span>
                </a>

                {/* CV Download */}
                <a
                  href={cvPdf}
                  download="Demir-Demirdogen-CV.pdf"
                  className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="Download CV (PDF)"
                >
                  <FileDown className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Download CV
                  </span>
                </a>

                {/* YU-Sync */}
                <a
                  href="https://yu-sync.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-cool-gray hover:text-ui-purple transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                  aria-label="YU-Sync Project"
                >
                  <img
                    src="/src/assets/yu-sync-logo.png"
                    alt="YU-Sync Logo"
                    className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle"
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Live Project
                  </span>
                </a>
              </div>

              {/* Availability + Email */}
              <div className="mt-8 text-sm text-cool-gray">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 flex items-center justify-center">
                    <span className="w-2 h-2 bg-ui-blue rounded-full animate-pulse" />
                  </span>
                  <span>Available for exciting opportunities</span>
                </div>

                <a
                  href="mailto:demirdemirdogen@gmail.com"
                  className="mt-2 flex items-center gap-2 hover:text-ui-teal focus-visible:text-ui-teal transition-colors duration-300"
                  aria-label="Send email to demirdemirdogen@gmail.com"
                >
                  <span className="h-4 w-4 flex items-center justify-center">
                    <svg className="h-4 w-4 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <span className="text-sm text-cool-gray">demirdemirdogen@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-1/2 py-6 md:py-12 lg:py-24">
            <main id="content">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
