import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Prices = () => {
    return (
        <>
            <Header/>
            <section id='prices' className='pages'>
                <h1>Cennik</h1>
                <div className='price_text'>
                    <p>
                        Sezon niski – 450 zł/doba<br/>s
                        (od kiedy do kiedy)?<br/>
                        <br/>
                        Sezon wysoki - 500 zł/doba<br/>
                        (od kiedy do kiedy)?<br/>
                        <br/>
                        Akceptujemy bony turystyczne<br/>
                        <br/>
                        <br/>
                        Informacje<br/>
                        <br/>
                        • Doba hotelowa rozpoczyna się o godz. 15:00 w dniu przyjazdu<br/>
                        • Pokoje należy opuścić do godziny 12:00 w dniu wyjazdu<br/>
                        • Balia płatna 150zł<br/>
                        • Sauna płatna 150zł
                    </p>
                    <h1>Zadatek</h1>
                    <p>
                        <br/>
                        W celu potwierdzenia rezerwacji należy wpłacić zadatek w wysokość 30%<br/>
                        <br/>
                        Domy Słońca Marek Kmiecik<br/>
                        Jaszkowa Dolna 18 57-312<br/>
                        Nr rachunku bankowego: 54 1090 2385 0000 0001 4493 6234<br/>
                        <br/>
                        Jeśli za pobyt ma zostać wystawiona faktura, prosimy o wpisanie takiej informacji w tytule
                        przelewu z podaniem nazwy firmy oraz numerem NIP.
                        <br/>
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Prices;