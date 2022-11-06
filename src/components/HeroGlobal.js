import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroGlobal() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted webkit-playsinline playsinline >
        <source media=" (min-width:481px)" srcset='/videos/video-4.mov' alt=''></source>
      </video>
      <h1>GLOBAL PROJECTS</h1>
      <div className='hero-btns'>


      <Link to='contact-us#HowToDonate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroGlobal;
