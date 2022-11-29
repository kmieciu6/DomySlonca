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
                    <button>Strona główna</button>
                </Link>
                <Link to='/yurts'>
                    <button>Nasze Jurty</button>
                </Link>
                <Link to='/surroundings'>
                    <button>Otoczenie</button>
                </Link>
                <Link to='/attractions'>
                    <button>Atrakcje</button>
                </Link>
                <Link to='/prices'>
                    <button>Cennik</button>
                </Link>
                <Link to='/contact'>
                    <button>Kontakt</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;