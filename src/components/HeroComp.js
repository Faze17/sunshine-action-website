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
        <source src='/videos/ambassadors.mp4' media=" (min-width:481px)" srcset='/videos/video-5.mp4' alt=''></source>
      </video>

      <div className="herocomp-overlay"></div>

      <h1><strong>{props.name.toUpperCase()}</strong></h1>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroComp;
