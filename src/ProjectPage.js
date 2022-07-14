import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

// IMPORTANT Remember to rename this template component (including the filename) when you use it!
// Rename: filename, line 12, line 16, line 21

// There are three re-usable components: BigHeader, SmallHeader, and ImageComp. Paragraphs and lists can be added normally.
// BigHeader and SmallHeader have one property: text
// ImageComp has one property: src. This automatically points to the /public/images directory so you should only put the filename of the image itself here.

export default _Project_Page;

function _Project_Page() {
    return (
      <>
        <HeroComp name = "_Project_" />
        <HomePageLogo />
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <p>For over a decade, Sunshine Action has had many types of volunteers, from primary students, youth, adults, lawyers, CEOs, etc… - donating mostly food and other goods, occasionally providing free hair-cut services.</p>
                <ul>
                    <li>The first multi-national corporation to have volunteered with the program was Bloomberg L.P. For a few years, they helped with distributing after their busy work days and Sunshine Action remains thankful to have had their support from the beginning.</li>
                    <li>CEOs joining this event include Mr. Neil Harvey from Credit Suisse and Ms. Ligia Torres from BNP Paribas.</li>
                    <li>Clifford Hart was the first Consul Gen. of U.S. who joined the program. </li>
                </ul>
                <p>Sunny learned something very important from him, a very unique leadership style. Normally, when heads or CEOs of corporations walked this program, they went in the front with him when guiding and explaining. Hart always walked at the back, overseeing the entire U.S. Consulate team like as a protector of his people.</p>
                <ul>
                    <li>Many U.S. Navy & Marines from different ships have joined this program.</li>
                </ul>
                <SmallHeader text = "Sunshine Ambassadors and the Street-Sleepers Program" />
                <p>During the major crisis in Hong Kong due to the Covid-19 outbreak, many Sunshine Ambassadors and students joined this program. They helped on a weekly basis by distributing essential food and anti-pandemic items.</p> 
                <p>Since the first year of the pandemic, a dedicated team of volunteers have been taking care of the street-sleepers every Tuesday & Wednesday. They drive around to several spots in Hong Kong and Kowloon side, even during the typhoon.</p> 
                <ImageComp src = "savethesea.jpeg" />
                <p>This is a test paragraph to demonstrate that content placed after the image is formatted nicely.</p>
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