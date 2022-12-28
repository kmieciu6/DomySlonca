import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Prices = () => {
    return (
        <>
            <Header/>
            <section id='prices'>
                <h1>Cennik</h1>
                <p>
                    Sezon niski – 450zl/doba<br/>
                    Sezon wysoki - 500zł/doba<br/>
                    Akceptujemy bony turystyczne<br/>
                    <br/>
                    Informacje<br/>
                    • Doba hotelowa rozpoczyna się o godz. 15:00 w dniu przyjazdu<br/>
                    • Pokoje należy opuścić do godziny 12:00 w dniu wyjazdu<br/>
                    • Balia płatna 150zł za 3 godziny<br/>
                    • Sauna płatna 150zł za 3 godziny<br/>

                    <h1>Zadatek</h1>
                    <br/>
                    ZADATEK W WYSOKOŚCI 30% PLANOWANYCH KOSZTÓW POBYTU NALEŻY WPŁACIĆ PRZED PLANOWANYM PRZYJAZDEM
                    NA:<br/>
                    <br/>
                    Domy Słońca Marek Kmiecik<br/>
                    Jaszkowa Dolna 18 57-312<br/>
                    Nr rachunku bankowego: 54 1090 2385 0000 0001 4493 6234<br/>
                    <br/>
                    Jeśli za pobyt ma zostać wystawiona faktura, prosimy o wpisanie takiej
                    informacji w tytule przelewu z podaniem nazwy firmy oraz numerem NIP.
                </p>
            </section>
            <Footer/>
        </>
    )
}

export default Prices;