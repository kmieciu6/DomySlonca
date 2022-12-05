import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';
import Nav from "./Nav";
import logo from "../../assets/logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

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
            <Scroll to={"home"} smooth duration={500}>
                <FontAwesomeIcon icon={faArrowUp} className='arrow'/>
            </Scroll>
        </section>
    );
};

export default Header;