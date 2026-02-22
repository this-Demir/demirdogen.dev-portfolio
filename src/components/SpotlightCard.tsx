import { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = '' }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    if (!isDesktop) return;
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    if (!isDesktop) return;
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (!isDesktop) return;
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          opacity: isDesktop ? opacity : 0,
          background: isDesktop ? `radial-gradient(37.5rem circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.1), transparent 40%)` : 'none',
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;