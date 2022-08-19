import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroComp(props) {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted webkit-playsinline playsinline >
        <source src='/videos/video-4.mov' media=" (min-width:481px)"></source>
      </video>
      <h1>{props.name.toUpperCase()}</h1>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroComp;
