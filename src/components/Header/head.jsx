import React from 'react';
import YourMenuComponent from '../Burger/burger';
import './../Burger/YourMenuStyles.css';
import logo from './../../img/Logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header_row">
                   <img src={logo} className="logo" alt="logo" /> 
                    <YourMenuComponent></YourMenuComponent>
                </div>
            </div>
        </header>
    )
}
export default Header;