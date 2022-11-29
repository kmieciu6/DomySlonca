import React from "react";
import instagram_logo from "../assets/logo_instagram.png";
import facebook_logo from "../assets/logo_facebook.png";

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
        </section>
    )
}

export default Footer;
