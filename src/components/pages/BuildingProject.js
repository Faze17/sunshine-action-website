import React from 'react';
import '../../App.css';
import './Project.css';
import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default BuildingProjectPage;

function BuildingProjectPage() {
    return (
      <>
        <HeroComp name = "Building Projects" />
        <HomePageLogo/>
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Sunshine Folding Container Houses" />
                <p>Our Sunshine Folding Container Houses consist of brand-new mobile containers. They are a green and economical solution to the housing crisis. Each container is made from new steel sheets and includes water-proof and fire-proof insulation. They have a minimum lifespan of 13-15 years or more, depending on local weather conditions and maintenance. These homes are designed to provide a quick housing solution in natural disaster zones, or to provide extra accommodation to orphanages or care homes.</p>
                <ImageComp src = "BuildingProjects2.jpg" />
                <p>The price of each home is lower than the cost of purchasing and renovating a second-hand container. They also avoid the possible risk to health that may come with a second-hand container that has been used to store dangerous chemicals. These houses are modular, meaning a row of one or even two storeys would fit together well. Stairs can be installed at one end of the row to provide access to the second storey.</p>
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