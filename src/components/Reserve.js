import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Reserve = () => {
    return (
        <>
            <Header/>
            <section id='reserve' className='pages'>
                <h1>
                    Zarezerwuj swój pobyt
                </h1>
                <div data-hs-embed="pokoje">&nbsp;</div>
            </section>
            <Footer/>
        </>
    )
}

export default Reserve;
