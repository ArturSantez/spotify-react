import React from "react";
import '../styles/reset.css';
import '../styles/vars.css'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
        <div className="disclaimer-premium__content">
            <span className="text title">TESTAR O PREMIUM DE GRAÇA</span>
            <span className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</span>
        </div>
        <div className="disclaimer-premium__button">
            <button className="big-button disclaimer-premium__button__btn disclaimer-premium__button__btn--hover">
                <span>Inscreva-se grátis</span>
            </button>
        </div>
        </footer>
    )
}

export default Footer;