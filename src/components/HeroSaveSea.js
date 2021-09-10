import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroSaveSea() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mov' autoPlay loop muted />
      <h1>COMING SOON</h1>
      
      <h2>SAVE THE SEA</h2>
      <div className='hero-btns'>


      <Link to='contact-us#HowToDonate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroSaveSea;
