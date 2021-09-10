import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import OurStoryPage from '../OurStoryPage';
import HeroOurStory from '../HeroOurStory';



function OurStory() {
  return (
    <>
      <HeroOurStory />
      <HomePageLogo />
      <OurStoryPage />
      
      <Footer />
    </>
  );
}

export default OurStory;