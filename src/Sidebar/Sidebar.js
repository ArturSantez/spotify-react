import React from "react";
import '../styles/reset.css';   
import '../styles/vars.css'
import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation sidebar__background-parent">
            <div className="sidebar__navigation__logo">
                <a href="##">
                    <img className="sidebar__navigation__logo__img" src={logo} alt="Logo Spotify"/>
                </a>
            </div>  
            <ul className="sidebar__navigation__list">
                <li className="sidebar__navigation__item-list">
                    <a className="sidebar__navigation__item-list__link sidebar__navigation__item-list__link--hover" href="##">
                        <span className="fa fa-home"></span>
                        <span>Início</span>
                    </a>
                </li>
                <li className="sidebar__navigation__item-list">
                    <a className="sidebar__navigation__item-list__link sidebar__navigation__item-list__link--hover" href="##">
                        <span className="fa fa-search"></span> 
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="sidebar__library sidebar__background-parent">
            <div className="sidebar__library__content">
                <button className="sidebar__library__content__button sidebar__library__content__button--hover">
                    <span className="fa fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus fa-plus--hover"></span>
            </div>
            <section className="sidebar__section-playlist">
                <div className="sidebar__section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="button sidebar__section-playlist__content__button sidebar__section-playlist__content__button--hover">
                        <span>Criar playlist</span>
                    </button>
                </div>
                <div className="sidebar__cookies">
                    <a className="sidebar__cookies__link sidebar__cookies__link--hover" href="##">Cookies</a>
                </div>
                <div className="sidebar__languages">
                    <button className="button sidebar__languages__button sidebar__languages__button--hover">
                        <span className="fa fa-globe"></span>
                        <span>Porguês do Brasil</span>
                    </button>
                </div>
            </section>
        </div>
        </div>
    )
}

export default Sidebar;