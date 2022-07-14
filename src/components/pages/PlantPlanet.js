import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import PlantPlanetInfo from '../PlantPlanetInfo';
import HeroComp from '../HeroComp';


function PlantPlanet() {
  return (
    <>
      <HeroComp name = "PLANT THE PLANET" />
      
    <PlantPlanetInfo />
      
      <Footer />
    </>
  );
}

export default PlantPlanet;