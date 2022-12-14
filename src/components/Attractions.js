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
import {Link} from "react-router-dom";

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
                        Jeste??my w Sudetach, a to oznacza jedno: malownicze g??ry, b????dne ska??y, stoki narciarskie,
                        g??rskie rzeki, tajemnicze podziemia i sztolnie z bogat?? histori??, zabytki przyrody i
                        architektury, single tracki. Tutaj ka??dy znajdzie co?? dla siebie, niewa??ne czy lubi wspinaczki,
                        przeja??d??ki rowerowe, konne, zwiedzanie, leniuchowanie czy narty.<br/>
                        <br/>
                        Na terenie glampingu znajduje si?? grill, tandyr, miejsce na ognisko, balia, sauna oraz strefa
                        odpoczynku, taras z hamakami i poduszkami, z kt??rego mo??na podziwia?? przepi??kne g??ry.<br/>
                        <br/>
                        Tak jak w dalekiej Azji, same jurty nie posiadaj?? w??asnej kuchni. Najcz????ciej ca??a wioska ma
                        wsp??lne ognisko, gdzie przyrz??dza jedzenie. U nas jest bardziej nowocze??nie, kuchnia znajduje
                        si?? w kontenerze sanitarnym i jest w pe??ni wyposa??ona.<br/>
                        <br/>
                        A co dla dla dzieci?<br/>
                        Kto marzy o wakacjach w mongolskiej jurcie, r??ka do g??ry! Chyba nie ma takiego dzieciaka, kt??re
                        nie chcia??oby sp??dzi?? nocy w ogromnym namiocie z widokiem na niebo. Nasze jurty s?? przyjazne
                        rodzinom z dzie??mi. Mamy tu plac zabaw i ogr??d, w kt??rym mo??na bawi?? si?? do upad??ego. I s?? te??
                        zwierzaki, czekaj??ce na g??askanie i psoty.
                    </p>
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
            </section>
            <Footer/>
        </>
    )
}

export default Attractions;