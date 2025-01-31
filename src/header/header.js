import React from "react";
import '../styles/reset.css'
import '../styles/vars.css'
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="main-container__background-parent main-container__header">
            <div className="main-container__header__navigation">
                <button className="main-container__header__navigation__arrow-left">
                    <img src={smallLeft} alt="Seta Esquerda"/>
                </button>
                <button className="main-container__header__navigation__arrow-left">
                    <img src={smallRight} alt="Seta Direita"/>
                </button>
            </div>
            <div className="main-container__header__search main-container__header__search--hover">
                <img className="main-container__header__search__img" src= {search} alt=""/>
                <input id="search-input" className="main-container__header__search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?"/>
            </div>
            <div className="main-container__header__login">
                <button className="main-container__header__login-subscribe main-container__header__login-subscribe--hover">Inscreva-se</button>
                <button className="big-button main-container__header__login-enter main-container__header__login-enter--hover">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;

