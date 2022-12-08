import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import CarouselYurts from "./CarouselYurts";

const Yurts = () => {
    return (
        <section id='yurts'>
            <Header/>
            <h1>Nasze jurty</h1>
            <div>Słońce</div>
            <div>Ogień</div>
            <div>Wiatr</div>
            <div>Etno</div>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <CarouselYurts/>
            <Footer/>
        </section>
    )
}

export default Yurts;