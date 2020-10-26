import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
const NavBar = () => {
    return (
        <header id="menu">
            <nav>
                <div className="logo__container">
                  <NavLink exact to="/"><img src={require('../assets/logo.svg')} alt="NoImage" className="menu__logo"/> </NavLink>
                </div>
                <ul>
                    <li><NavLink className="menu__link" exact activeClassName="menu__active" to="/">Home.</NavLink></li>
                    <li><NavLink className="menu__link" exact activeClassName="menu__active" to="/holidays">Holidays.</NavLink></li>
                    <li><NavLink className="menu__link" exact activeClassName="menu__active" to="/Contact">Contact.</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
