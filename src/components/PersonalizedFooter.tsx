import { Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // Hook eklendi

const PersonalizedFooter = () => {
  const { t } = useLanguage(); // Dil desteği çağrıldı

  return (
    <footer className="mt-16 py-8 border-t border-ocean-blue/30">
      <div className="text-center space-y-4">
        
        {/* Tech stack */}
        <div className="flex items-center justify-center gap-2 text-sm text-silver">
          <Zap className="h-3 w-3 text-copper" />
          <span>{t.footer.built}</span>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-cool-gray">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        
        {/* Easter egg & Design Credit */}
        <div className="mt-6 opacity-50 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-cool-gray font-mono">
            // TODO: Make the world a better place, one line of code at a time
          </p>
          <p className="text-xs text-cool-gray">
            {t.footer.design} <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-ui-blue">Brittany Chiang</a>. Not affiliated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PersonalizedFooter;