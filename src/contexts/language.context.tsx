import { ReactNode, createContext, useContext, useState } from "react";
import { getTexts, Texts } from "../utils/texts";

interface LanguageContextType {
  language: string;
  texts: Texts;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState(() => {
    // Primeiro verifica se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || navigator.language;
  });
  
  const texts = getTexts(language);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}