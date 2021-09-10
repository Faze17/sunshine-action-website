import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import CardProjects from '../CardsProjects';
import HeroProjects from '../HeroProjects';

function StreetSleepers() {
  return (
    <>
      <HeroProjects />
      <HomePageLogo />
    <CardProjects />
      
      <Footer />
    </>
  );
}

export default StreetSleepers;