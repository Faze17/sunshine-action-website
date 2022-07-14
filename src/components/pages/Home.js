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
      and homelessness." subtitle = "Sunshine Action&#8217;s mission is a long-term commitment to help people on
      a regular basis with permanent growth in the coming years&#8218;therefore
      funding is crucial for the long-term."/>
      <HomePageInfo />

      <CardProjects />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;