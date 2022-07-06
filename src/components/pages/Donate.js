import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import CHDInfo from '../CHDInfo';
import HeroComp from '../HeroComp';


function CHD() {
  return (
    <>
      <HeroComp name = "PLANT THE PLANET" />
      <HomePageLogo />
    <CHDInfo />
      
      <Footer />
    </>
  );
}

export default CHD;