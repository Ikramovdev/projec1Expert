import { useState, useEffect } from 'react';

export function useTranslation() {
  const [language, setLanguage] = useState('uz');
  const [translations, setTranslations] = useState({});
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        if (language !== 'uz' && language !== 'ru') {
          console.warn(`Unsupported language: ${language}`);
          return;
        }
        const response = await import(`../translations/Dashboard/${language}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(`Error loading translations for ${language}:`, error);
        setTranslations({});
      }
    };
    
    loadTranslations();
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (!value || value[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };

  return { t, language, setLanguage };
}
