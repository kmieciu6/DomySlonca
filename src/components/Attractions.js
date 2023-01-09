import React from "react";
import PreLoader from "./PreLoader";
import Header from "./header/Header";
import Footer from "./Footer";
import ImageGallery from 'react-image-gallery';

import photo1 from "../assets/jurty.jpeg"
import photo2 from "../assets/podest1.jpeg"
import photo3 from "../assets/podest2.jpeg"
import photo4 from "../assets/podest3.jpeg"
import photo5 from "../assets/grill.jpeg"
import photo6 from "../assets/tandyr.jpeg"
import photo7 from "../assets/kuchnia.jpeg"
import photo8 from "../assets/balia1.jpeg"
import photo9 from "../assets/balia2.jpeg"
import photo10 from "../assets/balia3.jpeg"
import photo11 from "../assets/sauna1.jpeg"
import photo12 from "../assets/sauna2.jpeg"
import photo13 from "../assets/kon1.jpeg"
import photo14 from "../assets/kon2.jpeg"
import photo15 from "../assets/kon3.jpeg"
import photo16 from "../assets/kon4.jpeg"
import photo17 from "../assets/kon5.jpeg"
import photo18 from "../assets/zabawa1.jpeg"
import photo19 from "../assets/zabawa2.jpeg"
import photo20 from "../assets/zabawa3.jpeg"

const Attractions = () => {

    const images = [
        {
            original: photo1,
            thumbnail: photo1,
        },
        {
            original: photo2,
            thumbnail: photo2,
        },
        {
            original: photo3,
            thumbnail: photo3,
        },
        {
            original: photo4,
            thumbnail: photo4,
        },
        {
            original: photo5,
            thumbnail: photo5,
        },
        {
            original: photo6,
            thumbnail: photo6,
        },
        {
            original: photo7,
            thumbnail: photo7,
        },
        {
            original: photo8,
            thumbnail: photo8,
        },
        {
            original: photo9,
            thumbnail: photo9,
        },
        {
            original: photo10,
            thumbnail: photo10,
        },
        {
            original: photo11,
            thumbnail: photo11,
        },
        {
            original: photo12,
            thumbnail: photo12,
        },
        {
            original: photo13,
            thumbnail: photo13,
        },
        {
            original: photo14,
            thumbnail: photo14,
        },
        {
            original: photo15,
            thumbnail: photo15,
        },
        {
            original: photo16,
            thumbnail: photo16,
        },
        {
            original: photo17,
            thumbnail: photo17,
        },
        {
            original: photo18,
            thumbnail: photo18,
        },
        {
            original: photo19,
            thumbnail: photo19,
        },
        {
            original: photo20,
            thumbnail: photo20,
        }
    ];

    return (
        <>
            <PreLoader/>
            <Header/>
            <section id='attractions' className='pages'>
                <h1>Czas wolny</h1>
                <div className='att_carousel'>
                    <ImageGallery items={images}/>
                </div>
                <div className='att_text'>
                    <p>
                        Jesteśmy w Sudetach, a to oznacza jedno: malownicze góry, błędne skały, stoki narciarskie,
                        górskie rzeki, tajemnicze podziemia i sztolnie z bogatą historią, zabytki przyrody i
                        architektury, single tracki. Tutaj każdy znajdzie coś dla siebie, nieważne czy lubi wspinaczki,
                        przejażdżki rowerowe, konne, zwiedzanie, leniuchowanie czy narty.<br/>
                        <br/>
                        Na terenie glampingu znajduje się grill, tandyr, miejsce na ognisko, balia, sauna oraz strefa
                        odpoczynku, taras z hamakami i poduszkami, z którego można podziwiać przepiękne góry.<br/>
                        <br/>
                        Tak jak w dalekiej Azji, same jurty nie posiadają własnej kuchni. Najczęściej cała wioska ma
                        wspólne ognisko, gdzie przyrządza jedzenie. U nas jest bardziej nowocześnie, kuchnia znajduje
                        się w kontenerze sanitarnym i jest w pełni wyposażona.<br/>
                        <br/>
                        A co dla dla dzieci?<br/>
                        Kto marzy o wakacjach w mongolskiej jurcie, ręka do góry! Chyba nie ma takiego dzieciaka, które
                        nie chciałoby spędzić nocy w ogromnym namiocie z widokiem na niebo. Nasze jurty są przyjazne
                        rodzinom z dziećmi. Mamy tu plac zabaw i ogród, w którym można bawić się do upadłego. I są też
                        zwierzaki, czekające na głaskanie i psoty.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Attractions;