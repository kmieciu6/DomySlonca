import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Prices = () => {
    return (
        <>
            <Header/>
            <section id='prices' className='pages'>
                <h1>Cennik</h1>
                <h3>Minimum 2 doby</h3>
                <div className='price_text'>
                    <h5><b>Sezon wysoki</b></h5><br/>
                    <div className='seasons price'>
                        <p>
                            czerwiec <FontAwesomeIcon icon={faArrowRightLong}/> wrzesień<br/>
                            grudzień <FontAwesomeIcon icon={faArrowRightLong}/> luty<br/>
                        </p>
                        <Link to='/reserve' onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}>
                            <FontAwesomeIcon icon={faCalendarDays} className='calendar first'/>
                        </Link>
                        <h4>500 zł/doba</h4>
                    </div>
                    <span/>
                    <h5><b>Sezon niski</b></h5><br/>
                    <div className='seasons price'>
                        <p>
                            październik <FontAwesomeIcon icon={faArrowRightLong}/> listopad<br/>
                            marzec <FontAwesomeIcon icon={faArrowRightLong}/> maj<br/>
                        </p>
                        <Link to='/reserve' onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}>
                            <FontAwesomeIcon icon={faCalendarDays} className='calendar second'/>
                        </Link>
                        <h4>450 zł/doba</h4>
                    </div>
                    <span/>
                    <p className='bon'>
                        Akceptujemy bony turystyczne<br/>
                    </p>
                    <div className='information price'>
                        <h3>Informacje</h3>
                        <p>
                            Doba hotelowa rozpoczyna się o godz. 15:00 w dniu przyjazdu.<br/>
                            Pokoje należy opuścić do godziny 12:00 w dniu wyjazdu.<br/>
                        </p>
                    </div>
                    <div className='additional price'>
                        <h3>Dodatki</h3>
                        <p>
                            <li>Balia płatna – 150 zł</li>
                            <li>Sauna płatna – 150 zł<br/></li>
                            <li>Jazdy konne – do umówienia na miejscu lub przez telefon<br/></li>
                            <li>Przejażdżki motocyklowe – do umówienia na miejscu lub przez telefon<br/></li>
                            <br/>
                            <li>10% rabatu dla osób podróżujących motocyklami<br/></li>
                        </p>
                    </div>
                    <div className='deposit price'>
                        <h3>Zadatek</h3>
                        <p>
                            W celu potwierdzenia rezerwacji należy wpłacić zadatek w wysokość 30%<br/>
                        </p>
                        <p>
                            <span>
                            Domy Słońca Marek Kmiecik<br/>
                            Jaszkowa Dolna 18 57-312<br/>
                            Nr rachunku bankowego: 54 1090 2385 0000 0001 4493 6234<br/>
                            </span>
                        </p>
                        <p>
                            Jeśli za pobyt ma zostać wystawiona faktura, prosimy o poinformowaniu takiej informacji w
                            tytule
                            przelewu z podaniem nazwy firmy oraz numerem NIP.
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Prices;