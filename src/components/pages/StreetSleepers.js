import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import SleeperInfo from '../SleeperInfo';
import HeroSleepers from '../HeroSleepers';


function StreetSleepers() {
  return (
    <>
      <HeroSleepers />
      <HomePageLogo />
    <SleeperInfo />
      
      <Footer />
    </>
  );
}

export default StreetSleepers;