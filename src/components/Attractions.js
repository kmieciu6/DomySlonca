import React from "react";
import MyComponent from "./Loaded";
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
import photo20 from "../assets/gory.jpeg"

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
        },
    ];

    return (
        <>
            <MyComponent/>
            <Header/>
            <section id='attractions'>
                <h1>Czas wolny</h1>
                <div className='att_carousel'>
                    <ImageGallery items={images}/>
                </div>
                <div className='att_text'>
                    <p>
                        Jakiś tekst
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Attractions;