import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';
import CardProjectsUK from '../CardProjectsUK';
import HeroProjects from '../HeroProjects';

function ProjectsUK() {
  return (
    <>
      <HeroProjects />
      
    <CardProjectsUK />
      
      <Footer />
    </>
  );
}

export default ProjectsUK;