import React from 'react';
import './LandingHome.css';
import { HashLink as Link } from 'react-router-hash-link';


function LandingHome () {
    return(
        <div className='hero-container'>
        <video src='/videos/video-5.mp4' autoPlay loop muted />
        <h1>SUNSHINE ACTION</h1>

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hello There!</strong> This new website is currently a work-in-progress. If you want more information about Sunshine Action, feel free to visit our old website.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

        <div className='hero-btns'>
  
        <Link to='/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United Kingdom
              </Link>

        <Link to='/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>Hong Kong
              </Link>

        <Link to='/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United States of America
              </Link>

              <a href='https://sunshineactionold.netlify.app/' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>Old Website
              </a>
        </div>
      </div>




    )
}

export default LandingHome;