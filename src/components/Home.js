import React from "react";
import PreLoader from "./PreLoader";
import Header from './header/Header';
import Opening from "./Opening";
import Video from "./Video";
import Maps from "./Maps";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <PreLoader/>
            <Header/>
            <Opening/>
            <section id='home'>
                <div className='home_info'>
                    <h2>
                        Poczuj klimat Azji Środkowej
                        w sercu Kotliny Kłodzkiej
                    </h2>
                    <div className='home_text'>
                        <h3>
                            Przeczytaj o swojej niezapomnianej nocy!
                        </h3>
                        <p>
                            <br/>
                            Azja Środkowa w sercu Kotliny Kłodzkiej? Brzmi nieprawdopodobnie, a jednak.<br/>
                            <br/>
                            Oryginalne, ręcznie wykonane, całoroczne jurty przywiezione z Bajkału zapewnią
                            niepowtarzalny
                            klimat Azji Środkowej w sercu Kotliny Kłodzkiej. Miejsce gdzie znajdziesz spokój, relaks i
                            komfort. Poczujesz wolność stepów Mongolii i Kazachstanu, powiew wiatru wspaniałych gór
                            Kirgizji. Wszystko to w sąsiedztwie niesamowitej Ziemi Kłodzkiej z jej kulturą, dziedzictwem
                            i
                            przyrodą.<br/>
                            <br/>
                            Zapraszamy Was więc do 4 jurt, z których w ciągu dnia roztacza się widok na Masyw Śnieżnika
                            i Czarną Górę, a w nocy można podziwiać gwieździste niebo widoczne przez okno w kopule.
                            Gwarantujemy
                            niezapomniane wrażenia!<br/>
                        </p>
                        <h3>
                            Gorąco zapraszamy do odwiedzin naszego glampingu gdzie przez cały rok świeci słońce Azji
                            Środkowej...
                        </h3>
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
                    <Video embedId="09_niRBvLPc"/>
                </div>
            </section>
            <Maps/>
            <Footer/>
        </>
    )
}

export default Home;