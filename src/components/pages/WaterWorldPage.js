import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default WaterWorldPage;

function WaterWorldPage() {
    return (
      <>
        <HeroComp name = "WATER FOR THE WORLD" />
        <HomePageLogo />
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <p>A water well is a structure created by digging or drilling the ground to access groundwater in underground aquifers. The water is drawn by a pump or a bucket. Sunshine Action is drilling small water wells in poor villages in different countries around the world. Each well is shared by 3-5 poor families and provides water for:</p>
                <ul>
                    <li>Irrigation</li>
                    <li>Washing</li>
                    <li>Human and animal usage</li>
                </ul>
                <SmallHeader text = "Other Ways You Can Save Water at Home" />
                <p>Fresh water is an extremely scarce resource as only 2.8% of all water on Earth is fresh. You can save water at home by:</p>
                 <ul>
                    <li>Closing the faucet while you brush your teeth</li>
                    <li>Taking shorter showers</li>
                    <li>Installing low-flush toilets and low-flow showerheads</li>
                 </ul>
                <ImageComp src = "WaterWorld2.jpg" />
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