import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import CardProjectsUS from '../CardProjectsUS';
import HeroProjects from '../HeroProjects';

function ProjectsUS() {
  return (
    <>
      <HeroProjects />
      
    <CardProjectsUS />
      
      <Footer />
    </>
  );
}

export default ProjectsUS;