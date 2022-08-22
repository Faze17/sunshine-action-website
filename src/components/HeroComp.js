import React from 'react';
import '../App.css';
import { RealButton } from './RealButton';
import { HashLink as Link } from 'react-router-hash-link';
import './HeroSection.css';
import { Button } from 'react-bootstrap';


function HeroComp(props) {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted controls webkit-playsinline playsinline >
        <source media=" (min-width:481px)" srcset='/videos/video-4.mov' alt=''></source>
      </video>
      <h1>{props.name.toUpperCase()}</h1>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroComp;
