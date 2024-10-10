import CookieConsent from "react-cookie-consent";
import {Link} from "react-router-dom";
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const Cookies = () => {
    const { currentLanguage } = useLanguage();
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText={getTranslation('understand_and_accept', currentLanguage)}
                cookieName="myAwesomeCookieName2"
                style={{background: "#2B373B", opacity: .9}}
                buttonStyle={{background: "orange", color: "black", fontSize: "17px", padding: '0.6rem 1rem'}}
                expires={150}
            >
                {getTranslation('cookie1', currentLanguage)}
                <br/>
                {getTranslation('cookie2', currentLanguage)}
                {" "}
                <Link to="/privacy_policy"
                      className='terms_cookies'
                      onClick={() => {
                          window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                          });
                      }}>
                    {getTranslation('cookie_policy', currentLanguage)}
                </Link>
            </CookieConsent>
        </>
    )
}

export default Cookies;