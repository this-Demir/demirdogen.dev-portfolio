import { useState } from 'react';
import techLogos from '../data/techLogos';

interface AnimatedSkillBadgeProps {
  skill: string;
  category: 'frontend' | 'backend' | 'java' | 'testing' | 'tools' | 'languages';
  delay?: number;
}

const categoryColors = {
  frontend: '--ui-blue',
  backend: '--ui-purple',
  java: '--ui-teal',
  testing: '--ui-blue',
  tools: '--ui-purple',
  languages: '--ui-teal'
};

const AnimatedSkillBadge = ({ skill, category, delay = 0 }: AnimatedSkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const accentHue = categoryColors[category];
  const logo = techLogos[skill];

  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-xl px-4 py-3
        bg-white text-midnight border
        cursor-pointer shadow-sm
        transition-all duration-300 ease-out
        hover:scale-105
        animate-scale-in
        ${isHovered ? 'animate-glow-pulse' : ''}
        glow-on-hover
        min-h-[3.5rem] min-w-[3.5rem]
        relative overflow-hidden
      `}
      style={{
        animationDelay: `${delay}ms`,
        borderColor: `hsl(var(${accentHue}) / ${isHovered ? '0.35' : '0.2'})`,
        boxShadow: isHovered
          ? `0 16px 32px hsl(var(${accentHue}) / 0.22)`
          : `0 8px 20px hsl(var(${accentHue}) / 0.14)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`
          flex h-12 w-12 items-center justify-center rounded-lg
          text-midnight transition-all duration-300
        `}
      >
        {logo ? (
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-8 object-contain drop-shadow-sm"
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-semibold text-midnight">{skill.charAt(0)}</span>
        )}
      </span>
    </span>
  );
};

export default AnimatedSkillBadge;