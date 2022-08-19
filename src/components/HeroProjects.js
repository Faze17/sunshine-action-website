import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroProjects() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted webkit-playsinline playsinline >
        <source src='/videos/video-4.mov' media=" (min-width:481px)"></source>
      </video>
      <h1>PROJECTS</h1>
      <div className='hero-btns'>


      <Link to='/donate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroProjects;
