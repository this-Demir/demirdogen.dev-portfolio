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
      icon: <Heart className="h-3 w-3" />,
      text: 'Volunteer Made',
      tooltip: 'Volunteer made for Yaşar University students to generate schedules easily',
      gradient: 'from-red-400 to-pink-500'
    },
    users: {
      icon: <Users className="h-3 w-3" />,
      text: '6000+ Users',
      tooltip: '6000 students and 14000 page views during enrollment time',
      gradient: 'from-green-400 to-emerald-500'
    }
  };

  const badge = badges[type];
  
  return (
    <div className="relative">
      <span 
        className={`
          inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium
          bg-gradient-to-r ${badge.gradient}
          text-white
          cursor-pointer
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-lg
          animate-scale-in
          ${isHovered ? 'animate-glow-pulse' : ''}
          glow-on-hover
        `}
        style={{ 
          animationDelay: `${delay}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {badge.icon}
        {badge.text}
      </span>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 animate-fade-in-up">
          <div className="bg-midnight/95 text-silver text-xs rounded-lg px-3 py-2 max-w-xs text-center border border-steel-blue/30 backdrop-blur-sm">
            {badge.tooltip}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-midnight/95"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerBadge;