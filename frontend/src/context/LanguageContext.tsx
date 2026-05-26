import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import type { Locale } from '@/data/types';
import { content, type Content } from '@/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');

    if (savedLocale === 'en' || savedLocale === 'fr') {
      setLocaleState(savedLocale);
    }
  }, []);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    localStorage.setItem('locale', nextLocale);
  }

  function toggleLocale() {
    setLocale(locale === 'en' ? 'fr' : 'en');
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    toggleLocale,
    copy: content[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
