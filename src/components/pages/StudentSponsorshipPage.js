import React from 'react';
import '../../App.css';
import './Project.css';

import HeroComp from '../HeroComp';
import Footer from '../Footer';
import HomePageLogo from '../HomePageLogo';

export default StudentSponsorshipPage;

function StudentSponsorshipPage() {
    return (
      <>
        <HeroComp name = "Student Sponsorship" />
        <HomePageLogo/>
        <div className="projectBanner" style={{background: 'rgb(82,97,147'}}>
            <div className="container">
                <BigHeader text = "Sponsoring Low-Income Students Around the World" />
                <p>Since 2013, Sunshine Action is sponsoring students of low income/poor families to continue their education, all around the world. Most of the students are from single parent families, which lack the resources to support the child's education costs. Sunshine action visits the students periodically to ensure that the program reaches the ones who need it the most. The sponsorship program helps to pay for:</p>
                <ul>
                    <li>Students' annual tuition fees</li>
                    <li>School books and stationery</li>
                    <li>Uniforms</li>
                    <li>Students' transportations costs</li>
                    <li>Teacher's salaries</li>
                </ul>
                <ImageComp src = "StudentSponsorship1.jpg" />
                <p>Sunshine Action is currently sponsoring students in countries like Nepal, Vietnam, Cambodia, Kenya, Thailand and India. You can find out more about each of these below.</p>
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