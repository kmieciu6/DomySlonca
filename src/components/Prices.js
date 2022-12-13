import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Prices = () => {
    return (
        <>
            <Header/>
            <section id='prices'>
                <h1>Cennik</h1>
                <p>Cennik

                    Sezon niski – 450zl/doba
                    Sezon wysoki - 500zł/doba
                    Akceptujemy bony turystyczne
                    Informacje
                    • Doba hotelowa rozpoczyna się o godz. 15:00 w dniu przyjazdu
                    • Pokoje należy opuścić do godziny 12:00 w dniu wyjazdu
                    • Balia płatna 150zł za 3 godziny
                    • Sauna płatna 150zł za 3 godziny

                    Zadatek

                    ZADATEK W WYSOKOŚCI 30% PLANOWANYCH KOSZTÓW POBYTU NALEŻY WPŁACIĆ PRZED PLANOWANYM PRZYJAZDEM NA:

                    Domy Słońca Marek Kmiecik
                    Jaszkowa Dolna 18 57-312
                    Nr rachunku bankowego: …………………..

                    Jeśli za pobyt ma zostać wystawiona faktura, prosimy o wpisanie takiej informacji w tytule przelewu
                    z podaniem nazwy firmy oraz numerem NIP.


                    ZRÓB TEŻ PODZIAŁY NA JURTY ZE ZDJĘCIAMI I OPISEM : SŁOŃCE, WIATR, OGIEŃ
                </p>
            </section>
            <Footer/>
        </>
    )
}

export default Prices;