import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledMenu = styled.nav`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    nav {
      display: flex;
      position: absolute;
      left: 0;
      top: 79.6px;
      flex-direction: column;
      box-shadow: 0 3px 6px -2px #A5A5A5;
      width: 100%;
      z-index: 3;
      background: white;

      a {
        display: ${({open}) => (open ? "flex" : "none")};
        font-family: "Open Sans", sans-serif;
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.1875rem;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        padding: 20px;
        justify-content: center;

        &:active {
          color: orange;
        }
      }

      .res {
        color: red;
      }
    }
  }
`

const StyledBurger = styled.button`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1023px) {
    border: none;
    background: white;

    span {
      display: block;
      width: 20px;
      height: 2px;
      background: orange;
      margin-bottom: 3px;

      &:first-child {
        transform: ${({open}) => (open ? "rotate(45deg) translate(2px, 5px)" : "rotate(0) translate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({open}) => (open ? "0" : "1")};
      }

      &:last-child {
        transform: ${({open}) => (open ? "rotate(-45deg) translate(2px, -5px)" : "rotate(0) translate(0)")};
      }
    }

    margin: 30px;
  }
`

const Burger = ({open, setOpen}) => {
    const handleIsOpen = () => {
        setOpen(!open)
    }
    const closeSideBar = () => {
        setOpen(false)
    }
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </StyledBurger>
            <StyledMenu open={open} onClose={handleIsOpen}>
                <nav onClick={closeSideBar}>
                    <Link to="/">Strona główna</Link>
                    <Link to="/yurts">Nasze jurty</Link>
                    <Link to='/attractions'>Atrakcje</Link>
                    <Link to='/prices'>Cennik</Link>
                    <Link className='res'
                          onClick={() => {
                              window.open('https://domyslonca.hotelsystems.pl/booking', '_blank', 'noreferrer')
                          }}>
                        Rezerwuj
                    </Link>
                    <Link to='/contact'>Kontakt</Link>
                </nav>
            </StyledMenu>
        </>
    )
}

export default Burger;