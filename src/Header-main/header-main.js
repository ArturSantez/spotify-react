import React from "react";
import '../styles/reset.css';
import '../styles/vars.css'
import './header-main.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';  
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';

const HeaderMain = () => {
    return (
        <main class="main-container">
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
            <div class="main-container__background-parent main-container__explore">
                <div id="result-playlists">
                <div class="main-container__explore__content">
                    <h1 class="greeting">Boa tarde</h1>
                    <h2 class="session">Navegar por todas as seções</h2>
                </div>
                    <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">
                            <a href="##" class="cards">
                                <div class="cards card1">
                                <img src={playlist1} alt="" />
                                <span>Boas festas</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card2">
                                <img src={playlist2} alt="" />
                                <span>Feitos para você</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card3">
                                <img src={playlist3} alt="" />
                                <span>Lançamentos</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card4">
                                <img src={playlist4} alt="" />
                                <span>Creators</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card5">
                                <img src={playlist5} alt="" />
                                <span>Para treinar</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card6">
                                <img src={playlist6} alt="" />
                                <span>Podcasts</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card7">
                                <img src={playlist7} alt="" />
                                <span>Sertanejo</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card8">
                                <img src={playlist8} alt="" />
                                <span>Samba e pagode</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card9">
                                <img src={playlist9} alt="" />
                                <span>Funk</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card10">
                                <img src={playlist10} alt="" />
                                <span>MPB</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card11">
                                <img src={playlist11} alt="" />
                                <span>Rock</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card12">
                                <img src={playlist12} alt="" />
                                <span>Hip Hop</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card13">
                                <img src={playlist13} alt="" />
                                <span>Indie</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card14">
                                <img src={playlist14} alt="" />
                                <span>Relax</span>
                                </div>
                            </a>
                            <a href="##" class="cards">
                                <div class="cards card15">
                                <img src={playlist15} alt="" />
                                <span>Música Latina</span>
                                </div>
                            </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        <div class="artist-card" id="">
                        <div class="card-img">
                            <img id="artist-img" class="artist-img" alt=""/>
                            <div class="play">
                            <span class="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div class="card-text">
                            <a title="Foo Fighters" class="vst" href="##"></a>
                            <span class="artist-name" id="artist-name"></span>
                            <span class="artist-categorie">Artista</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeaderMain;