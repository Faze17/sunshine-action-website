import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import HomePageInfo from '../HomePageInfo';
import HeroComp from '../HeroComp';


function Home() {
  return (
    <>
      <HeroComp name = "SUNSHINE ACTION" />
      
      <HomePageInfo />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;