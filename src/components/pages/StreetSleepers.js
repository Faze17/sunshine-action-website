import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import SleeperInfo from '../SleeperInfo';
import HeroComp from '../HeroComp';


function StreetSleepers() {
  return (
    <>
      <HeroComp name = "STREET SLEEPERS PROGRAM" />
      <HomePageLogo />
    <SleeperInfo />
      
      <Footer />
    </>
  );
}

export default StreetSleepers;