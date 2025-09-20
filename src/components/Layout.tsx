import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

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
    <div className="min-h-screen bg-navy font-sans text-lightest-slate">
      {/* Skip to content link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green text-navy px-4 py-2 rounded z-50"
      >
        Skip to Content
      </a>

      <div className="lg:flex">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 px-6 md:px-12 lg:px-24">
          <div>
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-4xl font-bold sm:text-5xl">
                <a href="/" className="group">
                  Brittany Chiang
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium text-slate sm:text-xl">
                Front End Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
            </div>

            {/* Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'writing', label: 'Writing' }
                ].map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`group flex items-center py-3 ${
                        activeSection === id ? 'active' : ''
                      }`}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightest-slate ${
                          activeSection === id
                            ? 'w-16 bg-lightest-slate'
                            : 'group-focus-visible:w-16 group-focus-visible:bg-lightest-slate'
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
          </div>

          {/* Social Links */}
          <div className="mt-16 flex items-center space-x-5">
            <a
              href="https://github.com/bchiang7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-lightest-slate transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bchiang7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-lightest-slate transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://codepen.io/bchiang7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-lightest-slate transition-colors"
              aria-label="CodePen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22,8.5 12,15.5 2,8.5"></polyline>
                <polyline points="2,15.5 12,8.5 22,15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bchiang7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-lightest-slate transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.goodreads.com/user/show/53158614-brittany-chiang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-lightest-slate transition-colors"
              aria-label="Goodreads"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24 px-6 md:px-12 lg:px-24">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;