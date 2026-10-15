import { MapPin } from 'lucide-react';
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

      <p className="mt-5 flex items-center gap-2 text-sm text-subtle">
        <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t.hero.location}
      </p>
    </header>
  );
};

export default PersonalizedHeader;
