import React from "react";
import Header from './header/Header';
import Opening from "./Opening";
import Video from "./Video";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const Home = () => {
    const { currentLanguage } = useLanguage();
    return (
        <>
            <Header/>
            <Opening/>
            <section id='home'>
                <div className='home_info'>
                    <h2> 
                        {getTranslation('welcome', currentLanguage)}
                    </h2>
                    
                    <div className='home_text'>
                        <h3> 
                            {getTranslation('read_night', currentLanguage)}
                        </h3>
                        <p>
                            <br/>
                            {getTranslation('home_text1', currentLanguage)}
                            <br/>
                            <br/>
                            {getTranslation('home_text2', currentLanguage)}
                            <br/>
                            <br/>
                            {getTranslation('home_text3', currentLanguage)}
                        </p>
                        <h3>
                            {getTranslation('home_text4', currentLanguage)}
                        </h3>
                        <Link className='button'
                              onClick={() => {
                                  window.open('https://www.google.com/maps/@50.4174915,16.6665408,3a,85.7y,45.21h,92.7t/data=!3m7!1e1!3m5!1sAF1QipOyj0dmw2a5jIm4x6miu7wfVCITZ1v9qXfbA9QQ!2e10!3e12!7i6528!8i3264?entry=ttu', '_blank', 'noreferrer')
                              }}>
                            {getTranslation('look', currentLanguage)}
                        </Link>
                        <br/>
                        <br/>

                        <h3>
                            {getTranslation('home_text5', currentLanguage)}
                        </h3>
                        <Link className='button'
                              onClick={() => {
                                  window.open('http://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                              }}>
                            {getTranslation('book_now', currentLanguage)}
                        </Link>
                    </div>
                    <Video embedId="09_niRBvLPc"/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;