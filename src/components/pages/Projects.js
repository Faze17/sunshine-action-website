import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import CardProjects from '../CardsProjects';
import HeroComp from '../HeroComp';

function StreetSleepers() {
  return (
    <>
      <HeroComp name = "PROJECTS" />
      <HomePageLogo />
    <CardProjects />
      
      <Footer />
    </>
  );
}

export default StreetSleepers;