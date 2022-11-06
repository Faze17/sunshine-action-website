import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default PlantPlanet;

function PlantPlanet() {
    return (
      <>
        <HeroComp name = "PLANT THE PLANET" />
        <HomePageLogo/>
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Project Info" />
                <li><b>Plant the Planet plants trees, flowers, and other plants in countries around the world to help combat climate change.</b></li>
                <li>To date, Sunshine Action has planted over 322,000 trees, plants, fruit trees and flowers in Hong Kong, Kenya, China, Sri Lanka, Mongolia, Thailand, Nepal, and India.</li>
                <li>Newly planted trees are sponsored by local farmers and schools. Sunshine Action plants new trees/plants on all charity trips outside of Hong Kong.</li>
                <li><b>In 2022, Sunshine Action is struggling to financially sustain all programs, including the Plant the Planet Program. Your contribution would mean a lot to us. <a href="/donate">Learn how to donate here.</a></b></li>
                <ImageComp src="plant-the-planet-1.jpg" />
                <BigHeader text = "History of Plant the Planet" />
                <p>Plant the Planet began in 2010 as a way of fighting climate change on Sunshine Action charity trips abroad. New trees were planted on charity trips to countries outside of Hong Kong. Approximately 280,000 of these trees are in Mongolia and China.</p>
                <p>Due to COVID-19 travel restrictions, Plant the Planet has been suspended since the beginning of the pandemic. However, once travel restrictions are lifted, the program will resume normal activities.</p>
                <ImageComp src="plant-the-planet-2.jpg" />
                <BigHeader text = "Why is Plant the Planet Important?" />
                <p>Did you know that an area of rainforest the size of a football field is being destroyed every second? Tropical forests cover 23% of the Earth’s land surface but are disappearing at a rate of 4.6 million hectares per year. Trees are crucial to absorbing carbon dioxide and producing the oxygen that helps sustain humanity. They reduced the greenhouse effect by shading our homes and office buildings, and help maintain the environment by preventing soil erosion, maintaining local rainfall patterns, and maintaining populations of plants, animals, and insects.</p>
                <p>Planting trees is one of the cheapest and most effective ways of drawing excess carbon dioxide out of the atmosphere. </p>
                <p>Fast Facts according to UN Environmental Program:</p>
                <li>Three-quarters of the world's people rely on wood as their main source of energy.</li>
                <li>On average, each American uses more than 600 pounds of paper and almost 200 board feet of timber per year</li>
                <li>A single mature tree can absorb carbon dioxide at a rate of 22.7 kg/year (48 lbs) and release enough oxygen back into the atmosphere to support 2 human beings.</li>
                <li>One acre of trees annually consumes the amount of carbon dioxide equivalent to that produced by driving an average car for 41,483km (26,000 miles). That same acre of trees also produces enough oxygen for 18 people to breathe for a year.</li>
                <ImageComp src="plant-the-planet-3.jpg" />
                <ImageComp src="plant-the-planet-4.jpg" alt="Plant the Planet 4" />
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