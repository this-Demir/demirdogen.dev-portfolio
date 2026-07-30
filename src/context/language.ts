import { createContext, useContext } from 'react';
import type { Dictionary, LangType } from '../data/content';

export interface LanguageContextValue {
  lang: LangType;
  setLang: (lang: LangType) => void;
  /** Translations for the active language. */
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
