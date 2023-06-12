import React from 'react';
import '../../../App.css';
import '../Project.css';

import HeroComp from '../../HeroComp';
import Footer from '../../Footer';
import HomePageLogo from '../../HomePageLogo';

export default UKBuildingProjectPage;

function UKBuildingProjectPage() {
    return (
        <>
            <HeroComp name="UK Building Project" />
            <HomePageLogo />
            <div className="projectBanner" style={{ background: 'rgb(82,97,147' }}>
                <div className="container">
                    <BigHeader text="Project Info" />
                    <p>This year, our summer interns have been planning a building project for Sunshine Action. They have researched and come up with designs for a portable shelter for the homeless. This project aims to provide a mobile shelter for those who experience homelessness. It will contain basic necessities such as blankets, food and water. During the COVID-19 pandemic, rough sleepers are more likely to be at risk as they have little means of protection from the virus. Building mobile shelters would alleviate some transmission amongst the homeless population.</p>
                    <p>Moreover, these shelters would protect the privacy and dignity of rough sleepers, who are faced with strong stigmas and are often associated with substance abuse. Occupying public areas may make them feel uncomfortable, leading to poor mental health. Providing shelters can offer them a safe space.</p>
                    <p>The main function of these shelters would be as an emergency measure for those who cannot afford or are struggling to find a home for a short period of time. We hope to incorporate regular charity or fundraising events to raise awareness of this issue and dispel some of the stigma surrounding homelessness.</p>
                    <ImageComp src="image003.jpg" />
                    <SmallHeader text="Research and Design" />
                    <p>Our interns have carried out extensive research into existing designs for similar mobile shelters. You can see the full design process in the PDF at the bottom. We have also researched planning requirements in the UK and hope to put this project into action over the next few months. We are looking for charities that may be interested in partnering with us to construct these shelters or to run them once they have been built.</p>
                    <ImageComp src="image028.jpg" />
                    <p>If you are a homelessness charity and you are interested in getting involved with this project, please contact sunshine@sunshine-action.org. We look forward to hearing from you!</p>
                    <iframe src="8 Structures Case Study Research.pdf" style={{ width: "100%", height: "720px" }}></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

function BigHeader(props) {
    return (
        <div className="p-4 text-dark rounded-3 bigHeader"><h1 className="mb-0">{props.text}</h1></div>
    )
}
function SmallHeader(props) {
    return (
        <><br /><br /><p className="smallHeader"><u>{props.text}</u></p></>
    )
}
function ImageComp(props) {
    return (
        <div className="imageComp my-5 d-flex justify-content-center w-100"><img className="mx-auto" src={"images/" + props.src} /></div>
    )
}