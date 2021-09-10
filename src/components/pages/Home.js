import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import HomePageInfo from '../HomePageInfo';


function Home() {
  return (
    <>
      <HeroSection />
      <HomePageLogo />
      <HomePageInfo />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;