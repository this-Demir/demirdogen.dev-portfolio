import { useEffect, useMemo, useState } from 'react';
import { content, type LangType } from '../data/content';
import { LanguageContext } from './language';

const STORAGE_KEY = 'lang';

/** A stored choice wins; otherwise Turkish browsers get Turkish and everyone else English. */
const resolveInitialLang = (): LangType => {
  if (typeof window === 'undefined') return 'en';

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'tr') return saved;

  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<LangType>(resolveInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
