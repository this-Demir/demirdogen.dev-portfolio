import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import MouseFlashlight from './MouseFlashlight';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['about', 'experience', 'projects', 'writing'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy font-sans text-lightest-slate relative">
      <MouseFlashlight />
      {/* Skip to content link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green text-navy px-4 py-2 rounded z-50"
      >
        Skip to Content
      </a>

      {/* Centered Container */}
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar - Centered content */}
          <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-6 md:py-12 lg:py-24">
            <div className="lg:max-w-md">
              {/* Header */}
              <div className="mb-4 lg:mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <a href="/" className="group">
                    Demir Demirdöğen
                  </a>
                </h1>
                <h2 className="mt-2 text-base font-medium text-slate sm:text-lg lg:text-xl">
                  Software Engineering Student
                </h2>
                <p className="mt-3 max-w-xs leading-normal text-slate text-sm lg:text-base">
                  I enjoy turning ideas into useful, well-crafted products with clear problem framing and thoughtful UI/UX.
                </p>
              </div>

              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-4 lg:mt-8 w-max">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'writing', label: 'Skills' }
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`group flex items-center py-2 ${
                          activeSection === id ? 'active' : ''
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-3 h-px w-2 bg-slate transition-all group-hover:w-4 group-hover:bg-lightest-slate ${
                            activeSection === id
                              ? 'w-4 bg-lightest-slate'
                              : 'group-focus-visible:w-4 group-focus-visible:bg-lightest-slate'
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                            activeSection === id
                              ? 'text-lightest-slate'
                              : 'text-slate group-hover:text-lightest-slate group-focus-visible:text-lightest-slate'
                          }`}
                        >
                          {label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div className="mt-8 lg:mt-16 flex items-center space-x-3 lg:space-x-5">
                <a
                  href="https://github.com/this-Demir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-lightest-slate transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main id="content" className="pt-6 lg:w-1/2 lg:py-24">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;