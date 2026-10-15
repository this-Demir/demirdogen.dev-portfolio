import type { LangType } from '../data/content';

interface LanguageSwitchProps {
  value: LangType;
  onChange: (lang: LangType) => void;
}

/**
 * Shows the language it switches to, not the current one: the page itself
 * already shows which language is active, and a button labelled with the
 * current language reads as "you are here" rather than as an action.
 */
const LanguageSwitch = ({ value, onChange }: LanguageSwitchProps) => {
  const next: LangType = value === 'en' ? 'tr' : 'en';
  const label = next === 'tr' ? 'Türkçe' : 'English';

  return (
    <button
      type="button"
      onClick={() => onChange(next)}
      aria-label={value === 'en' ? 'Switch to Turkish' : 'Switch to English'}
      title={label}
      className="rounded px-2 py-2 text-xs font-semibold uppercase tracking-wider text-subtle transition-colors hover:text-foreground"
    >
      <span lang={next}>{next}</span>
    </button>
  );
};

export default LanguageSwitch;
