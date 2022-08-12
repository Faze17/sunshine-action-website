import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default MicroFinancePage;

function MicroFinancePage() {
    return (
      <>
        <HeroComp name = "SUNSHINE MICROFINANCE" />
        <HomePageLogo/>
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <p>MicroFinance helps small entrepreneurs and businesses, that lack access to normal commercial banking due to high costs, succeed by helping them financially.</p>
                <SmallHeader text = "History of the MicroFinance Project" />
                <p>Sunshine Action started its MicroFinance program in Vietnam in 2014, when it granted 2 groups of farmers and laborers a few cows and micro-loans to help them pursue their projects.</p>
                <ImageComp src = "Microfinance1.jpg" />
                <p>Sunshine Action is NOT subvented by the Hong Kong government or any government, the Community Chest of Hong Kong, or the Lottery Fund of the Jockey Club of Hong Kong. All the funding comes from the general public and corporations, and on average 98% of the food, materials and contributions from Sunshine Action are purchased.</p>
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