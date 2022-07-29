import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import HomePageInfo from '../HomePageInfo';
import HeroHome from '../HeroHome';
import CardProjects from '../CardsProjects';


function Home() {
  return (
    <>
      <HeroHome name = "FEED THE HUNGRY AND WARM THE ABANDONED" selfintro = "We are a charity which aims to help people facing poverty 
      and homelessness." subtitle = "Sunshine Action has made a long-term commitment to help those in need on
      achieve lasting growth and success in the coming years, and therefore funding
      is crucial for the future."/>
      <HomePageInfo />

      <CardProjects />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;