import React, { createContext, useContext, useEffect, useState } from 'react';
import { content, LangType } from '../data/content';

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: typeof content['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<LangType>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'tr') {
      setLang(saved);
    } else {
      const nav = (navigator.language || 'en').toLowerCase();
      setLang(nav.startsWith('tr') ? 'tr' : 'en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: content[lang]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};