import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <section id='not_found_page' className='pages'>
                <h1>Strona nie istnieje</h1>
            </section>
            <Footer/>
        </>
    )
}

export default NotFoundPage;