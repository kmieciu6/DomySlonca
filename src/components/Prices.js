import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
// import bon from '../assets/bon.jpeg'
import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const Prices = () => {
    const { currentLanguage } = useLanguage();
    return (
        <>
            <Header/>
            <section id='prices' className='pages'>
                <h1>
                    {getTranslation('prices_title', currentLanguage)}
                </h1>
                <h3>
                    {getTranslation('prices_text1', currentLanguage)}
                </h3>
                <div className='price_text'>
                    <h5>
                        <b>
                        {getTranslation('prices_text2', currentLanguage)}
                        </b>
                    </h5>
                    <br/>
                    <div className='seasons price'>
                        <p>
                            {getTranslation('june', currentLanguage)} 
                            <FontAwesomeIcon icon={faArrowRightLong}/> 
                            {getTranslation('september', currentLanguage)}
                            <br/>
                            {getTranslation('december', currentLanguage)} 
                            <FontAwesomeIcon icon={faArrowRightLong}/> 
                            {getTranslation('february', currentLanguage)}
                            <br/>
                        </p>
                        <Link
                              onClick={() => {
                                  window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                              }}>
                            <FontAwesomeIcon icon={faCalendarDays} className='calendar first'/>
                        </Link>
                        <h4>
                            500 PLN /
                            {getTranslation('prices_day', currentLanguage)}
                        </h4>
                    </div>
                    <span/>
                    <h5>
                        <b>
                            {getTranslation('prices_text3', currentLanguage)}
                        </b>
                    </h5>
                    <br/>
                    <div className='seasons price'>
                        <p>
                            {getTranslation('october', currentLanguage)}
                            <FontAwesomeIcon icon={faArrowRightLong}/> 
                            {getTranslation('november', currentLanguage)}
                            <br/>
                            {getTranslation('march', currentLanguage)}
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                            {getTranslation('may', currentLanguage)} 
                            <br/>
                        </p>
                        <Link
                            onClick={() => {
                                window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                            }}>
                            <FontAwesomeIcon icon={faCalendarDays} className='calendar second'/>
                        </Link>
                        <h4>
                            450 PLN /
                            {getTranslation('prices_day', currentLanguage)} 
                        </h4>
                    </div>
                    <span/>
                    {/* <p className='bon'>
                        {getTranslation('prices_text4', currentLanguage)}
                        <br/>
                        <img src={bon} alt="Bon turystyczny"/>
                    </p> */}
                    <div className='information price'>
                        <h3>
                            {getTranslation('prices_text5', currentLanguage)}
                        </h3>
                        <p>
                            {getTranslation('prices_text18', currentLanguage)}
                            <br/>
                            {getTranslation('prices_text19', currentLanguage)}
                            <br/>
                            <br/>
                            {getTranslation('prices_text6', currentLanguage)}
                            <br/>
                            {getTranslation('prices_text7', currentLanguage)}
                            <br/>
                        </p>
                    </div>
                    <div className='additional price'>
                        <h3>
                            {getTranslation('prices_text8', currentLanguage)}
                        </h3>
                        <p>
                            <li>
                                {getTranslation('prices_text9', currentLanguage)}
                                – 150 PLN
                            </li>
                            <li>
                                {getTranslation('prices_text10', currentLanguage)}
                                – 150 PLN
                                <br/>
                            </li>
                            <li>
                                {getTranslation('prices_text11', currentLanguage)}
                                <br/>
                            </li>
                            <li>
                                {getTranslation('prices_text12', currentLanguage)}
                                <br/>
                            </li>
                            <br/>
                            <li>
                                {getTranslation('prices_text13', currentLanguage)}
                                <br/>
                            </li>
                        </p>
                    </div>
                    <div className='deposit price'>
                        <h3>
                            {getTranslation('prices_text14', currentLanguage)}
                        </h3>
                        <p>
                            {getTranslation('prices_text15', currentLanguage)}
                            <br/>
                        </p>
                        <p>
                            <span>
                                Domy Słońca Marek Kmiecik
                                <br/>
                                Jaszkowa Dolna 18 57-312
                                <br/>
                                {getTranslation('prices_text16', currentLanguage)}
                                <br/>
                                54 1090 2385 0000 0001 4493 6234
                                <br/>
                            </span>
                        </p>
                        <p>
                            {getTranslation('prices_text17', currentLanguage)}
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Prices;