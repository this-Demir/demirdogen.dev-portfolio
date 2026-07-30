import { Sun, Moon } from 'lucide-react';

type ThemeMode = 'light' | 'dark';

interface ThemeSwitchProps {
  value: ThemeMode;
  onChange: (value: ThemeMode) => void;
}

const ThemeSwitch = ({ value, onChange }: ThemeSwitchProps) => {
  const isDark = value === 'dark';

  return (
    <button
      type="button"
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="rounded p-2 text-subtle transition-colors hover:text-foreground"
    >
      {isDark ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeSwitch;
