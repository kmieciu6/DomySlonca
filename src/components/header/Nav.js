import React, {useState} from "react";
import Burger from "./Burger";
import {Link} from "react-router-dom";
import { getTranslation } from '../translations/LanguageUtils';
import { useLanguage } from '../translations/LanguageContext';

const Nav = () => {

    const { currentLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    return (
        <nav className='header__nav'>
            <Burger open={open} setOpen={setOpen}/>
            <div className='nav_menu'>
                <Link to='/'>
                    <button className='nav_btn'>
                        {getTranslation('main_page', currentLanguage)}
                    </button>
                </Link>
                <Link to='/yurts'>
                    <button className='nav_btn'>
                        {getTranslation('our_yurts', currentLanguage)}
                    </button>
                </Link>
                <Link to='/attractions'>
                    <button className='nav_btn'>
                        {getTranslation('attractions', currentLanguage)}
                    </button>
                </Link>
                <Link to='/prices'>
                    <button className='nav_btn'>
                        {getTranslation('pricing', currentLanguage)}
                    </button>
                </Link>
                <Link>
                    <button className='nav_btn res'
                            onClick={() => {
                                window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                            }}>
                        {getTranslation('book', currentLanguage)}
                    </button>
                </Link>
                <Link to='/contact'>
                    <button className='nav_btn'>
                        {getTranslation('contact', currentLanguage)}
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;