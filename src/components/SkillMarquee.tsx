import React from 'react';
import type { SkillLogoItem } from '../pages/Index'; 

interface SkillMarqueeProps {
  items: SkillLogoItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
}

const SkillMarquee = ({ items, direction = 'left', speed = 'normal' }: SkillMarqueeProps) => {
  const doubledItems = [...items, ...items];

  return (
    <div className="group relative flex overflow-hidden p-2">
      {/* Sol ve sağ kenardaki karartma efekti */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      <div 
        className={`flex min-w-full shrink-0 gap-8 py-4 animate-scroll ${
          direction === 'right' ? 'direction-reverse' : ''
        }`}
        style={{
            animationDuration: speed === 'normal' ? '40s' : speed === 'fast' ? '20s' : '60s',
            animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {doubledItems.map((item, idx) => (
          <a
            key={`${item.name}-${idx}`}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 transition-all duration-300 hover:scale-110 hover:text-ui-blue px-4 group/item"
            title={item.name}
          >
            {/* Logo Görseli */}
            <div className="h-8 w-8 flex items-center justify-center">
               <img 
                 src={item.icon} 
                 alt={item.name}
                 loading="lazy"
                 decoding="async"
                 className="h-full w-full object-contain transition-all duration-300"
                 onError={(e) => {
                    e.currentTarget.style.display = 'none';
                 }}
               />
            </div>
            
            {/* Teknoloji İsmi */}
            <span className="text-sm font-medium hidden md:block whitespace-nowrap text-cool-gray group-hover/item:text-pearl transition-colors">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;