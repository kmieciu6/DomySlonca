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
                    <div className='seasons price'>
                        <p>
                            <b>Sezon wysoki</b><br/>
                            grudzień <FontAwesomeIcon icon={faArrowRightLong}/> luty<br/>
                            czerwiec <FontAwesomeIcon icon={faArrowRightLong}/> wrzesień<br/>
                        </p>
                        <Link to='/reserve'><FontAwesomeIcon icon={faCalendarDays} className='calendar'/></Link>
                        <h4>500 zł/doba</h4>
                    </div>
                    <span/>
                    <div className='seasons price'>
                        <p>
                            <br/>
                            <b>Sezon niski</b><br/>
                            marzec <FontAwesomeIcon icon={faArrowRightLong}/> maj<br/>
                            październik <FontAwesomeIcon icon={faArrowRightLong}/> listopad<br/>
                        </p>
                        <Link to='/reserve'><FontAwesomeIcon icon={faCalendarDays} className='calendar second'/></Link>
                        <h4>450 zł/doba</h4>
                    </div>
                    <span/>
                    <p className='bon'>
                        Akceptujemy bony turystyczne<br/>
                    </p>
                    <div className='information price'>
                        <h3>Informacje</h3>
                        <p>
                            Doba hotelowa rozpoczyna się o godz. 15:00 w dniu przyjazdu<br/>
                            Pokoje należy opuścić do godziny 12:00 w dniu wyjazdu<br/>
                        </p>
                    </div>
                    <div className='additional price'>
                        <h3>Dodatki</h3>
                        <p>
                            Balia płatna – 150 zł<br/>
                            Sauna płatna – 150 zł<br/>
                            Jazdy konne – do umówienia na miejscu lub przez telefon<br/>
                            Przejażdżki motocyklowe – do umówienia na miejscu lub przez telefon<br/>
                            <br/>
                            10% rabatu dla osób podróżujących motocyklami.<br/>
                        </p>
                    </div>
                    <div className='deposit price'>
                        <h3>Zadatek</h3>
                        <p>
                            W celu potwierdzenia rezerwacji należy wpłacić zadatek w wysokość 30%<br/>
                            <br/>
                            Domy Słońca Marek Kmiecik<br/>
                            Jaszkowa Dolna 18 57-312<br/>
                            Nr rachunku bankowego: 54 1090 2385 0000 0001 4493 6234<br/>
                            <br/>
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