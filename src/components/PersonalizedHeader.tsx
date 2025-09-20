import { useState, useEffect } from 'react';
import { Code2, Coffee, Globe } from 'lucide-react';

const PersonalizedHeader = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Engineering Student",
    "Full-Stack Developer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="space-y-6">
      {/* Name with gradient effect */}
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          <a href="/" className="group relative">
            <span className="text-gradient bg-gradient-to-r from-amber via-copper to-ember bg-300% animate-gradient-shift">
              Demir Demirdöğen
            </span>
          </a>
        </h1>
        
        {/* Animated role */}
        <div className="mt-4 h-8 overflow-hidden">
          <h2 
            key={currentRole}
            className="text-lg font-medium text-silver sm:text-xl lg:text-2xl animate-fade-in-up"
          >
            {roles[currentRole]}
          </h2>
        </div>
      </div>

      {/* Personal tagline with icons */}
      <div className="space-y-4">
        <p className="max-w-sm leading-relaxed text-cool-gray text-base lg:text-lg">
          Turning ideas into well-crafted digital experiences with{' '}
          <span className="text-amber font-medium">thoughtful design</span> and{' '}
          <span className="text-copper font-medium">reliable engineering</span>.
        </p>
        
        {/* Quick facts with icons */}
        <div className="flex flex-wrap gap-4 text-sm text-silver">
          <div className="flex items-center gap-2 group">
            <Globe className="h-4 w-4 text-amber group-hover:animate-bounce-subtle" />
            <span>Türkiye → World</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Code2 className="h-4 w-4 text-copper group-hover:animate-bounce-subtle" />
            <span>React • .NET • Java</span>
          </div>
          <div className="flex items-center gap-2 group">
            <Coffee className="h-4 w-4 text-ember group-hover:animate-bounce-subtle" />
            <span>Fueled by curiosity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedHeader;