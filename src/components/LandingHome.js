import React from 'react';
import './LandingHome.css';
import { HashLink as Link } from 'react-router-hash-link';


function LandingHome () {
    return(
        <div className='hero-container'>
        <video src='/videos/video-5.mp4' autoPlay loop muted />
        <h1>SUNSHINE ACTION</h1>


        <div className='hero-btns'>
  
        <Link to='/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>Hong Kong
              </Link>

        <Link to='/uk/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United Kingdom
              </Link>

        <Link to='/us/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United States of America
              </Link>

        <Link to='/global' type="button" class="btn btn-outline-light btn-lg" style={{borderRadius: '0px', marginBottom: '5px'}}>
            Global Projects
        </Link>

        </div>
      </div>




    )
}

export default LandingHome;