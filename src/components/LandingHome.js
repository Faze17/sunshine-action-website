import React from 'react';
import './LandingHome.css';
import { HashLink as Link } from 'react-router-hash-link';

// var mainVideo = $('video#homeVideo');
// var desktopSrc = "/videos/video-5.mp4";
 
// if ($(window).width() < 980) {
// } else {
//      mainVideo.append("<source type='video/mp4' src='" + desktopSrc + "' />");
// }

function LandingHome () {
    return(
        <div className='hero-container2'>
       <video autoPlay loop muted webkit-playsinline playsinline>
            <source src='/videos/video-5.mp4' media=" (min-width:501px)"></source>
            {/* <source  media=" (min-width:700px)" src='/videos/video-5.mp4' alt=''></source>
            <source  media=" (min-width:300px)" srcset='/images/blank.jpg' alt=''></source> */}
       </video>
       

        <h1>SUNSHINE ACTION</h1>


        <div className='home-buttons'>
  
        <Link to='/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>Hong&nbsp;Kong
              </Link>

        <a href='https://www.sunshine-action-uk.org/' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United&nbsp;Kingdom
              </a>

        <Link to='/us/home' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>United&nbsp;States&nbsp;of&nbsp;America
              </Link>
        <Link to='/comingsoon' type="button" class="btn btn-outline-light btn-lg" 
              style={{borderRadius: '0px', marginBottom: '5px',}}>Singapore
              </Link>

        {/*<Link to='/global' type="button" class="btn btn-outline-light btn-lg" style={{borderRadius: '0px', marginBottom: '5px'}}>
            Global Projects
    </Link>*/}

        </div>
      </div>




    )
}

export default LandingHome;