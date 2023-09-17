import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({ loggedIn, onBurgerButton }) {
  return (
    <div className='main'>
      <Header
        loggedIn={loggedIn}
        onBurgerButton={onBurgerButton}
        headerColorClass="header_color_blue"
        iconColorClass="navigation__profile-icon_color_blue"
      />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
