import React from 'react';

type Lang = 'en' | 'tr';

interface Props {
  value: Lang;
  onChange: (lang: Lang) => void;
  className?: string;
}

const LanguageSwitch: React.FC<Props> = ({ value, onChange, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center rounded-lg border border-steel-blue/40 bg-midnight/50 p-0.5 ${className}`}
      role="group"
      aria-label="Language switch"
    >
      {(['en', 'tr'] as Lang[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          data-active={value === lang}
          className="
            px-2.5 py-1 text-xs font-medium tracking-wide rounded-md transition-all
            text-cool-gray hover:text-pearl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-blue/60
            data-[active=true]:bg-deep-blue/40 data-[active=true]:text-pearl
          "
          aria-pressed={value === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
