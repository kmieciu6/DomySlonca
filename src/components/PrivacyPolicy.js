import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const PrivacyPolicy = () => {
    const { currentLanguage } = useLanguage();
    return (
        <>
            <Header/>
            <section id='privacy_policy' className='pages'>
                <div className='info'>
                    <h1>
                        {getTranslation('terms', currentLanguage)}
                    </h1>
                    <p>
                        {getTranslation('terms_text1', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text2', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text3', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text4', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text5', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text6', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text7', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text8', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text9', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text10', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text11', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text12', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text13', currentLanguage)}
                    </p>
                    <h1>
                        {getTranslation('terms_text14', currentLanguage)}
                    </h1>
                    <p>
                        {getTranslation('terms_text15', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text16', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text17', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text18', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text19', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text20', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text21', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text22', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text23', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text24', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text25', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text26', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text27', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text28', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text29', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text30', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text31', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text32', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text33', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text34', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text35', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text36', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text37', currentLanguage)}
                        <br/>
                        <br/>
                        {getTranslation('terms_text38', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text39', currentLanguage)}
                        <br/>
                        {getTranslation('terms_text40', currentLanguage)}
                        <br/>
                        • <a href="http://www.support.microsoft.com/kb/278835/pl">Internet Explorer</a>
                        <br/>
                        • <a href="https://support.mozilla.org/pl/kb/ciasteczka">Mozilla Firefox</a>
                        <br/>
                        • <a href="https://support.google.com/chrome/answer/95647?hl=pl">Google Chrome</a>
                        <br/>
                        • <a href="https://support.apple.com/pl-pl/HT201265">Safari</a>
                        <br/>
                        • <a href="https://help.opera.com/pl/latest/web-preferences/">Opera</a>
                        <br/>
                        {getTranslation('terms_text41', currentLanguage)}
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default PrivacyPolicy;