import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import OurStoryPage from '../OurStoryPage';
import HeroComp from '../HeroComp';


function OurStory() {
  return (
    <>
      <HeroComp name = "OUR STORY" />
      <OurStoryPage />
      
      <Footer />
    </>
  );
}

export default OurStory;