import { useState } from 'react';
import { Heart, Users } from 'lucide-react';

interface VolunteerBadgeProps {
  type: 'volunteer' | 'users';
  delay?: number;
}

const VolunteerBadge = ({ type, delay = 0 }: VolunteerBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const badges = {
    volunteer: {
      icon: <Heart className="h-4 w-4" />,
      tooltip: 'Volunteer made for Yaşar University students to generate schedules easily',
      gradient: 'from-ui-blue to-ui-purple'
    },
    users: {
      icon: <Users className="h-4 w-4" />,
      tooltip: '6000 students and 14000 page views during enrollment time',
      gradient: 'from-ui-purple to-ui-teal'
    }
  };

  const badge = badges[type];
  
  return (
    <div className="relative">
      <span 
        className={`
          inline-flex items-center justify-center rounded-full w-8 h-8
          bg-gradient-to-r ${badge.gradient}
          text-midnight
          cursor-pointer
          transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-lg
          animate-scale-in
          ${isHovered ? 'shadow-lg ring-2 ring-ui-blue/20' : ''}
          glow-on-hover
        `}
        style={{ 
          animationDelay: `${delay}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {badge.icon}
      </span>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 animate-fade-in">
          <div className="bg-deep-blue/95 text-silver text-xs rounded-lg px-3 py-2 max-w-xs text-center border border-ui-blue/30 backdrop-blur-sm shadow-xl">
            {badge.tooltip}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-deep-blue/95"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerBadge;