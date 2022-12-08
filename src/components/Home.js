import React from "react";
import Header from './header/Header';
import Opening from "./Opening";
import Video from "./Video";
import Maps from "./Maps";
import Footer from "./Footer";

const Home = () => {
    return (
        <section id='home'>
            <Header/>
            <Opening/>
            <div className='home_info'>
                <h2>Odnajdź klimat Azji Środkowej
                    w sercu Kotliny Kłodzkiej</h2>
                <div className='home_text'>
                    <p>Azja Środkowa w sercu Kotliny Kłodzkiej? Brzmi nieprawdopodobnie, a jednak.<br/>
                        <br/>
                        Oryginalne, ręcznie wykonane, całoroczne jurty przywiezione z Bajkału zapewnią niepowtarzalny
                        klimat Azji Środkowej w sercu Kotliny Kłodzkiej. Miejsce gdzie znajdziesz spokój, relaks i
                        komfort. Poczujesz wolność stepów Mongolii i Kazachstanu, powiew wiatru wspaniałych gór
                        Kirgizji. Wszystko to w sąsiedztwie niesamowitej Ziemi Kłodzkiej z jej kulturą, dziedzictwem i
                        przyrodą.<br/>
                        <br/>
                        Zapraszamy Was więc do 4 jurt, z których w ciągu dnia roztacza się widok na Masyw Śnieżnika
                        i Czarną Górę, a w nocy można podziwiać gwieździste niebo widoczne przez okno w kopule.
                        Gwarantujemy
                        niezapomniane wrażenia!
                    </p>
                </div>
            <Video embedId="09_niRBvLPc"/>
            </div>
            <Maps/>
            <Footer/>
        </section>
    )
}

export default Home;