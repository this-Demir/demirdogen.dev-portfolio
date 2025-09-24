import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative text-cool-gray hover:text-ui-blue transition-all duration-300 glow-on-hover p-2 rounded-lg hover:bg-deep-blue/30"
      aria-label={t('accessibility.toggleLanguage')}
    >
      <div className="flex items-center gap-1">
        <Languages className="h-5 w-5 lg:h-6 lg:w-6 group-hover:animate-bounce-subtle" />
        <span className="text-xs font-bold uppercase">
          {language}
        </span>
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {language === 'en' ? 'Türkçe' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;