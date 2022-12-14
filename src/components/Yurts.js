import React, {useState} from "react";
import PreLoader from "./PreLoader";
import Header from "./header/Header";
import Footer from "./Footer";
import {Link as Scroll} from 'react-scroll';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGroup, faMaximize, faShower, faBed} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";

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
import fire_photo5 from "../assets/w_ogien4.jpeg";
import fire_photo6 from "../assets/w_ogien5.jpeg";

import etno_photo1 from "../assets/etno1.jpeg";
import etno_photo2 from "../assets/w_etno1.jpeg";
import etno_photo3 from "../assets/w_etno2.jpeg";
import etno_photo4 from "../assets/w_etno3.jpeg";
import etno_photo5 from "../assets/w_etno4.jpeg";
import etno_photo6 from "../assets/etno2.jpeg";
import etno_photo7 from "../assets/w_etno5.jpeg";
import etno_photo8 from "../assets/w_etno6.jpeg";
import etno_photo9 from "../assets/w_etno7.jpeg";

const Yurts = () => {

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
            <PreLoader/>
            <Header/>
            <section id='yurts' className='pages'>
                <h1>Nasze jurty</h1>
                <div className='yurts'>
                    <Scroll to={'sun'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>S??o??ce</h3>
                        </div>
                    </Scroll>
                    <Scroll to={'wind'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>Wiatr</h3>
                        </div>
                    </Scroll>
                    <Scroll to={'fire'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>Ogie??</h3>
                        </div>
                    </Scroll>
                    <Scroll to={'etno'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>Etno</h3>
                        </div>
                    </Scroll>
                </div>
                <div className='yurts_info'>
                    <div id='sun' className='yurta'>
                        <h2>S??o??ce</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 5 os??b</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>35 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podw??jne ??????ko: 1</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>pojedyncze ??????ko: 3</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>??azienka</p>
                            </li>
                        </div>
                        <div className='info_photo c1'>
                            <p>
                                Jurta S??o??ce - panuje w niej niesamowita jasno????, w??a??ciwie niezale??nie od pogody.<br/>
                                Jurta stanowi jedno pomieszczenie o powierzchni 30m2 i wysoko??ci 3,50m. Po????czone
                                ????cznikiem
                                z ??azienk??. Wyposa??yli??my j?? w komplet mebli dobranych na wz??r oryginalnych, r??cznie
                                i
                                samodzielnie maluj??c nasze sosnowe meble, wykorzystuj??c oryginalne ornamenty i
                                kolorystyk??.<br/>
                                W po????czeniu z elementami jurty malowanymi przez Buriat??w powsta??a pi??kna
                                ca??o????.<br/>
                                <br/>
                                W za??o??eniu jurta mia??a by?? ogrzewana tradycyjnie przy pomocy tzw. kozy bur??ujki
                                opalanej
                                drewnem. Jednak wizyta kominiarza i stra??aka przekona??y nas do zastosowania
                                ogrzewania
                                zgodnego z trendami i miejscem tj. elektrycznego. Jurt?? wyposa??yli??my w
                                system ogrzewania elektrycznego pozwalaj??cy na komfortowe zamieszkiwanie w niej
                                przez
                                ca??y
                                rok.<br/>
                                Szklana kopu??a (TONO) zwie??czaj??ca jurt?? dope??nia efektu przebywania w ??wiecie
                                step??w
                                Azji
                                ??rodkowej ??? wida?? przez ni?? nocne niebo.
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
                        <Link to='/reserve' className='button'
                              onClick={() => {
                                  window.scroll({
                                      top: 0,
                                      left: 0,
                                      behavior: "smooth",
                                  });
                              }}>
                            Zarezerwuj
                        </Link>
                    </div>
                    <div id='wind' className='yurta'>
                        <h2>Wiatr</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 7 os??b</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>35 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podw??jne ??????ko: 2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>pojedyncze ??????ko: 5</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>??azienka</p>
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
                                Jurta Wiatr - jej budowa to by??o nie lada wyzwanie i
                                w??a??ciwie
                                powinni??my j?? nazwa?? WICHER. W??a??nie taka pogoda panowa??a w czasie jej monta??u.
                                Niemniej
                                jednak uda??o si?? wspaniale. Mieli??my ju?? do??wiadczenie budowy, wi??c pomimo
                                przeciwno??ci
                                zdo??ali??my j?? postawi??. Jej niesamowity kolor bardzo ??adnie komponuje si?? z
                                otoczeniem,
                                zw??aszcza kwitn??cym sadem i okolicznymi g??rami. Jej wyko??czenie oraz wyposa??enie
                                wskazuje na
                                XXI wiek.... jeste??my przecie?? w Europie.<br/>
                                Przyjazna dla rodzin z dzie??mi, ciep??a (ca??y rok) przytulna, komfortowa, a
                                jednocze??nie
                                autentyczna.
                            </p>
                        </div>
                        <Link to='/reserve' className='button'
                              onClick={() => {
                                  window.scroll({
                                      top: 0,
                                      left: 0,
                                      behavior: "smooth",
                                  });
                              }}>
                            Zarezerwuj
                        </Link>
                    </div>
                    <div id='fire' className='yurta'>
                        <h2>Ogie??</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 4 os??b</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>30 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podw??jne ??????ko: 2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>??azienka</p>
                            </li>
                        </div>
                        <div className='info_photo c3'>
                            <p>
                                Jurta Ogie?? - ta jurta oczaruje Was swoim boho stylem. Panuje w niej spok??j i
                                harmonia.<br/>
                                <br/>
                                Tutaj znajdziecie wytchnienie od miejskiego zgie??ku, a wszystko przez szklan?? kopu???? -
                                TONO, przez kt??r?? w jurcie mo??na podziwia?? gwiazdy. Jest ona ca??oroczna, ogrzewana
                                piecykiem elektrycznym, kt??ry imituje prawdziwy kominek. Bezpo??rednio w jurcie znajduje
                                si?? pi??kna ??azienka.
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
                                </Carousel>
                            </div>
                        </div>
                        <Link to='/reserve' className='button'
                              onClick={() => {
                                  window.scroll({
                                      top: 0,
                                      left: 0,
                                      behavior: "smooth",
                                  });
                              }}>
                            Zarezerwuj
                        </Link>
                    </div>
                    <div id='etno' className='yurta'>
                        <h2>Etno</h2>
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
                                Jurta Etno - w ??rodku nie znajdziecie mebli,
                                wyposa??ona jest jedynie w oryginalne sprz??ty. Dzi??ki temu, na pod??odze mo??e nocowa??
                                do 10 os??b.
                                Tutaj odbywaj?? si?? przer????ne wydarzenia, imprezy czy warsztaty: joga, kursy,
                                spotkania r????nych grup, imprezy rodzinne i towarzyskie -
                                mo??liwo???? wstawienia do jurty sto????w.
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