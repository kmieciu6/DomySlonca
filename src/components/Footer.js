import React from "react";
import {Link} from "react-router-dom";
import facebook_logo from "../assets/logo_facebook.png";
import google_logo from "../assets/logo_google.png";
import instagram_logo from "../assets/logo_instagram.png";
import icon_phone from '../assets/phone.svg';
import icon_mail from '../assets/mail.svg';
import practices from '../assets/dobre_praktyki.png'
import Maps from './Maps';

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
                <img className='good_practices' src={practices} alt="dobre praktyki"/>
                <a href="https://www.google.com/maps/place/Domy+słońca/@50.41759,16.664003,17z/data=!3m1!4b1!4m8!3m7!1s0x470e17874133a405:0xaec2fb5f8ca68b0b!5m2!4m1!1i2!8m2!3d50.41759!4d16.6661917">
                    <p>
                        <b>Zobacz mapę</b><br/>
                        Jaszkowa Dolna 18<br/>
                        57-300 Kłodzko
                    </p>
                </a>
            </div>
            <div className='maps'>
                <Maps/>
            </div>
            <div className='privacy'>
                <Link
                    to="/privacy_policy"
                    onClick={() => {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}>
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
                <a href="https://www.google.com/travel/hotels/domy%20słońca%20opinie%20google/entity/CgsIi5aa5fjrvuGuARAB/reviews?q=domy%20słońca%20opinie%20google&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4718358%2C4723331%2C4731329%2C4754388%2C4757164%2C4814050%2C4861688%2C4864715%2C4874190%2C4879519%2C4886082%2C4886480%2C4893075%2C4902277%2C4903082%2C4903556%2C4906050%2C4920622%2C4926165&hl=pl-PL&gl=pl&cs=1&ssta=1&rp=EIuWmuX4677hrgEQi5aa5fjrvuGuATgCQABIAcABAg&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpJCisSJzIlMHg0NzBlMTc4NzQxMzNhNDA1OjB4YWVjMmZiNWY4Y2E2OGIwYhoAEhoSFAoHCOcPEAEYChIHCOcPEAEYCxgBMgIQACoJCgU6A1BMThoA">
                    <img src={google_logo} alt="google" className='google'/>
                </a>
            </div>
            <div className='copyright'>
                <p>Copyright 2023</p>
                <a href="https://github.com/kmieciu6?tab=repositories">
                    <p>
                        Made by <b>Jakub Kmiecik</b>
                    </p>
                </a>
            </div>
        </section>
    )
}

export default Footer;