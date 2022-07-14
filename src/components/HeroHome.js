import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroHome.css';
import { Button } from 'react-bootstrap';


function HeroHome(props) {
  return (
    <div className='hero-container1'>
      <video src='/videos/video-4.mov' autoPlay loop muted webkit-playsinline playsinline />

      <h1>{props.name}</h1>
      <h2>{props.selfintro}</h2>
      <h2>{props.subtitle}</h2>


      <div className='hero-btns'>
      <Link to='contact-us#HowToDonate' type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Donate Now
            </Link>
      </div>
    </div>
  );
}

export default HeroHome;