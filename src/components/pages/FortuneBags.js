import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import FortuneBagInfo from '../FortuneBagInfo';
import HeroFortune from '../HeroFortune';


function FortuneBags() {
  return (
    <>
      <HeroFortune />
      <HomePageLogo />
      <FortuneBagInfo />
      
      <Footer />
    </>
  );
}

export default FortuneBags;