import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import FreeStartButton from './FreeStartButton';
import NavLink from './NavLink';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Logo className="logo" />
                <span>Smart Money</span>
            </div>

            <nav>
                <ul>
                    <NavLink to="/about">О курсе</NavLink>
                    <NavLink to="/benefits">Преимущества</NavLink>
                    <NavLink to="/program">Программа</NavLink>
                    <NavLink to="/reviews">Отзывы</NavLink>
                </ul>
            </nav>

            <FreeStartButton />
        </header>
    );
};

export default Header;
