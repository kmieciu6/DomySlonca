import React from "react";
import {Link} from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import error404 from '../assets/Darth Vader.svg'

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <section id='not_found_page' className='pages'>
                <h1>Strona nie istnieje</h1>
                <img src={error404} alt="DarthVader" className='darth'/>
                <p>You underestimate the power of the dark side!</p>
                <Link to='/'>
                    <button className='button'>Zawróć</button>
                </Link>
            </section>
            <Footer/>
        </>
    )
}

export default NotFoundPage;