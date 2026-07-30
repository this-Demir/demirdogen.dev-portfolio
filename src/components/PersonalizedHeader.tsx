import { MapPin, Code2 } from 'lucide-react';
import { useLanguage } from '../context/language';

const PersonalizedHeader = () => {
  const { t } = useLanguage();

  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <a href="/" className="transition-colors hover:text-accent">
          Demir Demirdöğen
        </a>
      </h1>

      <p className="mt-3 text-lg font-medium text-muted">{t.hero.role}</p>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-subtle">
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          {t.hero.location}
        </li>
        <li className="flex items-center gap-2">
          <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          {t.hero.techStack}
        </li>
      </ul>
    </header>
  );
};

export default PersonalizedHeader;
