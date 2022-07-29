import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default _SaveSea_Page;

function _SaveSea_Page() {
    return (
        <>
          <HeroComp name = "SAVE THE SEA" />
          
          <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <p>In 2010, Sunshine Action started the Save the Sea program which promotes:</p>
                    <ul>
                        <li>Restocking the ocean by releasing small fishes and other aquatic life to their respective native regions.</li>
                        <li>Healthy environment for aquatic life. For example, with mini artifical reefs.</li>
                        <li>Responsible aquaculture</li>
                        <li>Cleaner beaches</li>
                    </ul>
                    <SmallHeader text = "Fishing in Hong Kong and how Sunshine Action Helps" />
                    <p>Hong Kong is comprised of a single peninsula and over 200 offshore islands, on the southeastern coast of Mainland China. Hong Kong is home to a diverse aquatic habitat with rocky shores, coral reefs and artificial reefs. This leads to a relatively high diversity of fishes, of a recorded 997 species! Unfortunately the region also faces an overfishing threat.</p>
                    <p>In Hong Kong the fishing rest period lasts 2 months, and in China the fishing rest period lasts 2 and a half months. These short periods of rest lead to overfishing which leads to the depletion of resources, low aquatic life growth rates and low biomass levels. According to a 2008 UN report, the world's fishing fleets are losing US$50 billion each year through depleted stocks and poor management of fisheries. The purpose of this program is to restock the ocean with fish.</p>
                    <p>Sunshine Action does this by releasing native fishes to their local waters. The fishes are released near an artifical reef, which is a protected area which is under continuous supervision of the Hong Kong police. The program takes place in the summer, which is about the same time when species of smaller fish (which are released) have their hatching season.</p>
                    <ImageComp src = "SaveSea2.jpg" />   
                    <p>Till date, Sunshine Action has released more than 118,800 indigenous small fishes and aquatic creatures into the the Ocean, including:</p>
                    <ul>
                        <li>Yellow Tail</li>
                        <li>Star Snapper</li>
                        <li>Marbled Rockfish</li>
                        <li>Rabbit Fish</li>
                    </ul>
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
        
        
        
        
        
        
        
        
        
















    
