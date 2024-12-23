import React, { useState } from 'react';
import './../Burger/YourMenuStyles.css';

const YourMenuComponent = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
        setOpenSubMenus({}); // Close all submenus when burger menu is toggled
    };

    const handleSubMenuToggle = (menu) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <nav>
            <button className={`burger-button ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <ul className={`topmenu ${isBurgerMenuOpen ? 'burger-open' : ''}`}>
                <li><a href="/home">Главная</a></li>
                <li><a href="/list">Каталог</a></li>
                <li><a href="/login">Вход</a></li>
                
            </ul>
            <a className='button' href="https://t.me/absoluteomsk555">Telegram<span className='flare'></span></a>
        </nav>
    );
};

export default YourMenuComponent;