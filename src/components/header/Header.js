import React from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/logo.png";
import ScrollTop from "./ScrollTop";
import Cookies from "../Cookies";

const Header = () => {
    return (
        <section id='header'>
            <div className='container'>
                <Link to="/" className='title'>
                    <h3>Domy Słońca</h3>
                    <img className='main_logo' src={logo} alt="Domy Słońca"/>
                </Link>
                <Nav/>
            </div>
            <Cookies/>
            <ScrollTop/>
        </section>
    );
};

export default Header;