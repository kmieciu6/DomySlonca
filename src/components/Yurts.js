import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import CarouselYurts from "./CarouselYurts";
import {Link as Scroll} from 'react-scroll';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGroup, faMaximize, faShower, faBed} from "@fortawesome/free-solid-svg-icons";

// import photo1 from "../assets/jurty1.jpeg";

const Yurts = () => {
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
                                Panuje w niej niesamowita jasność, właściwie niezależnie od pogody.<br/>
                                Jurta stanowi jedno pomieszczenie o powierzchni 30m2 i wysokości 3,50m. Połączone
                                łącznikiem
                                z łazienką. Wyposażyliśmy ją w komplet mebli dobranych na wzór oryginalnych, ręcznie i
                                samodzielnie malując nasze sosnowe meble, wykorzystując oryginalne ornamenty i
                                kolorystykę.<br/>
                                W połączeniu z elementami jurty malowanymi przez Buriatów powstała piękna całość.<br/>
                                <br/>
                                W założeniu jurta miała być ogrzewana tradycyjnie przy pomocy tzw. kozy burżujki
                                opalanej
                                drewnem. Jednak wizyta kominiarza i strażaka przekonały nas do zastosowania ogrzewania
                                zgodnego z trendami i miejscem tj. elektrycznego. Jurtę wyposażyliśmy w
                                system ogrzewania elektrycznego pozwalający na komfortowe zamieszkiwanie w niej przez
                                cały
                                rok.<br/>
                                Szklana kopuła (TONO) zwieńczająca jurtę dopełnia efektu przebywania w świecie stepów
                                Azji
                                Środkowej – widać przez nią nocne niebo.
                            </p>
                            <div className='carousel'>
                                <CarouselYurts>

                                    {/*<img*/}
                                    {/*    src={photo1}*/}
                                    {/*/>*/}
                                </CarouselYurts>
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
                                <CarouselYurts/>
                            </div>
                            <p>
                                Druga jurta stanęła tuż obok Jurty Słońce. Jej budowa to było nie lada wyzwanie i
                                właściwie
                                powinniśmy ją nazwać WICHER. Właśnie taka pogoda panowała w czasie jej montażu. Niemniej
                                jednak udało się wspaniale. Mieliśmy już doświadczenie budowy, więc pomimo przeciwności
                                zdołaliśmy ją postawić. Jej niesamowity kolor bardzo ładnie komponuje się z otoczeniem,
                                zwłaszcza kwitnącym sadem i okolicznymi górami. Jej wykończenie oraz wyposażenie
                                wskazuje na
                                XXI wiek.... jesteśmy przecież w Europie.<br/>
                                Przyjazna dla rodzin z dziećmi, ciepła (cały rok) przytulna, komfortowa, a jednocześnie
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
                                Jurta zrobiona w stylu boho, posiada dwa łoża małżeńskie, posiada łazienkę...
                            </p>
                            <div className='carousel'>
                                <CarouselYurts/>
                            </div>
                        </div>
                    </div>
                    <div id='etno' className='yurta'>
                        <h2>Etno</h2>
                        <div className='info_photo c4'>
                            <div className='carousel'>
                                <CarouselYurts/>
                            </div>
                            <p>

                                Jurta Ethno - na nią mieliśmy trochę inny pomysł. W środku nie znajdziecie mebli,
                                wyposażona jest jedynie w oryginalne sprzęty. Dzięki temu, na podłodze może nocować do
                                10 osób. Tutaj będą się działy przeróżne wydarzenia, imprezy czy warsztaty: joga, kursy,
                                spotkania różnych grup czy imprezy rodzinne i towarzyskie.<br/>
                                Serdecznie zachęcamy do jazdy konnej ! Początkujących nauczymy i spędzimy miło czas,
                                natomiast dla osób zaawansowyanych w jazdę konną zabierzemy na przejażdżkę po naszych
                                urokliwych teranach.<br/>
                                <br/>
                                Na ostatnią jurtę mieliśmy specjalny pomysł. Zupełnie inny od poprzednich. Udało się ją
                                zbudować w trybie oryginalnym tj. w 3 dni od pierwszego ruchu ręki do zakończenia
                                budowy.<br/>
                                Brakuje jeszcze oryginalnego wyposażenia, które chcemy przywieźć z planowanej wyprawy do
                                Azji Środkowej ale w obecnej sytuacji trudno coś planować konkretnie. Mamy jednak
                                nadzieję....<br/>
                                W środku - niesamowita przestrzeń do medytacji, jogi, różnego rodzaju zajęć tematycznych
                                czy
                                spotkań towarzyskich.<br/>
                                Do dyspozycji znajdująca się nieopodal kuchnia i węzeł sanitarny (prysznic, WC,
                                umywalka).
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