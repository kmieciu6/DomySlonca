import React, {useState} from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import {Link as Scroll} from 'react-scroll';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGroup, faMaximize, faShower, faBed, faWifi} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";

import no_dogs from '../assets/no-dogs.svg';

import sun_photo1 from "../assets/slonce1.jpeg";
import sun_photo2 from "../assets/w_slonce1.jpeg";
import sun_photo3 from "../assets/w_slonce2.jpeg";
import sun_photo4 from "../assets/w_slonce3.jpeg";
import sun_photo5 from "../assets/w_slonce4.jpeg";
import sun_photo6 from "../assets/slonce2.jpeg";
import sun_photo7 from "../assets/w_slonce5.jpeg";

import wind_photo1 from "../assets/wiatr1.jpeg";
import wind_photo2 from "../assets/w_wiatr1.jpeg";
import wind_photo3 from "../assets/w_wiatr2.jpeg";
import wind_photo4 from "../assets/w_wiatr3.jpeg";
import wind_photo5 from "../assets/w_wiatr4.jpeg";
import wind_photo6 from "../assets/w_wiatr5.jpeg";
import wind_photo7 from "../assets/wiatr2.jpeg";
import wind_photo8 from "../assets/w_wiatr6.jpeg";
import wind_photo9 from "../assets/w_wiatr7.jpeg";
import wind_photo10 from "../assets/w_wiatr8.jpeg";

import fire_photo1 from "../assets/ogien1.jpeg";
import fire_photo2 from "../assets/w_ogien1.jpeg";
import fire_photo3 from "../assets/w_ogien2.jpeg";
import fire_photo4 from "../assets/w_ogien3.jpeg";
import fire_photo5 from "../assets/ogien2.jpeg";
import fire_photo6 from "../assets/w_ogien4.jpeg";
import fire_photo7 from "../assets/w_ogien5.jpeg";

import etno_photo1 from "../assets/etno1.jpeg";
import etno_photo2 from "../assets/w_etno1.jpeg";
import etno_photo3 from "../assets/w_etno2.jpeg";
import etno_photo4 from "../assets/w_etno3.jpeg";
import etno_photo5 from "../assets/w_etno4.jpeg";
import etno_photo6 from "../assets/etno2.jpeg";
import etno_photo7 from "../assets/w_etno5.jpeg";
import etno_photo8 from "../assets/w_etno6.jpeg";
import etno_photo9 from "../assets/w_etno7.jpeg";

import { getTranslation } from './translations/LanguageUtils';
import { useLanguage } from './translations/LanguageContext';

const Yurts = () => {

    const { currentLanguage } = useLanguage();

    const [index1, setIndex1] = useState(0);
    const handleSelect1 = (selectedIndex) => {
        setIndex1(selectedIndex);
    };

    const [index2, setIndex2] = useState(0);
    const handleSelect2 = (selectedIndex) => {
        setIndex2(selectedIndex);
    };

    const [index3, setIndex3] = useState(0);
    const handleSelect3 = (selectedIndex) => {
        setIndex3(selectedIndex);
    };

    const [index4, setIndex4] = useState(0);
    const handleSelect4 = (selectedIndex) => {
        setIndex4(selectedIndex);
    };

    return (
        <>
            <Header/>
            <section id='yurts' className='pages'>
                <h1>
                    {getTranslation('our_yurts', currentLanguage)}
                </h1>
                <div className='yurts'>
                    <Scroll to={'sun'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>
                                {getTranslation('sun_title', currentLanguage)}
                            </h3>
                        </div>
                    </Scroll>
                    <Scroll to={'wind'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>
                                {getTranslation('wind_title', currentLanguage)}
                            </h3>
                        </div>
                    </Scroll>
                    <Scroll to={'fire'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>
                                {getTranslation('fire_title', currentLanguage)}
                            </h3>
                        </div>
                    </Scroll>
                    <Scroll to={'etno'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>
                                {getTranslation('etno_title', currentLanguage)}
                            </h3>
                        </div>
                    </Scroll>
                </div>
                <div className='yurts_info'>
                    <div id='sun' className='yurta'>
                        <h2>
                            {getTranslation('sun_title', currentLanguage)}
                        </h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faUserGroup} />
                                <p>
                                    {getTranslation('yurts_people1', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faMaximize}/>
                                <p>
                                    35 m2
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faBed}/>
                                <p>
                                    {getTranslation('yurts_bed2', currentLanguage)}
                                    1
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faBed}/>
                                <p>
                                    {getTranslation('yurts_bed1', currentLanguage)}
                                    3
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faShower}/>
                                <p>
                                    {getTranslation('yurts_bath', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faWifi} />
                                <p>
                                    wi-fi
                                </p>
                            </li>
                            <li>
                                <img className="icon dog" src={no_dogs} alt='dog'/>
                                <p>
                                    {getTranslation('yurts_animal', currentLanguage)}
                                </p>
                            </li>
                        </div>
                        <div className='info_photo c1'>
                            <p>
                                {getTranslation('yurts_text1', currentLanguage)}
                                <br/>
                                {getTranslation('yurts_text2', currentLanguage)}
                                <br/>
                                {getTranslation('yurts_text3', currentLanguage)}
                                <br/>
                                <br/>
                                {getTranslation('yurts_text4', currentLanguage)}
                                <br/>
                                {getTranslation('yurts_text5', currentLanguage)}
                            </p>
                            <div className='carousel'>
                                <Carousel activeIndex={index1} onSelect={handleSelect1}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo3}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo4}
                                            alt="Fourth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo5}
                                            alt="Fifth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo6}
                                            alt="Sixth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sun_photo7}
                                            alt="Seventh slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <Link className='button'
                              onClick={() => {
                                  window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                              }}>
                            {getTranslation('book_now', currentLanguage)}
                        </Link>
                    </div>
                    <div id='wind' className='yurta'>
                        <h2>
                            {getTranslation('wind_title', currentLanguage)}
                        </h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faUserGroup}/>
                                <p>
                                    {getTranslation('yurts_people2', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faMaximize}/>
                                <p>
                                    35 m2
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faBed}/>
                                <p>
                                    {getTranslation('yurts_bed2', currentLanguage)}
                                    2
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faBed}/>
                                <p>
                                    {getTranslation('yurts_bed1', currentLanguage)}
                                    5
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faShower}/>
                                <p>
                                    {getTranslation('yurts_bath', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faWifi} />
                                <p>
                                    wi-fi
                                </p>
                            </li>
                            <li>
                                <img className="icon dog" src={no_dogs} alt='dog'/>
                                <p>
                                    {getTranslation('yurts_animal', currentLanguage)}
                                </p>
                            </li>
                        </div>
                        <div className='info_photo c2'>
                            <div className='carousel'>
                                <Carousel activeIndex={index2} onSelect={handleSelect2}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo3}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo4}
                                            alt="Fourth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo5}
                                            alt="Fifth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo6}
                                            alt="Sixth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo7}
                                            alt="Seventh slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo8}
                                            alt="Eight slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo9}
                                            alt="Eight slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={wind_photo10}
                                            alt="Eight slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <p>
                                {getTranslation('yurts_text6', currentLanguage)}
                                <br/>
                                {getTranslation('yurts_text7', currentLanguage)}
                            </p>
                        </div>
                        <Link className='button'
                              onClick={() => {
                                  window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                              }}>
                            {getTranslation('book_now', currentLanguage)}
                        </Link>
                    </div>
                    <div id='fire' className='yurta'>
                        <h2>
                            {getTranslation('fire_title', currentLanguage)}
                        </h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faUserGroup}/>
                                <p>
                                    {getTranslation('yurts_people3', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faMaximize}/>
                                <p>
                                    30 m2
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faBed}/>
                                <p>
                                    {getTranslation('yurts_bed2', currentLanguage)}
                                    2
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faShower}/>
                                <p>
                                    {getTranslation('yurts_bath', currentLanguage)}
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faWifi} />
                                <p>
                                    wi-fi
                                </p>
                            </li>
                            <li>
                                <img className="icon dog" src={no_dogs} alt='dog'/>
                                <p>
                                    {getTranslation('yurts_animal', currentLanguage)}
                                </p>
                            </li>
                        </div>
                        <div className='info_photo c3'>
                            <p>
                                {getTranslation('yurts_text8', currentLanguage)}
                                <br/>
                                <br/>
                                {getTranslation('yurts_text9', currentLanguage)}
                            </p>
                            <div className='carousel'>
                                <Carousel activeIndex={index3} onSelect={handleSelect3}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo3}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo4}
                                            alt="Fourth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo5}
                                            alt="Fifth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo6}
                                            alt="Sixth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={fire_photo7}
                                            alt="Seventh slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <Link className='button'
                              onClick={() => {
                                  window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                              }}>
                            {getTranslation('book_now', currentLanguage)}
                        </Link>
                    </div>
                    <div id='etno' className='yurta'>
                        <h2>
                            {getTranslation('etno_title', currentLanguage)}
                        </h2>
                        <div className='info_photo c4'>
                            <div className='carousel'>
                                <Carousel activeIndex={index4} onSelect={handleSelect4}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo2}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo3}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo4}
                                            alt="Fourth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo5}
                                            alt="Fifth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo6}
                                            alt="Sixth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo7}
                                            alt="Seventh slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo8}
                                            alt="Eight slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={etno_photo9}
                                            alt="Ninth slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <p>
                                {getTranslation('yurts_text10', currentLanguage)}
                                <br/>
                                <br/>
                                {getTranslation('yurts_text11', currentLanguage)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Yurts;