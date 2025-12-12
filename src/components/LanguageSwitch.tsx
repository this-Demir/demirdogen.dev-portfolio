import { Languages } from 'lucide-react';
import React from 'react';

type Lang = 'en' | 'tr';

interface Props {
  value: Lang;
  onChange: (lang: Lang) => void;
  className?: string;
}

const LanguageSwitch: React.FC<Props> = ({ value, onChange, className = '' }) => {
  const next = value === 'en' ? 'tr' : 'en';
  const label = value === 'en' ? 'Switch to Turkish' : 'Switch to English';

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={label}
      aria-pressed={value === 'tr'}
      className={`
        group relative p-2 rounded-lg transition-all
        text-ui-purple/70 hover:text-ui-purple
        hover:bg-ui-purple/10 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ui-purple/40
        ${className}
      `}
    >
      <Languages className="h-6 w-6 group-hover:animate-bounce-subtle" aria-hidden="true" />
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2
                   text-xs font-medium opacity-0 group-hover:opacity-100
                   transition-opacity whitespace-nowrap"
      >
        {value.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSwitch;