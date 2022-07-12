import React from 'react';
import '../../../App.css';
import '../Project.css';

import HeroComp from '../../HeroComp';
import Footer from '../../Footer';
import HomePageLogo from '../../HomePageLogo';

export default DigitalInequality;

function DigitalInequality() {
    return (
      <>
        <HeroComp name = "Digital Inequality" />
        <HomePageLogo />
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <iframe src = "6 Digital Inequality White Paper.pdf" style = {{ width: "100%", height: "720px" }}></iframe>
            </div>
        </div>       
        <Footer />
      </>
    );
}

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>
    )
}