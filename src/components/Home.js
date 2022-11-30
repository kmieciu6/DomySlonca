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
            <Video embedId="09_niRBvLPc"/>
            <Maps/>
            <Footer/>
        </section>
    )
}

export default Home;