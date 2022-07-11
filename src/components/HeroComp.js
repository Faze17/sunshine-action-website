import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroComp(props) {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mov' autoPlay loop muted webkit-playsinline playsinline />
      <h1>{props.name}</h1>
      <div className='hero-btns'>


      <Link to='/donate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroComp;
