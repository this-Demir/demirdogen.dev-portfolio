import { Sun, Moon } from 'lucide-react';
import React from 'react';

type ThemeMode = 'light' | 'dark';

interface Props {
  value: ThemeMode;
  onChange: (v: ThemeMode) => void;
  className?: string;
}

/** Sosyal ikonlarla aynı vibe: tek ikon buton (mora yakın hafif vurgu) */
export default function ThemeSwitch({ value, onChange, className }: Props) {
  const next = value === 'dark' ? 'light' : 'dark';
  const label = value === 'dark' ? 'Switch to Light' : 'Switch to Dark';

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={label}
      aria-pressed={value === 'dark'}
      className={`
        group relative p-2 rounded-lg transition-all
        text-ui-purple/70 hover:text-ui-purple
        hover:bg-ui-purple/10 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ui-purple/40
        ${className ?? ''}
      `}
    >
      {value === 'dark' ? (
        <Moon className="h-6 w-6 group-hover:animate-bounce-subtle" aria-hidden="true" />
      ) : (
        <Sun className="h-6 w-6 group-hover:animate-bounce-subtle" aria-hidden="true" />
      )}
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2
                   text-xs font-medium opacity-0 group-hover:opacity-100
                   transition-opacity whitespace-nowrap"
      >
        {value === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
