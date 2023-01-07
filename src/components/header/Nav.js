import React, {useState} from "react";
import Burger from "./Burger";
import {Link} from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='header__nav'>
            <Burger open={open} setOpen={setOpen}/>
            <div className='nav_menu'>
                <Link to='/'>
                    <button className='nav_btn'>Strona główna</button>
                </Link>
                <Link to='/yurts'>
                    <button className='nav_btn'>Nasze Jurty</button>
                </Link>
                <Link to='/attractions'>
                    <button className='nav_btn'>Atrakcje</button>
                </Link>
                <Link to='/prices'>
                    <button className='nav_btn'>Cennik</button>
                </Link>
                <Link to='/reserve'>
                    <button className='nav_btn res'>Rezerwuj</button>
                </Link>
                <Link to='/contact'>
                    <button className='nav_btn'>Kontakt</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;