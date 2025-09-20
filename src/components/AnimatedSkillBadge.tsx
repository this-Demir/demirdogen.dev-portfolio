import { useState } from 'react';

interface AnimatedSkillBadgeProps {
  skill: string;
  category: 'frontend' | 'backend' | 'java' | 'testing' | 'tools' | 'languages';
  delay?: number;
}

const categoryColors = {
  frontend: 'from-ui-blue to-ui-teal',
  backend: 'from-ui-purple to-ui-blue',
  java: 'from-ui-teal to-ui-purple',
  testing: 'from-ui-blue via-ui-purple to-ui-teal',
  tools: 'from-ui-purple to-ui-teal',
  languages: 'from-ui-teal to-ui-blue'
};

const AnimatedSkillBadge = ({ skill, category, delay = 0 }: AnimatedSkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span 
      className={`
        inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium
        bg-gradient-to-r ${categoryColors[category]}
        text-midnight
        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg
        animate-scale-in
        ${isHovered ? 'animate-glow-pulse' : ''}
        glow-on-hover
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        background: isHovered 
          ? `linear-gradient(135deg, hsl(var(--${categoryColors[category].split(' ')[1]})), hsl(var(--${categoryColors[category].split(' ')[3]})))`
          : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {skill}
    </span>
  );
};

export default AnimatedSkillBadge;