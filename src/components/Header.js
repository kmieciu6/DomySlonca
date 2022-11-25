import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <section id='header'>
            <Link to='/'>
                <button>Strona główna</button>
            </Link>
            <Dropdown
                trigger={<button>Nasze Jurty</button>}
                menu={[
                    <Link to='/jurta_sun'>
                        <button>Słońce</button>
                    </Link>,
                    <Link to='/jurta_wind'>
                        <button>Wiatr</button>
                    </Link>,
                    <Link to='/jurta_etno'>
                        <button>Etno</button>
                    </Link>,
                    <Link to='/jurta_fire'>
                        <button>Ogień</button>
                    </Link>,
                    <Link to='/surroundings'>
                        <button>Otoczenie</button>
                    </Link>
                ]}
            />
            <Link to='/attractions'>
                <button>Atrakcje</button>
            </Link>
            <Link to='/prices'>
                <button>Cennik</button>
            </Link>
            <Link to='/contact'>
                <button>Kontakt</button>
            </Link>
        </section>
    );
};

const Dropdown = ({trigger, menu}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            {React.cloneElement(trigger, {
                onClick: handleOpen,
            })}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick();
                                    setOpen(false);
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Header;