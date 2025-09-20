import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import MouseFlashlight from './MouseFlashlight';
import PersonalizedHeader from './PersonalizedHeader';

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
    <div className="min-h-screen bg-midnight font-sans text-snow relative overflow-x-hidden">
      <MouseFlashlight />
      
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ui-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ui-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Skip to content link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ui-blue text-midnight px-4 py-2 rounded-lg z-50 font-medium animate-scale-in"
      >
        Skip to Content
      </a>

      {/* Centered Container */}
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:overflow-hidden py-6 md:py-12 lg:py-24">
            <div className="lg:max-w-md space-y-8 lg:flex-1 lg:flex lg:flex-col lg:justify-between">
              {/* Personalized Header */}
              <div className="animate-fade-in-up">
                <PersonalizedHeader />
              </div>

              {/* Enhanced Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-8 w-max">
                  {[
                    { id: 'about', label: 'About' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'writing', label: 'Skills' }
                  ].map(({ id, label }, index) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-deep-blue/50 ${
                          activeSection === id ? 'active bg-deep-blue/30' : ''
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px bg-cool-gray transition-all duration-300 group-hover:w-8 group-hover:bg-ui-blue ${
                            activeSection === id
                              ? 'w-8 bg-ui-blue'
                              : 'w-4 group-focus-visible:w-8 group-focus-visible:bg-ui-blue'
                          }`}
                        ></span>
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

              {/* Enhanced Social Links */}
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/this-Demir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6 lg:h-7 lg:w-7 group-hover:animate-bounce-subtle" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      View Projects
                    </span>
                  </a>
                  
                  {/* Custom link to YU-Sync */}
                  <a
                    href="https://yu-sync.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-cool-gray hover:text-ui-purple transition-all duration-300 glow-on-hover px-3 py-2 rounded-lg hover:bg-deep-blue/30 text-sm font-medium"
                    aria-label="YU-Sync Project"
                  >
                    YU-Sync
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Live Project
                    </span>
                  </a>
                </div>
                
                {/* Contact info */}
                <div className="mt-8 text-sm text-cool-gray">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ui-blue rounded-full animate-pulse"></span>
                    Available for exciting opportunities
                  </p>
                </div>
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