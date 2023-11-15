// languageUtils.js

import translationsPL from './pl.json';
import translationsEN from './en.json';
import translationsCZ from './cz.json';
import translationsDE from './de.json';

const translations = {
  pl: translationsPL,
  en: translationsEN,
  rus: translationsCZ,
  de: translationsDE,
};

export function changeLanguage (newLanguage) {
  localStorage.setItem('selectedLanguage', newLanguage);
};

export function getTranslation(key, lang) {
  return translations[lang][key] || key;
}

export const getValidationMessages = (lang) => {
  return {
    emailInvalid: getTranslation('emailInvalid', lang),
    // inne komunikaty...
  };
};
