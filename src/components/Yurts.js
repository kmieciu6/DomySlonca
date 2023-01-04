import React, {useState} from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import {Link as Scroll} from 'react-scroll';
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
import wind_photo6 from "../assets/wiatr2.jpeg";
import wind_photo7 from "../assets/w_wiatr5.jpeg";
import wind_photo8 from "../assets/w_wiatr6.jpeg";

import fire_photo1 from "../assets/ogien1.jpeg";
import fire_photo2 from "../assets/w_ogien1.jpeg";
import fire_photo3 from "../assets/w_ogien2.jpeg";
import fire_photo4 from "../assets/w_ogien3.jpeg";
import fire_photo5 from "../assets/w_ogien4.jpeg";

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
            <Header/>
            <section id='yurts'>
                <h1>Nasze jurty</h1>
                <div className='yurts'>
                    <Scroll to={'sun'} smooth duration={500} className='yurt'>
                        <div className='photo'/>
                        <div className='text'>
                            <h3>Słońce</h3>
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
                            <h3>Ogień</h3>
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
                        <h2>Słońce</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 5 osób</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>35 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podwójne łóżko: 1</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>pojedyncze łóżko: 3</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>łazienka</p>
                            </li>
                        </div>
                        <div className='info_photo c1'>
                            <p>
                                Jurta Słońce - Panuje w niej niesamowita jasność, właściwie niezależnie od pogody.<br/>
                                Jurta stanowi jedno pomieszczenie o powierzchni 30m2 i wysokości 3,50m. Połączone
                                łącznikiem
                                z łazienką. Wyposażyliśmy ją w komplet mebli dobranych na wzór oryginalnych, ręcznie
                                i
                                samodzielnie malując nasze sosnowe meble, wykorzystując oryginalne ornamenty i
                                kolorystykę.<br/>
                                W połączeniu z elementami jurty malowanymi przez Buriatów powstała piękna
                                całość.<br/>
                                <br/>
                                W założeniu jurta miała być ogrzewana tradycyjnie przy pomocy tzw. kozy burżujki
                                opalanej
                                drewnem. Jednak wizyta kominiarza i strażaka przekonały nas do zastosowania
                                ogrzewania
                                zgodnego z trendami i miejscem tj. elektrycznego. Jurtę wyposażyliśmy w
                                system ogrzewania elektrycznego pozwalający na komfortowe zamieszkiwanie w niej
                                przez
                                cały
                                rok.<br/>
                                Szklana kopuła (TONO) zwieńczająca jurtę dopełnia efektu przebywania w świecie
                                stepów
                                Azji
                                Środkowej – widać przez nią nocne niebo.
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
                    </div>
                    <div id='wind' className='yurta'>
                        <h2>Wiatr</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 7 osób</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>35 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podwójne łóżko: 2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>pojedyncze łóżko: 5</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>łazienka</p>
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
                                </Carousel>
                            </div>
                            <p>
                                Jurta Wiatr - Jej budowa to było nie lada wyzwanie i
                                właściwie
                                powinniśmy ją nazwać WICHER. Właśnie taka pogoda panowała w czasie jej montażu.
                                Niemniej
                                jednak udało się wspaniale. Mieliśmy już doświadczenie budowy, więc pomimo
                                przeciwności
                                zdołaliśmy ją postawić. Jej niesamowity kolor bardzo ładnie komponuje się z
                                otoczeniem,
                                zwłaszcza kwitnącym sadem i okolicznymi górami. Jej wykończenie oraz wyposażenie
                                wskazuje na
                                XXI wiek.... jesteśmy przecież w Europie.<br/>
                                Przyjazna dla rodzin z dziećmi, ciepła (cały rok) przytulna, komfortowa, a
                                jednocześnie
                                autentyczna.
                            </p>
                        </div>
                    </div>
                    <div id='fire' className='yurta'>
                        <h2>Ogień</h2>
                        <div className='info_logo'>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <p>do 4 osób</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMaximize}/>
                                <p>30 m2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed}/>
                                <p>podwójne łóżko: 2</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShower}/>
                                <p>łazienka</p>
                            </li>
                        </div>
                        <div className='info_photo c3'>
                            <p>
                                Jurta Ogień - Ta jurta oczaruje Was swoim boho stylem. Panuje w niej spokój i
                                harmonia.<br/>
                                <br/>
                                Tutaj znajdziecie wytchnienie od miejskiego zgiełku, a wszystko przez szklaną kopułę -
                                TONO, przez którą w jurcie można podziwiać gwiazdy. Jest ona całoroczna, ogrzewana
                                piecykiem elektrycznym, który imituje prawdziwy kominek. Bezpośrednio w jurcie znajduje
                                się piękna łazienka.
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
                                </Carousel>
                            </div>
                        </div>
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
                                Jurta Etno - W środku nie znajdziecie mebli,
                                wyposażona jest jedynie w oryginalne sprzęty. Dzięki temu, na podłodze może nocować
                                do
                                10 osób. Tutaj będą się działy przeróżne wydarzenia, imprezy czy warsztaty: joga,
                                kursy,
                                spotkania różnych grup czy imprezy rodzinne i towarzyskie.
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