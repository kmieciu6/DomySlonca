import React from "react";
import instagram_logo from "../assets/logo_instagram.png";
import facebook_logo from "../assets/logo_facebook.png";
import {Link} from "react-router-dom";
import icon_phone from '../assets/phone.svg';
import icon_mail from '../assets/mail.svg';

const Footer = () => {
    return (
        <section id='footer' className='footer'>
            <div className='phone_mail'>
                <a href="tel:+48606740427">
                    <img src={icon_phone} alt="phone"/>
                    <p>+48 606 740 427</p>
                </a>
                <a href="mailto:domyslonca@gmail.com">
                    <img src={icon_mail} alt="mail"/>
                    <p>domyslonca@gmail.com</p>
                </a>
            </div>
            <div className='adres'>
                <a href="https://www.google.com/maps/place/Domy+słońca/@50.41759,16.664003,17z/data=!3m1!4b1!4m8!3m7!1s0x470e17874133a405:0xaec2fb5f8ca68b0b!5m2!4m1!1i2!8m2!3d50.41759!4d16.6661917">
                    <p>Zobacz mapę<br/>
                        Jaszkowa Dolna 18<br/>
                        57-312 Jaszkowa Dolna</p>
                </a>
            </div>
            <div className='privacy'>
                <Link to="/privacy_policy">
                    <p>Regulamin i polityka prywatności</p>
                </Link>
            </div>
            <div className='links'>
                <a href="https://www.facebook.com/DomySlonca/">
                    <img src={facebook_logo} alt="facebook" className='facebook'/>
                </a>
                <a href="https://www.instagram.com/domyslonca/">
                    <img src={instagram_logo} alt="instagram" className='instagram'/>
                </a>
            </div>
            <div className='copyright'>
                <p>Copyright 2023</p>
                <a href="https://github.com/kmieciu6?tab=repositories">
                    <p>Made by Jakub Kmiecik</p>
                </a>
            </div>
        </section>
    )
}

export default Footer;