import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('pl');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        const initialLanguage = storedLanguage || 'pl';
        setCurrentLanguage(initialLanguage);
    }, []);

    const changeLanguage = (newLanguage) => {
        localStorage.setItem('selectedLanguage', newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
