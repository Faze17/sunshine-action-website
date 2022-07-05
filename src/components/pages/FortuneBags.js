import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import FortuneBagInfo from '../FortuneBagInfo';
import HeroComp from '../HeroComp';

function FortuneBags() {
  return (
    <>
      <HeroComp name = "FORTUNE BAG PROGRAM" />
      <HomePageLogo />
      <FortuneBagInfo />
      <Footer />
    </>
  );
}

export default FortuneBags;