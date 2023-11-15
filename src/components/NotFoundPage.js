import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import error404 from '../assets/Darth Vader.svg'
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const NotFoundPage = () => {
    const { currentLanguage } = useLanguage();
    return (
        <>
            <Header/>
            <section id='not_found_page' className='pages'>
                <h1>
                    {getTranslation('404_error', currentLanguage)}
                </h1>
                <img src={error404} alt="DarthVader" className='darth'/>
                <p>
                    You underestimate the power of the dark side!
                </p>
                <Link to='/'>
                    <button className='button'>
                        {getTranslation('404_error_turn', currentLanguage)}
                    </button>
                </Link>
            </section>
            <Footer/>
        </>
    )
}

export default NotFoundPage;