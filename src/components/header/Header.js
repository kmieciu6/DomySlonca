import React from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/logo.png";
import ScrollTop from "./ScrollTop";
import Cookies from "../Cookies";
import { useLanguage } from "../translations/LanguageContext";
import { getTranslation } from "../translations/LanguageUtils";
import flag_poland from '../../assets/pl.svg'
import flag_england from '../../assets/gb.svg'
import flag_czech from '../../assets/cz.svg'
import flag_germany from '../../assets/de.svg'

const Header = () => {

    const { changeLanguage } = useLanguage();
    const { currentLanguage } = useLanguage();

    return (
        <section id='header'>
            <div className='container'>
                <Link to="/" className='title'>
                    <h3>
                        {getTranslation('logo', currentLanguage)}
                    </h3>
                    <img className='main_logo' src={logo} alt="Domy Słońca"/>
                </Link>
                <Nav/>
                <div className='nav_flags'>
                    <div>
                        <img onClick={() => changeLanguage('pl')} className="flag" alt="polski" src={flag_poland}/>
                        <img onClick={() => changeLanguage('en')} className="flag" alt="english" src={flag_england}/>
                        <img onClick={() => changeLanguage('rus')} className="flag" alt="čeština" src={flag_czech}/>
                        <img onClick={() => changeLanguage('de')} className="flag" alt="deutsch" src={flag_germany}/>
                    </div>
                </div>
            </div>
            <Cookies/>
            <ScrollTop/>
        </section>
    );
};

export default Header;