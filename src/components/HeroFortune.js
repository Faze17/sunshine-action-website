import React from 'react';
import '../App.css';

import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroFortune() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mov' autoPlay loop muted />
      <h1>FORTUNE BAG PROGRAM</h1>
      <div className='hero-btns'>


      <Link to='contact-us#HowToDonate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroFortune;
