import React from "react";
import Header from './header/Header';
import Opening from "./Opening";
import Video from "./Video";
import Maps from "./Maps";
import Footer from "./Footer";
import home_photo1 from '../assets/jurta1.jpeg';

const Home = () => {
    return (
        <section id='home'>
            <Header/>
            <Opening/>
            <h2>Odnajdź klimat Azji Środkowej
                w sercu Kotliny Kłodzkiej</h2>
            <div className='home_text'>
                <div className='akapit'>
                    <p>Azja Środkowa w sercu Kotliny Kłodzkiej? Brzmi nieprawdopodobnie, a jednak.<br/>
                        <br/>
                        A to wszystko zaczęło się niewinnie. Kilka wypraw do Azji i zamiłowanie do kultury i bytu jej
                        niezwykłych mieszkańców. Ich domy-jurty urzekły nas.<br/>
                        <br/>
                        Pierwszy nocleg w tej jakże na pierwszy rzut oka prymitywnej, a w gruncie rzeczy genialnej
                        „budowli”,
                        był dla nas niezapomnianym przeżyciem. Jakaś pozytywna energia skumulowana w niej w powiązaniu z
                        wrażeniami z wyprawy dały efekt trudny do opisania. Wtedy jeszcze nie docierało do nas, jak
                        silny
                        wpływ
                        wywarł na nasze dalsze życie ten z pozoru banalny fakt. Ot gdzieś na końcu Świata, u podnóża
                        wspaniałej
                        góry o niekoniecznie pięknej nazwie „Pik Lenina” stoi sobie namiot...<br/>
                        <br/>
                        Nie zdołaliśmy o nim zapomnieć i za rok, już z przyjaciółmi, wróciliśmy w to magiczne miejsce (a
                        bardzo
                        rzadko wracamy w to samo miejsce – wolimy odkrywać nieznane. Magia powtórzyła się. To był moment
                        zwrotny. Zechcieliśmy na co dzień doświadczać tej magii. Rozważaliśmy różne scenariusze aż w
                        końcu
                        postanowiliśmy przenieść cząstkę tego świata do naszej kochanej Kotliny Kłodzkiej.<br/>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <figure><img src={home_photo1} alt="photo"/></figure>
                </div>
                <div className='akapit'>
                    <p>
                        Po czterech tygodniach jurty były gotowe. Jak można było przewidzieć, transport był nie lada
                        wyzwaniem,
                        ale udało się. Kierowca busa pokonał 7 tys. km oddzielające Ułan Ude od granic Polski w
                        pojedynkę i
                        zajęło mu to tydzień. Od zaśnieżonej i mroźnej Syberii przez góry Uralu i bezkres Rosji
                        Środkowej,
                        aż po
                        Białoruś do Grodna. Wszystko zapięte na ostatni guzik.<br/>
                        <br/>
                        Jak się później okazało, zakup i transport jurt wcale nie był zadaniem najtrudniejszym. O wiele
                        trudniej
                        było nam zdecydować o formie zaplecza, które będzie je uzupełniać. Spory były wielkie, bo i
                        wariantów
                        niemało. W oryginale nikt przecież nie wyposaża jurt w sanitariaty, nie przewiduje jak przyjąć
                        gości,
                        którzy nie mieli do czynienia z żywym ogniem. W końcu jesteśmy w Europie, a nasi przyszli goście
                        mają
                        swoje potrzeby i przyzwyczajenia.<br/>
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <figure><img src={home_photo1} alt="photo"/></figure>
                </div>
                <div className='akapit'>
                    <p> Po długich dyskusjach i dywagacjach udało nam się wybrać chyba najlepszą opcję.<br/>
                        <br/>
                        Zapraszamy Was więc do 3 jurt, z których w ciągu dnia roztacza się widok na Masyw Śnieżnika
                        i
                        Czarną
                        Górę, a w nocy można podziwiać gwieździste niebo widoczne przez okno w kopule. Gwarantujemy
                        niezapomniane wrażenia!</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <figure><img src={home_photo1} alt="photo"/></figure>
                </div>
            </div>
            <Video embedId="09_niRBvLPc"/>
            <Maps/>
            <Footer/>
        </section>
    )
}

export default Home;