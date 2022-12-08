import React from "react";
import instagram_logo from "../assets/logo_instagram.png";
import facebook_logo from "../assets/logo_facebook.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section id='footer' className='footer'>
            <h3>Znajdziesz nas na</h3>
            <div className='links'>
                <a href="https://www.facebook.com/DomySlonca/">
                    <img src={facebook_logo} alt="facebook" className='facebook'/>
                </a>
                <a href="https://www.instagram.com/domyslonca/">
                    <img src={instagram_logo} alt="instagram" className='instagram'/>
                </a>
            </div>
            <div>
                <Mailto email="domyslonca@gmail.com">
                    domyslonca@gmail.com
                </Mailto>
            </div>
            <p>Jaszkowa Dolna 18<br/>
                57-312 Jaszkowa Dolna</p>
            <Link to="/privacy_policy">Regulamin i polityka prywatności</Link>
            <p>Copyright 2022</p>
            <a href="https://github.com/kmieciu6?tab=repositories">Made by Jakub Kmiecik</a>
        </section>
    )
}

export default Footer;

function Mailto({email, ...props}) {
    return (
        <a href={`mailto:${email}`}>
            {props.children}
        </a>
    );
}