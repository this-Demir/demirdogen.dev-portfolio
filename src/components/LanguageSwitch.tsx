import type { LangType } from '../data/content';

interface LanguageSwitchProps {
  value: LangType;
  onChange: (lang: LangType) => void;
}

const LanguageSwitch = ({ value, onChange }: LanguageSwitchProps) => {
  const next: LangType = value === 'en' ? 'tr' : 'en';

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={value === 'en' ? 'Switch to Turkish' : 'Switch to English'}
      className="rounded px-2 py-2 text-xs font-semibold uppercase tracking-wider text-subtle transition-colors hover:text-foreground"
    >
      {value}
    </button>
  );
};

export default LanguageSwitch;
