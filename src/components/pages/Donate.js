import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import DonateInfo from '../DonateInfo';
import HeroComp from '../HeroComp';


function Donate() {
  return (
    <>
      <HeroComp name = "DONATE" />
      <HomePageLogo />
    <DonateInfo />
      
      <Footer />
    </>
  );
}

export default Donate;